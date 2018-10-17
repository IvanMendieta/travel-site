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

  function menuLink(){
      var primaryBeginning = document.querySelector('.beginning');
      var primaryFeatures = document.querySelector('.features');
      var primaryTestimonials = document.querySelector('.testimonials');

      //if the scrollier goes down to 192 change from ligth to dark style..
      if( window.pageYOffset > 730 ){
        primaryBeginning.classList.add('primary-nav--fontChange');

      }if(window.pageYOffset > 2162 || window.pageYOffset < 730 ){
        primaryBeginning.classList.remove('primary-nav--fontChange');

      }if(window.pageYOffset > 2162 ){
        primaryFeatures.classList.add('primary-nav--fontChange');

      }if(window.pageYOffset > 3000 || window.pageYOffset < 2162  ){
        primaryFeatures.classList.remove('primary-nav--fontChange');

      }if( window.pageYOffset > 3000 ){
        console.log(pageYOffset);
        primaryTestimonials.classList.add('primary-nav--fontChange');

      }if(window.pageYOffset > 3186 || window.pageYOffset < 3000 ){
        primaryTestimonials.classList.remove('primary-nav--fontChange');
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
