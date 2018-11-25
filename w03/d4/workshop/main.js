//This comes from data.js
let gifs = window.data.data;
console.log(gifs)

function randomGif() {
  let elem = document.getElementById("catgifs");
  let randomElem = Math.floor(Math.random() * gifs.length);
  elem.src = gifs[randomElem].images.original.url;

}

let button = document.querySelector("button");

button.addEventListener("click", randomGif);
