/* Módulo 10 · Sistemas administrativos y control interno */
CAMPUS.content[10] = {
lessons:[
 {lead:"Detrás de cada asiento hay un circuito: una secuencia de pasos, personas y documentos que generan, controlan y registran una operación.",
  html:`<h3>Sistema administrativo</h3><p>Es el conjunto de procedimientos, formularios, personas y sistemas informáticos que procesan las operaciones de la organización y producen información. Un buen sistema es <b>eficaz</b> (logra el objetivo), <b>eficiente</b> (con pocos recursos) y <b>seguro</b> (protege los activos y la confiabilidad de los datos).</p>
  <h3>Elementos de un circuito</h3><ul><li><b>Sectores</b> que intervienen (compras, almacén, contaduría, tesorería).</li><li><b>Documentos</b> que se generan y circulan, con sus copias.</li><li><b>Controles</b> en cada paso.</li><li><b>Archivos y registros</b> donde queda la información.</li></ul>
  <h3>Cursogramas</h3><p>Un cursograma es un diagrama que muestra cómo circulan los documentos entre los sectores. En Argentina se usa la norma IRAM 34.503 para los símbolos: operación, control, archivo, documento, decisión, conector. Se lee por columnas (una por sector) de arriba hacia abajo.</p>
  <h3>Relevamiento y rediseño</h3><p>Para mejorar un circuito: se releva cómo funciona hoy (entrevistas, observación, documentos), se detectan problemas (demoras, duplicaciones, falta de controles), se propone un nuevo diseño y se documenta en un manual de procedimientos.</p>`,
  ex:[{type:"tf",items:[["Un circuito administrativo bien diseñado incluye controles en distintos pasos","Verdadero"],["El cursograma sirve para registrar asientos contables","Falso","Muestra el recorrido de documentos y tareas entre sectores."],["Eficiencia significa lograr el objetivo usando la menor cantidad de recursos","Verdadero"],["Para rediseñar un circuito conviene primero relevar cómo funciona en la realidad","Verdadero"]]}]},
 {lead:"Cada operación queda respaldada por un comprobante. En Argentina, ARCA define qué comprobante emitir y cómo.",
  html:`<div class="tw"><table><thead><tr><th>Comprobante</th><th>Función</th></tr></thead><tbody>
  <tr><td><b>Orden de compra</b></td><td>Pedido formal al proveedor, con precio y condiciones.</td></tr>
  <tr><td><b>Remito</b></td><td>Acompaña el traslado de la mercadería y prueba la entrega.</td></tr>
  <tr><td><b>Factura</b></td><td>Documenta la venta o el servicio y el importe a pagar.</td></tr>
  <tr><td><b>Nota de débito</b></td><td>Aumenta lo facturado (intereses, diferencias de precio).</td></tr>
  <tr><td><b>Nota de crédito</b></td><td>Reduce lo facturado (devoluciones, bonificaciones posteriores).</td></tr>
  <tr><td><b>Recibo</b></td><td>Constancia de que se cobró.</td></tr>
  <tr><td><b>Orden de pago</b></td><td>Documento interno que autoriza un pago.</td></tr></tbody></table></div>
  <h3>Letras de la factura</h3><div class="tw"><table><thead><tr><th>Letra</th><th>Quién la emite</th><th>A quién</th></tr></thead><tbody>
  <tr><td class="mono">A</td><td>Responsable inscripto en IVA</td><td>Otro responsable inscripto (discrimina el IVA, que el comprador computa como crédito fiscal)</td></tr>
  <tr><td class="mono">B</td><td>Responsable inscripto</td><td>Consumidor final, monotributista o exento</td></tr>
  <tr><td class="mono">C</td><td>Monotributista o exento</td><td>Cualquier comprador (no hay IVA que discriminar)</td></tr>
  <tr><td class="mono">M</td><td>Responsable inscripto con observaciones de ARCA</td><td>Responsable inscripto (con retención total del IVA por el comprador)</td></tr>
  <tr><td class="mono">E</td><td>Exportador</td><td>Cliente del exterior</td></tr></tbody></table></div>
  <p>Hoy todos los contribuyentes deben emitir <b>factura electrónica</b>, que se autoriza con un <b>CAE</b> (Código de Autorización Electrónico) otorgado por ARCA. Por el Régimen de Transparencia Fiscal al Consumidor (Ley 27.743), las facturas a consumidores finales deben informar el IVA y otros impuestos nacionales contenidos en el precio.</p>`,
  ex:[{type:"pick",title:"¿Qué letra de factura corresponde?",options:["A","B","C","E"],items:[
   ["Un responsable inscripto le vende a otro responsable inscripto","A"],["Un responsable inscripto le vende a un consumidor final","B"],["Un monotributista le vende a un responsable inscripto","C"],
   ["Un responsable inscripto le vende a un monotributista","B"],["Una empresa exporta servicios de software a un cliente de España","E"]]},
   {type:"pick",title:"¿Qué comprobante se emite?",options:["Remito","Nota de crédito","Nota de débito","Recibo"],items:[["Un cliente devuelve mercadería ya facturada","Nota de crédito"],["Se cobran intereses por pago fuera de término","Nota de débito"],["Se entrega mercadería en el depósito del cliente","Remito"],["Se cobra una factura en efectivo","Recibo"]]}]},
 {lead:"El circuito de compras asegura que se compre lo necesario, al mejor precio, que llegue lo que se pidió y que se pague solo lo que corresponde.",
  html:`<h3>Pasos típicos</h3><ol><li>El sector que necesita algo emite una <b>solicitud de compra</b>.</li><li>Compras pide <b>cotizaciones</b> a varios proveedores y arma un cuadro comparativo.</li><li>Se emite la <b>orden de compra</b>, autorizada según montos.</li>
  <li>Almacén recibe la mercadería con el remito, controla cantidad y calidad, y emite un <b>informe de recepción</b>.</li><li>Cuentas a pagar recibe la factura y hace el <b>control de tres vías</b>: compara orden de compra, informe de recepción y factura.</li>
  <li>Contaduría <b>registra</b> la factura (subdiario de compras y libro IVA Compras).</li><li>Se emite la <b>orden de pago</b>, autorizada por quien corresponda, calculando retenciones impositivas.</li><li>Tesorería <b>paga</b> y archiva el recibo del proveedor.</li></ol>
  <div class="note"><b>El control de tres vías</b> evita pagar mercadería que no llegó, pagar un precio distinto del pactado o pagar dos veces la misma factura. Es uno de los controles más importantes del área.</div>`,
  ex:[{type:"order",title:"Ordená el circuito de compras",items:["Solicitud de compra del sector usuario","Pedido de cotizaciones","Emisión y aprobación de la orden de compra","Recepción de la mercadería e informe de recepción","Control de tres vías con la factura","Registración en el subdiario de compras","Emisión de la orden de pago","Pago al proveedor"]}]},
 {lead:"El circuito de ventas convierte un pedido en dinero cobrado, cuidando que no se venda a quien no va a pagar.",
  html:`<h3>Pasos típicos</h3><ol><li>Se recibe la <b>nota de pedido</b> del cliente.</li><li>Créditos y cobranzas <b>aprueba el crédito</b>: controla el límite y la situación del cliente.</li><li>Depósito prepara la mercadería y emite el <b>remito</b>.</li>
  <li>Facturación emite la <b>factura</b> en base al remito firmado y a la lista de precios vigente.</li><li>Contaduría registra (subdiario de ventas y libro IVA Ventas) y actualiza la cuenta corriente del cliente.</li>
  <li>Cobranzas gestiona el cobro y emite el <b>recibo</b>.</li><li>Tesorería deposita los valores y se concilia con el banco.</li></ol>
  <h3>Cuenta corriente de clientes y antigüedad de saldos</h3><p>El análisis de antigüedad (al día, 1 a 30 días, 31 a 60, más de 90) sirve para gestionar la cobranza y para calcular la previsión de incobrables (Módulo 9).</p>
  <h3>Indicador: días de cobro</h3><div class="formula">Días de cobro = Saldo de deudores / Ventas a crédito anuales × 365</div>`,
  ex:[{type:"order",title:"Ordená el circuito de ventas",items:["Recepción de la nota de pedido","Aprobación del crédito","Preparación y despacho con remito","Emisión de la factura","Registración y cuenta corriente del cliente","Cobranza y emisión del recibo","Depósito y conciliación bancaria"]},
   {type:"num",items:[{q:"Saldo de deudores $ 3.000.000; ventas a crédito anuales $ 36.500.000. ¿Días de cobro?",a:30,tol:0.1}]}]},
 {lead:"Tesorería administra el dinero: recibe, paga, custodia y planifica los fondos.",
  html:`<h3>Funciones</h3><ul><li>Custodia del efectivo y valores.</li><li>Ingresos (depósitos de cobranzas) y egresos (pagos autorizados).</li><li>Manejo de cuentas bancarias, cheques y ECHEQ.</li><li>Presupuesto financiero de corto plazo (flujo de caja).</li></ul>
  <h3>Fondo fijo (caja chica)</h3><p>Una suma fija para gastos menores. Se crea una sola vez y se <b>repone</b> periódicamente por lo gastado, con los comprobantes.</p>
  <div class="tw"><table><thead><tr><th>Momento</th><th>Asiento</th></tr></thead><tbody>
  <tr><td>Creación por $ 100.000</td><td class="mono">Fondo fijo a Banco · 100.000</td></tr>
  <tr><td>Reposición: se gastaron $ 70.000 en librería y movilidad</td><td class="mono">Gastos de librería / Movilidad a Banco · 70.000</td></tr></tbody></table></div>
  <p>El saldo de Fondo fijo no cambia con la reposición: sigue siendo $ 100.000.</p>
  <h3>Arqueo de caja</h3><p>Es el recuento sorpresivo del efectivo y los valores, en presencia del responsable, comparado con el saldo contable. Las diferencias se investigan y se registran.</p>
  <h3>Controles clave</h3><ul><li>Depositar las cobranzas en forma íntegra y diaria (no pagar gastos con cobranzas).</li><li>Firmas conjuntas para pagos importantes.</li><li>Quien maneja el dinero no registra ni concilia.</li></ul>`,
  ex:[{type:"tf",items:[["Al reponer el fondo fijo, se debitan las cuentas de gasto","Verdadero"],["La reposición del fondo fijo disminuye el saldo de la cuenta Fondo fijo","Falso"],["Es buena práctica pagar gastos con el efectivo de las cobranzas antes de depositarlas","Falso","Las cobranzas se depositan íntegras."],["El arqueo de caja debe ser sorpresivo","Verdadero"]]}]},
 {lead:"El control interno es el proceso diseñado para dar seguridad razonable de que la organización cumple sus objetivos operativos, de información y de cumplimiento.",
  html:`<p>El marco más usado es el <b>COSO</b> (Committee of Sponsoring Organizations, actualizado en 2013). Tiene <b>cinco componentes</b>:</p>
  <div class="tw"><table><thead><tr><th>Componente</th><th>Ejemplo</th></tr></thead><tbody>
  <tr><td><b>Entorno de control</b></td><td>Código de conducta, integridad de la dirección, estructura con responsabilidades claras.</td></tr>
  <tr><td><b>Evaluación de riesgos</b></td><td>Identificar qué puede salir mal (fraudes, errores, cambios normativos).</td></tr>
  <tr><td><b>Actividades de control</b></td><td>Autorizaciones, conciliaciones, segregación de funciones, controles de acceso a sistemas.</td></tr>
  <tr><td><b>Información y comunicación</b></td><td>Sistemas que generan datos confiables y los comunican a quien los necesita.</td></tr>
  <tr><td><b>Supervisión (monitoreo)</b></td><td>Auditoría interna, revisiones periódicas de que los controles funcionan.</td></tr></tbody></table></div>
  <h3>Segregación de funciones</h3><p>Ninguna persona debería tener el control de una operación de punta a punta. Se separan cuatro funciones: <b>autorización</b>, <b>custodia</b> de los activos, <b>registración</b> y <b>control</b>.</p>
  <h3>Limitaciones</h3><p>El control interno da seguridad <b>razonable</b>, no absoluta: puede fallar por errores humanos, por colusión entre empleados o porque la dirección pasa por encima de los controles.</p>`,
  ex:[{type:"pick",title:"¿Qué componente del COSO es?",options:["Entorno de control","Evaluación de riesgos","Actividades de control","Información y comunicación","Supervisión"],items:[
   ["La empresa aprueba un código de ética firmado por todos los empleados","Entorno de control"],["Se hace una conciliación bancaria mensual","Actividades de control"],["Auditoría interna revisa cada año si los controles funcionan","Supervisión"],
   ["Se analiza qué procesos tienen más probabilidad de fraude","Evaluación de riesgos"],["El sistema emite un reporte diario de ventas a la gerencia","Información y comunicación"],["El tesorero no puede registrar asientos en el sistema contable","Actividades de control"]]}]},
],
eval:[
 {q:"El control de tres vías compara…",o:["Factura, recibo y remito","Orden de compra, informe de recepción y factura","Presupuesto, factura y cheque","Remito, recibo y orden de pago"],a:1},
 {q:"Un responsable inscripto que vende a un consumidor final emite factura…",o:["A","B","C","E"],a:1},
 {q:"Un monotributista emite factura…",o:["A","B","C","M"],a:2},
 {q:"Para documentar la devolución de mercadería facturada se emite…",o:["Nota de débito","Nota de crédito","Remito","Recibo"],a:1},
 {q:"La aprobación del crédito en el circuito de ventas ocurre…",o:["Después de cobrar","Antes de despachar la mercadería","Al cierre del ejercicio","Nunca"],a:1},
 {q:"La reposición del fondo fijo…",o:["Aumenta su saldo","Mantiene su saldo y registra los gastos","Lo cancela","Se registra como préstamo"],a:1},
 {q:"¿Cuántos componentes tiene el marco COSO?",o:["3","5","7","17"],a:1,ex:"Los 5 componentes se desarrollan en 17 principios."},
 {q:"La segregación de funciones separa…",o:["Ventas y marketing","Autorización, custodia, registración y control","Sucursales","Turnos de trabajo"],a:1},
 {q:"El control interno brinda seguridad…",o:["Absoluta","Razonable","Nula","Solo sobre impuestos"],a:1},
 {q:"El código que autoriza una factura electrónica se llama…",o:["CUIT","CAE","CBU","CAI"],a:1},
]};
