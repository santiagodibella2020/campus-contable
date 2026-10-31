/* Módulo 16 · Sociedades y contabilidad societaria */
(function(){
const ACC = ["Caja","Banco Nación c/c","Accionistas","Socios cuenta aporte","Rodados","Capital social","Ajuste de capital","Aportes irrevocables","Reserva legal","Reserva facultativa","Resultados no asignados","Dividendos a pagar","Honorarios directores a pagar","Acciones a emitir","Préstamos bancarios"];
CAMPUS.content[16] = {
lessons:[
 {lead:"La Ley General de Sociedades (Ley 19.550, con las reformas de la Ley 26.994) regula cómo se constituyen, funcionan y se disuelven las sociedades.",
  html:`<h3>Concepto (art. 1)</h3><p>Hay sociedad si una o más personas, en forma organizada conforme a uno de los tipos previstos en la ley, se obligan a realizar aportes para aplicarlos a la producción o intercambio de bienes o servicios, participando de los beneficios y soportando las pérdidas. Desde 2015 se admite la <b>sociedad unipersonal</b>, solo como sociedad anónima (SAU).</p>
  <h3>Elementos</h3><ul><li><b>Pluralidad</b> de socios (salvo la SAU).</li><li><b>Tipicidad:</b> adoptar uno de los tipos de la ley.</li><li><b>Aportes</b> de los socios.</li><li><b>Participación en beneficios y pérdidas.</b></li><li><b>Organización</b> (órganos de administración, gobierno y fiscalización).</li></ul>
  <h3>Contenido del instrumento constitutivo (art. 11)</h3><p>Datos de los socios, razón social o denominación, domicilio, objeto, capital, plazo de duración, organización de la administración y fiscalización, reglas para distribuir utilidades y soportar pérdidas, cláusulas sobre funcionamiento, disolución y liquidación.</p>
  <h3>Sociedades de la Sección IV (arts. 21 a 26)</h3><p>Las que no se constituyen con sujeción a un tipo, omiten requisitos esenciales o no se inscriben. Los socios responden frente a terceros como obligados <b>simplemente mancomunados</b> (por partes iguales), salvo que se pacte otra cosa. Reemplazaron a las antiguas “sociedades de hecho” e “irregulares”.</p>
  <h3>Inscripción</h3><p>Las sociedades se inscriben en el Registro Público de su jurisdicción (en CABA, la Inspección General de Justicia; en otras provincias, la Dirección de Personas Jurídicas o el Registro Público de Comercio).</p>
  ${CAMPUS.vid([["La Ley General de Sociedades","la ley general de sociedades ley general de sociedades explicacion"]])}`,
  ex:[{type:"tf",items:[["Una sola persona puede constituir una SRL unipersonal","Falso","La ley solo admite la unipersonal bajo el tipo SA (SAU) y la SAS."],["Una sociedad no inscripta queda incluida en la Sección IV","Verdadero"],["En la Sección IV los socios responden, en principio, en forma simplemente mancomunada","Verdadero"],["El objeto social es un requisito del instrumento constitutivo","Verdadero"]]}]},
 {lead:"Elegir el tipo societario define la responsabilidad de los socios, cómo se representa el capital y cuán compleja es la administración.",
  html:`<div class="tw"><table><thead><tr><th>Tipo</th><th>Capital</th><th>Responsabilidad</th><th>Administración</th><th>Rasgos</th></tr></thead><tbody>
  <tr><td><b>SRL</b> (arts. 146 a 162)</td><td>Cuotas</td><td>Limitada a la integración de las cuotas; garantía solidaria por la integración</td><td>Gerencia (uno o más gerentes)</td><td>Máximo 50 socios. La transmisión de cuotas se puede limitar.</td></tr>
  <tr><td><b>SA</b> (arts. 163 a 307)</td><td>Acciones</td><td>Limitada a las acciones suscriptas</td><td>Directorio</td><td>Capital mínimo legal. Asamblea, sindicatura (obligatoria en algunos casos).</td></tr>
  <tr><td><b>SAU</b></td><td>Acciones</td><td>Limitada</td><td>Directorio de 3 miembros como mínimo</td><td>Un solo accionista. Sindicatura plural obligatoria (art. 299).</td></tr>
  <tr><td><b>SAS</b> (Ley 27.349)</td><td>Acciones</td><td>Limitada a la integración de las acciones</td><td>Administradores</td><td>Uno o más socios. Constitución simplificada, capital mínimo de 2 salarios mínimos.</td></tr>
  <tr><td>Colectiva</td><td>Partes de interés</td><td>Solidaria, subsidiaria e ilimitada</td><td>Cualquier socio</td><td>Muy poco usada hoy.</td></tr>
  <tr><td>En comandita simple / por acciones, de capital e industria</td><td>Mixto</td><td>Distinta según la clase de socio</td><td>Socios comanditados</td><td>Muy poco usadas.</td></tr></tbody></table></div>
  <h3>Sociedades del art. 299</h3><p>Están sujetas a fiscalización estatal permanente: las que hacen oferta pública, tienen capital superior al monto que fija la ley, son de economía mixta, explotan concesiones o servicios públicos, realizan operaciones de capitalización o ahorro, o son controlantes de otra sociedad del art. 299. Deben tener directorio y sindicatura plurales.</p>
  ${CAMPUS.vid([["Tipos societarios: SRL, SA y SAS","tipos societarios srl sa y sas ley general de sociedades explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué tipo societario conviene o corresponde?",options:["SRL","SA","SAS","SAU"],items:[["Un emprendedor solo quiere constituir rápido y por internet una sociedad","SAS"],["Una empresa familiar de 4 socios que quiere limitar el ingreso de terceros","SRL"],["Una empresa que quiere cotizar en bolsa","SA"],["Una multinacional que crea una filial argentina con un único accionista y directorio","SAU"]]}]},
 {lead:"Los socios se obligan a aportar. La ley fija cuánto hay que integrar al constituir y en qué plazo el resto.",
  html:`<h3>Suscripción e integración</h3><ul><li><b>Suscribir</b> es comprometerse a aportar.</li><li><b>Integrar</b> es aportar efectivamente.</li></ul>
  <p>En la SRL (art. 149), la SA (art. 187) y la SAS (Ley 27.349, art. 41): los aportes en <b>dinero</b> se integran como mínimo en un <b>25%</b> al constituir y el saldo dentro de los <b>2 años</b>. Los aportes en <b>especie</b> (bienes) se integran totalmente al constituir.</p>
  <h3>Aportes en especie</h3><p>Deben ser bienes determinados y susceptibles de ejecución forzada. Se valúan según lo previsto en el contrato, por valores de plaza o por perito.</p>
  <h3>Registración en una SA</h3><ol><li>Suscripción: <span class="mono">Accionistas a Capital social</span> (o a Capital suscripto).</li><li>Integración: <span class="mono">Banco / Bienes a Accionistas</span>.</li></ol>
  <p>El saldo pendiente de Accionistas es un crédito de la sociedad contra sus socios. En el estado de situación patrimonial se presenta en Otros créditos o restando del PN, según el criterio aplicable.</p>
  ${CAMPUS.vid([["Constitución y aportes","constitución y aportes ley general de sociedades explicacion"]])}`,
  ex:[{type:"num",items:[{q:"Se constituye una SA con capital de $ 10.000.000 aportado en dinero. ¿Cuánto hay que integrar como mínimo al constituir?",a:2500000,u:"$"},{q:"Si un socio aporta un rodado valuado en $ 6.000.000 y el resto en dinero, sobre un capital de $ 10.000.000, ¿cuánto dinero se integra como mínimo al constituir?",a:1000000,u:"$",hint:"El rodado se integra totalmente; del dinero (4 millones), el 25%."}]},
   {type:"asiento",accounts:ACC,entries:[
    {t:"02/01 · Se constituye Andina SA con capital de $ 10.000.000, suscripto totalmente por los accionistas.",e:[["Accionistas",10000000,0],["Capital social",0,10000000]]},
    {t:"02/01 · Un accionista integra un rodado valuado en $ 6.000.000 y los demás integran $ 1.000.000 en efectivo depositado en el Banco Nación.",e:[["Rodados",6000000,0],["Banco Nación c/c",1000000,0],["Accionistas",0,7000000]]},
    {t:"30/11 · Los accionistas integran el saldo pendiente por transferencia bancaria.",e:[["Banco Nación c/c",3000000,0],["Accionistas",0,3000000]]}]}]},
 {lead:"Toda sociedad tiene un órgano que decide (gobierno), uno que ejecuta (administración) y, a veces, uno que controla (fiscalización).",
  html:`<div class="tw"><table><thead><tr><th>Órgano</th><th>SRL</th><th>SA</th></tr></thead><tbody>
  <tr><td><b>Gobierno</b></td><td>Reunión de socios</td><td>Asamblea de accionistas</td></tr>
  <tr><td><b>Administración y representación</b></td><td>Gerencia</td><td>Directorio (con su presidente como representante legal)</td></tr>
  <tr><td><b>Fiscalización</b></td><td>Optativa (obligatoria si el capital alcanza el monto del art. 299)</td><td>Sindicatura o consejo de vigilancia; obligatoria en las del art. 299</td></tr></tbody></table></div>
  <h3>Asambleas en la SA</h3><ul><li><b>Ordinaria</b> (art. 234): aprueba los estados contables, la memoria y la gestión de directores y síndicos, distribuye utilidades, elige autoridades y fija sus honorarios. Se convoca dentro de los 4 meses del cierre del ejercicio.</li><li><b>Extraordinaria</b> (art. 235): reforma del estatuto, aumento de capital fuera del quíntuplo, reducción, fusión, transformación, disolución, emisión de obligaciones negociables convertibles.</li></ul>
  <h3>La sindicatura</h3><p>El síndico debe ser <b>abogado o contador público</b> con título habilitante (art. 285). Controla la legalidad de la administración, revisa los libros y la documentación, asiste a las reuniones del directorio y presenta a la asamblea un informe sobre los estados contables (art. 294).</p>
  <h3>Responsabilidad de los administradores (art. 59)</h3><p>Deben obrar con lealtad y con la diligencia de un buen hombre de negocios. Si faltan a sus obligaciones, responden ilimitada y solidariamente por los daños causados.</p>
  ${CAMPUS.vid([["Órganos de la sociedad","órganos de la sociedad ley general de sociedades explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué órgano lo decide en una SA?",options:["Asamblea ordinaria","Asamblea extraordinaria","Directorio","Sindicatura"],items:[["Aprobar los estados contables del ejercicio","Asamblea ordinaria"],["Fusionarse con otra sociedad","Asamblea extraordinaria"],["Contratar a un nuevo gerente comercial","Directorio"],["Emitir un informe sobre los estados contables para los accionistas","Sindicatura"],["Distribuir dividendos","Asamblea ordinaria"],["Cambiar el objeto social del estatuto","Asamblea extraordinaria"]]}]},
 {lead:"Las ganancias no se pueden repartir libremente. La ley obliga a reservar una parte y solo permite distribuir lo que realmente se ganó.",
  html:`<h3>Reglas principales</h3><ul><li><b>Art. 68:</b> los dividendos solo pueden aprobarse sobre ganancias <b>realizadas y líquidas</b> resultantes de un balance aprobado.</li>
  <li><b>Art. 70:</b> las SRL y SA deben destinar a <b>reserva legal</b> no menos del <b>5%</b> de las ganancias del ejercicio hasta alcanzar el <b>20%</b> del capital social. Si hay pérdidas acumuladas, primero se absorben.</li>
  <li><b>Art. 261:</b> la remuneración total de los directores no puede superar el <b>25%</b> de las ganancias si se distribuyen dividendos, o el <b>5%</b> si no se distribuyen, salvo aprobación especial de la asamblea por funciones técnico-administrativas.</li></ul>
  <h3>Otras reservas</h3><p><b>Estatutarias</b> (las que prevé el estatuto) y <b>facultativas</b> (las que decide la asamblea con una razón justificada, art. 70).</p>
  <h3>Dividendos en acciones</h3><p>En lugar de pagar en efectivo, la sociedad puede capitalizar resultados y entregar nuevas acciones. El PN total no cambia; solo se reclasifica de resultados a capital.</p>
  <h3>Ejemplo</h3><p>Resultados no asignados $ 1.000.000; capital $ 2.000.000; reserva legal existente $ 300.000. La asamblea decide: reserva legal 5% (50.000; el tope del 20% es 400.000, así que entra completa), honorarios a directores 100.000, dividendos en efectivo 600.000. El resto (250.000) queda sin asignar.</p>
  ${CAMPUS.vid([["Distribución de utilidades y reservas","distribución de utilidades y reservas ley general de sociedades explicacion"]])}`,
  ex:[{type:"num",items:[{q:"Ganancia del ejercicio $ 2.000.000; capital $ 5.000.000; reserva legal acumulada $ 950.000. ¿Cuánto se destina como mínimo a reserva legal?",a:50000,u:"$",hint:"5% sería 100.000, pero el tope del 20% del capital es 1.000.000 y faltan solo 50.000."},{q:"Ganancia $ 4.000.000, capital $ 10.000.000, sin reserva previa. ¿Reserva legal mínima?",a:200000,u:"$"}]},
   {type:"asiento",accounts:ACC,entries:[{t:"20/04 · La asamblea distribuye los resultados del ejemplo: reserva legal $ 50.000, honorarios a directores $ 100.000 y dividendos en efectivo $ 600.000.",e:[["Resultados no asignados",750000,0],["Reserva legal",0,50000],["Honorarios directores a pagar",0,100000],["Dividendos a pagar",0,600000]]}]}]},
 {lead:"El capital puede aumentar con nuevos aportes o capitalizando partidas del patrimonio neto, y puede reducirse de forma voluntaria u obligatoria.",
  html:`<h3>Aumento de capital</h3><ul><li><b>Con nuevos aportes:</b> en dinero o en especie. Los accionistas tienen <b>derecho de preferencia</b> (art. 194) para suscribir en proporción a sus tenencias.</li><li><b>Por capitalización:</b> de reservas, de resultados (dividendos en acciones), del ajuste de capital o de aportes irrevocables.</li><li><b>Por conversión de deudas</b> (por ejemplo, obligaciones negociables convertibles).</li></ul>
  <p>En la SA, la asamblea ordinaria puede aumentar el capital hasta el <b>quíntuplo</b> si el estatuto lo prevé (art. 188). Por encima, se requiere asamblea extraordinaria.</p>
  <h3>Prima de emisión</h3><p>Si las nuevas acciones se emiten por encima de su valor nominal, la diferencia es una prima de emisión, que forma parte de los aportes en el PN.</p>
  <h3>Reducción de capital</h3><ul><li><b>Voluntaria</b> (art. 203): la decide la asamblea extraordinaria, con derecho de oposición de los acreedores.</li><li><b>Obligatoria</b> (art. 206): cuando las pérdidas consumen las reservas y el <b>50% del capital</b>.</li></ul>
  <div class="note"><b>Pérdida total del capital.</b> Es causal de disolución (art. 94 inc. 5), salvo que los socios reintegren o aumenten el capital.</div>
  ${CAMPUS.vid([["Aumento y reducción de capital","aumento y reducción de capital ley general de sociedades explicacion"]])}`,
  ex:[{type:"asiento",accounts:ACC,entries:[
    {t:"10/05 · La asamblea capitaliza el Ajuste de capital por $ 1.600.000 y emite acciones liberadas.",e:[["Ajuste de capital",1600000,0],["Capital social",0,1600000]]},
    {t:"10/06 · La asamblea capitaliza los Aportes irrevocables de $ 3.000.000 que estaban en el PN.",e:[["Aportes irrevocables",3000000,0],["Capital social",0,3000000]]}]},
   {type:"num",items:[{q:"Una SA tiene capital $ 4.000.000 y reservas $ 500.000. ¿A partir de qué pérdida acumulada (en $) queda obligada a reducir el capital?",a:2500000,u:"$",hint:"Reservas + 50% del capital"}]}]},
 {lead:"Las sociedades pueden cambiar de tipo, unirse, dividirse y, finalmente, disolverse y liquidarse.",
  html:`<div class="tw"><table><thead><tr><th>Figura</th><th>Qué es</th></tr></thead><tbody>
  <tr><td><b>Transformación</b> (art. 74)</td><td>Adoptar otro tipo societario sin disolverse. Ejemplo: de SRL a SA. Se mantienen los derechos y obligaciones.</td></tr>
  <tr><td><b>Fusión</b> (art. 82)</td><td>Por <b>absorción</b> (una sociedad incorpora a otra, que se disuelve sin liquidarse) o por <b>consolidación</b> (dos o más se disuelven y crean una nueva). La resultante asume los derechos y obligaciones.</td></tr>
  <tr><td><b>Escisión</b> (art. 88)</td><td>Una sociedad destina parte de su patrimonio a otra existente o a una nueva, o se divide en varias.</td></tr></tbody></table></div>
  <h3>Causales de disolución (art. 94)</h3><ul><li>Decisión de los socios.</li><li>Expiración del plazo.</li><li>Cumplimiento de la condición o del objeto, o imposibilidad de lograrlo.</li><li>Pérdida del capital social.</li><li>Declaración en quiebra.</li><li>Fusión.</li><li>Sanción firme de cancelación de oferta pública o retiro de la autorización.</li></ul>
  <p>La reducción a uno de los socios ya no es causal de disolución: si no se recompone la pluralidad en 3 meses, la sociedad se transforma de pleno derecho en SAU en los casos que prevé el art. 94 bis.</p>
  <h3>Liquidación</h3><p>Disuelta la sociedad, el liquidador (en general, los administradores) realiza el activo, cancela el pasivo, confecciona el balance final y el proyecto de distribución, y reparte el remanente entre los socios. Durante la liquidación la sociedad conserva su personalidad, agregando “en liquidación” a su nombre.</p>
  ${CAMPUS.vid([["Transformación, fusión, disolución y liquidación","transformación fusión disolución y liquidación ley general de sociedades explicacion"]])}`,
  ex:[{type:"pick",title:"¿Qué figura es?",options:["Transformación","Fusión por absorción","Fusión por consolidación","Escisión","Disolución"],items:[["Una SRL pasa a ser SA","Transformación"],["A incorpora a B; B se disuelve sin liquidarse","Fusión por absorción"],["A y B desaparecen y forman la nueva C","Fusión por consolidación"],["A separa su división agro y crea una nueva sociedad con esos bienes","Escisión"],["Los socios deciden terminar la sociedad","Disolución"]]}]},
],
eval:[
 {q:"La sociedad unipersonal está admitida bajo el tipo…",o:["SRL","SA (SAU) y SAS","Colectiva","Ningún tipo"],a:1},
 {q:"El número máximo de socios de una SRL es…",o:["20","50","100","Sin límite"],a:1},
 {q:"Los aportes en dinero deben integrarse al constituir en al menos…",o:["10%","25%","50%","100%"],a:1},
 {q:"El plazo para integrar el saldo de los aportes en dinero es…",o:["6 meses","1 año","2 años","5 años"],a:2},
 {q:"¿Quién puede ser síndico de una SA?",o:["Cualquier accionista","Un abogado o contador público","Solo un contador","El presidente del directorio"],a:1},
 {q:"La aprobación de los estados contables corresponde a la asamblea…",o:["Ordinaria","Extraordinaria","Especial","No requiere asamblea"],a:0},
 {q:"La reserva legal se constituye con al menos el 5% de las ganancias hasta alcanzar el…",o:["10% del capital","20% del capital","50% del capital","100% del capital"],a:1},
 {q:"Los dividendos solo pueden pagarse sobre ganancias…",o:["Proyectadas","Realizadas y líquidas","Del próximo ejercicio","Por tenencia no realizadas"],a:1},
 {q:"Pagar dividendos en acciones…",o:["Disminuye el PN","No cambia el PN total","Aumenta el pasivo","Disminuye el activo"],a:1},
 {q:"La reducción obligatoria de capital ocurre cuando las pérdidas consumen las reservas y el…",o:["20% del capital","50% del capital","100% del capital","10% del capital"],a:1},
 {q:"Cuando una sociedad incorpora a otra que se disuelve sin liquidarse hay…",o:["Escisión","Transformación","Fusión por absorción","Liquidación"],a:2},
]};
})();
