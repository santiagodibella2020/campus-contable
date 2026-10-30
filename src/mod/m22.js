/* Módulo 22 · Derecho laboral y liquidación de sueldos */
(function(){
const ACC = ["Banco Nación c/c","Sueldos y jornales","Contribuciones patronales","Sueldos a pagar","Retenciones a depositar","Cargas sociales a pagar","SAC (gasto)","Indemnizaciones (gasto)","Provisión para SAC"];
function recibo(el, done){
  el.innerHTML = `<p>Empleada de comercio, mayo. Valores ilustrativos.</p>
  <div class="tw"><table><thead><tr><th>Concepto</th><th class="r">Importe</th></tr></thead><tbody>
  <tr><td>Sueldo básico</td><td class="r num">1.000.000</td></tr><tr><td>Antigüedad (5 años × 1%)</td><td class="r num">?</td></tr><tr><td>Presentismo (8,33% de básico + antigüedad)</td><td class="r num">?</td></tr></tbody></table></div>
  <p>Aportes de la trabajadora: jubilación 11%, ley 19.032 (PAMI) 3%, obra social 3%. Ignorá la cuota sindical.</p><div data-n></div>`;
  const n=$("[data-n]",el); n.id=nid("rc");
  EX.num({items:[{q:"Adicional por antigüedad",a:50000,u:"$"},{q:"Presentismo",a:87465,u:"$"},{q:"Total remunerativo (bruto)",a:1137465,u:"$"},{q:"Total de aportes (17%)",a:193369.05,u:"$",tol:0.02},{q:"Sueldo neto a cobrar",a:944095.95,u:"$",tol:0.02}]}, n, done);
}
CAMPUS.content[22] = {
lessons:[
 {lead:"La Ley de Contrato de Trabajo (LCT, Ley 20.744) regula la relación entre empleador y trabajador en relación de dependencia.",
  html:`<h3>El contrato de trabajo (art. 21)</h3><p>Hay contrato de trabajo cuando una persona se obliga a realizar actos, ejecutar obras o prestar servicios a favor de otra, bajo su dependencia, durante un tiempo, a cambio de una remuneración.</p>
  <h3>Notas de la dependencia</h3><ul><li><b>Técnica:</b> el empleador dirige cómo se hace el trabajo.</li><li><b>Económica:</b> el trabajador recibe una remuneración y no asume el riesgo del negocio.</li><li><b>Jurídica:</b> el empleador tiene poder de dirección y disciplinario.</li></ul>
  <h3>Presunción (art. 23)</h3><p>La prestación de servicios hace presumir la existencia de un contrato de trabajo, salvo que se demuestre lo contrario. La Ley 27.742 (2024) aclaró que la presunción no opera cuando la relación se instrumenta con facturas y pagos bancarios de servicios profesionales u oficios.</p>
  <h3>Período de prueba (art. 92 bis)</h3><p>Los contratos por tiempo indeterminado se entienden celebrados a prueba durante los primeros <b>6 meses</b> (según la reforma de la Ley 27.742; los convenios colectivos pueden extenderlo en ciertos casos). Durante ese período cualquiera de las partes puede extinguir la relación sin indemnización, con preaviso.</p>
  <h3>Modalidades</h3><ul><li><b>Tiempo indeterminado</b> (la regla).</li><li><b>Plazo fijo</b>, <b>eventual</b>, <b>de temporada</b> y <b>a tiempo parcial</b>, con requisitos específicos.</li></ul>
  <h3>Registración</h3><p>El empleador debe registrar al trabajador antes de que empiece a trabajar (alta temprana en el sistema “Simplificación Registral” de ARCA) y en el libro de sueldos (art. 52 LCT), hoy digital en la mayoría de los casos.</p>
  <h3>Convenios colectivos</h3><p>Además de la LCT, cada actividad tiene su <b>convenio colectivo de trabajo</b> (por ejemplo, el CCT 130/75 de Empleados de Comercio), con escalas salariales, adicionales y categorías.</p>`,
  ex:[{type:"tf",items:[["La prestación de servicios hace presumir, en principio, un contrato de trabajo","Verdadero"],["El período de prueba permite despedir sin indemnización","Verdadero"],["El alta del trabajador se puede hacer después del primer mes","Falso","Debe ser previa al inicio de la prestación."],["Los convenios colectivos fijan escalas salariales por actividad","Verdadero"]]}]},
 {lead:"La ley limita cuánto se puede trabajar y garantiza descansos y licencias pagas.",
  html:`<h3>Jornada (Ley 11.544)</h3><ul><li>Máximo <b>8 horas diarias</b> o <b>48 semanales</b>.</li><li>Jornada nocturna (entre las 21 y las 6): 7 horas.</li><li>Horas extra: recargo del <b>50%</b> en días comunes y del <b>100%</b> los sábados después de las 13, domingos y feriados (art. 201 LCT).</li></ul>
  <h3>Descansos</h3><p>Descanso semanal desde el sábado a las 13 hasta el domingo a las 24 (art. 204), y 12 horas como mínimo entre jornadas.</p>
  <h3>Vacaciones (art. 150)</h3><div class="tw"><table><thead><tr><th>Antigüedad al 31/12</th><th class="r">Días corridos</th></tr></thead><tbody>
  <tr><td>Hasta 5 años</td><td class="r num">14</td></tr><tr><td>Más de 5 y hasta 10</td><td class="r num">21</td></tr><tr><td>Más de 10 y hasta 20</td><td class="r num">28</td></tr><tr><td>Más de 20</td><td class="r num">35</td></tr></tbody></table></div>
  <p>Para tener derecho al período completo hay que haber trabajado al menos la mitad de los días hábiles del año; si no, corresponde un día de vacaciones cada 20 trabajados.</p>
  <h3>Licencias especiales (art. 158)</h3><ul><li>Nacimiento de hijo: 2 días corridos (para el progenitor no gestante).</li><li>Matrimonio: 10 días corridos.</li><li>Fallecimiento de cónyuge, hijos o padres: 3 días corridos.</li><li>Fallecimiento de hermano: 1 día.</li><li>Examen: 2 días corridos por examen, hasta 10 días por año.</li></ul>
  <p>La licencia por <b>maternidad</b> es de 90 días (art. 177), y durante ella la trabajadora cobra una asignación de la seguridad social.</p>`,
  ex:[{type:"num",items:[{q:"Una empleada ingresó el 1/03/2018. ¿Cuántos días de vacaciones le corresponden por el año 2024? (antigüedad al 31/12/2024)",a:21,tol:0,hint:"Tiene 6 años y 10 meses"},{q:"Un empleado gana $ 6.000 por hora y hace 4 horas extra un martes. ¿Cuánto cobra por esas horas?",a:36000,u:"$"},{q:"¿Y si las hace un domingo?",a:48000,u:"$"},{q:"¿Cuántos días corridos de licencia corresponden por matrimonio?",a:10,tol:0}]}]},
 {lead:"La remuneración es todo lo que el trabajador recibe por su trabajo. Lo que se considere remunerativo define los aportes, las contribuciones y las indemnizaciones.",
  html:`<h3>Conceptos remunerativos y no remunerativos</h3><ul><li><b>Remunerativos:</b> sueldo básico, adicionales (antigüedad, presentismo, título), horas extra, comisiones, premios, SAC, vacaciones. Llevan aportes y contribuciones.</li><li><b>No remunerativos:</b> los que la ley expresamente excluye, como ciertas asignaciones familiares, algunos beneficios sociales (art. 103 bis) y sumas que los convenios colectivos declaran no remunerativas por un tiempo. No llevan (o llevan parcialmente) aportes.</li></ul>
  <h3>Formas de pago</h3><ul><li>Por tiempo (mensual, quincenal, por hora o jornal).</li><li>Por rendimiento (a destajo, comisiones).</li></ul>
  <h3>Salario mínimo vital y móvil</h3><p>Lo fija el Consejo Nacional del Empleo, la Productividad y el Salario Mínimo. Ningún trabajador de jornada completa puede cobrar menos. También se usa como referencia en otras normas (por ejemplo, el capital mínimo de la SAS).</p>
  <h3>Plazo de pago (art. 128)</h3><p>Los sueldos mensuales se pagan dentro de los <b>4 días hábiles</b> del mes siguiente; los quincenales y semanales, dentro de los 3 días hábiles.</p>
  <h3>Recibo de sueldo (art. 140)</h3><p>Debe contener los datos del empleador y del trabajador, la fecha de ingreso, la categoría, el período, la remuneración y cada concepto, los descuentos, el neto a cobrar y la constancia del último depósito de aportes.</p>`,
  ex:[{type:"pick",title:"¿Remunerativo o no remunerativo (en principio)?",options:["Remunerativo","No remunerativo"],items:[["Sueldo básico","Remunerativo"],["Horas extra","Remunerativo"],["Asignación familiar por hijo pagada por ANSES","No remunerativo"],["Comisiones por ventas","Remunerativo"],["Aguinaldo","Remunerativo"],["Reintegro de gastos de guardería con comprobantes (art. 103 bis)","No remunerativo"]]}]},
 {lead:"Del sueldo bruto se descuentan los aportes del trabajador, y el empleador paga además sus contribuciones. Todo se declara en el formulario 931.",
  html:`<h3>Aportes del trabajador</h3><div class="tw"><table><thead><tr><th>Concepto</th><th class="r">%</th></tr></thead><tbody>
  <tr><td>Jubilación (SIPA)</td><td class="r num">11%</td></tr><tr><td>Ley 19.032 (INSSJP, PAMI)</td><td class="r num">3%</td></tr><tr><td>Obra social</td><td class="r num">3%</td></tr><tr><td><b>Total de aportes de ley</b></td><td class="r num"><b>17%</b></td></tr></tbody></table></div>
  <p>Además puede haber cuota sindical y aportes solidarios del convenio colectivo.</p>
  <h3>Contribuciones del empleador</h3><p>Financian jubilación, PAMI, asignaciones familiares y el Fondo Nacional de Empleo. Según la Ley 27.541, la alícuota global es de <b>20,40%</b> para empleadores de los sectores de servicios o comercio que superen ciertos montos de ventas, y de <b>18%</b> para el resto, sobre las que puede haber detracciones. A eso se suman el <b>6% de obra social</b>, la cuota de la <b>ART</b> (aseguradora de riesgos del trabajo) y el seguro de vida obligatorio.</p>
  <h3>Declaración y pago</h3><p>Se declaran por el sistema “Declaración en línea” (F.931) de ARCA y se pagan mensualmente. El empleador actúa como agente de retención de los aportes: si los retiene y no los deposita, comete un delito (apropiación indebida de recursos de la seguridad social).</p>
  <h3>Registración</h3><ol><li>Devengamiento: <span class="mono">Sueldos y jornales (bruto) a Retenciones a depositar (aportes) y a Sueldos a pagar (neto)</span>.</li><li>Contribuciones: <span class="mono">Contribuciones patronales a Cargas sociales a pagar</span>.</li><li>Pago: se cancelan los pasivos contra el banco.</li></ol>`,
  ex:[{type:"num",items:[{q:"Sueldo bruto $ 2.000.000. ¿Total de aportes del trabajador (17%)?",a:340000,u:"$"},{q:"¿Neto a cobrar?",a:1660000,u:"$"},{q:"Con contribuciones de 18% + 6% de obra social, ¿cuánto paga el empleador además del bruto?",a:480000,u:"$"},{q:"¿Cuál es el costo laboral total del mes, sin ART ni seguro?",a:2480000,u:"$"}]},
   {type:"asiento",accounts:ACC,entries:[{t:"31/05 · Devengá el sueldo bruto de $ 1.137.465 con aportes de $ 193.369,05.",e:[["Sueldos y jornales",1137465,0],["Retenciones a depositar",0,193369.05],["Sueldos a pagar",0,944095.95]]},{t:"31/05 · Registrá las contribuciones patronales del mes (24% ilustrativo): $ 272.991,60.",e:[["Contribuciones patronales",272991.6,0],["Cargas sociales a pagar",0,272991.6]]}]}]},
 {lead:"Liquidar un recibo de sueldo es combinar el convenio colectivo, la ley y los datos del trabajador.",
  html:`<h3>Pasos</h3><ol><li>Sueldo básico de la categoría según la escala vigente del convenio.</li><li>Adicionales del convenio (antigüedad, presentismo, título, zona).</li><li>Horas extra, comisiones, premios.</li><li>Ausencias sin goce de sueldo (se descuentan).</li><li>Total remunerativo.</li><li>Conceptos no remunerativos (si los hay).</li><li>Descuentos: aportes de ley, sindicales, retención de Ganancias si corresponde.</li><li>Neto a cobrar.</li></ol>
  <div class="note"><b>Ejemplo de convenio.</b> En el CCT 130/75 de Empleados de Comercio, la antigüedad es el 1% del básico por cada año y el presentismo (acuerdo de asistencia y puntualidad) equivale a 8,33% de la remuneración. Los valores exactos se actualizan con cada acuerdo paritario.</div>`,
  ex:[{type:"custom",title:"Liquidá el recibo de mayo",render:recibo}]},
 {lead:"El aguinaldo y las vacaciones son dos conceptos que todo liquidador calcula varias veces por año.",
  html:`<h3>Sueldo Anual Complementario (SAC, Ley 23.041)</h3><p>Es el <b>50% de la mayor remuneración mensual devengada</b> por todo concepto en cada semestre (enero a junio y julio a diciembre). Se paga en dos cuotas: la primera hasta el 30 de junio y la segunda hasta el 18 de diciembre, con un plazo de gracia de 4 días hábiles.</p>
  <p>Si el trabajador no trabajó el semestre completo, se paga en proporción al tiempo trabajado.</p>
  <div class="formula">SAC proporcional = Mejor remuneración / 2 × días trabajados en el semestre / días del semestre</div>
  <h3>Vacaciones (art. 155)</h3><p>Se pagan <b>antes</b> de que el trabajador empiece a gozarlas. Para mensualizados, el valor del día de vacaciones es el sueldo dividido por <b>25</b> (no por 30), lo que hace que cobrar vacaciones dé un poco más que el sueldo normal.</p>
  <div class="formula">Plus vacacional = Sueldo / 25 × días de vacaciones</div>
  <p>Ejemplo: sueldo $ 1.200.000 y 21 días de vacaciones: 1.200.000 / 25 × 21 = <b>$ 1.008.000</b> por los días de vacaciones (en lugar de los $ 840.000 que corresponderían a 21/30 del sueldo).</p>
  <h3>Provisión contable</h3><p>Como el SAC y las vacaciones se devengan mes a mes, se registra una provisión mensual (aproximadamente 1/12 del sueldo para el SAC) con sus cargas sociales.</p>`,
  ex:[{type:"num",items:[{q:"La mejor remuneración del primer semestre fue $ 1.500.000. ¿SAC del semestre completo?",a:750000,u:"$"},{q:"Si ingresó el 1/03 (122 días trabajados sobre 181), ¿SAC proporcional? (sin decimales)",a:505525,u:"$",tol:2,hint:"750.000 × 122 / 181"},{q:"Sueldo $ 1.200.000 y 14 días de vacaciones. ¿Pago por vacaciones?",a:672000,u:"$"}]}]},
 {lead:"Cuando termina la relación laboral, lo que se paga depende de cómo termina. El despido sin causa es el caso que más indemnización genera.",
  html:`<h3>Formas de extinción</h3><ul><li><b>Renuncia:</b> el trabajador debe dar 15 días de preaviso. No hay indemnización.</li><li><b>Mutuo acuerdo</b> (art. 241), ante escribano o autoridad.</li><li><b>Despido con justa causa:</b> por una injuria grave del trabajador. No hay indemnización.</li><li><b>Despido sin causa:</b> corresponden indemnizaciones.</li><li><b>Otras:</b> jubilación, fallecimiento, fuerza mayor.</li></ul>
  <h3>Liquidación final por despido sin causa</h3><div class="tw"><table><thead><tr><th>Rubro</th><th>Cálculo</th></tr></thead><tbody>
  <tr><td><b>Indemnización por antigüedad</b> (art. 245)</td><td>1 mes de la mejor remuneración mensual, normal y habitual del último año, por cada año de servicio o fracción mayor de 3 meses. Tiene un tope (3 veces el promedio del convenio), que según la Corte Suprema (caso Vizzoti, 2004) no puede reducir la base en más del 33%.</td></tr>
  <tr><td><b>Preaviso</b> (art. 231)</td><td>Si no se avisó: 15 días en período de prueba, 1 mes con antigüedad de hasta 5 años, 2 meses con más de 5 años.</td></tr>
  <tr><td><b>Integración del mes de despido</b> (art. 233)</td><td>Los días que faltan hasta fin de mes, si el despido no coincide con el último día.</td></tr>
  <tr><td><b>Vacaciones no gozadas</b> y <b>SAC proporcional</b></td><td>Lo devengado hasta la fecha, más el SAC sobre el preaviso y la integración.</td></tr></tbody></table></div>
  <p>La Ley 27.742 (2024) permitió que los convenios colectivos reemplacen la indemnización por un <b>fondo o sistema de cese laboral</b>. Verificá qué rige en cada actividad.</p>`,
  ex:[{type:"num",items:[{q:"Un empleado con 7 años y 4 meses de antigüedad y mejor remuneración de $ 1.200.000 es despedido sin causa. ¿Indemnización por antigüedad (sin tope)?",a:9600000,u:"$",hint:"4 meses es fracción mayor a 3: cuenta como año → 8 años"},{q:"Sin preaviso, ¿cuánto corresponde por indemnización sustitutiva de preaviso?",a:2400000,u:"$",hint:"Más de 5 años: 2 meses"},{q:"Otro empleado con 2 años y 2 meses, mejor sueldo $ 900.000. ¿Indemnización por antigüedad?",a:1800000,u:"$"}]},
   {type:"pick",title:"¿Corresponde indemnización por antigüedad?",options:["Sí","No"],items:[["Renuncia del trabajador","No"],["Despido sin causa después de 3 años","Sí"],["Despido con justa causa probada","No"],["Despido durante el período de prueba","No"]]}]},
],
eval:[
 {q:"¿Qué ley regula el contrato de trabajo?",o:["Ley 19.550","Ley 20.744","Ley 24.977","Ley 11.683"],a:1},
 {q:"Según la reforma de 2024, el período de prueba general es de…",o:["1 mes","3 meses","6 meses","1 año"],a:2},
 {q:"La jornada máxima legal es de…",o:["6 horas diarias","8 horas diarias o 48 semanales","10 horas diarias","40 semanales sin límite diario"],a:1},
 {q:"Las horas extra un domingo se pagan con un recargo del…",o:["25%","50%","100%","200%"],a:2},
 {q:"Con 12 años de antigüedad corresponden… días de vacaciones",o:["14","21","28","35"],a:2},
 {q:"Los aportes de ley del trabajador suman…",o:["11%","14%","17%","24%"],a:2},
 {q:"El SAC de un semestre es…",o:["Un sueldo completo","El 50% de la mayor remuneración del semestre","El promedio del semestre","El 8,33% del sueldo"],a:1},
 {q:"Para mensualizados, el día de vacaciones se calcula dividiendo el sueldo por…",o:["30","25","22","20"],a:1},
 {q:"La indemnización del art. 245 es de un mes por año o fracción mayor a…",o:["1 mes","3 meses","6 meses","1 año"],a:1},
 {q:"El preaviso para un trabajador con 8 años de antigüedad es de…",o:["15 días","1 mes","2 meses","3 meses"],a:2},
 {q:"Retener los aportes y no depositarlos es…",o:["Una demora administrativa","Un delito","Una práctica permitida","Un error sin consecuencias"],a:1},
]};
})();
