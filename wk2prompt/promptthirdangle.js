

    // Gets the values the user enters into the prompt, and assigns a variable to each.
let deg1 = parseInt(prompt("Enter the first angle: "));
let deg2 = parseInt(prompt("Enter the second angle: "));


// Squares the values of deg1 and deg2, adds them together, and assigns the total to the variable "calculated".
let calculated = Math.pow(deg1, 2) + Math.pow(deg2, 2);

// finds the third angle by getting the square root of calculated.
let deg3 = Math.sqrt(calculated).toFixed(2);

// Assigns the squared values of deg1 and deg2 to their respective variables.
let deg1sqrd = Math.pow(deg1, 2)
let deg2sqrd = Math.pow(deg2, 2)

//Displays the squared values of deg1 and deg2.
document.getElementById("display1").innerHTML = `<p> Since ${deg1} squared = ${deg1sqrd},`; 
document.getElementById("display2").innerHTML = `<p> and ${deg2} squared = ${deg2sqrd}, </p>`;

// Calculates and displays the missing degree of the triangle by getting the square root of "calculated", and rounds it to 2 decimal points.

document.getElementById("display3").innerHTML = `<p>then the third angle is:  ${deg3} !</p>`;

// If you didn't use a number for one of the degrees you, get this error message.
if (isNaN(calculated)|| deg1 < 0 || deg2 < 0){
    document.getElementById("display1").innerHTML = "<p style = 'color: red'>Make sure you only use numbers!</p>";
    document.getElementById("display2").innerHTML = " ";
    document.getElementById("display3").innerHTML = " ";
  }

