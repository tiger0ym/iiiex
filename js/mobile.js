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
  if (introDiv.length != 0) {
    introDiv[0].className = "btn intro embedded";
  }
  if (gamestartDiv.length != 0) {
    gamestartDiv[0].className = "btn gamestart embedded";
  }
}
