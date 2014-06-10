$(document).ready(function(){
  window.dancers = [];
  window.blinkyDancers = [];

  $(".addDancerButton").on("click", function(event){
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

      var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 10
      );


    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineup").on("click", function(event){
    console.log('linup');
    for (var x=0; x<window.dancers.length; x++) {
      var dancer = window.dancers[x];
      console.log('dancer ' + x + ' is lining up!');
      dancer.lineUp();
    }
  });

  $("body").on("mouseover", ".squarecatdancer", function(event) {
    // console.log('mouseOVER!!!');
    var element = event.target;
    // console.log(element);
    $(element).toggleClass('bothered');
  });
});

