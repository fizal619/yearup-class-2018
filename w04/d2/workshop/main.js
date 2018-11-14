console.log('🚀');

axios.get
  ("https://www.redbullshopus.com/products.json")
    .then(function(response){
    //  console.log(tData)

      let productOne=response.data.products[0].images[0].src;
      console.log(productOne);

      let pic1 =document.getElementById('pic');
      pic1.src=response.data.products[0].images[0].src;

      let pic2 =document.getElementById('pic2');
      pic2.src=response.data.products[0].images[1].src;

      let pic3 =document.getElementById('pic3');
      pic3.src=response.data.products[0].images[2].src;

      

    //  document.getElementsByTagName("img").src = response.data.products[0].images[0].src;
    //  pic1.src=productOne;


    });
