console.log('🚀');

axios.get("https://www.redbullshopus.com/products.json")
  .then(function(responses){
    console.log(responses);
    console.log(responses.data.products[0].images[0].src);
    console.log(responses.data.products[1].images[0].src);
    console.log(responses.data.products[2].images[0].src);

    let img = document.getElementById("product");
     img.src =  responses.data.products[0].images[0].src;

  })
