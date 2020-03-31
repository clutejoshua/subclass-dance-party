var SpinningDancer = function() {
  Dancer.apply(this, arguments);
  this.$node.html('<img class="image" src="https://media.giphy.com/media/U2RvpDiG6QmaPRu79V/giphy.gif">');
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};