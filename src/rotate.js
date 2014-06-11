var Rotate = function(obj) {
  console.log("in Rotate:")
  console.log(obj)
  obj.angle = 0;
  obj.step = function() {
    Dancer.prototype.step.call(obj);
    obj.angle+=100;
    obj.$node.rotate({animateTo: obj.angle});
  }
  // return obj;
}


// this.step.bind(this);
// function(){that.step(that)}
