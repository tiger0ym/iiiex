var replayDiv = document.getElementsByClassName("replay");
var resultDiv = document.getElementsByClassName("result");
var aaa = document.getElementById("wrapper");
console.log(replayDiv[0]);
console.log(aaa);
if (window == window.parent) {
  replayDiv[0].className = "btn replay not-embedded";
  resultDiv[0].className = "btn result not-embedded";
} else {
  replayDiv[0].className = "btn replay embedded";
  resultDiv[0].className = "btn result embedded";
}
