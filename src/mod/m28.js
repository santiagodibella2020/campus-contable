/* Módulo 28 · Seminario integrador: un año en una empresa */
(function(){
const ACC = ["Caja","Banco Nación c/c","Deudores por ventas","Previsión para deudores incobrables","Mercaderías","IVA Crédito Fiscal","Alquileres pagados por adelantado",
 "Rodados","Amortización acumulada rodados","Socios cuenta aporte","Proveedores","IVA Débito Fiscal","Sueldos a pagar","Retenciones y aportes a depositar","Cargas sociales a pagar","Intereses a pagar","Préstamos bancarios","Impuesto a las ganancias a pagar",
 "Capital social","Ventas","Costo de mercaderías vendidas","Sueldos y jornales","Cargas sociales","Alquileres perdidos","Amortizaciones rodados","Deudores incobrables","Faltante de mercaderías","Intereses perdidos","Impuesto a las ganancias"];
const CASO = `<div class="note"><b>El caso.</b> Ana (60%) y Bruno (40%) fundan <b>Ferretería del Sur SRL</b>, un comercio que compra y revende herramientas. El ejercicio va del 1/1 al 31/12. Vas a acompañar a la empresa durante todo su primer año: la constitución, las operaciones, los sueldos, los impuestos, el cierre, los estados contables y el informe final a los socios. Las cifras son de un caso didáctico y se suponen ya expresadas en moneda homogénea (Módulo 13).</div>`;
const SALDOS = `<div class="tw"><table><thead><tr><th>Ferretería del Sur SRL · saldos ajustados al 31/12</th><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>
<tr><td>Caja y bancos</td><td class="r mono">10.680.000</td><td></td></tr>
<tr><td>Deudores por ventas</td><td class="r mono">4.000.000</td><td></td></tr>
<tr><td>Previsión para deudores incobrables</td><td></td><td class="r mono">120.000</td></tr>
<tr><td>Mercaderías</td><td class="r mono">5.000.000</td><td></td></tr>
<tr><td>Alquileres pagados por adelantado</td><td class="r mono">400.000</td><td></td></tr>
<tr><td>Rodados</td><td class="r mono">8.000.000</td><td></td></tr>
<tr><td>Amortización acumulada rodados</td><td></td><td class="r mono">1.600.000</td></tr>
<tr><td>Proveedores</td><td></td><td class="r mono">3.500.000</td></tr>
<tr><td>Remuneraciones y cargas sociales a pagar</td><td></td><td class="r mono">1.860.000</td></tr>
<tr><td>Préstamos bancarios (vence en febrero)</td><td></td><td class="r mono">5.000.000</td></tr>
<tr><td>Intereses a pagar</td><td></td><td class="r mono">1.500.000</td></tr>
<tr><td>Capital social</td><td></td><td class="r mono">10.000.000</td></tr>
<tr><td>Ventas</td><td></td><td class="r mono">90.000.000</td></tr>
<tr><td>Costo de mercaderías vendidas</td><td class="r mono">54.000.000</td><td></td></tr>
<tr><td>Sueldos y cargas sociales (incluye SAC)</td><td class="r mono">24.180.000</td><td></td></tr>
<tr><td>Alquileres perdidos</td><td class="r mono">2.000.000</td><td></td></tr>
<tr><td>Amortizaciones rodados</td><td class="r mono">1.600.000</td><td></td></tr>
<tr><td>Deudores incobrables</td><td class="r mono">120.000</td><td></td></tr>
<tr><td>Faltante de mercaderías</td><td class="r mono">200.000</td><td></td></tr>
<tr><td>Gastos generales (servicios, fletes, papelería)</td><td class="r mono">1.900.000</td><td></td></tr>
<tr><td>Intereses perdidos</td><td class="r mono">1.500.000</td><td></td></tr>
<tr><td><b>Totales</b></td><td class="r mono"><b>113.580.000</b></td><td class="r mono"><b>113.580.000</b></td></tr>
</tbody></table></div>`;

CAMPUS.content[28] = {
lessons:[
 {lead:"Todo empieza con un contrato. Antes de vender un solo tornillo, la empresa tiene que existir legalmente y estar inscripta ante el fisco.",
  html:`${CASO}
  <h3>Por qué una SRL</h3><p>Ana y Bruno quieren limitar su responsabilidad al capital que aportan y no necesitan salir a buscar inversores. La <b>SRL</b> (LGS 19.550, arts. 146 a 162) encaja: su capital se divide en <b>cuotas</b>, tiene entre 1 y 50 socios y la administra una <b>gerencia</b>. Una SA tendría más requisitos (directorio, asambleas, en algunos casos fiscalización estatal) y sus acciones se transfieren con más facilidad, cosa que acá no buscan.</p>
  <h3>Capital, suscripción e integración</h3><p>Suscriben un capital de <b>$ 10.000.000</b>: Ana $ 6.000.000 y Bruno $ 4.000.000, todo en dinero. La ley exige integrar al menos el <b>25%</b> de los aportes en dinero al constituir la sociedad y completar el resto en un plazo de hasta dos años (LGS, art. 149). Integran el 25% depositándolo en el Banco Nación.</p>
  <div class="formula">Suscripción: Socios cuenta aporte a Capital social · Integración: Banco a Socios cuenta aporte</div>
  <p>La cuenta <b>Socios cuenta aporte</b> es un crédito de la sociedad contra sus socios: mientras no integren, le deben ese dinero. En el estado de situación patrimonial se muestra restando del patrimonio neto (porque es capital todavía no aportado).</p>
  <h3>El camino hasta abrir la persiana</h3><ul>
  <li><b>Registro Público</b> de la jurisdicción (en CABA, la IGJ): se inscribe el contrato y la sociedad queda regularmente constituida.</li>
  <li><b>ARCA</b>: CUIT, alta en IVA como responsable inscripto, en Ganancias y como empleador. Una sociedad no puede ser monotributista.</li>
  <li><b>Ingresos Brutos</b> en la provincia (o Convenio Multilateral si vende en varias).</li>
  <li><b>Habilitación municipal</b> del local y tasa de seguridad e higiene.</li>
  <li><b>Libros</b>: Diario, Inventarios y Balances, y los societarios (actas de gerencia y de reuniones de socios), rubricados o digitales según la jurisdicción (CCyC, arts. 320 a 331).</li></ul>`,
  ex:[{type:"asiento",title:"Registrá la constitución",accounts:ACC,entries:[
    {t:"02/01 · Ana y Bruno suscriben el capital de $ 10.000.000.",e:[["Socios cuenta aporte",10000000,0],["Capital social",0,10000000]]},
    {t:"02/01 · Integran el 25% en efectivo, depositándolo en el Banco Nación.",e:[["Banco Nación c/c",2500000,0],["Socios cuenta aporte",0,2500000]]},
    {t:"15/01 · Ya inscripta la sociedad, los socios integran el saldo por transferencia.",e:[["Banco Nación c/c",7500000,0],["Socios cuenta aporte",0,7500000]]}]},
   {type:"num",items:[{q:"¿Cuánto debe integrar Bruno, como mínimo, al constituir la sociedad?",a:1000000,u:"$",ex:"25% de $ 4.000.000."},{q:"Si Ana no integrara nada más después del 25%, ¿cuánto le debería a la sociedad?",a:4500000,u:"$",ex:"$ 6.000.000 − $ 1.500.000."}]},
   {type:"order",title:"Ordená los pasos típicos para empezar a operar",items:["Redactar y firmar el contrato social","Depositar el 25% del capital en dinero","Inscribir la sociedad en el Registro Público","Obtener la CUIT y las altas impositivas en ARCA","Inscribirse en Ingresos Brutos","Tramitar la habilitación municipal del local"]},
   {type:"tf",items:[["Ferretería del Sur SRL puede adherir al Monotributo si factura poco.",false,"El Monotributo es solo para personas humanas y sucesiones indivisas."],["La cuenta Socios cuenta aporte es un crédito contra los socios.",true,"Representa el capital suscripto todavía no integrado."],["En una SRL los socios responden con todo su patrimonio personal por las deudas de la sociedad.",false,"Limitan su responsabilidad a la integración de las cuotas que suscribieron (art. 146), con la garantía solidaria por la integración del capital."]]}]},

 {lead:"Con la empresa en marcha, llegan las primeras operaciones. Cada una tiene su comprobante, su asiento y su efecto en el IVA.",
  html:`${CASO}
  <h3>Las operaciones de enero a marzo</h3><div class="tw"><table><thead><tr><th>Fecha</th><th>Operación</th></tr></thead><tbody>
  <tr><td class="mono">20/01</td><td>Compra un utilitario por $ 8.000.000 más IVA 21%. Paga por transferencia (factura A).</td></tr>
  <tr><td class="mono">25/01</td><td>Compra mercaderías por $ 4.000.000 más IVA, a 60 días.</td></tr>
  <tr><td class="mono">30/01</td><td>Vende mercaderías por $ 3.000.000 más IVA en cuenta corriente. Su costo fue $ 1.800.000.</td></tr>
  <tr><td class="mono">28/02</td><td>Cobra al cliente por transferencia.</td></tr>
  <tr><td class="mono">01/03</td><td>Paga 6 meses de alquiler del local por adelantado: $ 1.200.000 (marzo a agosto).</td></tr>
  <tr><td class="mono">01/03</td><td>Recibe un préstamo bancario de $ 5.000.000 a 12 meses, con interés del 36% anual que se paga al vencimiento.</td></tr>
  <tr><td class="mono">25/03</td><td>Paga a los proveedores la compra del 25/01.</td></tr></tbody></table></div>
  <h3>Lo que conviene mirar en cada una</h3><ul>
  <li>El utilitario es un <b>bien de uso</b>: se activa por su costo sin IVA, porque el IVA de la factura A es crédito fiscal.</li>
  <li>En la venta hay dos asientos con inventario permanente: el del precio y el del costo.</li>
  <li>El alquiler pagado por adelantado es un <b>activo</b> que se irá consumiendo mes a mes.</li>
  <li>El préstamo devenga intereses día a día aunque se paguen al final. Eso se reconoce al cierre (lección 4).</li></ul>
  <h3>La primera DDJJ de IVA</h3><p>En enero, la compra del utilitario genera mucho crédito fiscal y casi no hay ventas. El resultado es un <b>saldo técnico a favor</b>, que no se cobra: se traslada a los meses siguientes y se va compensando con los débitos futuros (Ley 23.349, art. 24).</p>`,
  ex:[{type:"asiento",title:"Registrá el primer trimestre",accounts:ACC,entries:[
    {t:"20/01 · Compra del utilitario por $ 8.000.000 más IVA 21%, por transferencia.",e:[["Rodados",8000000,0],["IVA Crédito Fiscal",1680000,0],["Banco Nación c/c",0,9680000]]},
    {t:"25/01 · Compra de mercaderías por $ 4.000.000 más IVA, a 60 días.",e:[["Mercaderías",4000000,0],["IVA Crédito Fiscal",840000,0],["Proveedores",0,4840000]]},
    {t:"30/01 · Venta por $ 3.000.000 más IVA en cuenta corriente.",e:[["Deudores por ventas",3630000,0],["Ventas",0,3000000],["IVA Débito Fiscal",0,630000]]},
    {t:"30/01 · Costo de esa venta: $ 1.800.000.",e:[["Costo de mercaderías vendidas",1800000,0],["Mercaderías",0,1800000]]},
    {t:"28/02 · Cobro al cliente por transferencia.",e:[["Banco Nación c/c",3630000,0],["Deudores por ventas",0,3630000]]},
    {t:"01/03 · Pago de 6 meses de alquiler por adelantado.",e:[["Alquileres pagados por adelantado",1200000,0],["Banco Nación c/c",0,1200000]]},
    {t:"01/03 · Se acredita el préstamo bancario.",e:[["Banco Nación c/c",5000000,0],["Préstamos bancarios",0,5000000]]},
    {t:"25/03 · Pago a proveedores por transferencia.",e:[["Proveedores",4840000,0],["Banco Nación c/c",0,4840000]]}]},
   {type:"num",items:[{q:"¿Cuál es el saldo técnico de IVA de enero? (escribilo positivo, es a favor de la empresa)",a:1890000,u:"$",ex:"Crédito $ 2.520.000 − débito $ 630.000 = $ 1.890.000 a favor."},{q:"¿Qué saldo tiene el Banco Nación al 25/03, después de todas las operaciones?",a:2910000,u:"$",ex:"10.000.000 − 9.680.000 + 3.630.000 − 1.200.000 + 5.000.000 − 4.840.000 = 2.910.000. Fijate que si pagaba a los proveedores a 30 días, en febrero la cuenta quedaba en rojo: por eso importa planificar la caja."},{q:"¿Qué utilidad bruta dejó la venta del 30/01?",a:1200000,u:"$"}]},
   {type:"mc",items:[{q:"¿Por qué el utilitario se activa por $ 8.000.000 y no por $ 9.680.000?",o:["Porque el IVA se amortiza aparte","Porque el IVA de la compra es crédito fiscal recuperable","Porque los rodados no llevan IVA","Por un error del proveedor"],a:1,ex:"Un responsable inscripto computa el IVA como crédito fiscal, así que no forma parte del costo."},{q:"El alquiler pagado por adelantado, el 01/03, es…",o:["Un gasto del mes","Un activo","Un pasivo","Una cuenta de patrimonio neto"],a:1}]}]},

 {lead:"Ferretería del Sur contrata a su primer empleado. Desde ahora hay recibos, F.931 y vencimientos todos los meses.",
  html:`${CASO}
  <h3>El primer empleado</h3><p>En marzo entra un vendedor bajo el convenio de comercio, con un sueldo bruto de <b>$ 1.500.000</b> (cifra ilustrativa). Antes de su primer día hay que registrarlo en <b>Simplificación Registral</b> de ARCA y contratar una ART.</p>
  <h3>Del bruto al neto</h3><div class="tw"><table><thead><tr><th>Aportes del trabajador</th><th class="r">%</th><th class="r">$</th></tr></thead><tbody>
  <tr><td>Jubilación (SIPA)</td><td class="r">11</td><td class="r mono">165.000</td></tr>
  <tr><td>INSSJP (PAMI, Ley 19.032)</td><td class="r">3</td><td class="r mono">45.000</td></tr>
  <tr><td>Obra social</td><td class="r">3</td><td class="r mono">45.000</td></tr>
  <tr><td><b>Total retenido</b></td><td class="r"><b>17</b></td><td class="r mono"><b>255.000</b></td></tr></tbody></table></div>
  <p>El trabajador cobra $ 1.245.000 (los aportes sindicales y de convenio se dejan afuera para simplificar). Además, la empresa paga sus propias <b>contribuciones</b>. Para el caso suponemos un 24% en total, incluyendo obra social y ART. Es una tasa ilustrativa: la real depende del tipo de empleador y de la ART.</p>
  <div class="formula">Costo laboral = Bruto + Contribuciones = 1.500.000 + 360.000 = 1.860.000</div>
  <p>Los aportes retenidos y las contribuciones se declaran y pagan con el <b>F.931</b> al mes siguiente. El <b>SAC</b> se paga en dos cuotas, cada una igual al 50% de la mejor remuneración mensual del semestre (Ley 23.041).</p>
  <h3>El calendario mensual</h3><ul>
  <li><b>IVA</b>: DDJJ mensual (F.2002), con vencimiento según la terminación de la CUIT.</li>
  <li><b>Ingresos Brutos</b>: anticipo mensual sobre las ventas netas de IVA, con la alícuota de la provincia.</li>
  <li><b>F.931</b>: cargas sociales del mes anterior.</li>
  <li><b>Ganancias</b>: en el primer ejercicio no hay anticipos, porque se calculan sobre el impuesto del año anterior.</li></ul>`,
  ex:[{type:"asiento",title:"Devengá el sueldo de marzo",accounts:ACC,entries:[
    {t:"31/03 · Devengamiento del sueldo de marzo: bruto $ 1.500.000, aportes 17% y contribuciones 24%.",e:[["Sueldos y jornales",1500000,0],["Cargas sociales",360000,0],["Retenciones y aportes a depositar",0,255000],["Cargas sociales a pagar",0,360000],["Sueldos a pagar",0,1245000]]},
    {t:"03/04 · Pago del sueldo neto por transferencia.",e:[["Sueldos a pagar",1245000,0],["Banco Nación c/c",0,1245000]]},
    {t:"10/04 · Pago del F.931 (aportes retenidos y contribuciones).",e:[["Retenciones y aportes a depositar",255000,0],["Cargas sociales a pagar",360000,0],["Banco Nación c/c",0,615000]]}]},
   {type:"num",items:[{q:"¿Cuál es el costo laboral anual del empleado, contando 12 sueldos y el SAC completo (con sus contribuciones)?",a:24180000,u:"$",ex:"13 × $ 1.860.000. Es la cifra que vas a ver en el estado de resultados."},{q:"¿Cuánto vale cada cuota del SAC?",a:750000,u:"$"},
    {q:"En marzo hay débito fiscal por $ 1.260.000 y crédito por $ 420.000. Si arrastra un saldo a favor de $ 1.890.000, ¿cuánto saldo a favor le queda?",a:1050000,u:"$",ex:"1.890.000 − (1.260.000 − 420.000) = 1.050.000. Todavía no paga IVA."},
    {q:"Ventas del trimestre netas de IVA $ 9.000.000 y alícuota de Ingresos Brutos ilustrativa del 3%. ¿Cuánto es el impuesto del trimestre?",a:270000,u:"$"}]},
   {type:"pick",title:"¿Qué es cada concepto para la empresa?",options:["Aporte (lo paga el trabajador)","Contribución (la paga el empleador)"],items:[["Jubilación 11%","Aporte (lo paga el trabajador)","Se retiene del bruto."],["ART","Contribución (la paga el empleador)","El seguro de riesgos del trabajo lo paga la empresa."],["PAMI 3% del recibo","Aporte (lo paga el trabajador)",""],["Asignaciones familiares (sobre la nómina)","Contribución (la paga el empleador)",""],["Obra social 3% del recibo","Aporte (lo paga el trabajador)",""],["Fondo Nacional de Empleo","Contribución (la paga el empleador)",""]]}]},

 {lead:"Llega el 31 de diciembre. Antes de armar los estados contables hay que ajustar todo lo que el día a día no registró bien.",
  html:`${CASO}
  <h3>Lo que encuentra el contador al cierre</h3><ol>
  <li><b>Amortización</b>: el utilitario ($ 8.000.000) tiene una vida útil de 5 años sin valor residual. Se amortiza en línea recta y se computa el año de alta completo.</li>
  <li><b>Alquiler</b>: el 01/09 se pagaron otros 6 meses ($ 1.200.000, de septiembre a febrero) y se cargó todo a <i>Alquileres perdidos</i>. Enero y febrero del año que viene todavía no se consumieron.</li>
  <li><b>Intereses</b>: el préstamo de $ 5.000.000 al 36% anual lleva 10 meses (marzo a diciembre) y nada se registró.</li>
  <li><b>Incobrables</b>: los deudores suman $ 4.000.000 y, por la experiencia del rubro, se estima que no se cobrará el 3%.</li>
  <li><b>Recuento físico</b>: la ficha de stock dice $ 5.200.000 y el recuento da $ 5.000.000. No aparece ninguna explicación.</li></ol>
  <h3>Del balance de comprobación a los estados</h3><p>El proceso es siempre el mismo: balance de comprobación, asientos de ajuste, balance ajustado, estados contables y, por último, la <b>refundición</b> de las cuentas de resultado contra <i>Resultado del ejercicio</i> y el asiento de cierre. Al día siguiente se reabren las cuentas patrimoniales.</p>
  <div class="note"><b>Inflación.</b> En Argentina, la RT 6 obliga a reexpresar los estados en moneda de cierre cuando la inflación supera los parámetros de la RT 54. En el caso real, cada partida no monetaria se reexpresaría y aparecería el RECPAM (Módulo 13). Acá lo dejamos fuera para que el caso se pueda seguir a mano.</div>`,
  ex:[{type:"asiento",title:"Registrá los ajustes de cierre",accounts:ACC,entries:[
    {t:"31/12 · Amortización anual del utilitario.",e:[["Amortizaciones rodados",1600000,0],["Amortización acumulada rodados",0,1600000]]},
    {t:"31/12 · Ajuste del alquiler pagado el 01/09.",e:[["Alquileres pagados por adelantado",400000,0],["Alquileres perdidos",0,400000]],why:"Dos meses de $ 200.000 todavía no se consumieron."},
    {t:"31/12 · Intereses devengados del préstamo.",e:[["Intereses perdidos",1500000,0],["Intereses a pagar",0,1500000]],why:"5.000.000 × 36% × 10/12."},
    {t:"31/12 · Previsión para deudores incobrables.",e:[["Deudores incobrables",120000,0],["Previsión para deudores incobrables",0,120000]]},
    {t:"31/12 · Faltante del recuento físico.",e:[["Faltante de mercaderías",200000,0],["Mercaderías",0,200000]]}]},
   {type:"num",items:[{q:"Sumando el alquiler de marzo a agosto y el ajuste, ¿cuánto alquiler es gasto del ejercicio?",a:2000000,u:"$",ex:"10 meses (marzo a diciembre) × $ 200.000."},{q:"¿Cuál es el valor residual contable del utilitario al 31/12?",a:6400000,u:"$"},{q:"¿Cuánto se pagará de intereses en total al vencimiento del préstamo?",a:1800000,u:"$",ex:"12 meses. Los $ 300.000 de enero y febrero son gasto del ejercicio siguiente."}]},
   {type:"order",title:"Ordená el proceso de cierre",items:["Balance de comprobación de sumas y saldos","Asientos de ajuste","Balance de comprobación ajustado","Preparación de los estados contables","Refundición de las cuentas de resultado","Asiento de cierre","Asiento de reapertura del ejercicio siguiente"]}]},

 {lead:"Con los saldos ajustados se arman los estados contables. Es el producto final del año, el que van a leer los socios, el banco y el fisco.",
  html:`${CASO}${SALDOS}
  <h3>Impuesto a las ganancias</h3><p>Las sociedades tributan con la escala progresiva de la Ley 27.630 (25%, 30% y 35%, con tramos que se actualizan cada año). Con una ganancia de este tamaño, el resultado cae en el primer tramo, así que usamos el <b>25%</b>. Suponemos que el resultado impositivo coincide con el contable. En la vida real hay diferencias (por ejemplo, la previsión para incobrables no siempre es deducible) que dan lugar al impuesto diferido (Módulo 21).</p>
  <h3>Qué estados se presentan</h3><ul>
  <li><b>Estado de situación patrimonial</b>, con activos y pasivos separados en corrientes y no corrientes (los que se realizan o vencen dentro de los 12 meses son corrientes).</li>
  <li><b>Estado de resultados</b>: ventas, costo, resultado bruto, gastos de comercialización y de administración, resultados financieros e impuesto.</li>
  <li><b>Estado de evolución del patrimonio neto</b> y <b>estado de flujo de efectivo</b>.</li>
  <li><b>Notas y anexos</b> (bienes de uso, previsiones, costo de ventas, gastos), con la información comparativa desde el segundo ejercicio.</li></ul>
  <p>Una vez armados, los estados se transcriben al libro Inventarios y Balances, los aprueba la reunión de socios y, si los va a presentar ante terceros, los audita un contador independiente (Módulo 25).</p>`,
  ex:[{type:"num",title:"Armá el estado de resultados",items:[{q:"Resultado bruto",a:36000000,u:"$"},{q:"Total de gastos operativos (sueldos, alquileres, amortizaciones, incobrables, faltante y gastos generales)",a:30000000,u:"$"},{q:"Resultado antes del impuesto a las ganancias",a:4500000,u:"$",hint:"Restá los intereses perdidos al resultado operativo."},{q:"Impuesto a las ganancias (25%)",a:1125000,u:"$"},{q:"Resultado neto del ejercicio",a:3375000,u:"$"}]},
   {type:"asiento",accounts:ACC,entries:[{t:"31/12 · Registrá el impuesto a las ganancias del ejercicio.",e:[["Impuesto a las ganancias",1125000,0],["Impuesto a las ganancias a pagar",0,1125000]]}]},
   {type:"num",title:"Armá el estado de situación patrimonial",items:[{q:"Activo corriente",a:19960000,u:"$",ex:"10.680.000 + 4.000.000 − 120.000 + 5.000.000 + 400.000."},{q:"Activo no corriente",a:6400000,u:"$"},{q:"Pasivo corriente (incluí el impuesto a pagar)",a:12985000,u:"$",ex:"3.500.000 + 1.860.000 + 5.000.000 + 1.500.000 + 1.125.000. Todo vence dentro de los 12 meses."},{q:"Patrimonio neto al cierre",a:13375000,u:"$",ex:"Capital $ 10.000.000 + resultado $ 3.375.000. Activo $ 26.360.000 = Pasivo $ 12.985.000 + PN $ 13.375.000."}]},
   {type:"pick",title:"¿Dónde va cada partida?",options:["Activo corriente","Activo no corriente","Pasivo corriente","Patrimonio neto"],items:[["Rodados neto de amortización","Activo no corriente",""],["Alquileres pagados por adelantado (enero y febrero)","Activo corriente","Se consumen dentro de los 12 meses."],["Préstamo bancario que vence en febrero","Pasivo corriente",""],["Capital social","Patrimonio neto",""],["Previsión para deudores incobrables","Activo corriente","Es regularizadora: resta de los créditos."],["Intereses a pagar","Pasivo corriente",""]]}]},

 {lead:"Los números ya están. Ahora hay que explicarles a Ana y a Bruno qué significan y qué conviene hacer el año que viene.",
  html:`${CASO}
  <h3>Los indicadores del primer año</h3><div class="tw"><table><thead><tr><th>Dato</th><th class="r">$</th></tr></thead><tbody>
  <tr><td>Activo corriente</td><td class="r mono">19.960.000</td></tr><tr><td>Mercaderías</td><td class="r mono">5.000.000</td></tr>
  <tr><td>Pasivo corriente (todo el pasivo)</td><td class="r mono">12.985.000</td></tr><tr><td>Patrimonio neto</td><td class="r mono">13.375.000</td></tr>
  <tr><td>Ventas netas de IVA</td><td class="r mono">90.000.000</td></tr><tr><td>Costo de ventas</td><td class="r mono">54.000.000</td></tr><tr><td>Resultado neto</td><td class="r mono">3.375.000</td></tr></tbody></table></div>
  <h3>Qué hay que decidir con las utilidades</h3><ul>
  <li><b>Reserva legal</b>: la ley exige destinar al menos el 5% de la ganancia del ejercicio hasta llegar al 20% del capital (LGS, art. 70).</li>
  <li>El resto puede distribuirse, quedar como <b>resultados no asignados</b> o ir a reservas facultativas razonables.</li>
  <li>Si se distribuyen utilidades a socios que son personas humanas, la sociedad retiene el <b>7%</b> como pago único y definitivo del impuesto sobre dividendos (Ley de Ganancias, según la Ley 27.630).</li></ul>
  <h3>Cómo se escribe el informe a los socios</h3><p>Un buen informe de gestión es corto y directo. Empieza con la conclusión, la respalda con tres o cuatro indicadores comparados contra un parámetro (el rubro, el presupuesto o el año anterior) y termina con recomendaciones concretas. Evitá la jerga: los socios quieren saber si ganaron plata, si la empresa puede pagar lo que debe y qué tienen que decidir.</p>
  <div class="note"><b>Cierre del campus.</b> En este caso usaste casi todo lo que estudiaste: derecho societario, contabilidad, IVA, Ingresos Brutos, sueldos, Ganancias, estados contables y análisis. Así es el trabajo real de un contador: no hay materias separadas, hay una empresa.</div>`,
  ex:[{type:"num",title:"Calculá los indicadores",items:[{q:"Liquidez corriente",a:1.54,tol:0.01,ex:"19.960.000 / 12.985.000 = 1,54."},{q:"Prueba ácida",a:1.15,tol:0.01,ex:"(19.960.000 − 5.000.000) / 12.985.000."},{q:"Endeudamiento (pasivo / PN)",a:0.97,tol:0.01},{q:"Margen neto sobre ventas",a:3.75,u:"%",tol:0.02},{q:"Rentabilidad del PN al cierre (ROE)",a:25.2,u:"%",tol:0.1,ex:"3.375.000 / 13.375.000 = 25,2%. Sobre el capital aportado sería 33,75%."},{q:"Rotación de inventarios (CMV / stock final)",a:10.8,tol:0.05,ex:"Unas 10,8 veces al año: el stock dura unos 34 días."}]},
   {type:"num",title:"Distribución de utilidades",items:[{q:"¿Cuánto debe ir como mínimo a la reserva legal?",a:168750,u:"$",ex:"5% de $ 3.375.000."},{q:"Si se distribuyen $ 2.000.000 entre Ana y Bruno, ¿cuánto le corresponde a Ana antes de la retención?",a:1200000,u:"$"},{q:"¿Cuánto le retiene la sociedad a Ana por el impuesto sobre dividendos?",a:84000,u:"$",ex:"7% de $ 1.200.000."}]},
   {type:"mc",items:[{q:"Todo el pasivo es corriente y la mayor parte es el préstamo que vence en febrero. ¿Qué es lo más razonable recomendar?",o:["Distribuir todas las utilidades","Negociar la refinanciación a largo plazo o asegurar la caja para el vencimiento antes de distribuir","Comprar otro utilitario","Dejar de pagar a los proveedores"],a:1,ex:"La liquidez es aceptable, pero el vencimiento concentra el riesgo. Distribuir todo dejaría a la empresa justa para pagar."},
    {q:"¿Cuál es la mejor primera oración para el informe a los socios?",o:["Según la RT 54 y la RT 8, los estados contables se exponen…","En su primer año la empresa ganó $ 3,4 millones, un 25% sobre su patrimonio, y puede pagar sus deudas, aunque el préstamo de febrero exige cuidar la caja.","Se adjuntan los anexos A a H.","La liquidez corriente es 1,537."],a:1,ex:"Empieza por la conclusión, en el idioma de quien la lee."},
    {q:"Para que el análisis del año que viene sea más útil, lo más importante es…",o:["Cambiar de contador","Tener cifras comparativas y un presupuesto para contrastar","Usar más indicadores","Dejar de ajustar por inflación"],a:1}]}]}
],
eval:[
 {q:"En una SRL, ¿qué porcentaje mínimo de los aportes en dinero se integra al constituirla?",o:["10%","25%","50%","100%"],a:1},
 {q:"La compra de un utilitario por $ 8.000.000 más IVA, de un responsable inscripto, se activa por…",o:["$ 9.680.000","$ 8.000.000","$ 6.320.000","$ 1.680.000"],a:1},
 {q:"Un saldo técnico de IVA a favor…",o:["Se cobra en efectivo al mes siguiente","Se traslada y compensa con débitos futuros","Se pierde al cerrar el ejercicio","Se paga como anticipo de Ganancias"],a:1},
 {q:"Con un bruto de $ 1.500.000 y aportes del 17%, el neto es…",o:["$ 1.245.000","$ 1.140.000","$ 1.500.000","$ 1.860.000"],a:0},
 {q:"Un préstamo de $ 5.000.000 al 36% anual tomado el 01/03. ¿Cuántos intereses se devengan al 31/12?",o:["$ 1.800.000","$ 1.500.000","$ 1.200.000","$ 0, porque no se pagaron"],a:1},
 {q:"Se pagaron 6 meses de alquiler el 01/09 y se cargaron a gasto. Al 31/12 el ajuste es…",o:["Alquileres perdidos a Alquileres pagados por adelantado","Alquileres pagados por adelantado a Alquileres perdidos, por 2 meses","No requiere ajuste","Alquileres a pagar a Banco"],a:1},
 {q:"Un recuento físico menor que la ficha, sin explicación, se registra como…",o:["Sobrante de mercaderías","Faltante de mercaderías (pérdida)","Aumento del CMV del año siguiente","Nada"],a:1},
 {q:"Un préstamo que vence dentro de los 12 meses del cierre se expone como…",o:["Pasivo no corriente","Pasivo corriente","Patrimonio neto","Nota a los estados"],a:1},
 {q:"La reserva legal de una SRL es, como mínimo,…",o:["El 5% de la ganancia, hasta el 20% del capital","El 10% del capital","El 20% de la ganancia","No es obligatoria"],a:0},
 {q:"Activo $ 26.360.000 y pasivo $ 12.985.000. El patrimonio neto es…",o:["$ 39.345.000","$ 13.375.000","$ 12.985.000","$ 10.000.000"],a:1},
 {q:"Un informe de gestión para los socios debería empezar por…",o:["La normativa aplicada","La conclusión principal en lenguaje claro","Los anexos","La fórmula de cada indicador"],a:1},
 {q:"Al distribuir utilidades a socios personas humanas, la sociedad retiene…",o:["El 7%","El 21%","El 35%","Nada"],a:0},
]};
})();
