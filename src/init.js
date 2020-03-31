$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    // iterate through dancers array
    for (let i = 0; i < window.dancers.length; i++) {
    // make helper method lineup function in Dancer.js
      window.dancers[i].lineUp();
    }
  });

  $('.addBouncyDancerButton').on('click', function(event) {

  });

  $('.addSuperHeroDancerButton').on('click', function(event) {

  });

});

// make dancers interact with other dancers using pythagorean Theorem

// make a dancer that reacts to the mouse using jQuery to add a mouseover handler





/* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions availae in the global scope, clicking that node
     * will call the function to make the dancer.
     */

/* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */