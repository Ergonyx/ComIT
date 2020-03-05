console.log("Connected...");
const userData = {
    name: "Alex",
    age: "37",
    phone: "555-555-5555",
    address: "123 CSSisEVIL St.",
    postal: "H0H 0H0",
    isMarried: false
}

// Show all even numbers between min and max values.
function showEven(min, max) {
    for (i = min; i < max; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is `)
        }
    }
}

function showUser() {
    console.log(`Name: ${userData.name}\nAge: ${userData.age}\nPhone: ${userData.phone}\nAddress: ${userData.address}\nPostal: ${userData.postal}\nMarried?: ${userData.isMarried}`)
}

function fibo(n) {
let seq = [0, 1];
    for (let i = 2; i < n + 1; i++){
        seq.push(seq[i - 2] + seq[i -1])
        console.log(seq)
    }
    return seq[n]
}

function showName() {
    console.log("==========");
    console.log("=  Alex  =");
    console.log("==========");
}