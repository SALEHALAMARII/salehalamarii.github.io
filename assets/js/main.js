(function(){var d=document,r=d.documentElement,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function sg(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}return null}
var t=sg("theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");r.setAttribute("data-theme",t);
d.addEventListener("click",function(e){var b=e.target.closest(".tg");if(b){t=r.getAttribute("data-theme")==="dark"?"light":"dark";r.setAttribute("data-theme",t);sg("theme",t);b.setAttribute("aria-pressed",t==="dark")}
var n=e.target.closest(".burger");if(n){var m=d.getElementById("nav");var o=m.classList.toggle("open");n.setAttribute("aria-expanded",o)}
var a=e.target.closest("[data-evt]");if(a){var p={page_path:location.pathname,link_url:a.href||""};try{(window.dataLayer=window.dataLayer||[]).push(Object.assign({event:a.dataset.evt},p));if(window.gtag)gtag("event",a.dataset.evt,p)}catch(x){}}});
var tg=d.querySelector(".tg");if(tg)tg.setAttribute("aria-pressed",t==="dark");
if(!rm){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});d.querySelectorAll(".rv").forEach(function(x){io.observe(x)});
var cs=d.querySelectorAll("[data-count]");var co=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var el=x.target,end=+el.dataset.count,pre=el.dataset.pre||"",s=performance.now();(function f(n){var k=Math.min((n-s)/1100,1);el.textContent=pre+Math.round(end*(1-Math.pow(1-k,3))).toLocaleString("en")+(el.dataset.suf||"");if(k<1)requestAnimationFrame(f)})(s)})},{threshold:.5});cs.forEach(function(x){co.observe(x)});
var items=[].slice.call(d.querySelectorAll("#energy svg")),tick=false;function up(){var y=scrollY;items.forEach(function(s,i){var sp=+s.dataset.s;s.style.transform="translate3d(0,"+(-y*sp)+"px,0) rotate("+(y*sp*.08*(i%2?1:-1))+"deg)"});tick=false}
addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(up)}},{passive:true});up()}else{d.querySelectorAll(".rv").forEach(function(x){x.classList.add("in")})}})();
