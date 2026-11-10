/* Playterra worlds: shared code for /world/ pages. Needs data.js, lore.js and lz.js loaded first. */
(function(){
var D=window.PT_DATA,L=window.PT_LORE;
var WORLDS=['ts','ro','if'];
function qs(k){var m=new RegExp('[?&]'+k+'=([^&]+)').exec(location.search);return m?decodeURIComponent(m[1]):null;}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}}
var w=qs('w');if(WORLDS.indexOf(w)<0)w=ls('pt_world');if(WORLDS.indexOf(w)<0)w='ts';ls('pt_world',w);
document.body.classList.add('w-'+w);
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var RAR=['Common','Uncommon','Rare','Epic','Legendary'];
var CLS={
 ts:{inf:'Infantry',recon:'Recon',armor:'Armour',arty:'Artillery',cyber:'Cyber',support:'Support',airdef:'Air defence',air:'Air',sam:'Air defence'},
 ro:{inf:'Infantry',recon:'Scouts',armor:'Heavy cavalry',arty:'Siege',cyber:'Intrigue',support:'Support',airdef:'Skirmishers',air:'Ranged',sam:'Shield line'},
 if:{inf:'Infantry',recon:'Recon',armor:'Armour',arty:'Artillery',cyber:'Covert',support:'Support',airdef:'Air defence',air:'Air',sam:'Flak'}};
var SAVE={ts:'earth2026',ro:'romaterra',if:'ironfront'};
var PRIZE={ts:'the Nexus',ro:'Roma',if:'the Capital Sectors'};
var PAGES=[['index.html','Worlds'],['cards.html','Cards'],['codex.html','Codex'],['chronicle.html','Chronicle'],['heroes.html','Heroes'],['history.html','History']];
function link(p,ww){return p+'?w='+(ww||w);}

/* every collectible of a world, in card order: 19 units then 6 commanders */
function deck(ww){ww=ww||w;var d=D[ww],l=L[ww],out=[];
 d.units.forEach(function(u){out.push({id:'u:'+u.k,k:u.k,kind:'unit',n:u.n,tier:u.tier,cls:u.cls,phase:u.phase,atk:u.atk,def:u.def,bt:u.bt,fast:u.fast,req:u.req,art:u.art?'img/'+u.art:null,photo:u.art&&/\.jpg$/.test(u.art),lore:l.units[u.k]||''});});
 d.cmd.forEach(function(c){var lc=l.cmd[c.k]||{};out.push({id:'c:'+c.k,k:c.k,kind:'cmd',n:c.n,role:c.role,d:c.d,alt:c.alt,art:'img/'+c.art,photo:/\.jpg$/.test(c.art),lore:lc.bio||''});});
 out.forEach(function(x,i){x.no=i+1;});return out;}

/* fallback picture for the few units without art */
function svgArt(x){var col='#c9d1e3';
 if(x.k==='mobile_shield')return '<img class="ph" src="img/fog.jpg" alt="">';
 if(x.cls==='air'||x.cls==='airdef')return '<svg viewBox="0 0 200 120" width="80%" aria-hidden="true"><g fill="'+col+'" opacity=".85"><path d="M20 62 L120 56 L150 40 L162 40 L150 58 L186 60 L186 66 L150 68 L162 86 L150 86 L120 70 L20 66 Z"/><path d="M60 62 L40 30 L52 30 L84 60 Z"/><path d="M60 66 L40 98 L52 98 L84 68 Z"/><circle cx="188" cy="63" r="4"/></g></svg>';
 return '<svg viewBox="0 0 100 100" width="55%" aria-hidden="true"><circle cx="50" cy="50" r="36" fill="none" stroke="'+col+'" stroke-width="4"/><path d="M50 22 L56 44 L78 44 L60 57 L67 78 L50 65 L33 78 L40 57 L22 44 L44 44Z" fill="'+col+'"/></svg>';}

