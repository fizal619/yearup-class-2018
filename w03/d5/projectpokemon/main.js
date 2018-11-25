class Trainer {
  constructor(url, address, classname, callme, textclass){
    this.classname = classname;
    this.callme = callme;
    this.address = address;
    this.url = url;
    this.textclass = textclass;
    this.train = document.createElement('img');
    this.header = document.getElementById('head');
    this.name = document.createElement('p');
    this.caller = document.createElement('p2');
  }
    execute() {
    this.header.appendChild(this.train);
    this.header.appendChild(this.name);
    this.header.appendChild(this.caller);
    this.train.src = this.url;
    this.train.className = this.classname;
    this.name.innerHTML = this.address;
    this.name.className = this.textclass;
    this.caller.innerHTML = this.callme;
    this.caller.className = this.textclass;

  }
}
let Mikias = new Trainer("Mikias.png", "Mikias Negesse", "trainme", "39 Oak ln, Pelham, nyc", "about");

console.log(Mikias);
Mikias.execute();

console.log(window.scrollY);

class Pokemon {
  constructor(url, name, attack, defence, ability, hp, classimg, classul){
    this.url = url;
    this.attack = attack;
    this.defence = defence;
    this.ability = ability;
    this.hp = hp;
    this.name = name;
    this.classimg = classimg;
    this.classul = classul;
    this.image = document.createElement('img');
    this.attacker = document.createElement('li');
    this.defensive = document.createElement('li');
    this.able = document.createElement('li');
    this.healthpoints = document.createElement('li');
    this.Name = document.createElement('li');
    this.div = getElementById('avatar');
    this.ul = document.createElement('ul');
    this.attributes = document.getElementById('att');
  }
  display() {
    this.div.appendChild(this.image);
    this.ul.appendChild(this.Name);
    this.ul.appendChild(this.attacker);
    this.ul.appendChild(this.defensive);
    this.ul.appendChild(this.able);
    this.ul.appendChild(this.healthpoints);
    this.attributes.appendChild(this.ul);
    this.Name.innerHTML = this.name;
    this.attacker.innerHTML = this.attack;
    this.defensive.innerHTML = this.defence;
    this.able.innerHTML = this.ability;
    this.healthpoints.innerHTML = this.hp;
    this.ul.className = this.classul;
    this.image.src = this.url;

  }
}
