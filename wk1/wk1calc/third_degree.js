
function calc(){

    // Gets the values the user enters into the form, and assigns a variable to each.
let deg1 = parseInt(document.getElementById("deg1").value);
let deg2 = parseInt(document.getElementById("deg2").value);

// Squares the values of deg1 and deg2, adds them together, and assigns the total to the variable "calculated".
let calculated = Math.pow(deg1, 2) + Math.pow(deg2, 2);

//Displays the squared values of deg1 and deg2.
document.getElementById("display1").innerHTML = "<p> Since " + deg1 + " squared = " + Math.pow(deg1, 2) + ","; 
document.getElementById("display2").innerHTML = "<p> and " + deg2 + " squared = " + Math.pow(deg2, 2) + ", </p>";

// Calculates and displays the missing degree of the triangle by getting the square root of "calculated", and rounds it to 2 decimal points.
document.getElementById("display3").innerHTML = "<p>then the third angle is: " + Math.sqrt(calculated).toFixed(2) + "!</p>";

// If you didn't use a number for one of the degrees you, get this error message.
if (isNaN(calculated)){
    document.getElementById("display1").innerHTML = "<p style = 'color: red'>Make sure you only use numbers!</p>";
    document.getElementById("display2").innerHTML = " ";
    document.getElementById("display3").innerHTML = " ";
  }

}