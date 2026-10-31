/* ---------- utilidades ---------- */
const $ = (s,el=document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const nf = (n,d=2) => Number(n).toLocaleString("es-AR",{minimumFractionDigits:0,maximumFractionDigits:d});
const fmt = n => "$ " + nf(n);
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
/* acepta 1.234,56 · 1234,56 · 1234.56 · 1.234 · 12% */
function parseNum(s){
  s = String(s).trim().replace(/[$%\s]/g,"");
  if(!s) return NaN;
  if(s.includes(",")) s = s.replace(/\./g,"").replace(",",".");
  else if(/^-?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g,"");
  return Number(s);
}
let uid = 0; const nid = p => (p||"x")+(++uid);

/* ---------- progreso (se guarda en este navegador) ---------- */
const KEY = "campus-contable-v1";
let state = {done:{}, evals:{}};
try{ const s = JSON.parse(localStorage.getItem(KEY)); if(s) state = Object.assign(state,s); }catch(e){}
if(state.eval!=null && state.evals[1]==null){ state.evals[1]=state.eval; delete state.eval; }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} updateProg(); renderSide(); }
function complete(id){ if(!state.done[id]){ state.done[id]=true; save(); } }

const MOD = n => CAMPUS.modules.find(m=>m.n===n);
const has = n => !!CAMPUS.content[n];
const lid = (n,i) => `m${n}-${i+1}`;
const passed = n => (state.evals[n]||0) >= 70;
function hasTP(n){ return !!(CAMPUS.tp && CAMPUS.tp[n]); }
function srcLinks(keys){ return (keys||[]).filter(k=>CAMPUS.L[k]).map(k=>`<li><a href="${CAMPUS.L[k][1]}" target="_blank" rel="noopener">${esc(CAMPUS.L[k][0])}</a></li>`).join(""); }
function modProgress(n){
  const m = MOD(n); const tp = hasTP(n); const tot = m.l.length + 1 + (tp?1:0);
  const d = m.l.filter((_,i)=>state.done[lid(n,i)]).length + (passed(n)?1:0) + (tp&&state.done[`m${n}-tp`]?1:0);
  return {d, tot, p: Math.round(d/tot*100)};
}

/* ---------- motor de ejercicios ---------- */
function fbHTML(ok, msg){ return `<div class="fb ${ok?"ok":"bad"}">${msg}</div>`; }

