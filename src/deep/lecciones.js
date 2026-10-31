/* Lecciones de profundización agregadas a las materias troncales.
   Se agregan al final de cada módulo para no alterar el progreso guardado. */
(function(){
const add = (n, title, L)=>{ CAMPUS.modules.find(m=>m.n===n).l.push(title); CAMPUS.content[n].lessons.push(L); };

add(9, "Documentos y valores: cheques, ECHEQ y pagarés", {
 lead:"Buena parte de los cobros y pagos de una empresa no son en efectivo ni por transferencia, sino con documentos que se cobran más adelante. Cada uno tiene su tratamiento contable.",
 src:["ccyc","bcra"],
 cite:["Ley 24.452 de Cheques.","Decreto-Ley 5965/63 (letra de cambio y pagaré).","BCRA, normativa sobre cheques electrónicos (ECHEQ)."],
 html:`<h3>Los documentos más usados</h3><div class="tw"><table><thead><tr><th>Documento</th><th>Qué es</th><th>Dato clave</th></tr></thead><tbody>
 <tr><td><b>Cheque común</b></td><td>Orden de pago a la vista contra un banco.</td><td>Se presenta dentro de los 30 días de su fecha si es del país (Ley 24.452, art. 25).</td></tr>
 <tr><td><b>Cheque de pago diferido</b></td><td>Orden de pago a una fecha futura.</td><td>Hasta 360 días desde su emisión (art. 54).</td></tr>
 <tr><td><b>ECHEQ</b></td><td>Cheque electrónico, común o diferido, que se emite, endosa y deposita desde el home banking.</td><td>Mismas reglas de fondo, sin papel.</td></tr>
 <tr><td><b>Pagaré</b></td><td>Promesa de pago del propio deudor.</td><td>Título valor regido por el Decreto-Ley 5965/63.</td></tr></tbody></table></div>
 <h3>Cómo se registran</h3><ul>
 <li>Un cheque al día recibido de un cliente se registra en <b>Valores a depositar</b> (es casi efectivo). Al depositarlo pasa a Banco.</li>
 <li>Un cheque diferido recibido es un crédito: <b>Documentos a cobrar</b> o <b>Valores diferidos a depositar</b>, según el plan de cuentas.</li>
 <li>Un cheque diferido emitido es una deuda: <b>Documentos a pagar</b> (o Cheques diferidos a pagar) hasta que el banco lo debita.</li>
 <li>Si el documento incluye intereses, se separan y se devengan mes a mes (Módulo 13).</li></ul>
 <h3>Descontar y endosar</h3><p>La empresa puede <b>endosar</b> un cheque recibido para pagar a un proveedor, o <b>descontarlo</b> en un banco o en el mercado de capitales para cobrarlo antes. En el descuento recibe menos que el valor nominal: la diferencia es un gasto financiero (intereses y comisiones), y mientras el cheque no se cobre la empresa sigue respondiendo si el librador no paga.</p>
 <div class="note"><b>Impuesto a los débitos y créditos.</b> Los movimientos en cuentas bancarias pagan el impuesto de la Ley 25.413. Una parte puede computarse a cuenta de Ganancias según el tipo de contribuyente: verificá el porcentaje vigente en ARCA.</div>`,
 ex:[{type:"asiento",accounts:["Banco Nación c/c","Valores a depositar","Documentos a cobrar","Deudores por ventas","Proveedores","Documentos a pagar","Intereses perdidos"],entries:[
   {t:"Un cliente cancela su deuda de $ 500.000 con un cheque al día.",e:[["Valores a depositar",500000,0],["Deudores por ventas",0,500000]]},
   {t:"Se deposita el cheque.",e:[["Banco Nación c/c",500000,0],["Valores a depositar",0,500000]]},
   {t:"Otro cliente entrega un ECHEQ diferido a 60 días por $ 300.000 para cancelar su deuda.",e:[["Documentos a cobrar",300000,0],["Deudores por ventas",0,300000]]},
   {t:"Se descuenta ese ECHEQ en el banco; acreditan $ 285.000.",e:[["Banco Nación c/c",285000,0],["Intereses perdidos",15000,0],["Documentos a cobrar",0,300000]]},
   {t:"Se paga a un proveedor $ 400.000 con un cheque de pago diferido propio a 30 días.",e:[["Proveedores",400000,0],["Documentos a pagar",0,400000]]}]},
  {type:"tf",items:[["Un cheque de pago diferido puede emitirse a 2 años",false,"El plazo máximo es de 360 días."],["El ECHEQ es un cheque electrónico con las mismas reglas de fondo que el de papel",true],["Al descontar un cheque, la diferencia con el valor nominal es un gasto financiero",true]]}]});

add(13, "Inversiones y participaciones en otras sociedades", {
 lead:"Una empresa puede invertir su dinero en plazos fijos, bonos o acciones. Cómo se miden depende de la intención y de la influencia que la inversión le da sobre la otra sociedad.",
 src:["rt54","facpce","cnv"],
 cite:["Fowler Newton, E., Contabilidad Superior, capítulos sobre inversiones permanentes."],
 html:`<h3>Inversiones temporarias</h3><p>Son las que se mantienen para obtener una renta o una diferencia de precio en el corto plazo: plazos fijos, fondos comunes de inversión, títulos públicos o acciones con cotización. Al cierre:</p><ul>
 <li><b>Plazo fijo:</b> capital más los intereses devengados hasta el cierre.</li>
 <li><b>Títulos y acciones con cotización:</b> a su valor neto de realización (cotización menos gastos de venta). La diferencia con la medición anterior es un resultado.</li>
 <li><b>Cuotapartes de fondos comunes:</b> al valor de la cuotaparte al cierre.</li></ul>
 <h3>Participaciones permanentes</h3><p>Cuando una sociedad compra acciones de otra para quedarse con ellas, lo que importa es el grado de influencia:</p>
 <div class="tw"><table><thead><tr><th>Situación</th><th>Referencia habitual</th><th>Medición</th></tr></thead><tbody>
 <tr><td>Sin influencia significativa</td><td>Menos del 20% de los votos</td><td>Costo o valor razonable, con el límite del valor recuperable</td></tr>
 <tr><td>Influencia significativa</td><td>20% o más de los votos, o representación en el directorio</td><td>Valor patrimonial proporcional (VPP)</td></tr>
 <tr><td>Control</td><td>Más del 50% de los votos</td><td>VPP en los estados individuales y, además, estados consolidados</td></tr></tbody></table></div>
 <h3>El método del VPP</h3><p>La inversión se mide como el porcentaje de participación sobre el patrimonio neto de la emisora. Cada año se reconoce la parte del resultado de la emisora como resultado propio, y los dividendos cobrados reducen la inversión (no son ganancia, porque ya se reconocieron al devengarse el resultado).</p>
 <div class="formula">Inversión = % de participación × patrimonio neto de la emisora</div>
 <p>Si se pagó más que la proporción del patrimonio, la diferencia puede corresponder a una <b>llave de negocio</b>, que se trata según la norma aplicable.</p>
 <div class="note"><b>Fuentes.</b> Estos criterios venían de la RT 21 y hoy se encuentran en la normativa vigente de la FACPCE. Para entes que aplican NIIF rigen la NIC 28 y la NIIF 10. Antes de un caso real, verificá el texto ordenado vigente.</div>`,
 ex:[{type:"num",title:"VPP",items:[
   {q:"Alfa SA compra el 30% de Beta SA, cuyo patrimonio neto es $ 10.000.000. ¿Cuánto vale la inversión por VPP?",a:3000000,u:"$"},
   {q:"Beta gana $ 2.000.000 en el año. ¿Qué resultado reconoce Alfa?",a:600000,u:"$"},
   {q:"Beta distribuye dividendos por $ 1.000.000. ¿Cuánto cobra Alfa?",a:300000,u:"$"},
   {q:"¿Cuánto vale la inversión después del resultado y los dividendos?",a:3300000,u:"$",ex:"3.000.000 + 600.000 − 300.000."}]},
  {type:"pick",title:"¿Cómo se mide?",options:["VNR o cotización","VPP","VPP y consolidación","Capital más intereses devengados"],items:[["Plazo fijo a 30 días","Capital más intereses devengados"],["Acciones con cotización compradas para vender en semanas","VNR o cotización"],["Participación del 35% con un director en la emisora","VPP"],["Participación del 70% en una controlada","VPP y consolidación"]]}]});

add(15, "Cambios de criterio, errores y hechos posteriores", {
 lead:"Los estados contables de un año pueden verse afectados por decisiones o hechos de otros años. La norma dice cómo corregirlos sin distorsionar la comparación.",
 src:["rt54","facpce"],
 cite:["Fowler Newton, E., Contabilidad Superior, capítulos sobre ajustes de ejercicios anteriores."],
 html:`<h3>Ajustes de resultados de ejercicios anteriores (AREA)</h3><p>Cuando se descubre un <b>error</b> en estados ya emitidos, o se hace un <b>cambio de criterio contable</b> (por ejemplo, de un método de medición a otro), el efecto que corresponde a años anteriores no pasa por el resultado del año. Se registra directamente en <b>Resultados no asignados</b>, como ajuste del saldo inicial, y se reexpresan las cifras comparativas.</p>
 <div class="note"><b>Lo que no es un AREA.</b> Un cambio en una <b>estimación</b> (la vida útil de un bien, el porcentaje de incobrables) no es un error: se aplica hacia adelante, en el ejercicio del cambio y los siguientes.</div>
 <h3>Hechos posteriores al cierre</h3><p>Son los que ocurren entre la fecha de cierre y la fecha de emisión de los estados:</p><ul>
 <li><b>Los que dan evidencia sobre situaciones que ya existían al cierre</b> se ajustan. Ejemplo: en febrero quiebra un cliente que ya tenía problemas al 31/12. Hay que ajustar la previsión.</li>
 <li><b>Los que muestran situaciones nuevas</b> no se ajustan, pero se informan en notas si son significativos. Ejemplo: un incendio en marzo destruye el depósito.</li></ul>
 <h3>Empresa en marcha</h3><p>Si después del cierre la dirección decide liquidar la empresa o no tiene alternativa realista, los estados no se preparan sobre la base de empresa en marcha y hay que revelarlo.</p>`,
 ex:[{type:"pick",title:"¿Qué tratamiento corresponde?",options:["AREA (contra Resultados no asignados)","Hacia adelante (cambio de estimación)","Ajustar los estados del año","Solo informar en notas"],items:[
   ["Se descubre que el año pasado no se registró una factura de compra","AREA (contra Resultados no asignados)"],
   ["Se revisa la vida útil de una máquina de 10 a 8 años","Hacia adelante (cambio de estimación)"],
   ["En enero se cobra solo el 40% de un crédito que al cierre ya estaba en gestión judicial","Ajustar los estados del año"],
   ["En marzo, antes de emitir los estados, un incendio destruye el depósito","Solo informar en notas"],
   ["Se cambia el método de medición de inventarios para mejorar la información","AREA (contra Resultados no asignados)"]]},
  {type:"num",items:[{q:"Una amortización de $ 120.000 del año anterior no se registró. Si se corrige este año, ¿cuánto se debita en Resultados no asignados?",a:120000,u:"$"}]}]});

add(17, "Costeo basado en actividades (ABC)", {
 lead:"Repartir los costos indirectos con una sola base, como las horas de mano de obra, distorsiona el costo cuando los productos usan los recursos de forma muy distinta. El costeo ABC asigna esos costos por actividades.",
 cite:["Horngren, C., Datar, S. y Rajan, M., Contabilidad de costos, capítulo sobre costeo basado en actividades.","Kaplan, R. y Cooper, R., Coste y efecto, Gestión 2000."],
 html:`<h3>La idea</h3><p>Los productos no consumen costos indirectos directamente: consumen <b>actividades</b> (preparar máquinas, inspeccionar, mover materiales), y las actividades consumen recursos. ABC sigue esa cadena en dos etapas:</p><ol>
 <li>Se agrupan los costos indirectos por actividad.</li><li>Se elige un <b>generador de costo</b> (cost driver) para cada actividad y se calcula una tasa.</li><li>Cada producto recibe costo según cuántas unidades del generador usó.</li></ol>
 <div class="formula">Tasa de la actividad = costo de la actividad / cantidad total del generador</div>
 <h3>Ejemplo</h3><div class="tw"><table><thead><tr><th>Actividad</th><th class="r">Costo</th><th>Generador</th><th class="r">Total</th></tr></thead><tbody>
 <tr><td>Preparación de máquinas</td><td class="r mono">400.000</td><td>Preparaciones</td><td class="r mono">40</td></tr>
 <tr><td>Control de calidad</td><td class="r mono">300.000</td><td>Inspecciones</td><td class="r mono">100</td></tr></tbody></table></div>
 <p>El producto A (lotes chicos) usa 30 preparaciones y 60 inspecciones; el B (lotes grandes), 10 preparaciones y 40 inspecciones. Con una sola base de horas, B, que usa más horas, cargaría con la mayor parte. Con ABC se ve que A es el que consume la mayoría de las actividades.</p>
 <h3>Ventajas y límites</h3><ul><li>Mejora el costo de productos diversos y ayuda a fijar precios y eliminar actividades que no agregan valor.</li><li>Es más caro de implementar y mantener, y sigue habiendo costos difíciles de asignar.</li></ul>`,
 ex:[{type:"num",items:[
   {q:"Tasa por preparación",a:10000,u:"$"},{q:"Tasa por inspección",a:3000,u:"$"},
   {q:"Costo indirecto asignado a A",a:480000,u:"$",ex:"30 × 10.000 + 60 × 3.000."},
   {q:"Costo indirecto asignado a B",a:220000,u:"$"}]},
  {type:"pick",title:"Elegí el generador de costo",options:["Cantidad de preparaciones","Cantidad de pedidos de compra","Horas máquina","Cantidad de envíos"],items:[["Configurar la máquina para un nuevo lote","Cantidad de preparaciones"],["Gestionar compras a proveedores","Cantidad de pedidos de compra"],["Energía de las máquinas","Horas máquina"],["Despacho de productos a clientes","Cantidad de envíos"]]}]});

add(20, "Régimen penal tributario e Inocencia Fiscal", {
 lead:"Por debajo de ciertos montos, no pagar un impuesto es una infracción con multa. Por encima, y con engaño, es un delito. En 2026 la Ley de Inocencia Fiscal cambió buena parte de esas reglas.",
 src:["rpt","inoc","inoc2","lpt"],
 html:`<h3>Los delitos principales (Título IX, Ley 27.430)</h3><div class="tw"><table><thead><tr><th>Delito</th><th>Conducta</th><th class="r">Monto desde la Ley 27.799</th></tr></thead><tbody>
 <tr><td>Evasión simple (art. 1)</td><td>Evadir con declaraciones engañosas, ocultación maliciosa u otro ardid</td><td class="r">más de $ 100.000.000 por tributo y ejercicio</td></tr>
 <tr><td>Evasión agravada (art. 2)</td><td>Evasión por montos mayores o con agravantes (interpósitas personas, facturas apócrifas, etc.)</td><td class="r">desde $ 1.000.000.000 en el caso del inciso a)</td></tr>
 <tr><td>Apropiación indebida de tributos (art. 4)</td><td>El agente de retención o percepción no deposita lo retenido o percibido</td><td class="r">más de $ 10.000.000 por mes</td></tr></tbody></table></div>
 <p>Los montos se actualizan por UVA desde el 1/1/2027 (art. 43 del régimen), y para saber si hubo delito se toma el monto vigente al vencimiento de la declaración jurada.</p>
 <h3>Extinción de la acción penal</h3><p>Si la acción ya empezó, se extingue cuando el imputado acepta y paga en forma total e incondicional lo adeudado, los intereses y un <b>50% adicional</b>, dentro de los 30 días hábiles de notificada la imputación (art. 16). Es un beneficio que se usa una sola vez por persona.</p>
 <h3>Prescripción más corta y discrepancia significativa</h3><p>La Ley 27.799 redujo de 5 a <b>3 años</b> la prescripción del inscripto que presentó su declaración jurada en término y pagó el saldo, siempre que ARCA no detecte una <b>discrepancia significativa</b>: un aumento de al menos el 15% sobre lo declarado, una diferencia mayor al umbral de evasión simple, o el uso de facturas apócrifas.</p>
 <h3>Inocencia Fiscal II (Ley 27.826)</h3><p>Publicada el 9/10/2026, agregó una reducción automática del 25% de ciertas multas formales para MiPyMEs, personas humanas, sucesiones indivisas y entidades sin fines de lucro que no sean grandes contribuyentes (art. 49 bis de la Ley 11.683), y amplió el régimen simplificado de Ganancias. Parte de la ley todavía requiere reglamentación.</p>
 <div class="note"><b>Lo que no hace.</b> No es una moratoria ni un blanqueo: los impuestos y los intereses se siguen debiendo, y ARCA puede fiscalizar.</div>`,
 ex:[{type:"tf",items:[["Evadir $ 50.000.000 en un año, con ardid, configura evasión simple desde la Ley 27.799",false,"El umbral es de más de $ 100.000.000."],["No depositar retenciones por más de $ 10.000.000 en un mes puede ser apropiación indebida",true],["La acción penal se extingue pagando solo el capital adeudado",false,"Hay que pagar capital, intereses y un 50% adicional."],["La Ley de Inocencia Fiscal condona los impuestos adeudados",false],["Una diferencia del 20% sobre lo declarado es una discrepancia significativa",true]]},
  {type:"num",items:[{q:"Un imputado debe $ 200.000.000 de impuesto y $ 60.000.000 de intereses. ¿Cuánto debe pagar para extinguir la acción penal?",a:390000000,u:"$",ex:"(200 + 60) × 1,5 millones."}]}]});

add(21, "Régimen simplificado de Ganancias", {
 lead:"Desde 2026 las personas humanas pueden presentar Ganancias con una declaración jurada simplificada que, si se cumple, les da presunción de exactitud.",
 src:["inoc","inoc2","gan","arca"],
 html:`<h3>Quiénes pueden usarlo</h3><p>Personas humanas y sucesiones indivisas que hayan sido residentes fiscales durante todo el período (art. 38 de la Ley 27.799), para períodos iniciados desde el 1/1/2025. La Ley 27.826 eliminó los topes de ingresos y patrimonio que tenía al principio, y permitió que también adhieran los grandes contribuyentes, aunque sin los beneficios.</p>
 <h3>Qué da</h3><ul>
 <li><b>Efecto liberatorio:</b> si el contribuyente acepta la declaración propuesta y paga en término, se considera cumplida su obligación de Ganancias del período (art. 39).</li>
 <li><b>Presunción de exactitud:</b> las declaraciones de Ganancias e IVA de los períodos no prescriptos se presumen exactas. ARCA solo puede cuestionarlas si prueba una discrepancia significativa (art. 40).</li>
 <li><b>Sin presunciones patrimoniales:</b> no se aplican las del art. 18 incisos f y g de la Ley 11.683 (incrementos patrimoniales no justificados y depósitos bancarios).</li>
 <li><b>Prescripción de 3 años</b> si presentó y pagó en término.</li></ul>
 <h3>Cómo se adhiere</h3><p>Con clave fiscal nivel 3, en el servicio de ARCA para la declaración simplificada (RG 5820/2026). La declaración se puede rectificar y pagar dentro de los 15 días hábiles de una notificación sin perder los beneficios (Ley 27.826).</p>
 <div class="note"><b>Para el contador.</b> El régimen simplifica la presentación, pero no elimina la obligación de calcular bien el impuesto. Una diferencia que supere los parámetros hace caer los beneficios y permite a ARCA fiscalizar períodos anteriores no prescriptos (art. 42).</div>`,
 ex:[{type:"tf",items:[["Una SA puede adherir al régimen simplificado de Ganancias",false,"Es para personas humanas y sucesiones indivisas residentes."],["Si el contribuyente adhiere y paga en término, ARCA no puede usar la presunción por depósitos bancarios",true],["La Ley 27.826 mantuvo los topes de ingresos y patrimonio",false,"Los eliminó."],["Una discrepancia significativa hace caer la presunción de exactitud",true]]},
  {type:"mc",items:[{q:"¿Qué tiene que probar ARCA para cuestionar la declaración de un adherido?",o:["Nada","Una discrepancia significativa","Que el contribuyente tiene cuenta bancaria","Que tiene un auto"],a:1}]}]});

add(25, "Otros encargos: revisión, certificación y compilación", {
 lead:"El contador no solo audita. La RT 37 regula otros servicios con distinto nivel de seguridad, y es clave no confundirlos al firmar.",
 src:["facpce","cpce"],
 cite:["RT 37 de la FACPCE (normas de auditoría, revisión, otros encargos de aseguramiento, certificación y servicios relacionados)."],
 html:`<div class="tw"><table><thead><tr><th>Encargo</th><th>Seguridad</th><th>Qué hace el contador</th><th>Ejemplo</th></tr></thead><tbody>
 <tr><td><b>Auditoría</b></td><td>Razonable</td><td>Obtiene evidencia suficiente para opinar sobre los estados en su conjunto.</td><td>Estados contables anuales para el banco</td></tr>
 <tr><td><b>Revisión</b></td><td>Limitada</td><td>Indagaciones y procedimientos analíticos; concluye que no conoció nada que indique errores.</td><td>Estados de períodos intermedios</td></tr>
 <tr><td><b>Certificación</b></td><td>Sobre hechos concretos</td><td>Constata que cierta información coincide con registros o documentos.</td><td>Certificación de ingresos para un trámite</td></tr>
 <tr><td><b>Compilación</b></td><td>Ninguna</td><td>Ayuda a preparar información sin verificarla.</td><td>Armar los estados con datos que entrega el cliente</td></tr></tbody></table></div>
 <h3>Por qué importa</h3><p>Quien lee un informe confía según lo que el contador dice haber hecho. Firmar una certificación con lenguaje de auditoría, o una compilación como si fuera una revisión, expone al profesional a responsabilidad civil y disciplinaria. Por eso cada encargo tiene su modelo de informe y su carta de compromiso.</p>
 <h3>Legalización</h3><p>Los informes y certificaciones que se presentan ante terceros se legalizan en el Consejo Profesional, que verifica la matrícula y la firma, no el contenido del trabajo.</p>`,
 ex:[{type:"pick",title:"¿Qué encargo corresponde?",options:["Auditoría","Revisión","Certificación","Compilación"],items:[
   ["Un cliente pide que constates que sus ventas de marzo coinciden con el libro IVA","Certificación"],
   ["Un banco exige opinión sobre los estados anuales","Auditoría"],
   ["Una sociedad que cotiza presenta estados trimestrales","Revisión"],
   ["El cliente trae sus datos y pide que le armes el balance, sin verificar","Compilación"]]},
  {type:"tf",items:[["La revisión da la misma seguridad que la auditoría",false],["En una compilación el contador no expresa seguridad",true],["El Consejo Profesional, al legalizar, controla que las cifras sean correctas",false,"Controla matrícula y firma."]]}]});
})();
