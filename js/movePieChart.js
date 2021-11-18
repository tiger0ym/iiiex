let resultData = JSON.parse(sessionStorage.getItem("resultJSON"));
let achieveRateDen = 0; //分母
let achieveRateNum = 0; //分子
for (let i = 0; i < 4; i++) {
  achieveRateDen += resultData.great[i] + resultData.miss[i];
  achieveRateNum += resultData.great[i];
}
let achieveRate = Math.floor((achieveRateNum * 100) / achieveRateDen);

var ctx = document.getElementById("result-graph");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        backgroundColor: ["#26dd26", "rgba(0, 0, 0, 0"],
        borderWidth: 0,
        hoverBackgroundColor: ["#00ff00", "rgba(0, 0, 0, 0"],
        data: [achieveRate, 100 - achieveRate],
      },
    ],
  },
  options: {
    tooltips: {
      enabled: false,
    },
    maintainAspectRatio: false,
  },
});

//円グラフの中央に％を表示
var percentP = document.getElementById("percent");
percentP.innerHTML = achieveRate + "%";
