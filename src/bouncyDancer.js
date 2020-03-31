var BouncyDancer = function() {
  Dancer.apply(this, arguments);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


