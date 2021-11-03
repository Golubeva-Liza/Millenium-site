
function sertifSlider (){
   window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth < 765 && !document.querySelector('.certificates__wrapper').classList.contains('slick-slider')){
         $('.certificates__wrapper').slick({
            dots: true,
            variableWidth: true
         });
      } 
      else if (document.documentElement.clientWidth > 765 && document.querySelector('.certificates__wrapper').classList.contains('slick-slider')) {
         $('.certificates__wrapper').slick('unslick');
      }
      
      if (document.documentElement.clientWidth < 470 && document.querySelector('.slick-arrow').style.display == 'block') {
         console.log('ffff');
         document.querySelectorAll('.slick-arrow').forEach(button => {button.style.display = 'none';});
      } else if (document.documentElement.clientWidth > 470 && document.querySelector('.slick-arrow').style.display == 'none') {
         document.querySelectorAll('.slick-arrow').forEach(button => {button.style.display = 'block';});
      }
      // 765px
      // console.log(document.documentElement.clientWidth);
   })
   $('.certificates__wrapper').slick({
      dots: true,
   });
}
export default sertifSlider;