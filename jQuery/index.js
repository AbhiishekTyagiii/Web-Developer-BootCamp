//Setting the property
//$("h1").css("font-size","10rem");
//$("h1").css("color","firebrick");

// Getting the property color of H1 element
// console.log($("h1").css("color"));

//Seperate the style to the functionality to this 

//Adding class to the hTML Code with jQuery()

$("h1").addClass("big-title");
 
//Removing class to the HTML code with jQuery()
$("h1").removeClass("big-title");


//Adding multiple class to the html Element at once time
$("h1").addClass("big-title  margin-50");
$("h1").hasClass("margin-50");


//Changing the text of the html element 
$("h1").text("BYE");
$("button").text("Don't click me");
$("button").addClass("big-button");

// Changing the innerhtml with html in  jQuery.
//$("button").html("<em>hey</em>");
//$("h1").html("<em>Abhishek Tyagi</em>");

// Changing the innerhtml with text in  jQuery.
$("button").text("hey");


//Getting  the  value of attribute with jQuery.
console.log($("img").attr("src"));

//Setting  the value of attribute with jQuery.
$("a").attr("href","https://www.yahoo.com/");
console.log($("h1").attr("class"));

//Adding event Listener to the Html element
//$("h1").click(fuction(){
    // $("h1").css("color","purple");
 //});
 


