$(document).ready(function() {
    var currentIndex = 0;
    var slideCount = $('.slide').length;

    function showSlide(index) {
      var newTransformValue = -index * 100 + '%';
      $('#slides').css('transform', 'translateX(' + newTransformValue + ')');
    }

    $('#nextBtn').click(function() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
    });

    $('#prevBtn').click(function() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      showSlide(currentIndex);
    });
  });
