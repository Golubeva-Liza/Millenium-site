function modal(targetBtnSelector){
   const targetBtns = document.querySelectorAll(targetBtnSelector);
   const modal = document.querySelector('.modal');
   const closeBtn = modal.querySelector('#close');

   //появление модального окна
   targetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
         modal.classList.add('modal_active');
         document.body.style.overflowY = 'hidden';
         document.body.style.paddingRight = '16px';
         document.querySelector('.header').style.paddingRight = '16px';


         modal.addEventListener('click', closeModal, false);
      })
   })

   //закрытие модального окна по серой подложке
   function closeModal(e){
      if (e.target.classList.contains('row') || e.target.classList.contains('modal')){
         modal.classList.remove('modal_active');
         document.body.style.overflowY = 'scroll';
         document.body.style.paddingRight = 0;
         document.querySelector('.header').style.paddingRight = 0;
         // modal.removeEventListener('click', closeModal, false); - необязательно убирать, тк работает на modal
      }
      // console.log(e.target);
   }
   
   //закрытие модального окна по крестику
   closeBtn.addEventListener('click', () => {
      modal.classList.remove('modal_active');
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = 0;
      document.querySelector('.header').style.paddingRight = 0;
   });

}
export default modal;