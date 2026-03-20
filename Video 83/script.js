// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// function sortingHat(students) {
//     return students.map(name => {
//         let house;

//         if (name.length < 6) house = "Gryffindor";
//         else if (name.length < 8) house = "Hufflepuff";
//         else if (name.length < 12) house = "Ravenclaw";
//         else house = "Slytherin";

//         return { name, house };
//     });
// }


// function sortingHat(students) {
//     return students.map(name => {
//         let house;

//         if (name.length < 6) house = "Gryffindon";
//         else if (name.length < 8) house = "Hufflepuff";
//         else if (name.length <12) house = "Ravenclaw";
//         else house = "Slytherin";

//         return { name, house };
//     });
// }


// // 👇 THIS IS IMPORTANT
// let students = ["Harry", "Hermione", "Ron", "Dumbledore"];

// let result = sortingHat(students);

// console.log(result);



// let students = ["Harry", "Hermione", "Ron", "Dumbledore"];

// let result = sortingHat(students);

// console.log(result);


// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// function doubleTrouble(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         // Check if current is same as previous
//         if (i > 0 && arr[i] === arr[i - 1]) {
//             result.push(arr[i]); // don't double
//         } else {
//             result.push(arr[i] * 2); // double
//         }
//     }

//     return result;
// }

// function doubleTrouble(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i >0 && arr[i] === arr[i - 1]) {
//             result.push(arr[i]);
//         } else {
//             result.push(arr[i] *2);
//         }
//     }
//     return result;
// }

// let arr = [2, 2, 3, 4, 4, 4, 5];

// console.log(doubleTrouble(arr));

// let arr = [2, 2, 3, 4, 4, 4, 5];
// console.log(doubleTrouble(arr));

// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// function mirrorString(str) {
//     let reversed = str.split('').reverse().join('');
//     return str + reversed;
// }

// // ===== SAMPLE =====
// let input = "abc";

// let output = mirrorString(input);

// console.log("Input: ", input);
// console.log("Output:", output);

// function mirrorString(str) {
//     let reversed = str.split('').reverse().join('');
//     return str + reversed;
// }

// let input = "abc";
// let output = mirrorString(input);

// console.log("Input: ", input);
// console.log("Output: ",output);

// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function validatePassword(password) {
//     if (password.length < 8) return false;

//     let hasUpper = /[A-Z]/.test(password);
//     let hasLower = /[a-z]/.test(password);
//     let hasDigit = /[0-9]/.test(password);

//     return hasUpper && hasLower && hasDigit;
// }

// function validatePassword(password) {
//     if (password.length < 8) return false;
    
//     let hasUpper = /[A-Z]?/.test(password);
//     let hasLower = /[a-z]/.test(password);
//     let hasDigit = /[0-9]/.test(password);

//     return hasUpper && hasLower && hasDigit;
// }

// let password = "Hello123";

// let result = validatePassword(password);

// console.log("Password:", password);
// console.log("Valid:", result);

// let password = "Hello123";
// let result = validatePassword(password);


// console.log("Password:", password);
// console.log("Valid:", result);

// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sumSelector(arr) {
//     let sum = 0;

//     for (let num of arr) {
//         if (num < 0) {
//             break; // stop when negative found
//         }
//         sum += num;
//     }

//     return sum;
// }

// function sumSelector(arr) {
//     let sum = 0;

//     for (let num of arr){
//         if (num < 0) {
//             break;// stop hen negative found
//         }
//         sum += num;
//     }
//     return sum;
// }

// let input = [1, 2, 3, -1, 5];

// let result = sumSelector(input);

// console.log("Input: ", input);
// console.log("Sum:   ", result);

// let input = [1, 2, 3, 4, 5];
// let result = sumSelector(input);

// console.log("Input: ", input);
// console.log("Sum: ", result);

// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// function countvowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// let input = "Hello World";

// let result = countVowels(input);

// console.log("Input: ", input);
// console.log("Vowel Count:", result);

// let input = "Hello World";
// let result = countvowels(input);

// console.log("Input: ", input);
// console.log("Vowel Count:", result);

// 7. The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// function saveNoteToLocalStorage(note) {
//     // Convert object to string
//     let noteString = JSON.stringify(note);

//     // Save to localStorage
//     localStorage.setItem("note", noteString);
// }

// function saveNoteToLocalStorage(note) {
//     let noteString = JSON.stringify(note);
//     localStorage.setItem("note", noteString);
// }

// let note = {
//     title: "My First Note",
//     content: "This is my note content",
//     date: new Date().toLocaleString()
// };

// let note = {
//     title: "My First Note",
//     content: "This is my note content",
//     date: new Date().toLocaleString()
// };

// saveNoteToLocalStorage(note);

// saveNoteToLocalStorage(note);

// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// function asyncDouble(arr) {
//     return arr.map(num => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500);
//         });
//     });
// }

// function asyncDouble(arr) {
//     return arr.map(num => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500);
//         });
//     });
// }

// async function main() {
//     let numbers = [1, 2, 3];
//     let result = asyncDouble(numbers);

//     let finalResult = await Promise.all(result);

//     console.log(finalResult);
// }

// main();

// async function main() {
//     let numbers = [1 ,2 ,3];
//     let result = asyncDouble(numbers);
//     let finalresult = await Promise.all(result);
//     console.log(finalresult);
// }
// main();

// let numbers = [1, 2, 3];

// let result = asyncDouble(numbers);

// console.log(result); // array of promises

// let numbers = [1, 2, 3];
// let result = asyncDouble(numbers);
// console.log(result);


// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// function placeOrder(orderId) {
//     return new Promise((resolve, reject) => {
//         // Random delay between 500ms and 2000ms
//         let delay = Math.floor(Math.random() * 1500) + 500;

//         setTimeout(() => {
//             resolve(`✅ Order ${orderId} placed successfully in ${delay} ms`);
//         }, delay);
//     });
// }

// function placeOrder(orderID) {
//     return new Promise((resolve, reject) => {
//         let delay = Math.floor(Math.random() * 1500) + 500;
//         setTimeout(() => {
//             resolve(`✅ Order ${orderID} placed successfully in ${delay} ms`);
//         },delay);
//     });
// }

// placeOrder(101).then(message => {
//     console.log(message);
// });

// placeOrder(101).then(message => {
//     console.log(message);
// });

// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// function brewCoffee(type) {
//     return new Promise((resolve, reject) => {
//         // Random delay between 500ms and 2000ms
//         let delay = Math.floor(Math.random() * 1500) + 500;

//         setTimeout(() => {
//             resolve(`☕ Your ${type} coffee is ready in ${delay} ms`);
//         }, delay);
//     });
// }

// function brewcoffee(type) {
//     return new Promise((resolve, reject) => {
//         let delay = Math.floor(Math.random() * 1500) + 500;

//         setTimeout(() => {
//             resolve(`☕ Your ${type} coffee is ready in ${delay} ms`);
//         }, delay);
//     });
// }

// brewCoffee("Cappuccino").then(message => {
//     console.log(message);
// });

// brewcoffee("Cappuccino").then(message => {
//     console.log(message);
// })

// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// function filterProducts(products, criteria) {
//     return products.filter(product => {
//         return Object.keys(criteria).every(key => {
//             return product[key] === criteria[key];
//         });
//     });
// }

// function filterProducts(products, criteria) {
//     return products.filter(product => {
//         return Object.keys(criteria).every(key => {
//             return product[key] == criteria[key];
//         });
//     });
// }

// const products = [
//     { name: "Laptop", category: "Electronics", price: 50000 },
//     { name: "Phone", category: "Electronics", price: 20000 },
//     { name: "Shirt", category: "Clothing", price: 1000 }
// ];

// const products = [
//     { name: "Laptop", category: "Electronics", price: 50000 },
//     { name: "phone", category: "Electronics", price: 20000 },
//     { name: "Shirt", category: "Clothing", price: 1000 }
// ]

// // Filter by category
// const result = filterProducts(products, { category: "Electronics" });

// console.log(result);

// const result = filterProducts(products, { category: "Electronics" });
// console.log(result);

// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// function getAuthToken() {
//     const data = JSON.parse(localStorage.getItem("authToken"));

//     if (!data) return null;

//     const currentTime = new Date().getTime();

//     if (currentTime > data.expiry) {
//         localStorage.removeItem("authToken");
//         return null;
//     }

//     return data.token;
// }

// function getAuthToken() {
//     const data = JSON.parse(localStorage.getItem("authToken"));

//     if(!data) return null;

//     const currentTime = new Date().getTime();

//     if (currentTime > data.expiry) {
//         localStorage.removeItem("authToken");
//         return null;
//     }
//     return data.token;
// }

// const token = getAuthToken();

// if (token) {
//     console.log("User is authenticated:", token);
// } else {
//     console.log("Token expired or not found");
// }

// const token = getAuthToken();

// if(token) {
//     console.log("User is authenticated:", token);
// } else {
//     console.log("Token expired or not found");
// }

// localStorage.setItem("authToken", JSON.stringify({
//     token: "mySecretToken",
//     expiry: Date.now() + 60000 // 1 minute
// }));

// localStorage.getItem("authToken");

// Refresh page 🔄
// 👉 Now output should be:
// User is authenticated: mySecretToken

// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

// function calculateTotal(products) {
//     return products.reduce((total, product) => {
//         return total + (product.price * product.quantity);
//     }, 0);
// }

// function calculateTotal(products) {
//     return products.reduce((total,products) => {
//         return total + (products.price * products.quantity);
//     }, 0);
// }

// const cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Phone", price: 20000, quantity: 2 },
//     { name: "Headphones", price: 2000, quantity: 3 }
// ];

// const cart = [
//     { name: "Laptop", price: 50000, quantity:1 },
//     { name: "Phone", price: 20000, quantity: 2},
//     { name: "Headphones", price: 2000, quantity: 3 }
// ];

// const total = calculateTotal(cart);

// console.log("Total Cost:", total);

// const total = calculateTotal(cart);
// console.log("Total Cost:", total);

// 14. The Window Scroller:
//     You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

// function smoothScrollToTop() {
//     const scrollStep = -window.scrollY / 15;

//     function scroll() {
//         if (window.scrollY !== 0) {
//             window.scrollBy(0, scrollStep);
//             requestAnimationFrame(scroll);
//         }
//     }

//     scroll();
// }

function smoothScrollToTop() {
    const scrollStep = -window.scrollY / 15;

    function scroll() {
        if(window.scrollY !== 0){
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(scroll);
        }
    }
    scroll();
}

// function smoothScrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

// <button id="scrollBtn">⬆ Back to Top</button>

// // Call this on button click
// document.getElementById("scrollBtn").addEventListener("click", smoothScrollToTop);

document.getElementById("scrollBtn").addEventListener("click", smoothScrollToTop);


// function smoothScrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

// document.getElementById("scrollBtn").addEventListener("click", smoothScrollToTop);
