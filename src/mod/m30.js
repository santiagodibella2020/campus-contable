/* Módulo 30 · Contabilidad gubernamental y control de gestión */
CAMPUS.content[30] = {
lessons:[
 {lead:"El Estado nacional administra sus recursos con un sistema integrado que fija la Ley 24.156 de Administración Financiera y de los Sistemas de Control del Sector Público Nacional (1992).",
  html:`<h3>Los sistemas de la administración financiera</h3><div class="tw"><table><thead><tr><th>Sistema</th><th>Órgano rector</th><th>Qué hace</th></tr></thead><tbody>
  <tr><td>Presupuesto</td><td>Oficina Nacional de Presupuesto (ONP)</td><td>Formula y controla la ejecución del presupuesto</td></tr>
  <tr><td>Crédito público</td><td>Oficina Nacional de Crédito Público</td><td>Gestiona el endeudamiento del Estado</td></tr>
  <tr><td>Tesorería</td><td>Tesorería General de la Nación (TGN)</td><td>Administra los fondos y los pagos</td></tr>
  <tr><td>Contabilidad</td><td>Contaduría General de la Nación (CGN)</td><td>Registra las transacciones y prepara la Cuenta de Inversión</td></tr></tbody></table></div>
  <p>Los cuatro sistemas están interrelacionados: cada transacción presupuestaria se registra una sola vez y alimenta a todos (el sistema e-SIDIF).</p>
  <h3>Los sistemas de control</h3><ul><li><b>Control interno:</b> la <b>Sindicatura General de la Nación (SIGEN)</b>, que depende del Poder Ejecutivo, coordina las unidades de auditoría interna de cada organismo.</li><li><b>Control externo:</b> la <b>Auditoría General de la Nación (AGN)</b>, que asiste técnicamente al Congreso. Tiene rango constitucional (art. 85 de la Constitución) y la preside una persona propuesta por el principal partido de la oposición.</li></ul>
  <h3>La Cuenta de Inversión</h3><p>Cada año el Poder Ejecutivo presenta al Congreso la <b>Cuenta de Inversión</b>, que muestra cómo se ejecutó el presupuesto y la situación del Tesoro y de la deuda. El Congreso la aprueba o la rechaza, con el dictamen de la AGN.</p>
  ${CAMPUS.vid([["La administración financiera del Estado","la administración financiera del estado sector publico argentina explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué órgano es?",options:["ONP","TGN","CGN","SIGEN","AGN"],items:[["Prepara la Cuenta de Inversión","CGN"],["Asiste al Congreso en el control externo","AGN"],["Coordina las auditorías internas del Poder Ejecutivo","SIGEN"],["Administra los fondos y realiza los pagos","TGN"],["Formula el proyecto de presupuesto","ONP"]]},
   {type:"tf",items:[["La AGN tiene rango constitucional.",true,"Art. 85 de la Constitución Nacional."],["La SIGEN es un órgano de control externo que depende del Congreso.",false,"Es control interno y depende del Poder Ejecutivo."],["La Cuenta de Inversión la aprueba el Congreso.",true]]}]},
 {lead:"El presupuesto público se clasifica de varias formas, y cada una responde a una pregunta distinta: quién gasta, en qué, para qué y con qué fondos.",
  html:`<h3>Clasificadores presupuestarios</h3><div class="tw"><table><thead><tr><th>Clasificador</th><th>Pregunta</th><th>Ejemplo</th></tr></thead><tbody>
  <tr><td>Institucional</td><td>¿Quién gasta?</td><td>Ministerio de Salud</td></tr>
  <tr><td>Por objeto del gasto</td><td>¿En qué se gasta?</td><td>Inciso 1 Gastos en personal; 2 Bienes de consumo; 3 Servicios no personales; 4 Bienes de uso; 5 Transferencias</td></tr>
  <tr><td>Por finalidad y función</td><td>¿Para qué?</td><td>Servicios sociales: salud, educación; Servicios de defensa y seguridad</td></tr>
  <tr><td>Por fuente de financiamiento</td><td>¿Con qué fondos?</td><td>Tesoro nacional, recursos propios, crédito externo</td></tr>
  <tr><td>Económico</td><td>¿Es corriente o de capital?</td><td>Gastos de consumo frente a inversión real</td></tr>
  <tr><td>Programático</td><td>¿Qué producción pública se obtiene?</td><td>Programa de vacunación con sus metas físicas</td></tr></tbody></table></div>
  <h3>Esquema ahorro-inversión-financiamiento</h3><div class="formula">Ingresos corrientes − Gastos corrientes = Resultado económico (ahorro)<br>Ahorro + Ingresos de capital − Gastos de capital = Resultado financiero<br>El resultado financiero se cubre (o se aplica) con fuentes y aplicaciones financieras: deuda, uso de reservas, amortización de deuda.</div>
  <h3>Presupuesto por programas</h3><p>La Ley 24.156 adopta la técnica de <b>presupuesto por programas</b>: cada programa tiene un responsable, recursos asignados y <b>metas físicas</b> (vacunas aplicadas, kilómetros de ruta). Así se puede medir no solo cuánto se gastó sino qué se obtuvo.</p>
  ${CAMPUS.vid([["Clasificadores presupuestarios","clasificadores presupuestarios sector publico argentina explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"Ingresos corrientes $ 900.000 M y gastos corrientes $ 850.000 M. ¿Resultado económico?",a:50000,u:"$ M"},
   {q:"Con ingresos de capital $ 10.000 M y gastos de capital $ 90.000 M, ¿resultado financiero? (déficit, sin signo)",a:30000,u:"$ M"},
   {q:"Si además hay intereses de la deuda por $ 20.000 M incluidos en los gastos corrientes, ¿resultado primario? (déficit antes de intereses, sin signo)",a:10000,u:"$ M",hint:"Primario = financiero + intereses: −30.000 + 20.000 = −10.000 (déficit)."}]},
   {type:"pick",title:"¿Qué clasificador responde?",options:["Institucional","Por objeto","Por finalidad y función","Por fuente"],items:[["El gasto lo realiza el Ministerio de Educación","Institucional"],["Se compran medicamentos (bienes de consumo)","Por objeto"],["El gasto es para servicios de salud","Por finalidad y función"],["Se financia con un préstamo del BID","Por fuente"]]}]},
 {lead:"El gasto público pasa por etapas que la contabilidad registra una por una. La etapa clave para la contabilidad gubernamental es el devengado.",
  html:`<h3>Etapas del gasto</h3><ol><li><b>Crédito presupuestario:</b> la autorización máxima para gastar que da la ley de presupuesto.</li><li><b>Compromiso:</b> se afecta el crédito con una decisión que obliga a terceros (por ejemplo, la orden de compra adjudicada).</li><li><b>Devengado:</b> nace la obligación de pago porque el proveedor entregó el bien o prestó el servicio, con la conformidad de quien recibe.</li><li><b>Pagado:</b> se cancela la obligación. Antes se emite la orden de pago.</li></ol>
  <div class="formula">Crédito ≥ Compromiso ≥ Devengado ≥ Pagado</div>
  <h3>Deuda exigible</h3><p>La diferencia entre lo devengado y lo pagado es la <b>deuda exigible</b> del Estado con sus proveedores. Al cierre del ejercicio, los gastos devengados y no pagados se cancelan en el ejercicio siguiente con los fondos disponibles.</p>
  <h3>Etapas del recurso</h3><p>Del lado de los ingresos se registra el <b>recurso devengado</b> (nace el derecho de cobro) y el <b>percibido</b> (ingresa a la Tesorería). Para los impuestos, el criterio práctico suele ser el percibido.</p>
  <h3>Diferencias con la contabilidad privada</h3><ul><li>El objetivo no es medir ganancia sino controlar la ejecución del presupuesto y rendir cuentas.</li><li>La contabilidad presupuestaria convive con la patrimonial (activos, pasivos y patrimonio del Estado).</li><li>La referencia internacional son las Normas Internacionales de Contabilidad para el Sector Público (NICSP o IPSAS).</li></ul>
  ${CAMPUS.vid([["Etapas del gasto y del recurso","etapas del gasto y del recurso sector publico argentina explicacion"]])}`,
  ex:[{type:"order",title:"Ordená las etapas del gasto",items:["Crédito presupuestario","Compromiso","Devengado","Pagado"]},
   {type:"num",items:[
    {q:"Crédito $ 500 M, comprometido $ 420 M, devengado $ 380 M, pagado $ 300 M. ¿Deuda exigible?",a:80,u:"$ M"},
    {q:"En el mismo caso, ¿crédito disponible para nuevos compromisos?",a:80,u:"$ M"},
    {q:"¿Compromisos aún no devengados?",a:40,u:"$ M"}]},
   {type:"pick",title:"¿En qué etapa está?",options:["Compromiso","Devengado","Pagado"],items:[["Se adjudica una licitación y se emite la orden de compra","Compromiso"],["El hospital recibe los insumos de conformidad","Devengado"],["La TGN transfiere el dinero al proveedor","Pagado"],["Se firma un contrato de obra pública","Compromiso"]]}]},
 {lead:"El control de gestión mide si una organización, pública o privada, logra sus objetivos y con qué uso de recursos. Es la otra mitad de esta materia.",
  html:`<h3>Las tres E</h3><div class="tw"><table><thead><tr><th>Concepto</th><th>Pregunta</th><th>Indicador de ejemplo</th></tr></thead><tbody>
  <tr><td><b>Eficacia</b></td><td>¿Se cumplió la meta?</td><td>Vacunas aplicadas / vacunas programadas</td></tr>
  <tr><td><b>Eficiencia</b></td><td>¿Con qué relación entre recursos y resultados?</td><td>Costo por vacuna aplicada</td></tr>
  <tr><td><b>Economía</b></td><td>¿Se obtuvieron los recursos al menor costo, con la calidad debida?</td><td>Precio pagado / precio de referencia</td></tr></tbody></table></div>
  <p>Muchas veces se suma una cuarta E, la <b>efectividad</b> (o impacto): si el programa cambió la realidad que quería cambiar, por ejemplo si bajó la tasa de la enfermedad.</p>
  <h3>Tablero de control</h3><p>Es un conjunto acotado de indicadores clave, con metas y semáforos, que permite a la dirección ver de un vistazo si la gestión va bien. El <b>cuadro de mando integral</b> (Kaplan y Norton) los ordena en cuatro perspectivas: financiera, clientes (o ciudadanos), procesos internos, y aprendizaje y crecimiento.</p>
  <h3>Requisitos de un buen indicador</h3><ul><li>Relevante para un objetivo.</li><li>Medible con datos confiables y a tiempo.</li><li>Comparable con una meta, con períodos anteriores o con otras organizaciones.</li><li>Con un responsable asignado.</li></ul>
  <h3>Auditoría de gestión</h3><p>La AGN y las auditorías internas no solo revisan la legalidad y los números: también hacen <b>auditorías de gestión</b>, que evalúan la eficacia, la eficiencia y la economía de los programas.</p>
  ${CAMPUS.vid([["Control de gestión e indicadores","control de gestión e indicadores sector publico argentina explicacion"]])}`,
  ex:[{type:"num",items:[
   {q:"Meta: 200.000 vacunas; aplicadas: 170.000. ¿Eficacia? (en %)",a:85,u:"%",tol:0.01},
   {q:"Costo total del programa $ 340.000.000. ¿Costo por vacuna aplicada?",a:2000,u:"$"},
   {q:"Se pagó $ 1.200 por dosis y el precio de referencia es $ 1.000. ¿Sobreprecio en %?",a:20,u:"%",tol:0.01}]},
   {type:"pick",title:"¿Eficacia, eficiencia o economía?",options:["Eficacia","Eficiencia","Economía"],items:[["Porcentaje de expedientes resueltos sobre los programados","Eficacia"],["Costo por alumno egresado","Eficiencia"],["Precio de compra del papel comparado con el de mercado","Economía"],["Kilómetros de ruta pavimentados sobre la meta anual","Eficacia"],["Horas de trabajo por trámite resuelto","Eficiencia"]]}]},
],
eval:[
 {q:"La ley de administración financiera del sector público nacional es la…",o:["Ley 19.550","Ley 24.156","Ley 11.683","Ley 25.917"],a:1},
 {q:"El órgano rector del sistema de contabilidad gubernamental es…",o:["La TGN","La CGN","La ONP","La AGN"],a:1},
 {q:"El control externo del sector público nacional lo ejerce…",o:["La SIGEN","La AGN, que asiste al Congreso","El BCRA","La CNV"],a:1},
 {q:"La SIGEN depende de…",o:["El Congreso","El Poder Ejecutivo","El Poder Judicial","Las provincias"],a:1},
 {q:"El documento anual que muestra la ejecución del presupuesto es…",o:["La Cuenta de Inversión","El balance social","La memoria","El presupuesto plurianual"],a:0},
 {q:"La etapa del gasto en que nace la obligación de pago es…",o:["El crédito","El compromiso","El devengado","El pagado"],a:2},
 {q:"La deuda exigible es la diferencia entre…",o:["Crédito y compromiso","Compromiso y devengado","Devengado y pagado","Crédito y pagado"],a:2},
 {q:"El clasificador por objeto del gasto responde a la pregunta…",o:["¿Quién gasta?","¿En qué se gasta?","¿Para qué se gasta?","¿Con qué fondos?"],a:1},
 {q:"Ingresos corrientes menos gastos corrientes es el…",o:["Resultado financiero","Resultado económico","Resultado primario","Endeudamiento"],a:1},
 {q:"La eficacia mide…",o:["El cumplimiento de las metas","El costo por unidad","El precio de los insumos","La legalidad del gasto"],a:0},
 {q:"El costo por unidad de servicio prestado es un indicador de…",o:["Eficacia","Eficiencia","Economía","Legalidad"],a:1},
 {q:"Las normas internacionales de contabilidad para el sector público se conocen como…",o:["NIIF","NICSP (IPSAS)","NIA","RT 54"],a:1},
]};
