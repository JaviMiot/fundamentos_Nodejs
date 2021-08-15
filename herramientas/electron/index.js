const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready',createWindow)

function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height: 900,
    })

    mainWindow.loadFile('./index.html')
}