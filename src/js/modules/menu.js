function menu (targetBtnSelector){
   const menu = document.querySelector('.header__menu');
   const hamburger =  document.querySelector('#hamburger');
   const targetBtns = document.querySelectorAll(targetBtnSelector);
   targetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
         if (btn.classList.contains('header__hamburger')){
            btn.classList.toggle('header__hamburger_active');
         }
         if (btn.classList.contains('header__close-menu-btn')){
            hamburger.classList.remove('header__hamburger_active');
         }
         menu.classList.toggle('header__menu_active');
      })
   })
}
export default menu;