function sendForm (){
   const form = document.querySelector('.modal__form');
   const selector = document.querySelectorAll('input[type="tel"]');

   let im = new Inputmask("+7 (999) 999-99-99");
   im.mask(selector);

   let formData = new FormData(form);

   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
         console.log('отправлено');
      }
   }

   xhr.open('POST', 'mail.php', true);
   xhr.send(formData);

   form.reset();
}
export default sendForm;