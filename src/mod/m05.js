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
  <p>En Argentina, el INDEC publica las cuentas nacionales trimestrales. El IVA, justamente, es un impuesto sobre el valor agregado (Módulo 20).</p>
  <h3>Paso a paso: el mismo PBI medido de tres formas</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Una economía muy simple: el productor vende trigo por $ 100 al molino, el molino vende harina por $ 250 a la panadería y la panadería vende pan a los hogares por $ 600.
  <div class="tw"><table><thead><tr><th>Etapa</th><th class="r">Vende</th><th class="r">Compró a otros</th><th class="r">Valor agregado</th></tr></thead><tbody>
  <tr><td>Productor</td><td class="r num">100</td><td class="r num">0</td><td class="r num">100</td></tr>
  <tr><td>Molino</td><td class="r num">250</td><td class="r num">100</td><td class="r num">150</td></tr>
  <tr><td>Panadería</td><td class="r num">600</td><td class="r num">250</td><td class="r num">350</td></tr>
  <tr><td><b>Total</b></td><td class="r num">950</td><td></td><td class="r num"><b>600</b></td></tr></tbody></table></div>
  <ol><li><b>Producción:</b> suma de valores agregados = 600.</li><li><b>Gasto:</b> el único bien final es el pan, que compran los hogares: C = 600.</li><li><b>Ingreso:</b> esos 600 se reparten como sueldos, ganancias, alquileres e intereses de las tres empresas.</li></ol>
  Si sumaras todas las ventas (950) contarías el trigo tres veces: por eso solo cuentan los bienes <b>finales</b>.</div>
  <div class="ejr"><b>Ejemplo resuelto · nominal y real</b>Año 1: se producen 10 panes a $ 60. Año 2: 11 panes a $ 90.
  <ol><li>PBI nominal: año 1 = 600; año 2 = 990. Creció 65%… pero casi todo es suba de precios.</li><li>PBI real (a precios del año 1): año 2 = 11 × 60 = 660. Creció 660 / 600 − 1 = <b>10%</b>: esa es la producción de verdad.</li><li>Deflactor del año 2: 990 / 660 × 100 = 150. Los precios subieron 50%.</li><li>Control: 1,65 / 1,50 = 1,10 ✔.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Sumar los bienes intermedios (doble conteo).</li><li>Restar las importaciones dos veces o sumarlas.</li><li>Concluir que la economía creció mirando solo el PBI nominal.</li></ul></div>
  ${CAMPUS.vid([["Qué es el PBI, explicado fácil","que es el pbi explicacion facil"],["PBI por el método del gasto y del valor agregado","pbi metodo del gasto valor agregado ingreso explicacion"],["PBI nominal, real y deflactor","pbi nominal y real deflactor ejemplo"]])}`,
  ex:[{type:"num",items:[
   {q:"C = 700, I = 150, G = 200, X = 180, M = 160. ¿Cuál es el PBI?",a:1070,ex:"700 + 150 + 200 + (180 − 160) = 1.070."},
   {q:"Un productor vende trigo por $ 100 al molino; el molino vende harina por $ 250 a la panadería; la panadería vende pan por $ 600. ¿Cuál es el valor agregado total?",a:600,u:"$",hint:"Es igual al valor del bien final.",ex:"Valor agregado: trigo 100 + molino (250 − 100) 150 + panadería (600 − 250) 350 = 600. Igual al valor del pan."},
   {q:"El PBI nominal creció 60% y los precios 50%. ¿Cuánto creció el PBI real, en %? (dos decimales)",a:6.67,u:"%",tol:0.02,hint:"1,60 / 1,50 − 1",ex:"1,60 / 1,50 = 1,0667 → 6,67% real."},{q:"Año 1: 10 panes a $ 60. Año 2: 11 panes a $ 90. ¿Cuánto creció el PBI real (a precios del año 1), en %?",a:10,u:"%",tol:0.05,hint:"Año 2 a precios del año 1: 11 × 60",ex:"Real año 1 = 600; real año 2 = 660. 660 / 600 − 1 = 10%."}]}]},
 {lead:"El dinero es lo que se acepta para pagar. El Banco Central regula cuánto hay y los bancos lo multiplican al prestar.",
  html:`<h3>Funciones del dinero</h3><ul><li>Medio de cambio.</li><li>Unidad de cuenta.</li><li>Reserva de valor (la que se pierde con la inflación).</li></ul>
  <h3>Agregados monetarios</h3>
  <ul><li><b>Base monetaria:</b> billetes y monedas en circulación más los depósitos de los bancos en el BCRA.</li>
  <li><b>M1:</b> circulante en poder del público más depósitos a la vista (cuentas corrientes).</li>
  <li><b>M2:</b> M1 más cajas de ahorro. <b>M3:</b> M2 más plazos fijos y otros depósitos.</li></ul>
  <h3>Creación de dinero bancario</h3>
  <p>Los bancos guardan una parte de los depósitos como encaje y prestan el resto, que vuelve a depositarse. Con un encaje del 20%, un depósito inicial de $ 1.000 puede generar hasta 1.000 / 0,20 = $ 5.000 de depósitos totales (multiplicador = 1 / encaje).</p>
  <h3>El BCRA</h3>
  <p>Creado en 1935. Según su Carta Orgánica (Ley 24.144, con reformas), tiene como finalidad promover la estabilidad monetaria y financiera, y con ella el empleo y el desarrollo. Sus herramientas: emisión, tasas de interés de referencia, encajes, operaciones de mercado abierto y regulación del mercado de cambios. También supervisa a las entidades financieras.</p>
  <h3>Paso a paso: cómo los bancos “multiplican” el dinero</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Encaje del 20%. Alguien deposita $ 1.000.
  <div class="tw"><table><thead><tr><th>Ronda</th><th class="r">Depósito</th><th class="r">Encaje (20%)</th><th class="r">Préstamo (80%)</th></tr></thead><tbody>
  <tr><td>1</td><td class="r num">1.000</td><td class="r num">200</td><td class="r num">800</td></tr>
  <tr><td>2</td><td class="r num">800</td><td class="r num">160</td><td class="r num">640</td></tr>
  <tr><td>3</td><td class="r num">640</td><td class="r num">128</td><td class="r num">512</td></tr>
  <tr><td>…</td><td class="r num">…</td><td class="r num">…</td><td class="r num">…</td></tr>
  <tr><td><b>Total</b></td><td class="r num"><b>5.000</b></td><td class="r num">1.000</td><td class="r num">4.000</td></tr></tbody></table></div>
  <ol><li>El banco guarda 200 y presta 800.</li><li>Quien recibe el préstamo lo gasta y el vendedor lo deposita en un banco: aparece un depósito nuevo de 800.</li><li>Se repite: cada ronda es el 80% de la anterior.</li><li>La suma de todos los depósitos tiende a 1.000 / 0,20 = <b>5.000</b>. Se frena cuando todo el depósito original quedó como encaje (200 + 160 + 128 + … = 1.000).</li></ol>
  Es un máximo teórico: en la realidad la gente se queda con efectivo y los bancos no prestan todo, así que el multiplicador es menor.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Multiplicar por el encaje en lugar de dividir.</li><li>Creer que el BCRA es el único que crea dinero: los bancos crean dinero bancario al prestar.</li></ul></div>
  ${CAMPUS.vid([["Funciones del dinero","funciones del dinero explicacion"],["Agregados monetarios M1, M2 y M3","agregados monetarios m1 m2 m3 explicacion"],["Multiplicador bancario y encaje","multiplicador bancario encaje explicacion ejemplo"],["Qué hace un banco central","que hace un banco central explicacion"]])}`,
  ex:[{type:"num",items:[{q:"Con un encaje del 25%, ¿cuál es el multiplicador bancario máximo?",a:4,ex:"1 / 0,25 = 4."},{q:"Con ese encaje, un depósito inicial de $ 2.000 puede generar hasta ¿cuántos pesos de depósitos totales?",a:8000,u:"$",ex:"2.000 × 4 = 8.000."},{q:"Encaje 20% y depósito inicial de $ 1.000. ¿Cuánto presta el banco en la primera ronda?",a:800,u:"$",hint:"Guarda el 20% y presta el resto.",ex:"Guarda 200 de encaje y presta 1.000 − 200 = 800."}]},
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
  <div class="note"><b>Efecto Olivera-Tanzi.</b> Descripto por el economista argentino Julio Olivera (y luego por Vito Tanzi): con inflación alta, el Estado cobra los impuestos con atraso y recauda menos en términos reales, lo que agranda el déficit.</div>
  <h3>Ejemplos resueltos: quién gana y quién pierde</h3>
  <div class="ejr"><b>El que tiene efectivo pierde</b>Tenés $ 100.000 guardados un año y la inflación es 40%.
  <ol><li>Lo que antes costaba $ 100.000 ahora cuesta $ 140.000.</li><li>Tus $ 100.000 compran lo que antes valía 100.000 / 1,40 = $ 71.429.</li><li>Perdiste <b>$ 28.571</b> de poder de compra, sin que nadie te cobre nada visible: eso es el impuesto inflacionario.</li></ol></div>
  <div class="ejr"><b>El que debe a tasa fija gana</b>Debés $ 1.000.000 a devolver en un año sin intereses, y la inflación es 50%.
  <ol><li>Devolvés $ 1.000.000, que valen 1.000.000 / 1,50 = $ 666.667 en pesos del inicio.</li><li>El acreedor pierde un tercio del valor real; vos “ganás” esa diferencia.</li></ol></div>
  <div class="ejr"><b>Efecto Olivera-Tanzi con números</b>Un impuesto de $ 1.000 se genera hoy y se cobra 3 meses después, con inflación del 10% mensual.
  <ol><li>Inflación de los 3 meses: 1,1³ = 1,331.</li><li>Valor real de lo cobrado: 1.000 / 1,331 = <b>$ 751</b>.</li><li>El Estado pierde casi 25% de lo que tenía que recaudar solo por el atraso.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Llamar inflación a una suba de un solo precio o de un solo mes.</li><li>Calcular la pérdida de poder de compra como 40% de 100.000 (sería 40.000): es 100.000 − 100.000 / 1,40.</li></ul></div>
  ${CAMPUS.vid([["Qué es la inflación, explicado fácil","que es la inflacion explicacion facil"],["Causas de la inflación","causas de la inflacion explicacion economia"],["Impuesto inflacionario y señoreaje","impuesto inflacionario señoreaje explicacion"],["Efecto Olivera-Tanzi","efecto olivera tanzi explicacion"]])}`,
  ex:[{type:"tf",items:[
   ["La inflación beneficia a quienes tienen deudas en pesos a tasa fija","Verdadero","Devuelven pesos que valen menos."],
   ["Si los precios suben 2% un solo mes por una suba de tarifas y después se estabilizan, eso es inflación sostenida","Falso","Es un salto de precios puntual."],
   ["Con inflación alta, los estados contables en moneda histórica pierden comparabilidad","Verdadero"],
   ["El efecto Olivera-Tanzi aumenta la recaudación real","Falso","La reduce, porque el impuesto se cobra con pesos depreciados."],
   ["La inflación es un impuesto implícito sobre quienes tienen dinero en efectivo","Verdadero","Su poder de compra cae sin que paguen nada en forma visible."]]},
   {type:"num",title:"Con números",items:[{q:"Tenés $ 100.000 en efectivo durante un año con inflación del 40%. ¿Cuánto poder de compra perdiste, en pesos del inicio? (sin decimales)",a:28571,u:"$",tol:1,hint:"100.000 − 100.000 / 1,40",ex:"100.000 / 1,40 = 71.429 de poder de compra. Perdiste 28.571."},{q:"Un impuesto de $ 1.000 se cobra 3 meses después, con inflación del 10% mensual. ¿Cuánto vale en pesos de la fecha del hecho? (sin decimales)",a:751,u:"$",tol:1,hint:"1.000 / 1,1³",ex:"1,1³ = 1,331. 1.000 / 1,331 = 751: el Estado pierde casi 25% (efecto Olivera-Tanzi)."}]}]},
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
  <p>Define el régimen de tipo de cambio: fijo, flotante, o intermedios (bandas, flotación administrada, crawling peg). Lo vemos en la próxima lección.</p>
  <h3>Paso a paso: el multiplicador ronda por ronda</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>El Estado gasta $ 100 más en obras. La propensión marginal a consumir es 0,8: de cada peso que recibe la gente, gasta 80 centavos.
  <ol><li>Ronda 1: los constructores reciben 100.</li><li>Ronda 2: gastan el 80%: 80, que es ingreso de los comercios.</li><li>Ronda 3: los comercios gastan el 80% de 80: 64.</li><li>Ronda 4: 51,2… y así sigue, cada vez menos.</li><li>Suma total: 100 / (1 − 0,8) = 100 × 5 = <b>500</b>.</li></ol>
  Cuanto mayor es la parte del ingreso que se gasta (c), mayor es el multiplicador.</div>
  <div class="ejr"><b>Ejemplo resuelto · resultado primario y financiero</b>Ingresos 1.000; gastos sin intereses 950; intereses de la deuda 120.
  <ol><li>Primario: 1.000 − 950 = <b>+50</b> (superávit primario).</li><li>Financiero: 50 − 120 = <b>−70</b> (déficit financiero).</li><li>Lectura: el Estado cubre sus gastos corrientes, pero no le alcanza para pagar todos los intereses.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Calcular el multiplicador como 1 / c en lugar de 1 / (1 − c).</li><li>Incluir los intereses en el resultado primario.</li><li>Pensar que bajar la tasa de interés es contractivo.</li></ul></div>
  ${CAMPUS.vid([["Política fiscal y monetaria","politica fiscal y politica monetaria explicacion"],["Multiplicador del gasto keynesiano","multiplicador del gasto keynesiano explicacion ejemplo"],["Déficit primario y financiero","deficit primario y deficit financiero explicacion"]])}`,
  ex:[{type:"num",items:[{q:"Si la propensión marginal a consumir es 0,75, ¿cuál es el multiplicador simple del gasto?",a:4,ex:"1 / (1 − 0,75) = 1 / 0,25 = 4."},{q:"Con ese multiplicador, ¿cuánto aumenta el PBI si el gasto público sube $ 100.000 millones? (en millones)",a:400000,u:"millones",ex:"100.000 × 4 = 400.000 millones."},{q:"Ingresos $ 1.000, gastos primarios $ 950, intereses $ 120. ¿Resultado financiero? (con signo)",a:-70,ex:"Primario: 1.000 − 950 = 50 (superávit). Financiero: 50 − 120 = −70 (déficit)."},{q:"Propensión marginal a consumir 0,8. El gasto sube $ 100. ¿Cuánto se gasta en la tercera ronda?",a:64,u:"$",hint:"100 → 80 → ?",ex:"Ronda 1: 100. Ronda 2: 0,8 × 100 = 80. Ronda 3: 0,8 × 80 = 64."}]},
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
  <p>Los derechos de exportación (retenciones) y de importación los cobra la Aduana (dentro de ARCA). Las operaciones se rigen por el Código Aduanero (Ley 22.415).</p>
  <h3>Paso a paso: diferencia de cambio y tipo de cambio real</h3>
  <div class="ejr"><b>Ejemplo resuelto · diferencia de cambio</b>Una empresa debe US$ 10.000. El dólar pasa de $ 1.000 a $ 1.200.
  <ol><li>Deuda en pesos antes: 10.000 × 1.000 = 10.000.000.</li><li>Deuda en pesos después: 10.000 × 1.200 = 12.000.000.</li><li>Diferencia: <b>2.000.000 de pérdida</b>. Si en vez de deber tuviera US$ 10.000 a cobrar, sería una ganancia por el mismo importe.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · tipo de cambio real</b>El dólar sube de $ 1.000 a $ 1.300 (+30%), la inflación argentina es 50% y la de EE. UU. 3%.
  <ol><li>Factores: dólar 1,30; precios externos 1,03; precios internos 1,50.</li><li>TCR = 1,30 × 1,03 / 1,50 = 0,8927.</li><li>Variación: <b>−10,73%</b>. Aunque el dólar subió, los precios locales subieron más: el país se <b>encareció</b> en dólares y pierde competitividad.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Pensar que si el dólar sube, siempre hay devaluación real.</li><li>Registrar la diferencia de cambio de una deuda como ganancia cuando el dólar sube.</li><li>Confundir cuenta corriente (comercio, rentas) con cuenta financiera (préstamos, inversiones).</li></ul></div>
  ${CAMPUS.vid([["Balanza de pagos, explicación fácil","balanza de pagos explicacion facil"],["Tipo de cambio nominal y real","tipo de cambio real explicacion ejemplo"],["Efectos de una devaluación","devaluacion efectos explicacion economia"]])}`,
  ex:[{type:"num",items:[
   {q:"Una empresa debe US$ 10.000. El tipo de cambio pasa de $ 1.000 a $ 1.200. ¿Cuál es la diferencia de cambio en pesos? (pérdida, sin signo)",a:2000000,u:"$",ex:"10.000 × (1.200 − 1.000) = 2.000.000 de pérdida: la deuda en pesos creció."},
   {q:"El tipo de cambio nominal sube 20%, la inflación local es 30% y la externa 0%. ¿Cuál es la variación del tipo de cambio real en %? (con signo, dos decimales)",a:-7.69,u:"%",tol:0.02,hint:"1,20 / 1,30 − 1",ex:"1,20 × 1,00 / 1,30 = 0,9231 → −7,69%. El peso se apreció en términos reales."},{q:"El dólar sube 30%, la inflación local es 50% y la de EE. UU. 3%. ¿Variación del tipo de cambio real en %? (con signo, dos decimales)",a:-10.73,u:"%",tol:0.02,hint:"1,30 × 1,03 / 1,50 − 1",ex:"1,339 / 1,50 = 0,8927 → −10,73%. El país se encareció en dólares."}]},
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
  <li><b>Coeficiente de Gini:</b> desigualdad del ingreso, entre 0 (igualdad total) y 1 (máxima desigualdad).</li></ul>
  <h3>Paso a paso: las tasas del mercado de trabajo</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Población 1.000: 420 ocupados, 30 desocupados (no trabajan y buscan) y 550 inactivos (no trabajan ni buscan: estudiantes, jubilados, etc.).
  <ol><li>Población económicamente activa (PEA) = ocupados + desocupados = 450.</li><li>Tasa de actividad = 450 / 1.000 = <b>45%</b>.</li><li>Tasa de empleo = 420 / 1.000 = <b>42%</b>.</li><li>Tasa de desocupación = 30 / <b>450</b> = <b>6,67%</b>. Se divide por la PEA, no por la población total.</li></ol>
  Dato curioso: si 20 desocupados se cansan y dejan de buscar, pasan a ser inactivos y la desocupación <b>baja</b>, aunque nadie consiguió trabajo.</div>
  <div class="ejr"><b>Ejemplo resuelto · pobreza</b>Números de ejemplo: la CBT por adulto equivalente es $ 300.000 y un hogar equivale a 3 adultos.
  <ol><li>CBT del hogar = 300.000 × 3 = $ 900.000.</li><li>Si el hogar gana $ 650.000, no la cubre: es <b>pobre</b>.</li><li>Si la CBA del hogar es $ 400.000, sí la cubre: <b>no es indigente</b>.</li></ol>
  El “adulto equivalente” existe porque un nene no necesita lo mismo que un adulto. Los valores reales los publica el INDEC cada mes.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Calcular la desocupación sobre la población total.</li><li>Contar como desocupado a quien no trabaja pero tampoco busca.</li></ul></div>
  ${CAMPUS.vid([["Cómo se calcula la tasa de desocupación","tasa de desocupacion como se calcula poblacion economicamente activa"],["Línea de pobreza y canasta básica","linea de pobreza canasta basica total explicacion"],["Coeficiente de Gini","coeficiente de gini explicacion facil"]])}`,
  ex:[{type:"num",items:[
   {q:"Población 1.000, ocupados 420, desocupados 30. ¿Tasa de desocupación en %? (dos decimales)",a:6.67,u:"%",tol:0.02,hint:"30 / (420 + 30)",ex:"PEA = 420 + 30 = 450. 30 / 450 = 6,67%."},
   {q:"Con los mismos datos, ¿tasa de actividad en %?",a:45,u:"%",tol:0.05,ex:"PEA / población = 450 / 1.000 = 45%."},{q:"Con los mismos datos, ¿tasa de empleo en %?",a:42,u:"%",tol:0.05,hint:"Ocupados / población total",ex:"420 / 1.000 = 42%."},
   {q:"Un hogar necesita $ 900.000 para la CBT y $ 400.000 para la CBA. Gana $ 650.000. ¿Es pobre? Respondé 1 si es pobre y 0 si no.",a:1,tol:0,ex:"Cubre la CBA (no es indigente) pero no la CBT (650.000 &lt; 900.000): es pobre."}]}]},
 {lead:"Entender la historia económica argentina explica por qué las normas contables e impositivas del país son como son.",
  html:`<div class="tw"><table><thead><tr><th>Período</th><th>Modelo</th><th>Rasgos</th></tr></thead><tbody>
  <tr><td class="mono">1880 – 1930</td><td><b>Agroexportador</b></td><td>Exportación de carnes y granos a Europa, inmigración masiva, ferrocarriles con capital británico.</td></tr>
  <tr><td class="mono">1930 – 1976</td><td><b>Industrialización por sustitución de importaciones</b></td><td>Tras la crisis de 1930: industria orientada al mercado interno, mayor rol del Estado, creación del BCRA (1935). Ciclos de “stop and go” por falta de divisas.</td></tr>
  <tr><td class="mono">1976 – 1983</td><td><b>Apertura y endeudamiento</b></td><td>Reforma financiera de 1977, apertura comercial, fuerte endeudamiento externo. Crisis de la deuda de 1982.</td></tr>
  <tr><td class="mono">1983 – 1990</td><td><b>Inestabilidad</b></td><td>Plan Austral (1985). Hiperinflación de 1989 y 1990.</td></tr>
  <tr><td class="mono">1991 – 2001</td><td><b>Convertibilidad</b></td><td>Ley 23.928: 1 peso = 1 dólar, prohibición de indexar. Privatizaciones. Termina con la crisis de 2001 y la devaluación de enero de 2002.</td></tr>
  <tr><td class="mono">2002 – hoy</td><td><b>Posconvertibilidad</b></td><td>Pesificación, recuperación con alto precio de las materias primas, regreso de la inflación alta, controles de cambio en distintos períodos, reestructuraciones de deuda y programas de estabilización.</td></tr></tbody></table></div>
  <div class="note"><b>Huella contable.</b> La Convertibilidad prohibió la indexación y por eso el ajuste por inflación contable se suspendió desde 1995 (con una breve vuelta en 2002 y 2003). Recién se restableció con la Ley 27.468 (2018) y la Resolución JG 539/18 de la FACPCE, cuando la inflación acumulada de tres años superó el 100%.</div>
  <div class="ejr"><b>Cómo estudiar esta lección</b>
  <ol><li>Aprendete los seis períodos en orden con una palabra clave cada uno: <b>exportar</b> (agroexportador), <b>fabricar</b> (sustitución), <b>endeudarse</b> (1976), <b>hiperinflación</b> (1989), <b>uno a uno</b> (Convertibilidad), <b>salida</b> (2002 en adelante).</li><li>Para cada período preguntate: ¿de dónde venían los dólares? ¿qué pasó con la inflación?</li><li>Conectalo con lo contable: la inflación explica el ajuste por inflación (Módulo 14) y las crisis cambiarias explican la importancia de las diferencias de cambio (Módulo 13).</li></ol></div>
  ${CAMPUS.vid([["Historia económica argentina: modelo agroexportador","historia economica argentina modelo agroexportador"],["Industrialización por sustitución de importaciones","industrializacion por sustitucion de importaciones argentina explicacion"],["La Convertibilidad, explicada","convertibilidad argentina 1991 explicacion"],["La crisis de 2001","crisis 2001 argentina explicacion economica"]])}`,
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
