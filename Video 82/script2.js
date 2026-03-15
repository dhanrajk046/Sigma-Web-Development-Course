// console.log("Program started")
 // Q1
// Hello
// World

// World

// setTimeout(() => {
//     console.log("Hello");  
// }, 5000);

//Q2
// function average(...numbers) {
//     let sum = 0;

//     for( let num of numbers) {
//         sum += num;   
//     }
//     return sum/numbers.length;

// }

// let arr = [10,20,30,40,50];
// let result = average(...arr);
// console.log("Average:", result);
    
// Q3
function delay(n) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("resolved after ${n} seconds");
        }, n*1000);
    })
}

(async function (){ //IIFE
    console.log(await delay(1));
    console.log(await delay(2));
    console.log(await delay(3));
})();