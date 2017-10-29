import {app, BrowserWindow} from 'electron';

const logger = require('electron-log');

let mainWindow: any = null;

app.on('ready', () => {

    logger.info('[app.ready] Creating new BrowserWindow');
    mainWindow = new BrowserWindow({ width: 800, height: 800});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', () => {
        logger.info('[mainWindow.closed] Removing window reference');
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    logger.info('[app.window-all-closed] All windows closed, killing app');
    app.quit();
});

