console.log('🚀');

axios.get
  ("https://www.redbullshopus.com/products.json")
    .then(function(response){
  //   console.log(response);
    //let jData=response.data[].title[];
    //console.log(jData);

    let productArr=[];
    let i=0;
    while(i<30){
          productArr.push(response.data.products[i].title);
          i++;
  }

  let imgArray=[];
  let k=0;
  while(k<30){
        imgArray.push(response.data.products[k].images[0].src);
        k++;
}

for(let j=0; j<30;j++){
  let container = document.getElementById('things');
  let file1 = document.createElement('img');
  let file2 = document.createElement('h3');
  file2.innerHTML=(productArr[j]);
  file1.src = (imgArray[j]);
  container.appendChild(file1);
  container.appendChild(file2);
  // console.log(productArr[j]);
  // console.log(imgArray[j]);
}



      // let productOne=response.data.products[0].images[0].src;
      // console.log(productOne);
      //
      // let pic1 =document.getElementById('pic');
      // pic1.src=response.data.products[0].images[0].src;
      //
      // let pic2 =document.getElementById('pic2');
      // pic2.src=response.data.products[0].images[1].src;
      //
      // let pic3 =document.getElementById('pic3');
      // pic3.src=response.data.products[0].images[2].src;

    //  document.getElementsByTagName("img").src = response.data.products[0].images[0].src;
    //  pic1.src=productOne;


    });
