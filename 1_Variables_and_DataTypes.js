// Activity 1: Variable Declaration

// Task:1Declare a Variable using var, assign it a number, and log the value to the console.

var a = "Sujal"
 console.log(a);

// Task:1Declare a Variable using let, assign it a sting, and log the value to the console.

let b = "Payal"
console.log(b)

// Activity 2: Constant Declaration

// Task 3: Declare a Variable using const, assign it a boolean value, and log the value to console

const myVar = true
 console.log(myVar);

// Activiy 3: Data Types

//Task 4: Create variables of different data types (number, string, boolean, Object, array) and log each variable's type using the typeof operator.

let num = 3
 console.log(typeof num);

let stng = "Sujal Patel"
 console.log(typeof stng);

let bln = true
 console.log(typeof bln);

let obj = {
    Name: "Sujal",
    Love: "Payal",
    age: 18
}
console.log(typeof obj);

let arr = ["Sujal", "Payal", "Patel", "Love"]
console.log(typeof arr);

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using let assign it an initial value, reassign a new value, and log both value to the console

let myName = "Sujal"
 console.log(myName);

myName = "Sujal Patel"

 console.log(myName);

//Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error

const myConst = "Value"

// myConst = "Value2"

 console.log(myConst);

 // Declare variables of different data types
let numberVar = 10;
let stringVar = "Hello, world!";
let booleanVar = true;
let arrayVar = [1, 2, 3];
let objectVar = { name: "John", age: 30 };
let undefinedVar;
let nullVar = null;

// Log the value and type of each variable
console.log(`numberVar: ${numberVar} - type: ${typeof numberVar}`);
console.log(`stringVar: ${stringVar} - type: ${typeof stringVar}`);
console.log(`booleanVar: ${booleanVar} - type: ${typeof booleanVar}`);
console.log(`arrayVar: ${arrayVar} - type: ${typeof arrayVar}`);
console.log(`objectVar: ${JSON.stringify(objectVar)} - type: ${typeof objectVar}`);
console.log(`undefinedVar: ${undefinedVar} - type: ${typeof undefinedVar}`);
console.log(`nullVar: ${nullVar} - type: ${typeof nullVar}`);

// Using let for reassignment
let letVar = "initial value";
console.log(`Original letVar: ${letVar}`);

letVar = "changed value";
console.log(`Modified letVar: ${letVar}`);

// Using const for reassignment
const constVar = "initial value";
console.log(`Original constVar: ${constVar}`);

// Uncommenting the line below will cause an error
// constVar = "changed value";
// console.log(`Modified constVar: ${constVar}`);









