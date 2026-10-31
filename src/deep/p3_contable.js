/* Casos integradores de Estados contables y Costos. Se carga después de los demás archivos de profundización. */
(function(){
const add = (n, title, L)=>{ CAMPUS.modules.find(m=>m.n===n).l.push(title); CAMPUS.content[n].lessons.push(L); };
const xq = (n, qs)=>{ CAMPUS.xeval[n] = (CAMPUS.xeval[n]||[]).concat(qs); };

add(15, "Caso integrador: del balance de comprobación a los estados contables", {
 lead:"Un caso de cierre completo: a partir del balance de comprobación ajustado de Del Plata SA se arman el estado de situación patrimonial, el de resultados, la evolución del patrimonio neto y el flujo de efectivo.",
 src:["rt54","rt54g","lgs"],
 cite:["RT 54 (t.o. RT 59), capítulos de presentación de estados contables.","Ley General de Sociedades 19.550, arts. 62 a 65."],
 html:`<h3>Balance de comprobación ajustado al 31/12 (en $, moneda de cierre)</h3><div class="tw"><table><thead><tr><th>Cuenta</th><th>Deudor</th><th>Acreedor</th></tr></thead><tbody>
 <tr><td>Caja y bancos</td><td>1.200.000</td><td></td></tr><tr><td>Deudores por ventas</td><td>2.300.000</td><td></td></tr><tr><td>Previsión para deudores incobrables</td><td></td><td>100.000</td></tr>
 <tr><td>Mercaderías</td><td>3.000.000</td><td></td></tr><tr><td>Bienes de uso (neto de amortizaciones)</td><td>6.000.000</td><td></td></tr>
 <tr><td>Proveedores</td><td></td><td>1.800.000</td></tr><tr><td>Sueldos y cargas sociales a pagar</td><td></td><td>400.000</td></tr><tr><td>Impuesto a las ganancias a pagar</td><td></td><td>500.000</td></tr><tr><td>Préstamo bancario (vence en 3 años)</td><td></td><td>2.000.000</td></tr>
 <tr><td>Capital social</td><td></td><td>5.000.000</td></tr><tr><td>Reserva legal</td><td></td><td>300.000</td></tr><tr><td>Resultados no asignados (inicio)</td><td></td><td>900.000</td></tr>
 <tr><td>Ventas</td><td></td><td>15.000.000</td></tr><tr><td>Costo de mercaderías vendidas</td><td>9.000.000</td><td></td></tr><tr><td>Gastos de comercialización</td><td>2.000.000</td><td></td></tr><tr><td>Gastos de administración (incluye amortizaciones por 800.000)</td><td>1.500.000</td><td></td></tr><tr><td>Intereses perdidos</td><td>300.000</td><td></td></tr><tr><td>Impuesto a las ganancias</td><td>700.000</td><td></td></tr>
 <tr><td><b>Totales</b></td><td><b>26.000.000</b></td><td><b>26.000.000</b></td></tr></tbody></table></div>
 <h3>1. Estado de resultados</h3><div class="tw"><table><tbody>
 <tr><td>Ventas netas</td><td>15.000.000</td></tr><tr><td>− Costo de las mercaderías vendidas</td><td>(9.000.000)</td></tr><tr><td><b>Resultado bruto</b></td><td><b>6.000.000</b></td></tr>
 <tr><td>− Gastos de comercialización</td><td>(2.000.000)</td></tr><tr><td>− Gastos de administración</td><td>(1.500.000)</td></tr><tr><td>± Resultados financieros y por tenencia</td><td>(300.000)</td></tr>
 <tr><td><b>Resultado antes del impuesto</b></td><td><b>2.200.000</b></td></tr><tr><td>− Impuesto a las ganancias</td><td>(700.000)</td></tr><tr><td><b>Resultado neto del ejercicio</b></td><td><b>1.500.000</b></td></tr></tbody></table></div>
 <h3>2. Estado de situación patrimonial</h3><div class="tw"><table><thead><tr><th>Activo</th><th></th><th>Pasivo y PN</th><th></th></tr></thead><tbody>
 <tr><td>Caja y bancos</td><td>1.200.000</td><td>Deudas comerciales</td><td>1.800.000</td></tr>
 <tr><td>Créditos por ventas (2.300.000 − 100.000)</td><td>2.200.000</td><td>Remuneraciones y cargas sociales</td><td>400.000</td></tr>
 <tr><td>Bienes de cambio</td><td>3.000.000</td><td>Cargas fiscales</td><td>500.000</td></tr>
 <tr><td><b>Activo corriente</b></td><td><b>6.400.000</b></td><td><b>Pasivo corriente</b></td><td><b>2.700.000</b></td></tr>
 <tr><td>Bienes de uso</td><td>6.000.000</td><td>Préstamos (no corriente)</td><td>2.000.000</td></tr>
 <tr><td><b>Activo no corriente</b></td><td><b>6.000.000</b></td><td><b>Total pasivo</b></td><td><b>4.700.000</b></td></tr>
 <tr><td></td><td></td><td>Patrimonio neto</td><td>7.700.000</td></tr>
 <tr><td><b>Total activo</b></td><td><b>12.400.000</b></td><td><b>Total pasivo + PN</b></td><td><b>12.400.000</b></td></tr></tbody></table></div>
 <h3>3. Evolución del patrimonio neto</h3><div class="tw"><table><thead><tr><th></th><th>Capital</th><th>Reserva legal</th><th>RNA</th><th>Total</th></tr></thead><tbody>
 <tr><td>Saldo al inicio</td><td>5.000.000</td><td>300.000</td><td>900.000</td><td>6.200.000</td></tr><tr><td>Resultado del ejercicio</td><td></td><td></td><td>1.500.000</td><td>1.500.000</td></tr>
 <tr><td><b>Saldo al cierre</b></td><td><b>5.000.000</b></td><td><b>300.000</b></td><td><b>2.400.000</b></td><td><b>7.700.000</b></td></tr></tbody></table></div>
 <p>Si la asamblea aprueba después del cierre una reserva legal del 5% del resultado (art. 70 LGS: hasta alcanzar el 20% del capital), eso se registra en el ejercicio siguiente: es un hecho posterior que no modifica estas cifras.</p>
 <h3>4. Flujo de efectivo de las operaciones (método indirecto)</h3><p>Datos adicionales respecto del cierre anterior: los deudores por ventas (netos) aumentaron $ 400.000, las mercaderías disminuyeron $ 200.000, los proveedores aumentaron $ 300.000 y el impuesto a pagar aumentó $ 100.000. Los intereses se pagaron en el ejercicio.</p>
 <div class="formula">1.500.000 + 800.000 (amortizaciones) − 400.000 (deudores) + 200.000 (mercaderías) + 300.000 (proveedores) + 100.000 (impuesto) = $ 2.500.000</div>
 <h3>5. Primeros indicadores</h3><ul><li>Liquidez corriente: 6.400.000 / 2.700.000 = <b>2,37</b>.</li><li>Endeudamiento: pasivo / PN = 4.700.000 / 7.700.000 = <b>0,61</b>.</li><li>Rentabilidad del PN: 1.500.000 / PN promedio (6.200.000 + 7.700.000) / 2 = <b>21,6%</b>.</li></ul>`,
 ex:[{type:"num",items:[
   {q:"¿Resultado bruto?",a:6000000,u:"$"},{q:"¿Resultado antes del impuesto a las ganancias?",a:2200000,u:"$"},
   {q:"¿Activo corriente?",a:6400000,u:"$",hint:"Los créditos van netos de la previsión."},{q:"¿Pasivo corriente?",a:2700000,u:"$",hint:"El préstamo vence en 3 años: no es corriente."},
   {q:"¿Patrimonio neto al cierre?",a:7700000,u:"$"},{q:"¿Liquidez corriente? (dos decimales)",a:2.37,tol:0.01},
   {q:"Si los deudores hubieran disminuido $ 400.000 (en lugar de aumentar), ¿flujo de efectivo de las operaciones?",a:3300000,u:"$"}]},
  {type:"pick",title:"¿Corriente o no corriente?",options:["Corriente","No corriente"],items:[
   ["Préstamo bancario que vence en 3 años","No corriente"],["Mercaderías","Corriente"],["Impuesto a las ganancias a pagar","Corriente"],["Bienes de uso","No corriente"],["Cuota de un préstamo que vence en 8 meses","Corriente"]]},
  {type:"pick",title:"En el flujo indirecto, ¿se suma o se resta al resultado?",options:["Se suma","Se resta"],items:[
   ["Amortizaciones del ejercicio","Se suma"],["Aumento de deudores por ventas","Se resta"],["Disminución de mercaderías","Se suma"],["Aumento de proveedores","Se suma"],["Disminución de sueldos a pagar","Se resta"],["Ganancia por venta de un bien de uso","Se resta","Se saca de operaciones; el cobro va a inversión."]]}]
});

add(17, "Estado de costos: de la materia prima al costo de ventas", {
 lead:"El estado de costos resume en un cuadro cómo los consumos de una fábrica se convierten en productos terminados y después en costo de ventas. Es la pieza que une la contabilidad de costos con el estado de resultados.",
 src:["rt54"],
 cite:["Giménez, C. M. y colaboradores, Tratado de contabilidad de costos, Macchi.","Instituto Argentino de Profesores Universitarios de Costos (IAPUCo), material de cátedra."],
 html:`<h3>Datos de Metalúrgica Sur SA (mes de mayo)</h3><div class="tw"><table><thead><tr><th>Concepto</th><th>Inicial</th><th>Final</th></tr></thead><tbody>
 <tr><td>Materia prima</td><td>400.000</td><td>500.000</td></tr><tr><td>Producción en proceso</td><td>300.000</td><td>800.000</td></tr><tr><td>Productos terminados</td><td>1.000.000</td><td>1.500.000</td></tr></tbody></table></div>
 <p>Compras de materia prima: $ 2.600.000. Mano de obra directa: $ 1.800.000. Carga fabril aplicada con una tasa predeterminada: $ 1.200.000 (la real fue $ 1.300.000).</p>
 <h3>El estado de costos</h3><div class="tw"><table><tbody>
 <tr><td>Inventario inicial de materia prima</td><td>400.000</td></tr><tr><td>+ Compras</td><td>2.600.000</td></tr><tr><td>− Inventario final de materia prima</td><td>(500.000)</td></tr><tr><td><b>= Materia prima consumida</b></td><td><b>2.500.000</b></td></tr>
 <tr><td>+ Mano de obra directa</td><td>1.800.000</td></tr><tr><td>+ Carga fabril aplicada</td><td>1.200.000</td></tr><tr><td><b>= Costo de producción del período</b></td><td><b>5.500.000</b></td></tr>
 <tr><td>+ Producción en proceso inicial</td><td>300.000</td></tr><tr><td>− Producción en proceso final</td><td>(800.000)</td></tr><tr><td><b>= Costo de la producción terminada</b></td><td><b>5.000.000</b></td></tr>
 <tr><td>+ Productos terminados iniciales</td><td>1.000.000</td></tr><tr><td>− Productos terminados finales</td><td>(1.500.000)</td></tr><tr><td><b>= Costo de ventas (antes de ajustar la carga fabril)</b></td><td><b>4.500.000</b></td></tr></tbody></table></div>
 <h3>Costo primo y costo de conversión</h3><div class="formula">Costo primo = MP consumida + MOD = 4.300.000  ·  Costo de conversión = MOD + carga fabril = 3.000.000</div>
 <h3>Carga fabril sub o sobreaplicada</h3><p>La carga fabril se aplica durante el mes con una tasa predeterminada, porque la real se conoce recién al cierre. Aquí la real ($ 1.300.000) superó a la aplicada ($ 1.200.000): hay una <b>subaplicación de $ 100.000</b>. Si no es significativa, se imputa al costo de ventas, que queda en $ 4.600.000. Si lo es, se reparte entre producción en proceso, productos terminados y costo de ventas. La parte que corresponde a capacidad ociosa no es costo del producto: va a resultados del período.</p>
 <h3>Registración del flujo de costos</h3><p>Producción en proceso recibe la MP consumida, la MOD y la carga aplicada; de ahí pasa a Productos terminados y, con la venta, a Costo de ventas.</p>`,
 ex:[{type:"num",items:[
   {q:"MP inicial $ 200.000, compras $ 1.500.000, MP final $ 300.000. ¿MP consumida?",a:1400000,u:"$"},
   {q:"Con MOD $ 900.000 y carga aplicada $ 700.000, ¿costo de producción del período?",a:3000000,u:"$"},
   {q:"PP inicial $ 100.000 y PP final $ 400.000. ¿Costo de la producción terminada?",a:2700000,u:"$"},
   {q:"PT inicial $ 500.000 y PT final $ 200.000. ¿Costo de ventas?",a:3000000,u:"$"},
   {q:"En ese caso, ¿costo de conversión?",a:1600000,u:"$"},
   {q:"Carga real $ 650.000 y aplicada $ 700.000. ¿Sobreaplicación? (sin signo)",a:50000,u:"$"}]},
  {type:"order",title:"Ordená el estado de costos",items:["Materia prima consumida","Costo de producción del período","Costo de la producción terminada","Costo de ventas"]},
  {type:"asiento",accounts:["Materia prima","Producción en proceso","Productos terminados","Costo de ventas","Sueldos y jornales de fábrica","Carga fabril aplicada","Carga fabril real"],entries:[
   {t:"Mayo · Se transfiere a terminados el costo de la producción terminada: $ 5.000.000.",e:[["Productos terminados",5000000,0],["Producción en proceso",0,5000000]]},
   {t:"Mayo · Se registra el costo de las unidades vendidas: $ 4.500.000.",e:[["Costo de ventas",4500000,0],["Productos terminados",0,4500000]]},
   {t:"31/05 · Se cierra la carga fabril: aplicada $ 1.200.000, real $ 1.300.000; la subaplicación no es significativa.",e:[["Carga fabril aplicada",1200000,0],["Costo de ventas",100000,0],["Carga fabril real",0,1300000]]}]}]
});

xq(15, [
 {q:"Un préstamo que vence en 3 años se presenta como…",o:["Pasivo corriente","Pasivo no corriente","Patrimonio neto","Nota únicamente"],a:1},
 {q:"En el método indirecto, un aumento de los deudores por ventas…",o:["Se suma al resultado","Se resta del resultado","No se considera","Va a actividades de financiación"],a:1},
 {q:"La reserva legal que aprueba la asamblea después del cierre…",o:["Se registra en el ejercicio que se cerró","Se registra en el ejercicio siguiente","Nunca se registra","Va a resultados"],a:1},
 {q:"Activo corriente $ 6.400.000 y pasivo corriente $ 2.700.000. La liquidez corriente es…",o:["0,42","1,37","2,37","3,70"],a:2},
]);
xq(17, [
 {q:"Costo primo es…",o:["MP consumida + MOD","MOD + carga fabril","MP + carga fabril","Solo la MP"],a:0},
 {q:"Costo de conversión es…",o:["MP consumida + MOD","MOD + carga fabril","Costo de ventas − MP","La carga fabril real"],a:1},
 {q:"Costo de producción del período + PP inicial − PP final =",o:["Costo de ventas","Costo de la producción terminada","MP consumida","Costo primo"],a:1},
 {q:"Si la carga fabril real supera a la aplicada, hay…",o:["Sobreaplicación","Subaplicación","Capacidad ociosa siempre","Un error de registración"],a:1},
 {q:"La carga fabril correspondiente a capacidad ociosa…",o:["Se activa en los productos","Va a resultados del período","Se difiere al año siguiente","Se suma a la MP"],a:1},
]);
})();
