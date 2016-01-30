$(document).ready(function() {

  // This function works with sass/components/read-more.scss
  $('#intro .readmore').click(function() {
    var el = $(this),
        wrapper = el.parent().parent().parent();

    if (wrapper.hasClass('showmore')) {
      $('#intro').css('background-image','url("/assets/images/intro1.jpg")')
      wrapper.find('.readmore').text('Read More');
      $('.more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).hide();
      });
    } else {
      $('#intro').css('background-image','radial-gradient(circle closest-side, #20417a, #152b51)')
      wrapper.find('.readmore').text('Read Less');
      $('.more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).css('display','inline');
      });
    };

    wrapper.toggleClass('showmore showless');
    wrapper.find('.more').css('display','inline');
  });

  // This function works with sass/components/read-more.scss
  $('#about .readmore').click(function() {
    var el = $(this),
        wrapper = el.parent().parent().parent().parent();

    if (wrapper.hasClass('showmore')) {
      wrapper.find('.readmore').text('Read More of Wayne\'s Letter');
      $('.more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).hide();
      });
    } else {
      wrapper.find('.readmore').text('Show Less of Wayne\'s Letter');
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
      $('nav').fadeIn();
    } else {
      $('nav').fadeOut();
    }

    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }

    // Get viewport height and set trigger point
    var windowHeight = elWin.height(),
        overlayStart = windowHeight * .5,
        overlayEnd = windowHeight * .2,
        transitionRange = overlayStart - overlayEnd;

    if (is_touch_device()) {
      $('.overlay').css('transition','none');

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

    $('.donor').each(function() {
      var el = $(this),
          thisTop = el.offset().top - elWin.scrollTop(),
          previewHeight = el.height(),
          thisBottom = thisTop + previewHeight;

      // Check if this element is in the slide range
      if (thisTop <= overlayEnd*3 && thisTop >= overlayEnd*1 ) {
        el.find('.prompt').css('opacity','0.7');
      } else {
        el.find('.prompt').css('opacity','0');
      }
    });

  });

  // Show/Hide mobile menu
  $('.mobile-menu-icon, #mobile-menu a').click(function(){
    $('.mobile-menu-icon').toggleClass('active');
    $('#mobile-menu').fadeToggle();
  });

  // Scroll to hash - Menu
  $('#mobile-menu a[href^="#"],#menu a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('#menu').find('a').removeClass('active');
      $(this).addClass('active');

      $('html, body').stop().animate( {
          'scrollTop': $target.offset().top-73
      }, 700, 'swing', function () {
          window.location.hash = target;
      });
  });

  // Scroll to hash - Intro
  $('#intro-button a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target),
          introPadding = $('#intro').css('padding-top'),
          introTop = parseInt(introPadding, 10);
          if (introTop > 120) { introTop = 0; };

      $('html, body').stop().animate( {
          'scrollTop': $target.offset().top-introTop
      }, 700, 'swing', function () {
          window.location.hash = target;
      });
  });

  // Scroll to hash - President
  $('#pres-button a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target),
          aboutPadding = $('#about').css('padding-top');

      $('html, body').stop().animate( {
          'scrollTop': $target.offset().top-100
      }, 700, 'swing', function () {
          window.location.hash = target;
      });
  });


  // Top of page
  $('.index .logo-sm').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      $('#menu').find('a').removeClass('active');
      $('html, body').stop().animate({'scrollTop': 0}, 700, 'swing');
      $('.mobile-menu-icon').removeClass('active');
      $('#mobile-menu').fadeOut();
  });

  // Find images of class 'svg' and embed code directly.
  $('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Video Playback
  $('.video').click(function(){
    var el = $(this);
    el.find('.overlay').fadeToggle(200,"linear").end()
      .find('.youtubewrap').fadeToggle(600,"linear");
  });

});
