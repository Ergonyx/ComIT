let age = 37; // Number
let firstName = "Alex"; // String
let courseCompleted = true; // Boolean
let score = null;
let winningNumbers;

console.log(
    `String Conversion:\n
        First Name: ${firstName} becomes First Name: ${Number(firstName)}
        --- 'Number(firstName)' returns 'NaN' because a string containing anything but numbers can't be turned into a number.\n
        First Name: ${firstName} becomes First Name: ${Boolean(firstName)}
        --- 'Number(firstName)' returns 'true' because a non-empty string is true.  "" would return false.`
);
console.log(
    `Number Conversion:\n
        Age: ${age} becomes Age: ${String(age)}
        --- 'String(age)' returns '37' which looks like a number but is actually a string.\n
        Age: ${age} becomes Age: ${Boolean(age)}
        --- 'Boolean(age)' returns 'true' because any number that isn't '0' will return 'true.'`
);
console.log(
    `Boolean Conversion:\n
        Course Completed: ${courseCompleted} becomes Course Completed: ${String(
        courseCompleted
    )}
        --- 'String(courseCompleted)' returns 'true' because \n
        Course Completed: ${courseCompleted} becomes Course Completed: ${Number(
        courseCompleted
    )}
        --- 'Number(courseCompleted)' returns '1' because 1 = true and 0 = false.  (Any number other than 0 returns true)`
);
console.log(`Other Variables:
    Score: ${score}
    Winning Numbers: ${winningNumbers}`);
