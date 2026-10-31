/* Módulo 1 · Introducción a la contabilidad */
(function(){
const CUENTAS = [
  ["Caja","Activo"],["Banco Nación c/c","Activo"],["Mercaderías","Activo"],["Deudores por ventas","Activo"],["Rodados","Activo"],["Inmuebles","Activo"],["IVA Crédito Fiscal","Activo"],
  ["Proveedores","Pasivo"],["Préstamos bancarios","Pasivo"],["Documentos a pagar","Pasivo"],["IVA Débito Fiscal","Pasivo"],["Sueldos a pagar","Pasivo"],
  ["Capital social","PN"],["Resultados no asignados","PN"],
  ["Ventas","R+"],["Intereses ganados","R+"],["Alquileres ganados","R+"],
  ["Costo de mercaderías vendidas","R−"],["Sueldos y jornales","R−"],["Alquileres perdidos","R−"],["Intereses perdidos","R−"],
];
const ASIENTOS = [
  {t:"01/03 · Los socios constituyen la empresa aportando $ 500.000: $ 200.000 en efectivo y $ 300.000 depositados en el Banco Nación.",
   e:[["Caja",200000,0],["Banco Nación c/c",300000,0],["Capital social",0,500000]]},
  {t:"05/03 · Se compran mercaderías por $ 100.000 más IVA 21% (factura A). Se paga con transferencia desde el Banco Nación.",
   e:[["Mercaderías",100000,0],["IVA Crédito Fiscal",21000,0],["Banco Nación c/c",0,121000]]},
  {t:"12/03 · Se vende mercadería a un cliente por $ 80.000 más IVA 21%, en cuenta corriente (a cobrar en 30 días).",
   e:[["Deudores por ventas",96800,0],["Ventas",0,80000],["IVA Débito Fiscal",0,16800]]},
  {t:"31/03 · Se pagan sueldos del mes por $ 60.000 en efectivo.",
   e:[["Sueldos y jornales",60000,0],["Caja",0,60000]]},
];

function simulador(el, done){
  const T = [
    {t:"Los socios aportan $ 1.000.000 en efectivo para iniciar la empresa.",e:{A:1e6,P:0,N:1e6},why:"Entra plata (Activo ↑) y crece lo que es de los dueños (PN ↑)."},
    {t:"Se compran mercaderías por $ 300.000 pagando en efectivo.",e:{A:0,P:0,N:0},why:"Un activo sube (Mercaderías) y otro baja (Caja) por el mismo importe: el total no cambia. Se llama permutación de activos."},
    {t:"Se compra un rodado por $ 800.000 a pagar en 6 meses.",e:{A:8e5,P:8e5,N:0},why:"Entra un bien (Activo ↑) y nace una deuda (Pasivo ↑)."},
    {t:"Se paga $ 200.000 de la deuda del rodado.",e:{A:-2e5,P:-2e5,N:0},why:"Sale plata (Activo ↓) y se reduce la deuda (Pasivo ↓)."},
    {t:"Se cobra en efectivo un servicio de asesoramiento prestado: $ 150.000.",e:{A:1.5e5,P:0,N:1.5e5},why:"Es una ganancia: entra plata y el PN crece a través del resultado."},
    {t:"Se paga el alquiler del mes: $ 120.000 en efectivo.",e:{A:-1.2e5,P:0,N:-1.2e5},why:"Es un gasto (pérdida): sale plata y el PN baja."},
  ];
  el.innerHTML = `<div class="eq" aria-live="polite">
      <div class="col"><div class="stack"><div class="fill" data-b="A" style="background:var(--debe)"></div></div><span class="lbl">Activo</span><b class="num" data-v="A"></b></div>
      <div class="sym">=</div>
      <div class="col"><div class="stack"><div class="fill" data-b="P" style="background:var(--haber)"></div></div><span class="lbl">Pasivo</span><b class="num" data-v="P"></b></div>
      <div class="sym">+</div>
      <div class="col"><div class="stack"><div class="fill" data-b="N" style="background:var(--accent)"></div></div><span class="lbl">Patr. Neto</span><b class="num" data-v="N"></b></div>
    </div><div class="trx"></div>`;
  let step=0, cur={A:0,P:0,N:0};
  const sign = x => x>0?"↑":x<0?"↓":"=";
  const box = $(".trx",el);
  function draw(){
    const max = Math.max(cur.A,1);
    ["A","P","N"].forEach(k=>{ $(`[data-b=${k}]`,el).style.height=(cur[k]/max*100)+"%"; $(`[data-v=${k}]`,el).textContent=fmt(cur[k]); });
    if(step>=T.length){ box.innerHTML = fbHTML(true,`Después de 6 operaciones, Activo (${fmt(cur.A)}) sigue igual a Pasivo + PN (${fmt(cur.P+cur.N)}).`)+`<div class="row"><button class="btn ghost" type="button" data-r>Reiniciar simulador</button></div>`; $("[data-r]",box).onclick=()=>{step=0;cur={A:0,P:0,N:0};draw();}; done(); return; }
    const tr = T[step]; const pick={};
    box.innerHTML = `<p><span class="pill">Operación ${step+1} de ${T.length}</span></p><p><b>${tr.t}</b></p>
      <p class="src">Antes de aplicarla: ¿qué le pasa a cada parte de la ecuación?</p>
      <div class="trx-q">${["A","P","N"].map(k=>`<span>${{A:"Activo",P:"Pasivo",N:"Patrimonio Neto"}[k]}</span><div class="seg" data-k="${k}">${["↑","=","↓"].map(s=>`<button type="button" data-s="${s}">${s}</button>`).join("")}</div><span></span>`).join("")}</div>
      <div class="row"><button class="btn" type="button" data-ap>Comprobar y aplicar</button></div><div data-f></div>`;
    box.querySelectorAll(".seg").forEach(sg=>sg.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;pick[sg.dataset.k]=b.dataset.s;sg.querySelectorAll("button").forEach(x=>x.classList.toggle("sel",x===b));}));
    const ap = $("[data-ap]",box);
    ap.onclick=()=>{
      const good = ["A","P","N"].every(k=>pick[k]===sign(tr.e[k]));
      if(!good){ $("[data-f]",box).innerHTML=fbHTML(false,"No es así. Pensá: ¿entra o sale algo del activo? ¿aparece o se cancela una deuda? ¿la empresa ganó o perdió?"); return; }
      $("[data-f]",box).innerHTML=fbHTML(true,"Correcto. "+tr.why);
      ap.textContent="Siguiente operación"; ap.onclick=()=>{ cur={A:cur.A+tr.e.A,P:cur.P+tr.e.P,N:cur.N+tr.e.N}; step++; draw(); };
    };
  }
  draw();
}

