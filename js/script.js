var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var popFailure = document.querySelector('.popup-failure');
var reviewsSlideOne = document.querySelector(".reviews__slide-1");
var reviewsSlideTwo = document.querySelector(".reviews__slide-2");
var reviewsSlideThree = document.querySelector(".reviews__slide-3");
var reviewsArrowRight = document.querySelector(".reviews__slider-control-desktop--right");
var reviewsArrowLeft = document.querySelector(".reviews__slider-control-desktop--left");
var reviewsBtnOne = document.getElementById('reviews-btn-1');
var reviewsBtnTwo = document.getElementById('reviews-btn-2');
var reviewsBtnThree = document.getElementById('reviews-btn-3');

var formSubmit = document.querySelector('.journey-form__submit-btn');
var acqInput = document.querySelector('.journey-form__acquaintance-input');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Слайдер с отзывами на десктопной версии
// reviewsArrowRight.addEventListener("click", function(event) {
//   event.preventDefault();
//   if (reviewsBtnOne.hasAttribute('checked')) {
//     reviewsBtnOne.removeAttribute('checked');
//     reviewsBtnTwo.setAttribute('checked');
//   } else if (reviewsBtnTwo.hasAttribute('checked')) {
//     reviewsBtnTwo.removeAttribute('checked');
//     reviewsBtnThree.setAttribute('checked');
//   } else if (reviewsBtnThree.hasAttribute('checked')) {
//     reviewsBtnThree.removeAttribute('checked');
//     reviewsBtnOne.setAttribute('checked');
//   }
// });

// reviewsArrowLeft.addEventListener("click", function(event) {

// });

// Запуск модальных окон
// formSubmit.addEventListener('click', function() {
//   if (document.acqInput.value == "") {
//       popFailure.classList.remove('popup-failure');
//       popFailure.classList.add('popup-failure--show');
//       }
// });
