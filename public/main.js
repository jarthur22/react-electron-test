const {BrowserWindow, app} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
require('@electron/remote/main').initialize();

createWindow = () => {
    const win = new BrowserWindow({
        width: 800, //dynamic based on screen size?
        height: 600, //dynamic based on screen size?
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false //need this for importing/requiring correctly
        }
    })

    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    process.platform !== 'darwin' && app.quit();
});

app.on('activate', () => {
    BrowserWindow.getAllWindows().length === 0 && createWindow();
})