/* Módulo 6 · Administración general */
CAMPUS.content[6] = {
lessons:[
 {lead:"Una organización es un grupo de personas que coordina recursos para alcanzar objetivos que no lograrían por separado.",
  html:`<h3>Elementos de toda organización</h3><ul><li><b>Personas</b> con roles definidos.</li><li><b>Objetivos</b> compartidos.</li><li><b>Recursos:</b> financieros, materiales, tecnológicos, información.</li><li><b>Estructura</b> que asigna tareas y autoridad.</li><li><b>Contexto</b> con el que interactúa (clientes, proveedores, Estado, competencia).</li></ul>
  <h3>Clasificación</h3>
  <ul><li>Por su fin: <b>con fines de lucro</b> (empresas) o <b>sin fines de lucro</b> (asociaciones civiles, fundaciones, ONG).</li>
  <li>Por su propiedad: <b>privadas</b>, <b>públicas</b> (organismos del Estado, empresas estatales) o <b>mixtas</b>.</li>
  <li>Por su tamaño: en Argentina la categoría <b>MiPyME</b> se define por ventas anuales, actividad y personal, según topes que actualiza la Secretaría de la Pequeña y Mediana Empresa.</li></ul>
  <h3>La organización como sistema</h3>
  <p>Recibe insumos del contexto, los transforma y devuelve productos o servicios. La información contable es uno de sus subsistemas centrales: une las decisiones de todas las áreas en una sola medida, el dinero.</p>
  <h3>Escuelas de la administración</h3>
  <div class="tw"><table><thead><tr><th>Escuela</th><th>Autor</th><th>Idea central</th></tr></thead><tbody>
  <tr><td>Administración científica</td><td>Frederick Taylor</td><td>Estudio de tiempos y métodos para maximizar la eficiencia del trabajo.</td></tr>
  <tr><td>Clásica</td><td>Henri Fayol</td><td>Funciones del administrador: prever, organizar, dirigir, coordinar, controlar.</td></tr>
  <tr><td>Burocrática</td><td>Max Weber</td><td>Reglas formales, jerarquía, autoridad basada en el cargo.</td></tr>
  <tr><td>Relaciones humanas</td><td>Elton Mayo</td><td>La motivación y el grupo influyen en la productividad.</td></tr>
  <tr><td>Sistémica y contingente</td><td>Von Bertalanffy, Lawrence y Lorsch</td><td>No hay una única mejor forma: depende del contexto.</td></tr></tbody></table></div>`,
  ex:[{type:"pick",title:"¿Qué escuela representa cada idea?",options:["Científica","Clásica","Burocrática","Relaciones humanas","Contingente"],items:[
    ["Medir con cronómetro cuánto tarda un operario en cada tarea","Científica"],["Definir las funciones de prever, organizar, dirigir, coordinar y controlar","Clásica"],
    ["Manuales de procedimiento y jerarquías formales","Burocrática"],["Los experimentos de Hawthorne sobre la motivación","Relaciones humanas"],["La estructura ideal depende del contexto de la empresa","Contingente"]]}]},
 {lead:"Planificar es decidir hoy qué se quiere lograr y cómo. Sin un plan, el presupuesto y el control de gestión no tienen contra qué compararse.",
  html:`<h3>Niveles de planeamiento</h3><ul><li><b>Estratégico:</b> largo plazo, toda la organización, a cargo de la dirección. Define misión, visión y estrategia.</li><li><b>Táctico:</b> mediano plazo, por área (comercial, producción, finanzas).</li><li><b>Operativo:</b> corto plazo, tareas y presupuestos concretos.</li></ul>
  <h3>Misión, visión y objetivos</h3><p>La <b>misión</b> dice para qué existe la organización. La <b>visión</b>, qué quiere llegar a ser. Los <b>objetivos</b> deberían ser específicos, medibles, alcanzables, relevantes y con plazo (criterio SMART).</p>
  <h3>Herramientas de análisis</h3>
  <ul><li><b>FODA:</b> Fortalezas y Debilidades (internas), Oportunidades y Amenazas (externas).</li>
  <li><b>Cinco fuerzas de Porter:</b> rivalidad entre competidores, amenaza de nuevos ingresantes, de sustitutos, poder de negociación de clientes y de proveedores.</li>
  <li><b>Estrategias genéricas de Porter:</b> liderazgo en costos, diferenciación o enfoque en un nicho.</li>
  <li><b>PESTEL:</b> factores políticos, económicos, sociales, tecnológicos, ecológicos y legales del contexto.</li></ul>`,
  ex:[{type:"pick",title:"Clasificá en el FODA de un estudio contable",options:["Fortaleza","Debilidad","Oportunidad","Amenaza"],items:[
    ["Equipo con mucha experiencia en impuestos","Fortaleza"],["No tiene un sistema de gestión de clientes","Debilidad"],["Cambios normativos frecuentes que generan demanda de asesoramiento","Oportunidad"],
    ["Software que automatiza liquidaciones simples a bajo costo","Amenaza"],["Dependencia de dos clientes que explican el 60% de los honorarios","Debilidad"],["Crecimiento de emprendedores que necesitan inscribirse","Oportunidad"]]}]},
 {lead:"La estructura organizacional define quién hace qué, quién decide y quién reporta a quién. Se representa con el organigrama.",
  html:`<h3>Conceptos básicos</h3><ul><li><b>Departamentalización:</b> agrupar tareas por función (ventas, producción), por producto, por zona geográfica o por cliente.</li>
  <li><b>Tramo de control:</b> cuántas personas dependen directamente de un jefe.</li><li><b>Centralización:</b> en qué nivel se toman las decisiones.</li>
  <li><b>Línea y staff:</b> la línea tiene autoridad para ordenar; el staff asesora (por ejemplo, el área legal o la auditoría interna).</li></ul>
  <h3>Tipos de estructura</h3><ul><li><b>Funcional:</b> por áreas especializadas. Simple y eficiente, pero puede generar “silos”.</li>
  <li><b>Divisional:</b> por producto o región, cada división casi autónoma.</li><li><b>Matricial:</b> doble dependencia (función y proyecto).</li></ul>
  <div class="note"><b>Oposición de intereses.</b> Un principio del control interno es separar funciones: quien autoriza una compra no debería ser quien registra el pago ni quien custodia el dinero. Esto se diseña desde la estructura y lo vemos en el Módulo 10.</div>
  <h3>Manuales</h3><p>La estructura se documenta en manuales de organización (funciones de cada puesto), de procedimientos (cómo se hace cada tarea) y de políticas (criterios para decidir).</p>`,
  ex:[{type:"tf",items:[["Una estructura funcional agrupa las tareas por especialidad","Verdadero"],["En una matricial cada empleado tiene un único jefe","Falso","Tiene doble dependencia."],["La auditoría interna suele ser un órgano de staff","Verdadero"],["Es buena práctica que la misma persona autorice, pague y registre las compras","Falso","Viola la oposición de intereses."]]}]},
 {lead:"Dirigir es lograr que las personas hagan lo planificado. Implica liderar, motivar, comunicar y decidir.",
  html:`<h3>Teorías de la motivación</h3><ul><li><b>Maslow:</b> pirámide de necesidades (fisiológicas, seguridad, sociales, estima, autorrealización).</li>
  <li><b>Herzberg:</b> factores higiénicos (sueldo, condiciones) evitan la insatisfacción; los motivadores (reconocimiento, desafío) generan satisfacción.</li>
  <li><b>McGregor:</b> Teoría X (las personas evitan el trabajo y necesitan control) frente a Teoría Y (buscan responsabilidad).</li></ul>
  <h3>Estilos de liderazgo</h3><p>Autocrático, democrático o participativo, y <i>laissez-faire</i>. El liderazgo situacional sostiene que el estilo debe adaptarse a la madurez del equipo.</p>
  <h3>El proceso de decisión</h3><ol><li>Identificar el problema.</li><li>Generar alternativas.</li><li>Evaluarlas con criterios (costo, riesgo, tiempo).</li><li>Elegir e implementar.</li><li>Controlar el resultado.</li></ol>
  <p>Herbert Simon mostró que las personas deciden con <b>racionalidad limitada</b>: no buscan la mejor opción posible sino una satisfactoria, porque la información y el tiempo son escasos. La información contable confiable reduce esa limitación.</p>`,
  ex:[{type:"pick",title:"Según Herzberg, ¿es factor higiénico o motivador?",options:["Higiénico","Motivador"],items:[["El sueldo","Higiénico"],["El reconocimiento por un buen trabajo","Motivador"],["Las condiciones de la oficina","Higiénico"],["Tareas desafiantes con responsabilidad","Motivador"],["La relación con el supervisor","Higiénico"]]}]},
 {lead:"Controlar es comparar lo que pasó con lo que se planificó, entender por qué hay diferencias y corregir.",
  html:`<h3>El ciclo de control</h3><ol><li>Fijar estándares o metas.</li><li>Medir el desempeño real.</li><li>Comparar y calcular desvíos.</li><li>Analizar causas y tomar acciones correctivas.</li></ol>
  <h3>Tipos de control</h3><ul><li><b>Preventivo:</b> antes de que ocurra (aprobación previa de una compra).</li><li><b>Concurrente:</b> durante la operación (supervisión).</li><li><b>Posterior:</b> después (comparar el presupuesto con lo real).</li></ul>
  <h3>Indicadores y tablero de comando</h3><p>Un indicador clave de desempeño (KPI) mide un objetivo: margen bruto, días de cobro, rotación de inventario, ventas por empleado. El <b>Balanced Scorecard</b> de Kaplan y Norton organiza los indicadores en cuatro perspectivas: financiera, clientes, procesos internos, y aprendizaje y crecimiento.</p>
  <div class="note"><b>El contador en el control.</b> El presupuesto (Módulo 18), el análisis de desvíos y los indicadores financieros (Módulo 24) son herramientas que normalmente arma y explica el área contable.</div>`,
  ex:[{type:"num",items:[{q:"Se presupuestaron ventas por $ 5.000.000 y se vendieron $ 4.600.000. ¿Desvío en %? (con signo)",a:-8,u:"%",tol:0.05},{q:"Un vendedor tiene meta de 40 clientes nuevos y logró 46. ¿Porcentaje de cumplimiento?",a:115,u:"%",tol:0.05}]},
   {type:"pick",title:"¿Qué tipo de control es?",options:["Preventivo","Concurrente","Posterior"],items:[["El gerente debe firmar toda compra superior a $ 1 millón","Preventivo"],["Un supervisor revisa la línea de producción durante el turno","Concurrente"],["A fin de mes se comparan gastos reales con los presupuestados","Posterior"]]}]},
 {lead:"Antes de emprender hay que elegir una forma jurídica. La elección cambia la responsabilidad, los impuestos y las obligaciones contables.",
  html:`<div class="tw"><table><thead><tr><th>Forma</th><th>Responsabilidad</th><th>Impuestos (en general)</th><th>Para quién</th></tr></thead><tbody>
  <tr><td><b>Monotributo</b> (persona humana)</td><td>Ilimitada con su patrimonio</td><td>Cuota fija mensual que incluye impuestos y seguridad social</td><td>Pequeños contribuyentes que no superan los topes de facturación</td></tr>
  <tr><td><b>Responsable inscripto</b> (persona humana)</td><td>Ilimitada</td><td>IVA, Ganancias (escala progresiva), autónomos</td><td>Quienes superan el Monotributo</td></tr>
  <tr><td><b>SAS</b></td><td>Limitada al capital suscripto</td><td>IVA, Ganancias de sociedades</td><td>Emprendimientos que buscan constitución simple</td></tr>
  <tr><td><b>SRL</b></td><td>Limitada a las cuotas</td><td>IVA, Ganancias de sociedades</td><td>Empresas familiares o de pocos socios (máximo 50)</td></tr>
  <tr><td><b>SA</b></td><td>Limitada a las acciones</td><td>IVA, Ganancias de sociedades</td><td>Empresas medianas y grandes, posibilidad de cotizar</td></tr>
  <tr><td><b>Cooperativa</b></td><td>Limitada</td><td>Régimen especial</td><td>Grupos que se asocian para un fin común (trabajo, consumo, vivienda)</td></tr></tbody></table></div>
  <p>Los detalles de cada tipo societario están en el Módulo 16; los impuestos, en los Módulos 20 y 21.</p>
  <h3>Plan de negocios</h3><p>Antes de empezar conviene armar un plan con: descripción del producto, análisis de mercado y competencia, plan comercial, plan de operaciones, organización y equipo, y proyección económica y financiera (inversión inicial, flujo de fondos, punto de equilibrio).</p>`,
  ex:[{type:"tf",items:[["En el Monotributo, la persona responde con todo su patrimonio personal","Verdadero"],["Una SRL puede tener hasta 50 socios","Verdadero","Art. 146 de la Ley General de Sociedades."],["Una SA nunca paga Impuesto a las Ganancias porque lo pagan los accionistas","Falso","La sociedad tributa Ganancias como sujeto y además se gravan los dividendos."],["La SAS limita la responsabilidad de los socios al capital que suscriben","Verdadero"]]}]},
],
eval:[
 {q:"Las funciones administrativas “prever, organizar, dirigir, coordinar y controlar” se deben a…",o:["Taylor","Fayol","Weber","Mayo"],a:1},
 {q:"En un FODA, las amenazas son…",o:["Internas y negativas","Externas y negativas","Internas y positivas","Externas y positivas"],a:1},
 {q:"El planeamiento estratégico es…",o:["De corto plazo y por tarea","De largo plazo y para toda la organización","Solo para empresas grandes","Lo mismo que el presupuesto"],a:1},
 {q:"Una estructura con doble dependencia (función y proyecto) es…",o:["Funcional","Divisional","Matricial","Lineal"],a:2},
 {q:"Separar quién autoriza, quién registra y quién custodia es un principio de…",o:["Marketing","Control interno","Liderazgo","Planeamiento"],a:1},
 {q:"Según Herzberg, el sueldo es un factor…",o:["Motivador","Higiénico","Irrelevante","Estratégico"],a:1},
 {q:"La “racionalidad limitada” fue planteada por…",o:["Herbert Simon","Michael Porter","Max Weber","Peter Drucker"],a:0},
 {q:"Comparar a fin de mes los gastos reales con el presupuesto es un control…",o:["Preventivo","Concurrente","Posterior","Estratégico"],a:2},
 {q:"El Balanced Scorecard organiza indicadores en…",o:["Dos perspectivas","Cuatro perspectivas","Una sola, la financiera","Diez áreas"],a:1},
 {q:"¿Qué forma jurídica limita la responsabilidad del socio?",o:["Monotributo","Responsable inscripto persona humana","SRL","Ninguna"],a:2},
]};
