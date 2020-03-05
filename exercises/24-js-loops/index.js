console.log("Connected...");
let output = document.getElementById('output');
let sum = 0;
// Add all numbers between 0 and 1000.  Break at 400 or greater.
for (let i = 0; i < 1000; i++) {
    sum += i;
    console.log(sum);
    output.textContent = `For loop: ${sum}`;
    if (sum > 400) { break; }
}

// Print 0 to 10.
let n = 0;

while (n <= 10) {
    console.log(`While - 0 to 10: ${n}`);
    n++;
}

// Print 100 to 0.
let x = 100;

do {
    console.log(`Do/While - 100 to 0: ${x}`);
    x--;
} while (x >= 0);


// Print even numbers.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    }
}

// Create stairs.
let stairs = '';
for (let i = 0; i <= 13; i++) {
    stairs += "*";
    console.log(stairs);
}