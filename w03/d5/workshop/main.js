class Art {
  constructor(frame, url){
    this.frame: "black-border",
    this.url:'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'

}


  render(){
    //do things to the DOM here
let brandNew = document.createElement('img')

function imageLoad(){
    let image =  brandNew.src = this.url;
  }
  brandNew.addEventListener('load', imageLoad);

  }

}

let first = new Art()

class Classical extends Art {
  constructor(){
    super();
  }

}
