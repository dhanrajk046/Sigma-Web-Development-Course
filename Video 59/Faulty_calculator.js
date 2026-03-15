
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("⚠️ Faulty Calculator Activated");
console.log("Warning: Answers may be incorrect!");

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
        rl.question("Enter second number: ", (num2) => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;
            let isFaulty = Math.random() < 0.1; // 10% chance of wrong answer

            if (operator === "+") {
                result = isFaulty ? num1 - num2 : num1 + num2;
            } 
            else if (operator === "-") {
                result = isFaulty ? num1 * num2 : num1 - num2;
            } 
            else if (operator === "*") {
                result = isFaulty ? num1 + num2 : num1 * num2;
            } 
            else if (operator === "/") {
                if (num2 === 0) {
                    console.log("❌ Cannot divide by zero");
                    rl.close();
                    return;
                }
                result = isFaulty ? num1 ** num2 : num1 / num2;
            } 
            else {
                console.log("❌ Invalid operator");
                rl.close();
                return;
            }

            if (isFaulty) {
                console.log("🤖 Fault Injected!");
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
