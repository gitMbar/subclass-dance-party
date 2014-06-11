var PbjDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('banana-right');
}

PbjDancer.prototype = Object.create(Dancer.prototype);
PbjDancer.prototype.constructor = PbjDancer;

// PbjDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   if ((this.$node).hasClass('banana-right')) {
//             (this.$node).removeClass('banana-right').addClass('banana-left');
//         } else if ((this.$node).hasClass('banana-left')) {
//             (this.$node).removeClass('banana-left');
//             (this.$node).addClass('banana-right');
//         }
// }
