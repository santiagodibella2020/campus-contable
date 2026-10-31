/* Módulo 5 · Macroeconomía y economía argentina */
CAMPUS.content[5] = {
lessons:[
 {lead:"El Producto Bruto Interno (PBI) mide el valor de todos los bienes y servicios finales producidos en un país durante un período.",
  html:`<h3>Tres formas de medirlo</h3>
  <ul><li><b>Por el gasto:</b> PBI = C + I + G + (X − M). Consumo de los hogares, inversión, gasto del gobierno y exportaciones netas.</li>
  <li><b>Por la producción:</b> la suma del <b>valor agregado</b> de cada sector (lo que vende cada empresa menos lo que compró a otras). Así se evita contar dos veces el trigo, la harina y el pan.</li>
  <li><b>Por el ingreso:</b> la suma de sueldos, ganancias, rentas e intereses, más impuestos indirectos netos y amortizaciones.</li></ul>
  <h3>Nominal y real</h3>
  <p>El PBI <b>nominal</b> está a precios de cada año; el <b>real</b>, a precios de un año base. Solo el real muestra si se produjo más. La relación entre ambos es el deflactor del PBI.</p>
  <h3>Conceptos relacionados</h3>
  <ul><li><b>PBI per cápita:</b> PBI / población. Aproxima el nivel de vida, aunque no mide la distribución.</li>
  <li><b>PNB:</b> mide lo producido por los residentes del país, estén donde estén. Diferencia con el PBI: los ingresos netos de factores con el exterior (por ejemplo, intereses de deuda externa).</li></ul>
  <p>En Argentina, el INDEC publica las cuentas nacionales trimestrales. El IVA, justamente, es un impuesto sobre el valor agregado (Módulo 20).</p>`,
  ex:[{type:"num",items:[
   {q:"C = 700, I = 150, G = 200, X = 180, M = 160. ¿Cuál es el PBI?",a:1070},
   {q:"Un productor vende trigo por $ 100 al molino; el molino vende harina por $ 250 a la panadería; la panadería vende pan por $ 600. ¿Cuál es el valor agregado total?",a:600,u:"$",hint:"Es igual al valor del bien final."},
   {q:"El PBI nominal creció 60% y los precios 50%. ¿Cuánto creció el PBI real, en %? (dos decimales)",a:6.67,u:"%",tol:0.02,hint:"1,60 / 1,50 − 1"}]}]},
 {lead:"El dinero es lo que se acepta para pagar. El Banco Central regula cuánto hay y los bancos lo multiplican al prestar.",
  html:`<h3>Funciones del dinero</h3><ul><li>Medio de cambio.</li><li>Unidad de cuenta.</li><li>Reserva de valor (la que se pierde con la inflación).</li></ul>
  <h3>Agregados monetarios</h3>
  <ul><li><b>Base monetaria:</b> billetes y monedas en circulación más los depósitos de los bancos en el BCRA.</li>
  <li><b>M1:</b> circulante en poder del público más depósitos a la vista (cuentas corrientes).</li>
  <li><b>M2:</b> M1 más cajas de ahorro. <b>M3:</b> M2 más plazos fijos y otros depósitos.</li></ul>
  <h3>Creación de dinero bancario</h3>
  <p>Los bancos guardan una parte de los depósitos como encaje y prestan el resto, que vuelve a depositarse. Con un encaje del 20%, un depósito inicial de $ 1.000 puede generar hasta 1.000 / 0,20 = $ 5.000 de depósitos totales (multiplicador = 1 / encaje).</p>
  <h3>El BCRA</h3>
  <p>Creado en 1935. Según su Carta Orgánica (Ley 24.144, con reformas), tiene como finalidad promover la estabilidad monetaria y financiera, y con ella el empleo y el desarrollo. Sus herramientas: emisión, tasas de interés de referencia, encajes, operaciones de mercado abierto y regulación del mercado de cambios. También supervisa a las entidades financieras.</p>`,
  ex:[{type:"num",items:[{q:"Con un encaje del 25%, ¿cuál es el multiplicador bancario máximo?",a:4},{q:"Con ese encaje, un depósito inicial de $ 2.000 puede generar hasta ¿cuántos pesos de depósitos totales?",a:8000,u:"$"}]},
   {type:"pick",title:"¿En qué agregado entra por primera vez?",options:["Base monetaria","M1","M2","M3"],items:[
    ["Billetes en tu billetera","Base monetaria"],["Saldo de una cuenta corriente","M1"],["Saldo de una caja de ahorro","M2"],["Un plazo fijo a 30 días","M3"]]}]},
 {lead:"La inflación es el aumento generalizado y sostenido de los precios. Argentina es uno de los casos de inflación crónica más estudiados del mundo.",
  html:`<h3>Cómo se mide</h3><p>Con la variación del IPC (Índice de Precios al Consumidor) que publica el INDEC cada mes, con canastas regionales. Además están el IPIM (mayoristas) y el índice del costo de la construcción.</p>
  <h3>Causas, según distintas escuelas</h3>
  <ul><li><b>Monetaria:</b> emisión de dinero por encima del crecimiento de la demanda de dinero, típicamente para financiar déficit fiscal.</li>
  <li><b>De costos:</b> suba de salarios, tarifas o del tipo de cambio que se traslada a precios.</li>
  <li><b>Inercial:</b> contratos, salarios y precios que se indexan con la inflación pasada.</li>
  <li><b>De expectativas:</b> si todos esperan inflación, remarcan por adelantado.</li></ul>
  <h3>Efectos</h3>
  <ul><li>Pérdida de poder adquisitivo de salarios y jubilaciones.</li><li>Distorsión de precios relativos y dificultad para planificar.</li>
  <li>El <b>impuesto inflacionario</b>: quien tiene pesos pierde valor y el emisor gana (señoreaje).</li>
  <li><b>Distorsión contable:</b> los estados contables en moneda histórica dejan de ser comparables. Por eso las normas contables (hoy la RT 54, que absorbió a la antigua RT 6) exigen el ajuste por inflación (Módulo 14) y el ajuste impositivo en Ganancias (Módulo 21).</li></ul>
  <div class="note"><b>Efecto Olivera-Tanzi.</b> Descripto por el economista argentino Julio Olivera (y luego por Vito Tanzi): con inflación alta, el Estado cobra los impuestos con atraso y recauda menos en términos reales, lo que agranda el déficit.</div>`,
  ex:[{type:"tf",items:[
   ["La inflación beneficia a quienes tienen deudas en pesos a tasa fija","Verdadero","Devuelven pesos que valen menos."],
   ["Si los precios suben 2% un solo mes por una suba de tarifas y después se estabilizan, eso es inflación sostenida","Falso","Es un salto de precios puntual."],
   ["Con inflación alta, los estados contables en moneda histórica pierden comparabilidad","Verdadero"],
   ["El efecto Olivera-Tanzi aumenta la recaudación real","Falso","La reduce, porque el impuesto se cobra con pesos depreciados."],
   ["La inflación es un impuesto implícito sobre quienes tienen dinero en efectivo","Verdadero"]]}]},
 {lead:"El Estado influye en la actividad económica con dos grandes palancas: el presupuesto (política fiscal) y el dinero y las tasas (política monetaria).",
  html:`<h3>Política fiscal</h3>
  <p>Se maneja con el gasto público y los impuestos. Una política <b>expansiva</b> (más gasto o menos impuestos) estimula la demanda; una <b>contractiva</b>, la enfría. El resultado fiscal puede ser:</p>
  <ul><li><b>Primario:</b> ingresos menos gastos, sin contar los intereses de la deuda.</li><li><b>Financiero:</b> después de pagar intereses.</li></ul>
  <p>El déficit se financia con deuda o con emisión monetaria (lo que suele generar inflación).</p>
  <h3>Multiplicador del gasto</h3>
  <p>Un peso de gasto genera ingresos que vuelven a gastarse. Si la propensión marginal a consumir es c, el multiplicador simple es 1 / (1 − c). Con c = 0,8, el multiplicador es 5.</p>
  <h3>Política monetaria</h3>
  <p>El banco central controla la cantidad de dinero o la tasa de interés. Bajar la tasa abarata el crédito y estimula consumo e inversión; subirla frena la demanda y la inflación, y hace más atractivo ahorrar en pesos.</p>
  <h3>Política cambiaria</h3>
  <p>Define el régimen de tipo de cambio: fijo, flotante, o intermedios (bandas, flotación administrada, crawling peg). Lo vemos en la próxima lección.</p>`,
  ex:[{type:"num",items:[{q:"Si la propensión marginal a consumir es 0,75, ¿cuál es el multiplicador simple del gasto?",a:4},{q:"Con ese multiplicador, ¿cuánto aumenta el PBI si el gasto público sube $ 100.000 millones? (en millones)",a:400000,u:"millones"},{q:"Ingresos $ 1.000, gastos primarios $ 950, intereses $ 120. ¿Resultado financiero? (con signo)",a:-70}]},
   {type:"pick",title:"¿Expansiva o contractiva?",options:["Expansiva","Contractiva"],items:[["El BCRA baja la tasa de referencia","Expansiva"],["Se reduce el IVA","Expansiva"],["Se recortan obras públicas","Contractiva"],["Se suben los encajes bancarios","Contractiva"]]}]},
 {lead:"El tipo de cambio es el precio de una moneda extranjera. En Argentina es una de las variables que más afectan a las empresas.",
  html:`<h3>Balanza de pagos</h3>
  <ul><li><b>Cuenta corriente:</b> comercio de bienes y servicios, rentas (intereses, utilidades) y transferencias.</li>
  <li><b>Cuenta capital y financiera:</b> inversiones directas, préstamos, compra de activos.</li>
  <li>La variación de <b>reservas internacionales</b> del BCRA cierra la balanza.</li></ul>
  <h3>Tipo de cambio nominal y real</h3>
  <p>El <b>nominal</b> es cuántos pesos cuesta un dólar. El <b>real</b> ajusta por la inflación de ambos países: si el dólar sube 30% pero la inflación local es 50% y la de EE. UU. 3%, el peso en realidad se <b>apreció</b> en términos reales y el país se encareció.</p>
  <div class="formula">TCR = TCN × P* / P</div>
  <h3>Efectos de una devaluación</h3>
  <ul><li>Abarata las exportaciones y encarece las importaciones.</li><li>Puede trasladarse a precios (<i>pass-through</i>).</li>
  <li>Para la contabilidad: genera diferencias de cambio en activos y pasivos en moneda extranjera (Módulo 13).</li></ul>
  <h3>Comercio exterior</h3>
  <p>Los derechos de exportación (retenciones) y de importación los cobra la Aduana (dentro de ARCA). Las operaciones se rigen por el Código Aduanero (Ley 22.415).</p>`,
  ex:[{type:"num",items:[
   {q:"Una empresa debe US$ 10.000. El tipo de cambio pasa de $ 1.000 a $ 1.200. ¿Cuál es la diferencia de cambio en pesos? (pérdida, sin signo)",a:2000000,u:"$"},
   {q:"El tipo de cambio nominal sube 20%, la inflación local es 30% y la externa 0%. ¿Cuál es la variación del tipo de cambio real en %? (con signo, dos decimales)",a:-7.69,u:"%",tol:0.02,hint:"1,20 / 1,30 − 1"}]},
   {type:"tf",items:[["Una devaluación favorece a los exportadores","Verdadero"],["Las reservas del BCRA aumentan cuando el Banco Central vende dólares","Falso"],["Los intereses que paga el país por su deuda externa se registran en la cuenta corriente","Verdadero","Se registran como renta de la inversión."]]}]},
 {lead:"El INDEC produce las estadísticas oficiales que vas a usar como contador: IPC, salarios, empleo, pobreza y actividad.",
  html:`<h3>Mercado de trabajo (Encuesta Permanente de Hogares, EPH)</h3>
  <ul><li><b>Tasa de actividad:</b> población económicamente activa (ocupados + desocupados) / población total.</li>
  <li><b>Tasa de empleo:</b> ocupados / población total.</li>
  <li><b>Tasa de desocupación:</b> desocupados / población económicamente activa. Un desocupado es alguien que no trabaja y busca activamente trabajo.</li>
  <li><b>Informalidad:</b> asalariados sin descuento jubilatorio. Es un tema central para la liquidación de sueldos y la seguridad social (Módulo 22).</li></ul>
  <h3>Pobreza e indigencia</h3>
  <p>Se miden por ingresos: un hogar es <b>indigente</b> si no cubre la Canasta Básica Alimentaria (CBA) y <b>pobre</b> si no cubre la Canasta Básica Total (CBT), que suma bienes y servicios no alimentarios. Se calculan por adulto equivalente.</p>
  <h3>Otros indicadores útiles</h3>
  <ul><li><b>EMAE:</b> estimador mensual de actividad económica.</li><li><b>Índice de salarios:</b> evolución de salarios registrados y no registrados.</li>
  <li><b>Coeficiente de Gini:</b> desigualdad del ingreso, entre 0 (igualdad total) y 1 (máxima desigualdad).</li></ul>`,
  ex:[{type:"num",items:[
   {q:"Población 1.000, ocupados 420, desocupados 30. ¿Tasa de desocupación en %? (dos decimales)",a:6.67,u:"%",tol:0.02,hint:"30 / (420 + 30)"},
   {q:"Con los mismos datos, ¿tasa de actividad en %?",a:45,u:"%",tol:0.05},
   {q:"Un hogar necesita $ 900.000 para la CBT y $ 400.000 para la CBA. Gana $ 650.000. ¿Es pobre? Respondé 1 si es pobre y 0 si no.",a:1,tol:0}]}]},
 {lead:"Entender la historia económica argentina explica por qué las normas contables e impositivas del país son como son.",
  html:`<div class="tw"><table><thead><tr><th>Período</th><th>Modelo</th><th>Rasgos</th></tr></thead><tbody>
  <tr><td class="mono">1880 – 1930</td><td><b>Agroexportador</b></td><td>Exportación de carnes y granos a Europa, inmigración masiva, ferrocarriles con capital británico.</td></tr>
  <tr><td class="mono">1930 – 1976</td><td><b>Industrialización por sustitución de importaciones</b></td><td>Tras la crisis de 1930: industria orientada al mercado interno, mayor rol del Estado, creación del BCRA (1935). Ciclos de “stop and go” por falta de divisas.</td></tr>
  <tr><td class="mono">1976 – 1983</td><td><b>Apertura y endeudamiento</b></td><td>Reforma financiera de 1977, apertura comercial, fuerte endeudamiento externo. Crisis de la deuda de 1982.</td></tr>
  <tr><td class="mono">1983 – 1990</td><td><b>Inestabilidad</b></td><td>Plan Austral (1985). Hiperinflación de 1989 y 1990.</td></tr>
  <tr><td class="mono">1991 – 2001</td><td><b>Convertibilidad</b></td><td>Ley 23.928: 1 peso = 1 dólar, prohibición de indexar. Privatizaciones. Termina con la crisis de 2001 y la devaluación de enero de 2002.</td></tr>
  <tr><td class="mono">2002 – hoy</td><td><b>Posconvertibilidad</b></td><td>Pesificación, recuperación con alto precio de las materias primas, regreso de la inflación alta, controles de cambio en distintos períodos, reestructuraciones de deuda y programas de estabilización.</td></tr></tbody></table></div>
  <div class="note"><b>Huella contable.</b> La Convertibilidad prohibió la indexación y por eso el ajuste por inflación contable se suspendió desde 1995 (con una breve vuelta en 2002 y 2003). Recién se restableció con la Ley 27.468 (2018) y la Resolución JG 539/18 de la FACPCE, cuando la inflación acumulada de tres años superó el 100%.</div>`,
  ex:[{type:"order",title:"Ordená los períodos de la historia económica argentina",items:["Modelo agroexportador","Industrialización por sustitución de importaciones","Reforma financiera y endeudamiento externo","Hiperinflación de 1989","Convertibilidad","Crisis de 2001 y salida de la Convertibilidad"]},
   {type:"tf",items:[["La Ley de Convertibilidad prohibía la indexación de precios y contratos","Verdadero"],["El BCRA se creó durante el modelo agroexportador, antes de 1930","Falso","Se creó en 1935."]]}]},
],
eval:[
 {q:"PBI por el método del gasto:",o:["C + I + G + X − M","C + I − G","Sueldos + impuestos","X − M"],a:0},
 {q:"El PBI real se diferencia del nominal porque…",o:["Incluye la economía informal","Elimina el efecto de los precios","Se mide en dólares","Incluye importaciones"],a:1},
 {q:"Con un encaje del 10%, el multiplicador bancario máximo es…",o:["1","5","10","100"],a:2},
 {q:"¿Qué agregado incluye los plazos fijos?",o:["Base monetaria","M1","M2","M3"],a:3},
 {q:"El efecto Olivera-Tanzi describe…",o:["La caída de la recaudación real con inflación alta","La suba de exportaciones","El multiplicador del gasto","El tipo de cambio real"],a:0},
 {q:"El resultado primario excluye…",o:["Los impuestos","Los intereses de la deuda","Los sueldos públicos","Las jubilaciones"],a:1},
 {q:"Una devaluación, en principio,…",o:["Encarece las exportaciones","Abarata las importaciones","Abarata las exportaciones en moneda extranjera","No tiene efectos"],a:2},
 {q:"La tasa de desocupación se calcula sobre…",o:["La población total","La población económicamente activa","Los ocupados","Los mayores de 65"],a:1},
 {q:"Un hogar es pobre según el INDEC si sus ingresos no cubren…",o:["La CBA","La CBT","El salario mínimo","El IPC"],a:1},
 {q:"¿Qué norma restableció el ajuste por inflación contable en 2018?",o:["Ley 23.928","Ley 27.468 y Res. JG 539/18 de la FACPCE","Ley 19.550","RT 37"],a:1},
]};
