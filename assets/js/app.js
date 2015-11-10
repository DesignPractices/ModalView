'use strict';

var ModalViewController = (function ($) {
  $(function() {
    var $clickMe        = $('.click');
    var $close          = $('.modal-view .close-container');
    var $modal          = $('.modal-container');
    function handleClick() {
      $modal.toggleClass('show');
    }
    $clickMe.on('click', handleClick);
    $close.on('click', handleClick);
  });
})(jQuery);
