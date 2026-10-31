/* Trabajos prácticos integradores · módulos 22 a 27 */
(function(){
CAMPUS.tp[22] = {t:"TP 22: liquidación final con la Ley 27.802",
 lead:"Vas a liquidar el despido sin causa de un empleado de comercio aplicando las reglas vigentes desde la Ley de Modernización Laboral.",
 html:`<ul><li>Ingresó el 1/1/2019 y es despedido sin causa y sin preaviso el 15/5/2026 (7 años, 4 meses y 15 días de antigüedad).</li>
 <li>Mejor remuneración mensual, normal y habitual del último año: $ 1.200.000 (sin contar SAC, vacaciones ni premios no mensuales, que la ley excluye).</li>
 <li>Para el SAC proporcional, el primer semestre de 2026 tiene 181 días y trabajó 135.</li></ul>
 <div class="note"><b>Tope del art. 245.</b> La base no puede superar 3 veces el salario promedio del convenio, pero el tope tampoco puede reducirla a menos del 67% de la remuneración real.</div>`,
 src:["lct","modlab","d408"],
 ex:[{type:"num",title:"Rubros de la liquidación",items:[
   {q:"Años computables para el art. 245",a:8,ex:"7 años y una fracción mayor de 3 meses."},
   {q:"Indemnización por antigüedad (el tope del convenio es $ 1.500.000, no se aplica)",a:9600000,u:"$"},
   {q:"Indemnización sustitutiva del preaviso",a:2400000,u:"$",ex:"Más de 5 años: 2 meses."},
   {q:"SAC sobre el preaviso",a:200000,u:"$",ex:"2.400.000 / 12."},
   {q:"SAC proporcional del semestre",a:447513.81,u:"$",tol:1,ex:"600.000 × 135 / 181."}]},
  {type:"num",title:"Otro convenio, con tope",items:[
   {q:"Si el promedio del convenio fuera $ 300.000, ¿cuál sería el tope de 3 veces?",a:900000,u:"$"},
   {q:"¿Cuál es el piso del 67% de la remuneración real?",a:804000,u:"$"},
   {q:"¿Qué base se usa entonces?",a:900000,u:"$",ex:"El tope ($ 900.000) es mayor que el piso del 67%, así que se aplica el tope."},
   {q:"Indemnización por antigüedad con esa base",a:7200000,u:"$"}]},
  {type:"num",title:"Fondo de Asistencia Laboral",items:[
   {q:"Una PyME con una nómina mensual de $ 10.000.000 aporta al FAL el 2,5%. ¿Cuánto aporta por mes?",a:250000,u:"$",ex:"Ese importe se descuenta de sus contribuciones patronales."}]}]};

CAMPUS.tp[23] = {t:"TP 23: costo del capital y ciclo de caja",
 lead:"Una empresa evalúa un proyecto y necesita saber cuánto le cuesta financiarse y cuánto tiempo tiene inmovilizado su capital de trabajo.",
 html:`<p>Tasa libre de riesgo 5%, beta de la acción 1,2 y prima de mercado 6%. La estructura de capital es 40% deuda y 60% capital propio. La deuda cuesta 10% antes de impuestos y la alícuota del impuesto es del 30% (ilustrativa). Los inventarios rotan cada 60 días, los clientes pagan a 45 días y los proveedores cobran a 30 días.</p>`,
 cite:["Brealey, R., Myers, S. y Allen, F., Principios de finanzas corporativas."],
 ex:[{type:"num",items:[
   {q:"Costo del capital propio (CAPM, en %)",a:12.2,u:"%",ex:"5% + 1,2 × 6%."},
   {q:"Costo de la deuda después de impuestos (en %)",a:7,u:"%"},
   {q:"WACC (en %)",a:10.12,u:"%",tol:0.01,ex:"0,4 × 7% + 0,6 × 12,2%."},
   {q:"Ciclo de conversión del efectivo (en días)",a:75,ex:"60 + 45 − 30."}]},
  {type:"mc",items:[{q:"Un proyecto con TIR del 11%, ¿conviene con este WACC?",o:["No, porque la TIR es menor al costo del capital propio","Sí, porque la TIR supera al WACC","No se puede saber","Solo si se financia con deuda"],a:1}]}]};

CAMPUS.tp[24] = {t:"TP 24: informe de análisis de Andina SA",
 lead:"Vas a calcular los indicadores clave, descomponer la rentabilidad y redactar la conclusión del informe.",
 html:`<div class="tw"><table><thead><tr><th>Dato (en miles)</th><th class="r">Año 2</th><th class="r">Año 1</th></tr></thead><tbody>
 <tr><td>Ventas</td><td class="r mono">20.000</td><td class="r mono">16.000</td></tr><tr><td>Resultado neto</td><td class="r mono">1.500</td><td class="r mono">1.000</td></tr>
 <tr><td>Activo total</td><td class="r mono">15.000</td><td class="r mono">13.000</td></tr><tr><td>Activo corriente</td><td class="r mono">6.000</td><td class="r mono">5.500</td></tr>
 <tr><td>Bienes de cambio</td><td class="r mono">2.000</td><td class="r mono">1.800</td></tr><tr><td>Pasivo corriente</td><td class="r mono">4.000</td><td class="r mono">4.200</td></tr>
 <tr><td>Patrimonio neto</td><td class="r mono">7.500</td><td class="r mono">6.000</td></tr></tbody></table></div>
 <p>Usá los saldos del año 2 (sin promediar) y suponé cifras en moneda homogénea.</p>`,
 cite:["Fowler Newton, E., Análisis de estados contables."],
 ex:[{type:"num",items:[
   {q:"Liquidez corriente",a:1.5,tol:0.01},{q:"Prueba ácida",a:1,tol:0.01},{q:"Endeudamiento (pasivo / PN)",a:1,tol:0.01},
   {q:"Margen neto (en %)",a:7.5,u:"%"},{q:"Rotación del activo",a:1.33,tol:0.01},{q:"Apalancamiento (activo / PN)",a:2,tol:0.01},
   {q:"ROE por Du Pont (en %)",a:20,u:"%",ex:"7,5% × 1,333 × 2 = 20%."},{q:"Crecimiento de las ventas (en %)",a:25,u:"%"}]},
  {type:"mc",items:[{q:"¿Qué conclusión es la mejor para el informe?",o:["Las ventas subieron","La rentabilidad del PN es del 20%, impulsada por un mayor margen, con liquidez adecuada y un endeudamiento igual al patrimonio","La prueba ácida es 1","La empresa está en problemas"],a:1}]}]};

CAMPUS.tp[25] = {t:"TP 25: planificar y cerrar una auditoría",
 lead:"Vas a fijar la significatividad, diseñar una muestra y decidir el tipo de informe según los hallazgos.",
 html:`<p>El resultado antes de impuestos del cliente es $ 2.000.000 y el equipo usa como referencia el 5%. La cuenta deudores suma $ 10.000.000 y se va a revisar con muestreo por unidad monetaria con 50 selecciones. El riesgo de auditoría aceptado es 5%, el riesgo inherente se estima en 80% y el de control en 50%.</p>`,
 src:["facpce","uifl"],
 cite:["Slosse, C. y otros, Auditoría.","RT 37 de la FACPCE."],
 ex:[{type:"num",items:[
   {q:"Significatividad",a:100000,u:"$"},{q:"Intervalo de muestreo",a:200000,u:"$"},
   {q:"Riesgo de detección aceptable (en %)",a:12.5,u:"%",ex:"RA = RI × RC × RD → 5% / (80% × 50%)."}]},
  {type:"pick",title:"¿Qué opinión corresponde?",options:["Favorable sin salvedades","Con salvedades","Adversa","Abstención"],items:[
   ["No hay errores significativos","Favorable sin salvedades"],["Un error significativo, pero limitado a un rubro","Con salvedades"],["Errores significativos que afectan a los estados en su conjunto","Adversa"],["No se pudo obtener evidencia sobre la mayor parte del activo","Abstención"]]},
  {type:"order",title:"Ordená el trabajo",items:["Aceptación del cliente y carta de compromiso","Conocimiento del negocio y evaluación de riesgos","Evaluación del control interno","Procedimientos sustantivos","Revisión de hechos posteriores","Carta de manifestaciones de la dirección","Emisión del informe"]}]};

CAMPUS.tp[26] = {t:"TP 26: del concurso a la distribución en la quiebra",
 lead:"Vas a ordenar las etapas de un concurso preventivo y, si fracasa, distribuir lo obtenido en la quiebra.",
 html:`<p>En la quiebra se liquidaron bienes por $ 10.000.000 en total. Los gastos del concurso (art. 240) son $ 1.000.000. Un banco tiene hipoteca por $ 4.000.000 sobre un inmueble que se vendió en $ 5.000.000. Los créditos laborales con privilegio general suman $ 2.000.000 y los quirografarios, $ 8.000.000. El caso está simplificado: no hay otros privilegios ni reservas.</p>`,
 src:["lcq"],
 cite:["Rouillon, A., Régimen de concursos y quiebras."],
 ex:[{type:"order",title:"Etapas del concurso preventivo",items:["Presentación del deudor","Resolución de apertura (art. 14)","Pedidos de verificación ante el síndico (art. 32)","Informe individual del síndico (art. 35)","Resolución verificatoria del juez (art. 36)","Informe general (art. 39)","Período de exclusividad y propuesta de acuerdo","Homologación del acuerdo (art. 52)"]},
  {type:"num",title:"Distribución",items:[
   {q:"¿Cuánto cobra el acreedor hipotecario?",a:4000000,u:"$"},{q:"¿Cuánto queda para los quirografarios después de gastos, hipoteca y laborales?",a:3000000,u:"$"},
   {q:"¿Qué porcentaje de su crédito cobran los quirografarios?",a:37.5,u:"%"}]},
  {type:"mc",items:[{q:"Para aprobar el acuerdo preventivo se necesita…",o:["La unanimidad de los acreedores","Mayoría absoluta de acreedores de cada categoría que representen 2/3 del capital computable","La conformidad del síndico","Solo la homologación del juez"],a:1,ex:"Art. 45, Ley 24.522."}]}]};

CAMPUS.tp[27] = {t:"TP 27: dilemas del ejercicio profesional",
 lead:"Te van a llegar pedidos que parecen normales y no lo son. Decidí qué podés hacer y qué no.",
 html:`<p>Pensá en la Ley 20.488, el Código de Ética de tu Consejo, el secreto profesional y las obligaciones de la Ley 25.246 como sujeto obligado ante la UIF.</p>`,
 src:["prof","cpce","uifl","rpt"],
 ex:[{type:"pick",options:["Se puede","No se puede"],items:[
   ["Firmar una certificación contable estando matriculado en esa jurisdicción","Se puede"],
   ["Auditar los estados de una empresa de la que sos socio","No se puede"],
   ["Cobrar a un cliente de auditoría un honorario que depende de que la opinión sea favorable","No se puede"],
   ["Reportar a la UIF una operación sospechosa de un cliente","Se puede"],
   ["Contarle a un tercero los datos impositivos de un cliente porque es tu amigo","No se puede"],
   ["Rechazar un encargo para el que no tenés competencia técnica","Se puede"]]},
  {type:"pick",title:"¿Es una actividad reservada al contador público?",options:["Reservada","No reservada"],items:[["Dictamen de auditoría sobre estados para terceros","Reservada"],["Liquidar sueldos para un cliente","No reservada"],["Actuar como perito contable en la justicia","Reservada"],["Cargar facturas en un sistema contable","No reservada"],["Actuar como síndico en un concurso","Reservada"]]}]};
})();
