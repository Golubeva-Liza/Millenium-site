function progressBar(){
   const parent = document.querySelector('.stages__row');
   const progressBar = document.querySelector('.progress-bar');
   const cards = document.querySelectorAll('.stage-card');
   const progressBarItems = progressBar.querySelectorAll('.progress-bar__item');
   const progressBarLine = progressBar.querySelector('.progress-bar__active-line');

   let i = 0;
   
   //+ проверка при запуске

   window.addEventListener('scroll', function() {

      const progressBarTop = progressBar.getBoundingClientRect().top
      
      if (progressBarTop == 155){
         const scroll = (progressBarLine.getBoundingClientRect().top + window.pageYOffset);//сколько прокрутили от верха документа
         const top = parent.offsetTop + document.querySelector('.stages').offsetTop;//расстояние от начала offsetParent до элемента stages__row
         //в данном случае, offsetParent - тег main, который расположен в самом верху страницы, так что равносильно началу документа
         //scroll - top = сколько пикселей проскролили. по итогу максимально это число равно высоте parent

         const scrollProcent = (Math.round((scroll - top) * 100 / parent.offsetHeight)) + '%';//сколько прокручено в процентах относительно высоты блока stages__row
         // console.log(`от верха ${scroll}`);
         // console.log(`топ родителя ${top}`);
         // console.log(`высота блока ${parent.offsetHeight}`);
         // console.log(scroll - top);
         // console.log(scrollProcent);
         progressBarLine.style.height = scrollProcent;

         cards.forEach((item, i) => {
            if (item.getBoundingClientRect().top <= progressBarTop + 150 && item.getBoundingClientRect().bottom > progressBarTop){
               // console.log(`скролбар ${item.getBoundingClientRect().top}`);
               // console.log(`прокручивается номер ${i+1}`);
               progressBarItems[i].classList.add('progress-bar__item_active');
            }
            if (item.getBoundingClientRect().top > progressBarTop + 150 && progressBarItems[i].classList.contains('progress-bar__item_active')){
               progressBarItems[i].classList.remove('progress-bar__item_active');
            }
         })
         

      }
      // console.log(`скролбар ${progressBar.getBoundingClientRect().top}`);
      // console.log(`карта ${cards[0].getBoundingClientRect().bottom}`);
      
      // while (i < 3) {
      //    alert( i );
      //    i++;
      // }
   });
   
}
export default progressBar;