function mayorEx(el, done){
  const M = {};
  ASIENTOS.forEach((a,i)=>a.e.forEach(([c,d,h])=>{ (M[c] ||= {d:[],h:[]}); if(d) M[c].d.push([i+1,d]); if(h) M[c].h.push([i+1,h]); }));
  const L = Object.entries(M).map(([c,v])=>{ const D=v.d.reduce((a,x)=>a+x[1],0), H=v.h.reduce((a,x)=>a+x[1],0); return {c,...v,D,H,s:D-H}; });
  const tD=L.reduce((a,m)=>a+m.D,0), tH=L.reduce((a,m)=>a+m.H,0), sD=L.reduce((a,m)=>a+Math.max(m.s,0),0), sH=L.reduce((a,m)=>a+Math.max(-m.s,0),0);
  const hide = ["Caja","Banco Nación c/c","Capital social"];
  el.innerHTML = `<p class="src">Libro Mayor de los asientos de Marzo (lección 1.5). El número chico indica de qué asiento viene cada importe.</p>
    <div class="ts">${L.map(m=>`<div class="t"><div class="tt">${esc(m.c)}</div><div class="tb"><div>${m.d.map(x=>`<span class="num d"><sup>${x[0]}</sup> ${nf(x[1])}</span>`).join("")}</div><div>${m.h.map(x=>`<span class="num h">${nf(x[1])} <sup>${x[0]}</sup></span>`).join("")}</div></div><div class="sal">Saldo ${hide.includes(m.c)?"<b>?</b>":`<span class="num">${nf(Math.abs(m.s))}</span> ${m.s>=0?"deudor":"acreedor"}`}</div></div>`).join("")}</div>
    <p><b>Completá los saldos que faltan y el total de saldos deudores:</b></p><div data-n></div>
    <div data-bss hidden><div class="tw"><table><thead><tr><th>Cuenta</th><th class="r">Sumas Debe</th><th class="r">Sumas Haber</th><th class="r">Saldo deudor</th><th class="r">Saldo acreedor</th></tr></thead><tbody>
      ${L.map(m=>`<tr><td>${esc(m.c)}</td><td class="r num">${nf(m.D)}</td><td class="r num">${nf(m.H)}</td><td class="r num d">${m.s>0?nf(m.s):""}</td><td class="r num h">${m.s<0?nf(-m.s):""}</td></tr>`).join("")}
      </tbody><tfoot><tr><td>Totales</td><td class="r num">${nf(tD)}</td><td class="r num">${nf(tH)}</td><td class="r num">${nf(sD)}</td><td class="r num">${nf(sH)}</td></tr></tfoot></table></div></div>`;
  const s = c => Math.abs(L.find(m=>m.c===c).s);
  const n = $("[data-n]",el); n.id = nid("mx");
  EX.num({items:[
    {q:"Saldo de Caja",a:s("Caja"),u:"$",hint:"Sumá el Debe, sumá el Haber y restá."},
    {q:"Saldo de Banco Nación c/c",a:s("Banco Nación c/c"),u:"$",hint:"300.000 entró, 121.000 salió."},
    {q:"Saldo de Capital social",a:s("Capital social"),u:"$"},
    {q:"Total de saldos deudores del balance",a:sD,u:"$",hint:"Sumá todos los saldos deudores, incluidos los que ya ves."},
  ]}, n, ()=>{ $("[data-bss]",el).hidden=false; done(); });
}

