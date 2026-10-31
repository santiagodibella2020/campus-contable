/* Módulo 11 · Cálculo financiero */
CAMPUS.content[11] = {
lessons:[
 {lead:"Con interés simple, los intereses se calculan siempre sobre el capital inicial. Es la lógica de un plazo fijo tradicional a un solo período.",
  html:`<div class="formula">I = C · i · n     ·     M = C · (1 + i · n)</div>
  <ul><li><b>C:</b> capital inicial. <b>M:</b> monto final. <b>I:</b> interés.</li><li><b>i:</b> tasa por período. <b>n:</b> cantidad de períodos, en la misma unidad que la tasa.</li></ul>
  <h3>Tasa anual y plazo en días</h3><p>En Argentina, los bancos expresan la tasa como <b>TNA</b> (tasa nominal anual) y usan año de <b>365 días</b>.</p>
  <div class="formula">I = C · TNA · días / 365</div>
  <p>Ejemplo: $ 100.000 a TNA 36% por 90 días → I = 100.000 × 0,36 × 90/365 = <b>$ 8.876,71</b>.</p>
  <h3>Despejes útiles</h3><ul><li>Capital: C = M / (1 + i·n).</li><li>Tasa: i = (M/C − 1) / n.</li><li>Plazo: n = (M/C − 1) / i.</li></ul>
  <h3>Paso a paso</h3>
  <div class="ejr"><b>Ejemplo resuelto 1 · plazo fijo</b>$ 500.000 a TNA 40% por 30 días.
  <ol><li>Paso la tasa a decimal: 40% = 0,40.</li><li>Como la tasa es anual y el plazo en días, el plazo se expresa en años: 30 / 365 = 0,08219.</li><li>I = 500.000 × 0,40 × 0,08219 = <b>16.438,36</b>.</li><li>Monto a retirar: 500.000 + 16.438,36 = 516.438,36.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto 2 · despejar la tasa</b>Depositaste $ 200.000 y en 6 meses retiraste $ 230.000.
  <ol><li>M / C = 230.000 / 200.000 = 1,15: ganaste 15% en total.</li><li>Como es simple, ese 15% se reparte en partes iguales entre los 6 meses: 15% / 6 = <b>2,5% mensual</b>.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Mezclar unidades: tasa anual con plazo en meses o días sin convertir.</li><li>Usar 360 días cuando el banco usa 365.</li><li>Olvidarse de sumar el capital para obtener el monto.</li></ul></div>
  ${CAMPUS.vid([["Interés simple desde cero (Matemáticas profe Alex)","matematicas profe alex interes simple"],["Interés simple: despejar capital, tasa y tiempo (Julioprofe)","julioprofe interes simple ejercicios"],["Cómo calcular un plazo fijo","como calcular interes plazo fijo tna dias 365"]])}`,
  ex:[{type:"num",items:[
   {q:"$ 500.000 a TNA 40% por 30 días. ¿Cuánto interés se gana?",a:16438.36,u:"$",tol:0.02,ex:"500.000 × 0,40 × 30 / 365 = 16.438,36."},
   {q:"¿Qué capital hay que depositar hoy para retirar $ 1.100.000 dentro de un año al 10% simple?",a:1000000,u:"$",ex:"C = 1.100.000 / (1 + 0,10 × 1) = 1.000.000."},
   {q:"Depositaste $ 200.000 y en 6 meses retiraste $ 230.000. ¿Qué tasa mensual simple ganaste, en %?",a:2.5,u:"%",tol:0.01,ex:"i = (230.000 / 200.000 − 1) / 6 = 0,15 / 6 = 0,025 → 2,5% mensual."}]}]},
 {lead:"Con interés compuesto, los intereses se suman al capital y generan nuevos intereses. Es la regla en casi todas las operaciones de más de un período.",
  html:`<div class="formula">M = C · (1 + i)ⁿ     ·     C = M / (1 + i)ⁿ</div>
  <p>Ejemplo: $ 100.000 al 3% mensual durante 12 meses → 100.000 × 1,03¹² = <b>$ 142.576,09</b>. Con interés simple habrían sido $ 136.000: la diferencia es el “interés sobre interés”.</p>
  <h3>Valor actual</h3><p>Traer un importe futuro a hoy se llama <b>actualizar</b> o <b>descontar</b>: C = M / (1+i)ⁿ. Es la base de toda valuación financiera: VAN, valor de un bono, valor de un crédito a largo plazo.</p>
  <h3>Calcular la tasa o el plazo</h3><ul><li>Tasa: i = (M/C)<sup>1/n</sup> − 1.</li><li>Plazo: n = ln(M/C) / ln(1+i).</li></ul>
  <h3>Simple contra compuesto, período por período</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>$ 100.000 al 10% por período, durante 3 períodos.
  <div class="tw"><table><thead><tr><th>Período</th><th class="r">Simple</th><th class="r">Compuesto</th></tr></thead><tbody>
  <tr><td>0</td><td class="r num">100.000</td><td class="r num">100.000</td></tr>
  <tr><td>1</td><td class="r num">110.000</td><td class="r num">110.000</td></tr>
  <tr><td>2</td><td class="r num">120.000</td><td class="r num">121.000</td></tr>
  <tr><td>3</td><td class="r num">130.000</td><td class="r num">133.100</td></tr></tbody></table></div>
  <ol><li>Simple: cada período se ganan 10.000 (10% del capital <b>inicial</b>).</li><li>Compuesto: el período 2 gana 10% de 110.000 = 11.000; el 3 gana 10% de 121.000 = 12.100. Los intereses ganan intereses.</li><li>En una sola cuenta: 100.000 × 1,1³ = 133.100.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · valor actual</b>¿Cuánto vale hoy cobrar $ 1.000.000 en 2 años si la tasa es 20% anual?
  <ol><li>Pregunta al revés: ¿cuánto tendría que depositar hoy para tener 1.000.000 en 2 años?</li><li>C = 1.000.000 / 1,2² = 1.000.000 / 1,44 = <b>694.444,44</b>.</li><li>Control: 694.444,44 × 1,2 × 1,2 = 1.000.000 ✔.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Multiplicar la tasa por n (eso es simple) en un problema compuesto.</li><li>Para sacar la tasa, dividir por n en lugar de sacar la raíz n-ésima.</li></ul></div>
  ${CAMPUS.vid([["Interés compuesto (Matemáticas profe Alex)","matematicas profe alex interes compuesto"],["Interés compuesto: despejar tasa y tiempo (Julioprofe)","julioprofe interes compuesto ejercicios"],["Valor actual y valor futuro","valor actual y valor futuro explicacion ejemplo"]])}`,
  ex:[{type:"num",items:[
   {q:"$ 100.000 al 3% mensual compuesto durante 12 meses. ¿Monto final?",a:142576.09,u:"$",tol:0.05,ex:"1,03¹² = 1,425761. × 100.000 = 142.576,09."},
   {q:"¿Cuánto vale hoy un cobro de $ 1.000.000 dentro de 2 años, si la tasa es 20% anual?",a:694444.44,u:"$",tol:0.05,hint:"1.000.000 / 1,2²",ex:"1,2² = 1,44. 1.000.000 / 1,44 = 694.444,44."},
   {q:"Una inversión de $ 400.000 se transformó en $ 576.000 en 2 años. ¿Tasa anual compuesta, en %?",a:20,u:"%",tol:0.01,hint:"(576/400)^(1/2) − 1",ex:"576 / 400 = 1,44. Raíz cuadrada (n = 2): 1,2 → 20%."}]}]},
 {lead:"Una misma tasa se puede expresar de muchas formas. Saber convertirlas es indispensable para comparar ofertas de bancos.",
  html:`<ul><li><b>TNA (tasa nominal anual):</b> la tasa “de vidriera”. No tiene en cuenta la capitalización.</li>
  <li><b>TEM (tasa efectiva mensual):</b> la que efectivamente rinde en un período de 30 días. TEM = TNA × 30/365.</li>
  <li><b>TEA (tasa efectiva anual):</b> lo que rinde en un año si reinvertís los intereses. TEA = (1 + TEM)<sup>365/30</sup> − 1.</li></ul>
  <p>Ejemplo: TNA 36% → TEM = 0,36 × 30/365 = 2,959% → TEA = 1,02959<sup>12,1667</sup> − 1 = <b>42,59%</b>.</p>
  <h3>Tasas equivalentes</h3><p>Dos tasas son equivalentes si producen el mismo monto en el mismo tiempo. Para pasar de una tasa efectiva a otra de distinto período:</p>
  <div class="formula">i₂ = (1 + i₁)^(período₂ / período₁) − 1</div>
  <p>Ejemplo: 4% mensual equivale a 1,04¹² − 1 = 60,10% anual. Y una TEA de 60% equivale a una tasa de 30 días de 1,60<sup>30/365</sup> − 1 = 3,94%.</p>
  <div class="note"><b>CFT.</b> En préstamos, el BCRA exige informar el <b>Costo Financiero Total</b>, que suma a la tasa los gastos, seguros, comisiones e impuestos. Es el número que hay que comparar entre bancos.</div>
  <h3>Paso a paso: de TNA a TEA y de vuelta</h3>
  <div class="ejr"><b>Ejemplo resuelto 1 · TNA → TEM → TEA</b>Un banco ofrece TNA 36% para plazos fijos de 30 días.
  <ol><li>TEM = 0,36 × 30 / 365 = 0,02959 → <b>2,959%</b> cada 30 días.</li><li>¿Cuántos períodos de 30 días tiene un año? 365 / 30 = 12,1667.</li><li>TEA = 1,02959<sup>12,1667</sup> − 1 = <b>42,59%</b>. Es más alta que la TNA porque se reinvierten los intereses.</li></ol>
  En la calculadora del celular: 1,02959 [xʸ] 12,1667 [=] y le restás 1.</div>
  <div class="ejr"><b>Ejemplo resuelto 2 · TEA → tasa de 30 días</b>Una TEA de 60%.
  <ol><li>Fracción de año: 30 / 365.</li><li>1,60<sup>30/365</sup> − 1 = <b>3,94%</b>.</li><li>Control: 1,0394<sup>12,1667</sup> ≈ 1,60 ✔.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Calcular la TEM como TNA / 12: los bancos usan 30/365.</li><li>Comparar préstamos por la TNA en vez de por el CFT.</li><li>Pasar de tasa mensual a anual multiplicando por 12: con tasas efectivas se compone (1,04¹² − 1), no se multiplica.</li></ul></div>
  ${CAMPUS.vid([["Tasa nominal y tasa efectiva","tasa nominal anual tasa efectiva anual explicacion"],["Tasas equivalentes, ejercicios","tasas equivalentes calculo financiero ejercicios"],["TNA, TEM y TEA en Argentina","tna tem tea plazo fijo argentina explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"TNA 36% para plazos de 30 días. ¿Cuál es la TEM, en %? (tres decimales)",a:2.959,u:"%",tol:0.002,ex:"0,36 × 30 / 365 = 0,02959 → 2,959%."},
   {q:"Con esa TEM, ¿cuál es la TEA, en %? (dos decimales)",a:42.59,u:"%",tol:0.02,ex:"1,02959^(365/30) − 1 = 1,02959^12,1667 − 1 = 42,59%."},
   {q:"¿Qué tasa anual efectiva equivale a 4% mensual efectivo? (en %, dos decimales)",a:60.10,u:"%",tol:0.02,ex:"1,04¹² − 1 = 60,10%."},
   {q:"Una tarjeta cobra 6% mensual efectivo. ¿Cuál es la tasa efectiva trimestral, en %? (dos decimales)",a:19.10,u:"%",tol:0.02,hint:"1,06³ − 1",ex:"1,06³ − 1 = 1,191016 − 1 = 19,10%."}]}]},
 {lead:"Descontar un documento es cobrarlo antes de su vencimiento a cambio de una quita. Es muy común con cheques de pago diferido y facturas de crédito.",
  html:`<h3>Descuento comercial</h3><p>La quita se calcula sobre el <b>valor nominal</b> del documento:</p>
  <div class="formula">D = N · d · n     ·     Valor efectivo = N · (1 − d · n)</div>
  <p>Ejemplo: un cheque de $ 1.000.000 a 60 días, tasa de descuento 30% anual → D = 1.000.000 × 0,30 × 60/365 = <b>$ 49.315,07</b>. Cobrás $ 950.684,93.</p>
  <h3>Tasa de descuento y tasa de interés</h3><p>La tasa de descuento se aplica sobre el valor final; la de interés, sobre el inicial. Por eso, para el mismo plazo, la tasa de interés equivalente es mayor:</p>
  <div class="formula">i = d / (1 − d · n)</div>
  <p>En el ejemplo: i = 0,30 / (1 − 0,30 × 60/365) = 31,56% anual.</p>
  <h3>Descuento racional</h3><p>Se calcula sobre el valor actual: D = N − N/(1 + i·n). Es el “correcto” desde el punto de vista financiero, pero en la práctica bancaria se usa el comercial.</p>
  <h3>Registración</h3><p>Al descontar un documento, la diferencia entre el nominal y lo cobrado es un costo financiero: <span class="mono">Banco + Intereses perdidos (o Descuentos cedidos) a Documentos a cobrar</span>.</p>
  <h3>Comercial contra racional, con el mismo cheque</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Cheque de $ 1.000.000 a 60 días, tasa 30% anual.
  <ol><li><b>Comercial</b> (sobre el nominal): D = 1.000.000 × 0,30 × 60/365 = 49.315,07. Cobrás <b>950.684,93</b>.</li><li><b>Racional</b> (sobre el valor actual): valor actual = 1.000.000 / (1 + 0,30 × 60/365) = 953.002,61. D = <b>46.997,39</b>.</li><li>El comercial te descuenta más: por eso la tasa de interés que realmente pagás (31,56%) es mayor que la tasa de descuento (30%).</li></ol>
  Asiento al descontar en forma comercial: Banco 950.684,93 + Intereses perdidos 49.315,07 a Valores a depositar (o Documentos a cobrar) 1.000.000.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Confundir la tasa de descuento con la tasa de interés.</li><li>Calcular el descuento sobre lo que cobrás en lugar de sobre el nominal (en el comercial).</li></ul></div>
  ${CAMPUS.vid([["Descuento comercial y racional","descuento comercial y descuento racional ejercicios"],["Descuento de cheques: cómo se calcula","descuento de cheques como se calcula tasa"]])}`,
  ex:[{type:"num",items:[
   {q:"Cheque de $ 1.000.000 a 60 días, tasa de descuento comercial 30% anual (365). ¿Cuánto se cobra?",a:950684.93,u:"$",tol:0.05,ex:"D = 1.000.000 × 0,30 × 60/365 = 49.315,07. Cobrás 1.000.000 − 49.315,07 = 950.684,93."},
   {q:"¿Qué tasa de interés anual simple equivale a esa operación? (en %, dos decimales)",a:31.56,u:"%",tol:0.02,ex:"i = 0,30 / (1 − 0,30 × 60/365) = 0,30 / 0,950685 = 31,56%."},
   {q:"Un pagaré de $ 500.000 a 90 días se descuenta al 24% anual (comercial, 365). ¿Monto del descuento?",a:29589.04,u:"$",tol:0.05,ex:"500.000 × 0,24 × 90 / 365 = 29.589,04."}]}]},
 {lead:"Una renta es una serie de pagos periódicos: cuotas de un préstamo, alquileres, aportes a un plan de ahorro.",
  html:`<h3>Renta vencida (pagos al final de cada período)</h3>
  <div class="formula">VA = c · [1 − (1+i)⁻ⁿ] / i     ·     VF = c · [(1+i)ⁿ − 1] / i</div>
  <p>Ejemplo: 12 cuotas mensuales de $ 10.000 al 2% mensual. Valor actual = 10.000 × 10,5753 = <b>$ 105.753,41</b>. Ese es el precio de contado equivalente.</p>
  <h3>Renta adelantada</h3><p>Si los pagos son al inicio de cada período (como el alquiler), se multiplica la vencida por (1 + i).</p>
  <h3>Perpetuidad</h3><p>Una renta infinita tiene un valor actual finito: <span class="mono">VA = c / i</span>. Se usa para valuar empresas o inmuebles que generan un flujo estable.</p>
  <div class="note"><b>En la hoja de cálculo.</b> Las funciones VA, VF, PAGO, TASA y NPER resuelven estos problemas. Por ejemplo, =VA(2%;12;-10000) devuelve 105.753,41.</div>
  <h3>Paso a paso: qué hace la fórmula de la renta</h3>
  <div class="ejr"><b>Ejemplo resuelto · trayendo cada cuota a hoy</b>3 cuotas anuales vencidas de $ 10.000 al 10%.
  <ol><li>Cuota 1: 10.000 / 1,1 = 9.090,91.</li><li>Cuota 2: 10.000 / 1,1² = 8.264,46.</li><li>Cuota 3: 10.000 / 1,1³ = 7.513,15.</li><li>Suma: <b>24.868,52</b>.</li><li>Con la fórmula: 10.000 × [1 − 1,1⁻³] / 0,1 = 10.000 × 2,486852 = 24.868,52 ✔. La fórmula es un atajo para no actualizar cuota por cuota.</li></ol></div>
  <div class="ejr"><b>Cómo calcular el factor en la calculadora</b>Para 12 cuotas al 2%:
  <ol><li>1,02 [xʸ] 12 = 1,268242. Su inversa (1,02⁻¹²) es 1 / 1,268242 = 0,788493.</li><li>1 − 0,788493 = 0,211507.</li><li>0,211507 / 0,02 = <b>10,5753</b>. Ese es el valor actual de cobrar $ 1 por mes durante 12 meses.</li><li>Por 10.000: 105.753,41.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Usar una tasa anual con cuotas mensuales.</li><li>Confundir VA (cuánto vale hoy) con VF (cuánto junto al final).</li><li>Olvidarse de multiplicar por (1 + i) cuando la renta es adelantada.</li></ul></div>
  ${CAMPUS.vid([["Anualidades o rentas: valor actual","anualidades valor presente ejercicio resuelto"],["Rentas: valor final","anualidad valor futuro ejercicio resuelto"],["Perpetuidades","perpetuidad valor actual finanzas explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"5 cuotas mensuales vencidas de $ 50.000 al 3% mensual. ¿Valor actual?",a:228985.36,u:"$",tol:0.05,ex:"Factor: [1 − 1,03⁻⁵] / 0,03 = 4,579707. × 50.000 = 228.985,36."},
   {q:"Ahorrás $ 10.000 por mes durante 12 meses al 2% mensual. ¿Cuánto tenés al final?",a:134120.90,u:"$",tol:0.05,ex:"Factor: [1,02¹² − 1] / 0,02 = 13,41209. × 10.000 = 134.120,90."},
   {q:"Un inmueble rinde un alquiler neto de $ 600.000 por año en forma perpetua. Con una tasa del 8% anual, ¿cuánto vale?",a:7500000,u:"$",ex:"Perpetuidad: 600.000 / 0,08 = 7.500.000."}]}]},
 {lead:"Un préstamo se devuelve en cuotas que combinan amortización de capital e interés. En Argentina predominan dos sistemas.",
  html:`<h3>Sistema francés (cuota constante)</h3>
  <div class="formula">c = V · i / [1 − (1+i)⁻ⁿ]</div>
  <p>La cuota es fija. Al principio casi todo es interés y poca amortización; al final, al revés. Ejemplo: $ 1.000.000 al 3% mensual en 12 cuotas → cuota <b>$ 100.462,09</b>. En la primera: interés 30.000 y amortización 70.462,09.</p>
  <h3>Sistema alemán (amortización constante)</h3><p>Se devuelve la misma porción de capital en cada cuota (V/n) y el interés se calcula sobre el saldo. Las cuotas son decrecientes. En el ejemplo: amortización 83.333,33 por mes; primera cuota 83.333,33 + 30.000 = <b>113.333,33</b>.</p>
  <div class="tw"><table><thead><tr><th>Concepto</th><th>Francés</th><th>Alemán</th></tr></thead><tbody>
  <tr><td>Cuota</td><td>Constante</td><td>Decreciente</td></tr><tr><td>Amortización</td><td>Creciente</td><td>Constante</td></tr><tr><td>Intereses totales</td><td>Mayores</td><td>Menores</td></tr><tr><td>Primeras cuotas</td><td>Más bajas</td><td>Más altas</td></tr></tbody></table></div>
  <h3>Créditos UVA</h3><p>El capital se expresa en Unidades de Valor Adquisitivo, que se actualizan diariamente por el CER (basado en la inflación). La tasa es baja, pero el saldo en pesos crece con la inflación.</p>
  <h3>Paso a paso: armar el cuadro de marcha</h3>
  <div class="ejr"><b>Ejemplo resuelto · francés</b>Préstamo $ 100.000 al 10% por período, 3 cuotas.
  <ol><li>Cuota: 100.000 × 0,10 / (1 − 1,1⁻³) = <b>40.211,48</b>.</li><li>En cada fila: interés = saldo × 10%; amortización = cuota − interés; nuevo saldo = saldo − amortización.</li></ol>
  <div class="tw"><table><thead><tr><th>N.º</th><th class="r">Cuota</th><th class="r">Interés</th><th class="r">Amortización</th><th class="r">Saldo</th></tr></thead><tbody>
  <tr><td>0</td><td></td><td></td><td></td><td class="r num">100.000,00</td></tr>
  <tr><td>1</td><td class="r num">40.211,48</td><td class="r num">10.000,00</td><td class="r num">30.211,48</td><td class="r num">69.788,52</td></tr>
  <tr><td>2</td><td class="r num">40.211,48</td><td class="r num">6.978,85</td><td class="r num">33.232,63</td><td class="r num">36.555,89</td></tr>
  <tr><td>3</td><td class="r num">40.211,48</td><td class="r num">3.655,59</td><td class="r num">36.555,89</td><td class="r num">0,00</td></tr></tbody></table></div>
  Intereses totales: 20.634,44. El saldo final tiene que dar 0: es el control.</div>
  <div class="ejr"><b>Ejemplo resuelto · alemán</b>Mismo préstamo.
  <div class="tw"><table><thead><tr><th>N.º</th><th class="r">Amortización</th><th class="r">Interés</th><th class="r">Cuota</th><th class="r">Saldo</th></tr></thead><tbody>
  <tr><td>1</td><td class="r num">33.333,33</td><td class="r num">10.000,00</td><td class="r num">43.333,33</td><td class="r num">66.666,67</td></tr>
  <tr><td>2</td><td class="r num">33.333,33</td><td class="r num">6.666,67</td><td class="r num">40.000,00</td><td class="r num">33.333,33</td></tr>
  <tr><td>3</td><td class="r num">33.333,33</td><td class="r num">3.333,33</td><td class="r num">36.666,67</td><td class="r num">0,00</td></tr></tbody></table></div>
  Intereses totales: 20.000. Menos que en el francés, porque el capital se devuelve más rápido.</div>
  <div class="err"><b>Errores comunes</b><ul><li>Calcular el interés sobre el préstamo original en todas las cuotas: siempre es sobre el <b>saldo</b>.</li><li>En el francés, pensar que la amortización es constante (lo constante es la cuota).</li></ul></div>
  ${CAMPUS.vid([["Sistema francés: cuadro de amortización","sistema frances cuadro de amortizacion ejercicio"],["Sistema alemán: cuadro de amortización","sistema aleman amortizacion ejercicio resuelto"],["Créditos UVA explicados","creditos uva como funcionan explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"Préstamo de $ 1.000.000 al 3% mensual, 12 cuotas, sistema francés. ¿Cuota?",a:100462.09,u:"$",tol:0.05,ex:"1.000.000 × 0,03 / (1 − 1,03⁻¹²) = 30.000 / 0,298620 = 100.462,09."},
   {q:"¿Cuánta amortización de capital tiene la primera cuota?",a:70462.09,u:"$",tol:0.05,ex:"Interés de la 1.ª: 1.000.000 × 3% = 30.000. Amortización = cuota − interés = 70.462,09."},
   {q:"El mismo préstamo por sistema alemán: ¿cuál es la segunda cuota?",a:110833.33,u:"$",tol:0.05,hint:"Saldo después de la 1.ª: 916.666,67; interés 3% = 27.500",ex:"Amortización fija 83.333,33 + interés sobre el saldo (916.666,67 × 3% = 27.500) = 110.833,33."},
   {q:"Préstamo de $ 500.000 al 2% mensual en 6 cuotas, francés. ¿Cuota?",a:89262.91,u:"$",tol:0.05,ex:"500.000 × 0,02 / (1 − 1,02⁻⁶) = 10.000 / 0,112029 = 89.262,91."}]}]},
 {lead:"El VAN y la TIR son las dos herramientas clásicas para decidir si un proyecto de inversión conviene.",
  html:`<h3>Valor Actual Neto (VAN)</h3><p>Es la suma de los flujos futuros actualizados a la tasa de costo de capital, menos la inversión inicial.</p>
  <div class="formula">VAN = −I₀ + F₁/(1+k) + F₂/(1+k)² + … + Fₙ/(1+k)ⁿ</div>
  <ul><li>VAN &gt; 0: el proyecto rinde más que la tasa exigida. <b>Conviene.</b></li><li>VAN &lt; 0: no conviene.</li></ul>
  <p>Ejemplo: inversión $ 1.000.000, flujos de $ 450.000 durante 3 años, k = 10% → VAN = 450.000 × 2,4869 − 1.000.000 = <b>$ 119.083,40</b>.</p>
  <h3>Tasa Interna de Retorno (TIR)</h3><p>Es la tasa que hace VAN = 0. Se calcula por prueba y error o con la función TIR de la hoja de cálculo. En el ejemplo, TIR ≈ <b>16,65%</b>. Si la TIR supera el costo de capital, el proyecto conviene.</p>
  <h3>Período de recupero</h3><p>Cuánto tarda en recuperarse la inversión. Es simple pero ignora el valor tiempo y lo que pasa después del recupero.</p>
  <div class="note"><b>VAN o TIR.</b> Si comparan proyectos excluyentes de distinto tamaño, pueden dar órdenes distintos. En ese caso manda el VAN, porque mide la ganancia en pesos.</div>
  <h3>Paso a paso: VAN y TIR</h3>
  <div class="ejr"><b>Ejemplo resuelto · VAN</b>Inversión $ 1.000.000; flujos de $ 450.000 durante 3 años; k = 10%.
  <div class="tw"><table><thead><tr><th>Año</th><th class="r">Flujo</th><th class="r">Factor 1/(1,1)ᵗ</th><th class="r">Valor actual</th></tr></thead><tbody>
  <tr><td>0</td><td class="r num">−1.000.000</td><td class="r num">1</td><td class="r num">−1.000.000,00</td></tr>
  <tr><td>1</td><td class="r num">450.000</td><td class="r num">0,9091</td><td class="r num">409.090,91</td></tr>
  <tr><td>2</td><td class="r num">450.000</td><td class="r num">0,8264</td><td class="r num">371.900,83</td></tr>
  <tr><td>3</td><td class="r num">450.000</td><td class="r num">0,7513</td><td class="r num">338.091,66</td></tr>
  <tr><td><b>VAN</b></td><td></td><td></td><td class="r num"><b>119.083,40</b></td></tr></tbody></table></div>
  Lectura: además de recuperar la inversión y ganar el 10% exigido, el proyecto deja $ 119.083 de valor extra hoy.</div>
  <div class="ejr"><b>Ejemplo resuelto · TIR por prueba y error</b>Buscamos la tasa que hace VAN = 0.
  <ol><li>Con 15%: VAN = +27.451 (todavía positivo, la tasa tiene que subir).</li><li>Con 20%: VAN = −52.083 (ya negativo, nos pasamos).</li><li>La TIR está entre 15% y 20%. Interpolando: 15% + 5% × 27.451 / (27.451 + 52.083) ≈ 16,7%.</li><li>La hoja de cálculo da el valor exacto: <b>16,65%</b>. Como supera el 10% exigido, conviene.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Actualizar todos los flujos con el mismo exponente.</li><li>Olvidarse de restar la inversión inicial.</li><li>Elegir entre proyectos excluyentes por la TIR cuando el VAN dice otra cosa.</li></ul></div>
  ${CAMPUS.vid([["VAN y TIR explicados","van y tir explicacion ejercicio resuelto"],["Cómo calcular la TIR","como calcular la tir paso a paso"],["Período de recupero","periodo de recupero payback explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"Inversión $ 1.000.000; flujos de $ 450.000 por 3 años; k = 10%. ¿VAN?",a:119083.40,u:"$",tol:1,ex:"409.090,91 + 371.900,83 + 338.091,66 − 1.000.000 = 119.083,40."},
   {q:"Inversión $ 500.000; flujos de $ 200.000, $ 250.000 y $ 300.000 en los años 1 a 3; k = 12%. ¿VAN?",a:91403.97,u:"$",tol:1,ex:"200.000/1,12 + 250.000/1,12² + 300.000/1,12³ = 178.571,43 + 199.298,47 + 213.534,07 = 591.403,97. Menos 500.000 = 91.403,97."},
   {q:"Un proyecto cuesta $ 900.000 y genera $ 300.000 por año. ¿Período de recupero simple, en años?",a:3,tol:0,ex:"900.000 / 300.000 = 3 años."}]},
   {type:"tf",items:[["Si la TIR es menor que el costo de capital, el VAN es negativo","Verdadero"],["El período de recupero tiene en cuenta el valor tiempo del dinero","Falso"]]}]},
 {lead:"En un país con inflación, una tasa alta puede ser negativa en términos reales. La ecuación de Fisher separa las dos cosas.",
  html:`<div class="formula">(1 + tasa nominal) = (1 + tasa real) · (1 + inflación)     →     r = (1 + i) / (1 + π) − 1</div>
  <p>Ejemplo: un plazo fijo con TEA 40% y una inflación anual de 30% → tasa real = 1,40/1,30 − 1 = <b>7,69%</b>. Si la inflación fuera 50%, la tasa real sería −6,67%: perderías poder de compra.</p>
  <p>La aproximación r ≈ i − π solo sirve con tasas bajas. Con las tasas argentinas, siempre usá la fórmula exacta.</p>
  <h3>Instrumentos ajustables</h3><ul><li><b>Plazo fijo UVA:</b> el capital se ajusta por CER más una tasa adicional.</li><li><b>Bonos CER</b> (como los Boncer del Tesoro): ajustan por inflación.</li><li><b>Dólar linked:</b> ajustan por tipo de cambio.</li></ul>
  <h3>Para los estados contables</h3><p>Con inflación, una parte de los intereses nominales es solo compensación por la pérdida del poder adquisitivo. Las normas contables argentinas en moneda homogénea (RT 54) muestran los resultados financieros en términos reales (Módulo 14).</p>
  <h3>Paso a paso con la ecuación de Fisher</h3>
  <div class="ejr"><b>Ejemplo resuelto</b>Plazo fijo a un año con TEA 40%; la inflación del año fue 30%.
  <ol><li>Factores: 1,40 (lo que crece tu plata) y 1,30 (lo que crecen los precios).</li><li>Divido: 1,40 / 1,30 = 1,0769.</li><li>Tasa real: <b>7,69%</b>. Con tu plata podés comprar un 7,69% más de cosas que al principio.</li><li>Aproximación (restar): 40% − 30% = 10%. Se equivoca en más de 2 puntos: con tasas altas, siempre la fórmula exacta.</li></ol></div>
  <div class="ejr"><b>Ejemplo resuelto · al revés</b>Querés ganar 5% real y esperás 60% de inflación. ¿Qué tasa nominal pedís?
  <ol><li>(1 + i) = 1,05 × 1,60 = 1,68.</li><li>i = <b>68%</b>, no 65%.</li></ol></div>
  <div class="err"><b>Errores comunes</b><ul><li>Restar en lugar de dividir factores.</li><li>Comparar una tasa mensual con una inflación anual.</li></ul></div>
  ${CAMPUS.vid([["Tasa real y nominal: ecuación de Fisher","tasa de interes real ecuacion de fisher explicacion"],["Plazo fijo UVA, cómo funciona","plazo fijo uva como funciona explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"TEA de un plazo fijo 40%, inflación anual 30%. ¿Tasa real, en %? (dos decimales)",a:7.69,u:"%",tol:0.02,ex:"1,40 / 1,30 − 1 = 7,69%."},
   {q:"Un préstamo cobra 80% anual y la inflación es 100%. ¿Tasa real, en %? (con signo)",a:-10,u:"%",tol:0.02,ex:"1,80 / 2,00 − 1 = −10%."},
   {q:"Querés ganar 5% real con una inflación esperada de 60%. ¿Qué tasa nominal necesitás, en %?",a:68,u:"%",tol:0.02,ex:"1,05 × 1,60 − 1 = 0,68 → 68%."}]}]},
],
eval:[
 {q:"Con interés simple, los intereses se calculan…",o:["Sobre el monto acumulado","Siempre sobre el capital inicial","Sobre la inflación","Sobre la cuota"],a:1},
 {q:"$ 100.000 al 10% anual compuesto durante 2 años generan un monto de…",o:["$ 120.000","$ 121.000","$ 110.000","$ 119.000"],a:1},
 {q:"La TNA…",o:["Incluye la capitalización","No tiene en cuenta la capitalización","Es siempre mayor que la TEA","Es la que se usa para el CFT"],a:1},
 {q:"Para comparar préstamos de distintos bancos conviene mirar…",o:["La TNA","El CFT","La cuota","El plazo"],a:1},
 {q:"En el descuento comercial, la quita se calcula sobre…",o:["El valor actual","El valor nominal","La TEA","El capital prestado"],a:1},
 {q:"El valor actual de una perpetuidad de $ 100 al 5% es…",o:["$ 105","$ 500","$ 2.000","$ 5"],a:2},
 {q:"En el sistema francés…",o:["La amortización es constante","La cuota es constante","El interés es constante","No hay intereses"],a:1},
 {q:"En el sistema alemán, las cuotas son…",o:["Crecientes","Constantes","Decrecientes","Iguales a los intereses"],a:2},
 {q:"Un proyecto con VAN positivo…",o:["Rinde menos que la tasa exigida","Rinde más que la tasa exigida","Tiene TIR negativa","No se puede evaluar"],a:1},
 {q:"Con tasa nominal 50% e inflación 50%, la tasa real es…",o:["50%","0%","100%","25%"],a:1},
 {q:"La TIR es la tasa que…",o:["Maximiza el VAN","Hace que el VAN sea cero","Fija el BCRA","Iguala la inflación"],a:1},
]};
