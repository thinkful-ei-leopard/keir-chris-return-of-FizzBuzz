/* eslint-disable no-undef */
'use strict';

$(function() {
  $('form').submit(function( event ) {
    event.preventDefault();
    if ( $('#number-choice').first().val() % 15 === 0 ) {
      $('.js-results').text('fizzbuzz').show();
      return;
    }
    if ( $('#number-choice').first().val() % 5 === 0 ) {
      $('.js-results').text('buzz').show();
      return;
    }
    if ( $('#number-choice').first().val() % 3 === 0 ) {
      $('.js-results').text('buzz').show();
      return;
    }
  });
});