const { app, BrowserWindow, ipcMain } = require('electron');
let mainWindow = null;
app.on('ready', () => {
  console.log('Aplicação Iniciada!');
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
  app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      width: 300,
      height: 200,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true
      },
      frame: false
    });
    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
    mainWindow.close();
  }
  sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
  sobreWindow.close();
});