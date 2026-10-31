/* Módulo 31 · Derecho crediticio, bursátil e insolvencia */
CAMPUS.content[31] = {
lessons:[
 {lead:"Los títulos valores permiten que un crédito circule de mano en mano con seguridad. El contador los usa a diario: pagarés, letras, cheques y facturas de crédito.",
  html:`<h3>Caracteres de los títulos valores (CCyC, arts. 1815 y siguientes)</h3><ul><li><b>Necesidad:</b> el derecho no existe sin el documento; para cobrar hay que presentarlo.</li><li><b>Literalidad:</b> el derecho es el que surge del texto del título, ni más ni menos.</li><li><b>Autonomía:</b> quien lo adquiere de buena fe tiene un derecho propio, y no le pueden oponer las defensas que había contra los portadores anteriores (art. 1816).</li><li><b>Abstracción:</b> en los títulos cambiarios, el derecho se separa de la causa que les dio origen.</li></ul>
  <h3>Los títulos más usados</h3><div class="tw"><table><thead><tr><th>Título</th><th>Norma</th><th>Quién promete o paga</th></tr></thead><tbody>
  <tr><td>Pagaré</td><td>Decreto-Ley 5965/63</td><td>El propio librador promete pagar</td></tr>
  <tr><td>Letra de cambio</td><td>Decreto-Ley 5965/63</td><td>El librador ordena a un tercero (girado) que pague</td></tr>
  <tr><td>Cheque y ECHEQ</td><td>Ley 24.452</td><td>Orden de pago contra un banco</td></tr>
  <tr><td>Factura de crédito electrónica MiPyME</td><td>Ley 27.440, Título I</td><td>La empresa compradora, una vez aceptada</td></tr></tbody></table></div>
  <h3>Requisitos del pagaré</h3><p>La denominación "pagaré" en el texto, la promesa pura y simple de pagar una suma determinada, el vencimiento, el lugar de pago, el nombre del beneficiario, la fecha y el lugar de creación y la <b>firma</b> del librador. Si falta un requisito esencial, el documento no vale como pagaré (aunque puede servir como prueba de la deuda).</p>
  <h3>Endoso y aval</h3><p>El <b>endoso</b> transmite el título: el endosante firma al dorso y pasa a garantizar el pago. El <b>aval</b> es una garantía cambiaria: el avalista responde igual que el avalado.</p>
  <h3>Factura de crédito electrónica MiPyME</h3><p>Cuando una MiPyME vende a una empresa grande por encima del monto que fija la reglamentación, debe emitir una factura de crédito electrónica. Si la empresa grande no la rechaza en el plazo legal, queda aceptada y se convierte en un título ejecutivo que la MiPyME puede negociar en el mercado de capitales para cobrar antes.</p>`,
  ex:[{type:"pick",title:"¿Qué carácter del título valor se aplica?",options:["Literalidad","Autonomía","Necesidad"],items:[["El tenedor no puede cobrar sin presentar el pagaré","Necesidad"],["El pagaré dice $ 1.000.000; no se puede reclamar más aunque la deuda real fuera mayor","Literalidad"],["El deudor no puede oponerle a un endosatario de buena fe que la mercadería original vino fallada","Autonomía"]]},
   {type:"tf",items:[["En la letra de cambio, el librador ordena a un tercero que pague.",true],["Un pagaré sin firma del librador vale igual como pagaré.",false,"La firma es un requisito esencial."],["El endosante garantiza el pago del título.",true],["Una factura de crédito electrónica aceptada puede negociarse en el mercado de capitales.",true]]}]},
 {lead:"Los bancos financian a las empresas con contratos que el Código Civil y Comercial regula expresamente. Las garantías aseguran que el crédito se cobre.",
  html:`<h3>Contratos bancarios (CCyC, arts. 1378 y siguientes)</h3><div class="tw"><table><thead><tr><th>Contrato</th><th>En qué consiste</th></tr></thead><tbody>
  <tr><td>Cuenta corriente bancaria</td><td>El banco paga los cheques y débitos del cliente con los fondos depositados o con el acuerdo en descubierto</td></tr>
  <tr><td>Préstamo bancario</td><td>El banco entrega dinero y el cliente devuelve capital e intereses</td></tr>
  <tr><td>Descuento bancario</td><td>El cliente cede al banco un crédito a cobrar (cheques, pagarés) y recibe su importe menos los intereses</td></tr>
  <tr><td>Apertura de crédito</td><td>El banco se obliga a tener fondos a disposición del cliente hasta un monto</td></tr>
  <tr><td>Factoraje (factoring)</td><td>Una entidad compra los créditos de la empresa y asume o no el riesgo de cobro</td></tr>
  <tr><td>Leasing</td><td>El dador entrega un bien para su uso a cambio de un canon, con opción de compra al final</td></tr></tbody></table></div>
  <p>El CCyC exige transparencia: el contrato debe informar la tasa de interés y el <b>costo financiero total</b>, y en los contratos con consumidores rigen además las normas de defensa del consumidor.</p>
  <h3>Garantías</h3><ul><li><b>Personales:</b> la <b>fianza</b> (un tercero se obliga a pagar si el deudor no lo hace) y el aval en los títulos.</li><li><b>Reales:</b> la <b>hipoteca</b> (sobre inmuebles), la <b>prenda</b> (sobre cosas muebles; la prenda con registro permite que el deudor siga usando el bien) y la anticresis.</li><li><b>Fideicomiso en garantía:</b> el deudor transfiere bienes a un fiduciario que los vende si no paga.</li></ul>
  <h3>Lectura contable</h3><p>En la contabilidad del deudor, los bienes gravados con hipoteca o prenda se informan en notas como <b>bienes de disponibilidad restringida</b>. En el descuento de documentos, si el banco puede reclamar al cedente cuando el firmante no paga, la empresa mantiene una deuda o un pasivo contingente que debe informar.</p>`,
  ex:[{type:"num",items:[
   {q:"Se descuenta un pagaré de $ 2.000.000 que vence en 60 días, con una tasa de descuento del 3% mensual. ¿Cuánto recibe la empresa? (descuento simple)",a:1880000,u:"$",ex:"Descuento = 2.000.000 × 3% × 2 = 120.000."},
   {q:"En ese caso, ¿cuánto se registra como interés (gasto financiero)?",a:120000,u:"$"}]},
   {type:"pick",title:"¿Garantía personal o real?",options:["Personal","Real"],items:[["Hipoteca sobre la planta","Real"],["Fianza del socio gerente","Personal"],["Prenda con registro sobre un camión","Real"],["Aval en un pagaré","Personal"]]},
   {type:"pick",title:"¿Qué contrato es?",options:["Descuento","Leasing","Factoring","Apertura de crédito"],items:[["La empresa usa una máquina pagando un canon y al final puede comprarla","Leasing"],["El banco adelanta el importe de cheques de clientes cobrando intereses","Descuento"],["Una entidad compra toda la cartera de facturas y asume el riesgo de incobrabilidad","Factoring"],["El banco deja disponible hasta $ 50 millones para que la empresa use cuando quiera","Apertura de crédito"]]}]},
 {lead:"El mercado de capitales permite a las empresas financiarse directamente con inversores. La Ley 26.831, reformada por la Ley 27.440, lo organiza bajo el control de la CNV.",
  html:`<h3>Los actores</h3><ul><li><b>Comisión Nacional de Valores (CNV):</b> la autoridad que autoriza la oferta pública, registra a los agentes y fiscaliza el mercado.</li><li><b>Emisoras:</b> empresas que obtienen fondos emitiendo acciones o deuda.</li><li><b>Mercados:</b> donde se negocian los valores (por ejemplo, Bolsas y Mercados Argentinos, BYMA).</li><li><b>Agentes:</b> los intermediarios registrados en la CNV, como los agentes de liquidación y compensación (ALyC) y los agentes de negociación.</li><li><b>Inversores:</b> personas y entidades que compran los valores.</li></ul>
  <h3>Instrumentos principales</h3><div class="tw"><table><thead><tr><th>Instrumento</th><th>Norma</th><th>Qué es</th></tr></thead><tbody>
  <tr><td>Acciones</td><td>Ley 19.550 y Ley 26.831</td><td>Participación en el capital de una SA</td></tr>
  <tr><td>Obligaciones negociables (ON)</td><td>Ley 23.576</td><td>Deuda emitida por sociedades y cooperativas</td></tr>
  <tr><td>Fondos comunes de inversión (FCI)</td><td>Ley 24.083</td><td>Patrimonio de muchos inversores administrado por una sociedad gerente</td></tr>
  <tr><td>Fideicomisos financieros</td><td>CCyC, arts. 1690 y siguientes</td><td>Títulos respaldados por un conjunto de créditos</td></tr>
  <tr><td>Cheques de pago diferido, pagarés y facturas de crédito</td><td>Normas de la CNV</td><td>Financiamiento de corto plazo, muy usado por las pymes</td></tr></tbody></table></div>
  <h3>Obligaciones de la emisora</h3><ul><li>Publicar estados contables anuales auditados y trimestrales con revisión limitada. Las emisoras aplican, en general, las <b>NIIF</b> (RT 26).</li><li>Informar los <b>hechos relevantes</b> apenas ocurren, porque pueden afectar el precio.</li><li>Tener comité de auditoría y cumplir el régimen de gobierno societario.</li></ul>
  <h3>Abuso de información privilegiada</h3><p>Usar información no pública para operar en el mercado está prohibido y es delito. Quienes acceden a esa información, incluidos los auditores y los asesores contables, tienen deber de reserva.</p>`,
  ex:[{type:"pick",title:"¿Qué instrumento es?",options:["Acción","Obligación negociable","FCI","Fideicomiso financiero"],items:[["Una SA emite deuda a 3 años con interés del 8% anual","Obligación negociable"],["Un banco agrupa préstamos prendarios y emite títulos respaldados por ellos","Fideicomiso financiero"],["Un ahorrista compra cuotapartes administradas por una sociedad gerente","FCI"],["Un inversor se vuelve socio de una empresa que cotiza","Acción"]]},
   {type:"tf",items:[["La CNV autoriza la oferta pública de valores.",true],["Las obligaciones negociables se rigen por la Ley 23.576.",true],["Operar con información privilegiada es una práctica permitida si se informa después.",false],["Las emisoras deben comunicar los hechos relevantes en forma inmediata.",true]]}]},
 {lead:"Cuando una empresa no puede pagar, el derecho ofrece soluciones antes de llegar a la quiebra. Esta lección completa lo visto en el Módulo 26 con el acuerdo preventivo extrajudicial.",
  html:`<h3>La cesación de pagos</h3><p>Es el presupuesto de los concursos (Ley 24.522, art. 1): un estado general y permanente de desequilibrio patrimonial que impide cumplir regularmente las obligaciones. No es lo mismo que un incumplimiento aislado. Se manifiesta por hechos reveladores: reconocimiento judicial o extrajudicial, mora en el cumplimiento, cierre de locales, venta a precio vil, entre otros (art. 79).</p>
  <h3>Las salidas posibles</h3><div class="tw"><table><thead><tr><th>Vía</th><th>Qué es</th><th>Ventaja</th></tr></thead><tbody>
  <tr><td><b>Acuerdo preventivo extrajudicial (APE)</b> (arts. 69 a 76)</td><td>El deudor negocia en privado con sus acreedores y luego pide la homologación judicial</td><td>Más rápido y menos costoso; no hay síndico ni verificación completa</td></tr>
  <tr><td><b>Concurso preventivo</b></td><td>Proceso judicial con síndico, verificación de créditos y propuesta de acuerdo</td><td>Suspende las ejecuciones y ordena a todos los acreedores</td></tr>
  <tr><td><b>Quiebra</b></td><td>Liquidación de los bienes para pagar a los acreedores</td><td>Última instancia</td></tr></tbody></table></div>
  <h3>Mayorías del APE</h3><p>Para homologar el acuerdo hace falta la conformidad de la <b>mayoría absoluta de los acreedores quirografarios</b> que representen las <b>dos terceras partes del pasivo quirografario</b> total (art. 73). El pedido de homologación debe acompañarse de un estado de activos y pasivos y de un listado de acreedores certificados por un <b>contador público</b>.</p>
  <h3>El papel del contador</h3><ul><li>Preparar y certificar el estado patrimonial y el listado de acreedores para el APE.</li><li>Asesorar en la propuesta de pago: quitas, esperas, capitalización de deuda.</li><li>Actuar como síndico en el concurso o la quiebra (Módulo 26).</li></ul>`,
  ex:[{type:"num",items:[
   {q:"Hay 40 acreedores quirografarios con un pasivo de $ 300 M. ¿Cuántos acreedores, como mínimo, deben prestar conformidad al APE?",a:21,tol:0,hint:"Mayoría absoluta: más de la mitad."},
   {q:"¿Qué capital mínimo deben representar esos acreedores?",a:200,u:"$ M",tol:0,hint:"Dos tercios de 300."}]},
   {type:"pick",title:"¿APE, concurso preventivo o quiebra?",options:["APE","Concurso preventivo","Quiebra"],items:[["La empresa negocia en privado con sus acreedores y presenta el acuerdo al juez para homologarlo","APE"],["Se designa un síndico y los acreedores verifican sus créditos para votar una propuesta","Concurso preventivo"],["Se liquidan los bienes del deudor para pagar a los acreedores","Quiebra"]]},
   {type:"tf",items:[["Un único incumplimiento aislado prueba la cesación de pagos.",false,"Debe ser un estado general y permanente."],["El APE requiere un listado de acreedores certificado por contador público.",true]]}]},
],
eval:[
 {q:"El carácter por el cual el derecho es el que surge del texto del título es la…",o:["Autonomía","Literalidad","Necesidad","Abstracción"],a:1},
 {q:"En el pagaré, quien promete pagar es…",o:["Un banco","El propio librador","El girado","El endosante"],a:1},
 {q:"La letra de cambio y el pagaré se rigen por…",o:["La Ley 24.452","El Decreto-Ley 5965/63","La Ley 23.576","La Ley 26.831"],a:1},
 {q:"La factura de crédito electrónica MiPyME fue creada por…",o:["La Ley 27.440","La Ley 24.522","La Ley 19.550","La Ley 11.683"],a:0},
 {q:"El contrato por el que el banco adelanta el importe de documentos a cobrar es…",o:["El leasing","El descuento bancario","La fianza","El fideicomiso"],a:1},
 {q:"La hipoteca es una garantía…",o:["Personal sobre muebles","Real sobre inmuebles","Cambiaria","Solo para bancos"],a:1},
 {q:"La autoridad de aplicación del mercado de capitales es…",o:["El BCRA","La CNV","ARCA","La IGJ"],a:1},
 {q:"Las obligaciones negociables se rigen por la…",o:["Ley 24.083","Ley 23.576","Ley 26.831 únicamente","Ley 25.877"],a:1},
 {q:"Los fondos comunes de inversión se rigen por la…",o:["Ley 24.083","Ley 23.576","Ley 24.156","Ley 27.440"],a:0},
 {q:"Las emisoras que hacen oferta pública aplican, en general,…",o:["La RT 54 simplificada","Las NIIF (RT 26)","Las NICSP","Solo normas impositivas"],a:1},
 {q:"Para homologar un APE se necesita la mayoría absoluta de acreedores quirografarios que representen…",o:["La mitad del pasivo","Dos tercios del pasivo quirografario","El 90% del pasivo","El total de los acreedores"],a:1},
 {q:"La cesación de pagos es…",o:["Cualquier atraso en un pago","Un estado general y permanente de imposibilidad de pagar","La falta de presentación de balances","El cierre del ejercicio con pérdida"],a:1},
]};
