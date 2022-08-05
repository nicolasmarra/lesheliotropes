window.addEventListener('scroll', scroller)
scroller()
function scroller() {
  afficherScroll()
  backToTop()
  
  activerMenu(home)
  activerMenu(description)
  activerMenu(citeu)
  activerMenu(demande)
}

function afficherScroll() {
  if (scrollY != 0) naviguer.classList.add('scroll')
  else naviguer.classList.remove('scroll')
}

function backToTop() {
  if (scrollY > 400) backToTopButton.classList.add('show')
  else backToTopButton.classList.remove('show')
}

function onMenu() {
  if (document.body.classList.contains('menu-etendu'))
    document.body.classList.remove('menu-etendu')
  else document.body.classList.add('menu-etendu')
}

function fermerMenu() {
  document.body.classList.remove('menu-etendu')
}

function activerMenu(section) {
  //la ligne ciblée
  const ligne = scrollY + innerHeight / 2

  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute('id')}]`
  )

  menuElement.classList.remove('active')

  /* limite de la section
   on vérifie si le haut de la section est inférieure à la ligne ciblée et si la fin de la section est supérieure à la ligne ciblée */
  if ((ligne >= section.offsetTop) && !((section.offsetTop + section.offsetHeight) <= ligne))
    menuElement.classList.add('active')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .infos, 
#description,
#description header,
#description .carte,
#citeu,
#citeu header,
#citeu .contenu`)
