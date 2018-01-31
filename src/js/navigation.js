(function(){
  let hamburger = document.getElementById('hamburger-menu');
  // let close = document.getElementByClassName('hamburger-menu--close');
  let nav = document.getElementsByClassName('navigation');
  let navItem = document.getElementsByClassName('navigation');

  hamburger.addEventListener('click', e => {
    e.preventDefault();
    // console.log('test');
    if (hamburger.classList.contains('hamburger-menu--close')) {
      nav[0].classList.remove('navigation--shown');
      hamburger.classList.remove('hamburger-menu--close');
    } else {
      nav[0].classList.add('navigation--shown');
      hamburger.classList.add('hamburger-menu--close');
    }
  }); // hamburger END

  for (var i = navItem.length - 1; i >= 0; i--) {
    navItem[i].addEventListener('click', e => { 
      // e.preventDefault();
      nav[0].classList.remove('navigation--shown');
      hamburger.classList.remove('hamburger-menu--close');
    })
  } // navItem END


})(); // end
