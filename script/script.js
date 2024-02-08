'use strict'

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide-elem');

const firstBtn = document.querySelector('.btn1');
const secondBtn = document.querySelector('.btn2');
const thirdBtn = document.querySelector('.btn3');

let currentSlide = 0;

// Функция для отображения текущего слайда
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

// Обработчик события для первой кнопки
firstBtn.addEventListener('click', () => {
  currentSlide = 0;
  showSlide(currentSlide);
});

// Обработчик события для второй кнопки
secondBtn.addEventListener('click', () => {
  currentSlide = 1;
  showSlide(currentSlide);
});

// Обработчик события для третьей кнопки
thirdBtn.addEventListener('click', () => {
  currentSlide = 2;
  showSlide(currentSlide);
});

// Переключение на предыдущий слайд
prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

// Переключение на следующий слайд
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

// Отображение первого слайда при загрузке страницы
showSlide(currentSlide);

function changeButtonColor(currentIndex) {
    firstBtn.style.backgroundColor = currentIndex === 0 ? 'white' : '';
    secondBtn.style.backgroundColor = currentIndex === 1 ? 'white' : '';
    thirdBtn.style.backgroundColor = currentIndex === 2 ? 'white' : '';
    }
    
    // Функция для отображения текущего слайда
    function showSlide(index) {
    slides.forEach((slide) => {
    slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    changeButtonColor(index); // Изменяем цвет кнопок при отображении слайда
    }
    
    // Остальной код остается без изменений


    const text1 = 'HOME'
    const element = document.getElementById('text');

    element.insertAdjacentHTML('beforeend', `<span>${text1}</span>`);

    element.lastElementChild.style.color = '#E3B873';