var menu = document.querySelector('.hum_btn');
var btn = document.querySelector('.bolt_header_btn');

menu.addEventListener('click', function(e) {
  e.preventDefault();

  btn.classList.toggle('is-open');
})