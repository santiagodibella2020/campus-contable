import glob,os,re
d=os.path.dirname(os.path.abspath(__file__))
css=open(f"{d}/style.css").read()
mods=sorted(glob.glob(f"{d}/mod/m*.js"))
extra=[f"{d}/refs.js"]+sorted(glob.glob(f"{d}/tp/*.js"))+sorted(glob.glob(f"{d}/xeval/*.js"))+sorted(glob.glob(f"{d}/deep/*.js"))+[f for f in [f"{d}/glosario.js"] if os.path.exists(f)]
js=open(f"{d}/plan.js").read()+"\n"+"\n".join(open(m).read() for m in mods+extra)+"\n"+open(f"{d}/engine.js").read()
html=f'''<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#14201c">
<title>Campus Contable</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>{css}</style>
<header class="top">
  <button class="menu-btn" id="menuBtn" aria-label="Abrir plan de estudios">Plan ☰</button>
  <a class="brand" href="#inicio">Campus Contable <small>Contador Público · AR</small></a>
  <div class="prog"><span class="t">Tu progreso</span><div class="bar"><i id="progBar"></i></div><span class="num" id="progTxt">0%</span></div>
</header>
<div class="wrap">
  <nav class="side" id="side"></nav>
  <main><div class="page" id="view"></div></main>
</div>
<script>
{js}
</script>
'''
out=os.path.join(os.path.dirname(d),"index.html")
open(out,"w").write("<!doctype html>\n<html lang=\"es\">\n"+html)
open("/tmp/campus-check.js","w").write(js)
print(out,len(html)//1024,"KB",len(mods),"modules")
