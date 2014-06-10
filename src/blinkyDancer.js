var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkydancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

BlinkyDancer.prototype.setPosition = function(top, left){
  Dancer.prototype.setPosition.call(this, top, left);

  var BlinkyDancers = $('.blinkydancer');

  $.each(BlinkyDancers, function(i, dancer){
    window.blinkyDancers.push($(dancer).offset());
  });

}
