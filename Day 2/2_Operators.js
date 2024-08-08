// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to console

let a = 8
let b = 2

console.log("a + b:", a + b) //Output: a + b: 10

//Task 2: Write a program to subtract two numbers and los the result to the console.

console.log("a - b :", a - b) //Output: a - b: 6

//Task 3: Write a program to multiply two numbers and log the result to the console.

console.log("a * b :", a * b) //Output: a * b: 16

//Task 4: Write a program to devide two numbers and log the result to the console.

console.log("a / b:", a / b) //Output: a / b: 4

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console

console.log("a % b:", a % b) //Output: a % b: 0

// Activity 2: Assignment Operators

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let firstNum = 5
firstNum += 5

console.log(firstNum) // Output: 10

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let secondNum = 10
secondNum -= 5

console.log(secondNum) //Output: 5

// Activity 3: Comparison Operators

let first = 11
let second = 12
// • Task 8: Write a program to compare two numbers using › and ‹ and log the result to the console.

console.log("first > second :", first > second)  // Output: false
console.log("first < second :", first < second)  //Output: true

//• Task 9: Write a program to compare two numbers using >= and ‹= and log the result to the console.

console.log("first <= second :", first <= second) //Output: true
console.log("first >= second :", first >= second) //Output: false

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let c = 5
let d = "5"

console.log("c == d", c == d) // Output: true
console.log("c === d", c === d) //Output: false

// Activity 4: Logical Operators

//  Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

console.log(a == b && c == d)//Output: false

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(a == b || c == d) //Output: true

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log("a != b :", a != b) //Output: true

// Activity 5: Ternary Operator

// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

function checkNumber(num) {
    // Using ternary operator to check if num is positive or negative
    let result = (num >= 0) ? "Positive" : "Negative";
    
    // Logging the result to the console
    console.log(`${num} is ${result}`);
}

// Example usage:
checkNumber(10);    // Output: 10 is Positive
checkNumber(-5);    // Output: -5 is Negative
checkNumber(0);     // Output: 0 is Positive (considering 0 as non-negative)

//1. Arithmetic Operations Script

function performArithmeticOperations(a, b) {
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = a / b;
    let remainder = a % b;

    console.log(`Arithmetic Operations:`);
    console.log(`${a} + ${b} = ${addition}`);
    console.log(`${a} - ${b} = ${subtraction}`);
    console.log(`${a} * ${b} = ${multiplication}`);
    console.log(`${a} / ${b} = ${division}`);
    console.log(`${a} % ${b} = ${remainder}`);
}

// Example usage:
performArithmeticOperations(10, 3);

//2. Comparison and Logical Operators Script

function compareAndCombineConditions(x, y) {
    // Comparison operators
    console.log(`Comparison Operators:`);
    console.log(`${x} > ${y}: ${x > y}`);
    console.log(`${x} < ${y}: ${x < y}`);
    console.log(`${x} >= ${y}: ${x >= y}`);
    console.log(`${x} <= ${y}: ${x <= y}`);
    console.log(`${x} === ${y}: ${x === y}`);
    console.log(`${x} !== ${y}: ${x !== y}`);

    // Logical operators
    console.log(`Logical Operators:`);
    console.log(`${x} > 0 && ${y} > 0: ${x > 0 && y > 0}`);
    console.log(`${x} > 0 || ${y} > 0: ${x > 0 || y > 0}`);
    console.log(`!(${x} > 0): ${!(x > 0)}`);
}

// Example usage:
compareAndCombineConditions(5, 3);

//3. Ternary Operator Script

function checkNumber(num) {
    // Using ternary operator to check if num is positive or negative
    let result = (num >= 0) ? "Positive" : "Negative";

    // Logging the result to the console
    console.log(`${num} is ${result}`);
}

// Example usage:
checkNumber(10);    // Output: 10 is Positive
checkNumber(-5);    // Output: -5 is Negative
checkNumber(0);     // Output: 0 is Positive (considering 0 as non-negative)