CAMPUS.content[1] = {
lessons:[
 {lead:"La contabilidad es el sistema que registra lo que le pasa al patrimonio de un ente y lo convierte en información útil para decidir.",
  html:`<p>Cada vez que una empresa compra, vende, paga o cobra, su patrimonio cambia. La contabilidad <b>capta</b> esos hechos, los <b>mide</b> en dinero, los <b>registra</b> con un método ordenado y los <b>resume</b> en informes llamados estados contables.</p>
    <h3>Conceptos clave</h3>
    <ul>
      <li><b>Ente:</b> la organización cuyo patrimonio se registra (una SRL, una SA, un monotributista, una cooperativa). El patrimonio del ente es distinto del de sus dueños.</li>
      <li><b>Patrimonio:</b> el conjunto de bienes, derechos y obligaciones del ente en un momento dado.</li>
      <li><b>Hecho económico:</b> cualquier suceso que modifica el patrimonio: una compra, una venta, un incendio, un aporte de los socios.</li>
      <li><b>Usuarios:</b> quienes usan la información contable: dueños, gerentes, bancos, proveedores, el fisco (ARCA, ex AFIP), empleados.</li>
    </ul>
    <h3>Ramas de la contabilidad</h3>
    <ul>
      <li><b>Patrimonial o financiera:</b> informa a terceros sobre el patrimonio y sus resultados. Se rige por normas profesionales.</li>
      <li><b>De gestión o gerencial:</b> informa a la dirección para decidir (costos, presupuestos, tableros).</li>
      <li><b>Gubernamental:</b> registra el patrimonio y el presupuesto del Estado.</li>
      <li><b>Social y ambiental:</b> informa sobre el impacto de la organización en la comunidad y el ambiente.</li>
    </ul>
    <div class="note"><b>Lo que dice la ley.</b> En Argentina, el Código Civil y Comercial (art. 320) obliga a llevar contabilidad a las personas jurídicas privadas y a quienes realizan una actividad económica organizada. El art. 322 exige como registros indispensables el <b>Libro Diario</b> y el <b>Libro de Inventarios y Balances</b>.</div>
    <h3>El rol del contador</h3>
    <p>El Contador Público (Ley 20.488) es el único profesional habilitado para firmar dictámenes sobre estados contables, actuar como síndico en concursos y como perito contable en la justicia. También trabaja en impuestos, sueldos, costos, finanzas y consultoría.</p>
    <div class="ejr"><b>Ejemplo para fijar la idea</b>Una panadería compra harina: es un hecho económico (sale plata, entra mercadería). El dueño se va de vacaciones con su propio dinero: no lo es, porque es el patrimonio del dueño, no el de la panadería. Esta separación se llama <b>principio del ente</b> y es la primera pregunta que te tenés que hacer siempre: ¿esto le pasa al patrimonio de la empresa?</div>
    ${CAMPUS.vid([["Qué es la contabilidad, explicado desde cero","que es la contabilidad explicacion desde cero"],["Patrimonio, activo, pasivo y patrimonio neto","patrimonio activo pasivo patrimonio neto contabilidad explicacion"]])}`,
  ex:[{type:"pick",title:"¿Es un hecho económico para la empresa?",options:["Sí","No"],items:[
    ["La empresa compra una computadora y la paga en efectivo","Sí"],["El gerente se toma vacaciones","No"],["Un cliente paga una factura que debía","Sí"],
    ["La empresa contrata un seguro y paga la primera cuota","Sí"],["Un socio compra un auto para uso personal con su propia plata","No","El patrimonio del socio no es el del ente."],
    ["Se recibe un presupuesto de un proveedor","No","Un presupuesto todavía no crea ninguna obligación."],["Un incendio destruye mercadería del depósito","Sí"]]}]},
 {lead:"Todo lo que la empresa tiene fue financiado por alguien: por terceros (deudas) o por sus dueños.",
  html:`<p class="formula" style="text-align:center;font-size:1.2rem">Activo = Pasivo + Patrimonio Neto</p>
    <ul>
      <li><b>Activo:</b> recursos que controla el ente y de los que espera beneficios: caja, cuentas bancarias, mercaderías, créditos a cobrar, rodados, inmuebles.</li>
      <li><b>Pasivo:</b> obligaciones con terceros: deudas con proveedores, préstamos bancarios, sueldos e impuestos a pagar.</li>
      <li><b>Patrimonio Neto (PN):</b> lo que les corresponde a los dueños. Es la diferencia: PN = Activo − Pasivo. Crece con los aportes y las ganancias, y baja con los retiros y las pérdidas.</li>
    </ul>
    <h3>Variaciones patrimoniales</h3>
    <p>Los hechos económicos se clasifican según su efecto en el PN:</p>
    <ul>
      <li><b>Permutativas:</b> cambian la composición del patrimonio pero no el PN. Ejemplo: comprar mercadería al contado.</li>
      <li><b>Modificativas:</b> cambian el PN. Pueden ser aumentos (ganancias, aportes) o disminuciones (gastos, pérdidas, retiros).</li>
    </ul>
    <p>Ningún hecho económico rompe la igualdad. Probalo con el simulador de la empresa Comercial Del Sur SRL.</p>
    <h3>Paso a paso con números</h3>
    <div class="ejr"><b>Ejemplo resuelto</b>Una kiosquera tiene $ 50.000 en efectivo, mercadería por $ 150.000 y una moto de reparto de $ 300.000. Le debe $ 120.000 a un mayorista.
    <ol><li>Activo (lo que tiene): 50.000 + 150.000 + 300.000 = <b>500.000</b>.</li><li>Pasivo (lo que debe a terceros): <b>120.000</b>.</li><li>Patrimonio Neto: 500.000 − 120.000 = <b>380.000</b>. Es lo que le quedaría si vendiera todo y pagara todas las deudas.</li><li>Control: 500.000 = 120.000 + 380.000 ✔.</li></ol></div>
    <div class="ejr"><b>Ejemplo resuelto · cómo cambia con cada operación</b>
    <ol><li>Paga $ 20.000 al mayorista en efectivo: Activo baja 20.000 (Caja) y Pasivo baja 20.000. Queda 480.000 = 100.000 + 380.000. PN igual: <b>permutativa</b>.</li><li>Vende en $ 30.000 mercadería que le costó $ 18.000: Caja sube 30.000 y Mercadería baja 18.000. Activo neto +12.000. Queda 492.000 = 100.000 + 392.000. El PN creció 12.000 por la ganancia: <b>modificativa</b>.</li></ol></div>
    <div class="err"><b>Errores comunes</b><ul><li>Poner el Patrimonio Neto del lado del Activo.</li><li>Pensar que una compra a crédito cambia el PN: sube el activo y la deuda por igual.</li></ul></div>
    ${CAMPUS.vid([["La ecuación patrimonial","ecuacion patrimonial contabilidad explicacion ejemplos"],["Variaciones permutativas y modificativas","variaciones patrimoniales permutativas modificativas ejemplos"]])}`,
  ex:[{type:"custom",title:"Simulador · Comercial Del Sur SRL",render:simulador},
      {type:"pick",title:"¿Permutativa o modificativa?",options:["Permutativa","Modificativa"],items:[
        ["Se cobra en efectivo una deuda de un cliente","Permutativa"],["Se pagan intereses por un préstamo","Modificativa"],["Se compra un rodado a crédito","Permutativa","El activo y el pasivo suben igual; el PN no cambia."],
        ["Los socios hacen un aporte de capital","Modificativa"],["Se deposita el efectivo de caja en el banco","Permutativa"],["Se vende un servicio y se cobra","Modificativa"]]}]},
 {lead:"Una cuenta es el nombre que agrupa todos los movimientos de un mismo elemento del patrimonio o de los resultados.",
  html:`<p>En lugar de escribir “la plata que tenemos en el cajón”, usamos la cuenta <b>Caja</b>. En lugar de “lo que le debemos a los que nos venden”, usamos <b>Proveedores</b>. Hay cinco grandes grupos:</p>
    <div class="tw"><table><thead><tr><th>Grupo</th><th>Qué representa</th><th>Ejemplos</th></tr></thead><tbody>
      <tr><td><b>Activo</b></td><td>Bienes y derechos</td><td>Caja, Banco c/c, Mercaderías, Deudores por ventas, Rodados</td></tr>
      <tr><td><b>Pasivo</b></td><td>Deudas con terceros</td><td>Proveedores, Préstamos bancarios, Sueldos a pagar</td></tr>
      <tr><td><b>Patrimonio Neto</b></td><td>Lo de los dueños</td><td>Capital social, Reservas, Resultados no asignados</td></tr>
      <tr><td><b>Resultado positivo (R+)</b></td><td>Ganancias, aumentan el PN</td><td>Ventas, Intereses ganados</td></tr>
      <tr><td><b>Resultado negativo (R−)</b></td><td>Gastos y pérdidas, bajan el PN</td><td>Sueldos y jornales, Alquileres perdidos, CMV</td></tr>
    </tbody></table></div>
    <p>El <b>plan de cuentas</b> es la lista ordenada y codificada de todas las cuentas que usa una empresa. Un esquema típico: 1 Activo, 2 Pasivo, 3 Patrimonio Neto, 4 Resultados positivos, 5 Resultados negativos. Por ejemplo, 1.1.01 Caja, 1.1.02 Banco Nación c/c. El <b>manual de cuentas</b> explica qué se registra en cada una, cuándo se debita y cuándo se acredita.</p>
    <div class="note"><b>Ojo con el IVA.</b> El <i>IVA Crédito Fiscal</i> (el IVA que pagás al comprar) es un activo, porque lo podés descontar. El <i>IVA Débito Fiscal</i> (el IVA que cobrás al vender) es un pasivo, porque se lo debés a ARCA. La alícuota general es 21%.</div>
    <div class="ejr"><b>Cómo clasificar cualquier cuenta en 3 preguntas</b>
    <ol><li>¿Es algo que la empresa <b>tiene</b> o le <b>deben</b>? → Activo.</li><li>¿Es algo que la empresa <b>debe</b> a terceros? → Pasivo.</li><li>¿Es lo que <b>aportaron o ganaron los dueños</b> y quedó en la empresa? → Patrimonio Neto.</li><li>Si no es ninguna de esas, es un <b>resultado</b>: si hace ganar plata (ventas, intereses ganados) es R+; si es un gasto o una pérdida, R−.</li></ol>
    Ejemplo: “Deudores por ventas” → los clientes nos deben → nos deben a nosotros → <b>Activo</b>. “Documentos a pagar” → firmamos pagarés → debemos → <b>Pasivo</b>.</div>
    <div class="err"><b>Errores comunes</b><ul><li>Clasificar “Deudores por ventas” como pasivo porque dice “deudores”: los deudores son ellos, la empresa tiene el derecho a cobrar.</li><li>Confundir IVA Crédito Fiscal (activo) con IVA Débito Fiscal (pasivo).</li></ul></div>
    ${CAMPUS.vid([["Clasificación de cuentas contables","clasificacion de cuentas contables activo pasivo patrimonio neto resultados"],["Qué es un plan de cuentas","plan de cuentas contabilidad explicacion"]])}`,
  ex:[{type:"pick",title:"Clasificá cada cuenta",options:["Activo","Pasivo","PN","R+","R−"],items:CUENTAS}]},
 {lead:"Todo hecho económico se registra en al menos dos cuentas, y lo que se anota en el Debe siempre es igual a lo que se anota en el Haber.",
  html:`<p>Este método, descripto por Luca Pacioli en 1494, se basa en que todo hecho tiene un origen y un destino. Si entra plata al banco (destino) es porque alguien la aportó, la prestó o la pagó (origen).</p>
    <p>Cada cuenta tiene dos columnas: <b class="d">Debe</b> (izquierda) y <b class="h">Haber</b> (derecha). Las reglas salen de la ecuación patrimonial:</p>
    <div class="tw"><table><thead><tr><th>Tipo de cuenta</th><th class="r">Aumenta en</th><th class="r">Disminuye en</th><th class="r">Saldo normal</th></tr></thead><tbody>
      <tr><td>Activo</td><td class="r d">Debe</td><td class="r h">Haber</td><td class="r">Deudor</td></tr>
      <tr><td>Pasivo</td><td class="r h">Haber</td><td class="r d">Debe</td><td class="r">Acreedor</td></tr>
      <tr><td>Patrimonio Neto</td><td class="r h">Haber</td><td class="r d">Debe</td><td class="r">Acreedor</td></tr>
      <tr><td>Resultado positivo</td><td class="r h">Haber</td><td class="r">—</td><td class="r">Acreedor</td></tr>
      <tr><td>Resultado negativo</td><td class="r d">Debe</td><td class="r">—</td><td class="r">Deudor</td></tr>
    </tbody></table></div>
    <div class="note"><b>Truco para recordar.</b> Lo que está a la izquierda de la ecuación (Activo) aumenta a la izquierda (Debe). Lo que está a la derecha (Pasivo y PN) aumenta a la derecha (Haber). Las ganancias aumentan el PN, entonces van al Haber; las pérdidas lo disminuyen, entonces van al Debe.</div>
    <p>“Debe” y “Haber” son solo nombres de columnas. No significan que alguien deba algo.</p>
    <h3>Paso a paso: decidir Debe o Haber</h3>
    <div class="ejr"><b>Ejemplo resuelto 1</b>Se paga a un proveedor $ 50.000 por transferencia.
    <ol><li>¿Qué cuentas se mueven? Proveedores (la deuda) y Banco c/c (la plata).</li><li>¿Aumentan o disminuyen? Proveedores <b>disminuye</b> (debemos menos). Banco <b>disminuye</b> (sale plata).</li><li>Reglas: un pasivo que disminuye va al <b>Debe</b>. Un activo que disminuye va al <b>Haber</b>.</li><li>Asiento: Proveedores 50.000 a Banco c/c 50.000. Debe = Haber ✔.</li></ol></div>
    <div class="ejr"><b>Ejemplo resuelto 2</b>Se cobra en efectivo un alquiler ganado de $ 40.000.
    <ol><li>Cuentas: Caja y Alquileres ganados.</li><li>Caja <b>aumenta</b> (activo ↑) → Debe. Alquileres ganados es una ganancia (R+) → Haber.</li><li>Asiento: Caja 40.000 a Alquileres ganados 40.000.</li></ol></div>
    <div class="err"><b>Errores comunes</b><ul><li>Pensar que “Debe” significa que alguien debe plata.</li><li>Registrar un gasto en el Haber porque “sale plata”: la plata que sale (Caja) va al Haber, pero el gasto va al Debe.</li></ul></div>
    ${CAMPUS.vid([["Partida doble: Debe y Haber explicado","partida doble debe y haber explicacion facil"],["Reglas del cargo y abono","como saber si va al debe o al haber contabilidad"]])}`,
  ex:[{type:"pick",title:"¿Debe o Haber?",options:["Debe","Haber"],items:[
    ["Aumenta Caja","Debe"],["Disminuye Banco c/c","Haber"],["Aumenta Proveedores","Haber"],["Se cancela un Préstamo bancario","Debe"],
    ["Aumenta Capital social","Haber"],["Se registran Ventas","Haber"],["Se registran Sueldos y jornales","Debe"],["Aumenta Deudores por ventas","Debe"],
    ["Se devengan Intereses ganados","Haber"],["Aumenta IVA Débito Fiscal","Haber"],["Aumenta IVA Crédito Fiscal","Debe"],["Disminuye Mercaderías","Haber"]]}]},
 {lead:"El asiento es la forma de registrar un hecho económico. El Libro Diario los reúne en orden cronológico.",
  html:`<p>Cada asiento tiene: número, fecha, las cuentas que se <b class="d">debitan</b> (primero), las que se <b class="h">acreditan</b> (después, con sangría y precedidas por “a”) y una breve explicación (la <i>leyenda</i>). La suma del Debe tiene que ser igual a la del Haber.</p>
    <div class="tw"><table><thead><tr><th>Fecha</th><th>Cuenta</th><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>
      <tr><td class="mono">10/03</td><td>Rodados</td><td class="r num d">800.000</td><td></td></tr>
      <tr><td></td><td style="padding-left:32px">a Documentos a pagar</td><td></td><td class="r num h">800.000</td></tr>
      <tr><td></td><td colspan="3" class="src"><i>Compra de utilitario, firmamos pagarés a 6 meses.</i></td></tr>
    </tbody></table></div>
    <h3>Cómo pensar un asiento en 3 pasos</h3>
    <ol>
      <li>¿Qué cuentas se mueven? Identificá qué entra, qué sale, qué deuda nace o se cancela, si hay ganancia o gasto.</li>
      <li>¿Cada una aumenta o disminuye?</li>
      <li>Aplicá las reglas de la lección anterior para saber si va al Debe o al Haber. Verificá que Debe = Haber.</li>
    </ol>
    <p>El art. 324 del Código Civil y Comercial prohíbe alterar el orden de los asientos, dejar espacios en blanco, hacer interlineaciones o raspaduras, y arrancar hojas. Los errores se corrigen con un <b>contraasiento</b>.</p>
    <div class="note"><b>Simplificación.</b> En este módulo registramos las ventas sin el costo de la mercadería vendida, que vemos en el Módulo 9. Los sueldos van sin cargas sociales, que vemos en el Módulo 22.</div>
    <h3>Paso a paso: el asiento de una compra con IVA</h3>
    <div class="ejr"><b>Ejemplo resuelto</b>Se compran mercaderías por $ 100.000 más IVA 21% (factura A), pagando por transferencia.
    <ol><li>Calculo el IVA: 100.000 × 21% = 21.000. Total de la factura: 121.000.</li><li>¿Qué entra? Mercaderías (activo ↑) por 100.000 → Debe. El IVA que pagamos lo vamos a poder descontar: IVA Crédito Fiscal (activo ↑) por 21.000 → Debe.</li><li>¿Qué sale? El banco paga el total: Banco c/c (activo ↓) por 121.000 → Haber.</li><li>Control: Debe 100.000 + 21.000 = 121.000 = Haber ✔.</li></ol>
    <div class="tw"><table><thead><tr><th>Cuenta</th><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>
    <tr><td>Mercaderías</td><td class="r num d">100.000</td><td></td></tr>
    <tr><td>IVA Crédito Fiscal</td><td class="r num d">21.000</td><td></td></tr>
    <tr><td style="padding-left:32px">a Banco Nación c/c</td><td></td><td class="r num h">121.000</td></tr></tbody></table></div></div>
    <div class="ejr"><b>Y una venta a crédito</b>Se vende por $ 80.000 más IVA 21%, a cobrar en 30 días.
    <ol><li>IVA: 80.000 × 21% = 16.800. El cliente nos debe 96.800: Deudores por ventas (activo ↑) → Debe 96.800.</li><li>La venta es una ganancia: Ventas (R+) → Haber 80.000.</li><li>El IVA que cobramos se lo debemos a ARCA: IVA Débito Fiscal (pasivo ↑) → Haber 16.800.</li></ol></div>
    <div class="err"><b>Errores comunes</b><ul><li>Registrar la mercadería con el IVA incluido cuando la factura es A (el IVA va aparte, como crédito fiscal).</li><li>Escribir primero el Haber: se escriben primero las cuentas del Debe.</li></ul></div>
    ${CAMPUS.vid([["Cómo hacer un asiento contable","como hacer un asiento contable libro diario ejemplo"],["Asientos de compra y venta con IVA","asiento contable compra venta con iva ejemplo"]])}`,
  ex:[{type:"asiento",title:"Armá los asientos de Marzo",accounts:CUENTAS.map(c=>c[0]),entries:ASIENTOS}]},
 {lead:"El Diario ordena por fecha; el Mayor ordena por cuenta. El balance de sumas y saldos controla que todo esté bien pasado.",
  html:`<p><b>Mayorizar</b> es pasar cada renglón del Diario a la ficha de su cuenta. La ficha se dibuja como una “T”: a la izquierda los débitos, a la derecha los créditos.</p>
    <p>El <b>saldo</b> es la diferencia entre lo que suma el Debe y lo que suma el Haber. Si el Debe es mayor, el saldo es <b class="d">deudor</b>; si el Haber es mayor, es <b class="h">acreedor</b>.</p>
    <p>El <b>balance de sumas y saldos</b> (o balance de comprobación) lista todas las cuentas con sus sumas y su saldo. Tiene dos controles: el total de sumas del Debe es igual al del Haber, y el total de saldos deudores es igual al de saldos acreedores. Si no da, hay un error de registración o de pase. Ojo: que dé no garantiza que no haya errores (por ejemplo, si se usó una cuenta equivocada).</p>
    <h3>Paso a paso: mayorizar una cuenta</h3>
    <div class="ejr"><b>Ejemplo resuelto</b>Movimientos de Proveedores en un mes: compra a crédito por $ 80.000; otra compra a crédito por $ 50.000; pago de $ 60.000.
    <ol><li>Las compras a crédito aumentan la deuda: van al <b>Haber</b> de Proveedores (80.000 y 50.000).</li><li>El pago la disminuye: va al <b>Debe</b> (60.000).</li><li>Sumas: Debe 60.000; Haber 130.000.</li><li>Saldo: 130.000 − 60.000 = <b>70.000 acreedor</b> (el Haber es mayor). Lo que todavía le debemos a los proveedores.</li></ol>
    <div class="tw"><table><thead><tr><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>
    <tr><td class="r num d">60.000</td><td class="r num h">80.000</td></tr>
    <tr><td></td><td class="r num h">50.000</td></tr>
    <tr><td class="r num">60.000</td><td class="r num">130.000</td></tr></tbody></table></div>
    Una cuenta de pasivo con saldo acreedor es lo normal. Si te diera deudor, revisá: le habrías pagado más de lo que le debías.</div>
    <div class="err"><b>Errores comunes</b><ul><li>Restar al revés y poner el saldo del lado equivocado.</li><li>Olvidarse de pasar un renglón del Diario al Mayor: el balance de comprobación no cierra.</li></ul></div>
    ${CAMPUS.vid([["Libro Mayor: cómo se hace","libro mayor contabilidad como se hace ejemplo"],["Balance de sumas y saldos","balance de sumas y saldos explicacion ejemplo"]])}`,
  ex:[{type:"custom",title:"Mayorización y balance",render:mayorEx}]},
],
eval:[
 {q:"¿Cuál es la ecuación patrimonial básica?",o:["Activo = Pasivo + Patrimonio Neto","Activo + Pasivo = Patrimonio Neto","Ingresos − Gastos = Activo","Patrimonio Neto = Activo + Pasivo"],a:0,ex:"Lo que el ente tiene (Activo) se financia con deudas (Pasivo) o con recursos de los dueños (PN)."},
 {q:"La empresa compra mercaderías al contado. ¿Qué le pasa al total del Activo?",o:["Aumenta","Disminuye","No cambia","Aumenta el Pasivo"],a:2,ex:"Es una permutación: sube Mercaderías y baja Caja por el mismo importe."},
 {q:"¿Cuál de estas cuentas es de Pasivo?",o:["Deudores por ventas","IVA Crédito Fiscal","Proveedores","Rodados"],a:2,ex:"Proveedores es una deuda con terceros. Deudores por ventas e IVA CF son derechos (Activo)."},
 {q:"Una cuenta de Activo aumenta en el…",o:["Haber","Debe","Depende de la cuenta","Patrimonio Neto"],a:1,ex:"Activo: aumenta en el Debe, disminuye en el Haber, saldo deudor."},
 {q:"La cuenta “Ventas” es…",o:["Un activo","Un pasivo","Un resultado positivo","Un resultado negativo"],a:2,ex:"Las ventas generan ingresos que aumentan el PN, por eso se acreditan."},
 {q:"Pagamos el alquiler del local en efectivo. ¿Cuál es el asiento?",o:["Caja a Alquileres perdidos","Alquileres perdidos a Caja","Alquileres perdidos a Proveedores","Caja a Capital social"],a:1,ex:"Se debita el gasto (R−) y se acredita Caja porque sale dinero."},
 {q:"Vendemos por $ 10.000 + IVA 21% a crédito. ¿Por cuánto se debita Deudores por ventas?",o:["$ 10.000","$ 2.100","$ 12.100","$ 7.900"],a:2,ex:"El cliente nos debe el neto más el IVA: 10.000 × 1,21 = 12.100."},
 {q:"El IVA Débito Fiscal se genera cuando…",o:["Compramos con factura A","Vendemos y cobramos IVA al cliente","Pagamos el IVA a ARCA","Recibimos un préstamo"],a:1,ex:"El IVA que cobramos al vender es una deuda con el fisco: IVA Débito Fiscal (Pasivo)."},
 {q:"Según el Código Civil y Comercial (art. 322), ¿qué registros son indispensables?",o:["Libro Mayor y Caja","Diario e Inventarios y Balances","Solo el Libro Diario","Libro de Sueldos y Diario"],a:1,ex:"El art. 322 exige el Diario y el de Inventarios y Balances, más los que correspondan a la actividad."},
 {q:"Una cuenta tiene sumas Debe $ 500.000 y Haber $ 320.000. Su saldo es…",o:["$ 180.000 acreedor","$ 820.000 deudor","$ 180.000 deudor","$ 320.000 acreedor"],a:2,ex:"500.000 − 320.000 = 180.000, y como el Debe es mayor, es deudor."},
 {q:"Si en el balance de sumas y saldos el total del Debe no coincide con el del Haber…",o:["Es normal al cierre","Hay un error de registración o de pase","La empresa tuvo pérdida","Falta el IVA"],a:1,ex:"La partida doble garantiza la igualdad. Si no da, se cometió un error."},
 {q:"¿Cuál de estos hechos NO es un hecho económico para la empresa?",o:["Un cliente nos paga una deuda","El socio compra una casa con su dinero personal","Se rompe una máquina sin seguro","Se paga un impuesto"],a:1,ex:"Principio de ente: el patrimonio de los socios es distinto del de la empresa."},
 {q:"Se descubre un asiento con un error. ¿Cómo se corrige?",o:["Se tacha y se reescribe","Se arranca la hoja","Con un contraasiento y el asiento correcto","Se deja así"],a:2,ex:"El art. 324 del CCyC prohíbe raspaduras y tachaduras; se anula con un contraasiento."},
 {q:"Comprar un rodado a crédito es una variación…",o:["Permutativa","Modificativa positiva","Modificativa negativa","No es una variación"],a:0,ex:"Sube el Activo y sube el Pasivo; el PN no cambia."},
]};
})();
