$(document).ready(function(){
  window.dancers = [];
  var choice;

  $(".spriteChoice").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer);

    choice = dancer;
  });

    $(".animate").on("click", ".action", function(event){
      var $actionMixin = $(this).data("action-name")
      var actionMixin = window[$actionMixin];
      console.dir(choice);
      actionMixin(choice);
    });

  $(".lineupButton").on("click", function(event) {
    var xPos = 0;
    yPos = "50%";
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(yPos, xPos);
      xPos += Math.max($(window.dancers[i].$node).width(), $(window.dancers[i+1].$node).width());
    }
  });

  $(".addNewDancer").on("click", function(event) {
      $(".sprites").css('visibility', 'visible');
  });

  $(".sprites").on("click", function(event) {
      $(".animate").css('visibility', 'visible');
  });


});

