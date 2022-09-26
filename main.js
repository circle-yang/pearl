// /*
//  * @Description:
//  * @Author: yanghuan
//  * @Date: 2022-09-25 22:50:38
//  * @LastEditTime: 2022-09-25 23:11:44
//  * @Last Modified by: yanghuan
//  * @packageDocumentation:
//  * @module:
//  * @category:
//  */
// // Modules to control application life and create native browser window

// electon支持：process.platform:win32、linux、darwin
// console.log(process.platform)

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  ipcMain.handle('ping', (res) => {
    return 'pong'
  })

  win.loadFile('index.html')
}

// 使用.on()来监听Node.js事件
// app.on("ready").then(() => {
//   createWindow()
// })

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    console.log('length', BrowserWindow.getAllWindows().length)
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    console.log('退出')
    app.quit()
  }
})

// const path = require('path')

// function createWindow () {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   // and load the index.html of the app.
//   mainWindow.loadFile('index.html')

//   // Open the DevTools.
//   // mainWindow.webContents.openDevTools()
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', function () {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') app.quit()
// })

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.
