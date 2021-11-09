let resultData = JSON.parse(sessionStorage.getItem("resultJSON"));
var parent = document.getElementById("parent");
console.log(resultData);

const tmpP = document.createElement("p");
//tmpP.innerHTML = "あなたのゲームスコア";
parent.appendChild(tmpP);

for (let i = 0; i < 5; i++) {
  const resultWrapperDiv = document.createElement("div");
  resultWrapperDiv.className = "result-wrapper";
  parent.appendChild(resultWrapperDiv);

  if (i === 0) {
    const laneNameP = document.createElement("p");
    laneNameP.className = "result-content";
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
    laneNameP.className = "result-content";
    laneNameP.innerHTML = i - 1;
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
