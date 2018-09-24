

var rgbColor = {
  redFill : 0,
  greenFill : 0,
  blueFill : 0
}

function setup() {
  createCanvas(600,600);
  
}

function draw() {
  
  background(0);
  
  ellipseMode(CENTER);
  fill('#5F9F9F');
  ellipse(mouseX,mouseY,25,25);
  
  //redSaturation = map(mouseX,0,600,0,255);
  
  var r = rgbColor.redFill;
  var g = rgbColor.greenFill;
  var b = rgbColor.blueFill;
  
  r = map(mouseX,0,width,0,255);
  g = map(mouseY,width,0,0,255);
  //b = map()
  rectMode(CENTER);
  fill(r, g, b);
  rect(300,300,200,200);
}