/* Módulo 9 · Contabilidad II: el ciclo contable completo */
(function(){
const ACC = ["Caja","Banco Nación c/c","Deudores por ventas","Deudores morosos","Previsión para deudores incobrables","Mercaderías","IVA Crédito Fiscal","Alquileres pagados por adelantado",
 "Rodados","Amortización acumulada rodados","Muebles y útiles","Amortización acumulada muebles y útiles","Proveedores","IVA Débito Fiscal","Sueldos a pagar","Intereses a pagar","Cobros anticipados","Préstamos bancarios",
 "Capital social","Resultados no asignados","Resultado del ejercicio","Ventas","Ingresos por servicios","Intereses ganados","Costo de mercaderías vendidas","Sueldos y jornales","Alquileres perdidos",
 "Intereses perdidos","Amortización rodados","Amortización muebles y útiles","Deudores incobrables","Gastos bancarios","Faltante de mercaderías","Sobrante de mercaderías"];

function fichaStock(el, done){
  el.innerHTML = `<div class="tw"><table><thead><tr><th>Fecha</th><th>Concepto</th><th class="r">Unidades</th><th class="r">Costo unitario</th></tr></thead><tbody>
   <tr><td class="mono">01/04</td><td>Existencia inicial</td><td class="r num">10</td><td class="r num">$ 100</td></tr>
   <tr><td class="mono">08/04</td><td>Compra</td><td class="r num">20</td><td class="r num">$ 130</td></tr>
   <tr><td class="mono">15/04</td><td>Venta (a $ 200 c/u + IVA)</td><td class="r num">15</td><td class="r num">?</td></tr></tbody></table></div><div data-n></div>`;
  const n=$("[data-n]",el); n.id=nid("fs");
  EX.num({items:[
   {q:"Por PEPS (primero entrado, primero salido): ¿cuál es el CMV de la venta del 15/04?",a:1650,u:"$",hint:"Salen primero las 10 u a $ 100 y después 5 u a $ 130."},
   {q:"Por PEPS: ¿cuál es el saldo de Mercaderías después de la venta?",a:1950,u:"$",hint:"Quedan 15 u a $ 130."},
   {q:"Por PPP: ¿cuál es el costo promedio después de la compra del 08/04?",a:120,u:"$",hint:"(1.000 + 2.600) / 30"},
   {q:"Por PPP: ¿cuál es el CMV de la venta?",a:1800,u:"$"},
   {q:"¿Cuál es la utilidad bruta de la venta usando PEPS?",a:1350,u:"$",hint:"Ventas netas (15 × 200) menos CMV."}]}, n, done);
}
function conciliacion(el, done){
  el.innerHTML = `<p>Al 30/06, el Mayor de <b>Banco Nación c/c</b> tiene saldo deudor de <b>$ 1.000.000</b>. Al comparar con el extracto aparecen estas partidas:</p>
   <ul><li>Cheques emitidos y entregados a proveedores que el banco todavía no debitó: $ 150.000.</li><li>Un depósito del 30/06 que el banco acreditó el 1/07: $ 80.000.</li>
   <li>Gastos de mantenimiento de cuenta debitados por el banco, no registrados: $ 5.000.</li><li>Una transferencia de un cliente acreditada en el banco, no registrada: $ 60.000.</li></ul><div data-n></div>`;
  const n=$("[data-n]",el); n.id=nid("cb");
  EX.num({items:[
   {q:"¿Cuál es el saldo contable ajustado (después de registrar lo que faltaba en libros)?",a:1055000,u:"$",hint:"1.000.000 − 5.000 + 60.000"},
   {q:"¿Qué saldo debería mostrar el extracto bancario al 30/06?",a:1125000,u:"$",hint:"Extracto − cheques pendientes + depósito en tránsito = 1.055.000"}]}, n, done);
}

CAMPUS.content[9] = {
lessons:[
 {lead:"Con el inventario permanente, cada venta registra en el momento su costo. Así sabés siempre cuánta mercadería tenés y cuánto ganaste.",
  html:`<p>En el Módulo 1 registramos las ventas sin su costo. Ahora completamos: en el sistema de <b>inventario permanente</b>, cada venta lleva <b>dos asientos</b>.</p>
  <div class="tw"><table><thead><tr><th>Cuenta</th><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>
  <tr><td>Deudores por ventas</td><td class="r num d">12.100</td><td></td></tr><tr><td style="padding-left:32px">a Ventas</td><td></td><td class="r num h">10.000</td></tr><tr><td style="padding-left:32px">a IVA Débito Fiscal</td><td></td><td class="r num h">2.100</td></tr>
  <tr><td>Costo de mercaderías vendidas</td><td class="r num d">6.000</td><td></td></tr><tr><td style="padding-left:32px">a Mercaderías</td><td></td><td class="r num h">6.000</td></tr></tbody></table></div>
  <p>La diferencia entre Ventas (10.000) y CMV (6.000) es la <b>utilidad bruta</b>: 4.000.</p>
  <h3>¿A qué costo sale la mercadería?</h3><p>Cuando compraste a precios distintos, hay que elegir un método para asignar el costo. Se lleva una <b>ficha de stock</b> por artículo:</p>
  <ul><li><b>PEPS (FIFO):</b> lo primero que entró es lo primero que sale. El stock queda valuado a los precios más recientes.</li>
  <li><b>PPP (precio promedio ponderado):</b> después de cada compra se recalcula el costo promedio.</li>
  <li><b>Identificación específica:</b> para bienes únicos (autos, inmuebles).</li></ul>
  <div class="note"><b>Y la norma.</b> Al cierre, las normas contables argentinas miden los bienes de cambio a su costo de reposición o a su valor neto de realización, según el caso (Módulo 13). Para el impuesto a las Ganancias, la ley fija sus propios criterios (Módulo 21). La ficha PEPS o PPP sirve para el día a día y la gestión.</div>`,
  ex:[{type:"custom",title:"Ficha de stock",render:fichaStock},
   {type:"asiento",title:"Registrá la venta del 15/04 con PEPS (cobrada por banco)",accounts:ACC,entries:[
    {t:"15/04 · Se venden 15 unidades a $ 200 cada una más IVA 21%. El cliente paga por transferencia al Banco Nación.",e:[["Banco Nación c/c",3630,0],["Ventas",0,3000],["IVA Débito Fiscal",0,630]]},
    {t:"15/04 · Registrá el costo de esa venta según PEPS.",e:[["Costo de mercaderías vendidas",1650,0],["Mercaderías",0,1650]]}]}]},
 {lead:"Si no llevás inventario permanente, el costo de lo vendido se calcula al final, contando lo que quedó en el depósito.",
  html:`<h3>Inventario periódico o por diferencia</h3><p>Durante el ejercicio las compras se registran en una cuenta <b>Compras</b> y las ventas solo por el precio. Al cierre se hace un recuento físico y se calcula:</p>
  <div class="formula">CMV = Existencia inicial + Compras − Existencia final</div>
  <p>Ejemplo: EI $ 50.000, compras $ 200.000, EF (recuento) $ 70.000 → CMV = <b>$ 180.000</b>. Es simple, pero no permite saber durante el año cuánto stock hay ni detectar faltantes.</p>
  <h3>Faltantes y sobrantes con inventario permanente</h3><p>Aunque lleves fichas, igual hay que hacer recuentos físicos periódicos. Si el recuento da menos que la ficha hay un <b>faltante</b> (robo, rotura, error); si da más, un <b>sobrante</b>.</p>
  <ul><li>Faltante: <span class="mono">Faltante de mercaderías (R−) a Mercaderías</span>.</li><li>Sobrante: <span class="mono">Mercaderías a Sobrante de mercaderías (R+)</span>.</li></ul>
  <p>Antes de registrarlo como pérdida, se investiga: puede ser un remito sin facturar o una devolución no registrada.</p>`,
  ex:[{type:"num",items:[{q:"EI $ 120.000, compras $ 480.000, EF $ 150.000. ¿Cuál es el CMV?",a:450000,u:"$"},{q:"Con esos datos y ventas por $ 700.000, ¿cuál es la utilidad bruta?",a:250000,u:"$"},{q:"Ventas $ 1.000.000 con margen bruto del 40%, EI $ 100.000 y compras $ 650.000. ¿Cuál debería ser la existencia final?",a:150000,u:"$",hint:"CMV = 600.000"}]},
   {type:"asiento",accounts:ACC,entries:[{t:"30/06 · La ficha de stock indica mercaderías por $ 85.000 y el recuento físico da $ 82.000. Se confirma que es un faltante.",e:[["Faltante de mercaderías",3000,0],["Mercaderías",0,3000]]}]}]},
 {lead:"Los resultados se registran cuando se devengan, no cuando se cobran o se pagan. Al cierre hay que ajustar lo que todavía no está bien imputado.",
  html:`<p>El <b>devengamiento</b> dice que los ingresos y gastos se imputan al período en que se generan, sin importar cuándo se mueve el dinero. Al cierre del ejercicio hay cuatro situaciones típicas:</p>
  <div class="tw"><table><thead><tr><th>Situación</th><th>Ejemplo</th><th>Ajuste</th></tr></thead><tbody>
  <tr><td><b>Gasto pagado por adelantado</b></td><td>Se pagaron 6 meses de alquiler y al cierre pasaron 3</td><td>La parte consumida pasa a gasto</td></tr>
  <tr><td><b>Gasto devengado no pagado</b></td><td>Intereses del préstamo del mes, a pagar en enero</td><td>Gasto contra un pasivo</td></tr>
  <tr><td><b>Ingreso cobrado por adelantado</b></td><td>Un cliente pagó un servicio que se presta el mes siguiente</td><td>Es un pasivo hasta que se presta</td></tr>
  <tr><td><b>Ingreso devengado no cobrado</b></td><td>Intereses ganados de un plazo fijo que vence después del cierre</td><td>Crédito contra un resultado positivo</td></tr></tbody></table></div>
  <p>Para registrar un pago anticipado se usa una cuenta de activo (por ejemplo, <i>Alquileres pagados por adelantado</i>). A medida que pasa el tiempo, se transfiere a la cuenta de gasto.</p>`,
  ex:[{type:"asiento",accounts:ACC,entries:[
   {t:"01/10 · Se pagan por banco 6 meses de alquiler del local por adelantado: $ 600.000.",e:[["Alquileres pagados por adelantado",600000,0],["Banco Nación c/c",0,600000]]},
   {t:"31/12 · Cierre de ejercicio. Ajustá el alquiler: transcurrieron 3 de los 6 meses.",e:[["Alquileres perdidos",300000,0],["Alquileres pagados por adelantado",0,300000]],why:"Quedan $ 300.000 como activo: corresponden a enero, febrero y marzo."},
   {t:"31/12 · Se devengaron intereses del préstamo bancario por $ 45.000 que se pagan en enero.",e:[["Intereses perdidos",45000,0],["Intereses a pagar",0,45000]]},
   {t:"15/12 · Un cliente paga por transferencia $ 200.000 por un servicio de consultoría que se presta en enero (ignorá el IVA).",e:[["Banco Nación c/c",200000,0],["Cobros anticipados",0,200000]],why:"Todavía no se prestó el servicio: es una obligación con el cliente."},
   {t:"31/12 · Se devengaron los sueldos de diciembre por $ 900.000, que se pagan en los primeros días de enero (sin cargas sociales).",e:[["Sueldos y jornales",900000,0],["Sueldos a pagar",0,900000]]}]}]},
 {lead:"Los bienes de uso (máquinas, rodados, muebles) se desgastan. La amortización distribuye su costo a lo largo de los años en que se usan.",
  html:`<div class="formula">Amortización anual (método lineal) = (Valor de origen − Valor residual) / Vida útil</div>
  <p>Ejemplo: un rodado de $ 12.000.000, con valor residual estimado de $ 2.000.000 y vida útil de 5 años, se amortiza $ 2.000.000 por año.</p>
  <div class="tw"><table><thead><tr><th>Cuenta</th><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>
  <tr><td>Amortización rodados (R−)</td><td class="r num d">2.000.000</td><td></td></tr><tr><td style="padding-left:32px">a Amortización acumulada rodados</td><td></td><td class="r num h">2.000.000</td></tr></tbody></table></div>
  <p>La <b>amortización acumulada</b> es una cuenta <b>regularizadora del activo</b>: tiene saldo acreedor y se resta del valor de origen. El <b>valor residual contable</b> (o valor de libros) es origen menos amortización acumulada.</p>
  <h3>Otros métodos</h3><ul><li><b>Por unidades de producción:</b> según horas de uso o kilómetros recorridos.</li><li><b>Decrecientes:</b> más amortización los primeros años (por ejemplo, suma de dígitos).</li></ul>
  <h3>Criterios prácticos</h3><ul><li>Los <b>terrenos no se amortizan</b>: no tienen vida útil limitada.</li><li>Las <b>mejoras</b> que aumentan la vida útil o la capacidad se suman al valor del bien; las reparaciones comunes son gasto.</li>
  <li>En el año de alta se puede amortizar por meses de uso o, por convención de la empresa, el año completo. Para Ganancias, la ley permite computar el año de alta completo (Módulo 21).</li></ul>`,
  ex:[{type:"num",items:[
   {q:"Una máquina cuesta $ 8.000.000, valor residual $ 800.000, vida útil 6 años. ¿Amortización anual lineal?",a:1200000,u:"$"},
   {q:"¿Cuál es el valor residual contable de esa máquina al final del año 4?",a:3200000,u:"$",hint:"8.000.000 − 4 × 1.200.000"},
   {q:"Un camión de $ 30.000.000 tiene vida útil de 500.000 km, sin valor residual. Este año recorrió 60.000 km. ¿Amortización del año?",a:3600000,u:"$"},
   {q:"Unos muebles de $ 1.200.000 (sin residual, 10 años) se compran el 1/10 y el cierre es el 31/12. Amortizando por meses, ¿cuánto corresponde al primer ejercicio?",a:30000,u:"$",hint:"120.000 por año × 3/12"}]},
   {type:"asiento",accounts:ACC,entries:[{t:"31/12 · Registrá la amortización anual de muebles y útiles por $ 120.000.",e:[["Amortización muebles y útiles",120000,0],["Amortización acumulada muebles y útiles",0,120000]]}]}]},
 {lead:"No todos los clientes van a pagar. La prudencia exige reconocer esa pérdida probable antes de que se confirme.",
  html:`<p>Una <b>previsión</b> es una estimación de una pérdida probable. La <b>Previsión para deudores incobrables</b> es una cuenta regularizadora del activo: se resta de Deudores por ventas.</p>
  <h3>Cómo se calcula</h3><ul><li><b>Porcentaje sobre el saldo:</b> por experiencia, se estima que un % de los créditos no se cobrará.</li><li><b>Análisis por antigüedad:</b> se aplican porcentajes mayores a los créditos más vencidos.</li><li><b>Análisis individual</b> de los clientes en mora o en gestión judicial.</li></ul>
  <h3>Registración</h3><ol><li>Al cierre, se ajusta la previsión al importe estimado: <span class="mono">Deudores incobrables (R−) a Previsión para deudores incobrables</span>, por la diferencia con el saldo que ya tenía.</li>
  <li>Cuando un cliente se atrasa, se reclasifica: <span class="mono">Deudores morosos a Deudores por ventas</span>.</li>
  <li>Cuando se confirma que no va a pagar, se usa la previsión: <span class="mono">Previsión para deudores incobrables a Deudores morosos</span>. No se toca el resultado de nuevo, porque ya se reconoció.</li></ol>
  <div class="note"><b>Previsión y provisión.</b> En la terminología argentina, una <b>previsión</b> cubre algo incierto (incobrables, juicios) y una <b>provisión</b> es un pasivo cierto de importe estimado (por ejemplo, la provisión para impuesto a las Ganancias). En las NIIF se usa “provisión” para ambos.</div>`,
  ex:[{type:"num",items:[{q:"Saldo de Deudores por ventas $ 5.000.000. Se estima incobrable el 4%. ¿Qué saldo debe tener la previsión?",a:200000,u:"$"},{q:"La previsión ya tenía un saldo de $ 50.000. ¿Por cuánto se registra el ajuste del año?",a:150000,u:"$"}]},
   {type:"asiento",accounts:ACC,entries:[
    {t:"31/12 · Ajustá la previsión según el cálculo anterior.",e:[["Deudores incobrables",150000,0],["Previsión para deudores incobrables",0,150000]]},
    {t:"10/02 · El cliente Pérez, con deuda de $ 80.000, entra en mora. Reclasificá su crédito.",e:[["Deudores morosos",80000,0],["Deudores por ventas",0,80000]]},
    {t:"20/05 · Se confirma que Pérez no va a pagar. Dá de baja el crédito usando la previsión.",e:[["Previsión para deudores incobrables",80000,0],["Deudores morosos",0,80000]]}]}]},
 {lead:"El saldo del banco en tus libros casi nunca coincide con el extracto. La conciliación bancaria explica las diferencias y detecta errores.",
  html:`<h3>Causas de las diferencias</h3><div class="tw"><table><thead><tr><th>Partida</th><th>Está en</th><th>Qué hacer</th></tr></thead><tbody>
  <tr><td>Cheques emitidos no debitados</td><td>Libros, no en el banco</td><td>Se esperan; no se registra nada</td></tr>
  <tr><td>Depósitos en tránsito</td><td>Libros, no en el banco</td><td>Se esperan; no se registra nada</td></tr>
  <tr><td>Débitos bancarios no registrados (comisiones, impuesto a los débitos y créditos, débitos automáticos)</td><td>Banco, no en libros</td><td>Registrarlos en libros</td></tr>
  <tr><td>Créditos bancarios no registrados (transferencias recibidas, intereses)</td><td>Banco, no en libros</td><td>Registrarlos en libros</td></tr>
  <tr><td>Errores</td><td>Cualquiera</td><td>Corregir donde esté el error</td></tr></tbody></table></div>
  <h3>Método de los saldos ajustados</h3><p>Se ajusta por separado el saldo de libros (con lo que falta registrar) y el saldo del extracto (con las partidas en tránsito). Los dos ajustados deben dar lo mismo.</p>
  <div class="note"><b>Signo del extracto.</b> El banco muestra tu saldo a favor como saldo <b>acreedor</b>, porque para el banco es una deuda con vos. En tus libros es deudor.</div>`,
  ex:[{type:"custom",title:"Conciliá el Banco Nación al 30/06",render:conciliacion},
   {type:"asiento",title:"Registrá en libros lo que faltaba",accounts:ACC,entries:[
    {t:"30/06 · Gastos de mantenimiento de cuenta debitados por el banco: $ 5.000 (ignorá el IVA).",e:[["Gastos bancarios",5000,0],["Banco Nación c/c",0,5000]]},
    {t:"30/06 · Transferencia de un cliente para cancelar su factura: $ 60.000.",e:[["Banco Nación c/c",60000,0],["Deudores por ventas",0,60000]]}]}]},
 {lead:"Al terminar el ejercicio se cierran las cuentas de resultado y se determina la ganancia o pérdida del año.",
  html:`<h3>Pasos del cierre</h3><ol><li>Balance de sumas y saldos de comprobación.</li><li>Asientos de ajuste (devengamientos, amortizaciones, previsiones, inventario, diferencias de cambio, ajuste por inflación si corresponde).</li>
  <li>Balance de sumas y saldos ajustado.</li><li><b>Refundición de las cuentas de resultado:</b> se cancela cada cuenta de resultado contra <i>Resultado del ejercicio</i>.</li>
  <li>Se transfiere el resultado a <i>Resultados no asignados</i>, dentro del patrimonio neto.</li><li>Se preparan los estados contables (Módulo 15) y se transcriben al Libro de Inventarios y Balances.</li>
  <li><b>Asiento de cierre:</b> se cancelan todas las cuentas patrimoniales.</li><li>Al inicio del ejercicio siguiente, <b>asiento de apertura</b> con los mismos saldos.</li></ol>
  <h3>Refundición, paso a paso</h3><p>Las cuentas de resultado positivo tienen saldo acreedor: se debitan. Las de resultado negativo tienen saldo deudor: se acreditan. La diferencia va a Resultado del ejercicio. Si los ingresos superan a los gastos, Resultado del ejercicio queda con saldo acreedor (ganancia).</p>
  <div class="note"><b>Qué pasa después.</b> La asamblea de socios decide qué hacer con los Resultados no asignados: reservas, dividendos o dejarlos sin asignar (Módulo 16).</div>`,
  ex:[{type:"asiento",title:"Refundí los resultados de Comercial Del Sur SRL",accounts:ACC,entries:[
   {t:"31/12 · Saldos de resultados: Ventas $ 900.000 (acreedor), Costo de mercaderías vendidas $ 500.000, Sueldos y jornales $ 200.000 y Alquileres perdidos $ 100.000 (deudores). Refundilos en Resultado del ejercicio.",
    e:[["Ventas",900000,0],["Costo de mercaderías vendidas",0,500000],["Sueldos y jornales",0,200000],["Alquileres perdidos",0,100000],["Resultado del ejercicio",0,100000]],why:"Ganancia del ejercicio: $ 100.000."},
   {t:"31/12 · Transferí el resultado del ejercicio a Resultados no asignados.",e:[["Resultado del ejercicio",100000,0],["Resultados no asignados",0,100000]]}]},
   {type:"order",title:"Ordená los pasos del cierre",items:["Balance de comprobación","Asientos de ajuste","Balance de sumas y saldos ajustado","Refundición de cuentas de resultado","Preparación de los estados contables","Asiento de cierre","Asiento de apertura del nuevo ejercicio"]}]},
],
eval:[
 {q:"En el inventario permanente, cada venta genera…",o:["Un solo asiento por el precio","Dos asientos: venta y costo","Un asiento al cierre del año","Ningún asiento hasta cobrar"],a:1},
 {q:"Existencia inicial 40.000, compras 160.000, existencia final 30.000. CMV:",o:["170.000","190.000","230.000","130.000"],a:0},
 {q:"Por PEPS, el stock final queda valuado…",o:["A los precios más antiguos","A los precios más recientes","Al promedio","A precio de venta"],a:1},
 {q:"Un alquiler pagado por adelantado es, al momento del pago,…",o:["Un gasto","Un activo","Un pasivo","Patrimonio neto"],a:1},
 {q:"Intereses devengados al cierre y no pagados se registran…",o:["Intereses perdidos a Intereses a pagar","Intereses a pagar a Caja","No se registran","Caja a Intereses ganados"],a:0},
 {q:"La amortización acumulada es una cuenta…",o:["De activo con saldo deudor","Regularizadora del activo con saldo acreedor","De pasivo","De resultado"],a:1},
 {q:"¿Qué bien NO se amortiza?",o:["Rodados","Terrenos","Edificios","Software"],a:1},
 {q:"Cuando se confirma la incobrabilidad de un cliente ya previsionado, se debita…",o:["Deudores incobrables","Previsión para deudores incobrables","Ventas","Caja"],a:1},
 {q:"Un cheque emitido que el banco todavía no debitó…",o:["Se registra de nuevo en libros","Es una partida en tránsito: se ajusta el saldo del extracto","Es un error del banco","Se anula"],a:1},
 {q:"En la refundición, las cuentas de resultado positivo…",o:["Se acreditan","Se debitan","No se tocan","Pasan al activo"],a:1},
 {q:"El resultado del ejercicio se transfiere a…",o:["Capital social","Resultados no asignados","Caja","Reserva legal directamente"],a:1},
 {q:"Comisiones bancarias que figuran en el extracto pero no en los libros…",o:["Se registran en libros","Se ignoran","Se suman al extracto","Se reclaman siempre al banco"],a:0},
]};
})();
