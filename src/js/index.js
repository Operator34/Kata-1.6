import '../scss/style.scss'

console.log('Works!')

//Main-style-js
const mediaQuery_320px = window.matchMedia(
  '(min-width: 320px) and (max-width: 767px)'
)
const mediaQuery_768px = window.matchMedia(
  '(min-width: 768px) and (max-width: 1120px)'
)
const mediaQuery_1121px = window.matchMedia('(min-width: 1121px)')

const buttonDescriptionReadMore = document.querySelector(
  '.description-read-more__button-read-more'
)
const buttonDescriptionHiddenMore = document.querySelector(
  '.description-read-more__button-hidden-more'
)
const descriptionForAll = document.querySelector(
  '.description-read-more__for-all'
)
const descriptionForTablet = document.querySelector(
  '.description-read-more__for-tablet'
)
const descriptionForDesktop = document.querySelector(
  '.description-read-more__for-desktop'
)
const mainContainer = document.querySelector('.main-container')

buttonDescriptionReadMore.addEventListener('click', function (evt) {
  console.log('buttonDescriptionReadMore')
  descriptionForTablet.classList.add('show')
  descriptionForDesktop.classList.add('show')
  buttonDescriptionReadMore.classList.add('hidden')
  buttonDescriptionHiddenMore.classList.remove('hidden')
})

buttonDescriptionHiddenMore.addEventListener('click', function (evt) {
  console.log('buttonDescriptionHiddenMore')
  if (mediaQuery_320px) {
    descriptionForTablet.classList.remove('show')
    descriptionForDesktop.classList.remove('show')
  }
  if (mediaQuery_768px) {
    descriptionForDesktop.classList.remove('show')
  }
  buttonDescriptionHiddenMore.classList.add('hidden')
  buttonDescriptionReadMore.classList.remove('hidden')
})
//Конец main-style-js

//Функция показать для кнопки показать все
const listenerButtonReadMore = (
  buttonReadMore,
  buttonHidden,
  allSliderElement,
  userEvent
) => {
  buttonReadMore.addEventListener(userEvent, function (evt) {
    evt.preventDefault()
    buttonReadMore.classList.add('hidden')
    buttonHidden.classList.remove('hidden')
    for (let i = 0; i < allSliderElement.length; i++) {
      allSliderElement[i].classList.add('show')
    }
  })
}
//Функция скрыть для кнопки скрыть
const listenerButtonHidden = (
  buttonHidden,
  buttonReadMore,
  sliderElement,
  userEvent
) => {
  buttonHidden.addEventListener(userEvent, function () {
    buttonHidden.classList.add('hidden')
    buttonReadMore.classList.remove('hidden')
    for (let i = 0; i < sliderElement.length; i++) {
      sliderElement[i].classList.remove('show')
    }
  })
}

//(1)Кнопка показать все, скрыть бренды
const buttonReadMoreBrand = document.querySelector('.swiper-brands__read-more')
const buttonHiddenBrand = document.querySelector('.swiper-brands__hidden-more')
const allSliderElementBrand = document.querySelectorAll(
  '.swiper-brands__swiper-slide'
)

let sliderElementBrandHiddenShow = []
let sliderElementOtherTechnicHiddenShow = []
const a = 0

if (mediaQuery_768px.matches) {
  sliderElementBrandHiddenShow = document.querySelectorAll(
    '.swiper-brands__swiper-slide:nth-last-child(-n+5)'
  )
  sliderElementOtherTechnicHiddenShow = document.querySelectorAll(
    '.swiper-other-technic__swiper-slide:nth-last-child(-n+7)'
  )
}
if (mediaQuery_1121px.matches) {
  sliderElementBrandHiddenShow = document.querySelectorAll(
    '.swiper-brands__swiper-slide:nth-last-child(-n+3)'
  )
  sliderElementOtherTechnicHiddenShow = document.querySelectorAll(
    '.swiper-other-technic__swiper-slide:nth-last-child(-n+6)'
  )
}

//Вызываем функцию для кнопки показать все слайдер с брендами
listenerButtonReadMore(
  buttonReadMoreBrand,
  buttonHiddenBrand,
  allSliderElementBrand,
  'click'
)
//Вызываем функция для кнопки скрыть слайдер с брендами
listenerButtonHidden(
  buttonHiddenBrand,
  buttonReadMoreBrand,
  sliderElementBrandHiddenShow,
  'click'
)

//Кнопки показать все, скрыть различные виды техники
const buttonReadMoreOtherTechnic = document.querySelector(
  '.swiper-other-technic__read-more'
)
const buttonHiddenOtherTechnic = document.querySelector(
  '.swiper-other-technic__hidden-more'
)
const allSliderElementOtherTechnic = document.querySelectorAll(
  '.swiper-other-technic__swiper-slide'
)

