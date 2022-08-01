function scroller() {
    if (scrollY != 0) naviguer.classList.add('scroll')
    else naviguer.classList.remove('scroll')
  }
  
  function ouvrirMenu() {
    document.body.classList.add('menu-etendu')
  }
  
  function fermerMenu() {
    document.body.classList.remove('menu-etendu')
  }
  