const EX = {
  /* opción múltiple: {type:"mc", items:[{q,o:[],a,ex}]} */
  mc(ex, el, done){
    const items = ex.items; const name = nid("mc");
    el.innerHTML = items.map((Q,qi)=>`<div class="q" data-qi="${qi}"><b>${qi+1}. ${Q.q}</b><div class="ch">${Q.o.map((o,j)=>`<label><input type="radio" name="${name}-${qi}" value="${j}"> <span>${o}</span></label>`).join("")}</div><div class="ex" hidden></div></div>`).join("")
      + `<div class="row"><button class="btn" data-act="chk">Corregir</button></div><div data-fb></div>`;
    $("[data-act=chk]",el).onclick = ()=>{
      let ok=0;
      el.querySelectorAll(".q").forEach(b=>{
        const Q = items[+b.dataset.qi]; const sel = b.querySelector("input:checked");
        const good = sel && +sel.value===Q.a; if(good) ok++;
        b.querySelectorAll("label").forEach((l,j)=>{ l.classList.remove("ok","bad"); if(sel && +sel.value===j) l.classList.add(good?"ok":"bad"); });
        const e = b.querySelector(".ex"); if(good && Q.ex){ e.hidden=false; e.innerHTML=Q.ex; } else e.hidden=true;
      });
      const all = ok===items.length;
      $("[data-fb]",el).innerHTML = fbHTML(all, all?"¡Todo correcto!":`Tenés ${ok} de ${items.length} bien. Revisá las marcadas en rojo o sin responder.`);
      if(all) done();
    };
  },
  /* clasificar: {type:"pick", options:[], items:[[texto, respuesta, porqué?]]} */
  pick(ex, el, done){
    const items = ex.shuffle===false ? ex.items : shuffle(ex.items); const ans = {};
    el.innerHTML = `<div class="cls">${items.map((it,i)=>`<div class="it" data-i="${i}"><span>${it[0]}</span><div class="opts">${ex.options.map(o=>`<button type="button" data-o="${esc(o)}">${o}</button>`).join("")}</div></div>`).join("")}</div>
      <div class="row"><button class="btn" data-act="chk">Corregir</button></div><div data-fb></div>`;
    el.querySelector(".cls").addEventListener("click",e=>{
      const b = e.target.closest("button[data-o]"); if(!b) return; const row = b.closest(".it");
      ans[row.dataset.i] = b.dataset.o; row.classList.remove("ok","bad");
      row.querySelectorAll("button").forEach(x=>x.classList.toggle("sel",x===b));
    });
    $("[data-act=chk]",el).onclick = ()=>{
      let ok=0; const notes=[];
      items.forEach((it,i)=>{ const row = el.querySelector(`.it[data-i="${i}"]`); const g = ans[i]===it[1];
        row.classList.toggle("ok",g); row.classList.toggle("bad",!g); if(g) ok++; else if(it[2] && ans[i]) notes.push(it[2]); });
      const all = ok===items.length;
      $("[data-fb]",el).innerHTML = fbHTML(all, (all?"¡Todo correcto!":`Tenés ${ok} de ${items.length} bien. Revisá las marcadas en rojo.`) + (notes.length?"<br>"+notes.join("<br>"):""));
      if(all) done();
    };
  },
  /* numérico: {type:"num", items:[{q, a, tol?, u?, hint?, ex?}]} */
  num(ex, el, done){
    const items = ex.items;
    el.innerHTML = `<div class="nums">${items.map((Q,i)=>`<div class="nq" data-i="${i}"><label for="${el.id}-n${i}">${i+1}. ${Q.q}</label><div class="row"><input class="inp num" id="${el.id}-n${i}" inputmode="decimal" placeholder="${Q.u==="%"?"%":Q.u==="$"?"$":"valor"}" autocomplete="off"><span class="src">${Q.u&&Q.u!=="$"&&Q.u!=="%"?Q.u:""}</span></div><div class="ex" hidden></div></div>`).join("")}</div>
      <div class="row"><button class="btn" data-act="chk">Corregir</button></div><div data-fb></div>`;
    $("[data-act=chk]",el).onclick = ()=>{
      let ok=0;
      items.forEach((Q,i)=>{
        const box = el.querySelector(`.nq[data-i="${i}"]`); const inp = box.querySelector("input"); const v = parseNum(inp.value);
        const tol = Q.tol!=null ? Q.tol : Math.max(0.01, Math.abs(Q.a)*0.002);
        const g = !isNaN(v) && Math.abs(v-Q.a) <= tol; if(g) ok++;
        inp.style.borderColor = inp.value? (g?"var(--ok)":"var(--bad)") : "var(--rule)";
        const e = box.querySelector(".ex");
        if(g && Q.ex){ e.hidden=false; e.innerHTML=Q.ex; } else if(!g && inp.value && Q.hint){ e.hidden=false; e.innerHTML="Pista: "+Q.hint; } else e.hidden=true;
      });
      const all = ok===items.length;
      $("[data-fb]",el).innerHTML = fbHTML(all, all?"¡Todo correcto!":`Tenés ${ok} de ${items.length} bien.`);
      if(all) done();
    };
  },
  /* asientos: {type:"asiento", accounts:[], entries:[{t, e:[[cuenta,debe,haber]]}]} */
  asiento(ex, el, done){
    const accs = [...ex.accounts].sort((a,b)=>a.localeCompare(b,"es")); let k=0;
    const draw = ()=>{
      if(k>=ex.entries.length){ el.innerHTML = fbHTML(true, ex.entries.length===1?"¡Registraste el asiento!":`¡Registraste los ${ex.entries.length} asientos!`)+`<div class="row"><button class="btn ghost" data-act="again">Practicar de nuevo</button></div>`; $("[data-act=again]",el).onclick=()=>{k=0;draw();}; done(); return; }
      const A = ex.entries[k];
      el.innerHTML = `<p><span class="pill">Asiento ${k+1} de ${ex.entries.length}</span></p><p><b>${A.t}</b></p>
        <div class="asi"><div class="ln"><span class="hd acc">Cuenta</span><span class="hd d" style="text-align:right">Debe</span><span class="hd h" style="text-align:right">Haber</span><span></span></div></div>
        <div class="row"><button class="btn ghost" data-act="add" type="button">+ Agregar renglón</button><span class="src num" data-tot></span></div>
        <div class="row"><button class="btn" data-act="chk">Corregir asiento</button><button class="btn ghost" data-act="sol" type="button">Ver solución</button></div><div data-fb></div>`;
      const asi = $(".asi",el);
      const tot = ()=>{ const L=lines(); const D=L.reduce((a,l)=>a+l[1],0), H=L.reduce((a,l)=>a+l[2],0); $("[data-tot]",el).textContent=`Debe ${fmt(D)} · Haber ${fmt(H)} ${Math.abs(D-H)<0.005&&D>0?"✓":""}`; };
      const add = ()=>{ const d=document.createElement("div"); d.className="ln"; d.innerHTML=`<select aria-label="Cuenta"><option value="">Elegí una cuenta…</option>${accs.map(a=>`<option>${esc(a)}</option>`).join("")}</select><input inputmode="decimal" placeholder="0" aria-label="Debe"><input inputmode="decimal" placeholder="0" aria-label="Haber"><button class="x" type="button" aria-label="Quitar renglón">×</button>`; asi.appendChild(d); d.querySelector(".x").onclick=()=>{d.remove();tot();}; d.querySelectorAll("input").forEach(i=>i.oninput=tot); };
      const val = s => { const v=parseNum(s); return isNaN(v)?0:v; };
      const lines = ()=>[...asi.querySelectorAll(".ln")].slice(1).map(l=>{const [s,d,h]=l.querySelectorAll("select,input");return [s.value,val(d.value),val(h.value)];}).filter(l=>l[0]||l[1]||l[2]);
      A.e.forEach(add); tot();
      $("[data-act=add]",el).onclick=add;
      $("[data-act=sol]",el).onclick=()=>{ $("[data-fb]",el).innerHTML=`<div class="tw"><table><thead><tr><th>Cuenta</th><th class="r">Debe</th><th class="r">Haber</th></tr></thead><tbody>${A.e.map(l=>`<tr><td style="${l[2]?"padding-left:32px":""}">${l[2]?"a ":""}${esc(l[0])}</td><td class="r num d">${l[1]?nf(l[1]):""}</td><td class="r num h">${l[2]?nf(l[2]):""}</td></tr>`).join("")}</tbody></table></div>${A.why?`<p class="src">${A.why}</p>`:""}<p class="src">Copiala en los renglones y corregí para avanzar.</p>`; };
      $("[data-act=chk]",el).onclick=()=>{
        const L=lines(); const D=L.reduce((a,l)=>a+l[1],0), H=L.reduce((a,l)=>a+l[2],0); const F=$("[data-fb]",el);
        if(!L.length) return F.innerHTML=fbHTML(false,"Completá al menos un renglón.");
        if(L.some(l=>!l[0])) return F.innerHTML=fbHTML(false,"Hay un renglón con importe pero sin cuenta.");
        if(Math.abs(D-H)>0.005) return F.innerHTML=fbHTML(false,`El asiento no balancea: Debe ${fmt(D)} y Haber ${fmt(H)}.`);
        const norm = arr => { const m={}; arr.forEach(([c,d,h])=>{m[c]=(m[c]||0)+d-h;}); return m; };
        const got=norm(L), exp=norm(A.e); const errs=new Set();
        new Set([...Object.keys(got),...Object.keys(exp)]).forEach(c=>{ const g=got[c]||0, x=exp[c]||0; if(Math.abs(g-x)>0.005){
          if(!(c in exp)) errs.add(`<b>${esc(c)}</b> no interviene en esta operación.`);
          else if(!(c in got)) errs.add("Falta una cuenta que se mueve en esta operación.");
          else if(Math.sign(g)!==Math.sign(x)) errs.add(`<b>${esc(c)}</b> está del lado equivocado.`);
          else errs.add(`Revisá el importe de <b>${esc(c)}</b>.`); }});
        if(errs.size) return F.innerHTML=fbHTML(false,[...errs].join("<br>"));
        F.innerHTML=fbHTML(true,"¡Asiento correcto!"+(A.why?` ${A.why}`:"")); const b=$("[data-act=chk]",el); b.textContent="Siguiente asiento"; b.onclick=()=>{k++;draw();};
      };
      asi.querySelectorAll("select").forEach(s=>s.value="");
    };
    draw();
  },
  /* verdadero/falso: {type:"tf", items:[[afirmación, true|false, porqué]]} */
  tf(ex, el, done){ EX.pick({options:["Verdadero","Falso"], items:ex.items.map(i=>[i[0], typeof i[1]==="string"?i[1]:(i[1]?"Verdadero":"Falso"), i[2]]), shuffle:ex.shuffle}, el, done); },
  /* ordenar pasos: {type:"order", items:[en orden correcto]} */
  order(ex, el, done){
    let cur = shuffle(ex.items.map((t,i)=>({t,i}))); if(cur.every((x,j)=>x.i===j)) cur.reverse();
    const draw = ()=>{
      el.innerHTML = `<ol class="ord">${cur.map((x,j)=>`<li><span>${x.t}</span><span class="row" style="gap:4px;flex-wrap:nowrap"><button type="button" class="mv" data-j="${j}" data-d="-1" aria-label="Subir" ${j===0?"disabled":""}>↑</button><button type="button" class="mv" data-j="${j}" data-d="1" aria-label="Bajar" ${j===cur.length-1?"disabled":""}>↓</button></span></li>`).join("")}</ol>
      <div class="row"><button class="btn" data-act="chk">Corregir orden</button></div><div data-fb></div>`;
      el.querySelectorAll(".mv").forEach(b=>b.onclick=()=>{ const j=+b.dataset.j, d=+b.dataset.d; [cur[j],cur[j+d]]=[cur[j+d],cur[j]]; draw(); });
      $("[data-act=chk]",el).onclick=()=>{ const n=cur.filter((x,j)=>x.i===j).length; const all=n===cur.length;
        el.querySelectorAll(".ord li").forEach((li,j)=>li.classList.toggle(cur[j].i===j?"ok":"bad",true));
        $("[data-fb]",el).innerHTML=fbHTML(all, all?"¡Orden correcto!":`${n} de ${cur.length} pasos están en su lugar.`); if(all) done(); };
    };
    draw();
  },
  custom(ex, el, done){ ex.render(el, done); },
};

