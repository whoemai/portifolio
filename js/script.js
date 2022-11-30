let menu = document.getElementById("itens");

function mudouTamanho() {
  if (window.innerWidth >= 960) {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

function clickMenu() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}