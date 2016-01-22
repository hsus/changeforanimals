$(document).ready(function() {

  // This function works with sass/components/read-more.scss
  $('.readmore').click(function() {
    var el = $(this),
        wrapper = el.parent().parent();

    if (wrapper.hasClass('showmore')) {
      wrapper.find('.readmore').text('Read More');
      $('.more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).hide();
      });
    } else {
      wrapper.find('.readmore').text('Read Less');
      $('.more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).css('display','inline');
      });
    };

    wrapper.toggleClass('showmore showless');
    wrapper.find('.more').css('display','inline');
  });

  // Sticky nav
  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset,
        scroll_pos_test = 10;

    if (y_scroll_pos >= scroll_pos_test) {
      $('.index nav').fadeIn();
    } else {
      $('.index nav').fadeOut();
    }
  });

  // Show/Hide mobile menu
  $('.mobile-menu-icon, #mobile-menu a').click(function(){
    $('.mobile-menu-icon').toggleClass('active');
    $('#mobile-menu').fadeToggle();
  });

  // Scroll to hash
  $('#mobile-menu a[href^="#"],#menu a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('#menu').find('a').removeClass('active');
      $(this).addClass('active');

      $('html, body').stop().animate( {
          'scrollTop': $target.offset().top-90
      }, 700, 'swing', function () {
          window.location.hash = target;
      });
  });

  // Top of page
  $('.logo-sm').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      $('#menu').find('a').removeClass('active');
      $('html, body').stop().animate({'scrollTop': 0}, 700, 'swing');
  });

});