function texture(ww){return 'img/'+(ww||w)+'-tex.jpg';}
function cardHTML(x,o){o=o||{};var ww=o.world||w,cl=CLS[ww];
 var cls='card '+(x.kind==='cmd'?'cm':'t'+x.tier)+(o.lock?' lock':'')+(o.big?' big':'');
 var art=x.art?'<img src="'+esc(x.art)+'" alt="'+esc(x.n)+'" loading="lazy"'+(x.photo?' class="ph"':'')+'>':svgArt(x);
 var cn=cl[x.cls]||x.cls,ty=x.kind==='cmd'?'Commander · '+esc(x.role):(x.phase===cn?esc(cn):esc(x.phase)+' · '+esc(cn));
 var st=x.kind==='cmd'?'<span><b>'+esc(x.d.split(' ')[0])+'</b>'+esc(x.d.split(' ').slice(1).join(' '))+'</span>'
   :'<span><b>'+x.atk+'</b>attack</span><span><b>'+x.def+'</b>defence</span><span><b>'+x.bt+'</b>turns</span>';
 var rar=x.kind==='cmd'?'Commander':RAR[x.tier];
 return '<div class="'+cls+'" data-id="'+esc(x.id)+'" tabindex="0" role="button" aria-label="'+esc(x.n)+'"><div class="in" style="background-image:url('+texture(ww)+')">'+
  '<div class="nm"><span>'+esc(x.n)+'</span><small>'+rar+'</small></div>'+
  '<div class="art">'+art+'</div><div class="ty">'+ty+'</div><div class="st">'+st+'</div>'+
  '<div class="fl">'+esc(x.lore)+'</div><div class="ft"><span>'+esc(L[ww].name)+'</span><span>'+x.no+' / 25</span></div></div></div>';}

/* ---- reading your own game save (same website, so the browser shares it) ---- */
function readSave(ww){try{var s=ls(SAVE[ww||w]);if(!s)return null;var j=s.slice(0,3)==='LZ1'?PT_LZ.d(s.slice(3)):s;return JSON.parse(j);}catch(e){return null;}}
function collected(ww){ww=ww||w;var key='pt_cards_'+ww,have={};
 try{(JSON.parse(ls(key))||[]).forEach(function(id){have[id]=1;});}catch(e){}
 var G=readSave(ww);
 if(G&&G.countries&&G.you!=null){var me=G.countries[G.you];if(me){
  var add=function(k){if(k)have['u:'+k]=1;};
  for(var k in (me.units||{}))if(me.units[k]>0)add(k);
  (me.fleets||[]).forEach(function(f){for(var k2 in (f.units||{}))if(f.units[k2]>0)add(k2);});
  (me.queue||[]).forEach(function(q){if(q&&q.k&&D[ww].units.some(function(u){return u.k===q.k;}))add(q.k);});
  (me.commanders||[]).forEach(function(c){var ck=typeof c==='string'?c:(c&&c.k);if(ck)have['c:'+ck]=1;});}}
 var arr=Object.keys(have);ls(key,JSON.stringify(arr));return have;}
function hall(ww){try{return JSON.parse(ls(SAVE[ww||w]+'_hall'))||[];}catch(e){return [];}}
function legacy(ww){try{return JSON.parse(ls(SAVE[ww||w]+'_legacy'))||[];}catch(e){return [];}}

function topbar(active){var l=L[w];
 var h='<header class="tb"><div class="wrap"><a class="logo" href="../index.html"><img src="../icons/terrastate-64.png" alt="" width="28" height="28"><span>PLAY<b>TERRA</b></span></a><nav class="tbl" aria-label="Worlds">';
 PAGES.forEach(function(p){h+='<a href="'+link(p[0])+'"'+(p[0]===active?' class="on" aria-current="page"':'')+'>'+p[1]+'</a>';});
 h+='</nav><a class="btn sm" href="../'+l.game+'">Play '+esc(l.name)+' ▶</a></div></header>';return h;}
function switcher(page){var h='<div class="ws" role="tablist" aria-label="Choose a world">';
 WORLDS.forEach(function(ww){h+='<a href="'+page+'?w='+ww+'"'+(ww===w?' class="on" aria-selected="true"':'')+' role="tab"><b>'+esc(L[ww].name)+'</b><span>'+esc(L[ww].era)+'</span></a>';});return h+'</div>';}
function footer(){return '<footer><div class="wrap"><a href="../index.html">playterrastate.nl</a> · <a href="'+link('cards.html')+'">Cards</a> · <a href="'+link('codex.html')+'">Codex</a> · <a href="'+link('chronicle.html')+'">Chronicle</a> · <a href="'+link('heroes.html')+'">Heroes</a> · <a href="'+link('history.html')+'">History</a> · <a href="https://discord.gg/aYPtmqCHvU" target="_blank" rel="noopener">Discord</a><br>All nations, people and events in these worlds are fiction. Unit names and numbers come from the games. © 2026 Wim Kamphorst</div></footer>';}

