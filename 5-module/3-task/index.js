function initCarousel() {
  // ваш код...
  let position = 0;
  let list = document.querySelector('.carousel__inner');
  let width = list.offsetWidth;
  let right = document.querySelector('.carousel__arrow_right');
  let left = document.querySelector('.carousel__arrow_left');
  left.style.display = 'none';
  left.onclick = function() {
    position -= width;
    list.style.transform = 'translateX(' + position*-1 + 'px)';
    if (position !== width*4) {
      right.style.display = '';
    }
    if (position === 0){
      left.style.display = 'none';
    };
  };
  right.onclick = function() {
    position += width;
    list.style.transform = 'translateX(-' + position + 'px)';
    if (position > width*2) {
      right.style.display = 'none';
    }
    if (position > 0){
      left.style.display = '';
    };
  };
}
