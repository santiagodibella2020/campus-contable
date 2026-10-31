/* Trabajos prácticos integradores · módulos 8 a 14 */
(function(){
CAMPUS.tp[8] = {t:"TP 8: el contrato correcto y los libros obligatorios",
 lead:"Un comerciante te consulta sobre varios acuerdos que firmó y sobre qué registros tiene que llevar.",
 html:`<p>Repasá los contratos típicos del Código Civil y Comercial y los artículos 320 a 331 sobre contabilidad y estados contables.</p>`,
 src:["ccyc","leysimple"],
 ex:[{type:"pick",title:"¿Qué contrato es?",options:["Compraventa (art. 1123)","Locación (art. 1187)","Leasing (art. 1227)","Mandato (art. 1319)","Mutuo (art. 1525)","Fianza (art. 1574)"],items:[
   ["Alquila un local por 3 años a cambio de un precio mensual","Locación (art. 1187)"],
   ["Un banco le presta $ 5.000.000 que devolverá con intereses","Mutuo (art. 1525)"],
   ["Su hermano se compromete a pagar si él no paga al proveedor","Fianza (art. 1574)"],
   ["Usa una camioneta pagando un canon, con opción de compra al final","Leasing (art. 1227)"],
   ["Le encarga a un gestor que haga trámites en su nombre","Mandato (art. 1319)"],
   ["Adquiere mercadería a cambio de un precio en dinero","Compraventa (art. 1123)"]]},
  {type:"tf",title:"Contabilidad en el CCyC",items:[
   ["Una SRL está obligada a llevar contabilidad",true,"Art. 320: las personas jurídicas privadas."],
   ["El Libro Diario y el de Inventarios y Balances son registros indispensables",true,"Art. 322."],
   ["Los libros se pueden dejar en blanco entre asientos si se completan después",false,"Art. 324: está prohibido dejar blancos."],
   ["Los registros y la documentación se conservan 10 años",true,"Art. 328."],
   ["Un profesional liberal que no organiza su actividad como empresa está siempre obligado a llevar contabilidad",false,"El art. 320 lo exceptúa."]]},
  {type:"mc",items:[{q:"¿Cuál es el plazo genérico de prescripción del CCyC, si no hay uno especial?",o:["2 años","3 años","5 años","10 años"],a:2,ex:"Art. 2560."}]}]};

const ACC9 = ["Banco Nación c/c","Deudores por ventas","Mercaderías","IVA Crédito Fiscal","Seguros pagados por adelantado","Rodados","Amortización acumulada rodados","Proveedores","IVA Débito Fiscal","Ventas","Costo de mercaderías vendidas","Seguros","Amortizaciones rodados"];
CAMPUS.tp[9] = {t:"TP 9: un trimestre de Comercial Norte",
 lead:"Comercial Norte es responsable inscripto y usa inventario permanente con precio promedio ponderado. Vas a registrar sus operaciones del trimestre, ajustar al cierre y controlar el banco.",
 html:`<div class="tw"><table><thead><tr><th>Fecha</th><th>Operación</th></tr></thead><tbody>
 <tr><td class="mono">05/10</td><td>Compra 100 unidades a $ 1.000 más IVA 21%, a 30 días.</td></tr>
 <tr><td class="mono">20/10</td><td>Compra 100 unidades a $ 1.200 más IVA, por transferencia.</td></tr>
 <tr><td class="mono">15/11</td><td>Vende 150 unidades a $ 2.000 más IVA, en cuenta corriente.</td></tr>
 <tr><td class="mono">01/10</td><td>Había pagado un seguro anual de $ 120.000 y lo registró como seguro pagado por adelantado.</td></tr>
 <tr><td class="mono">01/07</td><td>Había comprado un rodado de $ 6.000.000 (vida útil 5 años, sin valor residual). Se amortiza en proporción a los meses de uso.</td></tr></tbody></table></div>
 <p>El cierre de ejercicio es el 31/12.</p>`,
 cite:["Fowler Newton, E., Contabilidad Básica, capítulos sobre bienes de cambio y ajustes."],
 ex:[{type:"asiento",title:"Operaciones y ajustes",accounts:ACC9,entries:[
   {t:"05/10 · Compra de 100 unidades a $ 1.000 más IVA, a 30 días.",e:[["Mercaderías",100000,0],["IVA Crédito Fiscal",21000,0],["Proveedores",0,121000]]},
   {t:"20/10 · Compra de 100 unidades a $ 1.200 más IVA, por transferencia.",e:[["Mercaderías",120000,0],["IVA Crédito Fiscal",25200,0],["Banco Nación c/c",0,145200]]},
   {t:"15/11 · Venta de 150 unidades a $ 2.000 más IVA, en cuenta corriente.",e:[["Deudores por ventas",363000,0],["Ventas",0,300000],["IVA Débito Fiscal",0,63000]]},
   {t:"15/11 · Costo de la venta con PPP.",e:[["Costo de mercaderías vendidas",165000,0],["Mercaderías",0,165000]],why:"Promedio: 220.000 / 200 = $ 1.100 × 150."},
   {t:"31/12 · Devengamiento del seguro (3 meses).",e:[["Seguros",30000,0],["Seguros pagados por adelantado",0,30000]]},
   {t:"31/12 · Amortización del rodado (6 meses).",e:[["Amortizaciones rodados",600000,0],["Amortización acumulada rodados",0,600000]],why:"6.000.000 / 5 × 6/12."}]},
  {type:"num",title:"Saldos y controles",items:[
   {q:"Existencia final de mercaderías (en $)",a:55000,u:"$",ex:"50 unidades × $ 1.100."},
   {q:"IVA del trimestre a pagar (si no hay saldos anteriores)",a:16800,u:"$",ex:"Débito 63.000 − crédito 46.200."},
   {q:"Resultado bruto de la venta",a:135000,u:"$"},
   {q:"Conciliación: el extracto dice $ 480.000; hay un depósito de $ 70.000 que el banco todavía no acreditó y cheques emitidos no cobrados por $ 50.000. ¿Cuál es el saldo conciliado?",a:500000,u:"$",ex:"480.000 + 70.000 − 50.000. Debe coincidir con el saldo según libros."}]}]};

CAMPUS.tp[10] = {t:"TP 10: rediseñar el circuito de compras",
 lead:"En una empresa mediana, la misma persona pide, compra, recibe y paga. Vas a rediseñar el circuito con controles internos.",
 html:`<p>Usá el modelo COSO y el principio de <b>oposición de intereses</b>: quien autoriza no registra, quien custodia no registra, y quien registra no custodia.</p>`,
 cite:["Volpentesta, J. R., Sistemas administrativos y sistemas de información.","COSO, Control interno: marco integrado (2013)."],
 ex:[{type:"order",title:"Ordená el circuito de compras",items:["Solicitud de compra del sector que necesita","Pedido de cotizaciones a proveedores","Emisión de la orden de compra autorizada","Recepción de la mercadería contra remito","Control de factura, orden de compra y remito","Registración contable de la factura","Orden de pago autorizada","Pago por transferencia y archivo del comprobante"]},
  {type:"pick",title:"¿Qué tipo de control es?",options:["Preventivo","Detectivo"],items:[["Firma doble para pagos mayores a cierto monto","Preventivo"],["Conciliación bancaria mensual","Detectivo"],["Recuento físico sorpresivo del stock","Detectivo"],["Proveedores solo desde un registro aprobado","Preventivo"],["Revisión de facturas duplicadas en el sistema","Detectivo"]]},
  {type:"pick",title:"Componentes de COSO",options:["Entorno de control","Evaluación de riesgos","Actividades de control","Información y comunicación","Supervisión"],items:[["Código de conducta aprobado por la dirección","Entorno de control"],["Matriz de riesgos de fraude en compras","Evaluación de riesgos"],["Autorización de órdenes de compra","Actividades de control"],["Reporte mensual de compras a la gerencia","Información y comunicación"],["Auditoría interna revisa el circuito cada año","Supervisión"]]}]};

CAMPUS.tp[11] = {t:"TP 11: elegir un préstamo y evaluar una inversión",
 lead:"Una PyME necesita $ 1.000.000 para comprar una máquina. Vas a comparar dos sistemas de amortización y evaluar si la inversión conviene.",
 html:`<p>El banco ofrece 12 cuotas mensuales con una TNA del 36% (tasa efectiva mensual del 3%). La máquina generaría flujos netos de $ 400.000 por año durante 3 años, y la empresa exige un 10% anual.</p>
 <div class="formula">Cuota francesa = P × i / (1 − (1 + i)⁻ⁿ)</div>`,
 cite:["López Dumrauf, G., Cálculo financiero aplicado."],
 ex:[{type:"num",title:"Sistema francés",items:[
   {q:"Valor de la cuota",a:100462.09,u:"$",tol:1},
   {q:"Interés de la primera cuota",a:30000,u:"$"},
   {q:"Amortización de capital de la primera cuota",a:70462.09,u:"$",tol:1},
   {q:"Total de intereses pagados en el préstamo",a:205545.03,u:"$",tol:2}]},
  {type:"num",title:"Sistema alemán",items:[
   {q:"Amortización mensual de capital",a:83333.33,u:"$",tol:1},
   {q:"Primera cuota",a:113333.33,u:"$",tol:1},
   {q:"Total de intereses pagados",a:195000,u:"$",ex:"Paga menos intereses porque devuelve capital más rápido."}]},
  {type:"num",title:"Evaluación de la inversión",items:[
   {q:"VAN al 10%",a:-5259.2,u:"$",tol:5,ex:"400.000 × (1 − 1,1⁻³) / 0,1 − 1.000.000."},
   {q:"TIR aproximada (en %)",a:9.7,u:"%",tol:0.05}]},
  {type:"mc",items:[{q:"Con estos resultados, ¿qué conviene?",o:["Invertir, porque la TIR es positiva","No invertir: la TIR es menor que el 10% exigido y el VAN es negativo","Invertir solo con sistema alemán","Es indistinto"],a:1}]}]};

CAMPUS.tp[12] = {t:"TP 12: controles en un sistema de gestión",
 lead:"Una empresa implementa un ERP. Vas a decidir qué controles tiene que configurar y cómo resguardar la información.",
 cite:["Laudon, K. y Laudon, J., Sistemas de información gerencial."],
 html:`<p>Los controles <b>generales</b> abarcan todo el entorno informático (accesos, cambios, resguardos, continuidad). Los controles <b>de aplicación</b> están dentro de un proceso concreto (validaciones de datos, numeración, conciliaciones automáticas).</p>`,
 ex:[{type:"pick",options:["Control general","Control de aplicación"],items:[["Usuarios con contraseña y permisos por perfil","Control general"],["El sistema no acepta una factura sin CUIT válido","Control de aplicación"],["Copia de seguridad diaria fuera de la empresa","Control general"],["Bloqueo de facturas duplicadas por número y proveedor","Control de aplicación"],["Los cambios al sistema se prueban antes de pasar a producción","Control general"]]},
  {type:"tf",items:[["Una factura electrónica es válida cuando tiene el CAE que otorga ARCA",true],["Si todos los usuarios usan la misma clave, igual se puede saber quién hizo cada cambio",false],["Un plan de continuidad define qué hacer si el sistema se cae",true]]}]};

CAMPUS.tp[13] = {t:"TP 13: medición al cierre de Metalúrgica Sur SA",
 lead:"Vas a medir al cierre varios rubros de una empresa y calcular sus resultados, aplicando los criterios de la RT 54.",
 html:`<ul><li>Tiene USD 10.000 en una caja de ahorro, comprados a $ 900. Al cierre, el tipo de cambio comprador es $ 1.050.</li>
 <li>Tiene mercaderías con costo de $ 500.000. Su costo de reposición al cierre es $ 560.000 y su valor neto de realización es $ 540.000.</li>
 <li>Mantuvo $ 1.000.000 en efectivo, sin moverlos, todo el año. La inflación del año fue del 30%.</li>
 <li>Compró un terreno por $ 2.000.000 cuando el índice era 100. Al cierre el índice es 130.</li></ul>`,
 src:["rt54","facpce","indec"],
 ex:[{type:"num",items:[
   {q:"Medición de la moneda extranjera al cierre",a:10500000,u:"$"},
   {q:"Diferencia de cambio del ejercicio",a:1500000,u:"$"},
   {q:"Medición de las mercaderías, limitada al valor recuperable",a:540000,u:"$",ex:"El costo de reposición ($ 560.000) supera el valor recuperable ($ 540.000), así que se mide al menor."},
   {q:"RECPAM por mantener el efectivo (escribilo como número positivo; es pérdida)",a:300000,u:"$",ex:"1.000.000 × 30%."},
   {q:"Terreno reexpresado en moneda de cierre",a:2600000,u:"$"}]},
  {type:"pick",title:"¿Monetaria o no monetaria?",options:["Monetaria","No monetaria"],items:[["Efectivo en pesos","Monetaria"],["Mercaderías","No monetaria"],["Deudas comerciales en pesos sin ajuste","Monetaria"],["Rodados","No monetaria"],["Capital social","No monetaria"]]}]};

CAMPUS.tp[14] = {t:"TP 14: qué normas aplica cada ente",
 lead:"Un estudio contable tiene clientes muy distintos. Vas a decidir qué normas contables corresponden a cada uno y defender la calidad de la información.",
 src:["rt54","facpce","ifrs","cnv"],
 html:`<p>Recordá que la RT 26 obliga a aplicar NIIF a las entidades con oferta pública (con excepciones) y que la RT 54 rige para el resto, salvo que opten por NIIF.</p>`,
 ex:[{type:"pick",title:"¿Qué marco aplica?",options:["NIIF obligatorias (RT 26 y CNV)","RT 54 (o NIIF por opción)","Normas del BCRA"],items:[["Una SA que cotiza sus acciones en BYMA","NIIF obligatorias (RT 26 y CNV)"],["Una SRL distribuidora sin oferta pública","RT 54 (o NIIF por opción)"],["Un banco comercial","Normas del BCRA"],["Una cooperativa de servicios","RT 54 (o NIIF por opción)"],["Una empresa que emite obligaciones negociables","NIIF obligatorias (RT 26 y CNV)"]]},
  {type:"pick",title:"¿Qué requisito de la información está en juego?",options:["Pertinencia","Confiabilidad","Comparabilidad","Claridad"],items:[["Los estados se presentan con cifras del año anterior","Comparabilidad"],["La información llega a tiempo para decidir","Pertinencia"],["Las cifras se pueden verificar con documentación","Confiabilidad"],["Las notas explican los criterios en lenguaje entendible","Claridad"]]},
  {type:"tf",items:[["La RT 54 reemplazó a la RT 6 de moneda homogénea",true],["La RT 54 rige para ejercicios iniciados desde el 1/1/2025",true],["Una SRL no puede elegir aplicar NIIF",false,"Puede optar por NIIF completas o NIIF para PyMEs."]]}]};
})();
