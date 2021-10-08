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

function setup(){
  createCanvas(windowWidth, windowHeight);
  window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  background(255);
}

function draw(){
  background(255);

  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 50, 50);
  }
}