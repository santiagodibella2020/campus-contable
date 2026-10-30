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
  <p>La <b>microeconomía</b> estudia decisiones individuales: consumidores, empresas, mercados. La <b>macroeconomía</b> estudia agregados: PBI, inflación, desempleo (Módulo 5).</p>`,
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
  <div class="note"><b>Movimiento sobre la curva o desplazamiento.</b> Si cambia el precio del propio bien, te movés por la curva. Si cambia otra cosa (ingreso, costos), la curva entera se desplaza.</div>`,
  ex:[{type:"num",items:[
   {q:"Qd = 200 − 5p y Qo = 20 + 4p. ¿Cuál es el precio de equilibrio?",a:20},
   {q:"¿Y la cantidad de equilibrio?",a:100},
   {q:"Si el Estado fija un precio máximo de 10, ¿cuál es el exceso de demanda (Qd − Qo)?",a:90,hint:"Qd = 150; Qo = 60"}]},
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
  <div class="note"><b>Y los impuestos.</b> Un impuesto recae más sobre el lado del mercado que es más inelástico, porque tiene menos opciones para escapar. Por eso los impuestos a los combustibles o al tabaco recaudan mucho. Esto se llama incidencia y se ve en el Módulo 19.</div>`,
  ex:[{type:"num",items:[
   {q:"El precio baja 5% y la cantidad sube 15%. ¿Cuál es la elasticidad precio (en valor absoluto)?",a:3},
   {q:"Un producto con elasticidad 0,4 sube 10% su precio. ¿Cuánto cae la cantidad, en %?",a:4,u:"%",tol:0.05}]},
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
  <p>En el largo plazo, si al crecer baja el costo medio, hay economías de escala (compras por volumen, especialización). Si sube, deseconomías (burocracia, coordinación).</p>`,
  ex:[{type:"num",items:[
   {q:"CF = $ 50.000, CV de 1.000 unidades = $ 150.000. ¿Costo medio?",a:200,u:"$"},
   {q:"Producir 1.000 u cuesta $ 200.000 en total y 1.001 u cuesta $ 200.180. ¿Costo marginal de la unidad 1.001?",a:180,u:"$"},
   {q:"Un negocio tuvo ganancia contable de $ 3.000.000 en el año. El dueño podría ganar $ 4.000.000 trabajando en relación de dependencia. ¿Ganancia económica? (con signo)",a:-1000000,u:"$"}]}]},
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
  <div class="note"><b>Defensa de la competencia.</b> En Argentina la Ley 27.442 prohíbe acuerdos entre competidores para fijar precios y el abuso de posición dominante. La aplica la Autoridad Nacional de la Competencia.</div>`,
  ex:[{type:"pick",title:"Identificá la estructura de mercado",options:["Competencia perfecta","Comp. monopolística","Oligopolio","Monopolio"],items:[
    ["Miles de productores de maíz venden al precio de Chicago","Competencia perfecta"],["Tres empresas concentran casi toda la telefonía móvil","Oligopolio"],
    ["Cientos de peluquerías en una ciudad, cada una con su estilo","Comp. monopolística"],["Una única empresa con concesión de agua potable en la región","Monopolio"]]},
   {type:"tf",items:[["Una empresa en competencia perfecta puede subir su precio sin perder clientes","Falso","Si cobra más que el mercado, nadie le compra."],
    ["En el corto plazo, conviene seguir produciendo si el precio cubre el costo variable medio","Verdadero"]]}]},
 {lead:"A veces el mercado por sí solo no llega a un resultado eficiente. Ahí aparece la justificación económica de la intervención del Estado.",
  html:`<ul><li><b>Externalidades:</b> efectos sobre terceros que no se reflejan en el precio. Negativas: una fábrica que contamina un río. Positivas: la educación o la vacunación. Se corrigen con impuestos, subsidios o regulación.</li>
  <li><b>Bienes públicos:</b> no rivales (que lo use uno no impide que lo use otro) y no excluibles (no se puede impedir que alguien lo use). Ejemplos: defensa, alumbrado público. Nadie quiere pagarlos voluntariamente (problema del <i>free rider</i>), por eso los financia el Estado con impuestos.</li>
  <li><b>Información asimétrica:</b> una parte sabe más que la otra. <i>Selección adversa</i>: en el mercado de autos usados, el vendedor conoce los defectos. <i>Riesgo moral</i>: alguien asegurado se cuida menos. Por eso existen auditorías, garantías y regulación de seguros y bancos.</li>
  <li><b>Poder de mercado:</b> monopolios y carteles que restringen la producción.</li></ul>
  <div class="note"><b>Por qué importa para un contador.</b> La auditoría existe justamente por la información asimétrica entre quienes administran una empresa y quienes ponen el dinero (accionistas, bancos). El auditor reduce esa asimetría (Módulo 25).</div>`,
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
