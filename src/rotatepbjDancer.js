var Rotate = function(obj) {
  obj.angle = 0;
  obj.step = function(obj) {
    Dancer.prototype.step.call(obj);
    obj.angle+=100;
    obj.$node.rotate({animateTo: obj.angle});
  }
  return obj;
}


