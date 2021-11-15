var introDiv = document.getElementsByClassName("intro");
var gamestartDiv = document.getElementsByClassName("gamestart");
if (window == window.parent) {
  if (introDiv.length != 0) {
    introDiv[0].className = "btn intro not-embedded";
  }
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart not-embedded";
  }
} else {
  document.getElementById("message").innerHTML = `全画面表示にしてください`;
  if (introDiv.length != 0) {
    introDiv[0].className = "btn intro embedded";
  }
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart embedded";
  }
}
