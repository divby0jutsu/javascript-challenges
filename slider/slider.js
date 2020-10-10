
// #1 Простой слайдер

// Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. При клике на левую стрелочку, элементы должны сдвигаться влево.

const arrowRight = document.getElementById("right");
const arrowLeft = document.getElementById("left");

const sliderList = document.querySelector("#ss");

sliderList.style.left = '0px';



var moveSlide = direc => {
  const leftPx = parseInt(sliderList.style.left, 10);
  if (direc == 'right' && leftPx > -500) {
  const position = leftPx - 100;
  sliderList.style.left = position + "px";
  } else if (direc == 'left' && leftPx < 0) {
    const position = leftPx + 100;
    sliderList.style.left = position + "px";
  };
  };



arrowRight.addEventListener("click", moveSlide.bind(this, 'right'));
arrowLeft.addEventListener("click", moveSlide.bind(this, 'left'));
