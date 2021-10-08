/*
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);

  strokeWeight(10)
  stroke(0);
}

function draw() {
  //スマホ用
  //ptouchX = touches[0].x;
  //ptouchY = touches[0].y;
}

//PC用
function mouseDragged() {
  stroke('#66CDAA');
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

//スマホ用
function touchMoved() {
  stroke('#66CDAA');
  line(touches[0].x, touches[0].y, ptouchX, ptouchY);
  return false;
}

//背景リセット
function doubleClicked() {
  background(255);
}
*/
// TouchDraw
function setup() {
  devicePixelScaling(false);
  createCanvas(windowWidth, windowHeight);
  stroke(0); // 黒く塗りつぶす
  strokeWeight(20); // 幅を20に
 	background(200);
}

function draw() {
	
}

function touchMoved() {
	line(touchX, touchY, ptouchX, ptouchY);
  return false;
}