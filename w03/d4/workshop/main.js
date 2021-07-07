//This comes from data.js
var gifs = window.data.data;



let images = document.getElementById('randomImg');
let button = document.getElementById('press');



function submit(){
  let random = Math.floor(Math.random() * gifs.length);

  let ans = gifs[random].images.original.url;
 images.src = ans;
}

button.addEventListener('click', submit);
// https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif
