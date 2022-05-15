function initCarousel() {
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlide = document.querySelector('.carousel__slide');
  let slideWidth = carouselSlide.offsetWidth;
  let currentWidth = 0;
  let stage = 1;

  const hidden = function () {
    if (stage === carouselInner.children.length) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }

    if (stage === 1) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  };
  hidden();

  carouselArrowRight.addEventListener('click', () => {
    stage += 1;
    carouselInner.style.transform = `translateX(-${currentWidth + slideWidth}px)`;
    currentWidth += slideWidth;
    hidden();
  });

  carouselArrowLeft.addEventListener('click', () => {
    stage -= 1;
    carouselInner.style.transform = `translateX(-${currentWidth - slideWidth}px)`;
    currentWidth -= slideWidth;
    hidden();
  });
}
