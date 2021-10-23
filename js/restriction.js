function disableScroll(event) {
  event.preventDefault();
}

//スクロール無効(iOS)
document.addEventListener("touchmove", disableScroll, { passive: false });

//ポップアップ無効(Android)
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
