console.log("Connected...");
alert("Enter two numbers to see if the first is greater than the second.");
let firstNumber = Number(prompt("Enter the first number.", ""));
console.log(firstNumber);
let secondNumber = Number(prompt("Enter the second number", ""));
console.log(secondNumber);

// Check both numbers to see if they are not equal (!==) to themselves (confirming variable is NaN) and then give error.
// Else, continue on and check if first is great than second.
if ((firstNumber !== firstNumber) || (secondNumber !== secondNumber)) {
    alert(
        "You've entered something other than a number.  Refresh the page and try again."
    );
} else {
    result = firstNumber > secondNumber;
    confirm(`Is ${firstNumber} greater than ${secondNumber}?  ${result}`);
}
