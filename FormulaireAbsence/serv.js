// var sys = require('util'),
// 	http = require('http');
//
// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write("<h1>Hello World!</h1>")
// 	res.end("<h2>This is the end!</h2>");
// }).listen(3000, "127.0.0.1");
//
// console.log("Server running at http://127.0.0.1:3000/");


const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({width: 1800, height: 1200});

  mainWindow.loadURL(`/home/cwschlachter/Desktop/FormulaireAbsence/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
