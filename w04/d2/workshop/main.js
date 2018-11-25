console.log('🚀');
axios.get
("https://www.redbullshopus.com/products.json")
.then(mike);
function mike(response){
  console.log(response);
console.log(response.data.products[0]);

let title = document.getElementById('prices');
let image = document.getElementById('imge');
let image2 = document.getElementById('imge2');
let title2 = document.getElementById('prices2');
let prices = document.getElementById('$');
let prices2 = document.getElementById('$$');
let prices3 = document.getElementById('$$$');


console.log(response.data.products[0].images[0].src);

let image_ = response.data.products[0].images[0].src;
let image2_ = response.data.products[0].images[1].src;
let image3_ = response.data.products[0].images[2].src;

let price = response.data.products[0].variants[0].price;
let title_ = response.data.products[0].title;

prices.innerHTML = price;
title.innerHTML = title_;
image.src = image_;
let button = document.getElementById('butt');
let i =0;
function changeImage(){
  let imagesss = [image_, image2_, image3_]


     image.src = imagesss[i];
   i++;
   if (i >= 3){
     i = 0;
   }
  }
  button.addEventListener("click",changeImage);




let image_2 = response.data.products[1].images[0].src;
let image2_2 = response.data.products[1].images[1].src;
let image3_2 = response.data.products[1].images[2].src;
let title_2 = response.data.products[1].title;
let price2 = response.data.products[1].variants[0].price;
let button2 = document.getElementById('butt2');

prices2.innerHTML = price2;
image2.src = image_2;
title2.innerHTML = title_2;
let l = 0;
function changeImage2(){
 let imagess = [image_2, image2_2, image3_2];
 image2.src = imagess[l];
 l++;
 if (l >= 3){
   l = 0;
 }
}
button2.addEventListener('click', changeImage2);


let image3 = document.getElementById('imge3');
let title3 = document.getElementById('prices3');


let image_3 = response.data.products[2].images[0].src;
let image2_3 = response.data.products[2].images[1].src;
let image3_3 = response.data.products[2].images[2].src;
let title_3 = response.data.products[2].title;
let price3 = response.data.products[2].variants[0].price;
let button3 = document.getElementById('butt3');

prices3.innerHTML = price3;
image3.src = image_3;
title3.innerHTML = title_3;
let k = 0;
function changeImage3(){
 let imageess = [image_3, image2_3, image3_3];
 image3.src = imageess[k];
 k++;
 if (k >= 3){
   k = 0;
 }
}
button3.addEventListener('click', changeImage3);

}
