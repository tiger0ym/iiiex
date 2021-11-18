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
/*
//円グラフ(動かないver)
let resultData2 = JSON.parse(sessionStorage.getItem("resultJSON"));
let achieveRateDen2 = 0; //分母
let achieveRateNum2 = 0; //分子
for (let i = 0; i < 4; i++) {
  achieveRateDen2 += resultData2.great[i] + resultData2.miss[i];
  achieveRateNum2 += resultData2.great[i];
}
let achieveRate2 = Math.floor((achieveRateNum2 * 100) / achieveRateDen2);
var parent = document.getElementById("parent");
const resultGraphDiv = document.createElement("div");
resultGraphDiv.className = "result-graph";
resultGraphDiv.innerHTML = achieveRate2 + "%";
resultGraphDiv.style.backgroundImage =
  `conic-gradient(#26dd26 0% ` +
  achieveRate2 +
  `%, rgba(0, 0, 0, 0) ` +
  achieveRate2 +
  `% 100%)`;
parent.appendChild(resultGraphDiv);
*/
