var apriHam = $('.header-right > a');
var closeIcon = $('.hamburger-menu .close')
var menu = $('.hamburger-menu');

apriHam.click(function() {
  menu.addClass('active');
});

closeIcon.click(function() {
  menu.removeClass('active');
});
