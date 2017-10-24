$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    var unlucky =[];
    var lucky =[];
    $("input:checkbox[name=questionOne]:checked").each(function(){
      var answers1 = $(this).val();
      unlucky.push(answers1);
    });
    $("input:checkbox[name=questionTwo]:checked").each(function(){
      var answers2 = $(this).val();
      lucky.push(answers2);
    });
    if ((lucky === 0) || (unlucky === 0)){
      alert("Fill Out The Survey");
    } else if (lucky.length > unlucky.length){
      $("#resultOne").show();
    } else if (lucky.length < unlucky.length) {
      $("#resultTwo").show();
    } else{
      $("#resultThree").show();
    }
    $('#transportation_survey').hide();
  });
});
