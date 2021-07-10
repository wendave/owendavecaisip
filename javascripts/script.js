$(window).on('load resize', function() {
  setTimeout(() => {
    if ( $(window).width() <= 974)  {
      resizeFunction();
      mediaClickFunction();
      highlightFirstMedia();
    }
    else {
      desktopReset();
    }
  }, 500);
});

$(window).on('load', function() {
  setTimeout(() => {
    $('body').fadeIn();
  }, 100);
});

var desktopReset = function() {
  $('.column-absolute').removeClass('column-show, column-hide');
}

var resizeFunction = function() {
  setTimeout(() => {
    $('.column-absolute').removeClass('column-show');
    $('.column-absolute').addClass('column-hide');
    $('.column-experience').removeClass('column-hide').addClass('column-show');
  }, 100);
}

var mediaClickFunction = function() {
  $('.column-multimedia .figure-multimedia').each(function() {
    $(this).click(function() {
      var figureAllImages = $('.image-multimedia').parent();
      var getData = $(this).attr('data-trigger');

      figureAllImages.removeClass('figure-multimedia-highlight');
      $(this).addClass('figure-multimedia-highlight');
      $('.column-absolute').removeClass('column-show').addClass('column-hide');
      setTimeout(() => {
        $('.column-' + getData).removeClass('column-hide').addClass('column-show');
      }, 100);
    })
  });
}

var highlightFirstMedia = function() {
  $('.column-multimedia .content-image .figure-multimedia').removeClass('figure-multimedia-highlight');
  $('.column-multimedia .content-image:first-child .figure-multimedia').addClass('figure-multimedia-highlight');
}