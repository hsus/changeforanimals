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


});
