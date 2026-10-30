/* Módulo 2 · Matemática para la gestión */
CAMPUS.content[2] = {
lessons:[
 {lead:"El porcentaje es la herramienta que más vas a usar como contador: IVA, márgenes, aumentos, descuentos, alícuotas e inflación.",
  html:`<p>Un porcentaje es una fracción de 100: 21% = 21/100 = 0,21. Para calcular el 21% de 50.000 multiplicás 50.000 × 0,21 = 10.500.</p>
  <h3>Aumentos y descuentos con un solo factor</h3>
  <ul><li>Aumentar un 15%: multiplicar por <b>1,15</b>.</li><li>Descontar un 15%: multiplicar por <b>0,85</b>.</li>
  <li>Porcentajes sucesivos se <b>multiplican</b>, no se suman: dos aumentos del 10% dan 1,10 × 1,10 = 1,21, o sea 21%.</li></ul>
  <h3>Sacar el IVA de un precio final</h3>
  <p>Si un precio de $ 121.000 incluye IVA 21%, el neto <b>no</b> es 121.000 × 0,79. Es 121.000 / 1,21 = <b>100.000</b>, y el IVA es 21.000.</p>
  <h3>Margen y markup</h3>
  <p>El <b>markup</b> se calcula sobre el costo: costo 1.000 con markup 25% → precio 1.250. El <b>margen</b> se calcula sobre el precio de venta: precio 1.250 y costo 1.000 dan un margen de 250/1.250 = 20%. Es el mismo negocio expresado de dos formas distintas.</p>
  <div class="formula">Precio = Costo / (1 − margen)  ·  Precio = Costo × (1 + markup)</div>
  <h3>Regla de tres</h3>
  <p><b>Directa:</b> si 4 kg cuestan $ 2.000, 10 kg cuestan 2.000 × 10/4 = 5.000. <b>Inversa:</b> si 3 empleados tardan 12 días, 4 empleados tardan 12 × 3/4 = 9 días (más gente, menos tiempo).</p>`,
  ex:[{type:"num",items:[
   {q:"¿Cuánto es el 15% de $ 80.000?",a:12000,u:"$"},
   {q:"Un precio final con IVA 21% es $ 121.000. ¿Cuál es el precio neto?",a:100000,u:"$",hint:"Dividí por 1,21."},
   {q:"Un producto aumenta 10% en enero y 10% en febrero. ¿Cuál fue el aumento total en %?",a:21,u:"%",tol:0.05,hint:"1,10 × 1,10"},
   {q:"Un producto cuesta $ 1.000 y querés un margen del 20% sobre el precio de venta. ¿A qué precio vendés?",a:1250,u:"$",hint:"Costo / (1 − 0,20)"},
   {q:"Un precio baja 20% y después sube 20%. ¿Cuál es la variación total en %? (usá signo negativo si baja)",a:-4,u:"%",tol:0.05,hint:"0,80 × 1,20"},
   {q:"3 empleados cargan facturas en 12 días. ¿Cuántos días tardan 4 empleados?",a:9,u:"días"}]}]},
 {lead:"Plantear una ecuación es traducir un problema en palabras a una igualdad con una incógnita.",
  html:`<p>Una ecuación lineal tiene la forma <span class="mono">ax + b = c</span>. Se resuelve despejando: lo que suma pasa restando, lo que multiplica pasa dividiendo.</p>
  <div class="formula">2x + 3 = 15  →  2x = 12  →  x = 6</div>
  <h3>Sistemas de dos ecuaciones</h3>
  <p>Cuando hay dos incógnitas necesitás dos ecuaciones. Ejemplo: un comercio vendió 100 unidades entre dos productos, A a $ 3 y B a $ 5, y facturó $ 380. ¿Cuántas de cada uno?</p>
  <div class="formula">x + y = 100  ·  3x + 5y = 380</div>
  <p>Por <b>sustitución</b>: x = 100 − y. Reemplazo: 3(100 − y) + 5y = 380 → 300 + 2y = 380 → y = 40, x = 60.</p>
  <p>Otros métodos: <b>igualación</b> (despejar la misma incógnita en las dos y se igualan), <b>reducción</b> (sumar o restar ecuaciones para eliminar una incógnita) y <b>determinantes</b> (regla de Cramer, que vemos en la lección 2.7).</p>
  <h3>Inecuaciones</h3>
  <p>Sirven para preguntas como “¿cuántas unidades tengo que vender para no perder?”. Se resuelven igual que una ecuación, con una regla extra: si multiplicás o dividís por un número negativo, el signo se invierte.</p>`,
  ex:[{type:"num",items:[
   {q:"Resolvé: 5x − 20 = 30. ¿Cuánto vale x?",a:10},
   {q:"Un sueldo bruto menos 17% de aportes da un neto de $ 830.000. ¿Cuál es el bruto?",a:1000000,u:"$",hint:"0,83 × B = 830.000"},
   {q:"En el ejemplo de la lección, si se hubieran facturado $ 420 con 100 unidades, ¿cuántas unidades de B se vendieron?",a:60,hint:"300 + 2y = 420"},
   {q:"Dos socios aportan $ 900.000 en total. Uno aporta el doble que el otro. ¿Cuánto aporta el que pone menos?",a:300000,u:"$"}]}]},
 {lead:"Las funciones lineales modelan los costos y los ingresos de casi cualquier negocio simple.",
  html:`<p>Una función lineal es <span class="mono">y = m·x + b</span>, donde <b>m</b> es la pendiente (cuánto cambia y por cada unidad de x) y <b>b</b> es la ordenada al origen (el valor de y cuando x = 0).</p>
  <h3>El modelo costo, ingreso y beneficio</h3>
  <div class="formula">CT(q) = CF + cv·q  ·  IT(q) = p·q  ·  B(q) = IT − CT = (p − cv)·q − CF</div>
  <ul><li><b>CF</b>, costo fijo: no depende de cuánto produzcas (alquiler, sueldos administrativos).</li>
  <li><b>cv</b>, costo variable unitario: crece con cada unidad (materia prima, comisiones).</li>
  <li><b>p − cv</b> es la <b>contribución marginal unitaria</b>: lo que cada unidad aporta para cubrir los fijos.</li></ul>
  <h3>Punto de equilibrio</h3>
  <p>Es la cantidad donde B = 0, o sea donde no ganás ni perdés:</p>
  <div class="formula">q* = CF / (p − cv)</div>
  <p>Ejemplo: CF = $ 200.000, cv = $ 300, p = $ 500. Cada unidad aporta $ 200, entonces necesitás 200.000 / 200 = <b>1.000 unidades</b>. Este concepto se profundiza en el Módulo 18 de Costos.</p>`,
  ex:[{type:"num",items:[
   {q:"CF = $ 200.000, cv = $ 300, p = $ 500. ¿Cuál es el punto de equilibrio en unidades?",a:1000},
   {q:"Con los mismos datos, ¿cuál es el beneficio si vendés 1.500 unidades?",a:100000,u:"$",hint:"(500 − 300) × 1.500 − 200.000"},
   {q:"Un taxi cobra $ 1.500 de bajada y $ 400 por km. ¿Cuánto cuesta un viaje de 12 km?",a:6300,u:"$"},
   {q:"Si el costo total de producir 100 unidades es $ 50.000 y el de 200 unidades es $ 80.000, ¿cuál es el costo variable unitario?",a:300,u:"$",hint:"Es la pendiente: (80.000 − 50.000) / (200 − 100)"},
   {q:"Con los datos anteriores, ¿cuál es el costo fijo?",a:20000,u:"$"}]}]},
 {lead:"Cuando el precio depende de la cantidad, o cuando el dinero crece con interés, aparecen curvas.",
  html:`<h3>Función cuadrática</h3>
  <p>Tiene la forma <span class="mono">y = a·x² + b·x + c</span> y su gráfico es una parábola. Si <b>a</b> es negativo, la parábola tiene un máximo en el vértice:</p>
  <div class="formula">x_vértice = −b / (2a)</div>
  <p>Aparece cuando la demanda es lineal: si para vender más tenés que bajar el precio, p = 200 − 2q, el ingreso es IT = p·q = 200q − 2q². El ingreso máximo está en q = −200 / (2·(−2)) = <b>50 unidades</b>.</p>
  <h3>Función exponencial</h3>
  <p>Modela el crecimiento a una tasa constante: un capital que gana 5% por período durante t períodos vale <span class="mono">C · (1,05)^t</span>. Es la base del interés compuesto (Módulo 11) y de la inflación acumulada.</p>
  <h3>Logaritmos</h3>
  <p>El logaritmo responde “¿a qué exponente tengo que elevar?”. Sirve para despejar el tiempo: ¿en cuántos períodos se duplica un capital al 5%?</p>
  <div class="formula">1,05^t = 2  →  t = ln 2 / ln 1,05 ≈ 14,21 períodos</div>`,
  ex:[{type:"num",items:[
   {q:"La demanda es p = 300 − 3q. ¿Con qué cantidad se maximiza el ingreso total?",a:50,hint:"IT = 300q − 3q². Vértice: −300 / (2·(−3))"},
   {q:"Con esa cantidad, ¿cuál es el ingreso máximo?",a:7500,u:"$",hint:"Precio = 300 − 3·50 = 150"},
   {q:"$ 100.000 crecen al 10% por año durante 3 años (compuesto). ¿Cuánto valen al final?",a:133100,u:"$"},
   {q:"¿En cuántos años se duplica un capital al 10% anual compuesto? (con dos decimales)",a:7.27,tol:0.02,u:"años",hint:"ln 2 / ln 1,1"}]}]},
 {lead:"La derivada mide cuánto cambia una función cuando su variable cambia un poquito. En economía se llama análisis marginal.",
  html:`<p>Si CT(q) es el costo total de producir q unidades, la derivada CT'(q) es el <b>costo marginal</b>: lo que cuesta, aproximadamente, producir una unidad más. Lo mismo vale para el ingreso marginal (IMg) y el beneficio marginal.</p>
  <h3>Reglas básicas de derivación</h3>
  <div class="tw"><table><thead><tr><th>Función</th><th>Derivada</th></tr></thead><tbody>
   <tr><td class="mono">k (constante)</td><td class="mono">0</td></tr>
   <tr><td class="mono">a·x</td><td class="mono">a</td></tr>
   <tr><td class="mono">xⁿ</td><td class="mono">n·xⁿ⁻¹</td></tr>
   <tr><td class="mono">f + g</td><td class="mono">f' + g'</td></tr>
   <tr><td class="mono">eˣ</td><td class="mono">eˣ</td></tr>
   <tr><td class="mono">ln x</td><td class="mono">1/x</td></tr>
  </tbody></table></div>
  <p>Ejemplo: CT(q) = 0,5q² + 20q + 1.000. Entonces CMg(q) = q + 20. Producir la unidad 50 cuesta aproximadamente 50 + 20 = <b>$ 70</b>. El costo fijo (1.000) desaparece al derivar, porque no cambia con la cantidad.</p>
  <h3>Costo medio</h3>
  <p>El costo medio es CT/q. Cuando el costo marginal es menor que el medio, el medio baja; cuando es mayor, el medio sube. Por eso el costo medio es mínimo justo donde CMg = CMe.</p>`,
  ex:[{type:"num",items:[
   {q:"Si CT(q) = 0,5q² + 20q + 1.000, ¿cuál es el costo marginal en q = 80?",a:100,u:"$"},
   {q:"Derivá f(x) = 3x² + 5x − 7 y evaluá en x = 2.",a:17,hint:"f'(x) = 6x + 5"},
   {q:"IT(q) = 200q − 2q². ¿Cuál es el ingreso marginal en q = 30?",a:80,u:"$",hint:"IMg = 200 − 4q"},
   {q:"Con CT(q) = 0,5q² + 20q + 1.000, ¿en qué cantidad el costo medio es mínimo? (CMe = CMg)",a:44.72,tol:0.05,hint:"0,5q + 20 + 1.000/q = q + 20 → 1.000/q = 0,5q → q² = 2.000"}]}]},
 {lead:"Una empresa maximiza su beneficio donde el ingreso de una unidad más es igual a su costo.",
  html:`<p>Para encontrar el máximo (o mínimo) de una función se busca dónde la derivada vale cero. Para saber si es máximo, la segunda derivada tiene que ser negativa.</p>
  <div class="formula">B(q) = IT(q) − CT(q)  →  B'(q) = 0  →  IMg = CMg</div>
  <h3>Ejemplo completo</h3>
  <p>Demanda: p = 200 − 2q. Costo: CT = 1.000 + 40q.</p>
  <ol><li>IT = 200q − 2q², entonces IMg = 200 − 4q.</li>
  <li>CMg = 40.</li><li>IMg = CMg → 200 − 4q = 40 → <b>q = 40</b>.</li>
  <li>Precio: p = 200 − 80 = <b>$ 120</b>.</li>
  <li>Beneficio: IT = 4.800, CT = 2.600, B = <b>$ 2.200</b>.</li>
  <li>B''(q) = −4 &lt; 0, confirma que es un máximo.</li></ol>
  <div class="note"><b>Para qué le sirve a un contador.</b> No vas a derivar todos los días, pero la idea de “decidir en el margen” está en todas las decisiones de costos: aceptar un pedido especial, agregar un turno de producción o fijar un precio.</div>`,
  ex:[{type:"num",items:[
   {q:"Demanda p = 300 − 3q y CT = 2.000 + 60q. ¿Qué cantidad maximiza el beneficio?",a:40,hint:"IMg = 300 − 6q; CMg = 60"},
   {q:"¿A qué precio se vende esa cantidad?",a:180,u:"$"},
   {q:"¿Cuál es el beneficio máximo?",a:2800,u:"$",hint:"IT = 180 × 40; CT = 2.000 + 60 × 40"}]}]},
 {lead:"Una matriz es una tabla de números. Sirve para trabajar con muchos productos, sucursales o períodos a la vez.",
  html:`<p>Una matriz de 2 × 3 tiene 2 filas y 3 columnas. Si las filas son sucursales y las columnas productos, cada número es la cantidad vendida.</p>
  <div class="tw"><table><thead><tr><th></th><th class="r">Prod. A</th><th class="r">Prod. B</th><th class="r">Prod. C</th></tr></thead><tbody>
  <tr><td>Sucursal 1</td><td class="r num">10</td><td class="r num">5</td><td class="r num">2</td></tr>
  <tr><td>Sucursal 2</td><td class="r num">4</td><td class="r num">8</td><td class="r num">6</td></tr></tbody></table></div>
  <p>Si los precios son A = 100, B = 200, C = 500, la facturación de cada sucursal es el <b>producto</b> de la matriz por el vector de precios: fila por columna, multiplicando y sumando.</p>
  <div class="formula">Sucursal 1: 10·100 + 5·200 + 2·500 = 3.000  ·  Sucursal 2: 4·100 + 8·200 + 6·500 = 5.000</div>
  <h3>Determinante y regla de Cramer</h3>
  <p>Para un sistema de 2 × 2 con matriz [[a, b], [c, d]], el determinante es <span class="mono">a·d − b·c</span>. Si es distinto de cero, el sistema tiene una única solución: x = det<sub>x</sub>/det, y = det<sub>y</sub>/det, donde det<sub>x</sub> reemplaza la primera columna por los términos independientes.</p>
  <p>Con el sistema x + y = 100; 3x + 5y = 380: det = 1·5 − 1·3 = 2; det<sub>x</sub> = 100·5 − 1·380 = 120 → x = 60.</p>`,
  ex:[{type:"num",items:[
   {q:"Con la matriz de la lección, si los precios fueran A = 200, B = 100, C = 300, ¿cuánto factura la Sucursal 2?",a:3400,u:"$",hint:"4·200 + 8·100 + 6·300"},
   {q:"Determinante de [[3, 2], [1, 4]]",a:10},
   {q:"Sistema 2x + y = 10; x − y = 2. ¿Cuánto vale x?",a:4,hint:"det = 2·(−1) − 1·1 = −3"}]}]},
],
eval:[
 {q:"Un precio de $ 60.500 incluye IVA 21%. ¿Cuál es el neto gravado?",o:["$ 47.795","$ 50.000","$ 49.500","$ 48.400"],a:1,ex:"60.500 / 1,21 = 50.000."},
 {q:"Tres aumentos sucesivos del 5% equivalen a…",o:["15%","15,76%","14,26%","5%"],a:1,ex:"1,05³ = 1,157625."},
 {q:"Si el costo es $ 800 y querés un markup del 50%, el precio es…",o:["$ 1.200","$ 1.600","$ 1.000","$ 1.333"],a:0,ex:"800 × 1,5 = 1.200. Con margen del 50% sobre venta sería 1.600."},
 {q:"En CT = CF + cv·q, la pendiente representa…",o:["El costo fijo","El costo variable unitario","El precio","El beneficio"],a:1,ex:"Cuánto aumenta el costo total por cada unidad más."},
 {q:"CF = $ 90.000, p = $ 250, cv = $ 100. Punto de equilibrio:",o:["360 unidades","600 unidades","900 unidades","250 unidades"],a:1,ex:"90.000 / 150 = 600."},
 {q:"La derivada del costo total es…",o:["El costo medio","El costo fijo","El costo marginal","El beneficio"],a:2,ex:"Mide el costo de una unidad adicional."},
 {q:"Una empresa maximiza su beneficio donde…",o:["El ingreso total es máximo","IMg = CMg","El costo medio es mínimo","El precio es máximo"],a:1,ex:"Condición de primer orden: B'(q) = IMg − CMg = 0."},
 {q:"Para despejar el tiempo en C·(1+i)^t = M se usan…",o:["Raíces cuadradas","Logaritmos","Derivadas","Matrices"],a:1,ex:"t = ln(M/C) / ln(1+i)."},
 {q:"Si 5 máquinas producen un lote en 8 horas, ¿cuánto tardan 4 máquinas?",o:["6,4 h","10 h","9 h","12 h"],a:1,ex:"Regla de tres inversa: 8 × 5/4 = 10."},
 {q:"El determinante de [[2, 3], [4, 6]] es 0. Eso significa que el sistema…",o:["Tiene una única solución","No tiene solución única","Siempre da cero","Es lineal"],a:1,ex:"Con determinante nulo, las ecuaciones son proporcionales: infinitas soluciones o ninguna."},
]};
