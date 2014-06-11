var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  //debugger
  this.setPosition(top, left);
};

Dancer.prototype.step = function(obj) {
  //debugger;
  console.log("in prototype:")
  console.log(this)
  var that = this;
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

