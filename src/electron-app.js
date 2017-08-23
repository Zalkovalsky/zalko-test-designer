"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var mainWindow = null;
electron_1.app.on('ready', function () {
    mainWindow = new electron_1.BrowserWindow({ width: 800, height: 800 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
//# sourceMappingURL=electron-app.js.map