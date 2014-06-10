var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer">');

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {

  // if(this.left)
  // bombs.position

  var stepFunction = this.step.bind(this);
  setTimeout(stepFunction, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var radius = 40;

  for(var i = 0; i < window.blinkyDancers.length; i++) {
    var b = window.blinkyDancers[i];

    if((b.top <= (this.top + radius)) && (b.top >= (this.top - radius)) &&
       (b.left <= (this.left + radius)) && (b.left >= (this.left - radius))) {
      this.$node.addClass('bothered');
    }

  }

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var y = Math.random() * 400;
  // var oldStep = this.step;

  // this.step = function() {};
  this.$node.stop(true);

  this.left = 100;
  this.setPosition(this.top, this.left);
};

//
