/* Módulo 18 · Costos II: gestión y decisiones */
CAMPUS.content[18] = {
lessons:[
 {lead:"Hay dos formas de calcular el costo de un producto: incluyendo o no los costos fijos de producción. El resultado del período cambia según el método.",
  html:`<ul><li><b>Costeo por absorción (completo):</b> el costo del producto incluye MP, MOD, carga fabril variable y fija. Es el que exigen las normas contables y el impuesto a las Ganancias.</li><li><b>Costeo variable (directo):</b> solo los costos variables forman el producto. Los fijos de producción van a resultados del período. Es el más útil para decidir.</li></ul>
  <h3>Ejemplo</h3><p>Producción 10.000 u, ventas 8.000 u, precio $ 100, costo variable $ 40, costo fijo de producción $ 200.000 ($ 20 por unidad producida), gastos fijos de administración $ 100.000.</p>
  <div class="tw"><table><thead><tr><th>Concepto</th><th class="r">Variable</th><th class="r">Absorción</th></tr></thead><tbody>
  <tr><td>Ventas</td><td class="r num">800.000</td><td class="r num">800.000</td></tr><tr><td>Costo de ventas</td><td class="r num">(320.000)</td><td class="r num">(480.000)</td></tr>
  <tr><td>Fijos de producción</td><td class="r num">(200.000)</td><td class="r num">—</td></tr><tr><td>Administración</td><td class="r num">(100.000)</td><td class="r num">(100.000)</td></tr>
  <tr><td><b>Resultado</b></td><td class="r num"><b>180.000</b></td><td class="r num"><b>220.000</b></td></tr></tbody></table></div>
  <p>La diferencia (40.000) son los fijos que absorción dejó “guardados” en las 2.000 unidades del stock final (2.000 × 20). Con absorción, producir más que lo que se vende mejora el resultado contable aunque no se haya vendido más: por eso no conviene usarlo para evaluar gestión.</p>
  <h3>Contribución marginal</h3><div class="formula">Contribución marginal unitaria = Precio − Costo variable unitario</div>`,
  ex:[{type:"num",items:[{q:"Producción 5.000 u, ventas 5.000 u, precio $ 200, cv $ 120, CF de producción $ 150.000. ¿Diferencia entre el resultado por absorción y el variable?",a:0,u:"$",tol:0,hint:"Si no hay variación de stock, no hay diferencia."},{q:"Producción 6.000 u, ventas 5.000 u, CF de producción $ 150.000. ¿Cuánto mayor es el resultado por absorción?",a:25000,u:"$",hint:"1.000 u en stock × (150.000 / 6.000)"}]}]},
 {lead:"El punto de equilibrio es el nivel de ventas en que la empresa no gana ni pierde. Es la base del análisis costo-volumen-utilidad.",
  html:`<div class="formula">Q equilibrio = CF / (p − cv)   ·   $ equilibrio = CF / razón de contribución   ·   razón de contribución = (p − cv) / p</div>
  <p>Ejemplo: CF $ 1.200.000; precio $ 500; cv $ 300. Contribución unitaria $ 200 → equilibrio en <b>6.000 unidades</b>, es decir, $ 3.000.000 de ventas (razón 40%).</p>
  <h3>Utilidad deseada</h3><div class="formula">Q = (CF + Utilidad deseada) / (p − cv)</div><p>Para ganar $ 400.000: (1.200.000 + 400.000) / 200 = <b>8.000 unidades</b>.</p>
  <h3>Margen de seguridad</h3><p>Cuánto pueden caer las ventas antes de entrar en pérdida: (ventas actuales − ventas de equilibrio) / ventas actuales. Con ventas de 7.500 u: (7.500 − 6.000) / 7.500 = <b>20%</b>.</p>
  <h3>Varios productos</h3><p>Se calcula con la <b>contribución marginal ponderada</b> según la mezcla de ventas. Si la mezcla cambia, cambia el punto de equilibrio.</p>
  <div class="note"><b>Supuestos.</b> Precio y costo variable constantes, costos fijos constantes en el rango relevante, mezcla de ventas estable, producción igual a ventas. Si alguno cambia, hay que recalcular.</div>`,
  ex:[{type:"num",items:[{q:"CF $ 900.000; precio $ 250; cv $ 100. ¿Punto de equilibrio en unidades?",a:6000},{q:"¿Y en pesos de ventas?",a:1500000,u:"$"},{q:"¿Cuántas unidades para ganar $ 300.000?",a:8000},{q:"Si se venden 7.500 u, ¿margen de seguridad en %?",a:20,u:"%",tol:0.05},{q:"Dos productos: A (contribución $ 100) es el 60% de las unidades y B (contribución $ 50), el 40%. CF $ 400.000. ¿Equilibrio en unidades totales?",a:5000,hint:"Contribución ponderada = 0,6×100 + 0,4×50 = 80"}]}]},
 {lead:"Para decidir entre alternativas solo importan los costos e ingresos que cambian. Todo lo demás es ruido.",
  html:`<h3>Costos relevantes</h3><p>Son los <b>futuros</b> y <b>diferentes</b> entre las alternativas. Los costos <b>hundidos</b> (ya incurridos) y los que no cambian (fijos inevitables) no importan para la decisión.</p>
  <h3>Pedido especial</h3><p>Un cliente ofrece comprar 1.500 u a $ 380. Tu costo total unitario es $ 420 (cv $ 300 + fijos $ 120), y tenés capacidad ociosa. ¿Aceptás?</p>
  <p>Los fijos ya se pagan igual. Lo relevante: 380 − 300 = 80 de contribución × 1.500 = <b>$ 120.000 más de ganancia</b>. Conviene, si no afecta los precios a los otros clientes y hay capacidad.</p>
  <h3>Hacer o comprar</h3><p>Comparar el costo de comprar con los costos <b>evitables</b> de fabricar (variables + fijos que desaparecerían). Considerar también calidad, plazos y qué otro uso tendría la capacidad liberada (costo de oportunidad).</p>
  <h3>Eliminar una línea</h3><p>Una línea con pérdida contable puede convenir mantenerla si su contribución marginal es positiva y sus fijos no se evitan al cerrarla.</p>
  <h3>Factor restrictivo</h3><p>Si hay un recurso escaso (horas máquina), se prioriza el producto con mayor <b>contribución por unidad del recurso escaso</b>, no el de mayor contribución unitaria.</p>`,
  ex:[{type:"num",items:[{q:"Pedido especial de 1.500 u a $ 380; cv $ 300; capacidad ociosa suficiente. ¿Cuánto aumenta la ganancia?",a:120000,u:"$"},{q:"Fabricar una pieza: cv $ 250 por unidad y fijos evitables $ 100.000 para 2.000 u. Comprarla cuesta $ 280. ¿Cuánto se ahorra comprando?",a:40000,u:"$",hint:"Costo evitable de fabricar = 250 × 2.000 + 100.000"},{q:"Producto X: contribución $ 600, usa 3 h máquina. Producto Y: contribución $ 400, usa 1 h máquina. ¿Contribución por hora del producto más conveniente?",a:400,u:"$"}]},
   {type:"pick",title:"¿Es relevante para decidir si aceptar un pedido especial (con capacidad ociosa)?",options:["Relevante","Irrelevante"],items:[["Costo de la materia prima del pedido","Relevante"],["Alquiler de la planta","Irrelevante"],["Comisión de venta del pedido","Relevante"],["Lo que se pagó el año pasado por la máquina","Irrelevante"],["Precio ofrecido por el cliente","Relevante"]]}]},
 {lead:"El precio no sale solo del costo. Hay que mirar el mercado, la competencia y lo que el cliente está dispuesto a pagar.",
  html:`<h3>Métodos</h3><ul><li><b>Costo más margen:</b> precio = costo × (1 + markup). Simple, pero ignora la demanda.</li><li><b>Precio de mercado:</b> en mercados competitivos el precio está dado; la empresa decide si le conviene producir.</li><li><b>Costo meta (target costing):</b> se parte del precio que acepta el mercado, se resta el margen deseado y se obtiene el costo máximo admisible. Se rediseña el producto para alcanzarlo.</li><li><b>Por valor percibido:</b> según el valor que el cliente le asigna.</li></ul>
  <div class="formula">Costo meta = Precio de mercado × (1 − margen deseado sobre ventas)</div>
  <h3>El precio y los impuestos</h3><p>Para llegar al precio de lista hay que sumar los impuestos que gravan la venta: IVA (que no es costo para el responsable inscripto pero sí para el consumidor final), Ingresos Brutos, el impuesto a los débitos y créditos bancarios, las comisiones de tarjetas y medios de pago.</p>
  <h3>Ejemplo</h3><p>Costo $ 1.000, se quiere un margen neto del 20% sobre el precio neto, y la venta paga 3% de Ingresos Brutos y 2% de comisión de tarjeta (sobre el neto). Precio neto = 1.000 / (1 − 0,20 − 0,03 − 0,02) = <b>$ 1.333,33</b>; con IVA 21%, $ 1.613,33.</p>`,
  ex:[{type:"num",items:[{q:"Precio de mercado $ 1.500 y margen deseado del 20% sobre ventas. ¿Costo meta?",a:1200,u:"$"},{q:"Costo $ 2.000; margen 15%, IIBB 3,5% y comisiones 1,5% sobre el precio neto. ¿Precio neto?",a:2500,u:"$",hint:"2.000 / (1 − 0,15 − 0,035 − 0,015)"},{q:"¿Y el precio final con IVA 21%?",a:3025,u:"$"}]}]},
 {lead:"El presupuesto integral traduce los planes de la empresa en números para el año siguiente.",
  html:`<h3>Secuencia</h3><ol><li><b>Presupuesto de ventas</b> (unidades y pesos). Es el punto de partida.</li><li><b>Producción:</b> unidades a producir = ventas + inventario final deseado − inventario inicial.</li><li><b>Materias primas:</b> consumo y compras.</li><li><b>Mano de obra</b> y <b>carga fabril</b>.</li><li><b>Gastos</b> de comercialización y administración.</li><li><b>Presupuesto financiero</b> (de caja): cobros y pagos según las condiciones de venta y compra.</li><li><b>Estados proyectados:</b> resultados y situación patrimonial.</li></ol>
  <div class="formula">Compras de MP = Consumo + Existencia final deseada − Existencia inicial</div>
  <h3>Presupuesto de caja</h3><p>Muestra si va a faltar o sobrar dinero cada mes. Si las ventas son a 60 días, el cobro de enero entra en marzo: una empresa que crece mucho puede quedarse sin caja aunque gane.</p>
  <h3>Presupuesto flexible</h3><p>Ajusta el presupuesto al nivel de actividad real. Así se comparan costos reales con lo que deberían haber sido para ese volumen.</p>`,
  ex:[{type:"num",items:[{q:"Ventas presupuestadas 10.000 u; inventario final deseado 2.000 u; inventario inicial 1.500 u. ¿Unidades a producir?",a:10500},{q:"Cada unidad usa 2 kg de MP. Existencia final deseada de MP 3.000 kg; inicial 2.500 kg. ¿Kg a comprar?",a:21500,u:"kg"},{q:"Ventas de enero $ 1.000.000 y febrero $ 1.200.000. Se cobra 40% en el mes y 60% al mes siguiente. ¿Cobranza de febrero?",a:1080000,u:"$"}]}]},
 {lead:"Comparar lo real con lo presupuestado y explicar las diferencias es el corazón del control de gestión.",
  html:`<h3>Desvíos de ventas</h3><div class="formula">Desvío de precio = (Precio real − Precio presupuestado) × Cantidad real<br>Desvío de volumen = (Cantidad real − Cantidad presupuestada) × Precio presupuestado</div>
  <p>Presupuesto: 1.000 u a $ 200 = $ 200.000. Real: 1.100 u a $ 190 = $ 209.000.</p>
  <ul><li>Precio: (190 − 200) × 1.100 = <b>−11.000</b> desfavorable.</li><li>Volumen: (1.100 − 1.000) × 200 = <b>+20.000</b> favorable.</li><li>Total: +9.000 favorable.</li></ul>
  <p>En la práctica conviene analizar los desvíos en términos de <b>contribución marginal</b>, no solo de ventas: vender más de un producto de bajo margen puede empeorar el resultado (desvío de mezcla).</p>
  <h3>Informe de desvíos</h3><p>Un buen informe muestra el presupuesto, lo real, el desvío en pesos y en porcentaje, la causa y quién es responsable. Se concentra en los desvíos significativos (gestión por excepción).</p>`,
  ex:[{type:"num",items:[{q:"Presupuesto: 2.000 u a $ 500. Real: 1.800 u a $ 540. ¿Desvío de precio? (con signo)",a:72000,u:"$"},{q:"¿Desvío de volumen? (con signo)",a:-100000,u:"$"},{q:"¿Desvío total de ventas? (con signo)",a:-28000,u:"$"}]}]},
],
eval:[
 {q:"El costeo que exigen las normas contables para valuar inventarios es…",o:["Variable","Por absorción","Estándar","Marginal"],a:1},
 {q:"Si la producción supera a las ventas, el resultado por absorción es… que el variable.",o:["Menor","Mayor","Igual","Siempre negativo"],a:1},
 {q:"CF $ 600.000, precio $ 80, cv $ 50. Punto de equilibrio:",o:["7.500 u","12.000 u","20.000 u","4.615 u"],a:2},
 {q:"El margen de seguridad indica…",o:["La ganancia máxima","Cuánto pueden caer las ventas antes de perder","El markup","El costo fijo"],a:1},
 {q:"Para un pedido especial con capacidad ociosa, los costos fijos existentes son…",o:["Relevantes","Irrelevantes","Siempre evitables","Variables"],a:1},
 {q:"Con un recurso escaso, se prioriza el producto con mayor…",o:["Precio","Contribución unitaria","Contribución por unidad de recurso escaso","Costo total"],a:2},
 {q:"El costo meta se calcula…",o:["Costo × (1 + markup)","Precio de mercado − margen deseado","Costo fijo / unidades","Precio + IVA"],a:1},
 {q:"El presupuesto integral empieza por…",o:["El presupuesto de caja","El presupuesto de ventas","Los estados proyectados","El de compras"],a:1},
 {q:"Unidades a producir =",o:["Ventas − EF + EI","Ventas + EF deseada − EI","Ventas + EI","EF − EI"],a:1},
 {q:"Vender más unidades que lo presupuestado genera un desvío de volumen…",o:["Favorable","Desfavorable","Nulo","De precio"],a:0},
]};
