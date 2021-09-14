
function calc(){

    // Gets the values the user enters into the form, and assigns a variable to each.
let bill = parseFloat(document.getElementById("bill").value);
// the percentage is divided by 100 to make it a decimal value.
let prct = parseFloat(document.getElementById("percent").value) / 100;
let split = parseFloat(document.getElementById("split").value);

// Declares the tip variable by multiplying the bill by the decimal value percentage. toFixed makes sure we get values to two decimal points
let tip = Number((bill * prct).toFixed(2)) ;
// Declares the total by adding the bill and tip together
let total = (bill + tip);
// gets the total each person pays by dividing the grand total by the number of people.
let ttlEach = Number((total/split).toFixed(2));

//Displays what the tip comes to
document.getElementById("display1").innerHTML = "<p>The tip total comes to: $"  + tip.toFixed(2)+ "</p>";
// Displays the grand total
document.getElementById("display2").innerHTML = "<p>The total plus tip comes to: $" + total.toFixed(2)+ "</p>";
// Displays what each person pays
document.getElementById("display3").innerHTML = "<p>Each person should pay: $" + ttlEach.toFixed(2) + "</p>";
// If you didn't use a number for the bill or tip (You always leave a tip, RIGHT?!) displays an error
if (isNaN(bill && prct)){
    document.getElementById("display1").innerHTML = "<p style = 'color: red'>Make sure you only use numbers!</p>";
    document.getElementById("display2").innerHTML = " ";
    document.getElementById("display3").innerHTML = " ";
  }

}