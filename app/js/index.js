var hlcolor = '#4db082';
var menudisplay = false;
const element = document.getElementById('textarea');
element.addEventListener('DOMSubtreeModified', saveLocal);

function addFocusOnEnd() {
  let p = document.getElementById('textarea');
  let s = window.getSelection();
  let r = document.createRange();
  r.setStart(p, p.childElementCount);
  r.setEnd(p, p.childElementCount);
  s.removeAllRanges();
  s.addRange(r);
}

function copiarTxt(el) {
  let p = document.getElementById('textarea');
  let s = window.getSelection();
  let r = document.createRange();
  r.setStart(p, p.childElementCount);
  r.setEnd(p, p.childElementCount);
  s.removeAllRanges();
  s.addRange(r);
  document.execCommand('selectAll', false, null);
  document.execCommand('copy');
  s.removeAllRanges();
  s.addRange(r);
  let elo = document.querySelector(':focus');
  if (elo) elo.blur();
  alert("Texto copiado para a clipboard.")
}

window.onload = function loadLocal() {
  document.getElementById('textarea').innerHTML = localStorage.getItem('textarea');

  if (localStorage.getItem('darkmode') === null) {
    localStorage.setItem('darkmode', "true");
    document.getElementById("checktema").checked = true;
  }
  else {
    if (localStorage.getItem('darkmode') == "true") {
      document.getElementById("checktema").checked = true;
    }
    else {
      document.getElementById("checktema").checked = false;
    }


  }
  mudaTema();

}

function saveLocal() {
  var content = document.getElementById('textarea').innerHTML;
  localStorage.setItem('textarea', content);
}
function resetaTxt() {
  document.getElementById('textarea').innerHTML = '';
  this.tiraDisplay();
}
function executaComando() {

  if (arguments.length == 1) {
    document.execCommand(arguments[0], false, null);
  }
  if (arguments.length == 3) {
    document.execCommand(arguments[0], arguments[1], arguments[2]);
    let a = arguments[0];
    trocaCorHl(a);
  }
  addFocusOnEnd()
}
function trocaCorHl(a) {

  if (a == 'HiliteColor' && this.hlcolor == '#4db082') {
    this.hlcolor = 'transparent';
  } else
    if (a == 'HiliteColor' && this.hlcolor == 'transparent') {
      this.hlcolor = '#4db082';
    }
}

function mudaDisplay() {

  var menuop = document.getElementById('menuoptions');
  if (!this.menudisplay) {
    menuop.style.display = 'block';
    document.getElementById('configicon').style.display = 'none';
    this.menudisplay = !this.menudisplay;

  }
  else {
    menuop.classList.add('slideout');
    setTimeout(function () {
      menuop.style.display = 'none';
      document.getElementById('configicon').style.display = 'block';
      menuop.classList.remove('slideout');
      this.menudisplay = !this.menudisplay;
    }, 190);
  }
  menuop.focus();

}
function tiraDisplay() {
  var menuop = document.getElementById('menuoptions');
  if (this.menudisplay) {
    menuop.classList.add('slideout');
    setTimeout(function () {
      menuop.style.display = 'none';
      document.getElementById('configicon').style.display = 'block';
      menuop.classList.remove('slideout');
      this.menudisplay = !this.menudisplay;
    }, 200);
  }
}
function permiteTab() {

  if (event.keyCode == 9) {
    event.preventDefault();
    document.execCommand('indent', false, null);
  }
}
function mudaTema() {
  localStorage.setItem('darkmode', document.getElementById("checktema").checked);
  let root = document.querySelector('body');
  if (!document.querySelector('.switch input').checked) {

    root.style.setProperty('--bgdk', '#d7d7d7');
    root.style.setProperty('--textareabg', '#f6f6f6');
    root.style.setProperty('--superiorbar', '#d9d9d9');
    root.style.setProperty('--fontcolor', '#252525');
  }
  else {
    root.style.setProperty('--bgdk', '#21222C');
    root.style.setProperty('--textareabg', '#282A36');
    root.style.setProperty('--superiorbar', '#191A21');
    root.style.setProperty('--fontcolor', '#E4E4E4');
  }
}