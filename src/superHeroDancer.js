var SuperHeroDancer = function() {
  Dancer.apply(this, arguments);
  this.$node.html('<img class"image" src="https://i.gifer.com/i0.gif">');
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

};

