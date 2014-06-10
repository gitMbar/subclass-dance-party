var RotatePbjDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('banana-right');
  this.angle = 0;
}

RotatePbjDancer.prototype = Object.create(Dancer.prototype);
RotatePbjDancer.prototype.constructor = RotatePbjDancer;

RotatePbjDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.angle+=100;
  this.$node.rotate({animateTo: this.angle});


}
