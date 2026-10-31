/* Módulo 2 · Matemática para la gestión (reescrito paso a paso) */
CAMPUS.content[2] = {
lessons:[
 {lead:"El porcentaje es la herramienta que más vas a usar como contador: IVA, márgenes, aumentos, descuentos, alícuotas e inflación. Vamos de cero, despacio.",
  html:`<h3>¿Qué es un porcentaje?</h3>
  <p>“Por ciento” quiere decir “de cada 100”. Si el IVA es del 21%, significa que por cada $ 100 de precio neto se pagan $ 21 de impuesto. Por eso un porcentaje se puede escribir de tres formas, que valen lo mismo:</p>
  <div class="formula">21%  =  21/100  =  0,21</div>
  <p>Para pasar de porcentaje a número decimal, dividí por 100 (corré la coma dos lugares a la izquierda): 5% = 0,05; 10,5% = 0,105; 150% = 1,5.</p>

  <h3>Calcular el porcentaje de un número</h3>
  <p><b>Regla:</b> multiplicá el número por el porcentaje escrito en decimal.</p>
  <div class="ejr"><b>Ejemplo resuelto 1</b>¿Cuánto es el 21% de $ 50.000?
  <ol><li>Paso el 21% a decimal: 21 / 100 = 0,21.</li><li>Multiplico: 50.000 × 0,21 = <b>10.500</b>.</li></ol>
  Comprobación de sentido común: el 10% de 50.000 es 5.000 (corro la coma un lugar). El 20% es el doble, 10.000. El 21% tiene que ser un poquito más que 10.000. ✔</div>

  <h3>¿Qué porcentaje es un número de otro?</h3>
  <p><b>Regla:</b> dividí la parte por el total y multiplicá por 100.</p>
  <div class="ejr"><b>Ejemplo resuelto 2</b>Vendiste $ 30.000 de un total de $ 120.000. ¿Qué porcentaje representa?
  <ol><li>Parte / total = 30.000 / 120.000 = 0,25.</li><li>0,25 × 100 = <b>25%</b>.</li></ol></div>

  <h3>Variación porcentual (cuánto subió o bajó algo)</h3>
  <div class="formula">Variación % = (valor nuevo − valor viejo) / valor viejo × 100</div>
  <div class="ejr"><b>Ejemplo resuelto 3</b>Un alquiler pasó de $ 400.000 a $ 520.000.
  <ol><li>Diferencia: 520.000 − 400.000 = 120.000.</li><li>La divido por el valor <b>viejo</b>: 120.000 / 400.000 = 0,30.</li><li>Aumentó un <b>30%</b>.</li></ol>
  Si el resultado da negativo, el valor bajó.</div>

  <h3>Aumentos y descuentos con un solo número (el “factor”)</h3>
  <p>En vez de calcular el aumento y después sumarlo, se puede hacer en una sola cuenta:</p>
  <ul><li>Aumentar un 15% es quedarse con el 100% y sumar el 15%: 100% + 15% = 115% = <b>× 1,15</b>.</li>
  <li>Descontar un 15% es quedarse con el 100% menos el 15%: 85% = <b>× 0,85</b>.</li></ul>
  <div class="ejr"><b>Ejemplo resuelto 4</b>Un producto de $ 8.000 aumenta 15%. 8.000 × 1,15 = <b>9.200</b>. Es lo mismo que 8.000 + 1.200, pero en un solo paso.</div>
  <p><b>Porcentajes sucesivos se multiplican, no se suman.</b> Si algo sube 10% en enero y 10% en febrero, el segundo aumento se aplica sobre el precio ya aumentado:</p>
  <div class="ejr"><b>Ejemplo resuelto 5</b>Precio inicial $ 100. Enero: 100 × 1,10 = 110. Febrero: 110 × 1,10 = 121. Aumento total: 21%, no 20%. En una sola cuenta: 1,10 × 1,10 = 1,21 → 21%.<br>Lo mismo con una baja y una suba: −20% y +20% dan 0,80 × 1,20 = 0,96, o sea una <b>baja del 4%</b>, no cero.</div>

  <h3>Sacar el IVA de un precio final</h3>
  <p>Este es el error número uno de quien empieza. Si un precio <b>final</b> de $ 121.000 incluye IVA 21%, ese precio es el 121% del neto. Entonces el neto se obtiene <b>dividiendo</b> por 1,21:</p>
  <div class="ejr"><b>Ejemplo resuelto 6</b>
  <ol><li>Precio final = neto × 1,21.</li><li>Despejo: neto = 121.000 / 1,21 = <b>100.000</b>.</li><li>IVA = 121.000 − 100.000 = <b>21.000</b>.</li></ol>
  Comprobación: 100.000 × 21% = 21.000 ✔. Si hubieras hecho 121.000 × 0,79 te daría 95.590, que está mal, porque el 21% se calcula sobre el neto y no sobre el precio final.</div>

  <h3>Margen y markup: dos formas de ver la ganancia</h3>
  <p>Los dos miden la ganancia de una venta, pero la comparan contra cosas distintas:</p>
  <ul><li><b>Markup</b>: ganancia comparada con el <b>costo</b>. Costo 1.000 + markup 25% → precio 1.000 × 1,25 = 1.250.</li>
  <li><b>Margen</b>: ganancia comparada con el <b>precio de venta</b>. Precio 1.250, ganancia 250 → margen 250 / 1.250 = 20%.</li></ul>
  <div class="formula">Precio = Costo × (1 + markup)   ·   Precio = Costo / (1 − margen)</div>
  <div class="ejr"><b>Ejemplo resuelto 7</b>Costo $ 1.000 y querés <b>margen</b> del 20% sobre la venta. Precio = 1.000 / (1 − 0,20) = 1.000 / 0,80 = <b>1.250</b>. Comprobación: ganancia 250, y 250 / 1.250 = 20% ✔.</div>

  <h3>Regla de tres simple</h3>
  <p>Sirve cuando conocés tres datos de una proporción y te falta el cuarto. Lo primero es preguntarse: <b>si una cantidad aumenta, ¿la otra aumenta o disminuye?</b></p>
  <ul><li><b>Directa</b> (las dos aumentan juntas): más kilos, más plata.</li><li><b>Inversa</b> (una aumenta y la otra disminuye): más empleados, menos días.</li></ul>
  <div class="ejr"><b>Ejemplo resuelto 8 · directa</b>4 kg cuestan $ 2.000. ¿Cuánto cuestan 10 kg?
  <ol><li>Planteo: 4 kg → 2.000; 10 kg → x.</li><li>Directa: se multiplica “en cruz”: x = 2.000 × 10 / 4.</li><li>x = <b>5.000</b>.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 9 · inversa</b>3 empleados cargan las facturas en 12 días. ¿Cuántos días tardan 4?
  <ol><li>Más empleados, menos días: es inversa.</li><li>En la inversa se multiplica “derecho”: el trabajo total es 3 × 12 = 36 días-persona.</li><li>Lo repartimos entre 4: 36 / 4 = <b>9 días</b>.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Sacar el IVA multiplicando por 0,79 en lugar de dividir por 1,21.</li><li>Sumar porcentajes sucesivos (10% + 10% = 20%) en vez de multiplicar factores.</li><li>Calcular la variación dividiendo por el valor nuevo en lugar del viejo.</li><li>Confundir margen (sobre venta) con markup (sobre costo).</li></ul></div>
  ${CAMPUS.vid([["Porcentajes desde cero (Julioprofe)","julioprofe porcentajes"],["Regla de tres directa e inversa (Matemáticas profe Alex)","matematicas profe alex regla de tres inversa"],["Aumentos y descuentos porcentuales","matematicas profe alex aumentos y descuentos porcentuales"],["Calcular el IVA incluido en un precio final","calcular iva incluido precio final dividir 1,21"]])}`,
  ex:[{type:"num",items:[
   {q:"¿Cuánto es el 15% de $ 80.000?",a:12000,u:"$",hint:"80.000 × 0,15",ex:"15% = 0,15. 80.000 × 0,15 = 12.000. Atajo: 10% = 8.000, 5% = 4.000, total 12.000."},
   {q:"Un precio final con IVA 21% es $ 121.000. ¿Cuál es el precio neto?",a:100000,u:"$",hint:"Dividí por 1,21.",ex:"El precio final es el 121% del neto: 121.000 / 1,21 = 100.000."},
   {q:"Un producto aumenta 10% en enero y 10% en febrero. ¿Cuál fue el aumento total en %?",a:21,u:"%",tol:0.05,hint:"1,10 × 1,10",ex:"1,10 × 1,10 = 1,21. El factor 1,21 significa un aumento del 21%."},
   {q:"Un producto cuesta $ 1.000 y querés un margen del 20% sobre el precio de venta. ¿A qué precio vendés?",a:1250,u:"$",hint:"Costo / (1 − 0,20)",ex:"1.000 / 0,80 = 1.250. La ganancia (250) es el 20% de 1.250."},
   {q:"Un precio baja 20% y después sube 20%. ¿Cuál es la variación total en %? (usá signo negativo si baja)",a:-4,u:"%",tol:0.05,hint:"0,80 × 1,20",ex:"0,80 × 1,20 = 0,96. Quedó en el 96% del original: bajó 4%."},
   {q:"3 empleados cargan facturas en 12 días. ¿Cuántos días tardan 4 empleados?",a:9,u:"días",hint:"Es inversa: 3 × 12 / 4",ex:"Trabajo total: 3 × 12 = 36 días-persona. Entre 4 personas: 36 / 4 = 9 días."},
   {q:"Un sueldo pasó de $ 800.000 a $ 1.040.000. ¿Qué porcentaje aumentó?",a:30,u:"%",tol:0.05,hint:"(1.040.000 − 800.000) / 800.000 × 100",ex:"Diferencia 240.000. Dividida por el valor viejo: 240.000 / 800.000 = 0,30 → 30%."},
   {q:"Un precio final de $ 60.500 incluye IVA 21%. ¿Cuánto es el IVA contenido?",a:10500,u:"$",hint:"Primero sacá el neto: 60.500 / 1,21",ex:"Neto = 60.500 / 1,21 = 50.000. IVA = 60.500 − 50.000 = 10.500."},
   {q:"5 kg de harina cuestan $ 3.500. ¿Cuánto cuestan 8 kg?",a:5600,u:"$",hint:"Directa: 3.500 × 8 / 5",ex:"Precio por kg: 3.500 / 5 = 700. 8 kg × 700 = 5.600."}]}]},

 {lead:"Plantear una ecuación es traducir un problema en palabras a una igualdad con una incógnita. Acá vas a aprender a despejar paso a paso.",
  html:`<h3>¿Qué es una ecuación?</h3>
  <p>Es una igualdad donde hay un número que no conocemos, la <b>incógnita</b>, que llamamos x. Resolverla es encontrar qué valor de x hace que los dos lados den lo mismo.</p>
  <p>Pensala como una <b>balanza en equilibrio</b>: lo que hagas de un lado lo tenés que hacer del otro para que siga equilibrada. Si sumás 5 a la izquierda, sumás 5 a la derecha. De ahí sale la regla práctica:</p>
  <ul><li>Lo que está <b>sumando</b> pasa al otro lado <b>restando</b> (y al revés).</li><li>Lo que está <b>multiplicando</b> pasa al otro lado <b>dividiendo</b> (y al revés).</li></ul>

  <h3>Paso a paso para despejar</h3>
  <ol><li>Si hay paréntesis, resolvelos (aplicá la propiedad distributiva).</li><li>Juntá todos los términos con x de un lado y los números sueltos del otro.</li><li>Sumá lo que quedó de cada lado.</li><li>Dividí por el número que acompaña a la x.</li><li><b>Comprobá</b>: reemplazá x en la ecuación original.</li></ol>

  <div class="ejr"><b>Ejemplo resuelto 1</b>2x + 3 = 15
  <ol><li>El 3 está sumando, pasa restando: 2x = 15 − 3 → 2x = 12.</li><li>El 2 está multiplicando, pasa dividiendo: x = 12 / 2 → <b>x = 6</b>.</li><li>Comprobación: 2 · 6 + 3 = 15 ✔.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 2 · x en los dos lados</b>3x + 7 = 2x + 19
  <ol><li>Paso 2x a la izquierda (restando): 3x − 2x + 7 = 19 → x + 7 = 19.</li><li>Paso el 7 restando: x = 19 − 7 → <b>x = 12</b>.</li><li>Comprobación: 3 · 12 + 7 = 43 y 2 · 12 + 19 = 43 ✔.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 3 · con paréntesis</b>2(x − 4) + 6 = 3x − 10
  <ol><li>Distributiva: 2 · x − 2 · 4 = 2x − 8. Queda: 2x − 8 + 6 = 3x − 10 → 2x − 2 = 3x − 10.</li><li>Paso 2x a la derecha y −10 a la izquierda: −2 + 10 = 3x − 2x → 8 = x.</li><li><b>x = 8</b>. Comprobación: 2(8 − 4) + 6 = 14 y 3 · 8 − 10 = 14 ✔.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 4 · problema de la vida real</b>Un sueldo bruto menos 17% de aportes da un neto de $ 830.000. ¿Cuál es el bruto?
  <ol><li>Llamo B al bruto. Si le saco el 17%, me queda el 83%: 0,83 · B = 830.000.</li><li>Despejo: B = 830.000 / 0,83 = <b>1.000.000</b>.</li></ol></div>

  <h3>Sistemas de dos ecuaciones</h3>
  <p>Cuando hay <b>dos</b> incógnitas, necesitás <b>dos</b> ecuaciones. Problema: un comercio vendió 100 unidades entre dos productos, A a $ 3 y B a $ 5, y facturó $ 380. ¿Cuántas de cada uno?</p>
  <div class="formula">x + y = 100   (unidades)   ·   3x + 5y = 380   (pesos)</div>
  <div class="ejr"><b>Método de sustitución</b>
  <ol><li>Despejo una incógnita de la ecuación más fácil: x = 100 − y.</li><li>La reemplazo en la otra: 3(100 − y) + 5y = 380.</li><li>Resuelvo: 300 − 3y + 5y = 380 → 2y = 80 → <b>y = 40</b>.</li><li>Vuelvo al paso 1: x = 100 − 40 = <b>60</b>.</li><li>Compruebo: 3 · 60 + 5 · 40 = 180 + 200 = 380 ✔.</li></ol></div>
  <div class="ejr"><b>Método de reducción (sumar o restar ecuaciones)</b>Sistema: 2x + y = 10 y x − y = 2.
  <ol><li>Si sumo las dos ecuaciones, la y se cancela (+y − y = 0): 3x = 12.</li><li><b>x = 4</b>.</li><li>Reemplazo en la segunda: 4 − y = 2 → <b>y = 2</b>.</li></ol></div>
  <p>Otros métodos: <b>igualación</b> (despejás la misma incógnita en las dos y las igualás) y <b>determinantes</b> (regla de Cramer, que vemos en la lección 2.7). Todos dan el mismo resultado; usá el que te resulte más cómodo.</p>

  <h3>Inecuaciones</h3>
  <p>Sirven para preguntas como “¿cuántas unidades tengo que vender para no perder?”. Se resuelven igual que una ecuación, con <b>una sola regla extra</b>: si multiplicás o dividís por un número negativo, el signo se da vuelta (&lt; pasa a &gt;).</p>
  <div class="ejr"><b>Ejemplo resuelto 5</b>Cada unidad deja $ 200 y tenés $ 200.000 de gastos fijos. ¿Cuántas unidades tenés que vender para no perder?
  <ol><li>Planteo: 200q − 200.000 ≥ 0.</li><li>200q ≥ 200.000 → q ≥ 1.000. Necesitás vender <b>al menos 1.000 unidades</b>.</li></ol>
  Con signo negativo: −2x &gt; 6 → x &lt; 6 / (−2) → x &lt; −3 (el &gt; se dio vuelta).</div>
  <div class="err"><b>Errores comunes</b><ul><li>Pasar un número al otro lado sin cambiarle el signo.</li><li>Aplicar la distributiva solo al primer término: 2(x − 4) no es 2x − 4, es 2x − 8.</li><li>Olvidarse de dar vuelta la desigualdad al dividir por un negativo.</li><li>No comprobar el resultado: siempre reemplazá al final.</li></ul></div>
  ${CAMPUS.vid([["Ecuaciones de primer grado (Matemáticas profe Alex)","matematicas profe alex ecuaciones de primer grado"],["Ecuaciones con paréntesis (Julioprofe)","julioprofe ecuaciones lineales con parentesis"],["Sistemas 2×2 por sustitución (Julioprofe)","julioprofe sistema de ecuaciones 2x2 metodo de sustitucion"],["Sistemas por reducción (Matemáticas profe Alex)","matematicas profe alex sistema de ecuaciones metodo de reduccion"],["Inecuaciones lineales (Julioprofe)","julioprofe inecuaciones lineales"]])}`,
  ex:[{type:"num",items:[
   {q:"Resolvé: 5x − 20 = 30. ¿Cuánto vale x?",a:10,hint:"Pasá el −20 sumando y después dividí por 5.",ex:"5x = 30 + 20 = 50 → x = 50 / 5 = 10. Comprobación: 5 · 10 − 20 = 30."},
   {q:"Un sueldo bruto menos 17% de aportes da un neto de $ 830.000. ¿Cuál es el bruto?",a:1000000,u:"$",hint:"0,83 × B = 830.000",ex:"Si se descuenta el 17%, queda el 83%: B = 830.000 / 0,83 = 1.000.000."},
   {q:"En el ejemplo de la lección, si se hubieran facturado $ 420 con 100 unidades, ¿cuántas unidades de B se vendieron?",a:60,hint:"300 + 2y = 420",ex:"3(100 − y) + 5y = 420 → 300 + 2y = 420 → 2y = 120 → y = 60."},
   {q:"Dos socios aportan $ 900.000 en total. Uno aporta el doble que el otro. ¿Cuánto aporta el que pone menos?",a:300000,u:"$",hint:"x + 2x = 900.000",ex:"El que pone menos aporta x y el otro 2x. 3x = 900.000 → x = 300.000."},
   {q:"Resolvé: 3x + 7 = 2x + 19",a:12,hint:"Juntá las x de un lado: 3x − 2x",ex:"x + 7 = 19 → x = 12."},
   {q:"Resolvé: 2(x − 4) + 6 = 3x − 10",a:8,hint:"Distributiva: 2x − 8 + 6",ex:"2x − 2 = 3x − 10 → 8 = x."},
   {q:"Resolvé: x / 4 + 5 = 12",a:28,hint:"Primero pasá el 5; después lo que divide pasa multiplicando.",ex:"x / 4 = 7 → x = 7 × 4 = 28."},
   {q:"−3x + 12 ≥ 0. ¿Cuál es el valor máximo que puede tomar x?",a:4,hint:"Al dividir por −3 se da vuelta el signo.",ex:"−3x ≥ −12 → x ≤ −12 / −3 → x ≤ 4. El máximo es 4."}]}]},

 {lead:"Las funciones lineales modelan los costos y los ingresos de casi cualquier negocio simple. Si entendés esta lección, entendés el punto de equilibrio.",
  html:`<h3>¿Qué es una función?</h3>
  <p>Una función es una regla que a cada valor de entrada (x) le asigna un valor de salida (y). Ejemplo cotidiano: el taxi. La entrada es la cantidad de kilómetros y la salida es lo que pagás.</p>
  <p>Una función es <b>lineal</b> cuando su gráfico es una recta. Se escribe así:</p>
  <div class="formula">y = m·x + b</div>
  <ul><li><b>b</b> (ordenada al origen): el valor de y cuando x = 0. En el taxi, la bajada de bandera: lo que pagás aunque no recorras nada.</li>
  <li><b>m</b> (pendiente): cuánto aumenta y por cada unidad que aumenta x. En el taxi, el precio por kilómetro.</li></ul>
  <div class="ejr"><b>Ejemplo resuelto 1</b>Un taxi cobra $ 1.500 de bajada y $ 400 por km. La función es y = 400x + 1.500.
  <div class="tw"><table><thead><tr><th class="r">km (x)</th><th class="r">Cálculo</th><th class="r">Pagás (y)</th></tr></thead><tbody>
  <tr><td class="r num">0</td><td class="r num">400·0 + 1.500</td><td class="r num">1.500</td></tr>
  <tr><td class="r num">1</td><td class="r num">400·1 + 1.500</td><td class="r num">1.900</td></tr>
  <tr><td class="r num">5</td><td class="r num">400·5 + 1.500</td><td class="r num">3.500</td></tr>
  <tr><td class="r num">12</td><td class="r num">400·12 + 1.500</td><td class="r num">6.300</td></tr></tbody></table></div>
  Fijate que cada km extra suma siempre lo mismo ($ 400): eso es lo que hace que sea una recta.</div>

  <h3>Calcular la pendiente con dos puntos</h3>
  <div class="formula">m = (y₂ − y₁) / (x₂ − x₁)   =   cuánto cambió y / cuánto cambió x</div>
  <div class="ejr"><b>Ejemplo resuelto 2</b>Producir 100 unidades cuesta $ 50.000 y producir 200 cuesta $ 80.000. ¿Cuál es el costo variable por unidad y cuál el costo fijo?
  <ol><li>Pendiente: m = (80.000 − 50.000) / (200 − 100) = 30.000 / 100 = <b>300</b> por unidad.</li><li>Para hallar b, reemplazo un punto: 50.000 = 300 · 100 + b → b = 50.000 − 30.000 = <b>20.000</b>.</li><li>Función de costo: CT = 300q + 20.000.</li></ol></div>

  <h3>El modelo costo, ingreso y beneficio</h3>
  <div class="formula">CT(q) = CF + cv·q   ·   IT(q) = p·q   ·   B(q) = IT − CT = (p − cv)·q − CF</div>
  <ul><li><b>q</b>: cantidad de unidades que producís y vendés.</li>
  <li><b>CF</b>, costo fijo: no depende de cuánto produzcas (alquiler, sueldos administrativos). Es la “b” de la recta.</li>
  <li><b>cv</b>, costo variable unitario: crece con cada unidad (materia prima, comisiones). Es la “m” de la recta de costos.</li>
  <li><b>p</b>: precio de venta. El ingreso no tiene ordenada al origen: si no vendés nada, no cobrás nada.</li>
  <li><b>p − cv</b> es la <b>contribución marginal unitaria</b>: lo que cada unidad “aporta” para pagar los fijos y después para ganar.</li></ul>

  <h3>Punto de equilibrio</h3>
  <p>Es la cantidad donde B = 0: no ganás ni perdés. Se obtiene igualando el beneficio a cero y despejando q:</p>
  <div class="formula">(p − cv)·q − CF = 0   →   q* = CF / (p − cv)</div>
  <div class="ejr"><b>Ejemplo resuelto 3</b>CF = $ 200.000, cv = $ 300, p = $ 500.
  <ol><li>Contribución marginal: 500 − 300 = $ 200 por unidad.</li><li>¿Cuántas unidades de $ 200 necesito para juntar $ 200.000 de fijos? 200.000 / 200 = <b>1.000 unidades</b>.</li><li>Comprobación: IT = 500 · 1.000 = 500.000; CT = 200.000 + 300 · 1.000 = 500.000; B = 0 ✔.</li><li>Si vendo 1.500: B = 200 · 1.500 − 200.000 = <b>100.000</b>. Cada unidad por encima del equilibrio deja $ 200 de ganancia.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 4 · ganancia objetivo</b>Con los mismos datos, ¿cuánto tengo que vender para ganar $ 60.000? Ahora la contribución tiene que cubrir los fijos <b>más</b> la ganancia: q = (200.000 + 60.000) / 200 = <b>1.300 unidades</b>.</div>
  <p>En el gráfico, el punto de equilibrio es donde se cruzan la recta de ingresos y la de costos. Este concepto se profundiza en el Módulo 18 de Costos.</p>
  <div class="err"><b>Errores comunes</b><ul><li>Dividir los fijos por el precio en lugar de por la contribución marginal (p − cv).</li><li>Calcular la pendiente al revés (x sobre y).</li><li>Olvidarse de que el costo fijo se paga aunque produzcas cero.</li></ul></div>
  ${CAMPUS.vid([["Función lineal: pendiente y ordenada (Matemáticas profe Alex)","matematicas profe alex funcion lineal pendiente y ordenada al origen"],["Pendiente de una recta con dos puntos (Julioprofe)","julioprofe pendiente de una recta dados dos puntos"],["Funciones de costo, ingreso y utilidad","funcion costo ingreso utilidad lineal ejercicio resuelto"],["Punto de equilibrio explicado","punto de equilibrio costos fijos contribucion marginal explicado"]])}`,
  ex:[{type:"num",items:[
   {q:"CF = $ 200.000, cv = $ 300, p = $ 500. ¿Cuál es el punto de equilibrio en unidades?",a:1000,hint:"CF / (p − cv)",ex:"Cada unidad aporta 500 − 300 = 200. 200.000 / 200 = 1.000 unidades."},
   {q:"Con los mismos datos, ¿cuál es el beneficio si vendés 1.500 unidades?",a:100000,u:"$",hint:"(500 − 300) × 1.500 − 200.000",ex:"200 × 1.500 = 300.000 de contribución, menos 200.000 de fijos = 100.000."},
   {q:"Un taxi cobra $ 1.500 de bajada y $ 400 por km. ¿Cuánto cuesta un viaje de 12 km?",a:6300,u:"$",hint:"400 × 12 + 1.500",ex:"y = 400 · 12 + 1.500 = 4.800 + 1.500 = 6.300."},
   {q:"Si el costo total de producir 100 unidades es $ 50.000 y el de 200 unidades es $ 80.000, ¿cuál es el costo variable unitario?",a:300,u:"$",hint:"Es la pendiente: (80.000 − 50.000) / (200 − 100)",ex:"30.000 / 100 = 300 por unidad."},
   {q:"Con los datos anteriores, ¿cuál es el costo fijo?",a:20000,u:"$",hint:"50.000 = 300 · 100 + CF",ex:"CF = 50.000 − 30.000 = 20.000."},
   {q:"¿Cuál es la pendiente de la recta que pasa por (2; 10) y (6; 30)?",a:5,hint:"(30 − 10) / (6 − 2)",ex:"20 / 4 = 5. Por cada unidad que avanza x, y sube 5."},
   {q:"CF = $ 200.000, cv = $ 300, p = $ 500. ¿Cuántas unidades tenés que vender para ganar $ 60.000?",a:1300,hint:"(CF + ganancia) / (p − cv)",ex:"(200.000 + 60.000) / 200 = 1.300."}]}]},

 {lead:"Cuando el precio depende de la cantidad, o cuando el dinero crece con interés, aparecen curvas: parábolas y exponenciales. Las vemos con calma.",
  html:`<h3>Función cuadrática: la parábola</h3>
  <p>Tiene la forma <span class="mono">y = a·x² + b·x + c</span>. El término con x² hace que el gráfico sea una curva con forma de U, llamada parábola.</p>
  <ul><li>Si <b>a es positivo</b>, la U mira hacia arriba y tiene un <b>mínimo</b>.</li><li>Si <b>a es negativo</b>, la U está dada vuelta (como una colina) y tiene un <b>máximo</b>.</li></ul>
  <p>El punto más alto (o más bajo) se llama <b>vértice</b>, y se encuentra con esta fórmula:</p>
  <div class="formula">x_vértice = −b / (2a)</div>

  <h3>¿Por qué aparece en economía?</h3>
  <p>Porque si para vender más tenés que bajar el precio, el ingreso deja de ser una recta. Supongamos que la demanda es p = 200 − 2q (cada unidad extra que querés vender te obliga a bajar el precio $ 2).</p>
  <div class="ejr"><b>Ejemplo resuelto 1 · ingreso máximo</b>
  <ol><li>Ingreso = precio × cantidad: IT = (200 − 2q) · q = 200q − 2q².</li><li>Identifico los coeficientes, ordenando como a·q² + b·q: a = −2, b = 200.</li><li>a es negativo: hay un máximo. Vértice: q = −200 / (2 · (−2)) = −200 / −4 = <b>50 unidades</b>.</li><li>Precio en ese punto: p = 200 − 2 · 50 = 100. Ingreso máximo: 100 · 50 = <b>$ 5.000</b>.</li></ol>
  Comprobá con números vecinos: con q = 40, p = 200 − 80 = 120 e IT = 120 · 40 = 4.800. Con q = 60, p = 80 e IT = 80 · 60 = 4.800. Los dos dan menos que 5.000 ✔.</div>

  <h3>Raíces: dónde la parábola corta el cero</h3>
  <p>Las raíces son los valores de x donde y = 0. Si la función es un beneficio, las raíces son los <b>puntos de equilibrio</b>. Se calculan con la fórmula resolvente:</p>
  <div class="formula">x = [ −b ± √(b² − 4ac) ] / (2a)</div>
  <div class="ejr"><b>Ejemplo resuelto 2</b>B(q) = −q² + 60q − 500. Coeficientes: a = −1, b = 60, c = −500.
  <ol><li>Discriminante: b² − 4ac = 3.600 − 4 · (−1) · (−500) = 3.600 − 2.000 = 1.600. Raíz cuadrada: 40.</li><li>Con +: q = (−60 + 40) / (−2) = −20 / −2 = <b>10</b>.</li><li>Con −: q = (−60 − 40) / (−2) = −100 / −2 = <b>50</b>.</li><li>Entre 10 y 50 unidades la empresa gana; fuera de ese rango pierde. El máximo está en el medio: q = −60 / (2 · −1) = 30, con B(30) = −900 + 1.800 − 500 = <b>$ 400</b>.</li></ol></div>

  <h3>Función exponencial: crecer a una tasa constante</h3>
  <p>Cuando algo crece un mismo <b>porcentaje</b> cada período (no una misma cantidad), la función es exponencial. Es lo que viste en la lección 2.1 con los aumentos sucesivos, repetido muchas veces:</p>
  <div class="formula">Valor final = C · (1 + i)ᵗ</div>
  <p>C es el capital inicial, i la tasa por período en decimal y t la cantidad de períodos.</p>
  <div class="ejr"><b>Ejemplo resuelto 3</b>$ 100.000 al 10% anual durante 3 años.
  <ol><li>Año 1: 100.000 × 1,10 = 110.000.</li><li>Año 2: 110.000 × 1,10 = 121.000.</li><li>Año 3: 121.000 × 1,10 = <b>133.100</b>.</li><li>En una sola cuenta: 100.000 × 1,1³ = 100.000 × 1,331 = 133.100.</li></ol>
  Lo mismo con la inflación: 5% por mes durante 3 meses es 1,05³ = 1,1576 → <b>15,76%</b> acumulado, no 15%.</div>

  <h3>Logaritmos: despejar el tiempo</h3>
  <p>El logaritmo responde la pregunta “¿a qué exponente tengo que elevar?”. Si la incógnita está arriba, en el exponente, el logaritmo la “baja” gracias a esta propiedad:</p>
  <div class="formula">ln(aᵗ) = t · ln(a)</div>
  <div class="ejr"><b>Ejemplo resuelto 4</b>¿En cuántos períodos se duplica un capital al 5%?
  <ol><li>Planteo: C · 1,05ᵗ = 2C → 1,05ᵗ = 2.</li><li>Aplico ln a los dos lados: t · ln 1,05 = ln 2.</li><li>t = ln 2 / ln 1,05 = 0,6931 / 0,0488 ≈ <b>14,21 períodos</b>.</li></ol>
  En la calculadora del celular (modo científico) buscá la tecla “ln”.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Tomar mal a y b en el vértice: en 200q − 2q², a es el número que acompaña a q² (−2) y b el que acompaña a q (200), aunque estén escritos en otro orden.</li><li>Olvidarse de que −4ac con a y c negativos da negativo.</li><li>Tratar un crecimiento porcentual como si fuera lineal (sumar 5% + 5% + 5%).</li></ul></div>
  ${CAMPUS.vid([["Función cuadrática y vértice (Matemáticas profe Alex)","matematicas profe alex funcion cuadratica vertice"],["Fórmula general o resolvente (Julioprofe)","julioprofe ecuacion cuadratica formula general"],["Función exponencial (Matemáticas profe Alex)","matematicas profe alex funcion exponencial"],["Logaritmos y sus propiedades (Julioprofe)","julioprofe propiedades de los logaritmos"],["Ecuaciones exponenciales con logaritmos (Julioprofe)","julioprofe ecuaciones exponenciales usando logaritmos"]])}`,
  ex:[{type:"num",items:[
   {q:"La demanda es p = 300 − 3q. ¿Con qué cantidad se maximiza el ingreso total?",a:50,hint:"IT = 300q − 3q². Vértice: −300 / (2·(−3))",ex:"a = −3, b = 300. q = −300 / −6 = 50."},
   {q:"Con esa cantidad, ¿cuál es el ingreso máximo?",a:7500,u:"$",hint:"Precio = 300 − 3·50 = 150",ex:"p = 150; IT = 150 × 50 = 7.500."},
   {q:"$ 100.000 crecen al 10% por año durante 3 años (compuesto). ¿Cuánto valen al final?",a:133100,u:"$",hint:"100.000 × 1,1³",ex:"1,1³ = 1,331. 100.000 × 1,331 = 133.100."},
   {q:"¿En cuántos años se duplica un capital al 10% anual compuesto? (con dos decimales)",a:7.27,tol:0.02,u:"años",hint:"ln 2 / ln 1,1",ex:"0,6931 / 0,0953 = 7,27 años."},
   {q:"B(q) = −q² + 60q − 500. ¿Cuál es el punto de equilibrio más chico?",a:10,hint:"Resolvente: discriminante 1.600, raíz 40.",ex:"q = (−60 + 40) / (−2) = 10. El otro es 50."},
   {q:"Con B(q) = −q² + 60q − 500, ¿cuál es el beneficio máximo?",a:400,u:"$",hint:"Vértice en q = 30",ex:"B(30) = −900 + 1.800 − 500 = 400."},
   {q:"La inflación es 4% mensual durante 12 meses. ¿Cuál es la inflación acumulada del año en %? (un decimal)",a:60.1,u:"%",tol:0.1,hint:"1,04¹² − 1",ex:"1,04¹² = 1,6010. Acumulada: 60,1%, bastante más que 12 × 4 = 48%."}]}]},

 {lead:"La derivada mide cuánto cambia una función cuando su variable cambia un poquito. En economía se llama análisis marginal. Empezamos por la idea, no por la fórmula.",
  html:`<h3>La idea: ¿cuánto cuesta una unidad más?</h3>
  <p>Ya sabés que en una recta la pendiente te dice cuánto sube y por cada unidad de x, y que es <b>siempre la misma</b>. En una curva no: la pendiente cambia según dónde estés. La <b>derivada</b> es justamente eso: la pendiente de la curva en un punto exacto.</p>
  <p>En economía, si CT(q) es el costo total de producir q unidades, la derivada CT'(q) es el <b>costo marginal</b> (CMg): lo que cuesta, aproximadamente, producir <b>una unidad más</b>.</p>
  <div class="ejr"><b>Ejemplo resuelto 1 · sin fórmulas, con una tabla</b>CT(q) = 0,5q² + 20q + 1.000.
  <div class="tw"><table><thead><tr><th class="r">q</th><th class="r">CT(q)</th><th class="r">Costo de la unidad extra</th></tr></thead><tbody>
  <tr><td class="r num">50</td><td class="r num">3.250,0</td><td class="r num">—</td></tr>
  <tr><td class="r num">51</td><td class="r num">3.320,5</td><td class="r num">70,5</td></tr>
  <tr><td class="r num">52</td><td class="r num">3.392,0</td><td class="r num">71,5</td></tr></tbody></table></div>
  Producir la unidad 51 cuesta $ 70,5. La derivada da CMg(50) = 50 + 20 = <b>70</b>: casi lo mismo, pero en una sola cuenta. Por eso decimos que la derivada es “aproximadamente” el costo de una unidad más.</div>

  <h3>Reglas para derivar (las únicas que necesitás acá)</h3>
  <div class="tw"><table><thead><tr><th>Función</th><th>Derivada</th><th>En palabras</th></tr></thead><tbody>
   <tr><td class="mono">k (número solo)</td><td class="mono">0</td><td>Lo que no cambia, no tiene variación.</td></tr>
   <tr><td class="mono">a·x</td><td class="mono">a</td><td>Queda el número que acompaña.</td></tr>
   <tr><td class="mono">xⁿ</td><td class="mono">n·xⁿ⁻¹</td><td>El exponente baja multiplicando y se le resta 1.</td></tr>
   <tr><td class="mono">a·xⁿ</td><td class="mono">a·n·xⁿ⁻¹</td><td>El número de adelante se mantiene.</td></tr>
   <tr><td class="mono">f + g</td><td class="mono">f' + g'</td><td>Se deriva término por término.</td></tr>
   <tr><td class="mono">eˣ</td><td class="mono">eˣ</td><td>Es la única que queda igual.</td></tr>
   <tr><td class="mono">ln x</td><td class="mono">1/x</td><td></td></tr>
  </tbody></table></div>
  <div class="ejr"><b>Ejemplo resuelto 2 · regla de la potencia</b>f(x) = 4x³.
  <ol><li>El exponente 3 baja multiplicando: 4 · 3 = 12.</li><li>Al exponente le resto 1: 3 − 1 = 2.</li><li>f'(x) = <b>12x²</b>.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 3 · término por término</b>f(x) = 2x³ − 5x² + 3x − 8.
  <ol><li>2x³ → 2 · 3 · x² = 6x².</li><li>−5x² → −5 · 2 · x = −10x.</li><li>3x → 3.</li><li>−8 → 0 (un número solo no varía).</li><li>f'(x) = <b>6x² − 10x + 3</b>. Evaluada en x = 2: 6 · 4 − 20 + 3 = <b>7</b>.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 4 · costo marginal</b>CT(q) = 0,5q² + 20q + 1.000.
  <ol><li>0,5q² → 0,5 · 2 · q = q.</li><li>20q → 20.</li><li>1.000 → 0. El costo fijo desaparece porque no cambia con la cantidad.</li><li>CMg(q) = <b>q + 20</b>. En q = 80: CMg = 100.</li></ol></div>

  <h3>Ingreso marginal</h3>
  <p>Igual que con el costo: si IT(q) = 200q − 2q², el ingreso marginal es IMg = 200 − 4q. En q = 30, vender una unidad más agrega unos $ 80 de ingreso.</p>

  <h3>Costo medio y su mínimo</h3>
  <p>El costo medio (CMe) es el costo por unidad: CT / q. Pensalo como el promedio de una materia: si la nota nueva (el marginal) es menor que el promedio, el promedio baja; si es mayor, sube. Por eso el costo medio es mínimo justo donde <b>CMg = CMe</b>.</p>
  <div class="ejr"><b>Ejemplo resuelto 5</b>Con CT = 0,5q² + 20q + 1.000: CMe = 0,5q + 20 + 1.000/q y CMg = q + 20.
  <ol><li>Igualo: 0,5q + 20 + 1.000/q = q + 20.</li><li>Resto 20 y 0,5q de los dos lados: 1.000/q = 0,5q.</li><li>Multiplico por q: 1.000 = 0,5q² → q² = 2.000 → q = √2.000 ≈ <b>44,72</b>.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Olvidarse de bajar el exponente multiplicando (derivar x³ como x²).</li><li>Dejar el número suelto al derivar: la derivada de una constante es 0.</li><li>Evaluar antes de derivar: primero derivás, después reemplazás el valor.</li></ul></div>
  ${CAMPUS.vid([["Qué es la derivada, explicado desde cero (Matemáticas profe Alex)","matematicas profe alex que es la derivada introduccion"],["Derivada de una potencia (Julioprofe)","julioprofe derivada de una potencia"],["Derivadas de polinomios (Matemáticas profe Alex)","matematicas profe alex derivadas de polinomios"],["La derivada como pendiente (Khan Academy en español)","khan academy español derivada como pendiente de la recta tangente"],["Costo marginal con derivadas","costo marginal derivada ejercicio resuelto"]])}`,
  ex:[{type:"num",items:[
   {q:"Si CT(q) = 0,5q² + 20q + 1.000, ¿cuál es el costo marginal en q = 80?",a:100,u:"$",hint:"CMg = q + 20",ex:"Derivada: q + 20. En 80: 80 + 20 = 100."},
   {q:"Derivá f(x) = 3x² + 5x − 7 y evaluá en x = 2.",a:17,hint:"f'(x) = 6x + 5",ex:"3x² → 6x; 5x → 5; −7 → 0. f'(2) = 12 + 5 = 17."},
   {q:"IT(q) = 200q − 2q². ¿Cuál es el ingreso marginal en q = 30?",a:80,u:"$",hint:"IMg = 200 − 4q",ex:"200q → 200; −2q² → −4q. IMg(30) = 200 − 120 = 80."},
   {q:"Con CT(q) = 0,5q² + 20q + 1.000, ¿en qué cantidad el costo medio es mínimo? (CMe = CMg)",a:44.72,tol:0.05,hint:"0,5q + 20 + 1.000/q = q + 20 → 1.000/q = 0,5q → q² = 2.000",ex:"q = √2.000 ≈ 44,72."},
   {q:"Derivá f(x) = 4x³ y evaluá en x = 1.",a:12,hint:"El 3 baja multiplicando: 4 · 3 · x²",ex:"f'(x) = 12x². En x = 1: 12."},
   {q:"Derivá f(x) = 2x³ − 5x² + 3x − 8 y evaluá en x = 2.",a:7,hint:"f'(x) = 6x² − 10x + 3",ex:"6 · 4 − 10 · 2 + 3 = 24 − 20 + 3 = 7."},
   {q:"Con CT(q) = 0,5q² + 20q + 1.000, calculá el costo exacto de la unidad 51: CT(51) − CT(50).",a:70.5,u:"$",tol:0.01,hint:"CT(51) = 3.320,5 y CT(50) = 3.250",ex:"3.320,5 − 3.250 = 70,5. La derivada en 50 (70) es una muy buena aproximación."}]}]},

 {lead:"Una empresa maximiza su beneficio donde el ingreso de una unidad más es igual a su costo. Acá juntás todo lo anterior en una receta de cinco pasos.",
  html:`<h3>La idea</h3>
  <p>Imaginá que vas aumentando la producción de a una unidad. Mientras la unidad extra te traiga más ingreso que costo (IMg &gt; CMg), conviene producirla. Cuando la unidad extra cuesta más de lo que trae (IMg &lt; CMg), te conviene frenar. El punto justo es donde son iguales:</p>
  <div class="formula">B(q) = IT(q) − CT(q)   →   B'(q) = IMg − CMg = 0   →   IMg = CMg</div>
  <p>En el gráfico de una función, en la cima de la colina la pendiente es cero (la recta tangente queda horizontal). Por eso buscar el máximo es buscar dónde la derivada vale cero.</p>

  <h3>Receta paso a paso</h3>
  <ol><li>Armá el ingreso: IT = p · q, reemplazando p por la función de demanda.</li><li>Derivá el ingreso: IMg.</li><li>Derivá el costo: CMg.</li><li>Igualá IMg = CMg y despejá q.</li><li>Calculá precio, ingreso, costo y beneficio en ese q. Si querés confirmar que es máximo, la segunda derivada de B tiene que ser negativa.</li></ol>

  <div class="ejr"><b>Ejemplo resuelto 1 · costo lineal</b>Demanda: p = 200 − 2q. Costo: CT = 1.000 + 40q.
  <ol><li>IT = (200 − 2q) · q = 200q − 2q².</li><li>IMg = 200 − 4q.</li><li>CMg = 40 (la derivada de 40q es 40 y la de 1.000 es 0).</li><li>200 − 4q = 40 → 4q = 160 → <b>q = 40</b>.</li><li>Precio: p = 200 − 2 · 40 = <b>$ 120</b>. IT = 120 · 40 = 4.800. CT = 1.000 + 40 · 40 = 2.600. Beneficio: <b>$ 2.200</b>.</li><li>B'' = −4 &lt; 0: es un máximo ✔.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 2 · costo cuadrático</b>Demanda: p = 100 − q. Costo: CT = 200 + 20q + q².
  <ol><li>IT = 100q − q² → IMg = 100 − 2q.</li><li>CMg = 20 + 2q.</li><li>100 − 2q = 20 + 2q → 80 = 4q → <b>q = 20</b>.</li><li>p = 100 − 20 = 80. IT = 1.600. CT = 200 + 400 + 400 = 1.000. Beneficio: <b>$ 600</b>.</li></ol>
  Comprobá con números vecinos: con q = 19, B = 81·19 − (200 + 380 + 361) = 1.539 − 941 = 598. Con q = 21, B = 79·21 − (200 + 420 + 441) = 1.659 − 1.061 = 598. Los dos dan menos que 600 ✔.</div>
  <div class="note"><b>Para qué le sirve a un contador.</b> No vas a derivar todos los días, pero la idea de “decidir en el margen” está en todas las decisiones de costos: aceptar un pedido especial, agregar un turno de producción o fijar un precio.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Maximizar el ingreso en lugar del beneficio (no es lo mismo: el ingreso máximo ignora los costos).</li><li>Reemplazar q en la función de costo en vez de en la demanda para obtener el precio.</li><li>Olvidarse de restar el costo fijo al calcular el beneficio final.</li></ul></div>
  ${CAMPUS.vid([["Máximos y mínimos con derivadas (Julioprofe)","julioprofe maximos y minimos de una funcion derivadas"],["Problemas de optimización (Matemáticas profe Alex)","matematicas profe alex problemas de optimizacion"],["Maximizar la utilidad: ingreso marginal = costo marginal","maximizar utilidad ingreso marginal igual costo marginal ejercicio"]])}`,
  ex:[{type:"num",items:[
   {q:"Demanda p = 300 − 3q y CT = 2.000 + 60q. ¿Qué cantidad maximiza el beneficio?",a:40,hint:"IMg = 300 − 6q; CMg = 60",ex:"300 − 6q = 60 → 6q = 240 → q = 40."},
   {q:"¿A qué precio se vende esa cantidad?",a:180,u:"$",hint:"Reemplazá en la demanda: 300 − 3 · 40",ex:"p = 300 − 120 = 180."},
   {q:"¿Cuál es el beneficio máximo?",a:2800,u:"$",hint:"IT = 180 × 40; CT = 2.000 + 60 × 40",ex:"IT = 7.200; CT = 4.400; B = 2.800."},
   {q:"Demanda p = 120 − q y CT = 100 + 20q + q². ¿Qué cantidad maximiza el beneficio?",a:25,hint:"IMg = 120 − 2q; CMg = 20 + 2q",ex:"120 − 2q = 20 + 2q → 100 = 4q → q = 25."},
   {q:"Con esos datos, ¿cuál es el beneficio máximo?",a:1150,u:"$",hint:"p = 95; IT = 95 × 25; CT = 100 + 500 + 625",ex:"IT = 2.375; CT = 1.225; B = 1.150."}]}]},

 {lead:"Una matriz es una tabla de números. Sirve para trabajar con muchos productos, sucursales o períodos a la vez, y para resolver sistemas de ecuaciones.",
  html:`<h3>¿Qué es una matriz?</h3>
  <p>Es una tabla ordenada en filas y columnas. Se nombra por su tamaño: una matriz de <b>2 × 3</b> tiene 2 filas y 3 columnas (siempre primero filas). Si las filas son sucursales y las columnas productos, cada número es la cantidad vendida:</p>
  <div class="tw"><table><thead><tr><th></th><th class="r">Prod. A</th><th class="r">Prod. B</th><th class="r">Prod. C</th></tr></thead><tbody>
  <tr><td>Sucursal 1</td><td class="r num">10</td><td class="r num">5</td><td class="r num">2</td></tr>
  <tr><td>Sucursal 2</td><td class="r num">4</td><td class="r num">8</td><td class="r num">6</td></tr></tbody></table></div>

  <h3>Suma y producto por un número</h3>
  <ul><li><b>Sumar matrices</b> del mismo tamaño: se suma casillero por casillero. Ventas de enero + ventas de febrero = ventas del bimestre.</li>
  <li><b>Multiplicar por un número</b>: se multiplica cada casillero. Si todas las ventas crecen 10%, multiplicás la matriz por 1,1.</li></ul>

  <h3>Producto de matriz por vector: “fila por columna”</h3>
  <p>Si los precios son A = 100, B = 200, C = 500, la facturación de cada sucursal se obtiene así: tomás la <b>fila</b> de la sucursal, la multiplicás elemento por elemento con la <b>columna</b> de precios y <b>sumás</b>.</p>
  <div class="ejr"><b>Ejemplo resuelto 1</b>
  <ol><li>Sucursal 1: 10 · 100 + 5 · 200 + 2 · 500 = 1.000 + 1.000 + 1.000 = <b>3.000</b>.</li><li>Sucursal 2: 4 · 100 + 8 · 200 + 6 · 500 = 400 + 1.600 + 3.000 = <b>5.000</b>.</li></ol>
  <b>Regla de tamaños:</b> (2 × 3) por (3 × 1) da (2 × 1). Los números “de adentro” tienen que coincidir (3 y 3) y los “de afuera” te dan el tamaño del resultado (2 y 1). Si no coinciden, no se puede multiplicar.</div>

  <h3>Determinante de una matriz 2 × 2</h3>
  <p>Para la matriz [[a, b], [c, d]] el determinante es la diagonal principal menos la otra diagonal:</p>
  <div class="formula">det = a·d − b·c</div>
  <div class="ejr"><b>Ejemplo resuelto 2</b>[[3, 2], [1, 4]] → 3 · 4 − 2 · 1 = 12 − 2 = <b>10</b>.</div>
  <p>Si el determinante es <b>distinto de cero</b>, el sistema tiene una única solución. Si es cero, las ecuaciones son proporcionales y hay infinitas soluciones o ninguna.</p>

  <h3>Regla de Cramer: resolver un sistema con determinantes</h3>
  <ol><li>Escribí el sistema ordenado: a·x + b·y = e; c·x + d·y = f.</li><li>Calculá det con los coeficientes de x e y.</li><li>det<sub>x</sub>: reemplazá la columna de x por los términos independientes (e, f).</li><li>det<sub>y</sub>: reemplazá la columna de y por los términos independientes.</li><li>x = det<sub>x</sub> / det; y = det<sub>y</sub> / det.</li></ol>
  <div class="ejr"><b>Ejemplo resuelto 3</b>x + y = 100; 3x + 5y = 380.
  <ol><li>det = 1 · 5 − 1 · 3 = 2.</li><li>det<sub>x</sub> = [[100, 1], [380, 5]] = 100 · 5 − 1 · 380 = 120 → x = 120 / 2 = <b>60</b>.</li><li>det<sub>y</sub> = [[1, 100], [3, 380]] = 1 · 380 − 100 · 3 = 80 → y = 80 / 2 = <b>40</b>.</li></ol>
  Es el mismo resultado que obtuvimos por sustitución en la lección 2.2.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Multiplicar matrices casillero por casillero (eso no es el producto).</li><li>Restar las diagonales al revés: es a·d − b·c, no b·c − a·d.</li><li>En Cramer, reemplazar la fila en vez de la columna.</li></ul></div>
  ${CAMPUS.vid([["Qué es una matriz y sus operaciones (Matemáticas profe Alex)","matematicas profe alex matrices suma y resta"],["Multiplicación de matrices (Matemáticas profe Alex)","matematicas profe alex multiplicacion de matrices"],["Determinante de 2×2 (Julioprofe)","julioprofe determinante de una matriz 2x2"],["Regla de Cramer 2×2 (Julioprofe)","julioprofe regla de cramer sistema 2x2"]])}`,
  ex:[{type:"num",items:[
   {q:"Con la matriz de la lección, si los precios fueran A = 200, B = 100, C = 300, ¿cuánto factura la Sucursal 2?",a:3400,u:"$",hint:"4·200 + 8·100 + 6·300",ex:"800 + 800 + 1.800 = 3.400."},
   {q:"Determinante de [[3, 2], [1, 4]]",a:10,hint:"a·d − b·c",ex:"3 · 4 − 2 · 1 = 10."},
   {q:"Sistema 2x + y = 10; x − y = 2. ¿Cuánto vale x?",a:4,hint:"det = 2·(−1) − 1·1 = −3",ex:"det_x = 10·(−1) − 1·2 = −12. x = −12 / −3 = 4."},
   {q:"Con el mismo sistema (2x + y = 10; x − y = 2), ¿cuánto vale y?",a:2,hint:"det_y = 2·2 − 10·1",ex:"det_y = 4 − 10 = −6. y = −6 / −3 = 2."},
   {q:"Determinante de [[5, 2], [3, 4]]",a:14,hint:"5·4 − 2·3",ex:"20 − 6 = 14."},
   {q:"Con la matriz de la lección (precios A = 100, B = 200, C = 500), si todas las cantidades de la Sucursal 1 se duplican, ¿cuánto factura?",a:6000,u:"$",hint:"Multiplicar la matriz por 2 duplica el resultado.",ex:"2 × 3.000 = 6.000."}]},
   {type:"mc",items:[
   {q:"Multiplicás una matriz de 2 × 3 por otra de 3 × 1. ¿De qué tamaño es el resultado?",o:["3 × 3","2 × 1","2 × 3","No se puede multiplicar"],a:1,ex:"Los de adentro coinciden (3 = 3) y los de afuera dan el tamaño: 2 × 1."},
   {q:"El determinante de un sistema 2 × 2 da 0. ¿Qué significa?",o:["La solución es x = 0","Tiene una única solución","No tiene solución única","Hay que cambiar el orden de las filas"],a:2,ex:"Las ecuaciones son proporcionales: infinitas soluciones o ninguna."}]}]},
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
 {q:"Un alquiler pasó de $ 500.000 a $ 650.000. ¿Cuánto aumentó?",o:["23%","30%","15%","65%"],a:1,ex:"150.000 / 500.000 = 0,30."},
 {q:"Resolvé 4x − 6 = 2x + 10.",o:["x = 2","x = 8","x = 4","x = 16"],a:1,ex:"2x = 16 → x = 8."},
 {q:"La derivada de f(x) = 5x³ es…",o:["15x²","5x²","15x³","3x²"],a:0,ex:"El 3 baja multiplicando (5 · 3 = 15) y el exponente baja a 2."},
 {q:"En y = −2x² + 80x, ¿dónde está el vértice?",o:["x = 40","x = 20","x = −20","x = 80"],a:1,ex:"−80 / (2 · −2) = 20."},
 {q:"Para vender con margen del 25% sobre el precio, un producto que cuesta $ 600 se vende a…",o:["$ 750","$ 800","$ 625","$ 850"],a:1,ex:"600 / 0,75 = 800."},
 {q:"En una inecuación, si dividís los dos lados por −2…",o:["No cambia nada","Se invierte el sentido de la desigualdad","Se convierte en ecuación","Hay que sumar 2"],a:1,ex:"Por ejemplo, −2x > 6 → x < −3."},
]};
