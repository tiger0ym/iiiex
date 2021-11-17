//button-tap
let showing = 0;

$("#btn-d").on("click", function () {
  showing = 0;
  document.getElementById("img-d").style.display = "block";
  document.getElementById("img-f").style.display = "none";
  document.getElementById("img-j").style.display = "none";
  document.getElementById("img-k").style.display = "none";
  document.getElementById("caption-d").style.display = "block";
  document.getElementById("caption-f").style.display = "none";
  document.getElementById("caption-j").style.display = "none";
  document.getElementById("caption-k").style.display = "none";
});
$("#btn-f").on("click", function () {
  showing = 1;
  document.getElementById("img-d").style.display = "none";
  document.getElementById("img-f").style.display = "block";
  document.getElementById("img-j").style.display = "none";
  document.getElementById("img-k").style.display = "none";
  document.getElementById("caption-d").style.display = "none";
  document.getElementById("caption-f").style.display = "block";
  document.getElementById("caption-j").style.display = "none";
  document.getElementById("caption-k").style.display = "none";
});
$("#btn-j").on("click", function () {
  showing = 2;
  document.getElementById("img-d").style.display = "none";
  document.getElementById("img-f").style.display = "none";
  document.getElementById("img-j").style.display = "block";
  document.getElementById("img-k").style.display = "none";
  document.getElementById("caption-d").style.display = "none";
  document.getElementById("caption-f").style.display = "none";
  document.getElementById("caption-j").style.display = "block";
  document.getElementById("caption-k").style.display = "none";
});
$("#btn-k").on("click", function () {
  showing = 3;
  document.getElementById("img-d").style.display = "none";
  document.getElementById("img-f").style.display = "none";
  document.getElementById("img-j").style.display = "none";
  document.getElementById("img-k").style.display = "block";
  document.getElementById("caption-d").style.display = "none";
  document.getElementById("caption-f").style.display = "none";
  document.getElementById("caption-j").style.display = "none";
  document.getElementById("caption-k").style.display = "block";
});
