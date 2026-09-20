let aura = 2840;
function voteWeird(btn){
  btn.textContent = 'WEIRD ✓';
  btn.style.color = '#b6ff32';
  document.getElementById('weirdScore').textContent = '73%';
}
function voteAura(dir){
  aura += dir;
  document.getElementById('auraScore').textContent = (aura >= 0 ? '+' : '') + aura.toLocaleString();
}
function meToo(btn){
  const span = btn.querySelector('span');
  let n = Number(span.textContent.replace(/,/g,''));
  if(!btn.dataset.clicked){ n++; btn.dataset.clicked='1'; btn.style.borderColor='#b6ff32'; }
  span.textContent=n.toLocaleString();
}
const input=document.getElementById('confessionInput');
input.addEventListener('input',()=>document.getElementById('count').textContent=input.value.length+'/180');
function submitConfession(e){
  e.preventDefault();
  const text=input.value.trim();
  if(!text)return;
  localStorage.setItem('auraWeirdConfession',text);
  e.target.hidden=true;
  document.getElementById('thanks').hidden=false;
}
