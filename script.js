
const r=document.documentElement,nav=document.getElementById('nav'),up=document.getElementById('up');
r.dataset.theme=localStorage.getItem('th')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
document.getElementById('tt').onclick=()=>{const t=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=t;localStorage.setItem('th',t)};
const sc=()=>{nav.classList.toggle('sc',scrollY>40);up.classList.toggle('show',scrollY>600)};sc();addEventListener('scroll',sc,{passive:true});
up.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.getElementById('y').textContent=new Date().getFullYear();
document.querySelectorAll('#flt button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('#flt button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
 document.querySelectorAll('.pub').forEach(p=>p.style.display=(b.dataset.f==='all'||p.dataset.cat===b.dataset.f)?'':'none')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-count]').forEach(el=>{const n=+el.dataset.count;let c=0;const t=setInterval(()=>{c+=Math.max(1,Math.ceil(n/30));if(c>=n){c=n;clearInterval(t)}el.textContent=c},40)});
