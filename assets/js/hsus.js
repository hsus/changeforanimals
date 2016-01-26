$(document).ready(function() {

  // This function works with sass/components/read-more.scss
  $('.readmore').click(function() {
    var el = $(this),
        wrapper = el.parent().parent().parent();

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
    var elWin = $(this),
        y_scroll_pos = window.pageYOffset,
        scroll_pos_test = 10;

    if (y_scroll_pos >= scroll_pos_test) {
      $('.index nav').fadeIn();
    } else {
      $('.index nav').fadeOut();
    }

    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }

    if (is_touch_device()) {
      $('.overlay').css('transition','none');
      // Get viewport height and set trigger point
      var windowHeight = elWin.height(),
          overlayStart = windowHeight * .5,
          overlayEnd = windowHeight * .2,
          transitionRange = overlayStart - overlayEnd;

      // On each scroll check if .preview is in the target range
      $('.preview').each(function() {
        var el = $(this),
            thisTop = el.offset().top - elWin.scrollTop(),
            previewHeight = el.height(),
            thisBottom = thisTop + previewHeight;

        // Check if this element is in the slide range
        if (thisTop <= overlayStart && thisTop > overlayEnd ) {
          var percentShown = Math.round(((thisTop - overlayEnd) / transitionRange)*100);
          el.find('.overlay').css('transform','translateY('+ percentShown +'%)')
            .end().find('> h3').css('opacity', '0.' + percentShown/10);
        } else if (thisTop <= overlayEnd) {
          el.find('.overlay').css('transform','translateY(0)')
             .end().find('> h3').css('opacity','0');
        } else {
          el.find('.overlay').css('transform','translateY(100%)')
             .end().find('> h3').css('opacity','1');
        }
      });
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

  // Scroll to hash
  $('#more-button a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target),
          introPadding = $('#intro').css('padding-top'),
          intoTop = parseInt(introPadding, 10);
          if (intoTop > 120) { intoTop = 0; }

      $('html, body').stop().animate( {
          'scrollTop': $target.offset().top-intoTop
      }, 700, 'swing', function () {
          window.location.hash = target;
      });
  });


  // Top of page
  $('.logo-sm').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      $('#menu').find('a').removeClass('active');
      $('html, body').stop().animate({'scrollTop': 0}, 700, 'swing');
      $('.mobile-menu-icon').removeClass('active');
      $('#mobile-menu').fadeOut();
  });

});
