var SquareCatDancer = function(top, left, timeBetweenSteps) {
  SquareDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('squarecatdancer');
};

SquareCatDancer.prototype = Object.create(SquareDancer.prototype);
SquareCatDancer.prototype.constructor = SquareCatDancer;

SquareCatDancer.prototype.step = function() {
  SquareDancer.prototype.step.call(this);
};