function modal(inner){var bg=document.createElement('div');bg.className='mb';bg.innerHTML='<div class="md" role="dialog" aria-modal="true">'+inner+'<button class="btn ghost sm x" data-x aria-label="Close">✕</button></div>';
 document.body.appendChild(bg);var close=function(){bg.remove();document.removeEventListener('keydown',kd);};var kd=function(e){if(e.key==='Escape')close();};
 document.addEventListener('keydown',kd);bg.addEventListener('click',function(e){if(e.target===bg||e.target.hasAttribute('data-x'))close();});return bg;}
function fmt(n){n=+n||0;if(n>=1e9)return (n/1e9).toFixed(1)+' bn';if(n>=1e6)return (n/1e6).toFixed(1)+' m';return Math.round(n).toLocaleString('en-GB');}


/* ---- share as image (drawn on a canvas, no outside services) ---- */
function loadImg(src){return new Promise(function(res){var i=new Image();i.onload=function(){res(i);};i.onerror=function(){res(null);};i.src=src;});}
function wrapText(c,t,x,y,mw,lh,max){var words=String(t||'').split(' '),line='',n=0;for(var i=0;i<words.length;i++){var test=line?line+' '+words[i]:words[i];if(c.measureText(test).width>mw&&line){if(n===max-1){while(c.measureText(line+'…').width>mw&&line.length)line=line.slice(0,-1);c.fillText(line+'…',x,y);return y+lh;}c.fillText(line,x,y);y+=lh;n++;line=words[i];}else line=test;}if(line)c.fillText(line,x,y);return y+lh;}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function deliver(cv,name){cv.toBlob(function(b){if(!b)return;var f=null;try{f=new File([b],name,{type:'image/png'});}catch(e){}
 if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:name}).catch(function(){});return;}
 var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},1500);},'image/png');}
var RCOL=['#9aa5bd','#4ade80','#60a5fa','#c084fc','#fbbf24'];
function shareCard(x,ww){ww=ww||w;var W=630,H=880,cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d'),col=x.kind==='cmd'?'#f5d27a':RCOL[x.tier],F='system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
 return Promise.all([loadImg(texture(ww)),x.art?loadImg(x.art):Promise.resolve(null)]).then(function(r){var tex=r[0],art=r[1];
  var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,col);g.addColorStop(.45,'#0b0f17');g.addColorStop(1,col);c.fillStyle=g;rr(c,0,0,W,H,36);c.fill();
  c.save();rr(c,18,18,W-36,H-36,24);c.clip();c.fillStyle='#0f1420';c.fillRect(0,0,W,H);
  if(tex){c.globalAlpha=.35;for(var tx=0;tx<W;tx+=180)for(var ty=0;ty<H;ty+=180)c.drawImage(tex,tx,ty,180,180);c.globalAlpha=1;}
  c.fillStyle='rgba(9,12,20,.62)';c.fillRect(0,0,W,H);
  c.fillStyle='#fff';c.font='800 34px '+F;c.textBaseline='top';wrapText(c,x.n,40,40,W-210,38,2);
  c.fillStyle=col;c.font='700 18px '+F;c.textAlign='right';c.fillText((x.kind==='cmd'?'COMMANDER':RAR[x.tier].toUpperCase()),W-40,48);c.textAlign='left';
  var ax=40,ay=120,aw=W-80,ah=430;var rg=c.createRadialGradient(W/2,ay+ah*.45,20,W/2,ay+ah/2,ah*.7);rg.addColorStop(0,'#2a3248');rg.addColorStop(1,'#0c1019');c.fillStyle=rg;rr(c,ax,ay,aw,ah,16);c.fill();
  if(art){c.save();rr(c,ax,ay,aw,ah,16);c.clip();var s=Math.min(aw/art.width,ah/art.height);var dw=art.width*s,dh=art.height*s;c.drawImage(art,ax+(aw-dw)/2,ay+(ah-dh)*(x.photo?0.14:0.5),dw,dh);c.restore();}
  c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=2;rr(c,ax,ay,aw,ah,16);c.stroke();
  var cl=CLS[ww],cn=x.kind==='cmd'?'':(cl[x.cls]||x.cls);c.fillStyle='#c9d1e3';c.font='600 18px '+F;c.fillText((x.kind==='cmd'?'COMMANDER · '+x.role:(x.phase===cn?cn:x.phase+' · '+cn)).toUpperCase(),40,570);
  var stats=x.kind==='cmd'?[[x.d.split(' ')[0],x.d.split(' ').slice(1).join(' ')]]:[[x.atk,'attack'],[x.def,'defence'],[x.bt,'turns']];var bw=(W-80-(stats.length-1)*12)/stats.length;
  stats.forEach(function(st,i){var bx=40+i*(bw+12);c.fillStyle='rgba(0,0,0,.5)';rr(c,bx,604,bw,74,12);c.fill();c.strokeStyle='rgba(255,255,255,.14)';c.stroke();c.textAlign='center';c.fillStyle='#fff';c.font='800 32px '+F;c.fillText(String(st[0]),bx+bw/2,612);c.fillStyle='#b9c2d6';c.font='500 16px '+F;c.fillText(String(st[1]),bx+bw/2,650);c.textAlign='left';});
  c.fillStyle='#d6dceb';c.font='italic 20px Georgia,serif';wrapText(c,x.lore,40,700,W-80,27,3);
  c.fillStyle='#8d97ad';c.font='700 16px '+F;c.fillText((L[ww].name+' · '+x.no+' / 25').toUpperCase(),40,812);c.textAlign='right';c.fillText('PLAYTERRASTATE.NL/WORLD',W-40,812);c.textAlign='left';
  c.restore();deliver(cv,(L[ww].name+'-'+x.n).replace(/[^A-Za-z0-9]+/g,'-')+'.png');});}
