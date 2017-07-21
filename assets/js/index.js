(function(window, document){
  var menu_control = document.querySelector('#hamburger')

  menu_control.addEventListener('click', toggleMenu, false)

  function toggleMenu() {
    var menu = document.querySelector('.ham_menu_nav')
    if ( !menu.classList.contains('ham_menu_visible') ) {
        menu.classList.add('ham_menu_visible')
    } else {
      menu.classList.remove('ham_menu_visible')
    }
  }

})(window, document)
