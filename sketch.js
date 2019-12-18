var cats = [];
var amountOfCats = 3;
var finalScore = 0;

var muovi = false;

//immagini
var font;
var gatto;
var macch;
var strada;

var canvas;

preload = function(){
  font = loadFont("./assets/Cygnito Mono.ttf");
  gatto = loadImage("./assets/gatto.png");
  macch = loadImage("./assets/macchina.png");
  strada = loadImage("./assets/strada.png");
}

setup = function(){
   	canvas = createCanvas(900, 1000);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
   	background(0);

    for(var i = 0; i < amountOfCats; i++) {
      var movingCats = new Cat();
      cats.push(movingCats);
    }

    stradaY = height;

    var score = localStorage.setItem("score", localStorage.score- 250);
    console.log(score);
}

draw = function() {

  background(0);
  imageMode(CENTER);

  image(strada, width/2, stradaY, strada.width/2, strada.height);
  stradaY = stradaY + 20;
  if (stradaY > 400) {
  stradaY = 0;
}
  //show and give movement to cats
  for (var i = 0; i < cats.length; i++) {
    var j = cats[i];
    j.move();
    j.display();
  }

  //move car as cursor
  image(macch, mouseX, windowHeight / 2 - 100, macch.width/2, macch.height/2);

  // what happens when a cat dies
  for (var i = 0; i < cats.length; i++) {
    if (cats[i].dead()) {
      cats.splice(i, 1);
      finalScore++;
    }
  }

  if(finalScore >= 3 && frameCount > 600){
    textFont(font);
    textSize(45);
    fill("red");
    text("YOU WON", width/2, height/2);
  }

  if(finalScore <= 2 && frameCount > 600){
    textFont(font);
    textSize(45);
    fill("red");
    text("YOU LOST", width/2, height/2);
  }

  push();
  textFont(font);
  textSize(45);
  fill("red");
  text("score: " + finalScore + "/3", width - 350, height/10 - 40);
  pop();

}

function Cat() {
  this.x = random(canvas.width - 100, 100);
  this.y = -500*random();
  this.diameter = 60;
  this.speedY = random(4, 10);
  this.speedX = 0;

  this.move = function() {
    if (frameCount > 200) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  this.dead = function() {
    var d = dist(mouseX, windowHeight / 3, this.x, this.y);
    if (d < 120) {
      return true;
    } else {
      return false;
    }
  }

  this.display = function() {
    image(gatto, this.x - (this.diameter) / 2, this.y - (this.diameter) / 2, gatto.width/2, gatto.height/2);
  }
  }

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
