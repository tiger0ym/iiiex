var replayDiv = document.getElementsByClassName("replay");
var resultDiv = document.getElementsByClassName("result");
var aaa = document.getElementById("wrapper");
if (window == window.parent) {
  replayDiv[0].className = "btn replay not-embedded";
  resultDiv[0].className = "btn result not-embedded";
} else {
  replayDiv[0].className = "btn replay embedded";
  resultDiv[0].className = "btn result embedded";
}

let resultData = JSON.parse(sessionStorage.getItem("resultJSON"));
let achieveRateDen = 0; //分母
let achieveRateNum = 0; //分子
for (let i = 0; i < 4; i++) {
  achieveRateDen += resultData.great[i] + resultData.miss[i];
  achieveRateNum += resultData.great[i];
}
let achieveRate = Math.floor((achieveRateNum * 100) / achieveRateDen);
var parent = document.getElementById("parent");
const resultGraphDiv = document.createElement("div");
resultGraphDiv.className = "result-graph";
resultGraphDiv.innerHTML = achieveRate + "%";
resultGraphDiv.style.backgroundImage =
  `conic-gradient(#26dd26 0% ` +
  achieveRate +
  `%, rgba(0, 0, 0, 0) ` +
  achieveRate +
  `% 100%)`;
parent.appendChild(resultGraphDiv);
