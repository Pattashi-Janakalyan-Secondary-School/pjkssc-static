// Scroll to Top Button
$(function scrolltotop() {
  var offset = 150,
  scrollbutton = $('.scroll-top');

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      scrollbutton.fadeIn('slow');
    } else{
      scrollbutton.fadeOut('fast');
    }
  });

  scrollbutton.children('a').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
});
