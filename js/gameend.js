var replayDiv = document.getElementsByClassName("replay");
var resultDiv = document.getElementsByClassName("result");
var aaa = document.getElementById("wrapper");
if (window == window.parent) {
  replayDiv[0].className = "btn replay not-embedded";
  resultDiv[0].className = "btn result not-embedded";
} else {
  replayDiv[0].className = "btn replay embedded";
  resultDiv[0].className = "btn result embedded";
}

let resultData2 = JSON.parse(sessionStorage.getItem("resultJSON"));
var parent = document.getElementById("result-parent");
for (let i = 0; i < 5; i++) {
  const resultWrapperDiv = document.createElement("div");
  resultWrapperDiv.className = "result-wrapper";
  parent.appendChild(resultWrapperDiv);

  if (i === 0) {
    const laneNameP = document.createElement("p");
    laneNameP.className = "result-content1";
    //laneNameP.innerHTML = "レーン番号";
    resultWrapperDiv.appendChild(laneNameP);

    const greatTimesP = document.createElement("p");
    greatTimesP.className = "result-content";
    greatTimesP.innerHTML = "great";
    resultWrapperDiv.appendChild(greatTimesP);

    const missTimesP = document.createElement("p");
    missTimesP.className = "result-content";
    missTimesP.innerHTML = "miss";
    resultWrapperDiv.appendChild(missTimesP);
  } else {
    const laneNameP = document.createElement("p");
    laneNameP.className = "result-content1";
    //laneNameP.innerHTML = i - 1;
    if (i === 1) {
      laneNameP.innerHTML = `D（1列目）：外出`;
    } else if (i === 2) {
      laneNameP.innerHTML = `F（2列目）：食事`;
    } else if (i === 3) {
      laneNameP.innerHTML = `J（3列目）：活動`;
    } else if (i === 4) {
      laneNameP.innerHTML = `K（4列目）：睡眠`;
    }
    resultWrapperDiv.appendChild(laneNameP);
    const greatTimesP = document.createElement("p");
    greatTimesP.className = "result-content";
    greatTimesP.innerHTML = resultData2.great[i - 1];
    resultWrapperDiv.appendChild(greatTimesP);

    const missTimesP = document.createElement("p");
    missTimesP.className = "result-content";
    missTimesP.innerHTML = resultData2.miss[i - 1];
    resultWrapperDiv.appendChild(missTimesP);
  }
}
