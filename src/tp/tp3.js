/* Trabajos prácticos integradores · módulos 15 a 21 */
(function(){
CAMPUS.tp[15] = {t:"TP 15: estados contables de Distribuidora Oeste SA",
 lead:"Con los datos del ejercicio vas a armar el estado de resultados y el estado de flujo de efectivo por el método indirecto.",
 html:`<div class="tw"><table><thead><tr><th>Dato del ejercicio</th><th class="r">$</th></tr></thead><tbody>
 <tr><td>Ventas netas</td><td class="r mono">5.000.000</td></tr><tr><td>Costo de mercaderías vendidas</td><td class="r mono">3.000.000</td></tr>
 <tr><td>Gastos de comercialización (incluye amortizaciones por $ 150.000)</td><td class="r mono">800.000</td></tr>
 <tr><td>Gastos de administración</td><td class="r mono">500.000</td></tr><tr><td>Intereses perdidos</td><td class="r mono">200.000</td></tr>
 <tr><td>Impuesto a las ganancias</td><td class="r mono">25% del resultado antes de impuesto</td></tr>
 <tr><td>Aumento de deudores por ventas</td><td class="r mono">200.000</td></tr><tr><td>Aumento de mercaderías</td><td class="r mono">120.000</td></tr>
 <tr><td>Aumento de proveedores</td><td class="r mono">100.000</td></tr><tr><td>Compra de bienes de uso al contado</td><td class="r mono">400.000</td></tr>
 <tr><td>Préstamo bancario obtenido</td><td class="r mono">300.000</td></tr><tr><td>Dividendos pagados en efectivo</td><td class="r mono">100.000</td></tr>
 <tr><td>Efectivo al inicio</td><td class="r mono">200.000</td></tr></tbody></table></div>
 <p>Suponé que el impuesto a las ganancias quedó íntegramente a pagar al cierre (súmalo como ajuste en el flujo operativo).</p>`,
 src:["rt54","facpce"],
 ex:[{type:"num",title:"Estado de resultados",items:[
   {q:"Resultado bruto",a:2000000,u:"$"},{q:"Resultado antes del impuesto",a:500000,u:"$"},{q:"Impuesto a las ganancias",a:125000,u:"$"},{q:"Resultado neto",a:375000,u:"$"}]},
  {type:"num",title:"Flujo de efectivo (método indirecto)",items:[
   {q:"Flujo neto de las actividades operativas",a:430000,u:"$",ex:"375.000 + 150.000 (amortizaciones) + 125.000 (impuesto devengado no pagado) − 200.000 − 120.000 + 100.000."},
   {q:"Flujo de las actividades de inversión",a:-400000,u:"$"},
   {q:"Flujo de las actividades de financiación",a:200000,u:"$"},
   {q:"Efectivo al cierre",a:430000,u:"$",ex:"200.000 + 430.000 − 400.000 + 200.000."}]},
  {type:"pick",title:"¿En qué actividad va cada flujo?",options:["Operativa","Inversión","Financiación"],items:[["Cobro a clientes","Operativa"],["Compra de una máquina","Inversión"],["Pago de dividendos","Financiación"],["Pago de sueldos","Operativa"],["Obtención de un préstamo","Financiación"],["Venta de un rodado usado","Inversión"]]}]};

const ACC16 = ["Banco Nación c/c","Accionistas","Capital suscripto","Resultados no asignados","Reserva legal","Dividendos a pagar","Dividendos en acciones a distribuir","Capital social"];
CAMPUS.tp[16] = {t:"TP 16: la vida societaria de Andes Servicios SA",
 lead:"Vas a acompañar a una SA desde la suscripción del capital hasta la distribución de sus primeras utilidades.",
 html:`<ul><li>Se suscribe un capital de $ 10.000.000, integrando el 25% en efectivo al constituirla (art. 187 LGS).</li>
 <li>En el primer ejercicio gana $ 4.000.000. La asamblea decide: reserva legal (5%), dividendos en efectivo por $ 1.500.000 y dividendos en acciones por $ 1.000.000. El resto queda en resultados no asignados.</li>
 <li>Todos los accionistas son personas humanas residentes.</li></ul>`,
 src:["lgs","gan"],
 ex:[{type:"asiento",accounts:ACC16,entries:[
   {t:"Suscripción del capital.",e:[["Accionistas",10000000,0],["Capital suscripto",0,10000000]]},
   {t:"Integración del 25% en efectivo.",e:[["Banco Nación c/c",2500000,0],["Accionistas",0,2500000]]},
   {t:"Asamblea: distribución de utilidades.",e:[["Resultados no asignados",2700000,0],["Reserva legal",0,200000],["Dividendos a pagar",0,1500000],["Dividendos en acciones a distribuir",0,1000000]]}]},
  {type:"num",items:[
   {q:"¿Cuánto queda en resultados no asignados después de la asamblea?",a:1300000,u:"$"},
   {q:"Retención del 7% sobre los dividendos en efectivo",a:105000,u:"$",ex:"Para accionistas personas humanas residentes."},
   {q:"Si la reserva legal ya fuera de $ 1.900.000 con este capital, ¿cuánto habría que constituir como máximo?",a:100000,u:"$",ex:"El tope es el 20% del capital: $ 2.000.000."}]},
  {type:"pick",title:"Órganos de la SA",options:["Gobierno","Administración","Fiscalización"],items:[["Asamblea de accionistas","Gobierno"],["Directorio","Administración"],["Sindicatura","Fiscalización"],["Consejo de vigilancia","Fiscalización"]]}]};

CAMPUS.tp[17] = {t:"TP 17: costo de una orden y desvíos estándar",
 lead:"Una carpintería trabaja por pedido y además fabrica una línea estándar. Vas a costear una orden y analizar desvíos.",
 html:`<p><b>Orden 15</b> (100 sillas): materia prima $ 120.000, 40 horas de mano de obra directa a $ 2.000 la hora. La carga fabril se aplica al 150% del costo de la mano de obra directa.</p>
 <p>En el mes la mano de obra directa total fue de $ 700.000 y la carga fabril real, de $ 1.100.000.</p>
 <p><b>Línea estándar:</b> cada mesa lleva 2 kg de resina a $ 500 el kg. Se fabricaron 1.000 mesas usando 2.100 kg comprados a $ 480.</p>`,
 cite:["Horngren, C., Datar, S. y Rajan, M., Contabilidad de costos."],
 ex:[{type:"num",title:"Costeo por órdenes",items:[
   {q:"Carga fabril aplicada a la orden 15",a:120000,u:"$"},{q:"Costo total de la orden",a:320000,u:"$"},{q:"Costo por silla",a:3200,u:"$"},
   {q:"Precio de la orden con un margen del 40% sobre el costo",a:448000,u:"$"},
   {q:"Carga fabril subaplicada en el mes",a:50000,u:"$",ex:"Aplicada: 700.000 × 150% = 1.050.000; real 1.100.000."}]},
  {type:"num",title:"Desvíos de materia prima (positivo = desfavorable)",items:[
   {q:"Desvío de precio",a:-42000,u:"$",ex:"(480 − 500) × 2.100 = −42.000: favorable."},
   {q:"Desvío de cantidad",a:50000,u:"$",ex:"(2.100 − 2.000) × 500: desfavorable."},
   {q:"Desvío total",a:8000,u:"$"}]}]};

CAMPUS.tp[18] = {t:"TP 18: decisiones en una fábrica de bicicletas",
 lead:"Con el análisis marginal vas a responder las preguntas que hace la gerencia.",
 html:`<p>Precio $ 10.000 por unidad, costo variable $ 6.000 y costos fijos mensuales de $ 2.000.000. La capacidad es de 1.000 unidades y hoy se venden 800.</p>`,
 cite:["Yardin, A., El análisis marginal."],
 ex:[{type:"num",items:[
   {q:"Punto de equilibrio en unidades",a:500},{q:"Punto de equilibrio en pesos",a:5000000,u:"$"},
   {q:"Unidades para ganar $ 600.000",a:650},
   {q:"Margen de seguridad con 800 unidades (en %)",a:37.5,u:"%"},
   {q:"Un cliente pide 100 unidades a $ 7.000. ¿Cuánto cambia el resultado si se acepta?",a:100000,u:"$",ex:"Hay capacidad ociosa: (7.000 − 6.000) × 100."},
   {q:"Si se producen 1.000 y se venden 800, ¿cuánto mayor es el resultado con costeo completo que con costeo variable?",a:400000,u:"$",ex:"200 unidades en stock × $ 2.000 de costo fijo unitario."}]},
  {type:"mc",items:[{q:"Un proveedor ofrece la unidad a $ 6.500 y no hay costos fijos evitables. ¿Qué conviene?",o:["Comprar, porque libera capacidad","Fabricar, porque el costo relevante es $ 6.000","Comprar, porque elimina los costos fijos","Es indistinto"],a:1}]}]};

CAMPUS.tp[19] = {t:"TP 19: las cuentas del Estado",
 lead:"Vas a clasificar recursos y medir el resultado fiscal de un Estado simplificado.",
 html:`<p>Ingresos totales 100, gastos primarios 95 e intereses de la deuda 8 (en miles de millones). PBI: 1.000. Recaudación tributaria: 250.</p>`,
 src:["laf","cn"],
 ex:[{type:"num",items:[{q:"Resultado primario",a:5},{q:"Resultado financiero",a:-3},{q:"Presión tributaria (en % del PBI)",a:25,u:"%"}]},
  {type:"pick",title:"Clasificá cada tributo",options:["Impuesto","Tasa","Contribución especial"],items:[["IVA","Impuesto"],["Tasa por inscripción en un registro","Tasa"],["Pago por la mejora que una obra pública da a un inmueble","Contribución especial"],["Ganancias","Impuesto"],["Tasa de seguridad e higiene municipal","Tasa"]]},
  {type:"pick",title:"¿Progresivo, proporcional o regresivo?",options:["Progresivo","Proporcional","Regresivo"],items:[["Ganancias de personas humanas, con escala creciente","Progresivo"],["Un impuesto con la misma alícuota para todos","Proporcional"],["Un impuesto al consumo de bienes básicos, medido sobre el ingreso","Regresivo"]]}]};

CAMPUS.tp[20] = {t:"TP 20: la posición mensual de IVA e Ingresos Brutos",
 lead:"Vas a liquidar el IVA de un mes con dos alícuotas y saldos a favor, y distribuir la base de Ingresos Brutos por Convenio Multilateral.",
 html:`<div class="tw"><table><thead><tr><th>Operaciones del mes (netas de IVA)</th><th class="r">$</th></tr></thead><tbody>
 <tr><td>Ventas gravadas al 21%</td><td class="r mono">4.000.000</td></tr><tr><td>Ventas gravadas al 10,5%</td><td class="r mono">1.000.000</td></tr>
 <tr><td>Compras gravadas al 21%</td><td class="r mono">2.500.000</td></tr><tr><td>Compras gravadas al 10,5%</td><td class="r mono">800.000</td></tr></tbody></table></div>
 <p>Hay un saldo técnico a favor del mes anterior de $ 50.000, y en el mes le hicieron percepciones de IVA por $ 30.000 y retenciones por $ 20.000.</p>
 <p>Para Ingresos Brutos opera en dos provincias por el régimen general del Convenio Multilateral (art. 2: 50% por ingresos y 50% por gastos). La provincia A tiene el 60% de los ingresos y el 70% de los gastos. La base total del mes es $ 10.000.000 y la alícuota de A es del 3% (ilustrativa).</p>`,
 src:["iva","lpt","ca","arca"],
 ex:[{type:"num",title:"IVA",items:[
   {q:"Débito fiscal total",a:945000,u:"$"},{q:"Crédito fiscal total",a:609000,u:"$"},
   {q:"Saldo técnico a pagar (después del saldo a favor anterior)",a:286000,u:"$"},
   {q:"Saldo a pagar después de percepciones y retenciones",a:236000,u:"$"}]},
  {type:"num",title:"Convenio Multilateral",items:[
   {q:"Coeficiente de la provincia A",a:0.65,tol:0.001},{q:"Base imponible de A",a:6500000,u:"$"},{q:"Impuesto de A",a:195000,u:"$"}]},
  {type:"tf",title:"Procedimiento y penal tributario",items:[
   ["Desde la Ley 27.799, la evasión simple requiere un monto evadido superior a $ 100.000.000 por tributo y ejercicio",true],
   ["El saldo técnico a favor de IVA se puede pedir en devolución en efectivo",false,"Se traslada a los meses siguientes; lo que es de libre disponibilidad es el saldo de retenciones y percepciones."],
   ["Para un inscripto que presentó y pagó en término, la prescripción puede ser de 3 años",true,"Si ARCA no detecta una discrepancia significativa (Ley 27.799)."]]}]};

CAMPUS.tp[21] = {t:"TP 21: Ganancias de una sociedad y categorías",
 lead:"Vas a pasar del resultado contable a la ganancia neta imponible de una SA y clasificar ganancias de personas humanas.",
 html:`<ul><li>Resultado contable antes del impuesto: $ 10.000.000.</li><li>Gastos no deducibles incluidos en ese resultado: $ 500.000.</li><li>Ingresos exentos incluidos en ese resultado: $ 300.000.</li>
 <li>Suponé que la ganancia cae íntegramente en el primer tramo de la escala de sociedades (25%). Los tramos se actualizan cada año: verificalos en ARCA.</li>
 <li>Pagó anticipos por $ 1.000.000 y le retuvieron $ 200.000.</li><li>Distribuye $ 3.000.000 de dividendos a accionistas personas humanas residentes.</li></ul>`,
 src:["gan","gandr","arca"],
 ex:[{type:"num",items:[
   {q:"Ganancia neta imponible",a:10200000,u:"$"},{q:"Impuesto determinado",a:2550000,u:"$"},
   {q:"Saldo a pagar de la declaración jurada",a:1350000,u:"$"},{q:"Retención sobre los dividendos (7%)",a:210000,u:"$"}]},
  {type:"pick",title:"¿Qué categoría de Ganancias es?",options:["1ª (renta del suelo)","2ª (capitales)","3ª (empresas)","4ª (trabajo personal)"],items:[
   ["Una persona alquila un departamento de su propiedad","1ª (renta del suelo)"],["Sueldo de un empleado en relación de dependencia","4ª (trabajo personal)"],
   ["Dividendos que cobra una persona de una SA","2ª (capitales)"],["Ganancia de una SRL","3ª (empresas)"],["Honorarios de un contador independiente","4ª (trabajo personal)"]]}]};
})();
