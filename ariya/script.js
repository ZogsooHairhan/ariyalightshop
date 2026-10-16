let io;
const ICON = {chandelier:"", pendant:"", ceiling:"", kids:""};
const LABEL = {chandelier:"Болор Гэрэл", pendant:"Зүүлттэй", ceiling:"Таазны", kids:"Хүүхдийн"};

const grid = document.getElementById('grid');

function imgTag(p){
  return `<img src="${p.img}" alt="${p.name} ${p.sub}" loading="lazy" onerror="this.remove()">`;
}
function render(f="all"){
  const list = PRODUCTS.map((p,i)=>({...p,i})).filter(p=>f==="all"||p.cat===f);
  grid.innerHTML = list.map(p=>`
    <article class="card reveal" data-i="${p.i}">
      <div class="thumb"><span class="ph">${ICON[p.cat]}</span>${imgTag(p)}<span class="tag">${LABEL[p.cat]}</span></div>
      <div class="info">
        <h3>${p.name}</h3><em>${p.sub}</em>
        <p>${p.desc}</p>
        <div class="meta"><b>${p.price||"Үнэ: лавлах"}</b><span class="more">Дэлгэрэнгүй →</span></div>
      </div>
    </article>`).join("");
  observe();
}
render();

document.getElementById('filters').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  document.querySelectorAll('#filters button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); render(b.dataset.f);
});
document.querySelectorAll('.cat').forEach(c=>c.addEventListener('click',()=>{
  const f=c.dataset.go;
  document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('active',x.dataset.f===f));
  render(f); document.getElementById('products').scrollIntoView({behavior:'smooth'});
}));

/* Modal */
const modal=document.getElementById('modal');
grid.addEventListener('click',e=>{
  const c=e.target.closest('.card'); if(!c) return;
  const p=PRODUCTS[c.dataset.i];
  document.getElementById('mImg').innerHTML=imgTag(p);
  document.getElementById('mName').textContent=p.name;
  document.getElementById('mSub').textContent=p.sub;
  document.getElementById('mDesc').textContent=p.desc;
  const rows=[["Гэрлийн төрөл","LED"],["Материал","Металл, болор"],["Өнгө",p.color],["Хэмжээ",p.size],["Чадал",p.power],["Үнэ",p.price]];
  document.getElementById('mSpec').innerHTML=rows.map(r=>`<li>${r[0]}<span>${r[1]||"Лавлах"}</span></li>`).join("");
  modal.classList.add('open'); document.body.style.overflow='hidden';
});
function closeM(){modal.classList.remove('open');document.body.style.overflow=''}
document.getElementById('closeM').onclick=closeM;
modal.addEventListener('click',e=>{if(e.target===modal)closeM()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});

/* Header, menu - Toggle with burger button or clicking links/backdrop */
const hdr=document.getElementById('hdr'),menu=document.getElementById('menu');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>50));

const burger = document.getElementById('burger');
burger.onclick = () => menu.classList.toggle('open');

menu.addEventListener('click', e => {
  if (e.target.tagName === 'A' || e.target === menu) {
    menu.classList.remove('open');
  }
});

/* Reveal on scroll */
function observe(){
  io=io||new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal:not(.show)').forEach(el=>io.observe(el));
}
observe();
document.getElementById('yr').textContent=new Date().getFullYear();