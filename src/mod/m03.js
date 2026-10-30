/* Módulo 3 · Estadística */
CAMPUS.content[3] = {
lessons:[
 {lead:"La estadística ordena datos para describir una situación y sacar conclusiones con un margen de error conocido.",
  html:`<ul><li><b>Población:</b> el conjunto completo que querés estudiar (todas las facturas del año).</li>
  <li><b>Muestra:</b> una parte de la población (200 facturas elegidas al azar).</li>
  <li><b>Variable:</b> la característica que medís en cada elemento.</li></ul>
  <h3>Tipos de variables</h3>
  <div class="tw"><table><thead><tr><th>Tipo</th><th>Ejemplo</th></tr></thead><tbody>
  <tr><td><b>Cualitativa nominal</b>: categorías sin orden</td><td>Provincia del cliente, tipo de factura (A, B, C)</td></tr>
  <tr><td><b>Cualitativa ordinal</b>: categorías con orden</td><td>Calificación crediticia (alta, media, baja)</td></tr>
  <tr><td><b>Cuantitativa discreta</b>: se cuenta</td><td>Cantidad de empleados, unidades vendidas</td></tr>
  <tr><td><b>Cuantitativa continua</b>: se mide</td><td>Importe de una factura, días de atraso promedio, peso</td></tr></tbody></table></div>
  <h3>Tabla de frecuencias</h3>
  <p>Días de atraso en el pago de 20 clientes:</p>
  <div class="tw"><table><thead><tr><th>Días</th><th class="r">Frecuencia absoluta (f)</th><th class="r">Relativa (f/n)</th><th class="r">Acumulada (F)</th></tr></thead><tbody>
  <tr><td>0 a 10</td><td class="r num">8</td><td class="r num">0,40</td><td class="r num">8</td></tr>
  <tr><td>10 a 20</td><td class="r num">6</td><td class="r num">0,30</td><td class="r num">14</td></tr>
  <tr><td>20 a 30</td><td class="r num">4</td><td class="r num">0,20</td><td class="r num">18</td></tr>
  <tr><td>30 a 40</td><td class="r num">2</td><td class="r num">0,10</td><td class="r num">20</td></tr></tbody></table></div>
  <p>Leés: el 70% de los clientes paga con menos de 20 días de atraso (0,40 + 0,30). Los gráficos típicos son el histograma (cuantitativas), el de barras y el de sectores (cualitativas).</p>`,
  ex:[{type:"pick",title:"Clasificá cada variable",options:["Nominal","Ordinal","Discreta","Continua"],items:[
   ["Tipo de comprobante (A, B, C)","Nominal"],["Cantidad de facturas emitidas en el mes","Discreta"],["Importe de cada venta","Continua"],
   ["Categoría de Monotributo (A a K)","Ordinal","Las categorías van de menor a mayor facturación: tienen orden."],["Provincia del domicilio fiscal","Nominal"],
   ["Cantidad de hijos de un empleado","Discreta"],["Nivel de satisfacción del cliente (1 a 5 estrellas)","Ordinal"],["Tiempo que tarda un cliente en pagar","Continua"]]},
   {type:"num",title:"Con la tabla de la lección",items:[{q:"¿Qué porcentaje de clientes tiene 20 días de atraso o más?",a:30,u:"%",tol:0.1},{q:"¿Cuántos clientes tienen menos de 30 días de atraso?",a:18}]}]},
 {lead:"Las medidas de posición resumen un conjunto de datos en un solo valor representativo.",
  html:`<ul><li><b>Media aritmética:</b> la suma de los datos dividida por la cantidad. Datos 4, 8, 6, 10, 12 → media 40/5 = 8.</li>
  <li><b>Mediana:</b> el valor del medio con los datos ordenados. 4, 6, <b>8</b>, 10, 12 → mediana 8. Si la cantidad es par, es el promedio de los dos centrales.</li>
  <li><b>Moda:</b> el valor que más se repite.</li></ul>
  <div class="note"><b>Media o mediana.</b> La media se deja arrastrar por valores extremos. Si cuatro empleados ganan $ 1 millón y el dueño $ 11 millones, la media es $ 3 millones pero la mediana es $ 1 millón. Para sueldos o precios de viviendas, la mediana suele representar mejor.</div>
  <h3>Media ponderada</h3>
  <p>Cuando cada dato tiene un peso distinto. Es exactamente el método del <b>precio promedio ponderado (PPP)</b> que se usa para valuar inventarios:</p>
  <div class="formula">Compra 1: 100 u a $ 50 · Compra 2: 300 u a $ 60 → PPP = (5.000 + 18.000) / 400 = $ 57,50</div>
  <h3>Cuartiles y percentiles</h3>
  <p>Dividen los datos ordenados en partes iguales. El primer cuartil (Q1) deja por debajo el 25% de los datos; el percentil 90 deja por debajo el 90%. La mediana es el Q2.</p>`,
  ex:[{type:"num",items:[
   {q:"Ventas diarias: 120, 150, 90, 200, 140. ¿Cuál es la media?",a:140},
   {q:"Con esos mismos datos, ¿cuál es la mediana?",a:140,hint:"Ordená: 90, 120, 140, 150, 200"},
   {q:"Sueldos: 800, 900, 900, 1.000, 1.200, 5.000 (en miles). ¿Cuál es la mediana?",a:950,hint:"Hay 6 datos: promediá el 3.º y el 4.º"},
   {q:"Compraste 200 u a $ 40 y 50 u a $ 70. ¿Cuál es el precio promedio ponderado?",a:46,u:"$"}]}]},
 {lead:"Dos empresas pueden tener la misma venta promedio y riesgos muy distintos. La dispersión mide cuánto se alejan los datos del promedio.",
  html:`<ul><li><b>Rango:</b> máximo menos mínimo.</li>
  <li><b>Varianza:</b> el promedio de los desvíos al cuadrado respecto de la media.</li>
  <li><b>Desvío estándar (σ):</b> la raíz cuadrada de la varianza. Está en las mismas unidades que los datos.</li>
  <li><b>Coeficiente de variación (CV):</b> σ / media. Permite comparar dispersión entre series de distinto tamaño.</li></ul>
  <div class="formula">σ² = Σ (xᵢ − media)² / n   ·   σ = √σ²   ·   CV = σ / media</div>
  <p>Ejemplo con 2, 4, 4, 4, 5, 5, 7, 9: media = 5. Desvíos al cuadrado: 9, 1, 1, 1, 0, 0, 4, 16 → suma 32 → varianza 32/8 = 4 → σ = 2 → CV = 40%.</p>
  <p>Si los datos son una <b>muestra</b> y querés estimar la varianza de la población, se divide por <b>n − 1</b> en lugar de n (varianza muestral corregida).</p>
  <div class="note"><b>Aplicación.</b> En finanzas, el desvío estándar de los rendimientos es la medida clásica de riesgo (Módulo 23). En auditoría, un desvío grande en una cuenta respecto de su comportamiento habitual es una señal para investigar.</div>`,
  ex:[{type:"num",items:[
   {q:"Datos 10, 20, 30. ¿Cuál es la varianza poblacional?",a:66.67,tol:0.05,hint:"Media 20; desvíos² 100, 0, 100"},
   {q:"Con los mismos datos, ¿cuál es el desvío estándar? (dos decimales)",a:8.16,tol:0.02},
   {q:"Una serie tiene media 200 y σ = 30. ¿Cuál es su coeficiente de variación en %?",a:15,u:"%",tol:0.1},
   {q:"Sucursal A: media 1.000, σ 100. Sucursal B: media 500, σ 75. ¿Qué CV tiene la sucursal B en %?",a:15,u:"%",tol:0.1,ex:"A tiene CV 10%: es relativamente más estable que B."}]}]},
 {lead:"La probabilidad mide qué tan posible es que ocurra algo, entre 0 (imposible) y 1 (seguro).",
  html:`<p><b>Probabilidad clásica:</b> casos favorables / casos posibles. La probabilidad de sacar un número par con un dado es 3/6 = 0,5.</p>
  <h3>Reglas</h3>
  <ul><li><b>Complemento:</b> P(no A) = 1 − P(A).</li>
  <li><b>Suma:</b> P(A o B) = P(A) + P(B) − P(A y B). Si son excluyentes, el último término es 0.</li>
  <li><b>Producto (independientes):</b> P(A y B) = P(A) · P(B).</li>
  <li><b>Condicional:</b> P(A | B) = P(A y B) / P(B), la probabilidad de A sabiendo que ocurrió B.</li></ul>
  <h3>Valor esperado</h3>
  <p>Es el promedio de los resultados posibles ponderado por su probabilidad. Se usa para decidir con riesgo y para estimar previsiones.</p>
  <div class="formula">Proyecto: 60% gana $ 100.000 · 40% pierde $ 50.000 → VE = 0,6·100.000 + 0,4·(−50.000) = $ 40.000</div>
  <div class="note"><b>Aplicación contable.</b> Las normas piden registrar una previsión cuando una pérdida es <b>probable</b> y se puede estimar. Para un juicio con 70% de probabilidad de perderse por $ 1.000.000 se registra la mejor estimación del importe, no el valor esperado mecánico. Lo vemos en el Módulo 13.</div>`,
  ex:[{type:"num",items:[
   {q:"De 200 clientes, 30 están en mora. Si elegís uno al azar, ¿cuál es la probabilidad (en %) de que esté al día?",a:85,u:"%",tol:0.1},
   {q:"Dos controles independientes detectan un error con probabilidad 0,8 y 0,7. ¿Cuál es la probabilidad de que ninguno lo detecte? (decimal)",a:0.06,tol:0.001,hint:"0,2 × 0,3"},
   {q:"Una inversión: 50% gana $ 200.000, 30% gana $ 50.000, 20% pierde $ 300.000. ¿Valor esperado?",a:55000,u:"$"},
   {q:"El 40% de las ventas son con tarjeta. De esas, el 5% se rechaza. ¿Qué % del total son ventas con tarjeta rechazadas?",a:2,u:"%",tol:0.05}]}]},
 {lead:"Muchas variables (pesos, errores de medición, rendimientos promedio) se distribuyen con forma de campana: la distribución normal.",
  html:`<p>La normal queda definida por su media (μ) y su desvío (σ). Es simétrica: la media, la mediana y la moda coinciden.</p>
  <h3>Regla empírica 68 · 95 · 99,7</h3>
  <ul><li>Entre μ ± 1σ cae aproximadamente el <b>68%</b> de los datos.</li>
  <li>Entre μ ± 2σ, el <b>95%</b> (exactamente ±1,96σ).</li>
  <li>Entre μ ± 3σ, el <b>99,7%</b>.</li></ul>
  <h3>Estandarizar: el valor z</h3>
  <div class="formula">z = (x − μ) / σ</div>
  <p>z dice a cuántos desvíos de la media está un valor. Con μ = 100 y σ = 15, el valor 130 tiene z = 2: está en el 2,5% superior.</p>
  <p>Para valores exactos se usa una tabla de la normal estándar o la función <span class="mono">DISTR.NORM.ESTAND.N</span> de la hoja de cálculo. Algunos valores útiles: P(Z &lt; 1) = 0,8413; P(Z &lt; 1,645) = 0,95; P(Z &lt; 1,96) = 0,975.</p>`,
  ex:[{type:"num",items:[
   {q:"μ = 500, σ = 50. ¿Cuál es el z de x = 600?",a:2},
   {q:"Con esa distribución, ¿qué % de los datos cae entre 450 y 550 (regla empírica)?",a:68,u:"%",tol:0.5},
   {q:"¿Qué % cae por encima de 600 (regla empírica)?",a:2.5,u:"%",tol:0.1,hint:"95% está entre ±2σ; el 5% restante se reparte en las dos colas."},
   {q:"Con P(Z < 1) = 0,8413, ¿qué probabilidad (en %) hay de superar μ + 1σ?",a:15.87,u:"%",tol:0.02}]}]},
 {lead:"Revisar una muestra bien elegida permite opinar sobre toda la población con un error controlado. Es la base del muestreo de auditoría.",
  html:`<h3>Tipos de muestreo</h3>
  <ul><li><b>Aleatorio simple:</b> cada elemento tiene la misma probabilidad de ser elegido.</li>
  <li><b>Sistemático:</b> se elige un punto de partida al azar y después uno cada k elementos (una factura cada 50).</li>
  <li><b>Estratificado:</b> se divide la población en grupos homogéneos (por monto, por sucursal) y se muestrea en cada uno.</li>
  <li><b>Por unidad monetaria:</b> cada peso tiene la misma probabilidad, así las partidas grandes tienen más chance de entrar. Muy usado en auditoría.</li></ul>
  <h3>Intervalo de confianza para la media</h3>
  <div class="formula">media muestral ± z · σ / √n     (z = 1,96 para 95% de confianza)</div>
  <p>Ejemplo: 400 facturas, promedio $ 500, σ = $ 100. Error estándar = 100/√400 = 5. Intervalo al 95%: 500 ± 9,8 → <b>[490,2 ; 509,8]</b>.</p>
  <p>Para reducir el error a la mitad hay que <b>cuadruplicar</b> la muestra, porque el error depende de √n.</p>
  <h3>Prueba de hipótesis</h3>
  <p>Se plantea una hipótesis nula (H₀, “no hay diferencia”) y se rechaza si los datos muestran algo muy improbable bajo H₀. El nivel de significación (α, típicamente 5%) es el riesgo aceptado de rechazar H₀ siendo verdadera.</p>`,
  ex:[{type:"pick",title:"¿Qué tipo de muestreo es?",options:["Aleatorio simple","Sistemático","Estratificado"],items:[
     ["Se sortean 60 legajos de empleados con números al azar","Aleatorio simple"],["Se revisa una factura cada 100, empezando por la n.º 37","Sistemático"],
     ["Se separan las cuentas a cobrar en mayores y menores a $ 1 millón y se muestrea cada grupo","Estratificado"]]},
   {type:"num",items:[{q:"Muestra de 100 partidas, media $ 2.000, σ $ 500. ¿Cuál es el error estándar?",a:50,u:"$"},{q:"¿Cuál es el límite superior del intervalo al 95%?",a:2098,u:"$",hint:"2.000 + 1,96 × 50"}]}]},
 {lead:"Un número índice compara un valor con el de un período base. Es la herramienta para medir y corregir la inflación.",
  html:`<div class="formula">Índice = Valor actual / Valor base × 100   ·   Variación % = (I₁ / I₀ − 1) × 100</div>
  <p>El <b>IPC</b> del INDEC mide la evolución de los precios de una canasta de consumo (base diciembre 2016 = 100). Para el ajuste por inflación contable se usa un índice combinado definido por la FACPCE (IPIM hasta 2016 e IPC desde 2017), como vemos en el Módulo 14.</p>
  <h3>Inflación acumulada</h3>
  <p>Las tasas mensuales se <b>componen</b>: 3% mensual durante 12 meses no es 36% sino 1,03¹² − 1 = <b>42,58%</b>.</p>
  <h3>Deflactar: pasar de valores nominales a reales</h3>
  <p>Si un sueldo subió 30% y la inflación fue 40%, la variación real es 1,30 / 1,40 − 1 = <b>−7,14%</b>: perdió poder adquisitivo.</p>
  <h3>Coeficiente de reexpresión</h3>
  <p>Para expresar un importe de una fecha pasada en moneda de cierre: <span class="mono">importe × índice cierre / índice de origen</span>. Un bien comprado a $ 1.000.000 con índice 200, al cierre con índice 260, se reexpresa a 1.000.000 × 1,30 = $ 1.300.000.</p>`,
  ex:[{type:"num",items:[
   {q:"El índice pasó de 250 a 300. ¿Cuál fue la variación en %?",a:20,u:"%",tol:0.05},
   {q:"Inflación mensual del 2% durante 12 meses. ¿Inflación anual acumulada en %? (dos decimales)",a:26.82,u:"%",tol:0.02},
   {q:"Un sueldo sube 50% y la inflación del período es 25%. ¿Variación real en %?",a:20,u:"%",tol:0.05},
   {q:"Un terreno se compró a $ 2.000.000 con índice 400. Al cierre el índice es 520. ¿Importe reexpresado?",a:2600000,u:"$"}]}]},
],
eval:[
 {q:"La cantidad de empleados de una empresa es una variable…",o:["Cualitativa nominal","Cuantitativa discreta","Cuantitativa continua","Cualitativa ordinal"],a:1,ex:"Se cuenta, toma valores enteros."},
 {q:"Si hay valores extremos muy altos, ¿qué medida representa mejor el centro?",o:["La media","La mediana","El rango","La varianza"],a:1,ex:"La mediana no se deja arrastrar por los extremos."},
 {q:"El método PPP para inventarios es una aplicación de…",o:["La moda","La mediana","La media ponderada","El desvío"],a:2,ex:"Cada precio se pondera por la cantidad comprada."},
 {q:"El coeficiente de variación sirve para…",o:["Comparar la dispersión de series de distinto tamaño","Calcular la media","Medir la inflación","Ordenar datos"],a:0,ex:"CV = σ / media, es una medida relativa."},
 {q:"Si P(A) = 0,3 y A y B son excluyentes con P(B) = 0,5, P(A o B) es…",o:["0,15","0,8","0,65","0,2"],a:1,ex:"Excluyentes: se suman directamente."},
 {q:"En una normal, entre μ ± 2σ cae aproximadamente…",o:["50%","68%","95%","99,7%"],a:2},
 {q:"Para reducir a la mitad el error de muestreo hay que…",o:["Duplicar la muestra","Cuadruplicar la muestra","Reducir la muestra","Cambiar el nivel de confianza a 50%"],a:1,ex:"El error depende de 1/√n."},
 {q:"Inflación mensual del 5% durante 3 meses equivale a una acumulada de…",o:["15%","15,76%","14,5%","5%"],a:1,ex:"1,05³ − 1 = 15,76%."},
 {q:"Un sueldo subió 20% y la inflación fue 20%. La variación real es…",o:["20%","0%","40%","−20%"],a:1,ex:"1,20 / 1,20 − 1 = 0."},
 {q:"Revisar una factura cada 50, empezando por una elegida al azar, es muestreo…",o:["Estratificado","Sistemático","Por conglomerados","De juicio"],a:1},
]};
