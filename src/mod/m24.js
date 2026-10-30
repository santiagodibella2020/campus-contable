/* Módulo 24 · Análisis de estados contables */
(function(){
const DATA = `<div class="tw"><table><thead><tr><th>Andina SA (en miles)</th><th class="r">Año 2</th><th class="r">Año 1</th></tr></thead><tbody>
<tr><td>Caja y bancos</td><td class="r num">500</td><td class="r num">400</td></tr><tr><td>Créditos por ventas</td><td class="r num">1.500</td><td class="r num">1.100</td></tr><tr><td>Bienes de cambio</td><td class="r num">1.000</td><td class="r num">900</td></tr>
<tr><td><b>Activo corriente</b></td><td class="r num"><b>3.000</b></td><td class="r num"><b>2.400</b></td></tr><tr><td>Bienes de uso</td><td class="r num">5.000</td><td class="r num">4.600</td></tr><tr><td><b>Activo total</b></td><td class="r num"><b>8.000</b></td><td class="r num"><b>7.000</b></td></tr>
<tr><td>Deudas comerciales</td><td class="r num">900</td><td class="r num">800</td></tr><tr><td><b>Pasivo corriente</b></td><td class="r num"><b>2.000</b></td><td class="r num"><b>1.600</b></td></tr><tr><td><b>Pasivo total</b></td><td class="r num"><b>5.000</b></td><td class="r num"><b>4.300</b></td></tr><tr><td><b>Patrimonio neto</b></td><td class="r num"><b>3.000</b></td><td class="r num"><b>2.700</b></td></tr>
<tr><td>Ventas</td><td class="r num">12.000</td><td class="r num">10.000</td></tr><tr><td>Costo de ventas</td><td class="r num">7.200</td><td class="r num">5.800</td></tr><tr><td>Compras</td><td class="r num">7.300</td><td class="r num">6.000</td></tr><tr><td>Resultado neto</td><td class="r num">450</td><td class="r num">500</td></tr></tbody></table></div>`;
CAMPUS.content[24] = {
lessons:[
 {lead:"Analizar estados contables es transformar números en opinión: ¿la empresa puede pagar sus deudas? ¿es rentable? ¿cómo evoluciona?",
  html:`<p>Usamos los datos de Andina SA en todo el módulo:</p>${DATA}
  <h3>Análisis vertical</h3><p>Cada rubro como porcentaje de un total del mismo estado: del activo total en el balance, de las ventas en el estado de resultados. Muestra la <b>estructura</b>. Por ejemplo, el costo de ventas es 60% de las ventas en el año 2 (7.200 / 12.000) y 58% en el año 1.</p>
  <h3>Análisis horizontal</h3><p>La variación de cada rubro entre períodos, en pesos y en porcentaje. Muestra la <b>tendencia</b>. Las ventas crecieron 20%; los créditos por ventas, 36%: los clientes están tardando más en pagar.</p>
  <div class="note"><b>Antes de calcular.</b> Los estados tienen que estar en moneda homogénea (RT 6), si no las comparaciones entre años no sirven. Y conviene leer las notas: un cambio de criterio contable puede explicar una variación.</div>`,
  ex:[{type:"num",items:[{q:"Análisis vertical: ¿qué % del activo total representan los bienes de uso en el año 2?",a:62.5,u:"%",tol:0.05},{q:"Análisis horizontal: ¿cuánto crecieron las ventas, en %?",a:20,u:"%",tol:0.05},{q:"¿Cuánto crecieron los créditos por ventas, en %? (una decimal)",a:36.4,u:"%",tol:0.1},{q:"Margen bruto del año 2 sobre ventas, en %",a:40,u:"%",tol:0.05}]}]},
 {lead:"Los indicadores de liquidez miden la capacidad de pagar las deudas de corto plazo.",
  html:`<div class="tw"><table><thead><tr><th>Indicador</th><th>Fórmula</th><th>Lectura</th></tr></thead><tbody>
  <tr><td><b>Liquidez corriente</b></td><td class="mono">Activo corriente / Pasivo corriente</td><td>Cuántos pesos de activo corriente hay por cada peso de deuda corriente</td></tr>
  <tr><td><b>Prueba ácida</b></td><td class="mono">(Activo corriente − Bienes de cambio) / Pasivo corriente</td><td>Lo mismo, sin el stock, que es lo menos líquido</td></tr>
  <tr><td><b>Liquidez inmediata</b></td><td class="mono">Caja y bancos / Pasivo corriente</td><td>Con qué se puede pagar hoy mismo</td></tr></tbody></table></div>
  <p>No hay un valor “correcto” universal: depende de la actividad. Un supermercado cobra al contado y paga a 60 días, y puede funcionar con liquidez menor a 1. Una constructora necesita más. Hay que comparar con el sector y con la propia historia.</p>
  <div class="note"><b>Cuidado con la calidad.</b> Una liquidez alta puede esconder créditos incobrables o stock obsoleto. Siempre mirá también los días de cobro y de inventario.</div>`,
  ex:[{type:"num",prompt:"Con los datos del año 2 de Andina SA:",items:[{q:"Liquidez corriente",a:1.5,tol:0.005},{q:"Prueba ácida",a:1,tol:0.005},{q:"Liquidez inmediata",a:0.25,tol:0.005},{q:"Liquidez corriente del año 1",a:1.5,tol:0.005}]}]},
 {lead:"Los indicadores de endeudamiento muestran cómo se financia la empresa y cuánto riesgo financiero asume.",
  html:`<div class="tw"><table><thead><tr><th>Indicador</th><th>Fórmula</th></tr></thead><tbody>
  <tr><td><b>Endeudamiento</b></td><td class="mono">Pasivo / Patrimonio neto</td></tr><tr><td><b>Solvencia</b></td><td class="mono">Patrimonio neto / Pasivo</td></tr>
  <tr><td><b>Autonomía</b></td><td class="mono">Patrimonio neto / Activo</td></tr><tr><td><b>Inmovilización</b></td><td class="mono">Activo no corriente / Activo</td></tr>
  <tr><td><b>Cobertura de intereses</b></td><td class="mono">Resultado operativo / Intereses</td></tr></tbody></table></div>
  <p>Un endeudamiento alto no es malo en sí mismo (puede apalancar la rentabilidad, Módulo 23), pero aumenta el riesgo: si caen las ventas, los intereses siguen.</p>
  <h3>Regla de financiamiento</h3><p>Los activos no corrientes (que se recuperan lentamente) deberían financiarse con fondos de largo plazo: patrimonio neto más pasivo no corriente. Si se financian con deuda de corto plazo, la empresa vive refinanciando.</p>`,
  ex:[{type:"num",prompt:"Con los datos del año 2:",items:[{q:"Endeudamiento (Pasivo / PN, dos decimales)",a:1.67,tol:0.005},{q:"Solvencia (PN / Pasivo)",a:0.6,tol:0.005},{q:"Autonomía, en %",a:37.5,u:"%",tol:0.05},{q:"¿Los fondos de largo plazo (PN + pasivo no corriente) alcanzan para cubrir el activo no corriente? Respondé el excedente en miles (con signo)",a:1000,u:"miles",hint:"PN 3.000 + pasivo no corriente 3.000 − activo no corriente 5.000"}]}]},
 {lead:"La rentabilidad mide cuánto gana la empresa en relación con lo que invierte. El modelo Du Pont explica de dónde viene.",
  html:`<div class="tw"><table><thead><tr><th>Indicador</th><th>Fórmula</th></tr></thead><tbody>
  <tr><td><b>Rentabilidad del PN (ROE)</b></td><td class="mono">Resultado neto / PN</td></tr><tr><td><b>Rentabilidad del activo (ROA)</b></td><td class="mono">Resultado (antes de intereses) / Activo</td></tr>
  <tr><td><b>Margen neto</b></td><td class="mono">Resultado neto / Ventas</td></tr><tr><td><b>Rotación del activo</b></td><td class="mono">Ventas / Activo</td></tr></tbody></table></div>
  <h3>Modelo Du Pont</h3><div class="formula">ROE = Margen neto × Rotación del activo × Apalancamiento (Activo / PN)</div>
  <p>Andina SA, año 2: 3,75% × 1,5 × 2,667 = <b>15%</b>. Se puede ganar lo mismo con mucho margen y poca rotación (una joyería) o con poco margen y mucha rotación (un supermercado).</p>
  <p>En el año 1 el ROE fue 500 / 2.700 = 18,5%. Bajó, aunque las ventas crecieron: el margen cayó de 5% a 3,75%.</p>
  <div class="note"><b>PN promedio.</b> Para mayor precisión se usa el PN (o el activo) promedio del ejercicio. En este módulo usamos el saldo de cierre para simplificar.</div>`,
  ex:[{type:"num",prompt:"Con los datos del año 2:",items:[{q:"Margen neto, en %",a:3.75,u:"%",tol:0.01},{q:"Rotación del activo",a:1.5,tol:0.005},{q:"Apalancamiento (Activo / PN, tres decimales)",a:2.667,tol:0.002},{q:"ROE, en %",a:15,u:"%",tol:0.05}]}]},
 {lead:"Los indicadores de gestión miden qué tan rápido se mueve el dinero: cuánto se tarda en vender, en cobrar y en pagar.",
  html:`<div class="tw"><table><thead><tr><th>Indicador</th><th>Fórmula</th></tr></thead><tbody>
  <tr><td><b>Días de inventario</b></td><td class="mono">Bienes de cambio / Costo de ventas × 365</td></tr><tr><td><b>Días de cobro</b></td><td class="mono">Créditos por ventas / Ventas (con IVA si los créditos lo incluyen) × 365</td></tr>
  <tr><td><b>Días de pago</b></td><td class="mono">Deudas comerciales / Compras × 365</td></tr><tr><td><b>Ciclo operativo</b></td><td class="mono">Días de inventario + Días de cobro</td></tr><tr><td><b>Ciclo de efectivo</b></td><td class="mono">Ciclo operativo − Días de pago</td></tr></tbody></table></div>
  <p>Si los créditos incluyen IVA y las ventas no, conviene sumarle el IVA a las ventas para que el cálculo sea homogéneo. En este módulo simplificamos usando las ventas netas.</p>
  <p>En Andina SA los días de cobro pasaron de 40 a casi 46: la empresa está financiando más a sus clientes. Junto con la caída del margen, sugiere que creció vendiendo con más plazo y menos precio.</p>`,
  ex:[{type:"num",prompt:"Con los datos del año 2 (una decimal):",items:[{q:"Días de cobro",a:45.6,u:"días",tol:0.1},{q:"Días de inventario",a:50.7,u:"días",tol:0.1},{q:"Días de pago",a:45,u:"días",tol:0.1},{q:"Ciclo de efectivo",a:51.3,u:"días",tol:0.2}]}]},
 {lead:"El análisis termina en un informe: un diagnóstico claro con fundamentos y recomendaciones.",
  html:`<h3>Estructura de un informe de análisis</h3><ol><li><b>Objetivo y destinatario:</b> no es lo mismo un banco que evalúa un préstamo que un inversor o el directorio.</li><li><b>Información utilizada</b> y sus limitaciones.</li><li><b>Situación financiera de corto plazo:</b> liquidez y ciclo de efectivo.</li><li><b>Situación patrimonial:</b> endeudamiento y estructura de financiamiento.</li><li><b>Situación económica:</b> rentabilidad y sus causas (Du Pont).</li><li><b>Conclusiones y recomendaciones.</b></li></ol>
  <h3>Ejemplo de conclusión para Andina SA</h3><div class="note">Andina SA creció 20% en ventas, pero su rentabilidad sobre el patrimonio bajó de 18,5% a 15% por la caída del margen neto (de 5% a 3,75%). Los días de cobro aumentaron, lo que indica que el crecimiento se logró extendiendo plazos. La liquidez se mantiene estable (1,5) y el endeudamiento es elevado (1,67 veces el PN), pero los activos fijos están cubiertos con fondos de largo plazo. Se recomienda revisar la política de precios y de crédito a clientes antes de seguir creciendo.</div>
  <h3>Limitaciones</h3><ul><li>Los estados son históricos.</li><li>Las cifras de cierre pueden no representar el año (estacionalidad).</li><li>Los criterios contables distintos dificultan comparar empresas.</li><li>Hay información relevante que no está en los estados (calidad de la gestión, mercado).</li></ul>`,
  ex:[{type:"mc",items:[
   {q:"Las ventas crecen 20% y los créditos por ventas 36%. ¿Qué sugiere?",o:["Mejoró la cobranza","Se está dando más plazo a los clientes","Bajó el stock","Aumentó la rentabilidad"],a:1},
   {q:"El ROE baja aunque las ventas suben. Con Du Pont, la primera causa a investigar es…",o:["La rotación","El margen","La inflación","El capital social"],a:1,ex:"El margen neto cayó de 5% a 3,75%."},
   {q:"Un banco evalúa un préstamo a 90 días. ¿Qué indicadores mirará primero?",o:["Rentabilidad sobre el PN","Liquidez y ciclo de efectivo","Inmovilización","Dividendos pagados"],a:1}]}]},
],
eval:[
 {q:"El análisis vertical muestra…",o:["La tendencia","La estructura","La inflación","El flujo de caja"],a:1},
 {q:"La prueba ácida excluye del activo corriente…",o:["La caja","Los créditos","Los bienes de cambio","Las inversiones"],a:2},
 {q:"Activo corriente 4.000, pasivo corriente 2.500. Liquidez corriente:",o:["0,625","1,6","1,5","6,5"],a:1},
 {q:"El endeudamiento se calcula como…",o:["PN / Pasivo","Pasivo / PN","Activo / Pasivo","Ventas / PN"],a:1},
 {q:"Según Du Pont, ROE =",o:["Margen × Rotación × Apalancamiento","Ventas / PN","Resultado / Activo","Margen + Rotación"],a:0},
 {q:"Resultado neto 600, PN 4.000. ROE:",o:["6%","15%","24%","66%"],a:1},
 {q:"Créditos por ventas 2.000, ventas anuales 24.000. Días de cobro (aprox.):",o:["12","30","30,4","60"],a:2},
 {q:"El ciclo de efectivo es…",o:["Días de inventario + cobro − pago","Días de pago − cobro","Ventas / activo","Liquidez × 365"],a:0},
 {q:"Para comparar estados de distintos años en Argentina, primero hay que…",o:["Convertirlos a dólares","Expresarlos en moneda homogénea","Sumar los impuestos","Eliminar las notas"],a:1},
 {q:"Los activos no corrientes deberían financiarse principalmente con…",o:["Deuda de corto plazo","Fondos de largo plazo (PN y pasivo no corriente)","Proveedores","Descubiertos"],a:1},
]};
})();
