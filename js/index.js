if (window == window.parent) {
  document.getElementById(
    "message"
  ).innerHTML = `スマホの方は<a href="./mobile.html">こちら</a>`;
} else {
  document.getElementById("message").innerHTML =
    "右下のボタンから全画面にしてください";
}
