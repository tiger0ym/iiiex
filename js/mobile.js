var gamestartDiv = document.getElementsByClassName("gamestart");
var secTitleDiv = document.getElementsByClassName("sec-title");
var secContainWrapperDiv = document.getElementsByClassName(
  "sec-contain-wrapper"
);
if (window == window.parent) {
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart not-embedded";
  }
  for (let i = 0; i < 2; i++) {
    secTitleDiv[i].className = "sec-title not-embedded";
  }
  for (let i = 0; i < 2; i++) {
    secContainWrapperDiv[i].className = "sec-contain-wrapper not-embedded";
  }
} else {
  document.getElementById("message").innerHTML = `全画面表示にしてください`;
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart embedded";
  }
  for (let i = 0; i < 2; i++) {
    secTitleDiv[i].className = "sec-title embedded";
  }
  for (let i = 0; i < 2; i++) {
    secContainWrapperDiv[i].className = "sec-contain-wrapper embedded";
  }
}
