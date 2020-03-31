var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.html('<img class="image" src="https://media.giphy.com/media/Q8h6DB2gHp0r9pYeuF/giphy.gif">');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle('fast', 'linear');
};