const { ipcRenderer, shell } = require('electron');

let fecharSobre = document.querySelector('#fechar-sobre');
let linkTwitter = document.querySelector('#link-twitter');

fecharSobre.addEventListener('click', () => {
  ipcRenderer.send('fechar-janela-sobre');
});

linkTwitter.addEventListener('click', () => {
  shell.openExternal("https://twitter.com/_victorldb");
});