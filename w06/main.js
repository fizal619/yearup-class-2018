bground = document.getElementById('everything');
init = document.createElement('div');
button = document.getElementById('surprise');
para = document.getElementById('par');
function open(){
  document.getElementById('surprise').style.display = "none";
  document.getElementById('body').style.display = "block";
  document.getElementById('par').style.display = "block";
}
function gone(){
  document.getElementById('body').stlye.display = "none";
  document.getElementById('par').style.display = "initial";
  document.getElementById('surprise').style.display = "initial";
}
document.getElementById('surprise').addEventListener('click', open);
document.getElementById('body').addEventListener('click',gone);
