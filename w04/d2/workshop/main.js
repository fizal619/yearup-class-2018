console.log('🚀');
var myimageGoesHere = document.querySelector(".my_redbull_product");
function runMyImage(){
axios.get("https://www.redbullshopus.com/products.json")
  .then(function (response) {
    // handle succes
    myimageGoesHere.src = response.data.products[10].images[0].src;
    console.log(response.data.products[0].images[0].src)


  })

  .catch(e =>{
    console.log('data not able to parse', e);
  });
}

// var clickThis = document.querySelector("");
myimageGoesHere.addEventListener('click', runMyImage);
