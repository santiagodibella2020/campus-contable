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
  <p>Leés: el 70% de los clientes paga con menos de 20 días de atraso (0,40 + 0,30). Los gráficos típicos son el histograma (cuantitativas), el de barras y el de sectores (cualitativas).</p>
  <h3>Paso a paso: armar una tabla de frecuencias</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Facturas emitidas por día durante 10 días: 3, 5, 3, 4, 5, 3, 2, 4, 3, 5.
  <ol><li><b>Ordená</b> los valores posibles de menor a mayor: 2, 3, 4, 5.</li>
  <li><b>Contá</b> cuántas veces aparece cada uno. Eso es la frecuencia absoluta (f): el 2 aparece 1 vez, el 3 aparece 4 veces, el 4 aparece 2 veces y el 5 aparece 3 veces. Control: 1 + 4 + 2 + 3 = 10 ✔ (tiene que dar el total de datos, n).</li>
  <li><b>Dividí</b> cada f por n para obtener la frecuencia relativa: 0,1; 0,4; 0,2; 0,3. Control: suman 1. Multiplicadas por 100 son porcentajes.</li>
  <li><b>Acumulá</b> sumando fila por fila: 1; 1 + 4 = 5; 5 + 2 = 7; 7 + 3 = 10. La última acumulada siempre es n.</li></ol>
  <div class="tw"><table><thead><tr><th class="r">Facturas</th><th class="r">f</th><th class="r">f/n</th><th class="r">F</th></tr></thead><tbody>
  <tr><td class="r num">2</td><td class="r num">1</td><td class="r num">0,10</td><td class="r num">1</td></tr>
  <tr><td class="r num">3</td><td class="r num">4</td><td class="r num">0,40</td><td class="r num">5</td></tr>
  <tr><td class="r num">4</td><td class="r num">2</td><td class="r num">0,20</td><td class="r num">7</td></tr>
  <tr><td class="r num">5</td><td class="r num">3</td><td class="r num">0,30</td><td class="r num">10</td></tr></tbody></table></div>
  Lectura: la acumulada 5 de la fila del 3 dice que en 5 de los 10 días se emitieron 3 facturas <b>o menos</b>.</div>
  <p>Cuando los datos son muchos y continuos (importes, días de atraso), se agrupan en <b>intervalos</b> como en la tabla de arriba (0 a 10, 10 a 20…). Convención: cada intervalo incluye el límite inferior y no el superior, así un dato no se cuenta dos veces.</p>
  <div class="err"><b>Errores comunes</b><ul><li>Confundir discreta (se cuenta: 3 empleados) con continua (se mide: $ 1.250,37).</li><li>Creer que una variable es cuantitativa porque usa números: el código postal o el número de CUIT son nominales.</li><li>Olvidarse de controlar que las frecuencias sumen n y las relativas sumen 1.</li></ul></div>
  ${CAMPUS.vid([["Tipos de variables estadísticas (Matemáticas profe Alex)","matematicas profe alex tipos de variables estadistica"],["Tabla de frecuencias paso a paso (Julioprofe)","julioprofe tabla de frecuencias"],["Tabla de frecuencias con datos agrupados (Matemáticas profe Alex)","matematicas profe alex tabla de frecuencias datos agrupados"],["Cómo se lee un histograma","matematicas profe alex histograma"]])}`,
  ex:[{type:"pick",title:"Clasificá cada variable",options:["Nominal","Ordinal","Discreta","Continua"],items:[
   ["Tipo de comprobante (A, B, C)","Nominal"],["Cantidad de facturas emitidas en el mes","Discreta"],["Importe de cada venta","Continua"],
   ["Categoría de Monotributo (A a K)","Ordinal","Las categorías van de menor a mayor facturación: tienen orden."],["Provincia del domicilio fiscal","Nominal"],
   ["Cantidad de hijos de un empleado","Discreta"],["Nivel de satisfacción del cliente (1 a 5 estrellas)","Ordinal"],["Tiempo que tarda un cliente en pagar","Continua"]]},
   {type:"num",title:"Con la tabla de la lección",items:[{q:"¿Qué porcentaje de clientes tiene 20 días de atraso o más?",a:30,u:"%",tol:0.1,ex:"Son las dos últimas filas: 0,20 + 0,10 = 0,30 → 30%. También: 1 − 0,70."},{q:"¿Cuántos clientes tienen menos de 30 días de atraso?",a:18,ex:"Es la acumulada de la fila 20 a 30: 18."},{q:"Con el ejemplo de las facturas por día, ¿qué porcentaje de los días se emitieron 4 facturas o más?",a:50,u:"%",tol:0.1,hint:"Sumá las relativas del 4 y del 5.",ex:"0,20 + 0,30 = 0,50 → 50%. También: 1 − 5/10 (acumulada del 3)."}]}]},
 {lead:"Las medidas de posición resumen un conjunto de datos en un solo valor representativo.",
  html:`<ul><li><b>Media aritmética:</b> la suma de los datos dividida por la cantidad. Datos 4, 8, 6, 10, 12 → media 40/5 = 8.</li>
  <li><b>Mediana:</b> el valor del medio con los datos ordenados. 4, 6, <b>8</b>, 10, 12 → mediana 8. Si la cantidad es par, es el promedio de los dos centrales.</li>
  <li><b>Moda:</b> el valor que más se repite.</li></ul>
  <div class="note"><b>Media o mediana.</b> La media se deja arrastrar por valores extremos. Si cuatro empleados ganan $ 1 millón y el dueño $ 11 millones, la media es $ 3 millones pero la mediana es $ 1 millón. Para sueldos o precios de viviendas, la mediana suele representar mejor.</div>
  <h3>Media ponderada</h3>
  <p>Cuando cada dato tiene un peso distinto. Es exactamente el método del <b>precio promedio ponderado (PPP)</b> que se usa para valuar inventarios:</p>
  <div class="formula">Compra 1: 100 u a $ 50 · Compra 2: 300 u a $ 60 → PPP = (5.000 + 18.000) / 400 = $ 57,50</div>
  <h3>Cuartiles y percentiles</h3>
  <p>Dividen los datos ordenados en partes iguales. El primer cuartil (Q1) deja por debajo el 25% de los datos; el percentil 90 deja por debajo el 90%. La mediana es el Q2.</p>
  <h3>Paso a paso con los datos de la lección anterior</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Facturas por día: 3, 5, 3, 4, 5, 3, 2, 4, 3, 5 (n = 10).
  <ol><li><b>Media:</b> sumo todo, 3 + 5 + 3 + 4 + 5 + 3 + 2 + 4 + 3 + 5 = 37, y divido por la cantidad: 37 / 10 = <b>3,7</b> facturas por día.</li>
  <li><b>Mediana:</b> primero ordeno: 2, 3, 3, 3, <u>3</u>, <u>4</u>, 4, 5, 5, 5. Como n es par (10), hay dos datos en el medio: el 5.º (3) y el 6.º (4). Promedio: (3 + 4) / 2 = <b>3,5</b>.</li>
  <li><b>Moda:</b> el valor que más se repite es el 3 (4 veces). Moda = <b>3</b>.</li></ol>
  Para ubicar la mediana: con n impar está en la posición (n + 1) / 2; con n par, es el promedio de las posiciones n/2 y n/2 + 1.</div>
  <div class="ejr"><b>Ejemplo resuelto · media ponderada (PPP)</b>Compra 1: 100 u a $ 50. Compra 2: 300 u a $ 60.
  <ol><li>Multiplico cada precio por su cantidad (el “peso”): 100 × 50 = 5.000; 300 × 60 = 18.000.</li><li>Sumo esos productos: 23.000.</li><li>Divido por la suma de los pesos (400 unidades): 23.000 / 400 = <b>$ 57,50</b>.</li></ol>
  Si hubieras hecho el promedio simple (50 + 60) / 2 = 55, estaría mal: compraste el triple de unidades a $ 60, así que ese precio tiene que pesar más.</div>
  <div class="ejr"><b>Ejemplo resuelto · cuartiles</b>Datos ordenados: 4, 6, 8, 10, 12, 14, 16 (n = 7).
  <ol><li>Q2 (mediana): posición (7 + 1) / 2 = 4 → <b>10</b>.</li><li>Q1: posición (n + 1) / 4 = 2 → <b>6</b>. El 25% de los datos está por debajo.</li><li>Q3: posición 3 · (n + 1) / 4 = 6 → <b>14</b>.</li></ol>
  Hay varios métodos para calcular cuartiles y la hoja de cálculo puede dar valores levemente distintos; la idea es siempre la misma.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Buscar la mediana sin ordenar primero los datos.</li><li>Promediar precios sin ponderar por las cantidades.</li><li>Pensar que siempre hay una sola moda: puede haber dos (bimodal) o ninguna.</li></ul></div>
  ${CAMPUS.vid([["Media, mediana y moda (Matemáticas profe Alex)","matematicas profe alex media mediana y moda"],["Media ponderada (Julioprofe)","julioprofe media ponderada"],["Cuartiles y percentiles (Matemáticas profe Alex)","matematicas profe alex cuartiles datos no agrupados"]])}`,
  ex:[{type:"num",items:[
   {q:"Ventas diarias: 120, 150, 90, 200, 140. ¿Cuál es la media?",a:140,ex:"Suma 700 / 5 datos = 140."},
   {q:"Con esos mismos datos, ¿cuál es la mediana?",a:140,hint:"Ordená: 90, 120, 140, 150, 200",ex:"Ordenados: 90, 120, 140, 150, 200. El del medio (posición 3) es 140."},
   {q:"Sueldos: 800, 900, 900, 1.000, 1.200, 5.000 (en miles). ¿Cuál es la mediana?",a:950,hint:"Hay 6 datos: promediá el 3.º y el 4.º",ex:"n = 6, par: los centrales son el 3.º (900) y el 4.º (1.000). (900 + 1.000) / 2 = 950. La media daría 1.633: el 5.000 la arrastra."},
   {q:"Compraste 200 u a $ 40 y 50 u a $ 70. ¿Cuál es el precio promedio ponderado?",a:46,u:"$",ex:"(200 × 40 + 50 × 70) / 250 = (8.000 + 3.500) / 250 = 46."},{q:"Facturas por día: 3, 5, 3, 4, 5, 3, 2, 4, 3, 5. ¿Cuál es la media?",a:3.7,tol:0.01,hint:"Suma 37",ex:"37 / 10 = 3,7."},{q:"Con esos datos, ¿cuál es la mediana?",a:3.5,tol:0.01,hint:"Ordená y promediá el 5.º y el 6.º dato.",ex:"2, 3, 3, 3, 3, 4, 4, 5, 5, 5: (3 + 4) / 2 = 3,5."}]}]},
 {lead:"Dos empresas pueden tener la misma venta promedio y riesgos muy distintos. La dispersión mide cuánto se alejan los datos del promedio.",
  html:`<ul><li><b>Rango:</b> máximo menos mínimo.</li>
  <li><b>Varianza:</b> el promedio de los desvíos al cuadrado respecto de la media.</li>
  <li><b>Desvío estándar (σ):</b> la raíz cuadrada de la varianza. Está en las mismas unidades que los datos.</li>
  <li><b>Coeficiente de variación (CV):</b> σ / media. Permite comparar dispersión entre series de distinto tamaño.</li></ul>
  <div class="formula">σ² = Σ (xᵢ − media)² / n   ·   σ = √σ²   ·   CV = σ / media</div>
  <p>Ejemplo con 2, 4, 4, 4, 5, 5, 7, 9: media = 5. Desvíos al cuadrado: 9, 1, 1, 1, 0, 0, 4, 16 → suma 32 → varianza 32/8 = 4 → σ = 2 → CV = 40%.</p>
  <p>Si los datos son una <b>muestra</b> y querés estimar la varianza de la población, se divide por <b>n − 1</b> en lugar de n (varianza muestral corregida).</p>
  <div class="note"><b>Aplicación.</b> En finanzas, el desvío estándar de los rendimientos es la medida clásica de riesgo (Módulo 23). En auditoría, un desvío grande en una cuenta respecto de su comportamiento habitual es una señal para investigar.</div>
  <h3>Paso a paso: varianza y desvío con una tabla</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Ventas de tres días: 10, 20 y 30.
  <ol><li>Calculo la media: (10 + 20 + 30) / 3 = 20.</li><li>A cada dato le resto la media (desvío) y lo elevo al cuadrado:
  <div class="tw"><table><thead><tr><th class="r">x</th><th class="r">x − media</th><th class="r">(x − media)²</th></tr></thead><tbody>
  <tr><td class="r num">10</td><td class="r num">−10</td><td class="r num">100</td></tr>
  <tr><td class="r num">20</td><td class="r num">0</td><td class="r num">0</td></tr>
  <tr><td class="r num">30</td><td class="r num">10</td><td class="r num">100</td></tr>
  <tr><td><b>Suma</b></td><td class="r num">0</td><td class="r num"><b>200</b></td></tr></tbody></table></div></li>
  <li>¿Por qué al cuadrado? Porque los desvíos siempre suman 0 (los negativos compensan a los positivos). Elevando al cuadrado todos quedan positivos.</li>
  <li>Varianza poblacional: 200 / 3 = <b>66,67</b>. Si fuera una muestra: 200 / (3 − 1) = <b>100</b>.</li>
  <li>Desvío estándar: √66,67 = <b>8,16</b>. Está en las mismas unidades que las ventas.</li>
  <li>Coeficiente de variación: 8,16 / 20 = 0,408 → <b>40,8%</b>.</li></ol>
  Interpretación: “en promedio, las ventas se alejan unos 8 de la media de 20”.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Olvidarse de elevar al cuadrado los desvíos (la suma daría 0).</li><li>Informar la varianza como si fuera el desvío: hay que sacar la raíz.</li><li>Dividir por n cuando los datos son una muestra y se pide la varianza muestral (n − 1).</li></ul></div>
  ${CAMPUS.vid([["Varianza y desviación estándar (Matemáticas profe Alex)","matematicas profe alex varianza y desviacion estandar"],["Coeficiente de variación (Julioprofe)","julioprofe coeficiente de variacion"],["Varianza poblacional y muestral, por qué n − 1","varianza muestral n-1 explicacion facil"]])}`,
  ex:[{type:"num",items:[
   {q:"Datos 10, 20, 30. ¿Cuál es la varianza poblacional?",a:66.67,tol:0.05,hint:"Media 20; desvíos² 100, 0, 100",ex:"Desvíos al cuadrado: 100 + 0 + 100 = 200. Dividido n = 3: 66,67."},
   {q:"Con los mismos datos, ¿cuál es el desvío estándar? (dos decimales)",a:8.16,tol:0.02,ex:"√66,67 = 8,16."},
   {q:"Una serie tiene media 200 y σ = 30. ¿Cuál es su coeficiente de variación en %?",a:15,u:"%",tol:0.1,ex:"CV = 30 / 200 = 0,15 → 15%."},
   {q:"Sucursal A: media 1.000, σ 100. Sucursal B: media 500, σ 75. ¿Qué CV tiene la sucursal B en %?",a:15,u:"%",tol:0.1,ex:"A tiene CV 10%: es relativamente más estable que B."},{q:"Datos 10, 20, 30 tomados como muestra. ¿Cuál es la varianza muestral?",a:100,hint:"Dividí la suma de desvíos² por n − 1",ex:"200 / (3 − 1) = 100."}]}]},
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
  <div class="note"><b>Aplicación contable.</b> Las normas piden registrar una previsión cuando una pérdida es <b>probable</b> y se puede estimar. Para un juicio con 70% de probabilidad de perderse por $ 1.000.000 se registra la mejor estimación del importe, no el valor esperado mecánico. Lo vemos en el Módulo 13.</div>
  <h3>Ejemplos resueltos paso a paso</h3>
  <div class="ejr"><b>Regla de la suma (sucesos que se superponen)</b>Tirás un dado. ¿Probabilidad de sacar par <b>o</b> mayor que 4?
  <ol><li>Par: {2, 4, 6} → 3/6. Mayor que 4: {5, 6} → 2/6.</li><li>El 6 está en los dos: P(par y mayor que 4) = 1/6.</li><li>P = 3/6 + 2/6 − 1/6 = <b>4/6 ≈ 0,667</b>. Se resta para no contar el 6 dos veces. Comprobación: los casos son {2, 4, 5, 6}, o sea 4 de 6 ✔.</li></ol></div>
  <div class="ejr"><b>Diagrama de árbol (una cosa después de la otra)</b>El 40% de las ventas son con tarjeta y, de esas, el 5% se rechaza.
  <ol><li>Primera rama: tarjeta (0,40) o efectivo (0,60).</li><li>Segunda rama, desde “tarjeta”: rechazada (0,05) o aprobada (0,95).</li><li>Para llegar a “tarjeta y rechazada” se multiplican las ramas del camino: 0,40 × 0,05 = <b>0,02 = 2%</b>.</li></ol></div>
  <div class="ejr"><b>Probabilidad condicional con una tabla</b>200 clientes:
  <div class="tw"><table><thead><tr><th></th><th class="r">En mora</th><th class="r">Al día</th><th class="r">Total</th></tr></thead><tbody>
  <tr><td>Empresas</td><td class="r num">12</td><td class="r num">108</td><td class="r num">120</td></tr>
  <tr><td>Personas</td><td class="r num">18</td><td class="r num">62</td><td class="r num">80</td></tr>
  <tr><td>Total</td><td class="r num">30</td><td class="r num">170</td><td class="r num">200</td></tr></tbody></table></div>
  <ol><li>P(mora) = 30 / 200 = 15%.</li><li>P(mora | empresa): “sabiendo que es empresa”, el total pasa a ser solo las 120 empresas: 12 / 120 = <b>10%</b>.</li><li>Con la fórmula: P(empresa y mora) / P(empresa) = (12/200) / (120/200) = 0,06 / 0,60 = 0,10 ✔.</li><li>P(mora | persona) = 18 / 80 = <b>22,5%</b>. Conclusión: las personas tienen más riesgo de mora que las empresas.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Sumar probabilidades de sucesos que se superponen sin restar la intersección.</li><li>En la condicional, dividir por el total general en vez de por el total del grupo que ya sabés que ocurrió.</li><li>Multiplicar probabilidades de sucesos que no son independientes como si lo fueran.</li></ul></div>
  ${CAMPUS.vid([["Probabilidad desde cero (Matemáticas profe Alex)","matematicas profe alex probabilidad introduccion"],["Diagrama de árbol (Matemáticas profe Alex)","matematicas profe alex diagrama de arbol probabilidad"],["Probabilidad condicional (Julioprofe)","julioprofe probabilidad condicional"],["Valor esperado explicado","valor esperado probabilidad ejemplo explicado"]])}`,
  ex:[{type:"num",items:[
   {q:"De 200 clientes, 30 están en mora. Si elegís uno al azar, ¿cuál es la probabilidad (en %) de que esté al día?",a:85,u:"%",tol:0.1,ex:"Al día: 170 / 200 = 0,85 → 85%. O con el complemento: 1 − 30/200."},
   {q:"Dos controles independientes detectan un error con probabilidad 0,8 y 0,7. ¿Cuál es la probabilidad de que ninguno lo detecte? (decimal)",a:0.06,tol:0.001,hint:"0,2 × 0,3",ex:"Que el primero falle: 1 − 0,8 = 0,2. El segundo: 0,3. Independientes: 0,2 × 0,3 = 0,06."},
   {q:"Una inversión: 50% gana $ 200.000, 30% gana $ 50.000, 20% pierde $ 300.000. ¿Valor esperado?",a:55000,u:"$",ex:"0,5 × 200.000 + 0,3 × 50.000 + 0,2 × (−300.000) = 100.000 + 15.000 − 60.000 = 55.000."},
   {q:"El 40% de las ventas son con tarjeta. De esas, el 5% se rechaza. ¿Qué % del total son ventas con tarjeta rechazadas?",a:2,u:"%",tol:0.05,ex:"Árbol: 0,40 × 0,05 = 0,02 → 2%."},{q:"Con la tabla de clientes de la lección, ¿cuál es la probabilidad (en %) de mora sabiendo que el cliente es una persona?",a:22.5,u:"%",tol:0.05,hint:"18 / 80",ex:"Solo miro las 80 personas: 18 / 80 = 0,225 → 22,5%."}]}]},
 {lead:"Muchas variables (pesos, errores de medición, rendimientos promedio) se distribuyen con forma de campana: la distribución normal.",
  html:`<p>La normal queda definida por su media (μ) y su desvío (σ). Es simétrica: la media, la mediana y la moda coinciden.</p>
  <h3>Regla empírica 68 · 95 · 99,7</h3>
  <ul><li>Entre μ ± 1σ cae aproximadamente el <b>68%</b> de los datos.</li>
  <li>Entre μ ± 2σ, el <b>95%</b> (exactamente ±1,96σ).</li>
  <li>Entre μ ± 3σ, el <b>99,7%</b>.</li></ul>
  <h3>Estandarizar: el valor z</h3>
  <div class="formula">z = (x − μ) / σ</div>
  <p>z dice a cuántos desvíos de la media está un valor. Con μ = 100 y σ = 15, el valor 130 tiene z = 2: está en el 2,5% superior.</p>
  <p>Para valores exactos se usa una tabla de la normal estándar o la función <span class="mono">DISTR.NORM.ESTAND.N</span> de la hoja de cálculo. Algunos valores útiles: P(Z &lt; 1) = 0,8413; P(Z &lt; 1,645) = 0,95; P(Z &lt; 1,96) = 0,975.</p>
  <h3>Paso a paso: usar la normal con la tabla</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Los sueldos de una empresa siguen una normal con μ = $ 1.000.000 y σ = $ 200.000.
  <ol><li><b>¿Qué % gana menos de $ 1.200.000?</b> z = (1.200.000 − 1.000.000) / 200.000 = 1. La tabla da P(Z &lt; 1) = 0,8413 → <b>84,13%</b>.</li>
  <li><b>¿Qué % gana menos de $ 800.000?</b> z = (800.000 − 1.000.000) / 200.000 = −1. Por simetría, P(Z &lt; −1) = 1 − P(Z &lt; 1) = 1 − 0,8413 = 0,1587 → <b>15,87%</b>.</li>
  <li><b>¿Qué % gana entre $ 800.000 y $ 1.200.000?</b> Resto las dos áreas: 0,8413 − 0,1587 = 0,6826 → <b>68,26%</b>. Es el “68%” de la regla empírica.</li>
  <li><b>¿Qué % gana más de $ 1.400.000?</b> z = 2. La tabla da P(Z &lt; 2) = 0,9772, entonces por encima queda 1 − 0,9772 = <b>2,28%</b>. La regla empírica decía “2,5%”: es una aproximación.</li></ol>
  Truco para no perderse: dibujá siempre la campana y pintá el área que te piden. La tabla da el área <b>a la izquierda</b> de z; si te piden “más de”, restá de 1.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Restar la media al revés: es x − μ, no μ − x.</li><li>Dividir por la varianza en vez de por el desvío.</li><li>Leer la tabla como “área a la derecha” cuando da el área a la izquierda.</li></ul></div>
  ${CAMPUS.vid([["Distribución normal desde cero (Matemáticas profe Alex)","matematicas profe alex distribucion normal"],["Uso de la tabla Z (Julioprofe)","julioprofe distribucion normal tabla z"],["Regla empírica 68-95-99,7 (Khan Academy en español)","khan academy español regla empirica 68 95 99.7"]])}`,
  ex:[{type:"num",items:[
   {q:"μ = 500, σ = 50. ¿Cuál es el z de x = 600?",a:2,ex:"(600 − 500) / 50 = 2."},
   {q:"Con esa distribución, ¿qué % de los datos cae entre 450 y 550 (regla empírica)?",a:68,u:"%",tol:0.5,ex:"450 y 550 son μ ± 1σ: 68%."},
   {q:"¿Qué % cae por encima de 600 (regla empírica)?",a:2.5,u:"%",tol:0.1,hint:"95% está entre ±2σ; el 5% restante se reparte en las dos colas.",ex:"600 es μ + 2σ. Fuera de ±2σ queda 5%, la mitad de cada lado: 2,5%."},
   {q:"Con P(Z < 1) = 0,8413, ¿qué probabilidad (en %) hay de superar μ + 1σ?",a:15.87,u:"%",tol:0.02,ex:"1 − 0,8413 = 0,1587 → 15,87%."},{q:"Sueldos normales con μ = $ 1.000.000 y σ = $ 200.000. ¿Qué % gana menos de $ 800.000?",a:15.87,u:"%",tol:0.02,hint:"z = −1; P(Z < −1) = 1 − 0,8413",ex:"z = (800.000 − 1.000.000) / 200.000 = −1. Por simetría: 1 − 0,8413 = 0,1587 → 15,87%."}]}]},
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
  <p>Se plantea una hipótesis nula (H₀, “no hay diferencia”) y se rechaza si los datos muestran algo muy improbable bajo H₀. El nivel de significación (α, típicamente 5%) es el riesgo aceptado de rechazar H₀ siendo verdadera.</p>
  <h3>Paso a paso: intervalo de confianza</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Revisaste 100 partidas: media $ 2.000 y σ = $ 500. Querés un intervalo al 95%.
  <ol><li>Error estándar: σ / √n = 500 / √100 = 500 / 10 = <b>50</b>.</li><li>Valor z para 95%: <b>1,96</b> (para 90% sería 1,645; para 99%, 2,576).</li><li>Margen de error: 1,96 × 50 = <b>98</b>.</li><li>Intervalo: 2.000 − 98 = 1.902 y 2.000 + 98 = 2.098 → <b>[1.902 ; 2.098]</b>.</li></ol>
  Se lee: “con 95% de confianza, el promedio real de todas las partidas está entre $ 1.902 y $ 2.098”.</div>
  <div class="ejr"><b>Ejemplo resuelto · ¿de qué tamaño tiene que ser la muestra?</b>Querés estimar el promedio con un margen de error máximo (E) de $ 5, sabiendo que σ ≈ $ 100, al 95%.
  <div class="formula">n = (z · σ / E)²</div>
  <ol><li>z · σ / E = 1,96 × 100 / 5 = 39,2.</li><li>n = 39,2² = 1.536,64.</li><li>Siempre se redondea <b>hacia arriba</b>: <b>1.537</b> partidas.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · prueba de hipótesis</b>Un proveedor dice que su entrega promedio es de 500 unidades. Medís 100 entregas: media 520, σ = 80. ¿Le creés, con α = 5%?
  <ol><li>H₀: la media es 500. H₁: la media no es 500.</li><li>Estadístico: z = (520 − 500) / (80 / √100) = 20 / 8 = 2,5.</li><li>Límite al 5% (dos colas): ±1,96. Como 2,5 &gt; 1,96, el resultado es muy improbable si H₀ fuera cierta.</li><li>Conclusión: <b>se rechaza H₀</b>. La media real parece distinta de 500.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Dividir σ por n en vez de por √n.</li><li>Redondear el tamaño de muestra hacia abajo.</li><li>Decir “la hipótesis es verdadera” cuando no se rechaza: solo no hay evidencia suficiente en contra.</li></ul></div>
  ${CAMPUS.vid([["Tipos de muestreo","tipos de muestreo aleatorio simple sistematico estratificado"],["Intervalo de confianza para la media, explicado","intervalo de confianza para la media explicacion paso a paso"],["Tamaño de muestra","calculo tamaño de muestra para la media ejercicio"],["Prueba de hipótesis, explicación fácil","prueba de hipotesis explicacion facil ejemplo"]])}`,
  ex:[{type:"pick",title:"¿Qué tipo de muestreo es?",options:["Aleatorio simple","Sistemático","Estratificado"],items:[
     ["Se sortean 60 legajos de empleados con números al azar","Aleatorio simple"],["Se revisa una factura cada 100, empezando por la n.º 37","Sistemático"],
     ["Se separan las cuentas a cobrar en mayores y menores a $ 1 millón y se muestrea cada grupo","Estratificado"]]},
   {type:"num",items:[{q:"Muestra de 100 partidas, media $ 2.000, σ $ 500. ¿Cuál es el error estándar?",a:50,u:"$",ex:"500 / √100 = 500 / 10 = 50."},{q:"¿Cuál es el límite superior del intervalo al 95%?",a:2098,u:"$",hint:"2.000 + 1,96 × 50",ex:"2.000 + 1,96 × 50 = 2.000 + 98 = 2.098."},{q:"¿Cuántas partidas necesitás para estimar la media con un error máximo de $ 50, si σ = $ 500 y querés 95% de confianza?",a:385,hint:"n = (1,96 × 500 / 50)², redondeando hacia arriba",ex:"1,96 × 500 / 50 = 19,6. 19,6² = 384,16 → 385."}]}]},
 {lead:"Un número índice compara un valor con el de un período base. Es la herramienta para medir y corregir la inflación.",
  html:`<div class="formula">Índice = Valor actual / Valor base × 100   ·   Variación % = (I₁ / I₀ − 1) × 100</div>
  <p>El <b>IPC</b> del INDEC mide la evolución de los precios de una canasta de consumo (base diciembre 2016 = 100). Para el ajuste por inflación contable se usa un índice combinado definido por la FACPCE (IPIM hasta 2016 e IPC desde 2017), como vemos en el Módulo 14.</p>
  <h3>Inflación acumulada</h3>
  <p>Las tasas mensuales se <b>componen</b>: 3% mensual durante 12 meses no es 36% sino 1,03¹² − 1 = <b>42,58%</b>.</p>
  <h3>Deflactar: pasar de valores nominales a reales</h3>
  <p>Si un sueldo subió 30% y la inflación fue 40%, la variación real es 1,30 / 1,40 − 1 = <b>−7,14%</b>: perdió poder adquisitivo.</p>
  <h3>Coeficiente de reexpresión</h3>
  <p>Para expresar un importe de una fecha pasada en moneda de cierre: <span class="mono">importe × índice cierre / índice de origen</span>. Un bien comprado a $ 1.000.000 con índice 200, al cierre con índice 260, se reexpresa a 1.000.000 × 1,30 = $ 1.300.000.</p>
  <h3>Paso a paso con una serie de IPC</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Índice de precios: enero 100, febrero 105, marzo 112, abril 120.
  <ol><li>Variación de febrero: 105 / 100 − 1 = 0,05 → <b>5%</b>.</li><li>Marzo: 112 / 105 − 1 = 0,0667 → <b>6,67%</b>. Siempre se divide por el índice del mes <b>anterior</b>, no se restan puntos (112 − 105 = 7 puntos no es 7%).</li><li>Abril: 120 / 112 − 1 = <b>7,14%</b>.</li><li>Acumulada enero–abril: 120 / 100 − 1 = <b>20%</b>. Comprobación componiendo: 1,05 × 1,0667 × 1,0714 = 1,20 ✔.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · deflactar un sueldo</b>Un sueldo pasó de $ 1.000.000 a $ 1.300.000 mientras el IPC pasó de 100 a 140.
  <ol><li>Llevo el sueldo nuevo a pesos del período base: 1.300.000 / 1,40 = <b>928.571</b>.</li><li>Comparo con el sueldo original: 928.571 / 1.000.000 − 1 = <b>−7,14%</b>.</li><li>Conclusión: cobra más pesos, pero con ellos compra un 7,14% menos.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Restar puntos del índice en lugar de dividir.</li><li>Sumar inflaciones mensuales para obtener la anual.</li><li>Calcular la variación real restando (30% − 40% = −10%) en vez de dividiendo factores (1,30 / 1,40).</li></ul></div>
  ${CAMPUS.vid([["Números índice, explicación","numeros indice estadistica explicacion ejemplo"],["Inflación acumulada a partir de la mensual","como calcular la inflacion acumulada mensual"],["Salario real: deflactar con el IPC","salario real deflactar ipc ejemplo"]])}`,
  ex:[{type:"num",items:[
   {q:"El índice pasó de 250 a 300. ¿Cuál fue la variación en %?",a:20,u:"%",tol:0.05,ex:"300 / 250 − 1 = 0,20 → 20%."},
   {q:"Inflación mensual del 2% durante 12 meses. ¿Inflación anual acumulada en %? (dos decimales)",a:26.82,u:"%",tol:0.02,ex:"1,02¹² = 1,2682 → 26,82%."},
   {q:"Un sueldo sube 50% y la inflación del período es 25%. ¿Variación real en %?",a:20,u:"%",tol:0.05,ex:"1,50 / 1,25 − 1 = 0,20 → 20% real."},
   {q:"Un terreno se compró a $ 2.000.000 con índice 400. Al cierre el índice es 520. ¿Importe reexpresado?",a:2600000,u:"$",ex:"Coeficiente 520 / 400 = 1,30. 2.000.000 × 1,30 = 2.600.000."},{q:"El IPC pasó de 105 a 112. ¿Cuál fue la inflación del mes en %? (dos decimales)",a:6.67,u:"%",tol:0.02,hint:"112 / 105 − 1",ex:"112 / 105 = 1,0667 → 6,67%. No son 7 puntos = 7%."}]}]},
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
