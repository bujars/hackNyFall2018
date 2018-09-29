$(document).ready(function(){
console.log("JQUERY Works");

    $(".user_button").on("click",function(){
        $(".user_button").hide();
        $("#home_button").show();
    });

    $("#home_button").on("click",function(){
        $(".user_button").show();
        $("#home_button").hide();
        $(".info").hide();
    });

    $("#deli_button").on("click",function(){
        //deli div show 
        $("#deli_info").show();
    });

    $("#hairstylist_button").on("click",function(){
        //hairstylist div show 
        $("#hairstylist_info").show();
    });

    $("#chemist_button").on("click",function(){
        //chemist div show 
        $("#chemist_info").show();
    });

    $("#supermarket_button").on("click",function(){
        //supermarket div show 
        $("#supermarket_info").show();
    });

    $("#taco_button").on("click",function(){
        //taco div show 
        $("#taco_info").show();
    });
            
    $("#halal_button").on("click",function(){
        //halal div show 
        $("#halal_info").show();
    });

    $("#nathan_button").on("click",function(){
        //nathan div show 
        $("#nathan_info").show();
    });

  });
