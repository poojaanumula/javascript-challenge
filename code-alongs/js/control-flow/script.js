// Control Flow

// if else

// if (some condition === true) {
// this code will run
//} else (if it's not true){
// this code will run
//}

let passwordFromLoginForm = "MyPass";
const savedPassword = "MyPass";

if (passwordFromLoginForm === savedPassword) {
    console.log("Welcome");
} else {
    console.log("Incorrect password");
}

// Recipes website

let keyword = "apple";
keyword = "cucumber";

if (keyword === "apple") {
    console.log("Apple pie");
} else if (keyword === "banana") {
    console.log("Banana bread");
} else if (keyword === "tomato") {
    console.log("Tomato soup");
} else {
    console.log("Sorry no recipes for that ingredient");
}

let score = 91;

// if (score >= 80 && score < 90) {
//     console.log("B");
// } else if (score >= 90) {
//     console.log("A");
// } else if (score >= 70) {
//     console.log("C");
// } else {
//     console.log("You failed");
// }

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("You failed");
}

// If you don't chain your conditions in one block, all of the true ones will run
// if (score >= 90) {
//     console.log("A");
// }

// if (score >= 80) {
//     console.log("B");
// }

// if (score >= 70) {
//     console.log("C");
// }
console.log("run the rest of the code");

// EVEN OR ODD
let n = 4;

if (n % 2 === 0) {
    console.log("n is even");
} else {
    console.log("n is odd");
}

if (!(n % 2)) {
    console.log("n is even");
} else {
    console.log("n is odd");
}

if (n % 2) {
    console.log("n is odd");
} else {
    console.log("n is even");
}
// COMPARING NUMBERS
let x = 10;
let y = 20;
if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("x is smaller than y");
} else {
    console.log("x is equal to y");
}

// USER INPUT
const userInput = true;

if (typeof userInput === "number") {
    const numSquared = userInput * userInput;
    console.log(numSquared);
} else if (typeof userInput === "string") {
    console.log(userInput);
} else {
    console.log("invalid input!");
}

// alternative to if else
// switch statement

// calculator

const num1 = 23;
const num2 = 2;
let op = "-";

if (op === "+") {
    console.log(num1 + num2);
} else if (op === "-") {
    console.log(num1 - num2);
} else if (op === "*") {
    console.log(num1 * num2);
} else if (op === "/") {
    console.log(num1 / num2);
} else {
    console.log("error");
}
console.log("Start of switch");
switch (op) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("error");
}

const input = "exit";

switch (input) {
    case "e":
    case "E":
    case "exit":
        console.log("Exit the app");
        break;
    case "c":
        console.log("Continue running the app");
        break;
    default:
        console.log("Invalid command");
}

if (input === "e" || input === "E" || input === "exit") {
    console.log("Exit the app");
}

let num = 1;
// if number is more than 0 but less than 2
// num > 0 && num < 2

if (num > 0 && num < 2) {
    console.log("correct number");
}

switch (true) {
    case num > 0 && num < 2:
        console.log("correct number from switch");
}

/*
Check if a number is odd or even

1. Create variable `n`
1. Write an if / else block
1. If the number passed in is even return a string `"n is even"`
1. If the number is odd return a string `"n is odd"`
*/

const n = 45;
if (n%2===0){
    console.log(n, "is even")
}
else{
    console.log(n," is odd")
}
/*
Check for the smallest value

1. Create two variables `x` & `y`
1. Write an if / else block
1. It should compare a number `x` to another number `y`
1. It should print ("`x` is greater than `y`") in the console
1. Or "`x` is smaller than `y`"
1. Or "`x` is equal to `y`"
1. Depending on the value of `x` and `y`
*/

const x= 10;
const y=20;
if(x>y){
    console.log(`x is greater than y`)
}
else if(x<y){
    console.log(`x is smaller than y`)
}
else{
    console.log(`x is equal to y`)
}

/*
Console log the user's input depending on the data type

1. Create a variable `userInput`
1. Write an if / else block
1. If the input is a number, it should console log that number but squared
1. If the input is a string, it should console log that input
1. If the input is anything else, the console should say "invalid input"
*/
const user="pooja";
if (typeof user=== "string")
{
    console.log(user)
}
else if(typeof user === "number"){
   console.log(user)
}
else{
    console.log("invalid input")
}


