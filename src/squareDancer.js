var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('squaredancer');
  this.position = 0;
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  if(this.position === 0) {
    this.top += 50 + Math.random()*100 ;
    this.$node.animate({
      top: this.top
    });
  } else if (this.position === 1) {
    this.left -= 50+ Math.random()*100 ;
    this.$node.animate({
      left: this.left
    });

  } else if (this.position === 2) {
    this.top -= 50+ Math.random()*100 ;
    this.$node.animate({
      top: this.top
    });

  } else if (this.position === 3) {
    this.left += 50+ Math.random()*100 ;
    this.$node.animate({
      left: this.left
    });
  }
  this.setPosition();
  this.position = (this.position + 1) % 4;





  Dancer.prototype.step.call(this);
};
