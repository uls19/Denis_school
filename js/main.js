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

  /* Slider our-team*/
  const swiper1 = new Swiper(".our-teamSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 575px
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: ".our-button-next",
      prevEl: ".our-button-prev",
    },
    mousewheel: false,
    keyboard: false,
  });


  /* Slider reviews*/
  const swiper2 = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 575px
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      },

      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },

    navigation: {
      nextEl: ".reviews-button-next",
      prevEl: ".reviews-button-prev",
    },
    mousewheel: false,
    keyboard: true,
  });

  /*Yandex Map*/

  /* Yandex Map */

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var map = new ymaps.Map('map', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.856341, 37.493847],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
      [55.856392292351394, 37.49436198412817],
      {
        balloonContent: `
				<div class="balloon">
					<div class="balloon__address">м. Речной вокзал, ул. Лавочкина, 34</div>
					<div class="balloon__contacts">
						<a href="tel:+74951424259">+7 (495) 142-42-59</a>
					</div>
				</div>
			`,
      },

      //Вставляем свою иконку
      // {
      // 	iconLayout: 'default#image',
      // 	iconImageHref: './image/map/location-pin.svg',
      // 	iconImageSize: [40, 40],
      // 	iconImageOffset: [-20, -40],
      // }
    );

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип

    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    // добавляем объекты на карту

    map.geoObjects.add(myPlacemark);
    //отображение  balloonContent при загрузке
    // myPlacemark.balloon.open();

  }



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


