var SuperHeroDancer = function() {
  Dancer.apply(this, arguments);
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

