/* Trabajos prácticos integradores · Ciclo Básico (1 a 7) */
CAMPUS.tp = CAMPUS.tp || {};
(function(){
const ACC1 = ["Caja","Banco Nación c/c","Mercaderías","Muebles y útiles","Proveedores","Capital","Ventas","Costo de mercaderías vendidas","Alquileres perdidos"];

CAMPUS.tp[1] = {t:"TP 1: el primer mes del Kiosco La Esquina",
 lead:"Laura abre un kiosco como monotributista. Vas a registrar su primer mes completo, pasarlo al Mayor y armar su situación patrimonial.",
 html:`<div class="note"><b>Consigna.</b> Como Laura es monotributista, el IVA no se discrimina: registrá los importes totales. Usá inventario permanente (cada venta tiene su asiento de costo).</div>
 <div class="tw"><table><thead><tr><th>Día</th><th>Operación</th></tr></thead><tbody>
 <tr><td class="mono">01</td><td>Laura aporta $ 800.000 en efectivo para iniciar el negocio.</td></tr>
 <tr><td class="mono">02</td><td>Deposita $ 500.000 en una cuenta del Banco Nación.</td></tr>
 <tr><td class="mono">03</td><td>Compra mercaderías por $ 300.000: paga $ 100.000 en efectivo y el resto a 30 días.</td></tr>
 <tr><td class="mono">05</td><td>Compra una heladera exhibidora por $ 250.000 y la paga con transferencia.</td></tr>
 <tr><td class="mono">20</td><td>Vende mercaderías por $ 180.000 al contado. Su costo era $ 120.000.</td></tr>
 <tr><td class="mono">30</td><td>Paga el alquiler del mes, $ 40.000, en efectivo.</td></tr>
 <tr><td class="mono">30</td><td>Paga $ 100.000 a proveedores por transferencia.</td></tr></tbody></table></div>`,
 cite:["Fowler Newton, E., Contabilidad Básica, capítulos sobre registración."],
 ex:[{type:"asiento",title:"Registrá el mes",accounts:ACC1,entries:[
   {t:"01 · Aporte inicial de $ 800.000 en efectivo.",e:[["Caja",800000,0],["Capital",0,800000]]},
   {t:"02 · Depósito de $ 500.000 en el banco.",e:[["Banco Nación c/c",500000,0],["Caja",0,500000]]},
   {t:"03 · Compra de mercaderías por $ 300.000: $ 100.000 en efectivo y el resto a 30 días.",e:[["Mercaderías",300000,0],["Caja",0,100000],["Proveedores",0,200000]]},
   {t:"05 · Compra de la heladera por transferencia.",e:[["Muebles y útiles",250000,0],["Banco Nación c/c",0,250000]]},
   {t:"20 · Venta al contado por $ 180.000.",e:[["Caja",180000,0],["Ventas",0,180000]]},
   {t:"20 · Costo de la venta: $ 120.000.",e:[["Costo de mercaderías vendidas",120000,0],["Mercaderías",0,120000]]},
   {t:"30 · Pago del alquiler en efectivo.",e:[["Alquileres perdidos",40000,0],["Caja",0,40000]]},
   {t:"30 · Pago a proveedores por transferencia.",e:[["Proveedores",100000,0],["Banco Nación c/c",0,100000]]}]},
  {type:"num",title:"Mayor y situación patrimonial al día 30",items:[
   {q:"Saldo de Caja",a:340000,u:"$",ex:"800.000 − 500.000 − 100.000 + 180.000 − 40.000."},
   {q:"Saldo de Banco Nación c/c",a:150000,u:"$"},
   {q:"Saldo de Mercaderías",a:180000,u:"$"},
   {q:"Total del activo",a:920000,u:"$",ex:"340.000 + 150.000 + 180.000 + 250.000."},
   {q:"Total del pasivo",a:100000,u:"$"},
   {q:"Resultado del mes",a:20000,u:"$",ex:"Ventas 180.000 − costo 120.000 − alquiler 40.000."},
   {q:"Patrimonio neto al día 30",a:820000,u:"$",ex:"Capital 800.000 + resultado 20.000 = activo 920.000 − pasivo 100.000."}]},
  {type:"tf",title:"Revisá los conceptos",items:[["El depósito en el banco no cambia el patrimonio neto",true,"Es una permuta entre dos activos."],["La compra de la heladera es un gasto del mes",false,"Es un bien de uso: se activa y se amortiza en su vida útil."],["Si la ecuación A = P + PN no cierra, hay un error de registración",true]]}]};

CAMPUS.tp[2] = {t:"TP 2: modelo de precios para una fábrica de mochilas",
 lead:"Una pequeña fábrica quiere saber cuántas mochilas tiene que vender para no perder y qué precio le conviene cobrar.",
 html:`<p>Los costos fijos mensuales son $ 200.000 y el costo variable es $ 1.500 por mochila. Al precio actual de $ 2.500, se venden todas las que se fabrican.</p>
 <div class="formula">C(q) = 200.000 + 1.500 q · I(q) = 2.500 q</div>
 <p>Un estudio de mercado estima que, si la empresa fija libremente el precio, la demanda sigue la función <span class="mono">p = 4.000 − 5 q</span>.</p>`,
 ex:[{type:"num",title:"Precio fijo",items:[
   {q:"¿Cuántas mochilas hay que vender para llegar al punto de equilibrio?",a:200,ex:"2.500 q = 200.000 + 1.500 q → q = 200."},
   {q:"¿Cuál es la ganancia si se venden 350?",a:150000,u:"$"}]},
  {type:"num",title:"Precio libre (derivadas)",items:[
   {q:"¿Qué cantidad maximiza el ingreso total I(q) = 4.000 q − 5 q²?",a:400,ex:"I'(q) = 4.000 − 10 q = 0."},
   {q:"¿Qué cantidad maximiza la ganancia, con los costos de arriba?",a:250,ex:"π'(q) = 4.000 − 10 q − 1.500 = 0 → q = 250."},
   {q:"¿A qué precio se venden esas 250 mochilas?",a:2750,u:"$"},
   {q:"¿Cuál es la ganancia máxima?",a:112500,u:"$",ex:"250 × 2.750 − (200.000 + 1.500 × 250) = 687.500 − 575.000."}]},
  {type:"num",title:"Crecimiento compuesto",items:[
   {q:"Si las ventas crecen un 3% por mes, ¿cuánto crecen en 12 meses? (en %)",a:42.58,u:"%",tol:0.05,ex:"1,03¹² − 1 = 42,58%. No es 36%: el crecimiento se compone."}]}]};

CAMPUS.tp[3] = {t:"TP 3: análisis de ventas de un local",
 lead:"El dueño de un local registró sus ventas diarias (en miles de pesos) durante 10 días y te pide un análisis estadístico.",
 html:`<div class="formula">12 · 15 · 9 · 18 · 15 · 20 · 11 · 15 · 14 · 21</div>
 <p>Tratá los datos como una <b>muestra</b> (usá n − 1 para la varianza).</p>`,
 cite:["Levin, R. y Rubin, D., Estadística para administración y economía."],
 ex:[{type:"num",title:"Estadística descriptiva",items:[
   {q:"Media",a:15},{q:"Mediana",a:15,ex:"Ordenados: 9, 11, 12, 14, 15, 15, 15, 18, 20, 21."},{q:"Modo",a:15},
   {q:"Desvío estándar muestral",a:3.83,tol:0.01,ex:"Suma de desvíos al cuadrado = 132; 132 / 9 = 14,67; raíz = 3,83."},
   {q:"Coeficiente de variación (en %)",a:25.5,u:"%",tol:0.1}]},
  {type:"num",title:"Probabilidad",items:[
   {q:"El 10% de los productos sale fallado. Si se revisan 5 al azar, ¿qué probabilidad hay de que ninguno esté fallado? (en %, con dos decimales)",a:59.05,u:"%",tol:0.01,ex:"Binomial: 0,9⁵ = 0,5905."},
   {q:"Las ventas mensuales siguen una normal con media $ 1.000 y desvío $ 200 (en miles). ¿Qué probabilidad hay de vender menos de $ 1.300? (en %)",a:93.32,u:"%",tol:0.05,ex:"z = (1.300 − 1.000) / 200 = 1,5 → 0,9332."}]},
  {type:"mc",items:[{q:"Si el CV de otro local es 40%, ¿qué se puede decir?",o:["Vende más","Sus ventas son más dispersas en relación con su media","Su media es mayor","No se puede comparar"],a:1}]}]};

CAMPUS.tp[4] = {t:"TP 4: un impuesto en el mercado de la yerba",
 lead:"Vas a analizar cómo un impuesto por unidad cambia el equilibrio y quién lo paga realmente.",
 html:`<div class="formula">Demanda: Qd = 1.000 − 2 P · Oferta: Qs = −200 + 4 P</div>
 <p>El Estado aplica un impuesto de <b>$ 30 por unidad</b> que pagan los vendedores. Con el impuesto, la oferta queda <span class="mono">Qs = −200 + 4 (P − 30)</span>, donde P es el precio que paga el consumidor.</p>`,
 cite:["Mankiw, N. G., Principios de Economía, capítulos sobre oferta, demanda y política del gobierno."],
 ex:[{type:"num",items:[
   {q:"Precio de equilibrio sin impuesto",a:200,u:"$"},{q:"Cantidad de equilibrio sin impuesto",a:600},
   {q:"Precio que paga el consumidor con el impuesto",a:220,u:"$"},{q:"Precio que recibe el vendedor",a:190,u:"$"},
   {q:"Cantidad con impuesto",a:560},{q:"Recaudación del Estado",a:16800,u:"$"},
   {q:"Elasticidad precio de la demanda en el equilibrio inicial (en valor absoluto)",a:0.67,tol:0.01,ex:"2 × 200 / 600 = 0,67: demanda inelástica."}]},
  {type:"mc",items:[{q:"¿Quién soporta la mayor parte del impuesto?",o:["Los consumidores: el precio les sube $ 20 de los $ 30","Los vendedores: reciben $ 10 menos","Se reparte en partes iguales","Nadie, lo paga el Estado"],a:0,ex:"La demanda es más inelástica que la oferta en este tramo, así que el consumidor absorbe más."}]}]};

CAMPUS.tp[5] = {t:"TP 5: leer la macroeconomía con datos",
 lead:"Con datos simplificados de una economía, vas a separar crecimiento real de inflación y calcular tasas reales.",
 html:`<div class="tw"><table><thead><tr><th>Dato</th><th class="r">Año 1</th><th class="r">Año 2</th></tr></thead><tbody>
 <tr><td>PBI a precios corrientes</td><td class="r mono">1.000</td><td class="r mono">1.320</td></tr>
 <tr><td>PBI a precios del año 1</td><td class="r mono">1.000</td><td class="r mono">1.100</td></tr></tbody></table></div>
 <p>Además, sabés que la inflación mensual promedio de un año fue del 2,5% y que un plazo fijo pagó una tasa efectiva anual del 40%.</p>`,
 cite:["Blanchard, O., Macroeconomía, capítulos sobre PBI e inflación.","INDEC, metodología del IPC."],
 ex:[{type:"num",items:[
   {q:"Crecimiento real del PBI del año 2 (en %)",a:10,u:"%"},
   {q:"Deflactor del PBI del año 2 (año 1 = 100)",a:120,ex:"1.320 / 1.100 × 100."},
   {q:"Inflación medida por el deflactor (en %)",a:20,u:"%"},
   {q:"Inflación anual con 2,5% mensual (en %)",a:34.49,u:"%",tol:0.05,ex:"1,025¹² − 1."},
   {q:"Tasa real del plazo fijo (en %)",a:4.1,u:"%",tol:0.05,ex:"1,40 / 1,3449 − 1 = 4,1%."}]},
  {type:"pick",title:"¿Qué política es?",options:["Fiscal","Monetaria","Cambiaria"],items:[["El BCRA sube la tasa de política monetaria","Monetaria"],["El Congreso aprueba una baja de impuestos","Fiscal"],["Se pasa de un tipo de cambio fijo a una banda","Cambiaria"],["Aumenta la inversión pública en rutas","Fiscal"]]}]};

CAMPUS.tp[6] = {t:"TP 6: diagnóstico de una distribuidora",
 lead:"Una distribuidora familiar de bebidas creció rápido y empieza a tener problemas. Vas a ordenar el diagnóstico con las herramientas de la materia.",
 html:`<p>La empresa tiene 25 empleados y el dueño toma todas las decisiones. Tiene buena relación con los almacenes del barrio y una flota propia. No usa presupuestos, los pedidos se anotan en papel y hay faltantes de stock. Una cadena mayorista está entrando en la zona, y a la vez la municipalidad habilitó un parque industrial con beneficios para PyMEs.</p>`,
 cite:["Robbins, S. y Coulter, M., Administración."],
 ex:[{type:"pick",title:"Análisis FODA",options:["Fortaleza","Debilidad","Oportunidad","Amenaza"],items:[["Relación cercana con los almacenes","Fortaleza"],["Pedidos anotados en papel","Debilidad"],["Ingreso de una cadena mayorista","Amenaza"],["Parque industrial con beneficios","Oportunidad"],["Flota propia","Fortaleza"],["Decisiones centralizadas en el dueño","Debilidad"]]},
  {type:"pick",title:"¿Qué función del proceso administrativo falla?",options:["Planificación","Organización","Dirección","Control"],items:[["No hay presupuesto anual","Planificación"],["Nadie sabe quién autoriza las compras","Organización"],["Los faltantes de stock se descubren tarde","Control"],["Los empleados no saben qué se espera de ellos","Dirección"]]},
  {type:"order",title:"Ordená los pasos de la planificación estratégica",items:["Definir misión y visión","Analizar el entorno y la organización (FODA)","Fijar objetivos","Elegir la estrategia","Implementar","Controlar y ajustar"]}]};

CAMPUS.tp[7] = {t:"TP 7: quién puede cobrar qué",
 lead:"El reparto de potestades entre Nación, provincias y municipios explica por qué una empresa paga tantos tributos distintos.",
 html:`<p>Repasá los artículos 4, 16, 17, 19, 52, 75 y 99 de la Constitución Nacional antes de resolver.</p>`,
 cite:["Bidart Campos, G., Manual de la Constitución reformada."],
 ex:[{type:"pick",title:"¿Quién es competente?",options:["Congreso","Poder Ejecutivo","Poder Judicial","Provincias","Municipios"],items:[["Crear el impuesto a las ganancias","Congreso"],["Dictar el decreto reglamentario de la Ley de IVA","Poder Ejecutivo"],["Cobrar el impuesto sobre los Ingresos Brutos","Provincias"],["Cobrar la tasa de seguridad e higiene","Municipios"],["Declarar inconstitucional un tributo en un caso","Poder Judicial"],["Aprobar el presupuesto nacional","Congreso"]]},
  {type:"tf",items:[["El Poder Ejecutivo puede crear un impuesto por decreto de necesidad y urgencia",false,"El art. 99 inc. 3 prohíbe los DNU en materia tributaria."],["Las leyes sobre contribuciones empiezan en la Cámara de Diputados",true,"Art. 52."],["Un tributo que absorbe una parte sustancial de la renta puede ser confiscatorio",true,"Lo protege el derecho de propiedad (art. 17)."],["La igualdad tributaria exige que todos paguen el mismo monto",false,"Exige igual trato a quienes están en igual situación (art. 16)."]]}]};
})();
