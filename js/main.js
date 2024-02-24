// загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
mask.remove();
  }, 600);
  });

  window.onload = function () {

    // /*Nav icon*/
    // const navBtn = document.querySelector('.nav-icon-btn');
    // const navIcon = document.querySelector('.nav-icon');
    // const nav = document.querySelector('.header__menu');
    
    // navBtn.onclick = function () {
    //     navIcon.classList.toggle('nav-icon_active'); 
    //     nav.classList.toggle('menu__tablet');
    //     document.body.classList.toggle('no-scroll');
    
    // }





//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,

//      // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 575px
//     575: {
//       slidesPerView: 2,
//       spaceBetween: 30
//     },
//     // when window width is >= 991px
//     991: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     }
//   },

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });






// // Считываем поле ввода
// const phoneInput = document.querySelector(".phone");
// // Считываем кнопку
// const btn = document.querySelector(".btn");

// // Создаем маску в инпуте
// const phoneMask = new IMask(phoneInput, {
//   mask: "+{7}(000)000-00-00",
// });

// // Обработчик события для инпута
// phoneInput.addEventListener("input", phoneInputHandler);
// // Обработчик события для кнопки
// btn.addEventListener("click", btnHandler);

// // Если ввели правлильно - кнопка активна
// function phoneInputHandler() {
//   if (phoneMask.masked.isComplete) {
//     btn.classList.add("btn_active");
//   } else {
//     btn.classList.remove("btn_active");
//   }
// }

// btn.addEventListener ("click", btnHandler);
// // Отправляем номер телефона
//   async function btnHandler(e) {
//     e.preventDefault();
//     console.log(phoneMask.masked.unmaskedValue);
//     // return await fetch("send_msg.php", {
//     //   method: "POST",
//     //   body: phoneMask.unmaskedValue,
//     // });
//   }




//   const footerYearEl = document.querySelector('.footer__year');
//   let today = new Date();
//   let year = today.getFullYear(); // 2023

//   footerYearEl.textContent = year;

}

  
