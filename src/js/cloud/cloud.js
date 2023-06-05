// alert("fichero cloud.js");
class NameCloud {

  constructor(container, texts) {
    // alert("dentro del constructor");
    const self = this;
    self.container = container;
    self.texts = texts;
    self.oldIndex = 0;
    self.actualIndex = 0;
    self.indexOfName = 0;
    self.timeToRoll = 5000;
    self.createInnerCloud();    
    // self.start();
  }
  createInnerCloud() {
    const self = this;   

    const elCloud = document.createElement("div");
    elCloud.className = "cloudEl";
    elCloud.id ="cloudNames";
    elCloud.style.position = "relative";
    // elCloud.innerText = "elCLoud";

    self.texts.forEach((text) => {
      const item = self.createTextItem(text);
      const index = self.texts.indexOf(text);

      const position = self.computePosition(index);

      item.style.left = " " + position.x + "%";
      // alert("" + position.x + "%");
      item.style.top = " " + position.y + "%";
      elCloud.appendChild(item);
    });

    self.container.appendChild(elCloud);
    this.indexOfName = 0;
  }
  createTextItem(text) {
    const itemEl = document.createElement("div");
    itemEl.className = "itemEl";
    itemEl.style.position = "absolute";
    itemEl.style.textAlign = "center";
    itemEl.innerText = text;
    itemEl.id = "NAME" + this.indexOfName;
    
    this.indexOfName++;
    return itemEl;
  }
  computePosition(index, random = false) {
    const self = this;
    const textsLength = self.texts.length;
    // if random `true`, It means that a random appropriate place is generated, and the position will be independent of `index`
    if (random) index = Math.floor(Math.random() * (textsLength + 1));
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
    return {
      x: (80 * Math.cos(theta) * Math.sin(phi)) / 2 + 50,
      y: (80 * Math.sin(theta) * Math.sin(phi)) / 2 + 50,

      // z: (self.size * Math.cos(phi)) / 2,
      z: 0,
    };
  }
  start(){
    self = this;
    // alert("start");
    const cloudNames = document.getElementById("cloudNames");    
    this.rolling(this.getRandomNumber(3000,6000));
     
  }
  rolling (time) { 
    // alert("rolling");    
    const long = this.texts.length;       

    this.oldIndex = this.actualIndex;  
    const oldElement = document.getElementById("NAME" + this.oldIndex);     
    oldElement.style.fontSize = "16px";
    // oldElement.style.backgroundColor = "blue"; 

    this.actualIndex = Math.floor(Math.random()*long); 
    const actualElement = document.getElementById("NAME" + this.actualIndex);    
    actualElement.style.fontSize = "50px";
    time-=100;
    if(time>0){
      setTimeout(()=> this.rolling(time), 100);  
    }   
      
  }

  addName(name){
    this.texts.push(name);
  }
  deleteByIndex(index){
    this.texts.splice(index,1);
  }
  deleteName(name){
    const self = this;
    const index = self.texts.indexOf(name);
    self.texts.splice(index,1);

  }
  updateName(oldName, newName){
    const self = this;
    const index = self.texts.indexOf(oldName);
    self.texts[index] = newName;
  }
  update(){
    this.resetCloud();
    this.createInnerCloud();
  }
  getRandomNumber(minimo,maximo){
    const aleatorio =  minimo + Math.random() * (maximo-minimo) ;
    return aleatorio;
  }
  getActualIndex(){
    return this.actualIndex;
  }
  resetCloud(){
    const elCloud = document.getElementById("cloudNames");
    elCloud.innerHTML = "";
  }
}
createCloud();
function createCloud() {
  const textNames = getNames();
  const cloudContainer = getContainerElement();
  const namesCloud = new NameCloud(cloudContainer, textNames);
  // setInterval(function(){console.log("set interval")}, 500);
}
function getNames() {
  const names = [
    "Juan",
    "Carlos",
    "Miguel",
    "Jesus",
    "Pedro",
    "Michael",
    "Pablo",
    "Mateo",
    "Santi",
  ];
  return names;
}

function getContainerElement() {
  const element = document.getElementById("cloud");
  return element;
}
