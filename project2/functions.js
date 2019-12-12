// Functions lesson 1
// Functions are basically a list of commands
// Functions have names, and execute when you call them

//Ask user for name ,then it

//Declared a Functions
//These don't execute until called


//Ask user for name, then print it
function getName(){
    //write your lists of commands inside the {}
    //1. ask for user's name
    var name =prompt("What's your name?");
    //2. print user's name
    document.write(name);

}


//call the Function
//calling the function executes it
getName();

// Variables for our profile


//Declaration
var name: "Kiki";
var favcolor: "purple";
var favfood: "cheese";
function showProfile(){
   document.querySelector(".text").innerHTML += name + '<br>';
   document.querySelector(".text").innerHTML += favcolor + '<br>';
   document.querySelector(".text").innerHTML += favfood + '<br>';


};




//call Function
showprofile();

document.querySelector(".profile-btn").addEventListener("click", showProfile);

//Declare our reset button

function reset(){
  //clear the terxt div
  document.queryselector(".text").innerHTML = "";
}


document.querySelector(".reset-btn").addEventListener("click, reset");
