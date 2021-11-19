const BGM = document.getElementById("BGM"); // <audio>
const btn = document.getElementById("BGMbtn"); // <button>

btn.addEventListener("click", () => {
  // pausedがtrue=>停止, false=>再生中
  if (!BGM.paused) {
    btn.innerHTML = "再生"; // 「再生ボタン」に切り替え
    BGM.pause();
    btn.style.color = "#e4823d";
    btn.style.backgroundColor = "#ffffff";
  } else {
    btn.innerHTML = "一時停止"; // 「一時停止ボタン」に切り替え
    BGM.play();
    btn.style.color = "#ffffff";
    btn.style.backgroundColor = "#e4823d";
  }
});
