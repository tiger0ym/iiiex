let keyTextSize;
let blockTextSize;

const fps = 60;

let xLines = [];
let yJudgeLine;

let blockWidth;
let blockHeight;
const yVelocity = 5;

let yBlock = -blockHeight;

let jsonData;
let arrayLen;

const startDelay = 5; //second
const endWait = 5; //second

let arrayLanes = [[], [], [], []];

let frame = 0;

let emojis = ["☀", "🚴‍♂️", [], "💤"];

let framesPressed = [0, 0, 0, 0];

let colorD;
let colorF;
let colorJ;
let colorK;
let frameColors = [];

let isGreat = [false, false, false, false];

let greatColor;

let onPress = false;

let bgImage;

let endingtime = 0;

let gameEnd = false;

let resultJson = {};
let resultArray = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

let sampleSound;

function preload() {
  jsonData = loadJSON("./data/data.json");
  bgImage = loadImage("./image/bgImg9_16.PNG");
  sampleSound = loadSound("./sound/sound.mp3");
  //greatFont = loadFont("Lato-BlackItalic.ttf");
}

function setup() {
  frameRate(fps);
  createCanvas(windowWidth, windowHeight);
  print(windowWidth);

  if (isSmartPhone()) {
    print("smartphone");
    blockWidth = windowWidth / 4;
    blockHeight = windowWidth / 4;
    blockTextSize = 150;
    keyTextSize = 100;
    xLines = [
      0,
      windowWidth / 4,
      windowWidth / 2,
      (windowWidth * 3) / 4,
      windowWidth,
    ];
  } else {
    print("pc");
    blockWidth = 150;
    blockHeight = 150;
    blockTextSize = 70;
    keyTextSize = 50;
    xLines = [
      windowWidth / 2 - blockWidth * 2,
      windowWidth / 2 - blockWidth,
      windowWidth / 2,
      windowWidth / 2 + blockWidth,
      windowWidth / 2 + blockWidth * 2,
    ];
  }

  yJudgeLine = windowHeight * 0.8;

  frameColors = [
    color(63, 169, 245, 255),
    color(255, 123, 172, 255),
    color(122, 201, 67, 255),
    color(245, 139, 63, 255),
  ];

  //jsonデータをlaneごとにarrayにpushし，(timingでsort)
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
    emojis[2].push(random(["🍙", "🍰", "🐟", "🌭"]));
  }
  let tmpMax = 0;
  for (let i = 0; i < 4; i++) {
    tmpMax = max(endingtime, arrayLanes[i][arrayLanes[i].length - 1][0]);
  }
  endingtime = startDelay + (tmpMax * 60) / jsonData.bpm + endWait; //second
  //for debug
  //endingtime = 0;
}

//スマホ判定
function isSmartPhone() {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
}

//ウインドウサイズが変わった時
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //print(windowWidth);

  if (isSmartPhone()) {
    //print("smartphone");
    blockWidth = windowWidth / 4;
    blockHeight = windowWidth / 4;
    blockTextSize = 150;
    keyTextSize = 100;
    xLines = [
      0,
      windowWidth / 4,
      windowWidth / 2,
      (windowWidth * 3) / 4,
      windowWidth,
    ];
  } else {
    //print("pc");
    blockWidth = 150;
    blockHeight = 150;
    blockTextSize = 70;
    keyTextSize = 50;
    xLines = [
      windowWidth / 2 - blockWidth * 2,
      windowWidth / 2 - blockWidth,
      windowWidth / 2,
      windowWidth / 2 + blockWidth,
      windowWidth / 2 + blockWidth * 2,
    ];
  }

  yJudgeLine = windowHeight * 0.8;
}

function draw() {
  //背景描画
  drawBG();

  frameColors = [
    color(63, 169, 245, framesPressed[0] * 15),
    color(255, 123, 172, framesPressed[1] * 15),
    color(122, 201, 67, framesPressed[2] * 15),
    color(245, 139, 63, framesPressed[3] * 15),
  ];

  //greatColor = color(255, 0, 0, framesPressed[0] * 30);

  //bpm[回/min]のペースで(フレームレートbase)
  if (frame % ((fps * 60) / jsonData.bpm) < 1) {
    //とりあえず点滅
    //fill("black");
    //rect(0, 0, windowWidth / 2 - blockWidth * 2, windowHeight);
    //rect(windowWidth / 2 + blockWidth * 2,0,windowWidth / 2 - blockWidth * 2,windowHeight);
  }

  //指定されたタイミングでブロック描画
  for (let i = 0; i < 4; i++) {
    drawLane(i);
  }

  if (frame > endingtime * fps) {
    //gameEnd = true;
    for (let i = 0; i < 4; i++) {
      resultArray[i][1] = arrayLanes[i].length - resultArray[i][0];
    }
    //window.location.href = "./result.html";

    createCanvas(0, 0);
    noLoop();
    drawResult();
  }

  if (gameEnd) {
    /*
    for (let i = 0; i < 4; i++) {
      resultArray[i][1] = arrayLanes[i].length - resultArray[i][0];
    }
    //window.location.href = "./result.html";

    createCanvas(0, 0);
    noLoop();
    drawResult();
    */
  }

  frame++;
}

