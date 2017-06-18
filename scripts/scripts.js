
$(document).ready(function() {
  var height = $('nav').offset().top;
  var backup = $('section').offset().top;
  $(window).resize(function() {
    height = $('nav').offset().top;
    return height;
  });
  $(window).resize(function() {
    backup = $('section').offset().top;
    return backup;
  });
  $(window).scroll(function() {
    if (height > backup) {
      if ($(window).scrollTop() > backup) {
        $('nav').addClass('navbar-fixed');
        $('header').addClass('padding-bottom');
      }
      if ($(window).scrollTop() < backup) {
        $('nav').removeClass('navbar-fixed');
        $('header').removeClass('padding-bottom');
      }
    }
    else if (height < backup) {
      if ($(window).scrollTop() > height) {
        $('nav').addClass('navbar-fixed');
        $('header').addClass('padding-bottom');
      }
      if ($(window).scrollTop() < height) {
        $('nav').removeClass('navbar-fixed');
        $('header').removeClass('padding-bottom');
      }
    }
  });

  $("#menu").click(function() {
    if ($("nav").hasClass("showMenu")) {
      $("nav").removeClass("showMenu");
    } else {
      $("nav").addClass("showMenu");
    }
  });
});
