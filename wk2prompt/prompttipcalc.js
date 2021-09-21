
    // Gets the values the prompt, and assigns a variable to each.
    let bill = parseFloat(prompt("Bill total: "));
    // the percentage is divided by 100 to make it a decimal value.
    let prct = parseFloat(prompt("What percent do you want to tip?")) /100 ;

    let split = parseFloat(prompt("How many ways are you splitting?"));
    
    // Declares the tip variable by multiplying the bill by the decimal value percentage. toFixed makes sure we get values to two decimal points
    let tip = parseFloat((bill * prct));
    // Declares the total by adding the bill and tip together
    let total = (bill + tip);
    // gets the total each person pays by dividing the grand total by the number of people.
    let ttlEach = (total/split);
    
    //Displays what the tip comes to
    document.getElementById("display1").innerHTML = `<p>The tip total comes to: $${tip.toFixed(2)}. </p>`;
    // Displays the grand total
    document.getElementById("display2").innerHTML = `<p>The total plus tip comes to: $${total.toFixed(2)}.</p>`;
    // Displays what each person pays
    document.getElementById("display3").innerHTML = `<p>Each person should pay: $${ttlEach.toFixed(2)}.</p>`;
    // If you didn't use a number for the bill or tip (You always leave a tip, RIGHT?!) displays an error
    if (isNaN(bill && prct)|| bill < 0 || prct < 0 || split < 0){
        document.getElementById("display1").innerHTML = "<p style = 'color: red'>Make sure you only use real numbers!</p>";
        document.getElementById("display2").innerHTML = " ";
        document.getElementById("display3").innerHTML = " ";
      }
    