//背景描画
function drawBG() {
  //背景リセット
  background("white");
  if (isSmartPhone()) {
    if (windowWidth >= 0.45 * windowHeight) {
      image(
        bgImage,
        0.5 * windowWidth - 0.225 * windowHeight,
        0,
        0.45 * windowHeight,
        0.8 * windowHeight
      );
    } else {
      image(
        bgImage,
        0,
        0.4 * windowHeight - (windowWidth * 8) / 9,
        windowWidth,
        (windowWidth * 16) / 9
      );
    }
  } else {
    if (windowHeight >= 4000 / 3) {
      image(bgImage, xLines[0], 0.4 * windowHeight - 1600 / 3, 600, 3200 / 3);
    } else {
      image(
        bgImage,
        xLines[0] + 300 - 0.225 * windowHeight,
        0,
        0.45 * windowHeight,
        0.8 * windowHeight
      );
    }
  }
  //image(bgImage, xLines[0], 0, xLines[4] - xLines[0], yJudgeLine);

  //枠線
  strokeWeight(1);
  stroke("black");
  for (let i = 0; i < 5; i++) {
    line(xLines[i], 0, xLines[i], windowHeight);
  }

  strokeWeight(4);
  stroke("black");
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
        //fill(greatColor);
        //textFont(greatFont);
        fill("red");
        textSize(keyTextSize);
        textAlign(CENTER);
        strokeWeight(0);
        text("Great!", (xLines[i] + xLines[i + 1]) / 2, windowHeight * 0.9);
      } else {
        //fill(greatColor);
        //textFont(greatFont);
        fill("red");
        textSize(keyTextSize);
        textAlign(CENTER);
        strokeWeight(0);
        text("miss..", (xLines[i] + xLines[i + 1]) / 2, windowHeight * 0.9);
      }
    }
  }

  strokeWeight(0);
  fill(frameColors[laneNum]);
  rect(xLines[laneNum], 0, blockWidth, windowHeight);

  for (let i = 0; i < arrayLanes[laneNum].length; i++) {
    if (
      startDelay * fps +
        (arrayLanes[laneNum][i][0] * (fps * 60)) / jsonData.bpm -
        (yJudgeLine + 50) / yVelocity <
      frame
    ) {
      let emoji;
      if (laneNum == 2) {
        emoji = emojis[2][i];
      } else {
        emoji = emojis[laneNum];
      }

      fill("red");
      noStroke();
      yBlock =
        yVelocity *
          (frame -
            startDelay * fps -
            (arrayLanes[laneNum][i][0] * (fps * 60)) / jsonData.bpm +
            (yJudgeLine + 50) / yVelocity) -
        100;
      textSize(blockTextSize);
      textAlign(CENTER);
      text(emoji, xLines[laneNum], yBlock, blockWidth, blockHeight);

      /*
      stroke("blue");
      strokeWeight(3);
      line(
        xLines[laneNum],
        yBlock + blockTextSize / 2,
        xLines[laneNum] + blockWidth,
        yBlock + blockTextSize / 2
      );
      */
    }
  }
}

//キーボード
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

//クリックを話したとき，指を離したときに実行される
function mouseClicked() {
  onPress = false;
}

//PC..クリックしたとき,スマホ..タップしたときと指を離したときに実行される
function mousePressed() {
  if (!isSmartPhone()) {
    for (let i = 0; i < 4; i++) {
      if (xLines[i] < mouseX && mouseX < xLines[i + 1]) {
        lanePressed(i);
      }
    }
  } else {
    if (!onPress) {
      for (let i = 0; i < 4; i++) {
        if (xLines[i] < mouseX && mouseX < xLines[i + 1]) {
          lanePressed(i);
        }
      }
      onPress = true;
    }
  }
}

function lanePressed(laneNum) {
  //framespressed = 3;
  framesPressed[laneNum] = 6;
  //print(laneNum);

  let great = false;
  for (let i = 0; i < arrayLanes[laneNum].length; i++) {
    if (
      abs(
        startDelay * fps +
          (arrayLanes[laneNum][i][0] * (fps * 60)) / jsonData.bpm -
          frame
      ) < 10
    ) {
      great = true;
    }
  }
  if (great) {
    isGreat[laneNum] = true;
    resultArray[laneNum][0] += 1;
    sampleSound.play();
  } else {
    isGreat[laneNum] = false;
  }
}

//ゲーム終了後結果を描画
function drawResult() {
  var parent = document.getElementById("parent");
  const tmpP = document.createElement("p");
  tmpP.innerHTML = "結果(デザイン，スタイリングはまだ)";
  parent.appendChild(tmpP);
  for (let i = 0; i < 5; i++) {
    const resultWrapperDiv = document.createElement("div");
    resultWrapperDiv.className = "result-wrapper";
    parent.appendChild(resultWrapperDiv);

    if (i === 0) {
      const laneNameP = document.createElement("p");
      laneNameP.className = "result-content";
      laneNameP.innerHTML = "レーン番号";
      resultWrapperDiv.appendChild(laneNameP);

      const greatTimesP = document.createElement("p");
      greatTimesP.className = "result-content";
      greatTimesP.innerHTML = "great";
      resultWrapperDiv.appendChild(greatTimesP);

      const missTimesP = document.createElement("p");
      missTimesP.className = "result-content";
      missTimesP.innerHTML = "miss";
      resultWrapperDiv.appendChild(missTimesP);
    } else {
      const laneNameP = document.createElement("p");
      laneNameP.className = "result-content";
      laneNameP.innerHTML = i;
      resultWrapperDiv.appendChild(laneNameP);

      const greatTimesP = document.createElement("p");
      greatTimesP.className = "result-content";
      greatTimesP.innerHTML = resultArray[i - 1][0];
      resultWrapperDiv.appendChild(greatTimesP);

      const missTimesP = document.createElement("p");
      missTimesP.className = "result-content";
      missTimesP.innerHTML = resultArray[i - 1][1];
      resultWrapperDiv.appendChild(missTimesP);
    }
  }

  /*
  p.id = "hoge";
  p.innerHTML = resultArray[0][1];
  var parent = document.getElementById("parent");
  parent.appendChild(p);
  */
}
