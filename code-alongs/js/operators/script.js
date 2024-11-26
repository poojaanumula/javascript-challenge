// OPERATORS

// Arithmetic operators
console.log(12 + 15);
console.log("Hello" + " everyone");
console.log(1 + 3 + "four");
console.log("four" + 1 + 3);
console.log(true + true);
console.log(false + false);
console.log(true - true);
console.log(true * true);

console.log(34 / 2);
console.log(2 ** 3);

// % - modulus, remainder
console.log(10 % 3, "remainder");
// is a number even or odd
console.log(4 % 2);
console.log(567 % 2);

// Assignment operators

const name = "Martyna";
console.log(name);

let x = 4;
x++;
++x;
// x = x + 1;
console.log(x);
let y = 1;
console.log(y++);
console.log(y);

let z = 1;
z += 111;
//z = z + 1;
console.log(z);
z -= 10;
console.log(z);

// Comparison operators
// they return a boolean

// !=
// ==
// >
// <
// >=
// <=
// !==
// ===

console.log(5 > 1);
console.log(5 < 1);
console.log(8 >= 8);
console.log(5 <= 1);

console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 != 1);
console.log(1 != "1");
console.log(1 !== "1");
console.log(1 + 2 > 10);

// Logical operators

// AND, OR
// &&, ||
let age = 6;
// how to check if someone is 6-17 age bracket?
console.log(age >= 6);
console.log(age < 18);
console.log(age >= 6 && age < 18);

console.log(true && true);
console.log(false && true);
console.log(true && false);

// OR
console.log(true || true);
console.log(age < 12 || age > 25);
console.log(true || false);
console.log(false || true);

// truthy and falsy values
// 0 - falsy value
// "" - falsy value
// null, undefined - falsy

// this actually returns the first falsy value it finds or te last value if no falsy values
console.log(0 && true);
console.log(178 && true && 1);
console.log(0 || 1 || true);

// console.log("" == false);
// let someVal = null;
// // someVal = 1;
// console.log(someVal);
// if (someVal) {
//     console.log("hello");
// }
