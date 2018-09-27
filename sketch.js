let player = [];


function setup() {
  createCanvas(600,500);

  // var leftBorder = line(0,0,0,height); //left line
  // var rightBorder = line(width,height,width,0);//right line
  // var topBorder = line(0,height,width,height);//top line
  // var bottomBorder = line(0,0,width,0) //bottom line

  let startX = 100,
      startY = 300,
      playerW = 50,
      playerH = 50;
      playerRGB_R = 0;
      playerRGB_G = 255;
      playerRGB_B = 0;
      
  for(let i = 0; i < 1; i++) {
    player[i] = new shooter_class(startX, startY, playerW, playerH, playerRGB_R, playerRGB_G, playerRGB_B);
  }

}

function draw() {
  background(0);
  for(let i = 0; i < player.length; i++) {
    player[i].show();
  }
}




function keyPressed () {

  for(let i = 0; i < player.length; i++) {
    if (keyCode === RIGHT_ARROW) {
      player[i].x += 25;
    } else if(keyCode === LEFT_ARROW) {
      player[i].x -= 25;
    } else if(keyCode === UP_ARROW) {
      player[i].y -= 25;
    } else if(keyCode === DOWN_ARROW) {
      player[i].y += 25;
    }
  }

}





class shooter_class {
  constructor(X, Y, W, H, RGB_R, RGB_G, RGB_B) {
    this.x = X;
    this.y = Y;
    this.w = W;
    this.h = H;
    this.r = RGB_R;
    this.g = RGB_G;
    this.b = RGB_B;
  }
  show() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
  }
}




