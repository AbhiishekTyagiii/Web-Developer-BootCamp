// Adding the actionEventListener() on the HTML elemens like button and generate the response 
var numberofDrumButtons=document.querySelectorAll(".drum").length;

//Detecting the button press for mouse
for(var i=0;i<numberofDrumButtons;i++)
{  
  document.getElementsByClassName("drum")[i].addEventListener("click",function()
{
  var buttoncreateEvent=this.innerHTML;
  makeSound(buttoncreateEvent);
  buttonAnimation(buttoncreateEvent);
});
}
//Detecting the button press for keyboard
document.addEventListener("keydown",function(event)
{
  var ev=event.key;
  makeSound(ev);
  buttonAnimation(ev);
});
// Method to handle the event
function makeSound(vent)
{
  switch(vent)
  {
    case"w":
    var ad=new Audio("sounds/tom-1.mp3");
    ad.play();
    break;

    case"a":
    var ad=new Audio("sounds/tom-2.mp3");
    ad.play();
    break;

    case"s":
    var ad=new Audio("sounds/tom-3.mp3");
    ad.play();
    break;

    case"d":
    var ad=new Audio("sounds/tom-4.mp3");
    ad.play();
    break;

    case"j":
    var ad=new Audio("sounds/snare.mp3");
    ad.play();
    break;

    case"k":
    var ad=new Audio("sounds/crash.mp3");
    ad.play();
    break;
  
    case"l":
    var ad=new Audio("sounds/kick-bass.mp3");
    ad.play();
    break;

    default:console.log(vent);
  }
}
// Describe the function here to add the animation on the clicked button 
function buttonAnimation(currentkey)
{
  var activebutton=document.querySelector("."+currentkey);
  //Adding the class on the active button to apply the animation using javascript
   activebutton.classList.add("pressed");
  // how much time they appear remove the adding class in 100 miliseconds
  setTimeout(function(){
    activebutton.classList.remove("pressed");},1000);
}