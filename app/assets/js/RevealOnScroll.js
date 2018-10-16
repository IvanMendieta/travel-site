//testimonials scroll page
var featureItem = document.getElementsByClassName('feature-item');
  for( var i = 0; i < featureItem.length; i++ ){
      featureItem[i].classList.add('hide-items');
  };

function scrollItems() {

    if( window.pageYOffset > 1730 ) {
      // console.log(window.pageYOffset);
       for(var i = 0; i < featureItem.length; i++){
        featureItem[i].classList.add("hide-items--visible-items");
      }
    }else{
      for(var i = 0; i < testimonial.length; i++){
        testimonial[i].classList.remove("hide-items--visible-items");
      }
    }
};
//adding the addEventListener to the scrollitems
window.addEventListener('scroll', scrollItems);

//testimonials scroll page
var testimonial = document.getElementsByClassName('testimonial');
  for( var i = 0; i < testimonial.length; i++ ){
      testimonial[i].classList.add('hide-testimonial');
  };

  function scrollTestimonials() {

      if( window.pageYOffset > 2814 ) {
        // console.log(window.pageYOffset);
         for(var i = 0; i < testimonial.length; i++){
          testimonial[i].classList.add("hide-testimonial--visible-testimonial");
        }
      }
  };
  //adding the addEventListener to the scrollTestimonials
  window.addEventListener('scroll', scrollTestimonials);
