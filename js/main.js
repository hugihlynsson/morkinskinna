"use strict";

$('.event__header').on('click', function(event) {
  event.preventDefault();
  $(this).siblings('.event__details').slideToggle();
});

var scroller = {
  initialize: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  },
  lastScrollY: 0,
  ticking: false,
  onScroll: function() {
    this.lastScrollY = window.pageYOffset;
    if (!this.ticking) {
      window.requestAnimationFrame(this.update.bind(this));
    }
  },
  update: function() {
    this.translateHelper($('.form__part--august'), -this.lastScrollY/2);
    this.translateHelper($('.form__part--september'), -this.lastScrollY/3);
    this.ticking = false;
  },
  translateHelper: function($element, amount) {
    var translationStyle = 'translate3d(0px,' + amount + 'px, 0px)';
    $element.css({
      '-webkit-transform': translationStyle,
      '-moz-transform': translationStyle,
      '-ms-transform': translationStyle,
      '-o-transform': translationStyle,
      'transform': translationStyle,
    })
  },
};

scroller.initialize();


console.log('script loaded');
