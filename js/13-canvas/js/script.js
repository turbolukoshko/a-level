var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

canvas.onclick = function(event){
  // new Line(event.clientX, event.clientY, number.value);
  chooseClickFigures[figure.value](event);
  console.log(event);
};

canvas.onmousemove = function(event){
  // if(event.buttons & 1){
  //   canvas.onclick(event);
  // }
  chooseMoveFigures[figure.value](event);
};

function Drawable(){
  Drawable.addInsance(this);
}

Drawable.prototype.draw = function(){};
Drawable.instances = [];
Drawable.addInsance = function(item){
  Drawable.instances.push(item);
};

Drawable.forAll = function(callback){
  for(var i = 0; i < Drawable.instances.length; i++){
    callback(Drawable.instances[i]);
  }
};

Drawable.drawAll = function(){
  Drawable.forAll(item => item.draw());
};

class Circle extends Drawable{
  constructor(coordinateX, coordinateY, number){
    super();

    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.number = number;
    this.color = color.value;
    
    this.draw();
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.coordinateX - 10, this.coordinateY - 10, this.number, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color; // set color
    ctx.fill(); // fill figure
  }
}

class Square extends Drawable{
  constructor(coordinateX, coordinateY, number){
    super();

    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.number = number;
    this.color = color.value;

    this.draw();
  }
  draw(){
    ctx.beginPath();
    ctx.rect(this.coordinateX - 15, this.coordinateY - 15, this.number, this.number);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Line extends Drawable{
  constructor(coordinateX, coordinateY, number){
    super();

    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.number = number;

    this.draw();
  }

  draw(){
    ctx.beginPath();
    ctx.moveTo(this.coordinateX, this.coordinateY);
    ctx.lineTo(100, 100);
    ctx.lineWidth = this.number;
    ctx.styleStroke = color.value;
    ctx.stroke();
 }
}

// Object for event onclick
var chooseClickFigures = {
  circle: function(event){
    new Circle(event.clientX, event.clientY, number.value);
  },
  square: function(event){
    new Square(event.clientX, event.clientY, number.value);
  },
  line: function(event){
    new Line(event.clientX, event.clientY, number.value);
  }
};

// Object for event mousemove (drawing)
var chooseMoveFigures = {
  circle: function(event){
    if(event.buttons & 1){
      new Circle(event.clientX, event.clientY, number.value);
    }
  },
  square: function(event){
    if(event.buttons & 1){
      new Square(event.clientX, event.clientY, number.value);
    }
  },
  line: function(event){
    if(event.buttons & 1){
      new Line(event.clientX, event.clientY, number.value);
    }
  }
};

// Making capital letter for key of object chooseClickFigure
function toUpperCaseFirstLetter(str){
  return str[0].toUpperCase() + str.slice(1);
}

for(let key in chooseClickFigures){
  var selectOption = document.createElement('option');
  selectOption.setAttribute('value', key);
  selectOption.innerHTML = toUpperCaseFirstLetter(key);
  figure.appendChild(selectOption);
}