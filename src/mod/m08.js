/* Módulo 8 · Derecho privado */
CAMPUS.content[8] = {
lessons:[
 {lead:"El Código Civil y Comercial de la Nación (Ley 26.994, vigente desde el 1/8/2015) unificó el derecho civil y el comercial. Es la base legal de casi todo lo que hace un contador.",
  html:`<h3>Persona humana</h3><ul><li><b>Capacidad de derecho:</b> la aptitud para ser titular de derechos. La tiene toda persona.</li><li><b>Capacidad de ejercicio:</b> la aptitud para ejercer esos derechos por sí misma. Se adquiere plenamente a los <b>18 años</b> (art. 25). Puede restringirse por sentencia judicial.</li>
  <li><b>Atributos:</b> nombre, domicilio, estado civil, capacidad y patrimonio.</li></ul>
  <h3>Persona jurídica</h3><p>Es un ente al que el ordenamiento le reconoce aptitud para adquirir derechos y contraer obligaciones (art. 141). Tiene <b>personalidad distinta</b> de la de sus miembros: lo que debe la sociedad no lo deben, en principio, los socios.</p>
  <ul><li><b>Públicas</b> (art. 146): el Estado nacional, las provincias, los municipios, las entidades autárquicas.</li>
  <li><b>Privadas</b> (art. 148): sociedades, asociaciones civiles, simples asociaciones, fundaciones, iglesias, mutuales, cooperativas, consorcios de propiedad horizontal, entre otras.</li></ul>
  <h3>Atributos de la persona jurídica</h3><p>Nombre (denominación), domicilio y sede, objeto, patrimonio y duración. El <b>objeto</b> marca qué actividades puede realizar.</p>
  <div class="note"><b>Inoponibilidad de la personalidad.</b> Si la persona jurídica se usa para fines ajenos a ella, para violar la ley o perjudicar a terceros, los socios o controlantes que lo hicieron posible responden personalmente (art. 144).</div>`,
  ex:[{type:"pick",title:"¿Persona humana, jurídica pública o jurídica privada?",options:["Humana","Jurídica pública","Jurídica privada"],items:[
   ["Un consorcio de propiedad horizontal","Jurídica privada"],["La Provincia de Córdoba","Jurídica pública"],["Un comerciante monotributista","Humana"],["Una fundación","Jurídica privada"],["Una cooperativa de trabajo","Jurídica privada"],["Un municipio","Jurídica pública"]]},
   {type:"tf",items:[["La capacidad de ejercicio plena se adquiere a los 21 años","Falso","A los 18 años, art. 25 del CCyC."],["Las deudas de una SRL son, en principio, deudas personales de sus socios","Falso","La persona jurídica tiene patrimonio propio."]]}]},
 {lead:"No todo lo que pasa tiene efectos jurídicos. El derecho distingue entre hechos, actos voluntarios y actos jurídicos.",
  html:`<ul><li><b>Hecho jurídico</b> (art. 257): todo acontecimiento que produce el nacimiento, modificación o extinción de relaciones jurídicas. Puede ser natural (un granizo que destruye la cosecha) o humano.</li>
  <li><b>Acto voluntario:</b> el ejecutado con discernimiento, intención y libertad (art. 260).</li>
  <li><b>Acto jurídico</b> (art. 259): el acto voluntario lícito que tiene por fin inmediato crear, modificar o extinguir relaciones jurídicas. Ejemplo: firmar un contrato.</li></ul>
  <h3>Vicios de los actos</h3><div class="tw"><table><thead><tr><th>Vicio</th><th>Qué es</th></tr></thead><tbody>
  <tr><td><b>Error</b></td><td>Una falsa noción de la realidad que es esencial y reconocible.</td></tr>
  <tr><td><b>Dolo</b></td><td>Engaño o maniobra para lograr que el otro celebre el acto.</td></tr>
  <tr><td><b>Violencia</b></td><td>Fuerza irresistible o amenazas.</td></tr>
  <tr><td><b>Lesión</b></td><td>Aprovechar la necesidad, debilidad o inexperiencia de otro para obtener una ventaja patrimonial desproporcionada.</td></tr>
  <tr><td><b>Simulación</b></td><td>Encubrir el verdadero carácter del acto (una venta que en realidad es una donación).</td></tr>
  <tr><td><b>Fraude</b></td><td>Actos del deudor para perjudicar a sus acreedores (por ejemplo, transferir bienes para que no se los embarguen).</td></tr></tbody></table></div>
  <h3>Nulidad</h3><p><b>Absoluta:</b> el acto contraviene el orden público; puede declararla el juez de oficio y no se puede confirmar. <b>Relativa:</b> protege a ciertas personas; solo ellas pueden pedirla y se puede confirmar (art. 386 y siguientes).</p>`,
  ex:[{type:"pick",title:"Identificá el vicio",options:["Error","Dolo","Violencia","Lesión","Simulación","Fraude"],items:[
   ["Alguien firma un contrato bajo amenaza de muerte","Violencia"],["El vendedor adultera el cuentakilómetros del auto","Dolo"],["Un deudor dona su casa a un hijo para que sus acreedores no la ejecuten","Fraude"],
   ["Se compra a precio vil el campo de un anciano que necesitaba plata urgente","Lesión"],["Se escritura una venta, pero en realidad nunca se pagó precio: es un regalo","Simulación"],["Se compra un terreno creyendo que es otro lote","Error"]]}]},
 {lead:"Una obligación es una relación jurídica en la que el acreedor puede exigir al deudor una prestación (art. 724).",
  html:`<h3>Elementos</h3><ul><li><b>Sujetos:</b> acreedor y deudor.</li><li><b>Objeto:</b> la prestación, que debe ser material y jurídicamente posible, lícita, determinada o determinable y con interés para el acreedor.</li><li><b>Causa:</b> el hecho que la genera (un contrato, un daño, la ley).</li></ul>
  <h3>Clases</h3><ul><li><b>De dar:</b> cosas ciertas, cosas genéricas o sumas de dinero.</li><li><b>De hacer:</b> prestar un servicio.</li><li><b>De no hacer:</b> abstenerse (por ejemplo, no competir).</li></ul>
  <h3>Obligaciones de dar dinero</h3><p>Si se pactó en moneda extranjera, según los arts. 765 y 766 en su redacción vigente (modificados por el DNU 70/2023), el deudor debe entregar la moneda pactada.</p>
  <h3>Intereses</h3><ul><li><b>Compensatorios</b> (art. 767): el precio por el uso del capital.</li><li><b>Moratorios</b> (art. 768): por el atraso en pagar.</li><li><b>Punitorios</b> (art. 769): sanciones convencionales por incumplimiento.</li></ul>
  <h3>Mora</h3><p>Como regla, la mora es <b>automática</b>: se produce por el solo vencimiento del plazo, sin necesidad de intimación (art. 886).</p>
  <h3>Extinción</h3><p>Pago, compensación, confusión, novación, dación en pago, renuncia, remisión e imposibilidad de cumplimiento.</p>`,
  ex:[{type:"pick",title:"¿Cómo se extinguió la obligación?",options:["Pago","Compensación","Confusión","Novación","Renuncia"],items:[
   ["El cliente transfiere lo que debía","Pago"],["A y B se deben mutuamente $ 100.000 y se cancelan","Compensación"],["El deudor hereda el crédito de su acreedor","Confusión"],
   ["Se reemplaza la deuda vieja por una nueva con otras condiciones y la vieja se extingue","Novación"],["El acreedor declara que no va a cobrar","Renuncia"]]},
   {type:"pick",title:"¿Qué tipo de interés es?",options:["Compensatorio","Moratorio","Punitorio"],items:[["El que paga un préstamo bancario por usar el dinero","Compensatorio"],["El recargo por pagar una factura 20 días tarde","Moratorio"],["Una multa pactada en el contrato por incumplir","Punitorio"]]}]},
 {lead:"El contrato es el acto jurídico mediante el cual dos o más partes manifiestan su consentimiento para crear, regular, modificar, transferir o extinguir relaciones jurídicas patrimoniales (art. 957).",
  html:`<h3>Principios</h3><ul><li><b>Libertad de contratación</b> (art. 958), dentro de la ley, el orden público y la moral.</li><li><b>Fuerza obligatoria</b> (art. 959): el contrato válido obliga a las partes.</li><li><b>Buena fe</b> (art. 961) en la celebración, interpretación y ejecución.</li></ul>
  <h3>Elementos</h3><p><b>Consentimiento</b> (oferta y aceptación), <b>objeto</b> y <b>causa</b>. Algunos contratos exigen además una <b>forma</b> (por ejemplo, escritura pública para la compraventa de inmuebles).</p>
  <h3>Clasificación</h3><div class="tw"><table><thead><tr><th>Criterio</th><th>Clases</th></tr></thead><tbody>
  <tr><td>Obligaciones</td><td><b>Unilaterales</b> (solo una parte se obliga, como la donación) o <b>bilaterales</b> (ambas, como la compraventa)</td></tr>
  <tr><td>Ventajas</td><td><b>Onerosos</b> (prestaciones recíprocas) o <b>gratuitos</b></td></tr>
  <tr><td>Riesgo</td><td><b>Conmutativos</b> (ventajas ciertas) o <b>aleatorios</b> (dependen de un hecho incierto, como el seguro)</td></tr>
  <tr><td>Forma</td><td><b>Formales</b> o <b>no formales</b></td></tr>
  <tr><td>Negociación</td><td><b>Paritarios</b> o <b>por adhesión</b> a cláusulas generales predispuestas</td></tr></tbody></table></div>
  <h3>Contrato de consumo</h3><p>Entre un proveedor y un consumidor final. Tiene protección especial (arts. 1092 y siguientes del CCyC y Ley 24.240 de Defensa del Consumidor): las cláusulas abusivas se tienen por no escritas y en caso de duda se interpreta a favor del consumidor.</p>`,
  ex:[{type:"pick",title:"Clasificá cada contrato",options:["Unilateral gratuito","Bilateral oneroso conmutativo","Bilateral oneroso aleatorio"],items:[
   ["Compraventa de una computadora","Bilateral oneroso conmutativo"],["Donación de dinero a una fundación","Unilateral gratuito"],["Seguro contra incendio","Bilateral oneroso aleatorio"],["Alquiler de un local","Bilateral oneroso conmutativo"]]}]},
 {lead:"Estos son los contratos que más vas a ver en empresas y en sus estados contables.",
  html:`<div class="tw"><table><thead><tr><th>Contrato</th><th>Qué es</th><th>Impacto contable típico</th></tr></thead><tbody>
  <tr><td><b>Compraventa</b> (art. 1123)</td><td>Una parte transfiere la propiedad de una cosa y la otra paga un precio en dinero.</td><td>Ventas, bienes de cambio, créditos</td></tr>
  <tr><td><b>Locación</b> (art. 1187)</td><td>Una parte concede el uso y goce temporal de una cosa a cambio de un precio.</td><td>Alquileres perdidos o ganados, depósitos en garantía</td></tr>
  <tr><td><b>Leasing</b> (art. 1227)</td><td>El dador entrega un bien en uso al tomador por un canon, con opción de compra al final.</td><td>Bienes de uso y pasivo financiero, según las normas</td></tr>
  <tr><td><b>Mutuo</b> (art. 1525)</td><td>Préstamo de dinero o cosas fungibles que se devuelven en igual cantidad y calidad.</td><td>Préstamos e intereses</td></tr>
  <tr><td><b>Fideicomiso</b> (art. 1666)</td><td>El fiduciante transmite bienes a un fiduciario, que los administra en beneficio de un beneficiario.</td><td>El patrimonio fiduciario está separado; lleva su propia contabilidad</td></tr>
  <tr><td><b>Cuenta corriente bancaria</b> (art. 1393)</td><td>El banco cumple los pagos del cliente con los fondos depositados o el crédito acordado.</td><td>Banco c/c, descubiertos</td></tr>
  <tr><td><b>Agencia, concesión y franquicia</b></td><td>Contratos de distribución y colaboración comercial.</td><td>Comisiones, regalías</td></tr></tbody></table></div>
  <h3>Títulos valores</h3><ul><li><b>Cheque</b> (Ley 24.452): orden de pago a un banco. Puede ser común o de pago diferido, y hoy también electrónico (ECHEQ).</li><li><b>Pagaré y letra de cambio</b> (Decreto-ley 5965/63).</li>
  <li><b>Factura de Crédito Electrónica MiPyME</b> (Ley 27.440): obligatoria en ventas de MiPyMEs a grandes empresas por encima de un monto mínimo; se puede negociar en el mercado.</li></ul>`,
  ex:[{type:"pick",title:"¿Qué contrato es?",options:["Compraventa","Locación","Leasing","Mutuo","Fideicomiso"],items:[
   ["El banco le presta $ 10 millones a la empresa a devolver en 24 cuotas","Mutuo"],["La empresa usa una máquina pagando un canon mensual y al final puede comprarla","Leasing"],
   ["Se transfieren terrenos a un administrador para construir y entregar departamentos a inversores","Fideicomiso"],["La empresa alquila un depósito por 3 años","Locación"],["Un cliente compra 100 cajas de mercadería","Compraventa"]]}]},
 {lead:"El paso del tiempo puede hacer que un derecho ya no se pueda reclamar. Para un contador, los plazos de prescripción definen, entre otras cosas, cuánto tiempo guardar documentación.",
  html:`<h3>Prescripción liberatoria</h3><p>Es la pérdida de la acción para exigir un derecho por no ejercerlo durante el plazo legal. La obligación no desaparece: se convierte en obligación natural (si el deudor paga, no puede pedir la devolución).</p>
  <div class="tw"><table><thead><tr><th>Plazo</th><th>Casos (CCyC)</th></tr></thead><tbody>
  <tr><td class="mono">5 años</td><td>Plazo genérico, salvo que la ley fije otro (art. 2560).</td></tr>
  <tr><td class="mono">3 años</td><td>Reclamo de indemnización de daños por responsabilidad civil (art. 2561).</td></tr>
  <tr><td class="mono">2 años</td><td>Entre otros, lo que se devenga por años o plazos periódicos más cortos, como alquileres o intereses (art. 2562).</td></tr>
  <tr><td class="mono">1 año</td><td>Entre otros, reclamos por vicios redhibitorios (art. 2564).</td></tr></tbody></table></div>
  <h3>Suspensión e interrupción</h3><ul><li><b>Suspensión:</b> detiene el cómputo por un tiempo; después sigue contando lo que faltaba. Por ejemplo, la interpelación fehaciente suspende por seis meses (art. 2541).</li>
  <li><b>Interrupción:</b> borra el tiempo transcurrido y empieza a contar de nuevo. Por ejemplo, el reconocimiento de la deuda o la demanda judicial.</li></ul>
  <h3>Caducidad</h3><p>Extingue el derecho no ejercido en el plazo. A diferencia de la prescripción, no se suspende ni se interrumpe, salvo disposición legal (art. 2567).</p>
  <div class="note"><b>Plazos tributarios.</b> En impuestos nacionales, la Ley 11.683 fija su propia prescripción: 5 años para contribuyentes inscriptos y 10 años para no inscriptos (art. 56). Por eso, y por el art. 328 del CCyC, se conservan los registros contables y la documentación al menos 10 años.</div>`,
  ex:[{type:"num",items:[{q:"¿Cuál es el plazo genérico de prescripción del CCyC, en años?",a:5,tol:0},{q:"¿Cuántos años prescribe la acción de ARCA contra un contribuyente no inscripto?",a:10,tol:0},{q:"¿Cuántos años se deben conservar los libros contables según el art. 328 del CCyC?",a:10,tol:0}]},
   {type:"tf",items:[["La interrupción de la prescripción borra el tiempo ya transcurrido","Verdadero"],["La caducidad, como regla, se puede interrumpir con una carta documento","Falso"]]}]},
 {lead:"El Código Civil y Comercial regula la contabilidad en los arts. 320 a 331. Es la base legal de los libros que llevás como contador.",
  html:`<div class="tw"><table><thead><tr><th>Artículo</th><th>Contenido</th></tr></thead><tbody>
  <tr><td class="mono">320</td><td><b>Obligados:</b> las personas jurídicas privadas y quienes realizan una actividad económica organizada o son titulares de una empresa o establecimiento comercial, industrial, agropecuario o de servicios. Pueden quedar eximidos quienes tienen un volumen de actividad muy pequeño, según cada jurisdicción.</td></tr>
  <tr><td class="mono">321</td><td><b>Modo de llevarla:</b> sobre una base uniforme, que permita individualizar las operaciones y las cuentas, con respaldo documental.</td></tr>
  <tr><td class="mono">322</td><td><b>Registros indispensables:</b> Diario, Inventario y Balances, los que correspondan a la actividad y los que exijan otras leyes.</td></tr>
  <tr><td class="mono">323</td><td><b>Libros:</b> deben estar encuadernados, foliados e individualizados por el Registro Público.</td></tr>
  <tr><td class="mono">324</td><td><b>Prohibiciones:</b> alterar el orden de los asientos, dejar blancos, interlinear, raspar o enmendar, mutilar o arrancar hojas, alterar la encuadernación.</td></tr>
  <tr><td class="mono">325</td><td><b>Forma de llevar los registros:</b> en idioma y moneda nacional, con orden cronológico.</td></tr>
  <tr><td class="mono">326</td><td><b>Estados contables:</b> al cierre de cada ejercicio el obligado debe confeccionar estados contables.</td></tr>
  <tr><td class="mono">327</td><td><b>Diario:</b> se registran todas las operaciones; se pueden usar resúmenes de períodos no mayores a un mes.</td></tr>
  <tr><td class="mono">328</td><td><b>Conservación:</b> 10 años desde el último asiento para los libros y desde su fecha para la documentación.</td></tr>
  <tr><td class="mono">329</td><td><b>Actos sujetos a autorización:</b> sustituir libros por medios mecánicos o digitales, con autorización del Registro Público.</td></tr>
  <tr><td class="mono">330</td><td><b>Eficacia probatoria:</b> la contabilidad bien llevada hace prueba a favor de quien la lleva en litigios con otros obligados; siempre hace prueba en su contra.</td></tr></tbody></table></div>`,
  ex:[{type:"mc",items:[
   {q:"¿Qué libros son indispensables según el art. 322?",o:["Diario y Mayor","Diario e Inventario y Balances","Caja y Bancos","IVA Compras e IVA Ventas"],a:1},
   {q:"Un comerciante borra con corrector un asiento del Diario. ¿Qué artículo viola?",o:["320","324","328","330"],a:1},
   {q:"¿Durante cuánto tiempo hay que conservar los libros?",o:["5 años","10 años desde el último asiento","Hasta cerrar la empresa","2 años"],a:1},
   {q:"Una sociedad quiere llevar sus libros en formato digital. Según el art. 329,…",o:["No puede","Puede, con autorización del Registro Público","Solo si lo aprueba ARCA","Puede sin ningún requisito"],a:1}]}]},
],
eval:[
 {q:"La capacidad de ejercicio plena se adquiere a los…",o:["16 años","18 años","21 años","Al casarse"],a:1},
 {q:"Una sociedad comercial es una persona…",o:["Humana","Jurídica pública","Jurídica privada","Sin personalidad"],a:2},
 {q:"El aprovechamiento de la necesidad de otro para obtener una ventaja desproporcionada es…",o:["Dolo","Lesión","Error","Simulación"],a:1},
 {q:"Como regla, la mora del deudor se produce…",o:["Con una intimación judicial","Por el solo vencimiento del plazo","Al año","Cuando el acreedor lo decide"],a:1},
 {q:"El interés por el uso del capital es…",o:["Moratorio","Punitorio","Compensatorio","Legal"],a:2},
 {q:"El seguro es un contrato…",o:["Gratuito","Aleatorio","Unilateral","Real"],a:1},
 {q:"En el leasing, al final del contrato el tomador…",o:["Debe devolver siempre el bien","Tiene opción de compra","Se vuelve dueño automáticamente","Paga una multa"],a:1},
 {q:"El plazo genérico de prescripción del CCyC es de…",o:["2 años","3 años","5 años","10 años"],a:2},
 {q:"La caducidad, a diferencia de la prescripción,…",o:["Se puede interrumpir libremente","No se suspende ni se interrumpe, salvo disposición legal","Es más larga","Solo aplica a impuestos"],a:1},
 {q:"¿Qué artículo del CCyC obliga a conservar los registros contables 10 años?",o:["320","322","326","328"],a:3},
]};
