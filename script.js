function scroller() {
  if (scrollY > 0) naviguer.classList.add('scroll')
  else naviguer.classList.remove('scroll')
}

function onMenu() {
  if (document.body.classList.contains('menu-etendu'))
    document.body.classList.remove('menu-etendu')
  else document.body.classList.add('menu-etendu')
}