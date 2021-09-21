


    // Gets the values from the user prompt, and assigns a variable to each.
let length = parseInt(prompt("What is the length?"));
let width = parseInt(prompt("What is the width?"));

// multiplies the length by the width to get the area of the rectangle, and assigns it to the variable "area"
let area = length * width
// adds the length and width of the rectangle and multiplies the result by two to get the perimeter. Assigns this value to the variable "perim"
let perim = 2 * (length + width);

// Displays the calculated area and perimeter on the webpage
document.getElementById("display1").innerHTML = `<p>The area: ${area} </p>`;
document.getElementById("display2").innerHTML = `<p>The perimeter: ${perim} </p>`;
// If you didn't use a number for the length or width, you get this error message.



if (isNaN(length && width) || length < 0 || width < 0){
    document.getElementById("display1").innerHTML = "<p style = 'color: red'>Make sure you only use real numbers!</p>";
    document.getElementById("display2").innerHTML = " ";

  }
