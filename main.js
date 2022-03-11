const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 768
    })
    win.maximize()
    win.loadFile('html/index.html')
}

app.whenReady().then(() => {
    createWindow()
})
