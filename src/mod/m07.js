/* Módulo 7 · Derecho público */
CAMPUS.content[7] = {
lessons:[
 {lead:"La Constitución Nacional es la ley suprema. Todas las demás normas, incluidas las impositivas, tienen que respetarla.",
  html:`<p>La Constitución argentina data de 1853, con reformas en 1860, 1866, 1898, 1957 y 1994. Tiene una parte <b>dogmática</b> (declaraciones, derechos y garantías) y una parte <b>orgánica</b> (organización de los poderes).</p>
  <h3>Pirámide jurídica</h3>
  <ol><li>Constitución Nacional y tratados de derechos humanos con jerarquía constitucional (art. 75 inc. 22).</li><li>Otros tratados internacionales (superiores a las leyes).</li><li>Leyes del Congreso.</li><li>Decretos del Poder Ejecutivo.</li><li>Resoluciones y normas de organismos (por ejemplo, resoluciones generales de ARCA).</li></ol>
  <h3>Derechos clave para la vida económica</h3>
  <ul><li><b>Art. 14:</b> trabajar y ejercer toda industria lícita, comerciar, usar y disponer de la propiedad, asociarse.</li>
  <li><b>Art. 14 bis:</b> derechos del trabajador (jornada limitada, salario mínimo, protección contra el despido arbitrario) y seguridad social.</li>
  <li><b>Art. 16:</b> igualdad ante la ley. “La igualdad es la base del impuesto y de las cargas públicas.”</li>
  <li><b>Art. 17:</b> la propiedad es inviolable; solo el Congreso impone las contribuciones del art. 4; la confiscación está prohibida.</li>
  <li><b>Art. 19:</b> nadie está obligado a hacer lo que la ley no manda ni privado de lo que ella no prohíbe.</li>
  <li><b>Art. 28:</b> las leyes que reglamentan los derechos no pueden alterarlos (principio de razonabilidad).</li></ul>
  <h3>Garantías</h3><p>El <b>amparo</b> (art. 43) protege contra actos que lesionen derechos de manera manifiestamente ilegal o arbitraria. El <b>hábeas data</b> permite acceder a los datos propios en registros públicos o privados y pedir su corrección.</p>
  ${CAMPUS.vid([["Constitución Nacional y derechos","constitución nacional y derechos derecho argentina explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué artículo de la Constitución aplica?",options:["Art. 14","Art. 14 bis","Art. 16","Art. 17","Art. 19"],items:[
   ["Un empleado reclama protección contra el despido arbitrario","Art. 14 bis"],["Se discute si un impuesto trata distinto a contribuyentes en igual situación","Art. 16"],
   ["Un impuesto se creó por decreto en lugar de por ley","Art. 17"],["Una persona quiere abrir un comercio","Art. 14"],["Nadie puede ser obligado a hacer lo que la ley no manda","Art. 19"]]}]},
 {lead:"Argentina adopta la forma representativa, republicana y federal (art. 1). El poder se divide entre tres órganos y entre Nación, provincias y municipios.",
  html:`<h3>División de poderes</h3>
  <div class="tw"><table><thead><tr><th>Poder</th><th>Integración</th><th>Funciones principales</th></tr></thead><tbody>
  <tr><td><b>Legislativo</b></td><td>Congreso: Cámara de Diputados (representa al pueblo) y Senado (3 senadores por provincia y 3 por la Ciudad de Buenos Aires)</td><td>Dictar leyes, crear impuestos, aprobar el presupuesto, controlar al Ejecutivo. La Auditoría General de la Nación lo asiste en el control externo.</td></tr>
  <tr><td><b>Ejecutivo</b></td><td>Presidente, con jefe de gabinete y ministros</td><td>Administrar el país, reglamentar leyes, recaudar.</td></tr>
  <tr><td><b>Judicial</b></td><td>Corte Suprema y tribunales inferiores</td><td>Resolver conflictos y controlar que las normas respeten la Constitución.</td></tr></tbody></table></div>
  <h3>Cómo se hace una ley</h3><ol><li>Se presenta el proyecto en una cámara (las leyes sobre contribuciones deben empezar en Diputados, art. 52).</li><li>La cámara de origen lo aprueba.</li><li>La cámara revisora lo aprueba, lo modifica o lo rechaza.</li><li>El Poder Ejecutivo lo promulga o lo veta.</li><li>Se publica en el Boletín Oficial y entra en vigencia.</li></ol>
  <h3>Decretos</h3><ul><li><b>Reglamentarios</b> (art. 99 inc. 2): detallan cómo se aplica una ley.</li><li><b>Delegados</b> (art. 76): en materias de administración o emergencia, con plazo y bases fijadas por el Congreso.</li>
  <li><b>De necesidad y urgencia</b> (art. 99 inc. 3): en situaciones excepcionales. Están <b>prohibidos en materia penal, tributaria, electoral y de partidos políticos</b>.</li></ul>
  <h3>Niveles de gobierno</h3><p>Las provincias conservan todo el poder no delegado a la Nación (art. 121) y dictan su propia constitución. Los municipios tienen autonomía (art. 123). La Ciudad de Buenos Aires tiene un régimen autónomo (art. 129).</p>
  ${CAMPUS.vid([["Organización del Estado","organización del estado derecho argentina explicacion"]])}`,
  ex:[{type:"order",title:"Ordená la formación de una ley tributaria",items:["Presentación del proyecto en la Cámara de Diputados","Aprobación en la cámara de origen","Aprobación en el Senado","Promulgación por el Poder Ejecutivo","Publicación en el Boletín Oficial"]},
   {type:"tf",items:[["Un decreto de necesidad y urgencia puede crear un impuesto","Falso","El art. 99 inc. 3 lo prohíbe expresamente."],["Las provincias conservan los poderes no delegados a la Nación","Verdadero"]]}]},
 {lead:"El poder del Estado de cobrar impuestos no es ilimitado. La Constitución fija principios que todo tributo debe respetar.",
  html:`<h3>Principios constitucionales de la tributación</h3>
  <ul><li><b>Legalidad o reserva de ley:</b> no hay tributo sin ley (arts. 4, 17, 19, 52, 75 y 99). La ley debe definir los elementos esenciales: hecho imponible, sujetos, base, alícuota y exenciones.</li>
  <li><b>Igualdad:</b> igual tratamiento a quienes están en igualdad de condiciones (art. 16). Permite categorías razonables.</li>
  <li><b>Capacidad contributiva:</b> cada uno debe contribuir según su aptitud económica (ingresos, patrimonio, consumo).</li>
  <li><b>Generalidad:</b> nadie debe quedar exento por privilegios personales.</li>
  <li><b>No confiscatoriedad:</b> el tributo no puede absorber una parte sustancial de la renta o del capital. La Corte Suprema ha tomado como referencia el 33%, según el caso.</li>
  <li><b>Razonabilidad y proporcionalidad.</b></li></ul>
  <h3>Recursos del Tesoro (art. 4)</h3><p>Derechos de importación y exportación, venta o locación de tierras nacionales, renta de correos, demás contribuciones que imponga el Congreso equitativa y proporcionalmente, empréstitos y operaciones de crédito.</p>
  <h3>Reparto de potestades (art. 75 inc. 1 y 2)</h3>
  <ul><li><b>Derechos aduaneros:</b> exclusivos de la Nación.</li><li><b>Impuestos indirectos</b> (como el IVA): concurrentes entre Nación y provincias.</li>
  <li><b>Impuestos directos</b> (como Ganancias o Bienes Personales): en principio son de las provincias. La Nación puede crearlos por tiempo determinado, cuando la defensa, la seguridad común y el bien general lo exijan. Por eso Ganancias se prorroga periódicamente.</li></ul>
  ${CAMPUS.vid([["Poder tributario y sus principios","poder tributario y sus principios derecho argentina explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué principio se vulnera?",options:["Legalidad","Igualdad","No confiscatoriedad","Capacidad contributiva"],items:[
   ["Una resolución de un organismo fija la alícuota de un impuesto que la ley no estableció","Legalidad"],["Un impuesto absorbe el 70% de la renta de un inmueble","No confiscatoriedad"],
   ["Se grava distinto a dos comercios idénticos solo por el apellido del dueño","Igualdad"],["Se cobra el mismo impuesto sobre el patrimonio a quien no tiene bienes que a quien tiene muchos","Capacidad contributiva"]]}]},
 {lead:"Nación, provincias y municipios recaudan impuestos, pero la mayor parte la cobra la Nación y después la reparte. Ese sistema se llama coparticipación.",
  html:`<h3>Ley 23.548 de Coparticipación Federal</h3><p>Rige desde 1988 como régimen “transitorio”, que sigue vigente. Distribuye la masa coparticipable (principalmente IVA y Ganancias) entre la Nación y las provincias.</p>
  <ul><li><b>Distribución primaria:</b> entre Nación y el conjunto de provincias.</li><li><b>Distribución secundaria:</b> entre las provincias, según porcentajes fijos de la ley.</li></ul>
  <p>Cada provincia, a su vez, coparticipa con sus municipios.</p>
  <h3>Reforma de 1994</h3><p>El art. 75 inc. 2 ordena dictar una nueva <b>ley convenio</b> sobre la base de acuerdos entre la Nación y las provincias, con criterios objetivos y solidarios. La disposición transitoria sexta fijó el plazo de 1996, que no se cumplió.</p>
  <h3>Impuestos por nivel de gobierno</h3>
  <div class="tw"><table><thead><tr><th>Nivel</th><th>Ejemplos</th></tr></thead><tbody>
  <tr><td>Nacional</td><td>IVA, Ganancias, Bienes Personales, Impuesto sobre los Créditos y Débitos bancarios, internos, derechos aduaneros, contribuciones a la seguridad social</td></tr>
  <tr><td>Provincial</td><td>Ingresos Brutos, Sellos, Inmobiliario, Automotor</td></tr>
  <tr><td>Municipal</td><td>Tasas (por ejemplo, de seguridad e higiene, alumbrado, barrido y limpieza)</td></tr></tbody></table></div>
  <div class="note"><b>Impuesto, tasa y contribución.</b> El <b>impuesto</b> se paga sin contraprestación específica. La <b>tasa</b> retribuye un servicio concreto e individualizado. La <b>contribución especial</b> se cobra por un beneficio derivado de una obra pública (por ejemplo, pavimento). Lo profundizamos en el Módulo 20.</div>
  ${CAMPUS.vid([["Federalismo fiscal y coparticipación","federalismo fiscal y coparticipación derecho argentina explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué nivel de gobierno lo cobra?",options:["Nacional","Provincial","Municipal"],items:[["IVA","Nacional"],["Ingresos Brutos","Provincial"],["Tasa de seguridad e higiene","Municipal"],["Impuesto de Sellos","Provincial"],["Bienes Personales","Nacional"],["Impuesto Inmobiliario","Provincial"]]}]},
 {lead:"Cuando el Estado decide algo que afecta a una persona o empresa, lo hace mediante un acto administrativo.",
  html:`<p>El acto administrativo es una declaración unilateral de un órgano estatal, en ejercicio de función administrativa, que produce efectos jurídicos directos sobre particulares. Ejemplos: una determinación de deuda de ARCA, una habilitación municipal, una multa.</p>
  <h3>Elementos esenciales (Ley 19.549, art. 7 y 8)</h3>
  <ul><li><b>Competencia:</b> lo dicta el órgano que tiene facultades para hacerlo.</li><li><b>Causa:</b> los hechos y el derecho que lo justifican.</li><li><b>Objeto:</b> lo que decide, que debe ser cierto, física y jurídicamente posible.</li>
  <li><b>Procedimiento:</b> se cumplen los pasos previos (incluido el dictamen jurídico cuando corresponde).</li><li><b>Motivación:</b> se expresan las razones.</li><li><b>Finalidad:</b> la que tuvo en miras la norma que otorga la facultad.</li><li><b>Forma:</b> por escrito, como regla.</li></ul>
  <h3>Caracteres</h3><ul><li><b>Presunción de legitimidad:</b> se presume válido mientras no se declare lo contrario.</li><li><b>Ejecutoriedad:</b> la Administración puede ejecutarlo por sí misma, salvo que la ley exija intervención judicial.</li></ul>
  <h3>Nulidad</h3><p>Un acto con vicios graves en sus elementos es <b>nulo</b> (por ejemplo, dictado por un órgano incompetente). Con vicios leves es <b>anulable</b>.</p>
  ${CAMPUS.vid([["Acto administrativo","acto administrativo derecho argentina explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué elemento del acto está viciado?",options:["Competencia","Causa","Objeto","Motivación","Finalidad"],items:[
   ["Una multa la firma un empleado que no tiene facultades para sancionar","Competencia"],["La resolución no explica por qué se aplica la sanción","Motivación"],
   ["Se clausura un local por una infracción que nunca ocurrió","Causa"],["Se ordena algo imposible de cumplir","Objeto"],["Un funcionario usa una facultad de inspección para perjudicar a un competidor de un amigo","Finalidad"]]}]},
 {lead:"Si un acto administrativo te perjudica, podés cuestionarlo. Saber los plazos es esencial: un recurso presentado tarde se pierde.",
  html:`<h3>Recursos administrativos generales</h3><p>Rigen por la Ley 19.549 y su reglamento (Decreto 1759/72, con sus modificaciones).</p>
  <ul><li><b>Reconsideración:</b> ante el mismo órgano que dictó el acto. Plazo: 10 días hábiles administrativos.</li>
  <li><b>Jerárquico:</b> ante el órgano superior, para que lo revise. Plazo: 15 días hábiles administrativos.</li>
  <li><b>Alzada:</b> contra actos de entes descentralizados, ante el ministerio correspondiente.</li></ul>
  <p>Agotada la vía administrativa, se puede ir a la justicia en el plazo que fija la ley.</p>
  <h3>En materia tributaria nacional</h3><p>La Ley 11.683 tiene un régimen propio. Contra una determinación de oficio o una multa de ARCA se puede optar, dentro de los 15 días hábiles, entre el <b>recurso de reconsideración</b> ante el superior jerárquico o el <b>recurso de apelación ante el Tribunal Fiscal de la Nación</b> (cuando el monto supera el mínimo legal). Lo vemos en detalle en el Módulo 20.</p>
  <div class="note"><b>Días hábiles.</b> En el procedimiento administrativo y tributario los plazos se cuentan en días hábiles administrativos: se excluyen sábados, domingos, feriados y días no laborables para la Administración.</div>
  ${CAMPUS.vid([["Procedimiento administrativo y recursos","procedimiento administrativo y recursos derecho argentina explicacion"]])}`,
  ex:[{type:"tf",items:[["El recurso de reconsideración se presenta ante el mismo órgano que dictó el acto","Verdadero"],["El plazo general del recurso jerárquico es de 15 días hábiles administrativos","Verdadero"],["Contra una determinación de oficio de ARCA se puede apelar ante el Tribunal Fiscal de la Nación","Verdadero","Si el monto supera el mínimo que fija la ley."],["Los plazos administrativos se cuentan en días corridos, incluidos los fines de semana","Falso"]]}]},
],
eval:[
 {q:"¿Qué artículo de la Constitución dice que la igualdad es la base del impuesto?",o:["Art. 14","Art. 16","Art. 19","Art. 75"],a:1},
 {q:"Las leyes sobre contribuciones deben iniciarse en…",o:["El Senado","La Cámara de Diputados","El Poder Ejecutivo","La Corte Suprema"],a:1,ex:"Art. 52 de la Constitución."},
 {q:"Los DNU están prohibidos en materia…",o:["Laboral","Tributaria","Comercial","De salud"],a:1},
 {q:"El principio de legalidad tributaria exige que…",o:["Los impuestos sean bajos","Los elementos esenciales del tributo estén en una ley","Los impuestos los fijen las provincias","No haya exenciones"],a:1},
 {q:"Según el art. 75 inc. 2, los impuestos directos nacionales…",o:["Son permanentes","Son por tiempo determinado y por razones excepcionales","Están prohibidos","Son exclusivos de los municipios"],a:1},
 {q:"Ingresos Brutos es un impuesto…",o:["Nacional","Provincial","Municipal","Aduanero"],a:1},
 {q:"La tasa se diferencia del impuesto porque…",o:["Es más alta","Retribuye un servicio concreto","La cobra solo la Nación","No es obligatoria"],a:1},
 {q:"Un acto administrativo se presume…",o:["Nulo","Legítimo","Revocado","Provisorio"],a:1},
 {q:"¿Qué ley rige la coparticipación federal?",o:["Ley 11.683","Ley 23.548","Ley 19.550","Ley 24.156"],a:1},
 {q:"El plazo general del recurso de reconsideración es…",o:["5 días hábiles","10 días hábiles","30 días corridos","1 año"],a:1},
]};
