/* Módulo 4 · Microeconomía */
CAMPUS.content[4] = {
lessons:[
 {lead:"La economía estudia cómo se usan recursos escasos para satisfacer necesidades que no tienen límite.",
  html:`<p>Como los recursos (trabajo, tierra, capital, capacidad empresarial) son escasos, toda decisión implica renunciar a algo. Eso que se resigna es el <b>costo de oportunidad</b>: el valor de la mejor alternativa que dejaste de lado.</p>
  <div class="note"><b>Ejemplo.</b> Si tenés $ 10 millones ociosos en la cuenta corriente, aunque no veas un gasto, estás perdiendo el interés que podrías haber ganado en un plazo fijo. Ese interés es el costo de oportunidad de tener plata parada, y es clave en finanzas (Módulo 23).</div>
  <h3>Las tres preguntas básicas</h3>
  <ul><li>¿Qué producir y cuánto?</li><li>¿Cómo producirlo?</li><li>¿Para quién?</li></ul>
  <p>Las economías de mercado responden con precios; las planificadas, con decisiones del Estado; las mixtas, como la argentina, combinan ambas.</p>
  <h3>Frontera de posibilidades de producción</h3>
  <p>Muestra las combinaciones máximas de dos bienes que se pueden producir con los recursos disponibles. Un punto dentro de la frontera indica recursos desaprovechados (desempleo); un punto fuera es inalcanzable hoy. El crecimiento económico corre la frontera hacia afuera.</p>
  <h3>Micro y macro</h3>
  <p>La <b>microeconomía</b> estudia decisiones individuales: consumidores, empresas, mercados. La <b>macroeconomía</b> estudia agregados: PBI, inflación, desempleo (Módulo 5).</p>
  <h3>Ejemplos resueltos</h3>
  <div class="ejr"><b>Costo de oportunidad paso a paso</b>Sofía puede (a) estudiar un año sin trabajar, en una facultad pública sin cuota, o (b) trabajar y ganar $ 9.600.000 en el año.
  <ol><li>Identifico la mejor alternativa que deja: trabajar.</li><li>Su costo de oportunidad de estudiar es <b>$ 9.600.000</b>, aunque la cuota sea cero.</li><li>Conviene estudiar si espera que el título le dé, a futuro, más de lo que resigna hoy.</li></ol></div>
  <div class="ejr"><b>La frontera de posibilidades con números</b>Un país produce pan y ropa con sus recursos:
  <div class="tw"><table><thead><tr><th>Punto</th><th class="r">Ropa</th><th class="r">Pan</th><th class="r">Pan que se resigna por cada 10 de ropa</th></tr></thead><tbody>
  <tr><td>A</td><td class="r num">0</td><td class="r num">100</td><td class="r num">—</td></tr>
  <tr><td>B</td><td class="r num">10</td><td class="r num">90</td><td class="r num">10</td></tr>
  <tr><td>C</td><td class="r num">20</td><td class="r num">70</td><td class="r num">20</td></tr>
  <tr><td>D</td><td class="r num">30</td><td class="r num">40</td><td class="r num">30</td></tr>
  <tr><td>E</td><td class="r num">40</td><td class="r num">0</td><td class="r num">40</td></tr></tbody></table></div>
  Cada 10 unidades extra de ropa cuestan cada vez más pan (10, 20, 30, 40): el <b>costo de oportunidad es creciente</b>, porque se van pasando a la ropa recursos que eran cada vez mejores para hacer pan. Por eso la frontera es curva. El punto (20 ropa; 50 pan) está <b>dentro</b>: hay recursos ociosos, porque se podría tener 70 de pan.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Pensar que el costo de oportunidad es solo plata que sale del bolsillo.</li><li>Sumar todas las alternativas resignadas: se toma solo la <b>mejor</b>.</li></ul></div>
  ${CAMPUS.vid([["Costo de oportunidad, explicado","costo de oportunidad economia explicacion ejemplo"],["Frontera de posibilidades de producción","frontera de posibilidades de produccion explicacion ejemplo"],["Micro y macroeconomía: diferencias","diferencia entre microeconomia y macroeconomia explicacion"]])}`,
  ex:[{type:"tf",items:[
   ["El costo de oportunidad de estudiar es solo lo que pagás de cuota","Falso","También incluye lo que dejás de ganar trabajando en ese tiempo."],
   ["Un punto dentro de la frontera de posibilidades indica recursos ociosos","Verdadero"],
   ["La inflación es un tema de microeconomía","Falso","Es un fenómeno agregado: macroeconomía."],
   ["La escasez existe porque los recursos son limitados frente a necesidades ilimitadas","Verdadero"],
   ["Tener efectivo sin invertir no tiene ningún costo","Falso","Tiene costo de oportunidad: el rendimiento resignado."]]}]},
 {lead:"El precio de un bien se forma donde la cantidad que los compradores quieren comprar coincide con la que los vendedores quieren vender.",
  html:`<h3>Demanda</h3>
  <p>Relación entre el precio y la cantidad que los consumidores quieren comprar. Con todo lo demás constante, si el precio sube, la cantidad demandada baja (pendiente negativa). La demanda se <b>desplaza</b> por cambios en el ingreso, en los precios de bienes relacionados, en los gustos o en las expectativas.</p>
  <h3>Oferta</h3>
  <p>Relación entre el precio y la cantidad que las empresas quieren vender. Si el precio sube, conviene producir más (pendiente positiva). La oferta se desplaza por cambios en los costos, la tecnología o los impuestos.</p>
  <h3>Equilibrio</h3>
  <p>Si Qd = 100 − 2p y Qo = −20 + 4p, se igualan: 100 − 2p = −20 + 4p → <b>p = 20</b>, Q = 60.</p>
  <ul><li>Si el precio está por encima del equilibrio, hay <b>exceso de oferta</b> y el precio tiende a bajar.</li>
  <li>Si está por debajo (por ejemplo, un precio máximo fijado por el Estado), hay <b>exceso de demanda</b>: faltantes.</li></ul>
  <div class="note"><b>Movimiento sobre la curva o desplazamiento.</b> Si cambia el precio del propio bien, te movés por la curva. Si cambia otra cosa (ingreso, costos), la curva entera se desplaza.</div>
  <h3>Paso a paso: hallar el equilibrio</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Qd = 200 − 5p; Qo = 20 + 4p.
  <ol><li>En equilibrio lo que se quiere comprar es igual a lo que se quiere vender: Qd = Qo.</li><li>200 − 5p = 20 + 4p. Junto las p de un lado: 200 − 20 = 4p + 5p → 180 = 9p.</li><li><b>p = 20</b>.</li><li>Reemplazo en las dos ecuaciones para controlar: Qd = 200 − 5 · 20 = 100; Qo = 20 + 4 · 20 = 100 ✔. <b>Q = 100</b>.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · precio máximo</b>El Estado fija un precio máximo de $ 10 (debajo del equilibrio de 20).
  <ol><li>Demanda a $ 10: 200 − 50 = 150.</li><li>Oferta a $ 10: 20 + 40 = 60.</li><li>Faltante (exceso de demanda): 150 − 60 = <b>90 unidades</b>. Aparecen colas, desabastecimiento o mercado paralelo.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · se desplaza la demanda</b>Sube el ingreso y la demanda pasa a Qd = 245 − 5p.
  <ol><li>245 − 5p = 20 + 4p → 225 = 9p → p = 25.</li><li>Q = 20 + 4 · 25 = 120.</li><li>Resultado: con una demanda más alta, <b>suben el precio y la cantidad</b>. Fijate que la oferta no se desplazó: los vendedores se movieron <b>por</b> su curva.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Decir “sube el precio, entonces baja la demanda”: baja la <b>cantidad demandada</b> (movimiento), la curva de demanda no se mueve.</li><li>Desplazar la oferta por un cambio en el ingreso de los consumidores (eso mueve la demanda).</li><li>Olvidarse de controlar el resultado en las dos ecuaciones.</li></ul></div>
  ${CAMPUS.vid([["Oferta y demanda, explicado desde cero","oferta y demanda explicacion desde cero economia"],["Equilibrio de mercado: ejercicio resuelto","equilibrio de mercado oferta y demanda ejercicio resuelto"],["Movimiento sobre la curva vs. desplazamiento","cambio en la cantidad demandada vs cambio en la demanda"],["Precios máximos y escasez","precio maximo exceso de demanda explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"Qd = 200 − 5p y Qo = 20 + 4p. ¿Cuál es el precio de equilibrio?",a:20,ex:"200 − 5p = 20 + 4p → 180 = 9p → p = 20."},
   {q:"¿Y la cantidad de equilibrio?",a:100,ex:"Reemplazo p = 20 en cualquiera: Qd = 200 − 100 = 100; Qo = 20 + 80 = 100."},
   {q:"Si el Estado fija un precio máximo de 10, ¿cuál es el exceso de demanda (Qd − Qo)?",a:90,hint:"Qd = 150; Qo = 60",ex:"Qd = 200 − 50 = 150; Qo = 20 + 40 = 60. Faltan 150 − 60 = 90 unidades."},{q:"Sube el ingreso y la demanda pasa a Qd = 245 − 5p (la oferta sigue Qo = 20 + 4p). ¿Nuevo precio de equilibrio?",a:25,hint:"245 − 5p = 20 + 4p",ex:"225 = 9p → p = 25. La demanda se desplazó a la derecha: suben el precio y la cantidad (Q = 120)."}]},
   {type:"pick",title:"¿Qué curva se desplaza y hacia dónde?",options:["Demanda ↑","Demanda ↓","Oferta ↑","Oferta ↓"],items:[
    ["Sube el ingreso de los consumidores (bien normal)","Demanda ↑"],["Aumenta el precio de la harina para las panaderías","Oferta ↓"],
    ["Una nueva máquina reduce el costo de producción","Oferta ↑"],["Baja el precio de un bien sustituto","Demanda ↓"]]}]},
 {lead:"La elasticidad mide cuánto reacciona la cantidad demandada cuando cambia el precio. Decide si una suba de precios aumenta o reduce la facturación.",
  html:`<div class="formula">Elasticidad precio = variación % de la cantidad / variación % del precio</div>
  <p>Se suele expresar en valor absoluto.</p>
  <ul><li><b>Elástica (&gt; 1):</b> la cantidad cambia proporcionalmente más que el precio. Si subís el precio, la facturación <b>baja</b>.</li>
  <li><b>Inelástica (&lt; 1):</b> la cantidad cambia menos. Si subís el precio, la facturación <b>sube</b>. Típico de bienes necesarios sin sustitutos (medicamentos, combustible a corto plazo).</li>
  <li><b>Unitaria (= 1):</b> la facturación no cambia.</li></ul>
  <p>Ejemplo: el precio sube 10% y las ventas caen 25%. Elasticidad = 25/10 = 2,5, elástica: la suba fue mala idea.</p>
  <h3>Otras elasticidades</h3>
  <ul><li><b>Ingreso:</b> positiva en bienes normales, negativa en bienes inferiores, mayor a 1 en bienes de lujo.</li>
  <li><b>Cruzada:</b> positiva entre sustitutos (manteca y margarina), negativa entre complementarios (impresora y cartuchos).</li></ul>
  <div class="note"><b>Y los impuestos.</b> Un impuesto recae más sobre el lado del mercado que es más inelástico, porque tiene menos opciones para escapar. Por eso los impuestos a los combustibles o al tabaco recaudan mucho. Esto se llama incidencia y se ve en el Módulo 19.</div>
  <h3>Paso a paso: elasticidad y facturación</h3>
  <div class="ejr"><b>Ejemplo resuelto · demanda elástica</b>Precio $ 100, se venden 1.000 u. Subís a $ 110 y vendés 750.
  <ol><li>Variación % del precio: (110 − 100) / 100 = <b>+10%</b>.</li><li>Variación % de la cantidad: (750 − 1.000) / 1.000 = <b>−25%</b>.</li><li>Elasticidad: 25 / 10 = <b>2,5</b> (elástica).</li><li>Facturación antes: 100 × 1.000 = 100.000. Después: 110 × 750 = <b>82.500</b>. Bajó.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · demanda inelástica</b>Mismo producto, pero ahora al subir a $ 110 vendés 960.
  <ol><li>Cantidad: (960 − 1.000) / 1.000 = −4%.</li><li>Elasticidad: 4 / 10 = <b>0,4</b> (inelástica).</li><li>Facturación: 110 × 960 = <b>105.600</b>. Subió.</li></ol>
  La regla para acordarse: la facturación se mueve en la dirección de la variación <b>más grande</b>. Si el precio cambia más que la cantidad (inelástica), manda el precio.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Dividir al revés (precio sobre cantidad).</li><li>Confundir “inelástica” con “la cantidad no cambia nada”: cambia, pero menos que el precio.</li><li>Olvidarse de que la elasticidad se informa en valor absoluto.</li></ul></div>
  ${CAMPUS.vid([["Elasticidad precio de la demanda, explicada","elasticidad precio de la demanda explicacion ejemplo"],["Elasticidad e ingreso total","elasticidad precio e ingreso total explicacion"],["Elasticidad ingreso y cruzada","elasticidad ingreso y elasticidad cruzada ejemplos"]])}`,
  ex:[{type:"num",items:[
   {q:"El precio baja 5% y la cantidad sube 15%. ¿Cuál es la elasticidad precio (en valor absoluto)?",a:3,ex:"15 / 5 = 3. Es elástica."},
   {q:"Un producto con elasticidad 0,4 sube 10% su precio. ¿Cuánto cae la cantidad, en %?",a:4,u:"%",tol:0.05,ex:"Variación de la cantidad = elasticidad × variación del precio = 0,4 × 10% = 4%."},{q:"Precio $ 100 y 1.000 unidades. El precio sube a $ 110 y se venden 960. ¿Cuál es la nueva facturación?",a:105600,u:"$",hint:"110 × 960",ex:"Antes 100.000; ahora 105.600. La cantidad cayó 4% y el precio subió 10%: es inelástica (0,4) y la facturación sube."}]},
   {type:"pick",title:"Si la empresa sube el precio, ¿qué pasa con su facturación?",options:["Sube","Baja","No cambia"],items:[
    ["Elasticidad 0,3","Sube"],["Elasticidad 1,8","Baja"],["Elasticidad 1","No cambia"],["Medicamento sin sustituto","Sube"],["Una marca de gaseosa entre muchas parecidas","Baja"]]}]},
 {lead:"La teoría de la producción explica cómo combina una empresa sus recursos y por qué sus costos tienen la forma que tienen.",
  html:`<h3>Corto y largo plazo</h3>
  <p>En el <b>corto plazo</b> hay al menos un factor fijo (la planta). En el <b>largo plazo</b> todos los factores se pueden cambiar.</p>
  <h3>Rendimientos decrecientes</h3>
  <p>Si agregás trabajadores a una planta fija, llega un punto en que cada trabajador adicional produce menos que el anterior (se estorban, faltan máquinas). Por eso el costo marginal termina subiendo.</p>
  <h3>Costos de la empresa</h3>
  <div class="tw"><table><thead><tr><th>Concepto</th><th>Fórmula</th></tr></thead><tbody>
  <tr><td>Costo total (CT)</td><td class="mono">CF + CV</td></tr><tr><td>Costo medio (CMe)</td><td class="mono">CT / q</td></tr>
  <tr><td>Costo variable medio (CVMe)</td><td class="mono">CV / q</td></tr><tr><td>Costo marginal (CMg)</td><td class="mono">ΔCT / Δq</td></tr></tbody></table></div>
  <h3>Costo económico y costo contable</h3>
  <p>El costo contable incluye lo que efectivamente se pagó o devengó. El <b>costo económico</b> suma además los costos de oportunidad, como el sueldo que el dueño no se paga o el rendimiento del capital propio. Una empresa puede tener <b>ganancia contable</b> y <b>pérdida económica</b>.</p>
  <h3>Economías de escala</h3>
  <p>En el largo plazo, si al crecer baja el costo medio, hay economías de escala (compras por volumen, especialización). Si sube, deseconomías (burocracia, coordinación).</p>
  <h3>Paso a paso con una tabla de costos</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Un taller tiene CF = $ 100 por día. El costo variable según la producción es:
  <div class="tw"><table><thead><tr><th class="r">q</th><th class="r">CV</th><th class="r">CT = CF + CV</th><th class="r">CMg = ΔCT</th><th class="r">CMe = CT/q</th><th class="r">CVMe = CV/q</th></tr></thead><tbody>
  <tr><td class="r num">0</td><td class="r num">0</td><td class="r num">100</td><td class="r num">—</td><td class="r num">—</td><td class="r num">—</td></tr>
  <tr><td class="r num">1</td><td class="r num">40</td><td class="r num">140</td><td class="r num">40</td><td class="r num">140</td><td class="r num">40</td></tr>
  <tr><td class="r num">2</td><td class="r num">70</td><td class="r num">170</td><td class="r num">30</td><td class="r num">85</td><td class="r num">35</td></tr>
  <tr><td class="r num">3</td><td class="r num">90</td><td class="r num">190</td><td class="r num">20</td><td class="r num">63,33</td><td class="r num">30</td></tr>
  <tr><td class="r num">4</td><td class="r num">120</td><td class="r num">220</td><td class="r num">30</td><td class="r num">55</td><td class="r num">30</td></tr>
  <tr><td class="r num">5</td><td class="r num">170</td><td class="r num">270</td><td class="r num">50</td><td class="r num">54</td><td class="r num">34</td></tr></tbody></table></div>
  <ol><li>CT: a cada CV le sumo los 100 fijos.</li><li>CMg: resto el CT de la fila anterior (por ejemplo, 220 − 190 = 30).</li><li>CMe y CVMe: divido por q.</li><li>Leé la columna CMg: baja (40, 30, 20) y después sube (30, 50). La suba es la <b>ley de rendimientos decrecientes</b> en acción.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Calcular el marginal dividiendo el CT por q (eso es el medio).</li><li>Olvidarse de sumar el costo fijo al CT.</li><li>Pensar que una ganancia contable siempre es una buena noticia económica.</li></ul></div>
  ${CAMPUS.vid([["Costos de producción en el corto plazo","costos de produccion corto plazo costo medio costo marginal tabla"],["Ley de rendimientos decrecientes","ley de rendimientos marginales decrecientes explicacion ejemplo"],["Economías de escala","economias de escala explicacion ejemplo"]])}`,
  ex:[{type:"num",items:[
   {q:"CF = $ 50.000, CV de 1.000 unidades = $ 150.000. ¿Costo medio?",a:200,u:"$",ex:"CT = 50.000 + 150.000 = 200.000. CMe = 200.000 / 1.000 = 200."},
   {q:"Producir 1.000 u cuesta $ 200.000 en total y 1.001 u cuesta $ 200.180. ¿Costo marginal de la unidad 1.001?",a:180,u:"$",ex:"200.180 − 200.000 = 180 para una unidad más."},
   {q:"Un negocio tuvo ganancia contable de $ 3.000.000 en el año. El dueño podría ganar $ 4.000.000 trabajando en relación de dependencia. ¿Ganancia económica? (con signo)",a:-1000000,u:"$",ex:"Ganancia económica = contable − costo de oportunidad = 3.000.000 − 4.000.000 = −1.000.000."},{q:"Con la tabla de costos de la lección, ¿cuál es el costo medio de producir 4 unidades?",a:55,u:"$",hint:"CT(4) / 4",ex:"CT(4) = 100 + 120 = 220. 220 / 4 = 55."},{q:"Con la misma tabla, ¿cuál es el costo marginal de la 5.ª unidad?",a:50,u:"$",hint:"CT(5) − CT(4)",ex:"270 − 220 = 50."}]}]},
 {lead:"Cuánto poder tiene una empresa para fijar precios depende de cuántos competidores tiene y de qué tan parecidos son sus productos.",
  html:`<div class="tw"><table><thead><tr><th>Estructura</th><th>Empresas</th><th>Producto</th><th>Poder sobre el precio</th><th>Ejemplo</th></tr></thead><tbody>
  <tr><td><b>Competencia perfecta</b></td><td>Muchas</td><td>Homogéneo</td><td>Ninguno: es tomadora de precio</td><td>Soja, trigo</td></tr>
  <tr><td><b>Competencia monopolística</b></td><td>Muchas</td><td>Diferenciado</td><td>Algo, por la marca</td><td>Restaurantes, ropa</td></tr>
  <tr><td><b>Oligopolio</b></td><td>Pocas</td><td>Homogéneo o diferenciado</td><td>Alto, con interdependencia</td><td>Telefonía, cemento</td></tr>
  <tr><td><b>Monopolio</b></td><td>Una</td><td>Sin sustitutos cercanos</td><td>Máximo, limitado por la demanda</td><td>Distribución eléctrica en una zona</td></tr></tbody></table></div>
  <h3>Regla de decisión</h3>
  <p>Toda empresa maximiza su beneficio produciendo donde <b>IMg = CMg</b>. En competencia perfecta el ingreso marginal es igual al precio, entonces produce donde <b>p = CMg</b>. El monopolista produce menos y cobra más que en competencia.</p>
  <h3>Cerrar o seguir</h3>
  <p>En el corto plazo, una empresa con pérdidas sigue produciendo mientras el precio cubra el <b>costo variable medio</b>, porque los fijos los paga igual. Si el precio no cubre ni los variables, conviene cerrar temporalmente.</p>
  <div class="note"><b>Defensa de la competencia.</b> En Argentina la Ley 27.442 prohíbe acuerdos entre competidores para fijar precios y el abuso de posición dominante. La aplica la Autoridad Nacional de la Competencia.</div>
  <h3>Ejemplos resueltos</h3>
  <div class="ejr"><b>¿Cuánto produce una empresa competitiva? ¿Le conviene cerrar?</b>El taller de la lección anterior vende en un mercado competitivo a p = $ 50.
  <ol><li>Produce mientras cada unidad extra cueste menos o igual que el precio (CMg ≤ p). Los CMg son 40, 30, 20, 30 y 50: la 5.ª unidad cuesta justo 50. Produce <b>q = 5</b>.</li><li>Ingreso: 50 × 5 = 250. Costo: 270. Pierde <b>$ 20</b>.</li><li>¿Cierra? Si cierra, igual paga los $ 100 fijos: pierde 100. Si produce, pierde solo 20. El precio (50) cubre el CVMe (34): <b>conviene seguir</b> en el corto plazo.</li></ol></div>
  <div class="ejr"><b>Monopolio contra competencia</b>Demanda p = 100 − q y costo marginal constante de $ 20.
  <ol><li>Competencia perfecta: p = CMg → 100 − q = 20 → q = 80, p = 20.</li><li>Monopolio: IT = 100q − q², IMg = 100 − 2q. IMg = CMg → 100 − 2q = 20 → <b>q = 40</b>.</li><li>Precio del monopolista: p = 100 − 40 = <b>$ 60</b>.</li><li>Conclusión: el monopolio produce la mitad y cobra el triple. Por eso existen las leyes de defensa de la competencia.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Pensar que una empresa con pérdidas siempre debe cerrar.</li><li>Comparar el precio con el costo medio total para decidir el cierre de corto plazo (se compara con el CVMe).</li><li>Creer que el monopolista cobra “lo que quiere”: está limitado por la demanda.</li></ul></div>
  ${CAMPUS.vid([["Estructuras de mercado","estructuras de mercado competencia perfecta monopolio oligopolio explicacion"],["Maximización del beneficio en monopolio","monopolio ingreso marginal igual costo marginal ejercicio"],["Punto de cierre de la empresa","punto de cierre empresa costo variable medio explicacion"]])}`,
  ex:[{type:"pick",title:"Identificá la estructura de mercado",options:["Competencia perfecta","Comp. monopolística","Oligopolio","Monopolio"],items:[
    ["Miles de productores de maíz venden al precio de Chicago","Competencia perfecta"],["Tres empresas concentran casi toda la telefonía móvil","Oligopolio"],
    ["Cientos de peluquerías en una ciudad, cada una con su estilo","Comp. monopolística"],["Una única empresa con concesión de agua potable en la región","Monopolio"]]},
   {type:"tf",items:[["Una empresa en competencia perfecta puede subir su precio sin perder clientes","Falso","Si cobra más que el mercado, nadie le compra."],
    ["En el corto plazo, conviene seguir produciendo si el precio cubre el costo variable medio","Verdadero","Los fijos se pagan igual; si el precio cubre los variables, sobra algo para pagar parte de los fijos."]]},
   {type:"num",title:"Monopolio y competencia",items:[{q:"Demanda p = 100 − q y CMg = 20 constante. ¿Qué cantidad produce el monopolista?",a:40,hint:"IMg = 100 − 2q = 20",ex:"100 − 2q = 20 → q = 40."},{q:"¿A qué precio vende el monopolista?",a:60,u:"$",hint:"p = 100 − 40",ex:"p = 60, contra 20 en competencia perfecta (donde q sería 80)."}]}]},
 {lead:"A veces el mercado por sí solo no llega a un resultado eficiente. Ahí aparece la justificación económica de la intervención del Estado.",
  html:`<ul><li><b>Externalidades:</b> efectos sobre terceros que no se reflejan en el precio. Negativas: una fábrica que contamina un río. Positivas: la educación o la vacunación. Se corrigen con impuestos, subsidios o regulación.</li>
  <li><b>Bienes públicos:</b> no rivales (que lo use uno no impide que lo use otro) y no excluibles (no se puede impedir que alguien lo use). Ejemplos: defensa, alumbrado público. Nadie quiere pagarlos voluntariamente (problema del <i>free rider</i>), por eso los financia el Estado con impuestos.</li>
  <li><b>Información asimétrica:</b> una parte sabe más que la otra. <i>Selección adversa</i>: en el mercado de autos usados, el vendedor conoce los defectos. <i>Riesgo moral</i>: alguien asegurado se cuida menos. Por eso existen auditorías, garantías y regulación de seguros y bancos.</li>
  <li><b>Poder de mercado:</b> monopolios y carteles que restringen la producción.</li></ul>
  <div class="note"><b>Por qué importa para un contador.</b> La auditoría existe justamente por la información asimétrica entre quienes administran una empresa y quienes ponen el dinero (accionistas, bancos). El auditor reduce esa asimetría (Módulo 25).</div>
  <h3>Ejemplos resueltos</h3>
  <div class="ejr"><b>Externalidad con números</b>Producir una tonelada de cuero le cuesta a la curtiembre $ 100 (costo privado). Además, la contaminación genera un daño a los vecinos de $ 20 por tonelada que nadie paga.
  <ol><li>Costo social = costo privado + daño = 100 + 20 = <b>$ 120</b>.</li><li>Como la empresa decide mirando solo sus $ 100, produce <b>más</b> de lo que convendría a la sociedad.</li><li>Solución clásica: un impuesto de $ 20 por tonelada (impuesto “pigouviano”), que hace que la empresa incluya el daño en su decisión. Alternativas: regulación (límites de vertido) o permisos de emisión.</li></ol></div>
  <div class="ejr"><b>Selección adversa: el mercado de autos usados</b>
  <ol><li>Los vendedores saben si su auto es bueno o malo; los compradores no.</li><li>Los compradores, desconfiados, solo ofrecen un precio promedio.</li><li>A ese precio, los dueños de autos buenos no venden (valen más) y sí venden los de autos malos.</li><li>Resultado: en el mercado quedan sobre todo autos malos. Por eso aparecen garantías, peritajes e informes de dominio, que reducen la asimetría.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Llamar “bien público” a todo lo que da el Estado: la educación pública es rival y excluible; no es un bien público en sentido estricto.</li><li>Pensar que las externalidades son siempre negativas.</li><li>Confundir selección adversa (antes del contrato) con riesgo moral (después del contrato).</li></ul></div>
  ${CAMPUS.vid([["Fallas de mercado: externalidades y bienes públicos","fallas de mercado externalidades bienes publicos explicacion"],["Selección adversa y riesgo moral","seleccion adversa y riesgo moral ejemplos explicacion"],["Impuesto pigouviano","impuesto pigouviano externalidad negativa explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué falla de mercado es?",options:["Externalidad","Bien público","Info. asimétrica","Poder de mercado"],items:[
    ["Una curtiembre vuelca residuos al Riachuelo","Externalidad"],["El faro que guía a todos los barcos de la costa","Bien público"],
    ["Un gerente conoce los problemas de la empresa y los accionistas no","Info. asimétrica"],["Dos cementeras acuerdan subir los precios juntas","Poder de mercado"],
    ["Un vecino planta árboles que embellecen la cuadra","Externalidad"]]}]},
],
eval:[
 {q:"El costo de oportunidad es…",o:["Lo que se paga en efectivo","El valor de la mejor alternativa resignada","El costo fijo","El precio de mercado"],a:1},
 {q:"Si sube el precio de la nafta, ¿qué pasa con la curva de demanda de nafta?",o:["Se desplaza a la derecha","Se desplaza a la izquierda","No se desplaza: hay movimiento sobre la curva","Desaparece"],a:2,ex:"Un cambio en el precio del propio bien es un movimiento sobre la curva."},
 {q:"Un precio máximo por debajo del equilibrio genera…",o:["Exceso de oferta","Faltantes","Nada","Mayor producción"],a:1},
 {q:"Con demanda inelástica, si la empresa sube el precio, su facturación…",o:["Sube","Baja","No cambia","Se anula"],a:0},
 {q:"La elasticidad cruzada entre bienes sustitutos es…",o:["Negativa","Positiva","Cero","Mayor que 10"],a:1},
 {q:"La ley de rendimientos decrecientes aplica cuando…",o:["Todos los factores son variables","Hay al menos un factor fijo","No hay costos","El precio baja"],a:1},
 {q:"En competencia perfecta, la empresa produce donde…",o:["p = CMe","p = CMg","IT es máximo","CF = CV"],a:1},
 {q:"En el corto plazo una empresa debe cerrar si el precio no cubre…",o:["El costo total medio","El costo variable medio","El costo fijo","El margen"],a:1},
 {q:"El alumbrado público es un ejemplo de…",o:["Externalidad negativa","Bien público","Monopolio natural","Bien privado"],a:1},
 {q:"La auditoría de estados contables ayuda a resolver un problema de…",o:["Externalidades","Información asimétrica","Bienes públicos","Elasticidad"],a:1},
]};
