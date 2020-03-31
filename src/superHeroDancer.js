var superHeroDancer = function() {
  Dancer.apply(this, arguments);
};

superHeroDancer.prototype = Object.create(Dancer.prototype);
superHeroDancer.prototype.constructor = superHeroDancer;

superHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

