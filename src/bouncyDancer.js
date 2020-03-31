var BouncyDancer = function() {
  Dancer.apply(this, arguments);
};


BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BlinkyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


