var gamestartDiv = document.getElementsByClassName("gamestart");
var secTitleDiv = document.getElementsByClassName("sec-title");
var secContainWrapperDiv = document.getElementsByClassName(
  "sec-contain-wrapper"
);
console.log("aaa");
if (window === window.parent) {
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart not-embedded";
  }
  secTitleDiv[0].className = "sec-title not-embedded";
  secContainWrapperDiv[0].className = "sec-contain-wrapper not-embedded";
  /*
  for (let i = 0; i < 2; i++) {
    secTitleDiv[i].className = "sec-title not-embedded";
  }
  for (let i = 0; i < 2; i++) {
    secContainWrapperDiv[i].className = "sec-contain-wrapper not-embedded";
  }
  */
} else {
  //document.getElementById("message").innerHTML = `全画面表示にしてください`;
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart embedded";
  }
  secTitleDiv[0].className = "sec-title embedded";
  secContainWrapperDiv[0].className = "sec-contain-wrapper embedded";
  /*
  for (let i = 0; i < 2; i++) {
    secTitleDiv[i].className = "sec-title embedded";
  }
  for (let i = 0; i < 2; i++) {
    secContainWrapperDiv[i].className = "sec-contain-wrapper embedded";
  }
  */
}
