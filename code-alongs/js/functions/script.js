// What are functions?
// Blocks of code that perform a certain task
// We use them to avoid repetition of code

const student = "Jack";
const student2 = "Kate";
const student3 = "Jenny";

console.log("Hi, my name is " + student);
console.log("Hi, my name is " + student2);
console.log("Hi, my name is " + student3);

function introduceYourself(firstName) {
    // function body
    // this is the code that will run every time I call this function
    const introduction = `Hi, my name is ${firstName}`;
    return introduction;
}

console.log(introduceYourself("Martyna"));
const intro = introduceYourself(student);
console.log(intro);

// rectangle perim

function rectanglePerim(height, width) {
    return (height + width) * 2;
}
console.log(rectanglePerim(10, 12));
const a = 34;
const b = 19;
console.log(rectanglePerim(a, b));

function getFullName(firstName, lastName) {
    console.log("Hi");
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Martyna", "Krol"));
console.log(getFullName("krol", "martyna"));

// parameters are great because they are what makes functions reusable

// function with no parameters

function getCurrentDate() {
    return new Date();
}
console.log(getCurrentDate());
let x = false;
let num = 1;

printSomething();
function printSomething() {
    console.log("something");
    if (num > 0) {
        x = true;
    }
}
// const fromSomething = printSomething();
// console.log(fromSomething);

// arrow function

//console.log(sum(2, 3));
const sum = (num1, num2) => {
    return num1 + num2;
    // return means we stop the execution of that function, this log will never happen
    console.log("hello");
};

console.log(sum(1, 1));

const calculator = (num1, num2, op) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "error";
    }
};

console.log(calculator(2, 2, "+"));
console.log(calculator(12, 2, "/"));

// Pure functions - homework
function circleArea(r){
    const area = 3.14 * r * r;
    return area;
    }
    
console.log("Area of circle is",circleArea(20));

/* 2. Write a function that takes the radius of a circle and return its perimeter.*/
function perimeter(r){
    const perimeter = 2* 3.14* r;
    return perimeter;
}
console.log("Perimeter of a circle is", perimeter(8));

/*## Challenge: Years to Days & Seconds

### MVP

1. Create a function that takes your age in years and returns your age in days.
1. Create a function that takes your age in years and returns your age in seconds. */

function ageCalculator(a){
    const age = a*365;
    return age;
}
console.log("the age in days is...", ageCalculator(30));

/*Create a function that takes your age in years and returns your age in seconds.*/
function ageInNumber(myage)
{
    const oneYear = 24*60*60*365;
    const result = myage*oneYear;
    return result;
}
console.log("Age in Seconds", ageInNumber(30));

/*### MVP

There is a single operator in JavaScript, capable of providing the remainder of a division operation.
Two numbers are passed as parameters.
The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

```js
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
``` */

function remainder(x,y){
    const result= x%y;
    return result;
}
console.log("The remainder is....", remainder(9,3));

/*Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/

function sumOfNumbers(val1,val2){
   const addition = val1+val2;
   if (addition<100){
    return true;
   }else
   {
    return false;
   }
}
console.log(sumOfNumbers(20,300));

/*
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.*/
function basketball(twopoiner, threepointer){
const result = 2*twopoiner+3*threepointer;
return result;
}
console.log("The final points are...",basketball(5,9))

/*## Challenge: Calculating Moon Orbits

### MVP

1. Write a function that takes in a number of earth days, and returns the
   number of orbits the moon can perform given days.

```js
moonOrbits(54) => 2
moonOrbits(365) => 13.359 */
function moonOrbits(days){
    const rotations = days/27;
    return rotations;
}
console.log("the rotations moon makes around earth in 365 days is ", moonOrbits(365))