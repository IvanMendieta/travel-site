//method 1
function OpenCloseModal(e){
  e.preventDefault();
  // console.log('its worling');
  var modal = document.querySelector('.modal');
  // modal.classList.toggle('modal__modalOpen');
    if( modal.classList.contains('modal__modalOpen')){
      modal.classList.remove('modal__modalOpen');
    }else{
      modal.classList.add('modal__modalOpen');
    }
};
//adding addEventListener to all bts when click on them to show the modal contact
var openModal = document.getElementsByClassName('btnModalOPen');
  for( var i = 0; i < openModal.length; i++ ){
      openModal[i].addEventListener('click', OpenCloseModal);
  }

//function for scape key to press to make sure the modal contact is close
document.addEventListener('keyup', function(e){

  if( e.keyCode == 27 ){
      //calling the function to close the modal
      OpenCloseModal(e);
  }

});

  // method 2
  // var openModal = document.getElementsByClassName('btnModalOPen');
  //   for( var i = 0; i < openModal.length; i++ ){
  //       openModal[i].addEventListener('click', function(e){
  //         e.preventDefault();
  //         // console.log('its worling');
  //         var modal = document.querySelector('.modal');
  //         // modal.classList.toggle('modal__modalOpen');
  //           if( modal.classList.contains('modal__modalOpen')){
  //             modal.classList.remove('modal__modalOpen');
  //           }else{
  //             modal.classList.add('modal__modalOpen');
  //           }
  //       });
  //   };




// method 3
// var elModal = document.querySelector('.modal');
//
//   function closeOpenModal(e){
//       e.preventDefault();
//       if( elModal.classList.contains('modal__modalClose') ){
//           elModal.classList.remove('modal__modalClose');
//       }else{
//           elModal.classList.add('modal__modalOpen');
//       }
//   };
//
// var closeModal = document.getElementsByClassName('btnModalOPen');
//   for( var i = 0; i < closeModal.length; i++ ){
//     closeModal[i].addEventListener('click', closeOpenModal);
//   }
//
// function closeXOpenModal(e){
//   e.preventDefault();
//
//     if( elModal.classList.contains('modal__modalOpen') ){
//         elModal.classList.remove('modal__modalOpen');
//     }else{s
//         elModal.classList.add('modal__modalClose');
//     }
// };
// var closeXModal = document.querySelector('.modal__close');
// closeXModal.addEventListener('click', closeXOpenModal);
