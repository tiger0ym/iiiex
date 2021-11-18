function isSmartPhone() {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
}

if (isSmartPhone()) {
  var imgD = document.getElementById("img-d");
  var imgF = document.getElementById("img-f");
  var imgJ = document.getElementById("img-j");
  var imgK = document.getElementById("img-k");

  imgD.setAttribute("src", "./image/laned_phone.png");
  imgF.setAttribute("src", "./image/lanef_phone.png");
  imgJ.setAttribute("src", "./image/lanej_phone.png");
  imgK.setAttribute("src", "./image/lanek_phone.png");
}
