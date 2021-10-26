$.ajax({
  // 読み込みの設定
  type: "GET",
  url: "./data/result.json", // ファイルパス（相対パス）
  dataType: "json", // ファイル形式
  async: false, // 非同期通信フラグ
}).then(
  function (json) {
    // 読み込み成功時の処理
    console.log("読み込みに成功しました");
    console.log(json);
    json.forEach(function (data) {
      console.log(data);
    });
  },
  function () {
    // 読み込み失敗時の処理
    console.log("読み込みに失敗しました");
  }
);