/* ---------- navegación ---------- */
function renderSide(){
  const cur = location.hash.slice(1) || "inicio";
  const mcur = (cur.match(/^m(\d+)/)||[])[1]|0;
  let h = `<a href="#inicio" class="${cur==="inicio"?"on":""}"><span class="dot">≡</span>Plan de estudios</a><a href="#fuentes" class="${cur==="fuentes"?"on":""}"><span class="dot">§</span>Fuentes y normas</a><a href="#glosario" class="${cur==="glosario"?"on":""}"><span class="dot">A</span>Glosario</a>`;
  CAMPUS.cycles.forEach(c=>{
    h += `<h4>${esc(c.t)}</h4>`;
    CAMPUS.modules.filter(m=>m.c===c.id).forEach(m=>{
      const p = modProgress(m.n); const open = m.n===mcur;
      h += `<a href="#m${m.n}" class="mlink ${cur===`m${m.n}`?"on":""} ${passed(m.n)?"done":""} ${has(m.n)?"":"soon"}"><span class="dot">${passed(m.n)?"✓":m.n}</span><span>${esc(m.t)}${has(m.n)&&p.d&&!passed(m.n)?` <small class="num">${p.p}%</small>`:""}</span></a>`;
      if(open && has(m.n)){
        h += `<div class="sub">${m.l.map((t,i)=>`<a href="#${lid(m.n,i)}" class="${cur===lid(m.n,i)?"on":""} ${state.done[lid(m.n,i)]?"done":""}"><span class="dot">${state.done[lid(m.n,i)]?"✓":""}</span>${m.n}.${i+1} ${esc(t)}</a>`).join("")}${hasTP(m.n)?`<a href="#m${m.n}-tp" class="${cur===`m${m.n}-tp`?"on":""} ${state.done[`m${m.n}-tp`]?"done":""}"><span class="dot">${state.done[`m${m.n}-tp`]?"✓":"TP"}</span>Trabajo práctico</a>`:""}<a href="#m${m.n}-eval" class="${cur===`m${m.n}-eval`?"on":""} ${passed(m.n)?"done":""}"><span class="dot">${passed(m.n)?"✓":"★"}</span>Evaluación</a></div>`;
      }
    });
  });
  $("#side").innerHTML = h;
}
function updateProg(){
  let d=0, t=0; CAMPUS.modules.forEach(m=>{ const p=modProgress(m.n); d+=p.d; t+=p.tot; });
  const p = Math.round(d/t*100); $("#progBar").style.width = Math.max(p, d?1:0)+"%"; $("#progTxt").textContent = p+"%";
}

