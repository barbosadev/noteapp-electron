const { ipcRenderer } = require('electron');

let fecharSobre = document.querySelector('#fechar-sobre');

fecharSobre.addEventListener('click', () => {
  ipcRenderer.send('fechar-janela-sobre');
});