//Вызываем функцию для кнопки показать все слайдер с различной техникой
listenerButtonReadMore(
  buttonReadMoreOtherTechnic,
  buttonHiddenOtherTechnic,
  allSliderElementOtherTechnic,
  'click'
)
//Вызываем функция для кнопки скрыть слайдер с различной техникой
listenerButtonHidden(
  buttonHiddenOtherTechnic,
  buttonReadMoreOtherTechnic,
  sliderElementOtherTechnicHiddenShow,
  'click'
)
//Слушатель кнопки показать все
// buttonReadMoreBrand.addEventListener('click', function (evt) {
//   evt.preventDefault()
//   console.log('Показать все')
//   buttonReadMoreBrand.classList.add('hidden')
//   buttonHiddenBrand.classList.remove('hidden')
//   console.log(allSliderElementBrand)
//   for (let i = 0; i < allSliderElementBrand.length; i++) {
//     allSliderElementBrand[i].classList.add('show')
//   }
// })
//Слушатель кнопки скрыть
// buttonHiddenBrand.addEventListener('click', function () {
//   console.log('Скрыть')
//   buttonHiddenBrand.classList.add('hidden')
//   buttonReadMoreBrand.classList.remove('hidden')
//   for (let i = 0; i < sliderElementBrandHiddenShow.length; i++) {
//     sliderElementBrandHiddenShow[i].classList.remove('show')
//   }
// })

// (1)--------------------------------------------------
//Слайдер 1
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.swiper-brands', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
    freeMode: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      420: {
        slidesPerView: 1.5
      },
      520: {
        slidesPerView: 2
      },
      620: {
        slidesPerView: 2.5
      },
      720: {
        slidesPerView: 3
      }
    }
  })
  // Слайдер 2 other-tehnic
  resizableSwiper('(max-width: 768px)', '.swiper-other-technic', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
    freeMode: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      420: {
        slidesPerView: 1.5
      },
      520: {
        slidesPerView: 2
      },
      620: {
        slidesPerView: 2.5
      },
      720: {
        slidesPerView: 3
      }
    }
  })

  //Слайдер 3 Прайс
  resizableSwiper('(max-width: 768px)', '.swiper-price', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
    freeMode: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      420: {
        slidesPerView: 1.5
      },
      520: {
        slidesPerView: 2
      },
      620: {
        slidesPerView: 2.5
      },
      720: {
        slidesPerView: 3
      }
    }
  })
})

//---------------------------
// Сайд меню
//Открыть side-menu и добавить  blur к main-container
const sideMenu = document.querySelector('.window-menu')
const buttonSideOpen = document.querySelector('.menu-logo__button-menu')
const buttonSideClose = document.querySelector(
  '.header-mobile-menu__button-close'
)
const openSideMenu = () => {
  sideMenu.classList.remove('hidden')
  mainContainer.classList.add('blur')
  document.addEventListener('click', listenerSideMenu)
}
const closeSideMenu = () => {
  sideMenu.classList.add('hidden')
  mainContainer.classList.remove('blur')
  document.removeEventListener('click', listenerSideMenu)
}
const listenerSideMenu = (evt) => {
  if (!sideMenu.contains(evt.target) && !buttonSideOpen.contains(evt.target)) {
    closeSideMenu()
  }
}

buttonSideOpen.addEventListener('click', openSideMenu)
buttonSideClose.addEventListener('click', closeSideMenu)

// Модальное окно обратная связь------------------------------
const modalFeedback = document.querySelector('.modal-feedback')
const buttonSideMenuFeedback = document.querySelector('.modal-button-feedback')
const buttonHeaderMenuFeedback = document.querySelector(
  '.header-button-feedback'
)
const buttonModalFeedbackClose = modalFeedback.querySelector(
  '.modal-header__button-close'
)
//Открыть модалку с обратной связью
const openModalFeedback = () => {
  modalFeedback.classList.remove('hidden')
  closeSideMenu()
  mainContainer.classList.add('blur')
}

//Закрыть модалку с обратной связью

const closeModalFeedback = () => {
  modalFeedback.classList.add('hidden')
  mainContainer.classList.remove('blur')
}

//Слушатели на кнопки для открытия модалки ОС
buttonSideMenuFeedback.addEventListener('click', openModalFeedback)
buttonHeaderMenuFeedback.addEventListener('click', openModalFeedback)

//Слушатель на кнопку закрытия обратной связи
buttonModalFeedbackClose.addEventListener('click', closeModalFeedback)
//-------------------------------------------------------

//Модальное окно заказать звонок

const modalCall = document.querySelector('.modal-call')
const buttonModalCallClose = modalCall.querySelector('.modal-call-button-close')
const buttonCallSideMenu = sideMenu.querySelector(
  '.call-chat-profile__button-call'
)
const buttonCallHeader = mainContainer.querySelector(
  '.call-chat-profile__button-call'
)

const openModalCall = () => {
  modalCall.classList.remove('hidden')
  closeSideMenu()
  closeModalFeedback()
  mainContainer.classList.add('blur')
}

const closeModalCall = () => {
  modalCall.classList.add('hidden')
  mainContainer.classList.remove('blur')
}

buttonCallHeader.addEventListener('click', openModalCall)
buttonCallSideMenu.addEventListener('click', openModalCall)
buttonModalCallClose.addEventListener('click', closeModalCall)
