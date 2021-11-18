let resultData = JSON.parse(sessionStorage.getItem("resultJSON"));
var parent = document.getElementById("parent");
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
    greatTimesP.innerHTML = resultData.great[i - 1];
    resultWrapperDiv.appendChild(greatTimesP);

    const missTimesP = document.createElement("p");
    missTimesP.className = "result-content";
    missTimesP.innerHTML = resultData.miss[i - 1];
    resultWrapperDiv.appendChild(missTimesP);
  }
}
