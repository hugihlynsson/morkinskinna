"use strict";

$('.event__header').on('click', function(event) {
  event.preventDefault();
  $(this).siblings('.event__details').slideToggle();
});

var scroller = {

  initialize: function() {
    this.updateOffsets();
    window.addEventListener('resize', this.updateOffsets.bind(this), false);
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  },

  items: [
    {
      element: $('.form__part--august'),
      speedDivider: 1,
    },
    {
      element: $('.form__part--september'),
      speedDivider: 2,
    },
    {
      element: $('.form__part--oktober'),
      speedDivider: 1,
    },
    {
      element: $('.form__part--november1'),
      speedDivider: 2,
    },
    {
      element: $('.form__part--november2'),
      speedDivider: 2.1,
    },
    {
      element: $('.form__part--worldclass'),
      speedDivider: 2.1,
    },
    {
      element: $('.form__part--worldclassAd'),
      speedDivider: 3,
    },
    {
      element: $('.form__part--fabrikkan'),
      speedDivider: 3,
    },
    {
      element: $('.form__part--fabrikkan2'),
      speedDivider: -3,
    },
  ],

  updateOffsets: function() {
    this.windowHeight = $(window).height();
    this.items = this.items.map(function(item) {
      item.svg = item.element.find('.form__part__svg');
      item.offset = item.element.offset().top;
      return item;
    });
    this.onScroll();
  },

  lastScrollY: 0,

  ticking: false,

  onScroll: function() {
    if (!this.ticking) {
      this.lastScrollY = window.pageYOffset;
      window.requestAnimationFrame(this.update.bind(this));
    }
  },

  update: function() {
    this.items.forEach(function(item) {
      this.translateHelper(item.svg, -(this.lastScrollY - item.offset + this.windowHeight*1.5)/item.speedDivider);
    }.bind(this));
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
