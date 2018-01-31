(function(){
  let dots = document.getElementsByClassName('dots__link');
  let items = document.getElementsByClassName('testimonials__item');
  let page = document.getElementsByClassName('testimonials__number');

  for (var i = dots.length - 1; i >= 0; i--) {
    dots[i].addEventListener('click', e => {
        e.preventDefault();
        let activeDot = e.currentTarget;
        let activeNum = activeDot.getAttribute('data-page');
        for (var i = items.length - 1; i >= 0; i--) {
          items[i].classList.remove('testimonials__item--active');
          dots[i].classList.remove('dots__link--active');
        }
        items[activeNum].classList.add('testimonials__item--active');
        dots[activeNum].classList.add('dots__link--active');

        page[0].innerHTML = '.0' + ++activeNum;

        console.log(activeNum );

    });
  }
})();




