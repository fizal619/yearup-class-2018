class Classic {
  constructor(frame, art_url) {
    this.frame = frame;
    this.art_url = art_url;
  }

newElem = document.createElement('img');
newElem.src = ""

newElem.className = "pictures";

let parent = document.getElementById('images');
console.log(parent);
parent.appendChild(newElem);

let otherimage = document.createElement('img');


  render(){
    //do things to the DOM here
  }
}

class Classic extends Art {
  constructor(){
    super();
  }

}
