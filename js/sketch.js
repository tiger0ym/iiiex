let keyTextSize = 50;
let blockTextSize = 70;

const fps = 60;

let xLines = [];
let yJudgeLine;

const blockWidth = 150;
const blockHeight = 150;
const yVelocity = 5;

let y_d = -blockHeight;

let jsonData;
let arrayLen;

const startDelay = 3; //second

let arrayLanes = [[], [], [], []];

let frame = 0;

let emoji;
let lane3Emoji = [];

let frameDpressed = 0;
let frameFpressed = 0;
let frameJpressed = 0;
let frameKpressed = 0;
let framesPressed = [0, 0, 0, 0];

let colorD;
let colorF;
let colorJ;
let colorK;
let frameColors = [];

let isGreat = [false, false, false, false];

function preload() {
  jsonData = loadJSON("data.json");
}

function setup() {
  frameRate(fps);
  createCanvas(windowWidth, windowHeight);
  background("white");

  xLines = [
    windowWidth / 2 - blockWidth * 2,
    windowWidth / 2 - blockWidth,
    windowWidth / 2,
    windowWidth / 2 + blockWidth,
    windowWidth / 2 + blockWidth * 2,
  ];

  yJudgeLine = windowHeight * 0.8;

  frameColors = [
    color(63, 169, 245, 255),
    color(255, 123, 172, 255),
    color(122, 201, 67, 255),
    color(245, 139, 63, 255),
  ];

  //jsonデータをlaneごとにarrayにpushし，timingでsort
  arrayLen = Object.keys(jsonData.notes).length;
  for (let i = 0; i < arrayLen; i++) {
    arrayLanes[jsonData.notes[i].lane - 1].push([
      jsonData.notes[i].timing,
      jsonData.notes[i].length,
    ]);
  }
  /*
  for(let i=0;i<arrayLen;i++){
    arrayLanes[i].sort(function(a,b){return(a[0] - b[0]);});
  }
  */

  //lane3の絵文字をランダムで設定
  for (let i = 0; i < arrayLanes[2].length; i++) {
    lane3Emoji.push(random(["🍙", "🍰", "🐟", "🌭"]));
  }
}

//ウインドウサイズが変わった時
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  xLines = [
    windowWidth / 2 - blockWidth * 2,
    windowWidth / 2 - blockWidth,
    windowWidth / 2,
    windowWidth / 2 + blockWidth,
    windowWidth / 2 + blockWidth * 2,
  ];

  yJudgeLine = windowHeight * 0.8;
}

function draw() {
  //背景描画
  drawBG();
  //background(255,0,0,90);

  fill(189, 204, 212, 50);
  noStroke();
  textSize(keyTextSize * 1.4);
  text("Tap", (width / 4) * 1, (height / 5) * 1);
  text("Your", width / 2, (height / 5) * 2);
  text("Life", (width / 4) * 3, (height / 5) * 3);

  frameColors = [
    color(63, 169, 245, framesPressed[0] * 15),
    color(255, 123, 172, framesPressed[1] * 15),
    color(122, 201, 67, framesPressed[2] * 15),
    color(245, 139, 63, framesPressed[3] * 15),
  ];

  //bpm[回/min]のペースで(フレームレートbase)
  if (frame % ((fps * 60) / jsonData.bpm) < 1) {
    //とりあえず点滅
    //fill("black");
    //rect(0, 0, windowWidth/2-blockWidth*2, windowHeight);
    //rect(windowWidth/2+blockWidth*2, 0, windowWidth/2-blockWidth*2, windowHeight);
  }

  //指定されたタイミングでブロック描画
  for (let i = 0; i < 4; i++) {
    drawLane(i);
  }

  frame++;
  //push();
}

//背景描画
function drawBG() {
  //背景リセット
  background("white");

  //枠線
  strokeWeight(1);
  stroke(0);
  for (let i = 0; i < 5; i++) {
    line(xLines[i], 0, xLines[i], windowHeight);
  }

  strokeWeight(2);
  //line(x_1,yJudgeLine,x_5,yJudgeLine);
  line(xLines[0], yJudgeLine, xLines[4], yJudgeLine);

  //文字
  fill(0);
  strokeWeight(0);
  textSize(keyTextSize);
  textAlign(CENTER);
  text("d", (xLines[0] + xLines[1]) / 2, windowHeight * 0.9);
  text("f", (xLines[1] + xLines[2]) / 2, windowHeight * 0.9);
  text("j", (xLines[2] + xLines[3]) / 2, windowHeight * 0.9);
  text("k", (xLines[3] + xLines[4]) / 2, windowHeight * 0.9);
}

//レーン描画
function drawLane(laneNum) {
  for (let i = 0; i < 4; i++) {
    if (framesPressed[i] > 0) {
      framesPressed[i]--;

      if (isGreat[i]) {
        fill(255, 0, 0);
        textSize(keyTextSize);
        //textAlign(CENTER);
        text("Great!", (xLines[i] + xLines[i + 1]) / 2, windowHeight * 0.9);
      } else {
        fill(255, 0, 0);
        textSize(keyTextSize);
        //textAlign(CENTER);
        text("miss..", (xLines[i] + xLines[i + 1]) / 2, windowHeight * 0.9);
      }
    }
  }

  fill(frameColors[laneNum]);
  rect(xLines[laneNum], 0, blockWidth, windowHeight);

  for (let i = 0; i < arrayLanes[laneNum].length; i++) {
    if (
      startDelay * fps +
        (arrayLanes[laneNum][i][0] * (fps * 60)) / jsonData.bpm -
        (yJudgeLine + 50) / yVelocity <
      frame
    ) {
      let bgColor;

      switch (laneNum) {
        case 0:
          emoji = "☀";
          break;
        case 1:
          emoji = "🚴‍♂️";
          break;
        case 2:
          emoji = lane3Emoji[i];
          break;
        case 3:
          emoji = "💤";
          break;
        default:
          break;
      }

      fill("red");
      noStroke();
      y_d =
        yVelocity *
          (frame -
            startDelay * fps -
            (arrayLanes[laneNum][i][0] * (fps * 60)) / jsonData.bpm +
            (yJudgeLine + 50) / yVelocity) -
        100;
      textSize(blockTextSize);
      text(emoji, xLines[laneNum], y_d, blockWidth, blockHeight);

      //stroke("blue");
      //strokeWeight(3);
      //line(x,y_d+blockHeight/2,x+blockWidth,y_d+blockHeight/2);
    }
  }
}

//PC
function keyPressed() {
  if (key == "d") {
    lanePressed(0);
  }
  if (key == "f") {
    lanePressed(1);
  }
  if (key == "j") {
    lanePressed(2);
  }
  if (key == "k") {
    lanePressed(3);
  }
}

//スマホ
function mousePressed() {
  for (let i = 0; i < 4; i++) {
    if (xLines[i] < mouseX && mouseX < xLines[i + 1]) {
      lanePressed(i);
    }
  }
}

function lanePressed(laneNum) {
  //framespressed = 3;
  framesPressed[laneNum] = 6;

  let great = false;
  for (let i = 0; i < arrayLanes[laneNum].length; i++) {
    if (
      abs(
        startDelay * fps +
          (arrayLanes[laneNum][i][0] * (fps * 60)) / jsonData.bpm -
          frame
      ) < 5
    ) {
      great = true;
    }
  }
  if (great) {
    isGreat[laneNum] = true;
  } else {
    isGreat[laneNum] = false;
  }
}
