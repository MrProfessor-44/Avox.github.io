(function(){
  var f=document.getElementById('f'),ok=document.getElementById('ok'),err=document.getElementById('err');
  if(!f)return;
  f.addEventListener('submit',function(ev){
    ev.preventDefault();ok.style.display='none';err.textContent='';
    var n=document.getElementById('n').value.trim(),e=document.getElementById('e').value.trim(),p=document.getElementById('ph').value.trim();
    if(!n){err.textContent='Please enter your name.';return;}
    if(!/^\S+@\S+\.\S+$/.test(e)&&p.length<9){err.textContent='Please give a valid email or phone number so we can reach you.';return;}
    ok.textContent='Thank you, '+n+'. An Avox Group consultant will contact you within 1 working day. (Prototype: no data was sent.)';
    ok.style.display='block';f.reset();
  });
})();
