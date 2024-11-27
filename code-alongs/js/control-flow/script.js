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

// DAYS OF THE WEEK

let day = 14;

switch (day % 7) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Today is Sunday");
        break;
}

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please enter a number between 1 and 7");
}

// EYE COLOUR
// let parent1 = "brown";
// let parent2 = "green";
// let eyeInherit = parent1 + parent2;

// let browPercent = 0;
// let bluePercent = 0;
// let greenPercent = 0;

// switch (eyeInherit) {
//     case "BrownBrown":
//     case "brownbrown":
//         browPercent = "75%";
//         greenPercent = "18.75%";
//         bluePercent = "6.25%";
//         // console.log(
//         //     "The chance of your child having brown eyes is 75%, green is 18.75%, blue is 6.25%"
//         // );
//         break;
//     case "GreenBrown":
//     case "BrownGreen":
//     case "browngreen":
//     case "greenbrown":
//         console.log(
//             "The chance of your child having brown eyes is 50%, green is 37.5%, blue is 12.5%"
//         );
//         break;
//     case "BlueBrown":
//     case "BrownBlue":
//     case "brownblue":
//     case "bluebrown":
//         console.log(
//             "The chance of your child having brown eyes is 50%, blue is 50%, green is 0%"
//         );
//         break;
//     case "GreenGreen":
//     case "greengreen":
//         console.log(
//             "The chance of your child having green eyes is 75%, blue is 25%, brown is <1%"
//         );
//         break;
//     case "GreenBlue":
//     case "BlueGreen":
//     case "bluegreen":
//     case "greenblue":
//         console.log(
//             "The chance of your child having green eyes is 50%, blue is 50%, brown is 0%"
//         );
//         break;
//     case "BlueBlue":
//     case "blueblue":
//         console.log(
//             "The chance of your child having blue eyes is 99%, green is 1%, brown is 0%"
//         );
//         break;
//     default:
//         console.log("Invalid Eye Color");
// }

console.log(
    `The chance of your child having brown eyes is ${browPercent}, green is ${greenPercent}, blue is ${bluePercent}`
);

// const parent1 = "brown";
// const parent2 = "brown";
// switch (true) {
//     case parent1 === "brown" && parent2 === "brown":
//         console.log(
//             `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%`
//         );
//         break;
//     case (parent1 === "green" && parent2 === "brown") ||
//         (parent2 === "green" && parent1 === "brown"):
//         console.log(
//             `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%`
//         );
//         break;
//     case (parent1 === "blue" && parent2 === "brown") ||
//         (parent2 === "blue" && parent1 === "brown"):
//         console.log(
//             `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%`
//         );
//         break;
//     case parent1 === "green" && parent2 === "green":
//         console.log(
//             `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%`
//         );
//         break;
//     case (parent1 === "green" && parent2 === "blue") ||
//         (parent2 === "green" && parent1 === "blue"):
//         console.log(
//             `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%`
//         );
//         break;
//     case parent1 === "blue" && parent2 === "blue":
//         console.log(
//             `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%`
//         );
//         break;
//     default:
//         console.log("invalid inputs");
// }

let parent1 = "green";
let parent2 = "brown";
let brown;
let blue;
let green;

let pool = 0;
switch (parent1) {
    case "brown":
        pool += 1;
        break;
    case "green":
        pool += 2;
        break;
    case "blue":
        pool += 4;
        break;
}
switch (parent2) {
    case "brown":
        pool += 1;
        break;
    case "green":
        pool += 2;
        break;
    case "blue":
        pool += 4;
        break;
}
switch (pool) {
    // Two Browns
    case 2:
        brown = "75";
        blue = "6.25";
        green = "18.75";
        break;
    // Brown and Green
    case 3:
        brown = "50";
        blue = "12.5";
        green = "37.5";
        break;
    // Green and Green
    case 4:
        brown = "<1";
        blue = "25";
        green = "75";
        break;
    // Brown and Blue
    case 5:
        brown = "50";
        blue = "50";
        green = "0";
        break;
    // Blue and Green
    case 6:
        brown = "0";
        blue = "50";
        green = "50";
        break;
    // Blue and Blue
    case 8:
        brown = "0";
        blue = "99";
        green = "<1";
        break;
}
console.log(
    `Your eye colors are ${parent1} and ${parent2}, the chancers of your child having blue eyes is ${blue}%, brown is ${brown}%, and green is ${green}%`
);
