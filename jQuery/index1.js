
//Adding event Listener to the Html element

$("h1").click(function(){
    $("h1").css("color","red");
});

/*Adding event Listener to the each  button
$(".1").mouseleave(function(){
    $("h1").css("color","red");
});

$(".2").mouseleave(function(){
    $("h1").css("color","pink");
});


$(".3").mouseleave(function(){
    $("h1").css("color","Blue");
});

$(".4").mouseleave(function(){
    $("h1").css("color","green");
});

$(".5").mouseleave(function(){
    $("h1").css("color","black");
});*/

//Adding class with jquery
$("button").addClass("big-button");

//Adding event to input 
$("input").keydown(function(event){
    console.log(event.key);
})

//Adding event to entire screen 
 $("body").keydown(function(event){
    $("h1").html(event.key);
 })

 //Adding event listener with on() method
//$("h1").on("mouseleave",function(){
// $("h1").text("Radhakrishna");
//});

//$("h1").on("mouseenter",function(){
//
// $("h1").html("<em>Hello Abhishek</em>");
//});

//Adding the button on before the h1 
//$("h1").before("<button>New</button>");

//Adding the button on after the h1 
//$("h1").after("<button>New</button>");

//Adding the newly created button in  prepand
//$("h1").prepend("<button>New</button>");

//Adding the newly created button in append
//$("h1").append("<button>New</button>");

//Remove the specific element in the HTML through jQuery.
// $("h1").remove();

//Appear or disappear h1
$("button").on("click",function(){
    $("h1").fadeToggle();
});

//Adding animation with animate()
$("button").on("click",function(){
  $("h1").animate({margin:"20%"});
});

//Javscript code to add event listener 
//$("button").on("click",function(){
    //$("h1").html("Abhishek Tyagi");
//});

//Changing all 3 methods together 
$("button").on("click",function(){
    $("h1").slideToggle();
});


