const 
in_left = document.querySelector(".btn-left"),
in_right = document.querySelector(".btn-right"),
slides = document.querySelectorAll(".section-2-slider-item"),
section_2_slider = document.querySelector('section-2-slider'),
slider_marks = document.querySelectorAll(".slider-mark");

let index = 0;

const activeSlide = function(n) {
  for(slide of slides) {
    slide.classList.remove('section-2-slider-item_active');
  }
  slides[n].classList.add('section-2-slider-item_active');
}

const nextSlide = function() {
  if (index == slides.length - 1) {
    index = 0
    activeSlide(index);
    activeMark(index);
  } else {
    index++;
    activeSlide(index);
    activeMark(index);
  }
}

const prevSlide = function() {
  if (index == 0) {
    index = slides.length - 1
    activeSlide(index);
    activeMark(index);
  } else {
    index--;
    activeSlide(index);
    activeMark(index);
  }
}

in_right.addEventListener('click', nextSlide);
in_left.addEventListener('click', prevSlide);

const activeMark = function(n) {
  for(mark of slider_marks) {
    mark.classList.remove('slider-mark_active');
  }
  slider_marks[n].classList.add('slider-mark_active');
}

slider_marks.forEach((item, indexItem) => {
  item.addEventListener('click', () => {
    index = indexItem;
    activeSlide(index);
    activeMark(index);
  })
})
