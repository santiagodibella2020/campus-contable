/* Profundización de Derecho laboral y sueldos. Se carga después de lecciones.js y p1_impuestos.js. */
(function(){
const add = (n, title, L)=>{ CAMPUS.modules.find(m=>m.n===n).l.push(title); CAMPUS.content[n].lessons.push(L); };
const xq = (n, qs)=>{ CAMPUS.xeval[n] = (CAMPUS.xeval[n]||[]).concat(qs); };

add(22, "Caso completo: liquidación final por despido sin causa", {
 lead:"Una liquidación final real junta todos los rubros: días trabajados, indemnizaciones, preaviso, integración, SAC y vacaciones. Este caso los calcula uno por uno, con las reglas de la LCT según la Ley 27.802.",
 src:["lct","modlab","sipa"],
 cite:["Ley 20.744 de Contrato de Trabajo, arts. 156, 231, 232, 233 y 245 (texto según Ley 27.802).","Ley 23.041 (SAC).","Ley 24.241, art. 7 (conceptos que no son remuneración).","Ley de Impuesto a las Ganancias, art. 26 inc. i) (exención de indemnizaciones)."],
 html:`<h3>Datos</h3><ul><li>Ingreso: 1/3/2019. Despido sin causa notificado el <b>10/9/2026</b>, sin preaviso.</li><li>Mejor remuneración mensual, normal y habitual del último año: <b>$ 1.500.000</b> (sueldo fijo, sin variables). Se supone que no opera el tope del convenio.</li><li>No gozó vacaciones de 2026.</li></ul>
 <h3>Rubros y cálculo</h3><div class="tw"><table><thead><tr><th>Rubro</th><th>Cálculo</th><th>Importe</th></tr></thead><tbody>
 <tr><td>Días trabajados de septiembre</td><td>1.500.000 / 30 × 10</td><td>500.000,00</td></tr>
 <tr><td>SAC proporcional (2.º semestre)</td><td>1.500.000 / 2 × 72 / 184 días</td><td>293.478,26</td></tr>
 <tr><td>Indemnización por antigüedad (art. 245)</td><td>7 años y 6 meses → 8 períodos × 1.500.000</td><td>12.000.000,00</td></tr>
 <tr><td>Indemnización sustitutiva de preaviso (art. 232)</td><td>Más de 5 años: 2 meses</td><td>3.000.000,00</td></tr>
 <tr><td>SAC sobre preaviso</td><td>3.000.000 / 12</td><td>250.000,00</td></tr>
 <tr><td>Integración del mes de despido (art. 233)</td><td>1.500.000 / 30 × 20 días restantes</td><td>1.000.000,00</td></tr>
 <tr><td>SAC sobre integración</td><td>1.000.000 / 12</td><td>83.333,33</td></tr>
 <tr><td>Vacaciones no gozadas (art. 156)</td><td>21 días × 253 / 365 = 14,56 días × (1.500.000 / 25)</td><td>873.600,00</td></tr>
 <tr><td>SAC sobre vacaciones no gozadas</td><td>873.600 / 12</td><td>72.800,00</td></tr></tbody></table></div>
 <h3>Cómo se llega a cada número</h3><ul>
 <li><b>Antigüedad:</b> del 1/3/2019 al 10/9/2026 hay 7 años, 6 meses y 10 días. La fracción mayor de 3 meses cuenta como un año más: 8 períodos.</li>
 <li><b>Base del art. 245:</b> con la Ley 27.802 no incluye SAC, vacaciones ni premios no mensuales. Si hubiera tope de convenio, la base no podría quedar por debajo del 67% de la mejor remuneración.</li>
 <li><b>SAC proporcional:</b> del 1/7 al 10/9 son 72 días (31 + 31 + 10) sobre 184 del semestre.</li>
 <li><b>Vacaciones:</b> la antigüedad al 31/12/2026 sería de 7 años y 10 meses, así que corresponden 21 días. Como el contrato termina en el año, se pagan en proporción a los días trabajados (253 sobre 365), con el divisor 25.</li>
 <li><b>SAC sobre preaviso, integración y vacaciones no gozadas:</b> es el criterio mayoritario de la jurisprudencia, porque esos rubros reemplazan salarios que se habrían devengado.</li></ul>
 <h3>Aportes y Ganancias</h3><p>Solo los rubros <b>remunerativos</b> (días trabajados y SAC proporcional) llevan aportes y contribuciones. Las indemnizaciones por antigüedad, preaviso, integración y vacaciones no gozadas no son remuneración a esos efectos (Ley 24.241, art. 7), y la indemnización por antigüedad está <b>exenta de Ganancias</b>.</p>
 <div class="formula">Remunerativo: 500.000 + 293.478,26 = 793.478,26  →  Aportes 17% = 134.891,30</div>
 <div class="formula">Total de la liquidación = 18.073.211,59 bruto − 134.891,30 de aportes = 17.938.320,29 neto</div>
 <h3>Plazos</h3><p>La liquidación final se paga dentro de los 4 días hábiles de la extinción (art. 128, art. 255 bis). Los certificados del art. 80 se entregan dentro de los 45 días hábiles. El FAL, si el empleador está adherido, financia el pago, pero la deuda sigue siendo del empleador.</p>`,
 ex:[{type:"num",items:[
   {q:"Antigüedad de 4 años y 2 meses, mejor remuneración $ 2.000.000. ¿Indemnización por antigüedad?",a:8000000,u:"$",hint:"2 meses no supera los 3 meses: cuenta 4."},
   {q:"Mismo caso, despido sin preaviso. ¿Indemnización sustitutiva de preaviso?",a:2000000,u:"$",hint:"Hasta 5 años: 1 mes."},
   {q:"Despido notificado el 20/6 (mes de 30 días), sueldo $ 2.000.000. ¿Integración del mes de despido?",a:666666.67,u:"$",tol:1,ex:"2.000.000 / 30 × 10 días."},
   {q:"Mejor remuneración del semestre $ 2.000.000; trabajó 90 de los 181 días del primer semestre. ¿SAC proporcional?",a:497237.57,u:"$",tol:1},
   {q:"Le correspondían 14 días de vacaciones por año y trabajó 146 de 365 días. Sueldo $ 2.000.000. ¿Vacaciones no gozadas? (días con dos decimales)",a:448000,u:"$",tol:1,ex:"14 × 146 / 365 = 5,60 días × 80.000 = $ 448.000."},
   {q:"En el caso de la lección, ¿cuál es el total de rubros remunerativos?",a:793478.26,u:"$",tol:0.02}]},
  {type:"pick",title:"¿Lleva aportes?",options:["Sí","No"],items:[
   ["Días trabajados del mes del despido","Sí"],["SAC proporcional","Sí"],["Indemnización por antigüedad","No"],["Indemnización sustitutiva de preaviso","No"],["Vacaciones no gozadas","No"],["Integración del mes de despido","No"]]},
  {type:"tf",items:[
   ["La indemnización por antigüedad está exenta de Ganancias.",true,"Art. 26 inc. i) de la ley del impuesto."],
   ["Una antigüedad de 6 años y 2 meses da 7 períodos para el art. 245.",false,"2 meses no es fracción mayor de 3 meses: son 6."],
   ["Si el despido se notifica el último día del mes, no hay integración.",true],
   ["Con la Ley 27.802 el SAC se suma a la base de la indemnización por antigüedad.",false]]}]
});

add(22, "Bases de aportes, Libro de Sueldos Digital y retención de Ganancias", {
 lead:"Liquidar bien no termina en el recibo: hay que respetar las bases de aportes, informar todo en el Libro de Sueldos Digital y el F.931, y retener Ganancias cuando corresponde.",
 src:["sipa","arca","gan"],
 cite:["Ley 24.241, art. 9 (bases imponibles mínima y máxima).","ARCA: Libro de Sueldos Digital y Declaración en línea (F.931).","ARCA: régimen de retención de Ganancias sobre rentas del trabajo personal y SIRADIG (F.572 web)."],
 html:`<h3>Bases imponibles mínima y máxima</h3><p>Los <b>aportes</b> del trabajador se calculan sobre la remuneración, pero con un <b>tope máximo</b>: lo que exceda la base máxima no lleva aportes personales. También hay una <b>base mínima</b>. Las <b>contribuciones</b> del empleador, en cambio, se calculan sobre toda la remuneración, sin tope. Las bases se actualizan con la movilidad jubilatoria y ARCA y ANSES publican los valores vigentes.</p>
 <div class="formula">Aportes = 17% × menor entre (remuneración, base máxima)  ·  Contribuciones = alícuota × remuneración total</div>
 <h3>Libro de Sueldos Digital</h3><p>Cada mes el empleador carga en el sistema de ARCA los conceptos liquidados a cada empleado, asociados a los conceptos de la seguridad social. Desde ahí se genera la declaración jurada F.931 de aportes y contribuciones. Con la Ley 27.802, el registro digital de ARCA es el registro único de la relación laboral y reemplaza a los libros en papel.</p>
 <h3>Asignaciones familiares</h3><p>Las paga en general <b>ANSES</b> en forma directa (Sistema Único de Asignaciones Familiares), no el empleador. No son remuneración y no llevan aportes. El empleador debe informar bien los datos del trabajador para que ANSES liquide.</p>
 <h3>Retención de Ganancias al empleado</h3><p>Con la Ley 27.743 (2024) los sueldos volvieron a estar alcanzados por Ganancias con la escala del art. 94 y las deducciones del art. 30. El empleador es <b>agente de retención</b>: cada mes acumula la ganancia del año, resta las deducciones que el empleado informó en <b>SIRADIG</b> (F.572 web) y retiene la diferencia entre el impuesto acumulado y lo ya retenido.</p>
 <div class="formula">Retención del mes = Impuesto acumulado al mes − Retenciones de meses anteriores</div>
 <p>En marzo del año siguiente el empleador hace la liquidación anual y entrega al empleado el formulario 1357. Si el empleado tiene otros ingresos o supera ciertos montos, además presenta su propia declaración jurada.</p>`,
 ex:[{type:"num",items:[
   {q:"Sueldo de $ 8.000.000 y base máxima ilustrativa de $ 5.000.000. ¿Aportes personales (17%)?",a:850000,u:"$"},
   {q:"Mismo sueldo, contribuciones del 24% sin tope. ¿Contribuciones del empleador?",a:1920000,u:"$"},
   {q:"Impuesto acumulado a octubre $ 1.300.000; retenciones de enero a septiembre $ 1.150.000. ¿Retención de octubre?",a:150000,u:"$"}]},
  {type:"tf",items:[
   ["Las contribuciones patronales tienen el mismo tope que los aportes.",false,"El tope de la base máxima rige para los aportes personales."],
   ["Las asignaciones familiares las paga en general ANSES directamente.",true],
   ["El empleado informa sus deducciones de Ganancias en SIRADIG.",true],
   ["El F.931 se genera a partir de lo cargado en el Libro de Sueldos Digital.",true]]}]
});

xq(22, [
 {q:"Una antigüedad de 7 años y 6 meses equivale, para el art. 245, a…",o:["7 períodos","7,5 períodos","8 períodos","No da indemnización"],a:2},
 {q:"La integración del mes de despido corresponde cuando…",o:["El despido se notifica sin preaviso en un día que no es el último del mes","Hay renuncia","Hay justa causa","Siempre, en cualquier extinción"],a:0},
 {q:"¿Cuál de estos rubros de la liquidación final lleva aportes?",o:["Indemnización por antigüedad","SAC proporcional","Preaviso","Vacaciones no gozadas"],a:1},
 {q:"La indemnización por antigüedad, frente a Ganancias, está…",o:["Gravada al 35%","Exenta","Gravada como primera categoría","Sujeta a retención del 7%"],a:1},
 {q:"La base máxima de la seguridad social limita…",o:["Los aportes personales","Las contribuciones patronales","Ambos","El sueldo que se puede pagar"],a:0},
 {q:"La Ley 27.742 (2024), respecto de las multas de los arts. 8, 9, 10 y 15 de la Ley 24.013…",o:["Las duplicó","Las derogó","Las trasladó a la LCT","No las tocó"],a:1},
 {q:"La retención mensual de Ganancias a un empleado se calcula…",o:["Sobre el sueldo del mes, sin acumular","En forma acumulada en el año, menos lo ya retenido","Solo en diciembre","Con una alícuota fija del 6%"],a:1},
]);
})();
