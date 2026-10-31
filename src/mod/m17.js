/* Módulo 17 · Costos I: sistemas de costeo */
(function(){
const ACC = ["Materias primas","Producción en proceso","Productos terminados","Mano de obra directa","Carga fabril aplicada","Carga fabril real","Sueldos a pagar","Proveedores","Costo de ventas","Variación de carga fabril","Desvío de precio de materia prima","Desvío de cantidad de materia prima"];
function procesos(el, done){
  el.innerHTML = `<p>Departamento de mezclado, mes de mayo. No había producción en proceso al inicio.</p><ul>
  <li>Se iniciaron <b>1.000 unidades</b>. Se terminaron y transfirieron <b>800</b>. Quedan <b>200 en proceso</b>, con el 100% de la materia prima y el 50% de la conversión.</li>
  <li>Costos del mes: materia prima <b>$ 50.000</b>; conversión (mano de obra + carga fabril) <b>$ 90.000</b>.</li></ul><div data-n></div>`;
  const n=$("[data-n]",el); n.id=nid("pr");
  EX.num({items:[
   {q:"Unidades equivalentes de materia prima",a:1000},{q:"Unidades equivalentes de conversión",a:900,hint:"800 terminadas + 200 × 50%"},
   {q:"Costo unitario total por unidad terminada",a:150,u:"$",hint:"50.000/1.000 + 90.000/900"},{q:"Costo de las unidades terminadas y transferidas",a:120000,u:"$"},{q:"Costo de la producción en proceso final",a:20000,u:"$",hint:"200 × 50 + 100 × 100"}]}, n, done);
}
CAMPUS.content[17] = {
lessons:[
 {lead:"El costo es el valor de los recursos sacrificados para obtener un bien o servicio. Clasificarlo bien es el primer paso para usarlo.",
  html:`<h3>Elementos del costo de producción</h3><ul><li><b>Materia prima (MP):</b> los materiales que forman parte del producto.</li><li><b>Mano de obra directa (MOD):</b> el trabajo de quienes transforman la materia prima.</li><li><b>Carga fabril o costos indirectos de fabricación (CIF):</b> todo lo demás de la fábrica (supervisión, energía, mantenimiento, amortización de máquinas, materiales indirectos).</li></ul>
  <div class="formula">Costo primo = MP + MOD   ·   Costo de conversión = MOD + CIF</div>
  <h3>Clasificaciones</h3><div class="tw"><table><thead><tr><th>Criterio</th><th>Clases</th></tr></thead><tbody>
  <tr><td>Comportamiento</td><td><b>Variables</b> (cambian con el volumen) · <b>Fijos</b> (no cambian en un rango) · <b>Semivariables</b></td></tr>
  <tr><td>Asignación</td><td><b>Directos</b> (identificables con el producto) · <b>Indirectos</b> (se prorratean)</td></tr>
  <tr><td>Función</td><td><b>De producción</b> · <b>De comercialización</b> · <b>De administración</b> · <b>Financieros</b></td></tr>
  <tr><td>Imputación</td><td><b>Del producto</b> (se activan en el inventario hasta la venta) · <b>Del período</b> (van a resultados)</td></tr>
  <tr><td>Decisión</td><td><b>Relevantes</b> (cambian según la alternativa) · <b>Hundidos</b> (ya incurridos, irrelevantes)</td></tr></tbody></table></div>
  <h3>Costo y gasto</h3><p>Los costos de producción se acumulan en el inventario y se convierten en <b>costo de ventas</b> cuando se vende. Los gastos de comercialización y administración van directo a resultados.</p>
  <div class="note"><b>La escuela argentina de costos.</b> El Instituto Argentino de Profesores Universitarios de Costos (IAPUCo) desarrolló la <b>teoría general del costo</b>, que distingue entre componentes físicos (cantidad de factor consumido) y monetarios (precio del factor). Es la base de la enseñanza universitaria en el país.</div>
  <div class="ejr"><b>Ejemplo resuelto · armar el costo de una silla</b>Madera $ 8.000; 2 horas del carpintero a $ 5.000; carga fabril $ 3.000 por hora de MOD.
  <ol><li>MP: 8.000.</li><li>MOD: 2 × 5.000 = 10.000.</li><li>CIF: 2 × 3.000 = 6.000.</li><li>Costo de producción: <b>24.000</b>. Costo primo (MP + MOD) = 18.000. Costo de conversión (MOD + CIF) = 16.000.</li></ol>
  La comisión del vendedor no entra: es un gasto de comercialización, va a resultados cuando se vende.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Incluir gastos de comercialización o administración en el costo del producto.</li><li>Confundir “directo” (se identifica con el producto) con “variable” (cambia con el volumen): no son lo mismo.</li></ul></div>
  ${CAMPUS.vid([["Elementos del costo de producción","elementos del costo materia prima mano de obra carga fabril"],["Clasificación de los costos","clasificacion de los costos fijos variables directos indirectos"]])}`,
  ex:[{type:"pick",title:"Clasificá cada costo de una fábrica de muebles",options:["MP","MOD","CIF","Gasto del período"],items:[["Madera usada en las sillas","MP"],["Sueldo del carpintero que arma las sillas","MOD"],["Sueldo del supervisor de planta","CIF"],["Energía eléctrica de la fábrica","CIF"],["Comisión del vendedor","Gasto del período"],["Amortización de la sierra industrial","CIF"],["Honorarios del estudio contable","Gasto del período"],["Clavos y pegamento (insignificantes por unidad)","CIF"]]},
   {type:"pick",title:"¿Fijo o variable respecto del volumen de producción?",options:["Fijo","Variable"],items:[["Alquiler de la planta","Fijo"],["Materia prima","Variable"],["Seguro de la fábrica","Fijo"],["Energía de las máquinas de producción","Variable"],["Sueldo del jefe de planta","Fijo"]]}]},
 {lead:"La materia prima es, en muchas industrias, el componente más grande del costo. Controlar su compra, uso y desperdicio es clave.",
  html:`<h3>Costo de la materia prima</h3><p>Precio de compra + fletes, seguros y gastos de recepción − descuentos. El IVA crédito fiscal no forma parte del costo.</p>
  <h3>Consumo</h3><p>Se valúa con el método de inventario elegido (PEPS o PPP, Módulo 9). El consumo se documenta con la <b>orden de entrega de materiales</b> (vale de salida del almacén), imputada a una orden o a un proceso.</p>
  <h3>Pérdidas de materiales</h3><ul><li><b>Normales</b> (inevitables por el proceso: recortes, evaporación): forman parte del costo del producto.</li><li><b>Anormales</b> (por errores, accidentes): son pérdida del período, no se cargan al producto.</li></ul>
  <h3>Registración</h3><ol><li>Compra: <span class="mono">Materias primas a Proveedores</span>.</li><li>Consumo para producción: <span class="mono">Producción en proceso a Materias primas</span>.</li></ol>
  <div class="formula">Consumo de MP = Existencia inicial + Compras − Existencia final</div>
  ${CAMPUS.vid([["Costo y consumo de materia prima","costo de materia prima consumo inventario costos"],["Pérdidas normales y anormales","perdidas normales y anormales de materiales costos"]])}`,
  ex:[{type:"num",items:[{q:"EI de MP $ 200.000; compras $ 1.500.000; EF $ 300.000. ¿Consumo de materia prima?",a:1400000,u:"$",ex:"200.000 + 1.500.000 − 300.000 = 1.400.000."},{q:"Para fabricar una mesa se necesitan 10 kg de madera y se pierde normalmente un 20% del material comprado. ¿Cuántos kg hay que comprar por mesa?",a:12.5,u:"kg",tol:0.01,hint:"10 / 0,80",ex:"Si se pierde el 20%, lo que queda útil es el 80% de lo comprado: 0,80 × C = 10 → C = 12,5 kg."},{q:"Si el kg cuesta $ 3.000, ¿cuánto es el costo de MP por mesa?",a:37500,u:"$",ex:"12,5 kg × 3.000 = 37.500. La pérdida normal es parte del costo."}]},
   {type:"asiento",accounts:ACC,entries:[{t:"Se entregan a producción materias primas por $ 1.400.000.",e:[["Producción en proceso",1400000,0],["Materias primas",0,1400000]]}]}]},
 {lead:"El costo de la mano de obra no es solo el sueldo por hora: incluye cargas sociales, aguinaldo, vacaciones y horas no productivas.",
  html:`<h3>Componentes del costo laboral</h3><ul><li>Remuneración por hora o mensual según el convenio colectivo.</li><li><b>SAC</b> (aguinaldo): un sueldo extra por año, aproximadamente 8,33%.</li><li><b>Vacaciones, feriados y licencias</b> pagas: horas pagadas que no se trabajan.</li><li><b>Contribuciones patronales</b> (jubilación, PAMI, asignaciones familiares, fondo de empleo, obra social), ART y seguro de vida obligatorio.</li></ul>
  <p>En la práctica se calcula un <b>coeficiente de cargas sociales</b> que se aplica sobre la hora trabajada. Es común que el costo real de una hora productiva sea entre un 40% y un 80% más alto que el salario básico por hora, según el convenio y el ausentismo.</p>
  <div class="formula">Costo hora MOD = Salario hora × (1 + coeficiente de cargas)</div>
  <h3>Directa e indirecta</h3><p>La <b>MOD</b> se imputa a las órdenes o procesos con las tarjetas de tiempo. El tiempo improductivo (esperas, reparaciones) y el de supervisores es <b>mano de obra indirecta</b>, que forma parte de la carga fabril.</p>
  <div class="ejr"><b>Por qué una hora cuesta más que el salario</b>Un operario cobra $ 4.000 por hora.
  <ol><li>Le pagás horas que no trabaja: vacaciones, feriados, licencias. Le pagás un sueldo extra (aguinaldo).</li><li>Sobre todo eso pagás contribuciones patronales y ART.</li><li>Si todo junto suma un 45% más, el coeficiente es 0,45 y la hora cuesta 4.000 × 1,45 = <b>5.800</b>.</li></ol>
  Presupuestar con el salario solo (4.000) subestima el costo casi un tercio.</div>
  ${CAMPUS.vid([["Costo de la mano de obra","costo de mano de obra cargas sociales costos"],["Mano de obra directa e indirecta","mano de obra directa e indirecta diferencia costos"]])}`,
  ex:[{type:"num",items:[{q:"Salario $ 4.000 por hora y coeficiente de cargas del 45%. ¿Costo hora de MOD?",a:5800,u:"$",ex:"4.000 × 1,45 = 5.800."},{q:"Un operario trabaja 160 horas en el mes a ese costo. ¿Costo mensual de MOD?",a:928000,u:"$",ex:"160 × 5.800 = 928.000."},{q:"Si 10 de esas 160 horas fueron esperas por falta de material, ¿cuánto se imputa como MOD a los productos?",a:870000,u:"$",hint:"150 horas productivas",ex:"150 × 5.800 = 870.000 de MOD. Las otras 10 horas (58.000) son mano de obra indirecta: van a carga fabril."}]}]},
 {lead:"La carga fabril no se puede identificar con cada producto. Se asigna mediante una tasa predeterminada.",
  html:`<h3>Por qué una tasa predeterminada</h3><p>Muchos costos indirectos se conocen recién a fin de mes o varían por estación (calefacción en invierno). Para costear cada producto en el momento, se usa una tasa calculada con el presupuesto:</p>
  <div class="formula">Tasa predeterminada = Carga fabril presupuestada / Nivel de actividad presupuestado (horas MOD, horas máquina, etc.)</div>
  <p>Ejemplo: carga fabril presupuestada anual $ 36.000.000 y 12.000 horas MOD → <b>$ 3.000 por hora MOD</b>.</p>
  <h3>Aplicación y variaciones</h3><ul><li>Se <b>aplica</b> a la producción: horas reales × tasa.</li><li>Al final del período se compara con la carga fabril <b>real</b>.</li><li>Si la aplicada supera a la real hay <b>sobreaplicación</b>; si es menor, <b>subaplicación</b>.</li></ul>
  <p>La variación se analiza (¿cambió el gasto o el nivel de actividad?) y, al cierre, se ajusta contra el costo de ventas o se prorratea entre inventarios y costo de ventas si es significativa.</p>
  <h3>Departamentalización</h3><p>En empresas grandes, los costos se asignan primero a departamentos productivos y de servicio, los de servicio se redistribuyen a los productivos, y cada departamento productivo tiene su propia tasa.</p>
  <div class="ejr"><b>Paso a paso</b>
  <ol><li>A principio de año: tasa = 2.400.000 / 12.000 h = 200 por hora máquina.</li><li>Cada mes aplicás: horas reales × 200. Con 1.100 h → 220.000 a Producción en proceso.</li><li>Al cierre del mes comparás con lo real (210.000). Aplicaste 10.000 de más: <b>sobreaplicación</b>.</li><li>Lectura: o se gastó menos de lo previsto, o se trabajó más horas de las presupuestadas (y el fijo se repartió entre más horas).</li></ol></div>
  ${CAMPUS.vid([["Tasa predeterminada de carga fabril","tasa predeterminada costos indirectos de fabricacion ejercicio"],["Sobreaplicación y subaplicación","carga fabril sobreaplicada subaplicada explicacion"]])}`,
  ex:[{type:"num",items:[{q:"Carga fabril presupuestada $ 2.400.000; 12.000 horas máquina presupuestadas. ¿Tasa por hora máquina?",a:200,u:"$",ex:"2.400.000 / 12.000 = 200 por hora."},{q:"En el mes se usaron 1.100 horas máquina. ¿Carga fabril aplicada?",a:220000,u:"$",ex:"1.100 × 200 = 220.000."},{q:"La carga fabril real del mes fue $ 210.000. ¿Cuánto se sobreaplicó?",a:10000,u:"$",ex:"Aplicada 220.000 − real 210.000 = 10.000 sobreaplicada."}]},
   {type:"asiento",accounts:ACC,entries:[{t:"Aplicá la carga fabril del mes a la producción ($ 220.000).",e:[["Producción en proceso",220000,0],["Carga fabril aplicada",0,220000]]}]}]},
 {lead:"El costeo por órdenes se usa cuando cada trabajo es distinto: muebles a medida, imprentas, obras, estudios profesionales.",
  html:`<p>Cada pedido tiene una <b>orden de trabajo</b> (OT) y una <b>hoja de costos</b> donde se acumulan:</p><ul><li>MP: según los vales de materiales imputados a la OT.</li><li>MOD: horas de cada operario en la OT × costo hora.</li><li>Carga fabril: base real de la OT × tasa predeterminada.</li></ul>
  <h3>Ejemplo · OT 101</h3><div class="tw"><table><thead><tr><th>Elemento</th><th>Cálculo</th><th class="r">Importe</th></tr></thead><tbody>
  <tr><td>Materia prima</td><td>Vales de almacén</td><td class="r num">300.000</td></tr><tr><td>Mano de obra directa</td><td>40 h × $ 5.800</td><td class="r num">232.000</td></tr><tr><td>Carga fabril</td><td>40 h MOD × $ 3.000</td><td class="r num">120.000</td></tr><tr><td><b>Costo total de la OT</b></td><td></td><td class="r num"><b>652.000</b></td></tr></tbody></table></div>
  <h3>Flujo contable</h3><ol><li>Los tres elementos se debitan en <i>Producción en proceso</i> (con el detalle por OT).</li><li>Al terminar: <span class="mono">Productos terminados a Producción en proceso</span>.</li><li>Al vender: <span class="mono">Costo de ventas a Productos terminados</span>.</li></ol>
  ${CAMPUS.vid([["Costeo por órdenes de trabajo","costeo por ordenes de trabajo ejercicio resuelto"],["Hoja de costos","hoja de costos orden de trabajo ejemplo"]])}`,
  ex:[{type:"num",items:[{q:"OT 202: MP $ 450.000; 25 horas MOD a $ 6.000; carga fabril $ 3.000 por hora MOD. ¿Costo total?",a:675000,u:"$",ex:"450.000 + 25 × 6.000 + 25 × 3.000 = 450.000 + 150.000 + 75.000 = 675.000."},{q:"Si se cotiza con un markup del 40% sobre el costo, ¿cuál es el precio (sin IVA)?",a:945000,u:"$",ex:"675.000 × 1,40 = 945.000."}]},
   {type:"asiento",accounts:ACC,entries:[{t:"Se termina la OT 101 (costo $ 652.000) y pasa al depósito de productos terminados.",e:[["Productos terminados",652000,0],["Producción en proceso",0,652000]]},{t:"Se entrega la OT 101 al cliente. Registrá su costo.",e:[["Costo de ventas",652000,0],["Productos terminados",0,652000]]}]}]},
 {lead:"Cuando la producción es continua y homogénea (bebidas, cemento, alimentos), el costo se calcula por proceso y por período.",
  html:`<p>Los costos se acumulan por <b>departamento o proceso</b> durante el mes y se dividen por la producción del período. El problema son las unidades que quedan a medio terminar.</p>
  <h3>Unidades equivalentes</h3><p>Expresan la producción en proceso como si fueran unidades terminadas. 200 unidades con el 50% de avance equivalen a 100 unidades terminadas, para ese elemento del costo.</p>
  <p>Como la materia prima suele agregarse al principio y la conversión a lo largo del proceso, se calculan por separado.</p>
  <h3>Pasos</h3><ol><li>Flujo físico de unidades.</li><li>Unidades equivalentes por elemento.</li><li>Costo unitario por elemento = costo del período / unidades equivalentes.</li><li>Asignar el costo a las unidades terminadas y a la producción en proceso final.</li></ol>
  <p>Cuando hay producción en proceso al inicio, se usa el método PEPS o el de promedio ponderado para tratar los costos que venían del mes anterior.</p>
  <div class="ejr"><b>Ejemplo resuelto · unidades equivalentes</b>Empiezan 1.000 u; se terminan 800; quedan 200 con 50% de avance en conversión. La MP entra entera al inicio. Costos del mes: MP 500.000; conversión 450.000.
  <ol><li>Equivalentes de MP: las 1.000 u ya tienen toda su MP → 800 + 200 = <b>1.000</b>.</li><li>Equivalentes de conversión: 800 + 200 × 50% = <b>900</b>.</li><li>Costo unitario: MP 500.000 / 1.000 = 500; conversión 450.000 / 900 = 500. Total 1.000 por unidad terminada.</li><li>Terminadas: 800 × 1.000 = <b>800.000</b>.</li><li>En proceso: MP 200 × 500 + conversión 100 × 500 = <b>150.000</b>.</li><li>Control: 800.000 + 150.000 = 950.000 = costos del mes ✔.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Usar el mismo grado de avance para la MP y para la conversión.</li><li>Dividir por las unidades terminadas en lugar de por las equivalentes.</li></ul></div>
  ${CAMPUS.vid([["Costeo por procesos","costeo por procesos ejercicio resuelto"],["Unidades equivalentes","unidades equivalentes costos por procesos explicacion"]])}`,
  ex:[{type:"custom",title:"Costeo por procesos",render:procesos}]},
 {lead:"El costo estándar es lo que un producto debería costar en condiciones eficientes. Compararlo con el real muestra dónde se gana o se pierde.",
  html:`<p>Para cada elemento se fija un estándar de <b>cantidad</b> (kg, horas) y de <b>precio</b>. Ejemplo: cada unidad necesita 2 kg de MP a $ 100 el kg → estándar $ 200 por unidad.</p>
  <h3>Desvíos de materia prima</h3><div class="formula">Desvío de precio = (Precio real − Precio estándar) × Cantidad real<br>Desvío de cantidad = (Cantidad real − Cantidad estándar permitida) × Precio estándar</div>
  <p>Se produjeron 1.000 unidades y se usaron 2.100 kg comprados a $ 95.</p>
  <ul><li>Desvío de precio: (95 − 100) × 2.100 = <b>−10.500</b>, favorable (compras compró más barato).</li><li>Desvío de cantidad: (2.100 − 2.000) × 100 = <b>+10.000</b>, desfavorable (producción usó más material).</li><li>Desvío total: −500 favorable. Costo real 199.500 frente a estándar 200.000.</li></ul>
  <p>El mismo análisis se hace con la mano de obra (desvío de tarifa y de eficiencia) y con la carga fabril (desvíos de presupuesto, de capacidad y de eficiencia).</p>
  <div class="note"><b>Para qué sirve.</b> Separar los desvíos permite asignar responsabilidades: el de precio es de compras; el de cantidad, de producción. Un desvío favorable no siempre es bueno: comprar material más barato puede causar más desperdicio.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Calcular la cantidad estándar con las unidades presupuestadas: se usa la producción <b>real</b> × estándar por unidad.</li><li>En el desvío de precio, multiplicar por la cantidad estándar en lugar de la real.</li></ul></div>
  ${CAMPUS.vid([["Costo estándar y desvíos","costo estandar desvios materia prima precio cantidad ejercicio"],["Desvíos de mano de obra","desvio de tarifa y eficiencia mano de obra costos"]])}`,
  ex:[{type:"num",items:[{q:"Estándar: 3 kg a $ 50 por unidad. Se produjeron 500 unidades usando 1.600 kg comprados a $ 52. ¿Desvío de precio? (positivo si es desfavorable)",a:3200,u:"$",ex:"(52 − 50) × 1.600 = 3.200 desfavorable: se pagó más caro."},{q:"¿Desvío de cantidad? (positivo si es desfavorable)",a:5000,u:"$",hint:"(1.600 − 1.500) × 50",ex:"Cantidad estándar permitida: 500 × 3 = 1.500 kg. (1.600 − 1.500) × 50 = 5.000 desfavorable."},{q:"Estándar MOD: 2 h a $ 6.000 por unidad. Se produjeron 400 unidades con 780 horas pagadas a $ 6.200. ¿Desvío de eficiencia? (con signo; negativo si es favorable)",a:-120000,u:"$",hint:"(780 − 800) × 6.000",ex:"Horas estándar permitidas: 400 × 2 = 800. (780 − 800) × 6.000 = −120.000: se trabajó más rápido de lo previsto, favorable."}]}]},
],
eval:[
 {q:"El costo de conversión es…",o:["MP + MOD","MOD + carga fabril","MP + carga fabril","Solo la carga fabril"],a:1},
 {q:"El sueldo del supervisor de planta es…",o:["MOD","Carga fabril","Gasto de administración","MP"],a:1},
 {q:"Un costo ya incurrido que no cambia con la decisión es un costo…",o:["Relevante","Hundido","Variable","Directo"],a:1},
 {q:"Las pérdidas anormales de materia prima…",o:["Se cargan al producto","Son pérdida del período","Se activan","Se ignoran"],a:1},
 {q:"La tasa predeterminada de carga fabril se calcula con…",o:["Datos reales del mes","Datos presupuestados","El precio de venta","La MP consumida"],a:1},
 {q:"Si la carga fabril aplicada es mayor que la real hay…",o:["Subaplicación","Sobreaplicación","Desvío de precio","Pérdida anormal"],a:1},
 {q:"El costeo por órdenes es apropiado para…",o:["Una cementera","Una imprenta que hace trabajos a pedido","Una embotelladora","Una refinería"],a:1},
 {q:"200 unidades en proceso con 40% de conversión equivalen, en conversión, a…",o:["200","40","80","120"],a:2},
 {q:"El desvío de precio de MP se calcula sobre…",o:["La cantidad estándar","La cantidad real","El precio de venta","Las horas MOD"],a:1},
 {q:"Usar más material que el estándar genera un desvío de cantidad…",o:["Favorable","Desfavorable","Nulo","De precio"],a:1},
]};
})();
