"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var logger = require('electron-log');
var mainWindow = null;
electron_1.app.on('ready', function () {
    logger.info('[app.ready] Creating new BrowserWindow');
    mainWindow = new electron_1.BrowserWindow({ width: 800, height: 800 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        logger.info('[mainWindow.closed] Removing window reference');
        mainWindow = null;
    });
});
electron_1.app.on('window-all-closed', function () {
    logger.info('[app.window-all-closed] All windows closed, killing app');
    electron_1.app.quit();
});
//# sourceMappingURL=electron-app.js.map