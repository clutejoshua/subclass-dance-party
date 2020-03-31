var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  // Generates random number between 0 and 255
  var randColor = function() {
    return Math.floor(Math.random() * 256);
  };

  // New CSS background color
  var styleSettings = {
    border: '10px solid rgb(' +
      randColor() + ',' +
      randColor() + ',' +
      randColor() + ')'};

  // Sets new CSS background color for this.$node
  this.$node.css(styleSettings);
};

// var BlinkyDancer = function (top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
// };

// BlinkyDancer.prototype = Object.create(Dancer.prototype);
// BlinkyDancer.prototype.constructor = BlinkyDancer;

// BlinkyDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };
