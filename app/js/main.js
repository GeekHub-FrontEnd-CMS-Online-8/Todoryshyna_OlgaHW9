var navLink = document.getElementById('nav-head').querySelectorAll('a');
navLink.forEach(function (element, index) {
  element.addEventListener('click', function () {
    var nav = document.getElementById('nav-head');

    if (nav.classList.contains('navigation-head')) {
      document.querySelector('.nav-btn').classList.remove('navi-active');
      nav.classList.toggle('show');
    }
  });
});
document.querySelector('.header__menu-nav').addEventListener('click', function () {
  toggleNav();
});

function toggleNav() {
  var burger = document.querySelector('.nav-btn');
  burger.classList.toggle('nav-btn-active');

  if (burger.classList.contains('nav-btn-active')) {
    document.querySelector('.nav-label').innerHTML = 'close';
  } else {
    document.querySelector('.nav-label').innerHTML = 'menu';
  }

  var x = document.getElementById("header__menu");
  document.getElementById('nav-head').classList.toggle('show');
}

