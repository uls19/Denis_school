// загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
});

window.onload = function () {

  /*Nav icon*/
  const burgerEl = document.querySelector('.nav-icon-btn');
  const navIcon = document.querySelector('.nav-icon');
  const menuEl = document.querySelector('.header__menu-up');

// вызываем элемент и скрываем если клик был за его пределами

  const toggleMenu = function () {
  menuEl.classList.toggle("menu_show");
  navIcon.classList.toggle('nav-icon_active');
  document.body.classList.toggle('no-scroll');

}

burgerEl.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menuEl || menuEl.contains(target);
  const its_btnMenu = target == burgerEl;
  const menu_is_active = menuEl.classList.contains("menu_show");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});


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

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
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

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".reviews-button-next",
      prevEl: ".reviews-button-prev",
    },
    mousewheel: false,
    keyboard: true,
  });

  document.querySelectorAll('.questions__link').forEach((item) => {
    item.addEventListener('click', () => {
item.parentNode.classList.toggle('questions__item_active')
    })
  });

  /* Yandex Map */

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  
  ymaps.ready(init);
  function init() {
    // Создание карты.
    const map = new ymaps.Map('map', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.856341, 37.493847],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });

    const myPlacemark = new ymaps.Placemark(
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


  //   const footerYearEl = document.querySelector('.footer__year');
  //   let today = new Date();
  //   let year = today.getFullYear(); // 2023

  //   footerYearEl.textContent = year;

}


