const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    //create browser window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'img/favicon.ico'})
    //load index
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

//run the create window function
app.on('ready', createWindow);

//quit when all windows closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

// C:\Users\Chris Wong\Documents\Projects\sysinfoapp