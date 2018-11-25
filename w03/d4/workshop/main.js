//This comes from data.js
var gifs = window.data.data;

function ranDom(){
  let select = Math.floor(Math.random()*gifs.length);
  console.log(select);
  let disply = document.getElementById('fox');
  disply.src = gifs[select].images.original.url;
}
let button = document.querySelector('button');
button.addEventListener('click', ranDom);
