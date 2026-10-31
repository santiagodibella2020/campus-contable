/* Profundización de Impuestos I y II. Se carga después de lecciones.js para no alterar el orden del progreso guardado. */
(function(){
const add = (n, title, L)=>{ CAMPUS.modules.find(m=>m.n===n).l.push(title); CAMPUS.content[n].lessons.push(L); };
const xq = (n, qs)=>{ CAMPUS.xeval[n] = (CAMPUS.xeval[n]||[]).concat(qs); };

add(20, "IVA: prorrateo del crédito fiscal y comprobantes", {
 lead:"Cuando una empresa vende a la vez cosas gravadas y exentas, no todo el IVA de sus compras es computable. Y el tipo de comprobante que emite o recibe define si hay crédito fiscal.",
 src:["iva","arca"],
 cite:["Ley 23.349 de IVA (t.o. 1997), arts. 12 y 13.","Ley 27.743, Título VII: Régimen de Transparencia Fiscal al Consumidor.","ARCA, RG 1415 (emisión de comprobantes), RG 5003/2021 (factura A a monotributistas), RG 5614/2024 (transparencia fiscal) y RG 4597 (Libro IVA Digital)."],
 html:`<h3>El crédito fiscal se vincula con operaciones gravadas</h3><p>El art. 12 de la ley permite computar el IVA de las compras, importaciones y servicios <b>en la medida en que se vinculen con operaciones gravadas</b>. El análisis tiene tres pasos:</p>
 <ol><li><b>Asignación directa a gravadas:</b> el crédito de lo que se usa solo para operaciones gravadas se computa entero.</li><li><b>Asignación directa a exentas:</b> el crédito de lo que se usa solo para operaciones exentas o no gravadas no se computa: es mayor costo o gasto.</li><li><b>Prorrateo (art. 13):</b> el crédito común a ambas (alquiler del local, luz, honorarios contables) que no se puede asignar se computa en la proporción de las operaciones gravadas sobre el total.</li></ol>
 <div class="formula">Coeficiente de prorrata = Operaciones netas gravadas / Total de operaciones netas (gravadas + exentas + no gravadas)</div>
 <p>El decreto reglamentario prevé aplicar el coeficiente durante el año y hacer un <b>ajuste al cierre del ejercicio</b> con las operaciones reales del período. Las exportaciones cuentan como gravadas a este efecto, porque su crédito fiscal es recuperable.</p>
 <h3>Ejemplo</h3><p>Una distribuidora vende en el mes $ 7.000.000 gravados y $ 3.000.000 exentos (libros). Su crédito fiscal de compras de mercadería gravada es $ 500.000 (asignación directa). El IVA de gastos comunes es $ 200.000.</p>
 <div class="formula">Coeficiente = 7.000.000 / 10.000.000 = 70%  →  Crédito computable = 500.000 + 200.000 × 70% = $ 640.000</div>
 <p>Los $ 60.000 no computables se suman al gasto que los originó.</p>
 <h3>Qué comprobante corresponde</h3><div class="tw"><table><thead><tr><th>Emisor</th><th>Receptor</th><th>Comprobante</th><th>¿Da crédito fiscal?</th></tr></thead><tbody>
 <tr><td>Responsable inscripto</td><td>Responsable inscripto</td><td><b>Factura A</b> (IVA discriminado)</td><td>Sí</td></tr>
 <tr><td>Responsable inscripto</td><td>Monotributista</td><td><b>Factura A</b> (desde la RG 5003/2021)</td><td>No: el monotributista no es sujeto de IVA</td></tr>
 <tr><td>Responsable inscripto</td><td>Consumidor final o exento</td><td><b>Factura B</b></td><td>No</td></tr>
 <tr><td>Responsable inscripto con inconsistencias que detecta ARCA</td><td>Responsable inscripto</td><td><b>Factura M</b> (o A con la leyenda "operación sujeta a retención")</td><td>Sí, pero el comprador debe retener</td></tr>
 <tr><td>Monotributista o exento</td><td>Cualquiera</td><td><b>Factura C</b></td><td>No</td></tr>
 <tr><td>Exportador</td><td>Cliente del exterior</td><td><b>Factura E</b></td><td>Sin IVA (exportación)</td></tr></tbody></table></div>
 <h3>Transparencia fiscal al consumidor</h3><p>La Ley 27.743 (Título VII) obliga a quienes venden a consumidores finales a informar en la factura o ticket el <b>IVA contenido</b> y los <b>otros impuestos nacionales indirectos</b> incluidos en el precio. ARCA lo reglamentó con la RG 5614/2024 y es obligatorio en general desde 2025. Ese dato es informativo: el consumidor final no computa crédito fiscal.</p>
 <h3>Libro IVA Digital</h3><p>Los responsables inscriptos informan cada mes sus comprobantes emitidos y recibidos en el <b>Libro IVA Digital</b> (RG 4597), desde el cual se genera la declaración jurada mensual. Los comprobantes electrónicos con CAE ya aparecen precargados; hay que controlar que coincidan con la contabilidad antes de presentar.</p>`,
 ex:[{type:"num",items:[
   {q:"Ventas gravadas $ 7.000.000 y exentas $ 3.000.000. ¿Coeficiente de prorrata? (en %)",a:70,u:"%",tol:0.01},
   {q:"Con ese coeficiente, crédito fiscal directo de gravadas $ 500.000 y crédito común $ 200.000. ¿Crédito computable?",a:640000,u:"$"},
   {q:"Ventas gravadas $ 4.500.000, exportaciones $ 1.500.000 y exentas $ 2.000.000. IVA de gastos comunes $ 160.000. ¿Cuánto de ese IVA es computable?",a:120000,u:"$",hint:"Las exportaciones cuentan como gravadas: (4,5 + 1,5) / 8 = 75%.",ex:"160.000 × 75% = $ 120.000."},
   {q:"Un gasto común de $ 1.000.000 + IVA $ 210.000; coeficiente 70%. ¿Cuánto IVA se suma al gasto por no ser computable?",a:63000,u:"$",ex:"210.000 × 30% = $ 63.000."}]},
  {type:"asiento",accounts:["Banco Nación c/c","Gastos generales","IVA Crédito Fiscal","Proveedores","Mercaderías"],entries:[
   {t:"Se paga por transferencia el alquiler del local, usado para ventas gravadas y exentas: $ 1.000.000 + IVA $ 210.000. Coeficiente de prorrata 70%.",e:[["Gastos generales",1063000,0],["IVA Crédito Fiscal",147000,0],["Banco Nación c/c",0,1210000]],why:"Se computa el 70% del IVA (147.000); el 30% restante (63.000) es mayor gasto."}]},
  {type:"pick",title:"¿Qué comprobante emite?",options:["Factura A","Factura B","Factura C","Factura E"],items:[
   ["Responsable inscripto que vende a otro responsable inscripto","Factura A"],
   ["Responsable inscripto que vende a un consumidor final","Factura B"],
   ["Responsable inscripto que vende a un monotributista","Factura A","Así lo dispone la RG 5003/2021."],
   ["Monotributista que presta un servicio a una empresa","Factura C"],
   ["Empresa que exporta mercadería a Chile","Factura E"],
   ["Asociación civil exenta en IVA que cobra una cuota","Factura C"]]},
  {type:"tf",items:[
   ["El IVA de una compra usada solo para operaciones exentas se puede computar como crédito fiscal.",false,"Se vincula con exentas: es mayor costo o gasto."],
   ["El monotributista que recibe una factura A puede computar el IVA discriminado.",false,"No es sujeto de IVA."],
   ["El IVA contenido que figura en un ticket de consumidor final es solo informativo.",true],
   ["Las exportaciones se tratan como gravadas para calcular la prorrata.",true,"Su crédito fiscal es recuperable (art. 43)."]]}]
});

add(20, "Convenio Multilateral: gastos, regímenes especiales y casos", {
 lead:"El coeficiente del Convenio Multilateral decide cuánto Ingresos Brutos cobra cada provincia. Calcularlo bien requiere saber qué gastos cuentan y cuándo se aplica un régimen especial.",
 src:["ca"],
 cite:["Convenio Multilateral del 18/8/1977, arts. 1 a 14.","Comisión Arbitral, Resoluciones Generales (texto ordenado vigente)."],
 html:`<h3>Cuándo se aplica</h3><p>Cuando una actividad se ejerce en dos o más jurisdicciones como un <b>proceso único y económicamente inseparable</b> (art. 1). También cuando se vende a distancia (por teléfono, correo, internet) a clientes de otra provincia, si hay gastos vinculados con esa actividad, aunque sean no computables. En ese caso los ingresos se atribuyen a la jurisdicción del <b>domicilio del adquirente</b> (art. 2).</p>
 <h3>Régimen general (arts. 2 a 5)</h3><p>El 50% de la base se distribuye por ingresos y el 50% por gastos, usando los datos del <b>último balance cerrado en el año calendario anterior</b> (art. 5). Si no hay balance, se usan los del año calendario anterior. El coeficiente se aplica a la base de cada mes del año.</p>
 <div class="formula">Coeficiente = 0,5 × ingresos de la jurisdicción / ingresos totales + 0,5 × gastos computables de la jurisdicción / gastos computables totales</div>
 <h3>Gastos computables y no computables (arts. 3 y 4)</h3><div class="tw"><table><thead><tr><th>Computables</th><th>No computables</th></tr></thead><tbody>
 <tr><td>Sueldos, jornales, cargas sociales</td><td>Costo de las mercaderías y materias primas</td></tr>
 <tr><td>Alquileres, energía, combustibles</td><td>Costo de obras o servicios contratados para revender</td></tr>
 <tr><td>Amortizaciones, reparaciones, seguros</td><td>Gastos de propaganda y publicidad</td></tr>
 <tr><td>Fletes (por partes iguales entre las jurisdicciones de origen y destino)</td><td>Tributos e intereses</td></tr>
 <tr><td>Honorarios y sueldos de directores y socios hasta el 1% de la utilidad del balance</td><td>Lo que exceda ese 1%</td></tr></tbody></table></div>
 <p>Un gasto se atribuye a la jurisdicción donde se desarrolla la actividad con la que tiene relación directa (art. 4).</p>
 <h3>Regímenes especiales</h3><div class="tw"><table><thead><tr><th>Actividad</th><th>Artículo</th><th>Distribución</th></tr></thead><tbody>
 <tr><td>Construcción</td><td>6</td><td>10% a la jurisdicción de la sede (oficina, administración) y 90% a la de la obra</td></tr>
 <tr><td>Seguros, capitalización, créditos</td><td>7</td><td>80% a la jurisdicción de la operación y 20% a la de la sede central</td></tr>
 <tr><td>Transporte de pasajeros o cargas</td><td>9</td><td>A la jurisdicción de origen del viaje, por los pasajes y fletes</td></tr>
 <tr><td>Profesiones liberales</td><td>10</td><td>80% a la jurisdicción donde se realiza la actividad y 20% a la del estudio u oficina</td></tr></tbody></table></div>
 <h3>Inicio y cese (art. 14)</h3><p>Si se <b>inicia</b> actividad en una jurisdicción nueva, esa jurisdicción grava el total de los ingresos obtenidos en ella hasta que haya un balance que permita aplicar el coeficiente. Si se <b>cesa</b> en una jurisdicción, se recalculan los coeficientes sin ella.</p>
 <h3>Cómo se declara</h3><p>Los contribuyentes del Convenio presentan sus anticipos mensuales (formulario CM03) y la declaración jurada anual (CM05) con el sistema <b>SIFERE</b> de la Comisión Arbitral. Las alícuotas son las de cada provincia; el Convenio solo reparte la base.</p>`,
 ex:[{type:"num",items:[
   {q:"Ingresos: Buenos Aires $ 6.000.000 y CABA $ 4.000.000. Gastos computables: Buenos Aires $ 1.500.000 y CABA $ 2.500.000. ¿Coeficiente de Buenos Aires? (con 4 decimales)",a:0.4875,tol:0.0001,ex:"0,5 × 0,6 + 0,5 × 0,375 = 0,4875."},
   {q:"Con ese coeficiente y una base del mes de $ 3.000.000, ¿base imponible de CABA?",a:1537500,u:"$",ex:"Coeficiente de CABA = 1 − 0,4875 = 0,5125; 3.000.000 × 0,5125."},
   {q:"Una constructora con sede en Córdoba cobra $ 20.000.000 por una obra en Mendoza. ¿Base atribuible a Mendoza?",a:18000000,u:"$"},
   {q:"Una contadora con estudio en CABA devenga honorarios por $ 5.000.000 por un trabajo hecho en Santa Fe. ¿Base atribuible a CABA?",a:1000000,u:"$",ex:"Art. 10: 80% a Santa Fe y 20% a la jurisdicción del estudio."},
   {q:"Gastos totales del balance: sueldos $ 4.000.000, alquileres $ 1.000.000, costo de mercaderías $ 9.000.000, publicidad $ 800.000, intereses $ 500.000. ¿Total de gastos computables?",a:5000000,u:"$",hint:"Solo sueldos y alquileres."}]},
  {type:"pick",title:"¿Gasto computable o no computable?",options:["Computable","No computable"],items:[
   ["Sueldos del personal de la sucursal","Computable"],["Costo de la mercadería vendida","No computable"],["Campaña publicitaria en redes","No computable"],
   ["Amortización del rodado","Computable"],["Intereses de un préstamo bancario","No computable"],["Tasa municipal de seguridad e higiene","No computable","Es un tributo."],["Energía eléctrica del depósito","Computable"]]},
  {type:"pick",title:"¿Qué régimen corresponde?",options:["Régimen general","Construcción (art. 6)","Transporte (art. 9)","Profesiones liberales (art. 10)"],items:[
   ["Un estudio jurídico de Rosario que atiende un juicio en Córdoba","Profesiones liberales (art. 10)"],
   ["Una empresa de micros de larga distancia","Transporte (art. 9)"],
   ["Una fábrica de muebles con planta en Buenos Aires que vende en todo el país","Régimen general"],
   ["Una empresa que pavimenta rutas en tres provincias","Construcción (art. 6)"]]}]
});

xq(20, [
 {q:"El crédito fiscal común a operaciones gravadas y exentas que no se puede asignar…",o:["Se computa entero","No se computa","Se prorratea según la proporción de operaciones gravadas","Se devuelve al fin del año"],a:2},
 {q:"Un responsable inscripto que vende a un monotributista emite…",o:["Factura A","Factura B","Factura C","Ticket sin datos"],a:0},
 {q:"El Régimen de Transparencia Fiscal al Consumidor obliga a informar en los comprobantes a consumidores finales…",o:["El IVA contenido y otros impuestos nacionales indirectos","Solo el precio sin impuestos","El margen de ganancia","El costo de la mercadería"],a:0},
 {q:"En el Convenio Multilateral, los datos para el coeficiente surgen del…",o:["Mes anterior","Último balance cerrado en el año calendario anterior","Promedio de los últimos 5 años","Presupuesto del año"],a:1},
 {q:"¿Cuál de estos gastos es NO computable para el Convenio Multilateral?",o:["Sueldos","Alquileres","Publicidad","Amortizaciones"],a:2},
 {q:"En la construcción (art. 6 del Convenio), la jurisdicción de la obra recibe…",o:["El 50%","El 80%","El 90%","El 100%"],a:2},
 {q:"En una venta por internet a un cliente de otra provincia, el ingreso se atribuye a…",o:["La jurisdicción del vendedor","La jurisdicción del domicilio del adquirente","CABA siempre","Partes iguales"],a:1},
 {q:"Los anticipos mensuales del Convenio Multilateral se presentan con…",o:["El F. 931","El formulario CM03 en SIFERE","El Libro IVA Digital","El F. 572"],a:1},
]);
add(21, "Caso completo: declaración jurada de una persona humana", {
 lead:"Un caso de punta a punta: una profesional independiente que además alquila un departamento. Los importes de deducciones y escala son ilustrativos; para un caso real se usan las tablas que publica ARCA para cada período.",
 src:["gan","gandr","arca"],
 cite:["Ley de Impuesto a las Ganancias (t.o. Decreto 824/2019), arts. 30, 83, 85, 86, 94 y concordantes.","Ley 27.743 (2024), Título V: modificaciones al impuesto.","ARCA: tablas de deducciones personales y escala del art. 94 vigentes para cada período."],
 html:`<h3>Datos del caso (año calendario)</h3><ul><li><b>Primera categoría:</b> cobra alquileres por $ 6.000.000. El edificio del departamento vale $ 50.000.000 (sin el terreno).</li><li><b>Cuarta categoría:</b> honorarios por $ 18.000.000 y gastos del estudio deducibles por $ 3.000.000.</li><li><b>Pagó:</b> aportes de autónomos $ 1.200.000 y medicina prepaga $ 1.500.000.</li><li><b>Familia:</b> un hijo menor a cargo.</li><li><b>Pagos a cuenta:</b> anticipos $ 600.000 y retenciones sufridas $ 150.000.</li></ul>
 <h3>Paso 1: ganancia neta de cada categoría</h3><div class="tw"><table><thead><tr><th>Concepto</th><th>Primera</th><th>Cuarta</th></tr></thead><tbody>
 <tr><td>Ganancia bruta</td><td>6.000.000</td><td>18.000.000</td></tr>
 <tr><td>− Amortización del edificio (2% anual)</td><td>1.000.000</td><td></td></tr>
 <tr><td>− Gastos de mantenimiento: opción presunta del 5% de la renta bruta</td><td>300.000</td><td></td></tr>
 <tr><td>− Gastos deducibles de la actividad</td><td></td><td>3.000.000</td></tr>
 <tr><td><b>= Ganancia neta</b></td><td><b>4.700.000</b></td><td><b>15.000.000</b></td></tr></tbody></table></div>
 <p>Para los inmuebles alquilados la ley permite deducir los gastos reales de mantenimiento o un importe presunto del 5% de la renta bruta. La amortización se calcula sobre el valor del edificio, nunca sobre el terreno.</p>
 <h3>Paso 2: deducciones generales</h3><p>Ganancia neta total: 4.700.000 + 15.000.000 = <b>19.700.000</b>. Los aportes jubilatorios se deducen enteros: 19.700.000 − 1.200.000 = 18.500.000.</p>
 <p>La prepaga tiene un tope del <b>5% de la ganancia neta</b> calculada antes de deducirla (junto con donaciones, honorarios médicos y deducciones personales). Tope: 5% × 18.500.000 = 925.000. Pagó 1.500.000, así que deduce <b>925.000</b>.</p>
 <div class="formula">Ganancia neta después de deducciones generales = 18.500.000 − 925.000 = 17.575.000</div>
 <h3>Paso 3: deducciones personales (art. 30, valores ilustrativos)</h3><div class="tw"><table><thead><tr><th>Deducción</th><th>Importe</th></tr></thead><tbody>
 <tr><td>Ganancia no imponible</td><td>4.000.000</td></tr><tr><td>Deducción especial (autónomo con aportes al día)</td><td>4.000.000</td></tr><tr><td>Hijo menor a cargo</td><td>2.000.000</td></tr><tr><td><b>Total</b></td><td><b>10.000.000</b></td></tr></tbody></table></div>
 <div class="formula">Ganancia neta sujeta a impuesto = 17.575.000 − 10.000.000 = 7.575.000</div>
 <h3>Paso 4: escala progresiva (ilustrativa)</h3><div class="tw"><table><thead><tr><th>Tramo</th><th>Alícuota</th><th>Impuesto del tramo</th></tr></thead><tbody>
 <tr><td>0 a 2.000.000</td><td>5%</td><td>100.000</td></tr><tr><td>2.000.000 a 6.000.000</td><td>15%</td><td>600.000</td></tr><tr><td>Más de 6.000.000 (1.575.000)</td><td>27%</td><td>425.250</td></tr><tr><td colspan="2"><b>Impuesto determinado</b></td><td><b>1.125.250</b></td></tr></tbody></table></div>
 <h3>Paso 5: saldo de la declaración jurada</h3><div class="formula">1.125.250 − 600.000 (anticipos) − 150.000 (retenciones) = $ 375.250 a pagar</div>
 <p>Además de Ganancias, la misma persona presenta la declaración de <b>Bienes Personales</b> por sus bienes al 31 de diciembre, y las dos se cruzan: el aumento de patrimonio del año tiene que poder explicarse con las ganancias declaradas (justificación patrimonial).</p>`,
 ex:[{type:"num",items:[
   {q:"Alquileres cobrados $ 8.000.000; edificio $ 40.000.000; opción de gastos presuntos. ¿Ganancia neta de primera categoría?",a:6800000,u:"$",ex:"8.000.000 − 800.000 (2% de 40.000.000) − 400.000 (5% de 8.000.000)."},
   {q:"Ganancia neta antes de la prepaga $ 12.000.000; pagó prepaga por $ 900.000. ¿Cuánto deduce?",a:600000,u:"$",hint:"Tope del 5%."},
   {q:"Con la escala ilustrativa de la lección (5% hasta 2 M, 15% hasta 6 M, 27% sobre el excedente), ¿impuesto sobre una ganancia sujeta a impuesto de $ 4.000.000?",a:400000,u:"$",ex:"100.000 + 15% × 2.000.000."},
   {q:"Impuesto determinado $ 900.000; anticipos $ 500.000; retenciones $ 450.000. ¿Saldo? (a favor, sin signo)",a:50000,u:"$"}]},
  {type:"order",title:"Ordená los pasos de la liquidación",items:["Ganancia bruta por categoría","Restar gastos de cada categoría","Restar deducciones generales","Restar deducciones personales","Aplicar la escala","Restar anticipos y retenciones"]},
  {type:"tf",items:[
   ["La amortización de un inmueble alquilado se calcula sobre el valor del terreno y del edificio.",false,"El terreno no se amortiza."],
   ["El tope de la prepaga se calcula sobre la ganancia neta antes de deducir la prepaga y las deducciones personales.",true],
   ["Los aportes de autónomos son una deducción general sin tope.",true],
   ["Las deducciones personales se restan antes que las generales.",false,"Primero las generales, después las personales."]]}]
});

add(21, "Impuesto diferido: del impuesto a pagar al gasto contable", {
 lead:"El impuesto que se paga y el gasto por impuesto del estado de resultados no coinciden. La diferencia son las diferencias temporarias, que se registran como impuesto diferido.",
 src:["rt54","rt54g","gan"],
 cite:["RT 54 (t.o. RT 59), sección de impuesto a las ganancias (párr. 573 y 594).","CPCECABA, Guía de preguntas y respuestas sobre la RT 54."],
 html:`<h3>Dos tipos de diferencias</h3><div class="tw"><table><thead><tr><th>Tipo</th><th>Qué son</th><th>Ejemplos</th><th>¿Genera diferido?</th></tr></thead><tbody>
 <tr><td><b>Permanentes</b></td><td>Partidas que nunca serán gravadas o deducibles</td><td>Multas fiscales, dividendos de sociedades argentinas</td><td>No</td></tr>
 <tr><td><b>Temporarias</b></td><td>Partidas que se reconocen en un ejercicio para la contabilidad y en otro para el fisco</td><td>Previsiones no deducibles hasta su uso, amortizaciones distintas</td><td>Sí</td></tr></tbody></table></div>
 <h3>Activo o pasivo diferido</h3><ul><li>Si hoy se paga <b>más</b> impuesto y se deducirá en el futuro (previsión para juicios no deducible), hay un <b>activo por impuesto diferido</b>.</li><li>Si hoy se paga <b>menos</b> y se pagará en el futuro (amortización impositiva mayor que la contable), hay un <b>pasivo por impuesto diferido</b>.</li></ul>
 <div class="formula">Impuesto diferido = Diferencia temporaria × Alícuota que se espera aplicar al revertirse</div>
 <h3>Caso: Andina SA (alícuota ilustrativa 30%)</h3><p>Se retoma la conciliación de la lección "Ganancias de sociedades": impuesto corriente de $ 2.970.000.</p>
 <div class="tw"><table><thead><tr><th>Diferencia temporaria</th><th>Importe</th><th>Diferido al 30%</th></tr></thead><tbody>
 <tr><td>Previsión para juicios no deducible</td><td>300.000</td><td>Activo 90.000</td></tr>
 <tr><td>Amortización impositiva mayor que la contable</td><td>100.000</td><td>Pasivo 30.000</td></tr>
 <tr><td colspan="2"><b>Neto</b></td><td><b>Activo 60.000</b></td></tr></tbody></table></div>
 <div class="formula">Gasto por impuesto del ejercicio = Corriente 2.970.000 − Diferido 60.000 = $ 2.910.000</div>
 <p>Control: resultado contable 10.000.000 + multas 200.000 − dividendos 500.000 = 9.700.000; 9.700.000 × 30% = 2.910.000. Con el impuesto diferido, el gasto refleja la alícuota sobre el resultado contable corregido solo por las diferencias permanentes.</p>
 <h3>Qué dice la RT 54</h3><p>La regla es aplicar el <b>método del impuesto diferido</b>. El activo por impuesto diferido se presenta separado y el gasto total se muestra en la línea de impuesto a las ganancias del estado de resultados. La norma prevé excepciones según el tamaño: por ejemplo, los entes medianos pueden discontinuar el método si justifican un <b>costo o esfuerzo desproporcionado</b> (párr. 573), y deben informarlo en notas. Antes de aplicar una opción, verificá en el texto qué permite la categoría del ente.</p>`,
 ex:[{type:"pick",title:"¿Diferencia permanente o temporaria?",options:["Permanente","Temporaria"],items:[
   ["Multa pagada a ARCA","Permanente"],["Previsión para despidos no deducible hasta el pago","Temporaria"],["Dividendos cobrados de una SA argentina","Permanente"],["Amortización acelerada impositiva","Temporaria"],["Previsión para incobrables que el fisco admite recién al cumplirse los índices de incobrabilidad","Temporaria"]]},
  {type:"num",items:[
   {q:"Previsión para juicios no deducible $ 500.000; alícuota 30%. ¿Activo por impuesto diferido?",a:150000,u:"$"},
   {q:"Impuesto corriente $ 4.000.000; aumento neto del activo diferido $ 150.000. ¿Gasto por impuesto del ejercicio?",a:3850000,u:"$"},
   {q:"Amortización impositiva $ 1.400.000 y contable $ 1.000.000; alícuota 35%. ¿Pasivo por impuesto diferido generado?",a:140000,u:"$"}]},
  {type:"asiento",accounts:["Impuesto a las ganancias (resultado)","Activo por impuesto diferido","Pasivo por impuesto diferido","Impuesto a las ganancias a pagar","Anticipos de impuesto a las ganancias"],entries:[
   {t:"Cierre · Andina SA registra el efecto del impuesto diferido: activo por la previsión $ 90.000 y pasivo por amortizaciones $ 30.000.",e:[["Activo por impuesto diferido",90000,0],["Pasivo por impuesto diferido",0,30000],["Impuesto a las ganancias (resultado)",0,60000]],why:"El diferido neto (activo 60.000) reduce el gasto del ejercicio."}]}]
});

xq(21, [
 {q:"La amortización anual impositiva de un inmueble urbano alquilado es, como regla, del…",o:["1%","2%","5%","10%"],a:1},
 {q:"Para la primera categoría, en lugar de los gastos reales de mantenimiento se puede deducir un importe presunto del…",o:["2% de la renta bruta","5% de la renta bruta","10% de la renta bruta","20% del valor del inmueble"],a:1},
 {q:"El tope de la deducción por medicina prepaga es…",o:["Sin tope","El 5% de la ganancia neta antes de esa deducción y de las personales","El 40% de lo pagado","Un monto fijo igual para todos"],a:1},
 {q:"¿En qué orden se restan las deducciones?",o:["Primero las personales y después las generales","Primero las generales y después las personales","Solo las personales","Es indistinto"],a:1},
 {q:"Una previsión para juicios no deducible hasta su pago genera…",o:["Un pasivo por impuesto diferido","Un activo por impuesto diferido","Una diferencia permanente","Nada"],a:1},
 {q:"Las multas fiscales no deducibles son una diferencia…",o:["Temporaria","Permanente","Que genera activo diferido","Que genera pasivo diferido"],a:1},
 {q:"Si la amortización impositiva es mayor que la contable, se genera…",o:["Activo diferido","Pasivo diferido","Diferencia permanente","Quebranto"],a:1},
]);
})();
