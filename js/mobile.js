var introDiv = document.getElementsByClassName("intro");

if (window == window.parent) {
  introDiv[0].className = "btn intro not-embedded";
} else {
  introDiv[0].className = "btn intro embedded";
}
