document.querySelector('.site-header__menu-icon').addEventListener('click', function(event){
  event.preventDefault();

  /* grab the menu content and apply the toggle to the class site-header--small for
     small screens */
  var menu = document.querySelector('.site-header__menu-content');
    menu.classList.toggle('site-header--small');
    // if (menu.classList.contains('site-header--small')) {
    //   menu.classList.remove('site-header--small');
    // } else {
    //   menu.classList.add('site-header--small');
    // }


  //grabing the site-header to change the background and apply some css rules
  var menuBackground = document.querySelector('.site-header');
    menuBackground.classList.toggle('site-header--background');

  //grabing the site header menu icon and apply a new style. to close and open
  //try the other method with if else not contain or remove but pure toggle

  var menuIcon = document.querySelector('.site-header__menu-icon');
    if (menuIcon.classList.contains('site-header__menu-icon--close-x')) {
      menuIcon.classList.remove('site-header__menu-icon--close-x');
    } else {
      menuIcon.classList.add('site-header__menu-icon--close-x');
    }
});
