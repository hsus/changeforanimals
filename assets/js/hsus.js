$(document).ready(function() {

  $('.readmore').click(function() {
    var el = $(this),
        wrapper = el.parent().parent();
    wrapper.toggleClass('showmore showless');
    $('.showmore').find('.readmore').text('Read Less');
    $('.showless').find('.readmore').text('Read More');
  });


});
