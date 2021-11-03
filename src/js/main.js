import modal from './modules/modal';
import menu from './modules/menu';
import progressBar from './modules/progressBar';
import sertifSlider from './modules/sertifSlider';

document.addEventListener('DOMContentLoaded', () => {
   modal("#orderСall");
   menu("[data-menu-close]");
   progressBar();
   sertifSlider();

   window.addEventListener('scroll', function() {
      if (window.pageYOffset != 0){
         document.querySelector('.header').classList.add('header_scroll');
      }
      else{
         document.querySelector('.header').classList.remove('header_scroll');
      }
   });
   
});