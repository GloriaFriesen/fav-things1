$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var colorInput = $("#colorInput").val();
    var foodInput = $("#foodInput").val();
    var movieInput = $("#movieInput").val();
    var arrayInputs = [colorInput, foodInput, movieInput];
    var reorderInputs = [foodInput, colorInput, movieInput];
    var finalInputs = arrayInputs.concat(reorderInputs);
    finalInputs.forEach(function(item){
      $("ul#finalInputs").append("<li>" + item + "</li>");
    });
  });
});
