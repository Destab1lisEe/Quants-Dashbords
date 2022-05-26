@@include('files/burger-menu.js', {})
@@include('files/anchor-scroll.js', {})
@@include('files/script.js', {})
@@include('libs/swiper.min.js', {})


new Swiper('.swiper-container', {
    pagination: {
      el: '.slider-buttons',
      clickable: true,
    },
    slidesPerView: 'auto',
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
      
});

if (window.matchMedia("(min-width: 992px)").matches) {
  /* the viewport is at least 992 pixels wide */
} else {
  $('.left-sidebar').addClass('left-sidebar__active');
  $('.right-sidebar').addClass('right-sidebar__active');
}

$('.left-sidebar__buttons').on('click', function() {
  $('.left-sidebar').toggleClass('left-sidebar__active');
  $('.right-sidebar__buttons').toggleClass('collapsed');
  $('body').toggleClass('_lock');
});

$('.right-sidebar__buttons').on('click', function() {
  $('.right-sidebar').toggleClass('right-sidebar__active');
  $('.left-sidebar__buttons').toggleClass('collapsed');
  $('body').toggleClass('_lock');
});

$('.content').on('click', function() {
  $('.pairs-search').toggleClass('pairs-search__active');
});

$('.dashboard__button').on('click', function() {
  $('.dashboard__navigation').toggleClass('dashboard__navigation-active');
  $('.how-to-button').toggleClass('collapsed');
  $('body').toggleClass('_lock');
});

$('.how-to-button').on('click', function() {
  $('.dashboard__how-to').toggleClass('dashboard__how-to-active');
  $('.dashboard__button').toggleClass('collapsed');
  $('body').toggleClass('_lock');
});

const logo2 = document.querySelector('body.light .welcome__logo img');
if(logo2){
	logo2.src = '../img/logowhite.png';
}

$('.theme-switcher').on('click', function() {
  $('body').toggleClass('light');
  $(this).toggleClass('fa-sun');
  $(this).toggleClass('fa-moon');
});
