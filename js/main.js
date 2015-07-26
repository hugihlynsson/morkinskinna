$('.event__header').on('click', function(event) {
  event.preventDefault();
  $(this).siblings('.event__details').slideToggle();
});

console.log('loaded scripts');
