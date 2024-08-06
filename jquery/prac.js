$(document).ready(function(){
    // p elements
    $("p").click(function(){
        $(this).hide();
    });
    });

$(document).ready(function(){
        $(".bclass").click(function(){ //select by  class
          $("#div1").fadeIn(); // select  by id
          $("#div2").fadeIn("slow"); //slow or fasr
          $("#div3").fadeIn(3000); // milliseconds
        });
});


$(document).ready(function(){
    $("#hide").click(function(){
      $("img").hide();
    });
    $("#show").click(function(){
      $("img").show();
    });
  });