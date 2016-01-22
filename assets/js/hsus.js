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
      console.log('Pos: ' + y_scroll_pos)
      $('.index nav').fadeIn();
    } else {
      $('.index nav').fadeOut();
    }
  });

});
