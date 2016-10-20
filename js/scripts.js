$(document).ready(function() {
  $("form#celebrity").submit(function(event){
    //UI Logic

    var pass = false;
    var age = parseInt($("input#age").val());
    var name = $("input#name").val();

    if(!pass) {
      // if("#name" && "#age"){
      //   $("#nameInput").hide();
      //   $("#nameInputError").show();
      //   $("#ageInput").hide();
      //   $("#ageInputError").show();
      // }
      debugger;
      if(!age) {
        alert("Age is blank")
        $("#ageInput").hide();
        $("#ageInputError").show();
        } else {
        $("#ageInputSuccess").show();
        $("#ageInput").hide();
      }
      if(!name) {
        alert("Name is blank")
        $("#nameInput").hide();
        $("#nameInputError").show();
        } else {
        $("nameInputSuccess").show();
      }
    } else {
      pass = true;
    }

    //Business Logic



    event.preventDefault();
  });
});
