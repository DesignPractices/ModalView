'use strict';

var ModalViewController = (function ($) {
  $(function() {
    var $clickMe = $('.click');
    var $close   = $('.close');
    var $modal   = $('.modal-container');
    function handleClick() {
      $modal.toggleClass('show');
    }
    $clickMe.on('click', handleClick);
    $close.on('click', handleClick);
  });
})(jQuery);