function shareFront(el){var W=1200,H=1600,cv=document.createElement('canvas');cv.width=W;cv.height=H;var c=cv.getContext('2d'),S='Georgia,"Times New Roman",serif';
 var q=function(s){var n=el.querySelector(s);return n?n.textContent.trim():'';};var mt=[].map.call(el.querySelectorAll('.mt span'),function(n){return n.textContent;});var ph=el.querySelector('.ph');var paras=[].map.call(el.querySelectorAll('.cols p'),function(n){return n.textContent;});
 var bg=getComputedStyle(el).backgroundColor||'#efe7d6';
 return loadImg(ph?ph.getAttribute('src'):'').then(function(img){c.fillStyle=bg;c.fillRect(0,0,W,H);c.fillStyle='#1d1a15';c.textBaseline='top';c.textAlign='center';
  c.font='16px '+S;c.fillText(q('.mast div').toUpperCase(),W/2,50);c.font='900 92px '+S;c.fillText(q('.mast h1').toUpperCase(),W/2,78,W-100);
  c.fillRect(60,186,W-120,2);c.font='18px '+S;c.textAlign='left';c.fillText((mt[0]||'').toUpperCase(),60,198);c.textAlign='center';c.fillText((mt[1]||'').toUpperCase(),W/2,198);c.textAlign='right';c.fillText('PLAYTERRASTATE.NL',W-60,198);
  c.fillRect(60,228,W-120,2);c.fillRect(60,234,W-120,2);c.textAlign='center';c.font='900 60px '+S;var y=wrapText(c,q('.hl'),W/2,268,W-140,66,3);c.font='italic 28px '+S;y=wrapText(c,q('.sub'),W/2,y+6,W-160,34,2);
  y+=16;var ih=500;if(img){var s=Math.max((W-120)/img.width,ih/img.height),dw=img.width*s,dh=img.height*s;c.save();c.beginPath();c.rect(60,y,W-120,ih);c.clip();c.filter='grayscale(.85) sepia(.25) contrast(1.05)';c.drawImage(img,60+(W-120-dw)/2,y+(ih-dh)/2,dw,dh);c.filter='none';c.restore();c.strokeStyle='#1d1a15';c.lineWidth=2;c.strokeRect(60,y,W-120,ih);}
  y+=ih+28;c.textAlign='left';c.font='27px '+S;var yy=y;
  paras.slice(0,5).forEach(function(p){if(yy<H-170)yy=wrapText(c,p,60,yy,W-120,36,Math.max(1,Math.floor((H-150-yy)/36)))+12;});
  var Hn=Math.min(H,Math.max(1150,yy+110));c.fillStyle='#1d1a15';c.fillRect(60,Hn-90,W-120,2);c.textAlign='center';c.font='italic 22px '+S;c.fillText('Read the whole edition and play for free at playterrastate.nl/world',W/2,Hn-70);
  var cv2=document.createElement('canvas');cv2.width=W;cv2.height=Hn;cv2.getContext('2d').drawImage(cv,0,0);cv=cv2;
  deliver(cv,q('.mast h1').replace(/[^A-Za-z0-9]+/g,'-')+'.png');});}

window.PT={shareCard:shareCard,shareFront:shareFront,w:w,D:D,L:L,WORLDS:WORLDS,RAR:RAR,CLS:CLS,PRIZE:PRIZE,esc:esc,deck:deck,cardHTML:cardHTML,collected:collected,hall:hall,legacy:legacy,readSave:readSave,topbar:topbar,switcher:switcher,footer:footer,modal:modal,link:link,fmt:fmt,ls:ls};
})();
