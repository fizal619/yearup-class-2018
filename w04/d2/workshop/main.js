console.log('🚀');
let fizal = "http://fizal.me/products.json";

axios.get(fizal)
  .then((response) => {
    // console.log(response);
    let iterate = response.data.products;
    for (let i=0;i<iterate.length;i++){

    let product = document.getElementById('product');

    let images = document.createElement('img');


    let imgIt = iterate[i].images[0].src;
    images.src = imgIt;
    product.appendChild(images)[i];

    console.log(product);
}

  })
  .catch((error) => {
    console.log(error);
  });
