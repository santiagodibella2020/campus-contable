/* Módulo 12 · Tecnología y sistemas de información */
CAMPUS.content[12] = {
lessons:[
 {lead:"El sistema de información contable captura las operaciones, las procesa y entrega informes. Hoy casi siempre es un software, pero la lógica es la misma que aprendiste en papel.",
  html:`<h3>Componentes</h3><ul><li><b>Entrada:</b> comprobantes (facturas, recibos, extractos), cargados a mano, importados o recibidos en forma electrónica.</li><li><b>Proceso:</b> asientos, mayorización automática, cálculos de impuestos y amortizaciones.</li><li><b>Almacenamiento:</b> bases de datos con el plan de cuentas, maestros de clientes, proveedores y artículos.</li><li><b>Salida:</b> libros, estados contables, declaraciones juradas, reportes de gestión.</li></ul>
  <h3>Subsistemas</h3><p>Ventas y cuentas a cobrar, compras y cuentas a pagar, tesorería, inventarios, bienes de uso, sueldos e impuestos. Cada uno genera asientos que se integran en la contabilidad general.</p>
  <h3>Calidad de los datos</h3><p>Un sistema solo es útil si los datos son <b>íntegros</b> (completos), <b>exactos</b>, <b>oportunos</b> y <b>válidos</b> (corresponden a operaciones reales). Los controles de aplicación (validaciones de CUIT, totales de control, numeración correlativa) aseguran estas cualidades.</p>
  <h3>Libros en formato digital</h3><p>Con autorización del Registro Público (art. 329 del CCyC), los libros se pueden llevar en medios digitales. En la Ciudad de Buenos Aires, la Inspección General de Justicia implementó los libros digitales para sociedades, que se presentan por la plataforma de trámites a distancia.</p>`,
  ex:[{type:"pick",title:"¿En qué etapa del sistema está?",options:["Entrada","Proceso","Almacenamiento","Salida"],items:[["Se importa el extracto bancario en el sistema","Entrada"],["El sistema calcula la amortización del mes","Proceso"],["El maestro de proveedores con CUIT y condición frente al IVA","Almacenamiento"],["Se genera el libro IVA Ventas para presentar","Salida"],["El sistema mayoriza todos los asientos del día","Proceso"]]}]},
 {lead:"La hoja de cálculo es la herramienta más usada por los contadores. Dominarla te ahorra horas cada semana.",
  html:`<h3>Funciones esenciales</h3><div class="tw"><table><thead><tr><th>Función</th><th>Para qué</th><th>Ejemplo</th></tr></thead><tbody>
  <tr><td class="mono">SUMA, SUMAR.SI.CONJUNTO</td><td>Totales con condiciones</td><td>Total de ventas de una provincia en un mes</td></tr>
  <tr><td class="mono">BUSCARV / BUSCARX</td><td>Traer datos de otra tabla</td><td>Buscar la razón social a partir del CUIT</td></tr>
  <tr><td class="mono">SI, Y, O</td><td>Condiciones</td><td>Marcar facturas vencidas hace más de 30 días</td></tr>
  <tr><td class="mono">REDONDEAR</td><td>Evitar diferencias de centavos</td><td>IVA de cada factura a dos decimales</td></tr>
  <tr><td class="mono">FECHA, DIAS, FIN.MES</td><td>Cálculos de plazos</td><td>Días de atraso de cada cliente</td></tr>
  <tr><td class="mono">VA, PAGO, TASA, VNA, TIR</td><td>Cálculo financiero</td><td>Cuota de un préstamo, VAN de un proyecto</td></tr></tbody></table></div>
  <h3>Tablas dinámicas</h3><p>Resumen miles de filas en segundos: ventas por cliente y por mes, gastos por centro de costo. Son ideales para analizar los listados que exportás del sistema o de ARCA (por ejemplo, “Mis Comprobantes”).</p>
  <h3>Buenas prácticas</h3><ul><li>Separar datos, cálculos y resultados en distintas hojas.</li><li>No escribir números fijos dentro de las fórmulas: usá celdas de parámetros (alícuota de IVA, tasa).</li><li>Agregar controles cruzados (que la suma de las partes sea igual al total).</li><li>Proteger las celdas con fórmulas y guardar versiones.</li></ul>`,
  ex:[{type:"pick",title:"¿Qué función usarías?",options:["SUMAR.SI.CONJUNTO","BUSCARX","SI","PAGO","Tabla dinámica"],items:[
   ["Traer la condición frente al IVA de cada proveedor desde el maestro","BUSCARX"],["Total facturado a clientes de Córdoba en marzo","SUMAR.SI.CONJUNTO"],["Calcular la cuota de un préstamo francés","PAGO"],
   ["Mostrar “VENCIDA” si pasaron más de 30 días desde la fecha de la factura","SI"],["Resumir 20.000 comprobantes por proveedor y mes","Tabla dinámica"]]}]},
 {lead:"Un software contable o un ERP integra todas las áreas de la empresa en una sola base de datos.",
  html:`<h3>Software contable y ERP</h3><p>Un <b>software contable</b> se enfoca en la contabilidad, los impuestos y los libros. Un <b>ERP</b> (Enterprise Resource Planning) integra además compras, ventas, inventario, producción, sueldos y finanzas: cada operación se carga una sola vez y genera automáticamente sus asientos.</p>
  <h3>Qué evaluar al elegir uno</h3><ul><li>Adaptación a la normativa argentina: factura electrónica, libros IVA digitales, regímenes de retención y percepción, ajuste por inflación.</li><li>Integración con bancos y con los servicios web de ARCA.</li><li>Facilidad de uso y soporte local.</li><li>Seguridad, copias de respaldo y control de accesos por usuario.</li><li>Costo total: licencias, implementación, capacitación y mantenimiento.</li></ul>
  <h3>Implementación</h3><ol><li>Relevar procesos y necesidades.</li><li>Diseñar el plan de cuentas y los centros de costo.</li><li>Migrar saldos y maestros.</li><li>Probar con operaciones reales en paralelo.</li><li>Capacitar a los usuarios.</li><li>Puesta en marcha y seguimiento.</li></ol>
  <div class="note"><b>Asiento automático no significa asiento correcto.</b> Si un artículo está mal configurado, el sistema va a imputar mal cada venta. El contador tiene que revisar las parametrizaciones y conciliar regularmente.</div>`,
  ex:[{type:"tf",items:[["En un ERP, una venta cargada en facturación genera automáticamente su asiento contable","Verdadero"],["Un ERP no necesita revisión contable porque todo es automático","Falso"],["Migrar saldos iniciales es un paso de la implementación","Verdadero"],["Conviene probar el nuevo sistema en paralelo antes de abandonar el anterior","Verdadero"]]}]},
 {lead:"ARCA (ex AFIP) concentra la mayor parte de la relación digital entre el contribuyente y el fisco. Un contador trabaja con sus servicios todos los días.",
  html:`<h3>Clave Fiscal</h3><p>Es la contraseña personal para operar en los servicios de ARCA, con distintos niveles de seguridad. El contribuyente puede <b>delegar</b> servicios en su contador mediante el “Administrador de Relaciones de Clave Fiscal”, sin compartir su clave.</p>
  <h3>Servicios más usados</h3><div class="tw"><table><thead><tr><th>Servicio</th><th>Para qué sirve</th></tr></thead><tbody>
  <tr><td>Comprobantes en línea / Facturación electrónica</td><td>Emitir facturas y obtener el CAE.</td></tr>
  <tr><td>Mis Comprobantes</td><td>Consultar todos los comprobantes emitidos y recibidos.</td></tr>
  <tr><td>Portal IVA / Libro IVA Digital</td><td>Registrar las operaciones y presentar la declaración jurada de IVA.</td></tr>
  <tr><td>Monotributo</td><td>Adhesión, recategorización, pago.</td></tr>
  <tr><td>Declaración en línea (F.931)</td><td>Declaración de aportes y contribuciones de sueldos.</td></tr>
  <tr><td>Sistema de Cuentas Tributarias</td><td>Ver saldos, pagos y deudas.</td></tr>
  <tr><td>Domicilio Fiscal Electrónico</td><td>Recibir notificaciones de ARCA. Es obligatorio y las notificaciones se consideran válidas.</td></tr>
  <tr><td>SIRADIG</td><td>Que los empleados informen sus deducciones de Ganancias.</td></tr></tbody></table></div>
  <div class="note"><b>Domicilio fiscal electrónico.</b> Una notificación de ARCA se tiene por recibida aunque nadie la abra. Revisarlo con frecuencia es parte del trabajo del contador.</div>`,
  ex:[{type:"pick",title:"¿Qué servicio de ARCA usarías?",options:["Facturación electrónica","Mis Comprobantes","Portal IVA","Declaración en línea (F.931)","Administrador de Relaciones"],items:[
   ["Emitir una factura con CAE","Facturación electrónica"],["Bajar todas las facturas que recibió el cliente en el mes","Mis Comprobantes"],["Presentar la DDJJ mensual de IVA","Portal IVA"],["Presentar los aportes y contribuciones del mes","Declaración en línea (F.931)"],["Que tu cliente te habilite a operar en su nombre","Administrador de Relaciones"]]}]},
 {lead:"La automatización y el análisis de datos están cambiando qué hace un contador: menos carga manual, más revisión y análisis.",
  html:`<h3>Qué se puede automatizar</h3><ul><li><b>Conciliaciones</b> bancarias y de tarjetas con reglas de coincidencia.</li><li><b>Carga de comprobantes</b> descargados de ARCA en lugar de tipearlos.</li><li><b>Controles cruzados:</b> comparar IVA Compras con Mis Comprobantes, detectar facturas duplicadas o de proveedores apócrifos.</li><li><b>Reportes</b> periódicos que se actualizan solos.</li></ul>
  <h3>Análisis de datos para contadores</h3><p>Herramientas como Power BI, Power Query o Python permiten trabajar con todas las operaciones (no solo una muestra) y encontrar anomalías: pagos en fines de semana, importes redondos repetidos, proveedores sin empleados.</p>
  <h3>La Ley de Benford</h3><p>En muchos conjuntos de datos naturales (facturas, gastos), el primer dígito no se distribuye de manera uniforme: el 1 aparece cerca del 30% de las veces y el 9 menos del 5%. Una distribución muy distinta puede indicar datos inventados. Se usa en auditoría forense.</p>
  <h3>Inteligencia artificial</h3><p>Asistentes que leen comprobantes, clasifican gastos o redactan informes. Su resultado siempre tiene que ser revisado por el profesional, que es quien firma y responde.</p>`,
  ex:[{type:"tf",items:[["Según la Ley de Benford, el dígito 1 aparece como primer dígito más seguido que el 9","Verdadero"],["Analizar el 100% de las operaciones es imposible con herramientas actuales","Falso"],["Comparar el libro IVA Compras con Mis Comprobantes ayuda a detectar facturas no registradas","Verdadero"],["Si una herramienta de IA prepara un informe, el contador ya no es responsable","Falso"]]}]},
 {lead:"Un contador maneja información confidencial de sus clientes. Protegerla es una obligación profesional y legal.",
  html:`<h3>Principios de seguridad</h3><ul><li><b>Confidencialidad:</b> solo accede quien debe.</li><li><b>Integridad:</b> los datos no se alteran sin autorización.</li><li><b>Disponibilidad:</b> la información está cuando se necesita.</li></ul>
  <h3>Riesgos comunes</h3><ul><li><b>Phishing:</b> correos falsos que imitan a ARCA o a un banco para robar claves.</li><li><b>Ransomware:</b> programas que cifran los archivos y piden rescate.</li><li><b>Fraude del CEO o de cambio de CBU:</b> alguien se hace pasar por un directivo o un proveedor y pide transferir a otra cuenta.</li><li>Claves compartidas, equipos sin actualizar, copias de respaldo inexistentes.</li></ul>
  <h3>Buenas prácticas</h3><ul><li>Doble factor de autenticación en correo, bancos y servicios fiscales.</li><li>Copias de respaldo automáticas, con una copia fuera de línea (regla 3-2-1: 3 copias, 2 medios, 1 fuera del lugar).</li><li>Confirmar por otro canal cualquier cambio de datos bancarios de un proveedor.</li><li>Usuarios individuales con permisos mínimos.</li></ul>
  <div class="note"><b>Protección de datos personales.</b> La Ley 25.326 regula el tratamiento de datos personales. Los legajos de empleados y los datos de clientes que maneja un estudio están alcanzados. Además, el Código de Ética profesional exige el secreto profesional (Módulo 27).</div>`,
  ex:[{type:"pick",title:"Identificá el riesgo",options:["Phishing","Ransomware","Fraude de cambio de CBU","Falta de respaldo"],items:[
   ["Un correo con logo de ARCA pide ingresar la clave fiscal en un enlace","Phishing"],["Todos los archivos del estudio aparecen cifrados con un pedido de pago","Ransomware"],["Un “proveedor” avisa por correo que cambió su cuenta bancaria","Fraude de cambio de CBU"],["Se rompe el disco de la única computadora con la contabilidad","Falta de respaldo"]]}]},
],
eval:[
 {q:"Un ERP se diferencia de un software contable porque…",o:["Solo hace asientos","Integra todas las áreas de la empresa","No sirve para impuestos","Es gratis"],a:1},
 {q:"Para traer datos de un maestro de clientes a partir del CUIT usarías…",o:["SUMA","BUSCARX","REDONDEAR","TIR"],a:1},
 {q:"El servicio de ARCA para recibir notificaciones obligatorias es…",o:["Mis Comprobantes","Domicilio Fiscal Electrónico","SIRADIG","F.931"],a:1},
 {q:"Para que el contador opere servicios del cliente, lo correcto es…",o:["Pedirle su clave fiscal","Que el cliente le delegue servicios en el Administrador de Relaciones","Crear una clave nueva a nombre del cliente","No se puede"],a:1},
 {q:"La declaración de aportes y contribuciones se presenta con…",o:["El F.931","El Libro IVA Digital","El SIRADIG","Mis Comprobantes"],a:0},
 {q:"La Ley de Benford se usa para…",o:["Calcular el IVA","Detectar posibles datos manipulados","Liquidar sueldos","Amortizar bienes"],a:1},
 {q:"La regla de respaldo 3-2-1 implica…",o:["3 copias, 2 medios distintos, 1 fuera del lugar","3 usuarios, 2 claves, 1 servidor","Respaldar cada 3 días","Nada de lo anterior"],a:0},
 {q:"Ante un aviso de cambio de CBU de un proveedor conviene…",o:["Cambiarlo enseguida","Confirmar por otro canal antes de pagar","Ignorarlo siempre","Pagar a las dos cuentas"],a:1},
 {q:"¿Qué ley regula la protección de datos personales en Argentina?",o:["Ley 20.488","Ley 25.326","Ley 11.683","Ley 24.240"],a:1},
 {q:"Los controles de aplicación (validar CUIT, numeración correlativa) aseguran…",o:["La calidad de los datos","El precio de venta","La rentabilidad","El tipo de cambio"],a:0},
]};
