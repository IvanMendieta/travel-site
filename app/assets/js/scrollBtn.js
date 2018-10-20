//function to show and hide the btn scroller
window.onscroll = function(e){
  e.preventDefault();
  var scrollBtn = document.querySelector('.scrollBtn-section');

    if( window.pageYOffset > 50 ){
      scrollBtn.classList.add('scrollBtn-section--visibleBtn');
    }else{
      scrollBtn.classList.remove('scrollBtn-section--visibleBtn');
    }
};

var btnTop = document.getElementById('scrollBtn');
btnTop.onclick = function(e){
  e.preventDefault();
  var topscroll = document.getElementById('topscroll');
  topscroll.scrollIntoView({
    behavior: "smooth",
    easing: 'swing',
    offset: {top: 0, left: 0}
  });
};
