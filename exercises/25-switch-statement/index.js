console.log("Connected...");

let weekdayNumber = 5;
let message = 'asdf';

switch (weekdayNumber) {
    case 1:
        // console.log("Today is Monday.");
        message = "Monday";
        break;
    case 2:
        // console.log("Today is Tuesday.");
        message = "Tuesday";
        break;
    case 3:
        // console.log("Today is Wednesday.");
        message = "Wednesday";
        break;
    case 4:
        // console.log("Today is Thursday.");
        message = "Thursday";
        break;
    case 5:
        // console.log("Today is Friday.");
        message = "Friday";
        break;
    case 6:
        // console.log("Today is Saturday.");
        message = "Saturday";
        break;
    case 7:
        // console.log("Today is Sunday.");
        message = "Sunday";
        break;
    default:
        // console.log("Error: Number not between 1-7");
        message = "Error: Number not between 1-7";
        break;
}

console.log(`Today is ${message}`);