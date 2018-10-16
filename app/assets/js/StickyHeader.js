function stickyHeader(){
  //grab the site header section
  var sectionHeader = document.querySelector('.site-header');
  //grab the btn top
  var btnTop = document.querySelector('.btn');

    //if the scrollier goes down to 192 change from ligth to dark style..
    if( window.pageYOffset > 192 ){
      sectionHeader.classList.add('site-header--dark');
      btnTop.classList.add('btn--background');

    }else{
      sectionHeader.classList.remove('site-header--dark');
      btnTop.classList.remove('btn--background');

    }

};
//add an addEventListener to the stickyheader
window.addEventListener('scroll', stickyHeader);
