$(document).ready(function() {

  $('.readmore').click(function() {
    var el = $(this),
        wrapper = el.parent().parent();
      $('.showmore .more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).hide();
      });
      $('.showless .more').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).css('display','inline');
      });
    wrapper.toggleClass('showmore showless');
    $('.showmore').find('.readmore').text('Read Less');
    $('.showless').find('.readmore').text('Read More');
    $('.more').css('display','inline');
  });


});