/* ---------- vistas ---------- */
function HOME(v){
  const avail = CAMPUS.modules.filter(m=>has(m.n));
  const nLess = CAMPUS.modules.reduce((a,m)=>a+m.l.length,0);
  const next = avail.find(m=>!passed(m.n));
  const nextHref = next ? `#${(next.l.map((_,i)=>lid(next.n,i)).find(id=>!state.done[id])) || `m${next.n}-eval`}` : "#m28";
  const started = Object.keys(state.done).length>0;
  v.innerHTML = `
  <div class="eyebrow">Bienvenido, Santiago</div>
  <h1>Tu formación como Contador Público</h1>
  <p class="lead">Un plan de ${CAMPUS.modules.length} módulos y ${nLess} lecciones organizado como la carrera de Contador Público en Argentina, del Ciclo Básico al Seminario Integrador. Cada módulo indica a qué materia de la facultad equivale.</p>
  <div class="stats">
    <div><b class="num">${CAMPUS.modules.length}</b><span>módulos</span></div>
    <div><b class="num">${nLess}</b><span>lecciones</span></div>
    <div><b class="num">${CAMPUS.modules.filter(m=>passed(m.n)).length}</b><span>aprobados</span></div>
    <div><b class="num">${avail.length}</b><span>disponibles</span></div>
  </div>
  <div class="note"><b>Cómo estudiar.</b> Cada módulo tiene un programa como el de la facultad, con objetivos, bibliografía y normativa. Leé cada lección y hacé sus ejercicios hasta que te den bien: la lección se marca sola. Después resolvé el trabajo práctico integrador y rendí la evaluación, que toma 15 preguntas al azar de un banco y se aprueba con 70%. Seguí el orden de los ciclos, porque cada uno se apoya en el anterior. Tu progreso se guarda en este navegador.</div>
  ${next?`<div class="row"><a class="btn" href="${nextHref}" style="text-decoration:none">${started?"Continuar donde dejaste":"Empezar por el Módulo 1"}</a><span class="src">Próximo: Módulo ${next.n}, ${esc(next.t)}</span></div>`:""}
  ${CAMPUS.cycles.map(c=>`<section class="cycle"><h2>${esc(c.t)}</h2><p class="src" style="max-width:68ch">${esc(c.d)}</p>
    <div class="plan">${CAMPUS.modules.filter(m=>m.c===c.id).map(m=>{const p=modProgress(m.n);return `
      <a class="mod ${has(m.n)?"open":""}" href="#m${m.n}">
        <div class="row" style="justify-content:space-between"><span class="n">MÓDULO ${m.n}</span><span class="pill ${passed(m.n)?"ok":has(m.n)?"av":""}">${passed(m.n)?"Aprobado":has(m.n)?(p.d?p.p+"%":"Disponible"):"En preparación"}</span></div>
        <h3>${esc(m.t)}</h3><p class="src">${esc(m.d)}</p><span class="eq-tag">Equivale a: ${esc(m.eq)}</span>
        ${has(m.n)&&p.d?`<div class="bar mini"><i style="width:${p.p}%"></i></div>`:""}
      </a>`;}).join("")}</div></section>`).join("")}
  <p class="src">Contenidos elaborados a partir de la legislación argentina vigente (Código Civil y Comercial, Ley General de Sociedades, leyes tributarias y laborales), las Resoluciones Técnicas de la FACPCE y la bibliografía usada en las universidades nacionales. Mirá la sección <a href="#fuentes">Fuentes y normas</a>.</p>`;
}
function MODULE(v, n){
  const m = MOD(n); const p = modProgress(n);
  v.innerHTML = `<div class="eyebrow">${esc(CAMPUS.cycles.find(c=>c.id===m.c).t)} · Módulo ${n}</div><h1>${esc(m.t)}</h1>
  <p class="lead">${esc(m.d)}</p><span class="eq-tag">Equivale a la materia: ${esc(m.eq)}</span>
  ${has(n)?`<div class="row"><div class="bar" style="width:200px"><i style="width:${p.p}%"></i></div><span class="src num">${p.d} de ${p.tot} actividades</span></div>`:`<div class="note"><b>En preparación.</b> Este módulo todavía no tiene contenido cargado. Estas son las lecciones que va a tener.</div>`}
  <ol class="lessons">${m.l.map((t,i)=>`<li>${has(n)?`<a href="#${lid(n,i)}">${esc(t)}</a>`:esc(t)} ${state.done[lid(n,i)]?`<span class="pill ok">Hecha</span>`:""}</li>`).join("")}
  ${hasTP(n)?`<li class="ev"><a href="#m${n}-tp">Trabajo práctico integrador</a> ${state.done[`m${n}-tp`]?`<span class="pill ok">Hecho</span>`:""}</li>`:""}
  <li class="ev">${has(n)?`<a href="#m${n}-eval">Evaluación del módulo</a>`:"Evaluación del módulo"} ${state.evals[n]!=null?`<span class="pill ${passed(n)?"ok":""}">Mejor nota ${state.evals[n]}%</span>`:""}</li></ol>
  ${has(n)?`<div class="row"><a class="btn" style="text-decoration:none" href="#${m.l.map((_,i)=>lid(n,i)).find(id=>!state.done[id]) || `m${n}-eval`}">${p.d?"Continuar":"Empezar el módulo"}</a></div>`:""}
  ${PROG(n)}
  ${pagerMod(n)}`;
}
function PROG(n){
  const P = CAMPUS.prog && CAMPUS.prog[n]; if(!P) return "";
  return `<section class="prog-sec"><h2>Programa de la materia</h2>
  <h3>Objetivos</h3><p>Al terminar este módulo vas a poder:</p><ul>${P.obj.map(o=>`<li>${esc(o)}</li>`).join("")}</ul>
  <h3>Contenidos mínimos</h3><p>${esc(P.cont)}</p>
  <h3>Bibliografía de referencia</h3><ul class="bib">${P.bib.map(b=>`<li>${esc(b)}</li>`).join("")}</ul>
  ${P.norm.length?`<h3>Normativa y fuentes oficiales</h3><ul class="srcl">${srcLinks(P.norm)}</ul>`:""}
  <p class="src">Las normas cambian. Antes de aplicar un importe, una alícuota o un plazo en un caso real, verificá el texto vigente en la fuente oficial.</p></section>`;
}
function pagerMod(n){
  const prev = MOD(n-1), next = MOD(n+1);
  return `<div class="pager">${prev?`<a href="#m${prev.n}">← Módulo ${prev.n}</a>`:`<a href="#inicio">← Plan de estudios</a>`}${next?`<a href="#m${next.n}">Módulo ${next.n} →</a>`:"<span></span>"}</div>`;
}
function lessonSrc(n,L){
  const P = CAMPUS.prog && CAMPUS.prog[n]; const keys = L.src || (P?P.norm:[]);
  const extra = (L.cite||[]).map(c=>`<li>${c}</li>`).join("");
  if(!keys.length && !extra && !P) return "";
  return `<details class="srcbox"><summary>Fuentes y bibliografía</summary><ul class="srcl">${srcLinks(keys)}${extra}${P?P.bib.map(b=>`<li>${esc(b)}</li>`).join(""):""}</ul></details>`;
}
function LESSON(v, n, i){
  const m = MOD(n); const L = CAMPUS.content[n].lessons[i]; const id = lid(n,i);
  if(!L){ v.innerHTML = `<h1>${esc(m.l[i])}</h1><p class="lead">Lección en preparación.</p>`+pagerMod(n); return; }
  const exs = L.ex || [];
  v.innerHTML = `<div class="eyebrow">Módulo ${n} · Lección ${n}.${i+1}</div><h1>${esc(m.l[i])}</h1>${L.lead?`<p class="lead">${L.lead}</p>`:""}
  <div class="prose">${L.html}</div>
  ${exs.map((e,k)=>`<div class="box"><span class="tag">${e.type==="custom"?"Actividad":"Ejercicio"}${exs.length>1?` ${k+1}`:""}${e.title?" · "+e.title:""}</span>${e.prompt?`<p>${e.prompt}</p>`:""}<div class="exbody" id="ex-${id}-${k}"></div></div>`).join("")}
  ${!exs.length?`<div class="row"><button class="btn" id="readBtn">${state.done[id]?"Lección leída ✓":"Marcar como leída"}</button></div>`:""}
  <div id="lessonDone"></div>
  ${lessonSrc(n,L)}
  <div class="pager">${i>0?`<a href="#${lid(n,i-1)}">← ${esc(m.l[i-1])}</a>`:`<a href="#m${n}">← Módulo ${n}</a>`}${i<m.l.length-1?`<a href="#${lid(n,i+1)}">${esc(m.l[i+1])} →</a>`:(hasTP(n)?`<a href="#m${n}-tp">Trabajo práctico →</a>`:`<a href="#m${n}-eval">Evaluación del módulo →</a>`)}</div>`;
  const left = new Set(exs.map((_,k)=>k));
  const finish = ()=>{ if(!state.done[id]){ complete(id); $("#lessonDone").innerHTML = fbHTML(true,`Lección ${n}.${i+1} completada.`); } };
  exs.forEach((e,k)=>EX[e.type](e, $(`#ex-${id}-${k}`), ()=>{ left.delete(k); if(!left.size) finish(); }));
  if(!exs.length) $("#readBtn").onclick = ()=>{ finish(); $("#readBtn").textContent="Lección leída ✓"; };
  if(state.done[id]) $("#lessonDone").innerHTML = `<p class="src">Ya completaste esta lección. Podés repetir los ejercicios para practicar.</p>`;
}
const EVAL_N = 15;
function EVAL(v, n){
  const m = MOD(n); const Q = CAMPUS.content[n].eval.concat((CAMPUS.xeval&&CAMPUS.xeval[n])||[]); const K = Math.min(EVAL_N, Q.length);
  const order = shuffle(Q.map((_,i)=>i)).slice(0,K); const name=nid("ev");
  const need = Math.ceil(K*0.7);
  v.innerHTML = `<div class="eyebrow">Módulo ${n} · Evaluación</div><h1>Evaluación: ${esc(m.t)}</h1>
  <p class="lead">${K} preguntas elegidas al azar de un banco de ${Q.length}. Aprobás con 70% (${need} respuestas correctas). Cada vez que la rendís te tocan preguntas distintas; se guarda tu mejor nota.</p>
  ${state.evals[n]!=null?`<div class="note"><b>Tu mejor nota hasta ahora:</b> ${state.evals[n]}%</div>`:""}
  <form id="qf" class="page" style="gap:18px">${order.map((qi,k)=>`<div class="box q" data-q="${qi}"><span class="tag">Pregunta ${k+1}</span><b>${Q[qi].q}</b><div class="ch">${Q[qi].o.map((o,j)=>`<label><input type="radio" name="${name}-${qi}" value="${j}"> <span>${o}</span></label>`).join("")}</div><div class="ex" hidden></div></div>`).join("")}
  <div class="row"><button class="btn" type="submit">Entregar evaluación</button></div></form><div id="res"></div>${pagerMod(n)}`;
  $("#qf").addEventListener("submit",e=>{
    e.preventDefault(); let ok=0;
    document.querySelectorAll(".q[data-q]").forEach(b=>{
      const q = Q[+b.dataset.q]; const sel = b.querySelector("input:checked");
      b.querySelectorAll("label").forEach((l,j)=>{ l.classList.remove("ok","bad"); if(j===q.a) l.classList.add("ok"); else if(sel && +sel.value===j) l.classList.add("bad"); });
      if(sel && +sel.value===q.a) ok++;
      const x = b.querySelector(".ex"); x.hidden=false; x.innerHTML = q.ex||"";
    });
    const p = Math.round(ok/K*100);
    state.evals[n] = Math.max(state.evals[n]||0, p); save();
    const nx = MOD(n+1);
    $("#res").innerHTML = `<div class="box" style="align-items:center;text-align:center"><span class="tag">Resultado</span><div class="score num">${p}%</div><p><b>${ok} de ${K}</b> correctas. ${p>=70?`¡Aprobaste el Módulo ${n}!${nx?` Seguí con <a href="#m${nx.n}">${esc(nx.t)}</a>.`:" Terminaste el plan completo."}`:"Todavía no alcanza. Leé la explicación de cada pregunta, repasá las lecciones y volvé a intentar."}</p><button class="btn ghost" id="retry" type="button">Volver a rendir</button></div>`;
    $("#retry").onclick = ()=>route();
    $("#res").scrollIntoView({behavior:"smooth"});
  });
}
function TP(v, n){
  const m = MOD(n); const T = CAMPUS.tp[n]; const id = `m${n}-tp`; const exs = T.ex||[];
  v.innerHTML = `<div class="eyebrow">Módulo ${n} · Trabajo práctico</div><h1>${esc(T.t||"Trabajo práctico integrador")}</h1>${T.lead?`<p class="lead">${T.lead}</p>`:""}
  <div class="prose">${T.html||""}</div>
  ${exs.map((e,k)=>`<div class="box"><span class="tag">Consigna ${k+1}${e.title?" · "+e.title:""}</span>${e.prompt?`<p>${e.prompt}</p>`:""}<div class="exbody" id="ex-${id}-${k}"></div></div>`).join("")}
  <div id="lessonDone"></div>
  ${lessonSrc(n,T)}
  <div class="pager"><a href="#${lid(n,m.l.length-1)}">← ${esc(m.l[m.l.length-1])}</a><a href="#m${n}-eval">Evaluación del módulo →</a></div>`;
  const left = new Set(exs.map((_,k)=>k));
  exs.forEach((e,k)=>EX[e.type](e, $(`#ex-${id}-${k}`), ()=>{ left.delete(k); if(!left.size && !state.done[id]){ complete(id); $("#lessonDone").innerHTML = fbHTML(true,"Trabajo práctico completado."); } }));
  if(state.done[id]) $("#lessonDone").innerHTML = `<p class="src">Ya completaste este trabajo práctico. Podés repetirlo para practicar.</p>`;
}
function GLOSS(v){
  const G = (CAMPUS.glosario||[]).slice().sort((a,b)=>a[0].localeCompare(b[0],"es"));
  v.innerHTML = `<div class="eyebrow">Biblioteca</div><h1>Glosario</h1><p class="lead">${G.length} términos de la carrera, con el módulo donde se estudian.</p>
  <input class="inp" id="gq" type="search" placeholder="Buscar un término…" autocomplete="off" style="width:100%;max-width:420px">
  <dl class="gloss" id="gl"></dl>`;
  const draw = q=>{ const f = q.trim().toLowerCase(); $("#gl").innerHTML = G.filter(g=>!f||g[0].toLowerCase().includes(f)||g[1].toLowerCase().includes(f)).map(g=>`<dt>${esc(g[0])}${g[2]?` <a class="src" href="#m${g[2]}">Módulo ${g[2]}</a>`:""}</dt><dd>${g[1]}</dd>`).join("") || `<p class="src">No hay términos que coincidan.</p>`; };
  $("#gq").oninput = e=>draw(e.target.value); draw("");
}
function SOURCES(v){
  v.innerHTML = `<div class="eyebrow">Biblioteca</div><h1>Fuentes y normas</h1>
  <p class="lead">Las normas cambian. Antes de aplicar un importe, una alícuota o un plazo en la vida real, verificá la versión vigente en la fuente oficial.</p>
  <div class="tw"><table><thead><tr><th>Fuente</th><th>Qué vas a encontrar</th></tr></thead><tbody>
  ${["arca","facpce","rt54","cpce","bcra","indec","cnv","uif","ca","ifrs","leysimple"].map(k=>`<tr><td><a href="${CAMPUS.L[k][1]}" target="_blank" rel="noopener">${esc(CAMPUS.L[k][0])}</a></td><td>${SRCDESC[k]||""}</td></tr>`).join("")}
  </tbody></table></div>
  <h2>Leyes y decretos citados</h2><p class="src">Enlaces al texto actualizado en el sitio oficial de normativa del Estado nacional (InfoLEG).</p>
  <ul class="srcl">${srcLinks(["cn","ccyc","lgs","lpt","inoc","inoc2","rpt","iva","gan","gandr","bp","mono","lct","modlab","d408","bases","sipa","lrt","lcq","uifl","laf","prof"])}</ul>
  <h2>Bibliografía de referencia</h2><p class="src">Libros de uso habitual en las facultades de ciencias económicas. Cada módulo indica los suyos en su programa.</p>
  <div class="prose"><ul>${[...new Set(Object.values(CAMPUS.prog).flatMap(p=>p.bib))].filter(b=>!b.startsWith("Toda")).sort((a,b)=>a.localeCompare(b,"es")).map(b=>`<li>${esc(b)}</li>`).join("")}</ul></div>`;
}
const SRCDESC = {arca:"Impuestos, monotributo, factura electrónica, aportes y contribuciones, valores vigentes.",facpce:"Resoluciones Técnicas, interpretaciones y normas de auditoría vigentes.",rt54:"Texto ordenado de la Norma Unificada Argentina de Contabilidad y material explicativo.",cpce:"Matrícula, Código de Ética, normativa profesional y modelos de informes.",bcra:"Tipo de cambio de referencia, tasas, UVA y política monetaria.",indec:"IPC, IPIM (índices para el ajuste por inflación), PBI y empleo.",cnv:"Mercado de capitales y normas para emisoras.",uif:"Prevención del lavado de activos para profesionales en ciencias económicas.",ca:"Normas y resoluciones del Convenio Multilateral de Ingresos Brutos.",ifrs:"Normas Internacionales de Información Financiera (NIIF).",leysimple:"Explicaciones oficiales de leyes en lenguaje claro."};


/* ---------- router ---------- */
function route(){
  const id = location.hash.slice(1) || "inicio"; const v = $("#view"); let mm;
  if(id==="fuentes") SOURCES(v);
  else if(id==="glosario") GLOSS(v);
  else if((mm=id.match(/^m(\d+)-tp$/)) && hasTP(+mm[1])) TP(v,+mm[1]);
  else if((mm=id.match(/^m(\d+)-eval$/)) && has(+mm[1])) EVAL(v,+mm[1]);
  else if((mm=id.match(/^m(\d+)-(\d+)$/)) && has(+mm[1]) && MOD(+mm[1]).l[+mm[2]-1]) LESSON(v,+mm[1],+mm[2]-1);
  else if((mm=id.match(/^m(\d+)$/)) && MOD(+mm[1])) MODULE(v,+mm[1]);
  else HOME(v);
  renderSide(); updateProg(); $("#side").classList.remove("open"); window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);
$("#menuBtn").onclick=()=>$("#side").classList.toggle("open");
route();
