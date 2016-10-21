$(document).ready(function() {
  $("form#celebrity").submit(function(event){
    //UI Logic

/*
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
      if(!age) {
        alert("Age is blank");
        //$("#ageInput").addClass("has-error");
        } else {
        $("#ageInput").addClass("has-success");
      }
      if(!name) {
        alert("Name is blank");
        $("#nameInput").addClass("has-error");
        } else {
        $("#nameInput").addClass("has-success");
      }
    } else {
      pass = true;
    }*/
    $("#celebrityMatch").show();
        event.preventDefault();
      });
    });
    //Business Logic

var match = function(age, gender, preference) {
  age = parseInt(age);
  if (age >= 55){

  } else if (age > 30 && age < 55) {

  } else{

  }
}
