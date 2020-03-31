
var BouncyDancer = function() {
  Dancer.apply(this, arguments);
  this.$node.html('<img class="image" src="https://media.giphy.com/media/XzvQlzaOWeRlw84kvw/giphy.gif">');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};


// ToDo: Populate Dance Floor with random bouncy dancer
// var getRandomElement = function(randomDancerList) {

// };

// let randomDancer0 = '<img class"image" src="https://media.giphy.com/media/3oz8xWNwX1WSdyUo5G/giphy.gif">';
// let randomDancer1 = '<img class"image" src="https://media.giphy.com/media/3oz8y0qA2Qa7oBY4UM/giphy.gif">';
// let randomBouncyDancer = [randomDancer0, randomDancer1];

// getRandomElement(randomBouncyDancer);

