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

const u = 45;
if (u%2===0){
    console.log(u, "is even")
}
else{
    console.log(u," is odd")
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

const m= 10;
const f=20;
if(m>f){
    console.log(`m is greater than f`)
}
else if(x<y){
    console.log(`f is smaller than m`)
}
else{
    console.log(`f is equal to m`)
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
/*
Create a switch block that will log a string for each day of the week.

1. Create a variable called `day`
2. The switch will be given a number and return the matching days of the week
3. e.g. if `day = 2`, the switch should print `Today is Tuesday` in the console.
4. Your switch block should also handle numbers out of range
*/
let day = 2;
switch(day){
case 1: console.log("Today is Monday");
break;
case 2: console.log("Today is Tuesday");
break;
case 3: console.log("Today is Wednesday");
break;
case 4: console.log("Today is Thursday");
break;
case 5: console.log("Today is Friday");
break;
case 6: console.log("Today is Saturday");
break;
case 7: console.log("Today is Sunday");
break;
default:console.log("Out of range")
}

/*
Tell the user what eye colour their child would have.

1. Create two variables `parent1` and `parent2`
2. Given the eye colour of each parent, it should console log the probability
   of their child having different eye colours, for example:
   `Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%`
3. Use the following image as a reference
   ![alt text](image.png)
   */
const parent1= "brown"; 
const parent2= "brown";
const eyes = parent1+parent2;
switch(eyes){
    case ("brownbrown"):
        console.log("Your eye colours are brown and brown, the chances of your child having blue eyes is 6%, brown is 70% and green is 18%")
    break;
    default:console.log("invalid eyes")
    }
