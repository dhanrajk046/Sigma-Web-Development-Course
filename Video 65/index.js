const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let n = parseInt(input);

    if (isNaN(n)) {
        console.log("Please enter a valid number.");
    } else if (n < 0) {
        console.log("Factorial is not defined for negative numbers.");
    } else {
        let factorial = 1;

        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        console.log("Factorial of " + n + " is: " + factorial);
    }

    rl.close();
});