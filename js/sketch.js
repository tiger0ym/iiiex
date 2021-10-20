let keyTextSize = 50;

const fps = 60;

let x_1, x_2, x_3, x_4, x_5;
let y_judgeLine;

const block_width = 100;
const block_height = 100;
const y_velocity = 5;

let y_d = -block_height;

let jsonData;
let arrayLen;

const startDelay = 3; //second

let arrayLane1 = [];
let arrayLane2 = [];
let arrayLane3 = [];
let arrayLane4 = [];

let frame = 0;

let bgColorD;
let bgColorF;
let bgColorJ;
let bgColorK;

let emoji;
let lane3Emoji = [];

function preload() {
  jsonData = loadJSON("./data/data.json");
}

function setup() {
  frameRate(fps);
  createCanvas(windowWidth, windowHeight);
  background("white");

  x_1 = windowWidth / 2 - block_width * 2;
  x_2 = windowWidth / 2 - block_width;
  x_3 = windowWidth / 2;
  x_4 = windowWidth / 2 + block_width;
  x_5 = windowWidth / 2 + block_width * 2;
  y_judgeLine = windowHeight * 0.8;

  //jsonデータをlaneごとにarrayにpushし，timingでsort
  arrayLen = Object.keys(jsonData.notes).length;
  for (let i = 0; i < arrayLen; i++) {
    switch (jsonData.notes[i].lane) {
      case 1:
        arrayLane1.push([jsonData.notes[i].timing, jsonData.notes[i].length]);
        break;
      case 2:
        arrayLane2.push([jsonData.notes[i].timing, jsonData.notes[i].length]);
        break;
      case 3:
        arrayLane3.push([jsonData.notes[i].timing, jsonData.notes[i].length]);
        break;
      case 4:
        arrayLane4.push([jsonData.notes[i].timing, jsonData.notes[i].length]);
        break;
      default:
        break;
    }
  }
  arrayLane1.sort(function (a, b) {
    return a[0] - b[0];
  });
  arrayLane2.sort(function (a, b) {
    return a[0] - b[0];
  });
  arrayLane3.sort(function (a, b) {
    return a[0] - b[0];
  });
  arrayLane4.sort(function (a, b) {
    return a[0] - b[0];
  });

  //lane3の絵文字をランダムで設定
  for (let i = 0; i < arrayLane3.length; i++) {
    lane3Emoji.push(random(["🍙", "🍰", "🐟", "🌭"]));
  }
}

//ウインドウサイズが変わった時
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x_1 = windowWidth / 2 - block_width * 2;
  x_2 = windowWidth / 2 - block_width;
  x_3 = windowWidth / 2;
  x_4 = windowWidth / 2 + block_width;
  x_5 = windowWidth / 2 + block_width * 2;
  y_judgeLine = windowHeight * 0.8;
}

function draw() {
  //背景描画
  drawBG();

  fill(189, 204, 212, 50);
  noStroke();
  textSize(keyTextSize * 1.4);
  text("Tap", (width / 4) * 1, (height / 5) * 1);
  text("Your", width / 2, (height / 5) * 2);
  text("Life", (width / 4) * 3, (height / 5) * 3);

  /*
  //bpm[回/min]のペースで(タイマbase)
  if (millis() - timeStamp > 60000/bpm){
    timeStamp = millis();
    
    //とりあえず点滅
    fill("black");
    rect(0, 0, windowWidth/2-block_width*2, windowHeight);
    rect(windowWidth/2+block_width*2, 0, windowWidth/2-block_width*2, windowHeight);
  }
  */

  //bpm[回/min]のペースで(フレームレートbase)
  if (frame % ((fps * 60) / jsonData.bpm) < 1) {
    //とりあえず点滅
    //fill("black");
    //rect(0, 0, windowWidth/2-block_width*2, windowHeight);
    //rect(windowWidth/2+block_width*2, 0, windowWidth/2-block_width*2, windowHeight);
  }

  //指定されたタイミングでブロック描画
  drawLane(arrayLane1, x_1);
  drawLane(arrayLane2, x_2);
  drawLane(arrayLane3, x_3);
  drawLane(arrayLane4, x_4);

  frame++;
  push();
  print(bgColorF);
}

