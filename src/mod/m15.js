/* Módulo 15 · Estados contables */
(function(){
function armarER(el, done){
  el.innerHTML = `<p>Datos del ejercicio de Comercial Del Sur SRL (en miles de pesos):</p>
  <div class="tw"><table><tbody>
  <tr><td>Ventas netas</td><td class="r num">12.000</td><td>Gastos de comercialización</td><td class="r num">1.500</td></tr>
  <tr><td>Costo de mercaderías vendidas</td><td class="r num">7.200</td><td>Gastos de administración</td><td class="r num">1.800</td></tr>
  <tr><td>Intereses perdidos</td><td class="r num">600</td><td>Resultado por venta de bienes de uso (ganancia)</td><td class="r num">100</td></tr>
  <tr><td>Impuesto a las ganancias</td><td class="r num">350</td><td></td><td></td></tr></tbody></table></div><div data-n></div>`;
  const n=$("[data-n]",el); n.id=nid("er");
  EX.num({items:[
   {q:"Resultado bruto",a:4800,u:"miles"},{q:"Resultado operativo (bruto menos gastos de comercialización y administración)",a:1500,u:"miles"},
   {q:"Resultado antes del impuesto a las ganancias",a:1000,u:"miles",hint:"Operativo − intereses + otros ingresos"},{q:"Resultado neto del ejercicio",a:650,u:"miles"}]}, n, done);
}
function armarEFE(el, done){
  el.innerHTML = `<p>Método indirecto. Datos del ejercicio (en miles):</p><ul>
  <li>Resultado neto: 650. Amortizaciones del ejercicio: 400. Ganancia por venta de bienes de uso: 100.</li>
  <li>Créditos por ventas aumentaron 300. Bienes de cambio disminuyeron 150. Deudas comerciales aumentaron 200.</li>
  <li>Se vendieron bienes de uso por 250 cobrados y se compraron otros por 1.200 pagados.</li>
  <li>Se tomó un préstamo por 800 y se pagaron dividendos por 300.</li></ul><div data-n></div>`;
  const n=$("[data-n]",el); n.id=nid("efe");
  EX.num({items:[
   {q:"Flujo neto de las actividades operativas",a:1000,u:"miles",hint:"650 + 400 − 100 − 300 + 150 + 200"},
   {q:"Flujo neto de las actividades de inversión (con signo)",a:-950,u:"miles"},{q:"Flujo neto de las actividades de financiación",a:500,u:"miles"},
   {q:"Variación neta del efectivo",a:550,u:"miles"}]}, n, done);
}
CAMPUS.content[15] = {
lessons:[
 {lead:"Los estados contables son el producto final de la contabilidad. Tienen una estructura definida para que cualquier lector los entienda.",
  html:`<h3>Estados básicos</h3><ol><li><b>Estado de situación patrimonial</b> (o balance general): el patrimonio a una fecha.</li><li><b>Estado de resultados:</b> cómo se generó el resultado del período.</li><li><b>Estado de evolución del patrimonio neto:</b> los cambios en el PN.</li><li><b>Estado de flujo de efectivo:</b> de dónde vino y a dónde fue el efectivo.</li></ol>
  <p>Se complementan con <b>notas</b> y <b>anexos</b>, que forman parte integrante de los estados.</p>
  <h3>Reglas generales de presentación</h3><ul><li>Se presentan <b>comparativos</b> con el ejercicio anterior.</li><li>Identifican al ente, la fecha de cierre, el período cubierto y la moneda de presentación.</li><li>Expresados en moneda homogénea cuando corresponde (RT 6).</li><li>Firmados por el representante legal; si se auditan, se acompañan del informe del auditor.</li></ul>
  <p>Las normas de presentación estaban en las RT 8 (general) y RT 9 (entes comerciales, industriales y de servicios); hoy están en la RT 54. Los modelos de estados que vas a ver en este módulo siguen esa estructura.</p>
  <h3>Obligaciones legales</h3><p>El art. 326 del CCyC exige confeccionar estados contables al cierre de cada ejercicio. Las sociedades tienen, además, las reglas de los arts. 62 a 65 de la Ley General de Sociedades, y las que están en el art. 299 deben presentarlos ante el organismo de control.</p>`,
  ex:[{type:"pick",title:"¿Qué estado contable responde la pregunta?",options:["Situación patrimonial","Resultados","Evolución del PN","Flujo de efectivo"],items:[["¿Cuánto debe la empresa al cierre?","Situación patrimonial"],["¿Cuánto ganó en el año?","Resultados"],["¿Cuántos dividendos se distribuyeron?","Evolución del PN"],["¿Por qué tiene menos plata si ganó?","Flujo de efectivo"],["¿Cuánto vale su stock de mercaderías?","Situación patrimonial"]]}]},
 {lead:"El estado de situación patrimonial muestra el activo, el pasivo y el patrimonio neto, ordenados de mayor a menor liquidez.",
  html:`<h3>Corriente y no corriente</h3><p>Un activo es <b>corriente</b> si se espera convertir en efectivo o consumir dentro de los 12 meses del cierre. Un pasivo es corriente si vence dentro de ese plazo.</p>
  <div class="tw"><table><thead><tr><th>Activo</th><th>Pasivo</th></tr></thead><tbody>
  <tr><td><b>Corriente:</b> Caja y bancos · Inversiones temporarias · Créditos por ventas · Otros créditos · Bienes de cambio</td><td><b>Corriente:</b> Deudas comerciales · Préstamos · Remuneraciones y cargas sociales · Cargas fiscales · Anticipos de clientes · Dividendos a pagar · Otras deudas · Previsiones</td></tr>
  <tr><td><b>No corriente:</b> Créditos a largo plazo · Bienes de cambio de lenta rotación · Inversiones permanentes · Bienes de uso · Propiedades de inversión · Activos intangibles · Llave de negocio</td><td><b>No corriente:</b> Préstamos a largo plazo · Previsiones a largo plazo · Pasivo por impuesto diferido</td></tr></tbody></table></div>
  <p>Debajo del pasivo va el <b>patrimonio neto</b> (con referencia al estado de evolución del PN). Total del activo = total del pasivo + PN.</p>
  <h3>Ejemplo resumido (en miles)</h3><div class="tw"><table><thead><tr><th>Rubro</th><th class="r">Importe</th></tr></thead><tbody>
  <tr><td>Caja y bancos</td><td class="r num">500</td></tr><tr><td>Créditos por ventas</td><td class="r num">1.500</td></tr><tr><td>Bienes de cambio</td><td class="r num">1.000</td></tr><tr><td><b>Activo corriente</b></td><td class="r num"><b>3.000</b></td></tr>
  <tr><td>Bienes de uso</td><td class="r num">5.000</td></tr><tr><td><b>Total del activo</b></td><td class="r num"><b>8.000</b></td></tr>
  <tr><td>Deudas comerciales</td><td class="r num">900</td></tr><tr><td>Préstamos (corrientes)</td><td class="r num">700</td></tr><tr><td>Cargas fiscales y sociales</td><td class="r num">400</td></tr><tr><td><b>Pasivo corriente</b></td><td class="r num"><b>2.000</b></td></tr>
  <tr><td>Préstamos (no corrientes)</td><td class="r num">3.000</td></tr><tr><td><b>Total del pasivo</b></td><td class="r num"><b>5.000</b></td></tr><tr><td><b>Patrimonio neto</b></td><td class="r num"><b>3.000</b></td></tr></tbody></table></div>`,
  ex:[{type:"pick",title:"¿En qué rubro se presenta?",options:["Caja y bancos","Créditos por ventas","Otros créditos","Bienes de cambio","Bienes de uso","Cargas fiscales"],items:[
   ["Saldo a favor de IVA","Otros créditos"],["IVA a pagar del mes","Cargas fiscales"],["Mercadería en el depósito","Bienes de cambio"],["Cupones de tarjeta de crédito a cobrar","Créditos por ventas"],["Fondo fijo","Caja y bancos"],["Camioneta de reparto","Bienes de uso"],["Anticipo de Ganancias pagado","Otros créditos"]]},
   {type:"tf",items:[["Un préstamo que vence en 18 meses es pasivo corriente","Falso"],["La cuota de un préstamo a largo plazo que vence en los próximos 12 meses se clasifica como corriente","Verdadero"]]}]},
 {lead:"El estado de resultados explica cómo se llegó al resultado del ejercicio, de lo operativo a lo financiero y lo impositivo.",
  html:`<div class="tw"><table><thead><tr><th>Concepto</th><th>Contenido</th></tr></thead><tbody>
  <tr><td><b>Ventas netas</b></td><td>Ventas menos devoluciones, bonificaciones e impuestos que gravan la venta (IVA excluido, Ingresos Brutos según el criterio)</td></tr>
  <tr><td>− Costo de los bienes vendidos o servicios prestados</td><td>CMV o costo de producción de lo vendido</td></tr>
  <tr><td><b>= Resultado bruto</b></td><td></td></tr>
  <tr><td>− Gastos de comercialización</td><td>Publicidad, comisiones, fletes de venta, sueldos de vendedores, incobrables</td></tr>
  <tr><td>− Gastos de administración</td><td>Sueldos administrativos, honorarios, alquiler de oficina</td></tr>
  <tr><td>± Resultados de inversiones en entes relacionados</td><td>Valor patrimonial proporcional</td></tr>
  <tr><td>± Resultados financieros y por tenencia</td><td>Intereses, diferencias de cambio, RECPAM, tenencia de bienes de cambio</td></tr>
  <tr><td>± Otros ingresos y egresos</td><td>Venta de bienes de uso, recupero de previsiones</td></tr>
  <tr><td><b>= Resultado antes del impuesto a las ganancias</b></td><td></td></tr>
  <tr><td>− Impuesto a las ganancias</td><td>Impuesto corriente y diferido</td></tr>
  <tr><td><b>= Resultado neto del ejercicio</b></td><td>Pasa al estado de evolución del PN</td></tr></tbody></table></div>
  <p>Si hay operaciones en discontinuación, su resultado se muestra por separado. El <b>Anexo de gastos</b> (información requerida por el art. 64 de la Ley General de Sociedades) desagrega los gastos por naturaleza (sueldos, alquileres, amortizaciones) y por función.</p>`,
  ex:[{type:"custom",title:"Armá el estado de resultados",render:armarER},
   {type:"pick",title:"¿Comercialización o administración?",options:["Comercialización","Administración"],items:[["Comisiones de vendedores","Comercialización"],["Honorarios del contador","Administración"],["Publicidad en redes","Comercialización"],["Sueldo del gerente general","Administración"],["Fletes de entrega a clientes","Comercialización"],["Deudores incobrables","Comercialización"]]}]},
 {lead:"El estado de evolución del patrimonio neto muestra qué cambió en el PN durante el ejercicio y por qué.",
  html:`<p>Tiene forma de matriz: las <b>columnas</b> son los componentes del PN y las <b>filas</b>, los movimientos.</p>
  <div class="tw"><table><thead><tr><th>Movimiento</th><th class="r">Capital</th><th class="r">Ajuste de capital</th><th class="r">Reserva legal</th><th class="r">Res. no asignados</th><th class="r">Total</th></tr></thead><tbody>
  <tr><td>Saldos al inicio</td><td class="r num">1.000</td><td class="r num">600</td><td class="r num">150</td><td class="r num">800</td><td class="r num">2.550</td></tr>
  <tr><td>Asamblea: reserva legal</td><td></td><td></td><td class="r num">40</td><td class="r num">(40)</td><td class="r num">—</td></tr>
  <tr><td>Asamblea: dividendos en efectivo</td><td></td><td></td><td></td><td class="r num">(300)</td><td class="r num">(300)</td></tr>
  <tr><td>Aumento de capital en efectivo</td><td class="r num">100</td><td></td><td></td><td></td><td class="r num">100</td></tr>
  <tr><td>Resultado del ejercicio</td><td></td><td></td><td></td><td class="r num">650</td><td class="r num">650</td></tr>
  <tr><td><b>Saldos al cierre</b></td><td class="r num"><b>1.100</b></td><td class="r num"><b>600</b></td><td class="r num"><b>190</b></td><td class="r num"><b>1.110</b></td><td class="r num"><b>3.000</b></td></tr></tbody></table></div>
  <p>Los números entre paréntesis son disminuciones. Las <b>modificaciones de saldos iniciales</b> (corrección de errores de ejercicios anteriores o cambios de criterio) se muestran al principio, ajustando los saldos de inicio, nunca contra el resultado del ejercicio.</p>`,
  ex:[{type:"num",items:[{q:"PN inicial $ 4.000.000; aporte de capital $ 500.000; dividendos en efectivo $ 600.000; resultado del ejercicio $ 900.000. ¿PN al cierre?",a:4800000,u:"$"},{q:"En el mismo caso, la asamblea también destinó $ 45.000 a reserva legal. ¿Cuánto cambia el PN total por ese movimiento?",a:0,u:"$",tol:0,hint:"Es una reclasificación entre columnas."}]},
   {type:"tf",items:[["La distribución de dividendos en efectivo disminuye el patrimonio neto","Verdadero"],["La corrección de un error de un ejercicio anterior se registra como resultado del ejercicio actual","Falso","Se ajustan los saldos iniciales."],["Constituir reserva legal disminuye el PN total","Falso"]]}]},
 {lead:"Una empresa puede ganar plata y quedarse sin efectivo. El estado de flujo de efectivo muestra por qué.",
  html:`<p>Explica la variación del <b>efectivo y sus equivalentes</b> clasificando los movimientos en tres actividades:</p>
  <ul><li><b>Operativas:</b> las principales de la empresa: cobros a clientes, pagos a proveedores, sueldos, impuestos.</li><li><b>De inversión:</b> compra y venta de bienes de uso, intangibles e inversiones no equivalentes de efectivo.</li><li><b>De financiación:</b> préstamos tomados y pagados, aportes de los dueños, dividendos pagados.</li></ul>
  <h3>Dos métodos para las actividades operativas</h3><ul><li><b>Directo:</b> muestra los cobros y pagos brutos (cobros a clientes, pagos a proveedores).</li><li><b>Indirecto:</b> parte del resultado neto y lo ajusta.</li></ul>
  <h3>Ajustes en el método indirecto</h3><div class="tw"><table><thead><tr><th>Partida</th><th>Ajuste</th></tr></thead><tbody>
  <tr><td>Amortizaciones, previsiones (gastos que no son salida de efectivo)</td><td>Se suman</td></tr><tr><td>Ganancias por venta de bienes de uso (su cobro va a inversión)</td><td>Se restan</td></tr>
  <tr><td>Aumento de créditos o de bienes de cambio</td><td>Se resta</td></tr><tr><td>Disminución de créditos o de bienes de cambio</td><td>Se suma</td></tr>
  <tr><td>Aumento de deudas operativas</td><td>Se suma</td></tr><tr><td>Disminución de deudas operativas</td><td>Se resta</td></tr></tbody></table></div>`,
  ex:[{type:"custom",title:"Armá el flujo de efectivo",render:armarEFE},
   {type:"pick",title:"¿En qué actividad se clasifica?",options:["Operativa","Inversión","Financiación"],items:[["Pago de sueldos","Operativa"],["Compra de una máquina","Inversión"],["Préstamo bancario recibido","Financiación"],["Cobros a clientes","Operativa"],["Pago de dividendos","Financiación"],["Venta de un rodado usado","Inversión"]]}]},
 {lead:"Las notas y los anexos amplían los estados contables. Sin ellos, los números no se pueden interpretar.",
  html:`<h3>Notas típicas</h3><ul><li><b>Bases de preparación:</b> normas aplicadas (RT 54, NIIF), moneda homogénea, comparativos.</li><li><b>Criterios de medición</b> de cada rubro.</li><li><b>Composición de los rubros</b> (por ejemplo, el detalle de Otros créditos).</li><li><b>Activos de disponibilidad restringida</b> y bienes gravados con prenda o hipoteca.</li><li><b>Contingencias</b> no registradas.</li><li><b>Restricciones a la distribución de utilidades</b> (por ejemplo, por contratos de préstamo).</li><li><b>Hechos posteriores al cierre.</b></li><li><b>Operaciones con partes relacionadas.</b></li><li><b>Plazos</b> de créditos y deudas, y tasas de interés.</li></ul>
  <h3>Anexos habituales</h3><div class="tw"><table><thead><tr><th>Anexo</th><th>Contenido</th></tr></thead><tbody>
  <tr><td>Bienes de uso</td><td>Valor de origen al inicio, altas, bajas, amortizaciones y valor residual por tipo de bien</td></tr>
  <tr><td>Activos intangibles</td><td>Igual estructura que bienes de uso</td></tr><tr><td>Inversiones</td><td>Detalle de títulos, acciones y participaciones</td></tr>
  <tr><td>Previsiones</td><td>Saldos iniciales, aumentos, usos y saldos finales</td></tr><tr><td>Costo de las mercaderías vendidas</td><td>EI + compras − EF, o el costo de producción</td></tr>
  <tr><td>Información sobre gastos</td><td>Por naturaleza y por función (art. 64 de la LGS)</td></tr><tr><td>Activos y pasivos en moneda extranjera</td><td>Moneda, monto, tipo de cambio aplicado</td></tr></tbody></table></div>
  <h3>Información complementaria de las sociedades</h3><p>Junto con los estados, el directorio presenta la <b>memoria</b> (art. 66 de la LGS), que explica la situación de la sociedad, su evolución y las perspectivas, y la propuesta de distribución de utilidades.</p>`,
  ex:[{type:"pick",title:"¿Dónde se informa?",options:["Nota","Anexo","Memoria"],items:[["Un juicio con pérdida posible","Nota"],["Movimientos de bienes de uso del ejercicio","Anexo"],["Propuesta del directorio sobre los dividendos","Memoria"],["Un incendio ocurrido después del cierre","Nota"],["Saldos en dólares y tipo de cambio usado","Anexo"],["Un plazo fijo prendado en garantía de un préstamo","Nota"]]}]},
 {lead:"Cuando una empresa controla a otras, se presentan estados consolidados como si el grupo fuera una sola entidad.",
  html:`<h3>Tipos de relación entre sociedades</h3><div class="tw"><table><thead><tr><th>Relación</th><th>Indicio habitual</th><th>Tratamiento</th></tr></thead><tbody>
  <tr><td><b>Control</b></td><td>Más del 50% de los votos o poder para dirigir las políticas</td><td>Consolidación</td></tr>
  <tr><td><b>Control conjunto</b></td><td>Decisiones compartidas por acuerdo (negocio conjunto)</td><td>Valor patrimonial proporcional</td></tr>
  <tr><td><b>Influencia significativa</b></td><td>Entre 20% y 50% de los votos, o participación en el directorio</td><td>Valor patrimonial proporcional</td></tr>
  <tr><td><b>Sin influencia</b></td><td>Menos del 20%</td><td>Costo o valor razonable</td></tr></tbody></table></div>
  <h3>Valor patrimonial proporcional (VPP)</h3><p>La inversión se mide por el porcentaje del PN de la participada. Si la participada gana $ 1.000.000 y tenés el 30%, tu inversión sube $ 300.000 y reconocés esa ganancia.</p>
  <h3>Consolidación</h3><ol><li>Se suman, rubro por rubro, los estados de la controlante y las controladas.</li><li>Se eliminan la inversión de la controlante y el PN de la controlada.</li><li>Se eliminan los saldos y operaciones entre empresas del grupo (ventas, créditos y deudas recíprocas) y los resultados no realizados.</li><li>La parte del PN y del resultado de las controladas que no pertenece a la controlante se muestra como <b>participación no controladora</b>.</li></ol>`,
  ex:[{type:"num",items:[{q:"Tenés el 30% de una sociedad que ganó $ 1.000.000. ¿Cuánto reconocés por VPP?",a:300000,u:"$"},{q:"La controlante posee el 80% de una controlada con PN de $ 10.000.000. ¿Participación no controladora?",a:2000000,u:"$"}]},
   {type:"pick",title:"¿Qué tratamiento corresponde?",options:["Consolidar","VPP","Costo o valor razonable"],items:[["Participación del 65% de los votos","Consolidar"],["Participación del 25% con un director propio","VPP"],["Participación del 3% en una empresa que cotiza","Costo o valor razonable"],["50% en un negocio conjunto con otro socio","VPP"]]}]},
],
eval:[
 {q:"¿Cuál NO es un estado contable básico?",o:["Estado de situación patrimonial","Estado de resultados","Memoria del directorio","Estado de flujo de efectivo"],a:2},
 {q:"Un activo es corriente si se espera realizar dentro de…",o:["6 meses","12 meses desde el cierre","24 meses","El ejercicio siguiente completo, sin importar el plazo"],a:1},
 {q:"El saldo a favor de IVA se presenta en…",o:["Créditos por ventas","Otros créditos","Cargas fiscales","Patrimonio neto"],a:1},
 {q:"Ventas 10.000, CMV 6.000, gastos de comercialización 1.000, de administración 1.200. Resultado operativo:",o:["4.000","1.800","2.800","3.000"],a:1},
 {q:"Los deudores incobrables suelen clasificarse como gastos de…",o:["Administración","Comercialización","Financiación","Producción"],a:1},
 {q:"La corrección de un error de un ejercicio anterior se muestra…",o:["En el resultado del ejercicio","Como modificación de saldos iniciales en el EEPN","En el flujo de efectivo","No se muestra"],a:1},
 {q:"En el método indirecto, las amortizaciones…",o:["Se restan del resultado","Se suman al resultado","Son actividades de inversión","No se tocan"],a:1},
 {q:"Un aumento de los créditos por ventas, en el método indirecto,…",o:["Se suma","Se resta","Va a financiación","No afecta"],a:1},
 {q:"El pago de dividendos es una actividad de…",o:["Operación","Inversión","Financiación","Ninguna"],a:2},
 {q:"Una participación del 30% con influencia significativa se mide por…",o:["Consolidación","Valor patrimonial proporcional","Costo","Valor nominal"],a:1},
 {q:"Al consolidar, las ventas entre la controlante y la controlada…",o:["Se suman","Se eliminan","Se duplican","Se informan en notas solamente"],a:1},
]};
})();
