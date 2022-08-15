// アプリケーション作成用のモジュールを読み込み
const { app, BrowserWindow } = require("electron");

// メインウィンドウ
let mainWindow = null;

const createWindow = () => {
  // メインウィンドウを作成
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // メインウィンドウに表示するHTMLを指定
  mainWindow.loadFile("index.html");
  // Chromiumのディベロッパーツールの起動
  mainWindow.webContents.openDevTools();
  // メインウィンドウが閉じられた時の処理
  mainWindow.on("close", () => {
    mainWindow = null;
  });
}

// アプリケーションの初期化が完了した時の処理
/*app.on("ready", () => {
  createWindow();
});*/
// Promiseを使う場合はwhenReady()
app.whenReady().then(() => {
  createWindow();
});

// 全てのウィンドウが閉じられた時
app.on("window-all-closed", () => {
  // macos以外はアプリケーションを終了させる
  if (process.platform !== "darwin") {
    app.quit();
  }
});