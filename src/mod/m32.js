/* Módulo 32 · Práctica en ARCA, paso a paso */
(function(){
/* Simulador de Comprobantes en línea: el alumno completa las pantallas y obtiene un CAE simulado */
const ESC = [
 {t:"Sos responsable inscripto (punto de venta 0003). Vendés 10 cajas de tornillos a Ferretería Norte SRL, responsable inscripta, CUIT 30-71234567-9. Precio neto total: $ 500.000. Alícuota 21%. Cobrás en 30 días.",
  tipo:"Factura A", concepto:"Productos", cond:"IVA Responsable Inscripto", neto:500000, iva:105000, total:605000,
  why:{tipo:"Entre dos responsables inscriptos corresponde factura A, con el IVA discriminado.",concepto:"Vendés cosas muebles: el concepto es Productos.",cond:"El cliente es una SRL inscripta en IVA.",iva:"IVA = neto × 21%.",total:"Total = neto + IVA."}},
 {t:"Sos monotributista (punto de venta 0001). Le das una clase particular de inglés a una persona que la paga como consumidora final. Importe: $ 40.000. Cobrás en el momento.",
  tipo:"Factura C", concepto:"Servicios", cond:"Consumidor Final", neto:40000, iva:0, total:40000,
  why:{tipo:"El monotributista siempre emite factura C, sin IVA discriminado.",concepto:"Una clase es una prestación de servicios.",cond:"Quien paga es una persona que no usa la clase para una actividad gravada.",iva:"La factura C no discrimina IVA: va 0.",total:"En la factura C el total es el importe cobrado."}},
 {t:"Sos responsable inscripto (punto de venta 0003). Vendés una heladera a un consumidor final. Precio neto: $ 800.000. Alícuota 21%.",
  tipo:"Factura B", concepto:"Productos", cond:"Consumidor Final", neto:800000, iva:168000, total:968000,
  why:{tipo:"Responsable inscripto a consumidor final: factura B. El IVA va incluido en el precio y se informa como IVA contenido (Ley 27.743).",concepto:"Una heladera es un producto.",cond:"El comprador es consumidor final.",iva:"IVA contenido = neto × 21%.",total:"Total = neto + IVA."}},
];
function facturador(el, done){
 let k=0;
 const draw=()=>{
  if(k>=ESC.length){ el.innerHTML=fbHTML(true,"¡Emitiste las tres facturas! Así es el circuito real en Comprobantes en línea.")+`<div class="row"><button class="btn ghost" data-act="again">Practicar de nuevo</button></div>`; $("[data-act=again]",el).onclick=()=>{k=0;draw();}; done(); return; }
  const S=ESC[k]; const sel=(n,opts)=>`<select data-f="${n}" class="inp"><option value="">Elegí…</option>${opts.map(o=>`<option>${o}</option>`).join("")}</select>`;
  el.innerHTML=`<p><span class="pill">Factura ${k+1} de ${ESC.length}</span></p><p><b>${S.t}</b></p>
   <div class="sim">
    <h4>1. Generar Comprobantes → Punto de venta y tipo</h4><label>Tipo de comprobante ${sel("tipo",["Factura A","Factura B","Factura C","Factura E"])}</label><div class="why" hidden data-w="tipo"></div>
    <h4>2. Datos de emisión</h4><label>Concepto ${sel("concepto",["Productos","Servicios","Productos y Servicios"])}</label><div class="why" hidden data-w="concepto"></div>
    <h4>3. Datos del receptor</h4><label>Condición frente al IVA ${sel("cond",["IVA Responsable Inscripto","Responsable Monotributo","IVA Sujeto Exento","Consumidor Final"])}</label><div class="why" hidden data-w="cond"></div>
    <h4>4. Ítems</h4><label>Importe neto <input data-f="neto" class="inp num" inputmode="decimal" placeholder="$"></label><div class="why" hidden data-w="neto"></div>
    <label>IVA <input data-f="iva" class="inp num" inputmode="decimal" placeholder="$"></label><div class="why" hidden data-w="iva"></div>
    <label>Importe total <input data-f="total" class="inp num" inputmode="decimal" placeholder="$"></label><div class="why" hidden data-w="total"></div>
   </div>
   <div class="row"><button class="btn" data-act="chk">Confirmar datos</button></div><div data-fb></div>`;
  $("[data-act=chk]",el).onclick=()=>{
   const v=n=>$(`[data-f="${n}"]`,el).value; let bad=0;
   [["tipo",S.tipo],["concepto",S.concepto],["cond",S.cond],["neto",S.neto],["iva",S.iva],["total",S.total]].forEach(([f,ans])=>{
    const w=$(`[data-w="${f}"]`,el); const got=v(f); const isN=typeof ans==="number"; const g=isN? Math.abs(parseNum(got)-ans)<0.5 : got===ans;
    if(g){ w.hidden=true; return; } bad++;
    w.hidden=false; w.innerHTML=helpHTML(`${got?`Pusiste <b>${esc(isN?fmt(parseNum(got)||0):got)}</b>. `:""}Corresponde <b>${isN?fmt(ans):ans}</b>.`, S.why[f]||(f==="neto"?"Es el precio sin IVA que dice el enunciado.":""));
   });
   if(bad){ $("[data-fb]",el).innerHTML=fbHTML(false,`ARCA rechazaría el comprobante: hay ${bad} dato${bad>1?"s":""} para corregir. Mirá la ayuda debajo de cada uno.`); return; }
   const cae=String(7+Math.floor(Math.random()*2))+String(Math.floor(Math.random()*1e13)).padStart(13,"0");
   $("[data-fb]",el).innerHTML=fbHTML(true,"Comprobante autorizado.")+`<div class="box fac"><b>${S.tipo}</b> · Punto de venta ${S.t.match(/punto de venta (\d+)/)[1]} · Nº 00000${101+k}<br>Receptor: ${S.cond}<br>Neto ${fmt(S.neto)} · IVA ${fmt(S.iva)} · <b>Total ${fmt(S.total)}</b><br><span class="src">CAE (simulado): ${cae} · Vence en 10 días. El CAE es el código que prueba que ARCA autorizó la factura.</span></div>`;
   const b=$("[data-act=chk]",el); b.textContent="Siguiente factura"; b.onclick=()=>{k++;draw();};
  };
 };
 draw();
}

CAMPUS.content[32] = {
lessons:[
 {lead:"Todo en ARCA empieza por la Clave Fiscal: es tu firma digital frente al fisco. Su nivel de seguridad define qué trámites podés hacer.",
  src:["arca"],
  cite:["ARCA, Ayuda de Clave Fiscal: Obtener clave fiscal (arca.gob.ar/clavefiscal/ayuda/obtener-clave-fiscal.asp)."],
  html:`<h3>Cómo se obtiene</h3><div class="tw"><table><thead><tr><th>Vía</th><th>Nivel</th><th>Qué necesitás</th></tr></thead><tbody>
  <tr><td><b>App de ARCA</b> (opción "Solicitar o recuperar clave fiscal")</td><td>3</td><td>Celular con cámara frontal e internet, DNI argentino en tarjeta y ser mayor de edad. Escaneás el código de barras del DNI y hacés los gestos que pide la app para validar tu identidad.</td></tr>
  <tr><td><b>Homebanking</b></td><td>2</td><td>Ingresar a tu banco y elegir la opción de pagos a ARCA. Sirve para algunos trámites: presentar DDJJ y pagos, consultar aportes, registrar personal de casas particulares.</td></tr>
  <tr><td><b>Presencial</b> en una dependencia de ARCA</td><td>3</td><td>Turno web previo, formulario 206 (Multinota) y DNI original con copia.</td></tr></tbody></table></div>
  <h3>Qué permite el nivel 3</h3><p>Inscribirse en impuestos, facturar, presentar declaraciones juradas, adherir planes de pago, cargar deducciones en SIRADIG y <b>delegar servicios</b> en otra persona, por ejemplo en tu contador. Para trabajar como contador o facturar, en la práctica necesitás nivel 3.</p>
  <h3>Cómo se ingresa</h3><ol><li>Entrás a arca.gob.ar y elegís <b>Ingresar con Clave Fiscal</b>.</li><li>Ponés tu CUIT o CUIL y la contraseña.</li><li>Ves la lista de <b>servicios habilitados</b>. Si falta uno, se agrega desde el Administrador de Relaciones (próxima lección).</li></ol>
  <h3>Reglas de seguridad</h3><ul><li>La clave es personal: <b>nunca</b> se comparte, ni siquiera con el contador. Para eso existe la delegación.</li><li>ARCA no pide la clave por correo, mensaje ni teléfono. Un pedido así es un intento de fraude.</li><li>Si la olvidaste, la recuperás desde la misma app.</li></ul>`,
  ex:[{type:"pick",title:"¿Qué vía usarías?",options:["App de ARCA","Homebanking","Presencial"],items:[["Querés nivel 3 desde tu casa y tenés DNI en tarjeta y celular con cámara","App de ARCA"],["Solo necesitás pagar un VEP y no tenés clave","Homebanking"],["Sos extranjero sin DNI argentino","Presencial","La app pide DNI argentino; sin él hay que ir con turno y documentación."]]},
   {type:"tf",items:[["Con nivel 3 se pueden delegar servicios en el contador.",true],["Está bien darle tu clave fiscal al contador para que te facture.",false,"La clave es personal. Se delega el servicio con el Administrador de Relaciones."],["ARCA puede pedirte la clave fiscal por correo electrónico.",false,"Nunca la pide: es un intento de fraude."],["La clave obtenida por homebanking es nivel 2.",true]]}]},
 {lead:"El Administrador de Relaciones de Clave Fiscal es el tablero donde se agregan servicios a tu clave y se autoriza a otras personas a operar en tu nombre.",
  src:["arca"],
  cite:["ARCA, Guía paso a paso: ¿Cómo delego servicios para que los utilicen en mi nombre? ¿Cómo se acepta la delegación?"],
  html:`<h3>Adherir un servicio a tu propia clave</h3><ol><li>Ingresás con tu Clave Fiscal y abrís <b>Administrador de Relaciones de Clave Fiscal</b>.</li><li>Tocás <b>Adherir Servicio</b>.</li><li>Elegís el organismo <b>ARCA</b> y luego <b>Servicios Interactivos</b>.</li><li>Buscás el servicio (por ejemplo, <b>Comprobantes en línea</b>) y confirmás.</li><li>Salís y volvés a ingresar: recién ahí aparece en tu lista.</li></ol>
  <h3>Delegar un servicio en tu contador</h3><ol><li>En el Administrador de Relaciones tocás <b>Nueva Relación</b>.</li><li>En <b>Servicio</b>, tocás <b>Buscar</b>, elegís ARCA y Servicios interactivos, y seleccionás el servicio (por ejemplo, Comprobantes en línea o Mis Comprobantes).</li><li>En <b>Representante</b>, tocás <b>Buscar</b> e ingresás el CUIT del contador.</li><li>Verificás que el CUIT corresponda a esa persona y tocás <b>Confirmar</b>.</li><li>ARCA emite el <b>formulario F. 3283/E</b>, que es la constancia de la delegación.</li></ol>
  <h3>El contador acepta</h3><p>El representante entra con <b>su propia</b> clave fiscal al servicio <b>Aceptación de Designación</b> y acepta. Desde ese momento, cuando ingresa a ese servicio, puede elegir operar en nombre de su cliente.</p>
  <h3>Revocar</h3><p>Desde el mismo Administrador de Relaciones, con <b>Consultar</b>, ves todas tus relaciones vigentes y podés revocar las que ya no correspondan, por ejemplo al cambiar de contador. Revisarlo periódicamente es una buena práctica de seguridad.</p>`,
  ex:[{type:"order",title:"Ordená los pasos para delegar Comprobantes en línea en tu contador",items:["Ingresar con Clave Fiscal al Administrador de Relaciones","Tocar Nueva Relación","Buscar el servicio Comprobantes en línea","Buscar al representante por su CUIT","Confirmar y obtener el F. 3283/E","El contador entra a Aceptación de Designación y acepta"]},
   {type:"tf",items:[["Después de adherir un servicio hay que salir y volver a entrar para verlo.",true],["El contador acepta la delegación con la clave fiscal del cliente.",false,"La acepta con su propia clave, en Aceptación de Designación."],["Cuando cambiás de contador conviene revocar las relaciones del anterior.",true]]}]},
 {lead:"El Domicilio Fiscal Electrónico es el buzón oficial donde ARCA te notifica. Lo que llega ahí vale aunque no lo leas.",
  src:["arca","lpt"],
  cite:["ARCA, Domicilio Fiscal Electrónico: servicio con Clave Fiscal (arca.gob.ar/DomicilioFiscalElectronico).","Ley 11.683, art. 3.1."],
  html:`<h3>Cómo se constituye</h3><ol><li>Ingresás con Clave Fiscal al servicio <b>Domicilio Fiscal Electrónico</b>.</li><li>Cargás una <b>dirección de correo electrónico</b> y un <b>número de celular</b>.</li><li>Confirmás. Desde entonces, ARCA te avisa por correo cuando hay una comunicación nueva.</li></ol>
  <h3>Por qué es tan importante</h3><p>Las comunicaciones que llegan al domicilio fiscal electrónico están certificadas por ARCA y <b>se dan por notificadas</b>. Además, cada semana los mensajes se consideran leídos y aceptados aunque no hayas entrado a verlos. Una intimación, una vista de una determinación de oficio o un requerimiento empiezan a correr desde ese momento, con plazos cortos (por ejemplo, 15 días hábiles para contestar una vista).</p>
  <h3>Rutina del contador</h3><ul><li>Revisar el domicilio fiscal electrónico de cada cliente al menos una vez por semana.</li><li>Registrar cada comunicación con su fecha de notificación y su plazo de respuesta.</li><li>Avisar al cliente y responder dentro del plazo.</li></ul>`,
  ex:[{type:"tf",items:[["Para constituir el domicilio fiscal electrónico hay que cargar correo y celular.",true],["Si no abrís una comunicación, no se considera notificada.",false,"Igual se tiene por notificada: los mensajes se consideran leídos semanalmente."],["Conviene revisar el domicilio fiscal electrónico de cada cliente todas las semanas.",true]]},
   {type:"num",items:[{q:"Una vista notificada te da 15 días hábiles para contestar. Si se notificó un lunes 2 y no hay feriados, ¿qué día del mes vence? (contando solo lunes a viernes, desde el martes 3)",a:23,tol:0,hint:"Tres semanas hábiles completas desde el martes 3 terminan el lunes 23.",ex:"Del martes 3 al lunes 23 hay 15 días hábiles."}]}]},
 {lead:"Facturar es la tarea más frecuente en ARCA. Con Comprobantes en línea se crea un punto de venta una vez y después cada factura lleva cuatro pantallas.",
  src:["arca"],
  cite:["ARCA, Guía paso a paso: ¿Cómo emito factura electrónica y punto de venta?","ARCA, RG 4291 (factura electrónica) y RG 5614/2024 (transparencia fiscal)."],
  html:`<h3>Una sola vez: el punto de venta</h3><ol><li>Adherís el servicio <b>Comprobantes en línea</b> (lección 2).</li><li>Creás el punto de venta desde <b>Administración de Puntos de Venta y Domicilios</b> → <b>A/B/M de Puntos de Venta</b> (o desde Comprobantes en línea → Datos adicionales → Puntos de venta).</li><li>Cargás número, nombre de fantasía, domicilio ya declarado en ARCA y la modalidad <b>Comprobantes en línea</b>. Un punto de venta creado para web services no aparece en el facturador web, y al revés.</li></ol>
  <h3>Cada factura</h3><ol><li><b>Generar Comprobantes:</b> elegís el punto de venta y el tipo (A, B, C, E…).</li><li><b>Datos de emisión:</b> fecha, concepto (Productos, Servicios o Productos y Servicios) y moneda. Si son servicios, también el período facturado y el vencimiento del pago.</li><li><b>Datos del receptor:</b> condición frente al IVA, CUIT/CUIL/DNI, nombre o razón social, domicilio y condición de venta (contado, cuenta corriente, tarjeta…).</li><li><b>Ítems:</b> descripción, cantidad, precio unitario y alícuota de IVA si corresponde.</li><li><b>Confirmar Datos:</b> ARCA asigna el número de comprobante y el <b>CAE</b> (código de autorización electrónico, 14 dígitos) con su vencimiento. Descargás el PDF con <b>Imprimir</b>.</li></ol>
  <h3>Errores frecuentes</h3><ul><li>Elegir el tipo equivocado (por ejemplo, B a un responsable inscripto). Se corrige con una <b>nota de crédito</b> del mismo tipo y una factura nueva: una factura con CAE no se borra.</li><li>Poner concepto Productos cuando es un servicio: cambia el momento del hecho imponible y los datos que pide.</li><li>Facturar desde un punto de venta con un domicilio que no es el de la actividad.</li></ul>
  <p>Practicá abajo con el simulador. Recorre las mismas pantallas y te dice qué corregir antes de "autorizar" la factura.</p>`,
  ex:[{type:"custom",title:"Simulador de Comprobantes en línea",render:facturador},
   {type:"order",title:"Ordená las pantallas de una factura",items:["Generar Comprobantes: punto de venta y tipo","Datos de emisión","Datos del receptor","Ítems","Confirmar Datos y obtener el CAE"]},
   {type:"tf",items:[["Una factura con CAE mal emitida se anula con una nota de crédito.",true],["El CAE prueba que ARCA autorizó el comprobante.",true],["Un punto de venta de web services sirve también para el facturador web.",false,"Cada modalidad tiene sus propios puntos de venta."]]}]},
 {lead:"Mis Comprobantes reúne todas las facturas electrónicas que emitiste y recibiste. Es la herramienta básica de control del contador.",
  src:["arca"],
  cite:["ARCA, servicio Mis Comprobantes.","ARCA, RG 4597 (Libro IVA Digital)."],
  html:`<h3>Qué muestra</h3><p>En <b>Mis Comprobantes</b> elegís <b>Emitidos</b> o <b>Recibidos</b>, un rango de fechas y, si querés, un tipo de comprobante o una contraparte. Podés ver cada factura y <b>exportar</b> el listado a una planilla.</p>
  <h3>Para qué lo usa el contador</h3><div class="tw"><table><thead><tr><th>Control</th><th>Cómo</th></tr></thead><tbody>
  <tr><td>Que todas las ventas estén en la contabilidad</td><td>Comparar los emitidos con el libro IVA Ventas</td></tr>
  <tr><td>Que no falten compras (y su crédito fiscal)</td><td>Comparar los recibidos con el libro IVA Compras</td></tr>
  <tr><td>Que no haya facturas que el cliente no reconoce</td><td>Revisar los recibidos de proveedores desconocidos: pueden ser errores o un uso indebido del CUIT</td></tr>
  <tr><td>Topes del monotributo</td><td>Sumar los emitidos de los últimos 12 meses antes de recategorizar</td></tr></tbody></table></div>
  <h3>Con el Libro IVA Digital</h3><p>Los comprobantes electrónicos aparecen precargados en el <b>Portal IVA</b>. El contador los importa, agrega lo que falta (por ejemplo, comprobantes no electrónicos o importaciones), controla y genera la declaración jurada mensual.</p>`,
  ex:[{type:"num",items:[{q:"Mis Comprobantes muestra ventas emitidas por $ 12.400.000 en el mes y el libro IVA Ventas tiene $ 11.900.000. ¿Diferencia a investigar?",a:500000,u:"$"},{q:"Un monotributista emitió en los últimos 12 meses: $ 1.200.000 por mes durante 7 meses y $ 1.500.000 por mes durante 5. ¿Ingresos brutos a considerar para recategorizar?",a:15900000,u:"$"}]},
   {type:"pick",title:"¿Emitidos o recibidos?",options:["Emitidos","Recibidos"],items:[["Controlar el libro IVA Compras","Recibidos"],["Calcular los ingresos para recategorizar el monotributo","Emitidos"],["Detectar facturas de proveedores que el cliente no conoce","Recibidos"]]}]},
 {lead:"Casi todos los impuestos se pagan con un Volante Electrónico de Pago (VEP). Se genera en ARCA y se paga desde el banco.",
  src:["arca"],
  cite:["Argentina.gob.ar, Obtener Volante Electrónico de Pagos (VEP).","ARCA, Cómo pagar impuestos."],
  html:`<h3>Generar un VEP</h3><ol><li>Ingresás con Clave Fiscal al servicio <b>Presentación de DDJJ y Pagos</b> y aceptás la pantalla inicial.</li><li>En el menú de la izquierda, en <b>Pagos</b>, elegís <b>Nuevo VEP</b>.</li><li>Seleccionás el impuesto, el concepto (por ejemplo, impuesto determinado o anticipo), el período y el importe, y vas tocando <b>Siguiente</b>.</li><li>Elegís la <b>entidad de pago</b>: el banco o red desde donde vas a pagar.</li><li>ARCA genera el VEP. Desde ahí podés generar otro para otra obligación.</li><li>Entrás al homebanking, buscás los VEP pendientes, pagás y guardás el comprobante.</li></ol>
  <h3>Datos clave</h3><ul><li>El VEP vale <b>30 días corridos</b> desde el día siguiente a su generación.</li><li>Se puede generar a cualquier hora, todos los días, y no tiene costo.</li><li>El pago es en término si el comprobante muestra fecha y hora anteriores al corte del banco el día del vencimiento.</li><li>Si el importe supera tu límite de transferencia, hay que pedirle al banco que lo amplíe.</li></ul>
  <h3>Después de pagar</h3><p>En el <b>Sistema de Cuentas Tributarias</b> verificás que el pago se imputó al impuesto y al período correctos. Si se imputó mal, se corrige desde ese mismo servicio.</p>`,
  ex:[{type:"order",title:"Ordená los pasos para pagar con VEP",items:["Ingresar a Presentación de DDJJ y Pagos","Elegir Nuevo VEP","Completar impuesto, concepto, período e importe","Elegir la entidad de pago","Pagar desde el homebanking","Verificar la imputación en el Sistema de Cuentas Tributarias"]},
   {type:"tf",items:[["Un VEP generado hoy se puede pagar hasta 30 días corridos después.",true],["Generar un VEP tiene un costo.",false,"Es gratuito."],["El Sistema de Cuentas Tributarias sirve para controlar dónde se imputó un pago.",true]]}]},
 {lead:"El monotributista tiene su propio portal en ARCA para pagar, recategorizarse y obtener su credencial.",
  src:["arca","mono"],
  cite:["ARCA, Monotributo: recategorización.","Anexo de la Ley 24.977, régimen simplificado."],
  html:`<h3>Recategorizarse paso a paso</h3><ol><li>Ingresás con Clave Fiscal al servicio <b>Monotributo</b>.</li><li>Elegís <b>Recategorizarme</b>.</li><li>Revisás la facturación de los últimos 12 meses que muestra el sistema.</li><li>Confirmás o corregís los demás parámetros: <b>energía eléctrica consumida</b>, <b>alquileres devengados</b> y <b>superficie afectada</b>.</li><li>Verificás la categoría que resulta y confirmás.</li><li>El sistema emite el <b>formulario F. 184</b> y la nueva <b>credencial de pago</b>.</li></ol>
  <h3>Cuándo</h3><p>Dos veces por año. En 2026 los vencimientos fueron hasta el <b>5 de febrero</b> (con datos de enero a diciembre del año anterior) y hasta el <b>5 de agosto</b> (con datos de julio a junio). La nueva cuota rige desde el mes siguiente. Si no cambiaste de categoría, no hace falta hacer nada. Las fechas se confirman cada año en la web de ARCA.</p>
  <h3>Pagar la cuota</h3><p>Desde el mismo portal ves la cuota del mes y podés pagarla con VEP, adherir débito automático o pagar con los medios electrónicos que habilita ARCA. Conviene mirar también el <b>estado de cuenta</b> del portal para detectar meses impagos.</p>
  <h3>Antes de recategorizar, el contador controla</h3><ul><li>Que los ingresos de Mis Comprobantes coincidan con lo que se declara.</li><li>Que no se haya superado el tope de la categoría máxima, porque eso implica exclusión.</li><li>Que los gastos y consumos del cliente sean compatibles con sus ingresos.</li></ul>`,
  ex:[{type:"order",title:"Ordená la recategorización",items:["Ingresar al servicio Monotributo","Elegir Recategorizarme","Revisar la facturación de los últimos 12 meses","Confirmar energía, alquileres y superficie","Verificar la categoría y confirmar","Descargar el F. 184 y la nueva credencial"]},
   {type:"tf",items:[["Si los parámetros no cambiaron de categoría, no hace falta recategorizarse.",true],["La nueva cuota rige desde el mismo mes del trámite.",false,"Rige desde el mes siguiente."],["Superar el tope de la categoría máxima lleva a la exclusión del régimen.",true]]}]},
 {lead:"Un empleador usa tres servicios de ARCA todos los meses: el alta del personal, el Libro de Sueldos Digital con el F. 931 y el SIRADIG de sus empleados.",
  src:["arca","lct","modlab"],
  cite:["ARCA, Simplificación Registral.","ARCA, Libro de Sueldos Digital y Declaración en línea (F. 931).","ARCA, SIRADIG Trabajador."],
  html:`<h3>Alta del trabajador: Simplificación Registral</h3><ol><li>Antes de que la persona empiece a trabajar, ingresás a <b>Simplificación Registral</b> y elegís <b>Registro de Relaciones Laborales</b>.</li><li>Cargás CUIL, fecha de inicio, modalidad de contrato, obra social, convenio, categoría y remuneración.</li><li>Se emite la <b>constancia de alta</b>, que se entrega al trabajador. Con la Ley 27.802, ese registro de ARCA es el registro único de la relación laboral.</li></ol>
  <h3>Cada mes: Libro de Sueldos Digital y F. 931</h3><ol><li>En <b>Libro de Sueldos Digital</b> cargás o importás la liquidación de cada empleado, con los conceptos asociados a la seguridad social.</li><li>Desde ahí generás la declaración jurada <b>F. 931</b> de aportes y contribuciones.</li><li>La presentás y pagás con VEP antes del vencimiento.</li></ol>
  <h3>Ganancias de los empleados: SIRADIG</h3><p>Cada empleado informa en <b>SIRADIG – Trabajador</b> sus cargas de familia y deducciones (alquiler, prepaga, intereses hipotecarios) y elige a qué empleador le envía el formulario. El empleador lo consulta en <b>SIRADIG – Empleador</b> para calcular la retención mensual.</p>
  <h3>Baja</h3><p>Al terminar la relación, se registra la baja en Simplificación Registral con la fecha y el motivo. Los certificados del art. 80 de la LCT pueden ponerse a disposición a través de ARCA.</p>`,
  ex:[{type:"pick",title:"¿Qué servicio de ARCA usás?",options:["Simplificación Registral","Libro de Sueldos Digital","SIRADIG","Presentación de DDJJ y Pagos"],items:[["Dar de alta a un empleado que empieza el lunes","Simplificación Registral"],["Cargar la liquidación de sueldos del mes","Libro de Sueldos Digital"],["Ver las deducciones de Ganancias que informó un empleado","SIRADIG"],["Generar el VEP para pagar el F. 931","Presentación de DDJJ y Pagos"],["Registrar la baja de un trabajador despedido","Simplificación Registral"]]},
   {type:"tf",items:[["El alta del trabajador debe hacerse antes de que empiece a trabajar.",true],["El F. 931 se genera desde el Libro de Sueldos Digital.",true],["Las deducciones de Ganancias del empleado las carga el empleador por su cuenta.",false,"Las informa el empleado en SIRADIG; el empleador las consulta."]]}]},
],
eval:[
 {q:"La clave fiscal que se obtiene con la app de ARCA escaneando el DNI es de nivel…",o:["1","2","3","4"],a:2},
 {q:"Para que tu contador opere en tu nombre, lo correcto es…",o:["Darle tu clave fiscal","Delegarle el servicio en el Administrador de Relaciones","Pedirle a ARCA una clave compartida","No se puede"],a:1},
 {q:"La constancia de una delegación de servicio es el formulario…",o:["F. 931","F. 3283/E","F. 184","F. 572"],a:1},
 {q:"El representante acepta una delegación en el servicio…",o:["Aceptación de Designación","Mis Comprobantes","SIRADIG","Monotributo"],a:0},
 {q:"Para constituir el Domicilio Fiscal Electrónico hay que cargar…",o:["Correo electrónico y celular","Solo un domicilio postal","El CBU","Nada, es automático"],a:0},
 {q:"Una comunicación al Domicilio Fiscal Electrónico que no abriste…",o:["No vale","Se considera notificada igual","Vale solo si la imprimís","Vence a los 6 meses"],a:1},
 {q:"El código que prueba que ARCA autorizó una factura electrónica es el…",o:["CUIT","CAE","VEP","CBU"],a:1},
 {q:"Una factura con CAE emitida con datos equivocados se corrige con…",o:["Borrándola","Una nota de crédito y una factura nueva","Un VEP","Una nota de débito siempre"],a:1},
 {q:"Para comparar las compras del cliente con el libro IVA Compras se usa…",o:["Mis Comprobantes, recibidos","Mis Comprobantes, emitidos","SIRADIG","Simplificación Registral"],a:0},
 {q:"Un VEP se genera en el servicio…",o:["Presentación de DDJJ y Pagos","Comprobantes en línea","Domicilio Fiscal Electrónico","Mis Comprobantes"],a:0},
 {q:"El VEP tiene una validez de…",o:["24 horas","5 días hábiles","30 días corridos","1 año"],a:2},
 {q:"Al recategorizarse, el monotributista obtiene el formulario…",o:["F. 184","F. 931","F. 206","F. 3283/E"],a:0},
 {q:"El alta de un empleado se registra en…",o:["SIRADIG","Simplificación Registral","Mis Comprobantes","Portal IVA"],a:1},
 {q:"El F. 931 se genera desde…",o:["El Libro de Sueldos Digital","Comprobantes en línea","El Portal IVA","Monotributo"],a:0},
]};
})();