//背景描画
function drawBG() {
  //白
  stroke("white");
  fill("white");
  rect(0, 10, windowWidth / 2 - block_width * 2 - 1, windowHeight);
  rect(x_5 + 1, 0, windowWidth / 2 - block_width * 2, windowHeight);

  //だんだん白に
  fill(255, 255, 255, 50);
  noStroke();
  rect(x_1, 0, block_width, y_judgeLine);
  rect(x_2, 0, block_width, y_judgeLine);
  rect(x_3, 0, block_width, y_judgeLine);
  rect(x_4, 0, block_width, y_judgeLine);
  rect(x_1, y_judgeLine, block_width, windowHeight);
  rect(x_2, y_judgeLine, block_width, windowHeight);
  rect(x_3, y_judgeLine, block_width, windowHeight);
  rect(x_4, y_judgeLine, block_width, windowHeight);
  //stroke(255, 255, 255, 50);
  rect(0, 0, -1, 1);
  rect(0, 0, 1, 2);
  rect(0, 0, 1, 3);
  rect(0, 0, 1, 4);
  //point(1,1);
  //point(1,2);
  //point(1,3);
  //point(1,4);
  bgColorD = get(-1, 1);
  bgColorF = get(1, 2);
  bgColorJ = get(1, 3);
  bgColorK = get(1, 4);

  //枠線
  strokeWeight(1);
  stroke(0);
  line(x_1, 0, x_1, windowHeight);
  line(x_2, 0, x_2, windowHeight);
  line(x_3, 0, x_3, windowHeight);
  line(x_4, 0, x_4, windowHeight);
  line(x_5, 0, x_5, windowHeight);
  strokeWeight(2);
  line(x_1, y_judgeLine, x_5, y_judgeLine);

  //文字
  fill(0);
  strokeWeight(0);
  textSize(keyTextSize);
  textAlign(CENTER);
  text("d", (x_1 + x_2) / 2, windowHeight * 0.9);
  text("f", (x_2 + x_3) / 2, windowHeight * 0.9);
  text("j", (x_3 + x_4) / 2, windowHeight * 0.9);
  text("k", (x_4 + x_5) / 2, windowHeight * 0.9);
}

//レーン描画
function drawLane(arrayLane, x) {
  for (let i = 0; i < arrayLane.length; i++) {
    if (
      startDelay * fps +
        (arrayLane[i][0] * (fps * 60)) / jsonData.bpm -
        (y_judgeLine + 50) / y_velocity <
      frame
    ) {
      let bgColor;
      switch (arrayLane) {
        case arrayLane1:
          emoji = "☀";
          bgColor = bgColorD;
          break;
        case arrayLane2:
          emoji = "🚴‍♂️";
          bgColor = bgColorF;
          break;
        case arrayLane3:
          emoji = lane3Emoji[i];
          bgColor = bgColorJ;
          break;
        case arrayLane4:
          emoji = "💤";
          bgColor = bgColorK;
          break;
        default:
          break;
      }

      /*
      fill(bgColor);
      //fill("black");
      y_d = y_velocity*(frame - startDelay*fps- arrayLane[i][0]*(fps*60)/jsonData.bpm + (y_judgeLine+50)/y_velocity) - 100;
      rect(x, y_d, block_width, block_height);
      noStroke();
      rect(x, y_d,block_width ,block_height);
      */

      fill("red");
      noStroke();
      y_d =
        y_velocity *
          (frame -
            startDelay * fps -
            (arrayLane[i][0] * (fps * 60)) / jsonData.bpm +
            (y_judgeLine + 50) / y_velocity) -
        100;
      //rect(x, y_d, block_width, block_height);
      text(emoji, x, y_d, block_width, block_height);

      //stroke("blue");
      //strokeWeight(3);
      //line(x,y_d+block_height/2,x+block_width,y_d+block_height/2);
    }
  }
}

//PC
function keyPressed() {
  if (key == "d") {
    DPressed();
  }

  if (key == "f") {
    FPressed();
  }

  if (key == "j") {
    JPressed();
  }

  if (key == "k") {
    KPressed();
  }
}

