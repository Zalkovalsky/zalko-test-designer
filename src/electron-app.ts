import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 800});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
