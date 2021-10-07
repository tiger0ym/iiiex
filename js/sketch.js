function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);

  strokeWeight(10)
  stroke(0);
}

function draw() {}

function mouseDragged() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

//背景リセット
function doubleClicked() {
  background(255);
}