//スマホ
function mousePressed() {
  if (x_1 < mouseX && mouseX < x_2) {
    DPressed();
  }
  if (x_2 < mouseX && mouseX < x_3) {
    FPressed();
  }
  if (x_3 < mouseX && mouseX < x_4) {
    JPressed();
  }
  if (x_4 < mouseX && mouseX < x_5) {
    KPressed();
  }
}

function DPressed() {
  fill(63, 169, 245); //水色
  noStroke();
  rect(x_1, 0, block_width, y_judgeLine);
  rect(x_1, y_judgeLine, block_width, windowHeight);

  stroke(63, 169, 245);
  fill(63, 169, 245);
  rect(0, 0, -1, 1);
  bgColorD = get(-1, 1);

  let great = false;
  for (let i = 0; i < arrayLane1.length; i++) {
    if (
      abs(
        startDelay * fps +
          (arrayLane1[i][0] * (fps * 60)) / jsonData.bpm -
          frame
      ) < 5
    ) {
      great = true;
    }
  }
  if (great) {
    print("d great");
    fill(255, 0, 0);
    strokeWeight(0);
    textSize(keyTextSize);
    textAlign(CENTER);
    text("Great!", (x_1 + x_2) / 2, windowHeight * 0.9);
  } else {
    print("d miss");
  }
}

function FPressed() {
  fill(255, 123, 172); //ぴんく
  noStroke();
  rect(x_2, 0, block_width, y_judgeLine);
  rect(x_2, y_judgeLine, block_width, windowHeight);

  stroke(255, 123, 172);
  fill(255, 123, 172);
  rect(0, 0, 1, 2);
  bgColorD = get(1, 2);

  let great = false;
  for (let i = 0; i < arrayLane2.length; i++) {
    if (
      abs(
        startDelay * fps +
          (arrayLane2[i][0] * (fps * 60)) / jsonData.bpm -
          frame
      ) < 5
    ) {
      great = true;
    }
  }
  if (great) {
    print("f great");
    fill(255, 0, 0);
    strokeWeight(0);
    textSize(keyTextSize);
    textAlign(CENTER);
    text("Great!", (x_2 + x_3) / 2, windowHeight * 0.9);
  } else {
    print("f miss");
  }
}

function JPressed() {
  fill(122, 201, 67); //グリーン
  noStroke();
  rect(x_3, 0, block_width, y_judgeLine);
  rect(x_3, y_judgeLine, block_width, windowHeight);

  stroke(122, 201, 67);
  fill(122, 201, 67);
  rect(0, 0, 1, 3);
  bgColorD = get(1, 3);

  let great = false;
  for (let i = 0; i < arrayLane3.length; i++) {
    if (
      abs(
        startDelay * fps +
          (arrayLane3[i][0] * (fps * 60)) / jsonData.bpm -
          frame
      ) < 5
    ) {
      great = true;
    }
  }
  if (great) {
    print("j great");
    fill(255, 0, 0);
    strokeWeight(0);
    textSize(keyTextSize);
    textAlign(CENTER);
    text("Great!", (x_3 + x_4) / 2, windowHeight * 0.9);
  } else {
    print("j miss");
  }
}

function KPressed() {
  fill(245, 139, 63); //おれんじ
  noStroke();
  rect(x_4, 0, block_width, y_judgeLine);
  rect(x_4, y_judgeLine, block_width, windowHeight);

  stroke(245, 139, 63);
  fill(245, 139, 63);
  rect(0, 0, 1, 4);
  bgColorD = get(1, 4);

  let great = false;
  for (let i = 0; i < arrayLane4.length; i++) {
    if (
      abs(
        startDelay * fps +
          (arrayLane4[i][0] * (fps * 60)) / jsonData.bpm -
          frame
      ) < 5
    ) {
      great = true;
    }
  }
  if (great) {
    print("k great");
    fill(255, 0, 0);
    strokeWeight(0);
    textSize(keyTextSize);
    textAlign(CENTER);
    text("Great!", (x_4 + x_5) / 2, windowHeight * 0.9);
  } else {
    print("k miss");
  }
}
