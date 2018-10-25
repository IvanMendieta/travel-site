function stickyHeader(){
  //grab the site header section
  var sectionHeader = document.querySelector('.site-header');
  //grab the btn top
  var btnTop = document.querySelector('.btn');
    //if the scrollier goes down to 192 change from ligth to dark style..
    if( window.pageYOffset > 192 ){
      // console.log(window.pageYOffset);
      sectionHeader.classList.add('site-header--dark');
      btnTop.classList.add('btn--background');
    }
    else{
      sectionHeader.classList.remove('site-header--dark');
      btnTop.classList.remove('btn--background');
    }

};
//add an addEventListener to the stickyheader
window.addEventListener('scroll', stickyHeader);

  function menuLink(event){
      var sections = document.querySelectorAll('.primary-nav a');
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      for( var i = 0; i < sections.length; i++ ){
        var currLink = sections[i];
        var val = currLink.getAttribute('href');
        var refElement = document.querySelector(val);
          if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos )){
            currLink.classList.add('primary-nav--fontChange');
          }else{
            currLink.classList.remove('primary-nav--fontChange');
          }
      }
  };
  //add an addEventListener to the stickyheader
  window.addEventListener('scroll', menuLink);

//go to beginning section
var beginninSection = document.getElementById('mybeginning-section');
beginninSection.onclick = function(e){
  e.preventDefault();
  var ourBeginning = document.getElementById('our-beginning');
  ourBeginning.scrollIntoView({
    behavior: "smooth",
    easing: 'swing'
  });
};
