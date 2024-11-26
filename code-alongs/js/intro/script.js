// Primitive Data types in JS

// numbers (integers, decimal point numbers, any numeric value apart from some really large nums)

// strings - text "257462hello!!!,,,"

// boolean - true/false

// undefined - value missing

// null - no value
// book = { author: null, title: "Bible"}
// book.noOfPages -> undefined

console.log(23);
console.log("martyna");
console.log("krol");
console.log(true);
console.log("true");
console.log(12);
console.log("12");

console.log(null);
console.log(undefined);

console.log(typeof "hello");

// challenge

console.log(typeof 15); // Prediction: number
console.log(typeof 5.5); // Prediction: number
console.log(typeof NaN); // Prediction: number
console.log(parseInt("hello"));
console.log(parseInt("1"));
console.log(typeof "hello"); // Prediction: string
console.log(typeof true); // Prediction: boolean
console.log(typeof (1 != 2)); // Prediction: boolean
console.log("hamburger" + "s"); // Prediction: string
console.log("hamburgers" - "s"); // Prediction: NaN
console.log("1" + "3"); // Prediction: 13
console.log("1" - "3"); // Prediction: -2
console.log("johnny" + 5); // Prediction: johnny5
console.log("johnny" - 5); // Prediction: NaN
console.log(99 * "luftbaloons"); // Prediction: NaNs

console.log(1 + 5 + "johnny");
console.log(1 + "johnny" + 5);
console.log("johnny" + 5 + 1);

// Variables
// A way to store values in memory, container for a value

// Two ways of creating variables
const myName = "Martyna";
console.log(myName);
// myName = "Kate";
// console.log(myName);

let dayOfFeb = 28;
console.log(dayOfFeb);
dayOfFeb = 29;
console.log(dayOfFeb);

let x;
console.log(x);
x = 1;
console.log(x);
