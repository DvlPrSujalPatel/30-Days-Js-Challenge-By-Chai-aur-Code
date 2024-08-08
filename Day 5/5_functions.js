// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkOddEven(num){
    if(num % 2 === 0){
        console.log("Your Number is Even")
    }else{
        console.log("Your Number is Odd")
    }
}

checkOddEven(96)

// • Task 2: Write a function to calculate the square of a number and return the result.

function getSquareOf(num){
    console.log(num*num)
}
getSquareOf(2)

// Activity 2: Function Expression

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function getMax(x, y){
    if(x > y){
        console.log(`${x} is Maximum`)
    }else{
        console.log(`${y} is Maximum`)
    }
}
getMax(5, 10)

// const findMax = function(a, b) {
//     return a > b ? a : b;
// };

// const num1 = 5;
// const num2 = 10;
// const max = findMax(num1, num2);
// console.log(`The maximum of ${num1} and ${num2} is ${max}`);


// • Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example usage:
const string1 = "Hello, ";
const string2 = "World!";
const result = concatenateStrings(string1, string2);
console.log(result); // Output: "Hello, World!"

// Activity 3: Arrow Functions

// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.


const sum = (a, b) =>  { // or you can use this //const sum = (a, b) =>  a + b
    return a + b;
} 
    
const num1 = 5;
const num2 = 10;
const findSum = sum(num1, num2)
console.log(`The sum of ${num1} and ${num2} is : ${findSum}`)

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);

// Example usage:
const string = "Hello, World!";
const character = "W";
const resultOf = containsCharacter(string, character);
console.log(resultOf); // Output: true

// Activity 4: Function Parameters and Default Values

// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiply(a, b = 1) {
    return a * b;
}

const result1 = multiply(num1, num2);
console.log(result1); // Output: 50

const result2 = multiply(num1);
console.log(result2); // Output: 5 (since b defaults to 1)


// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = '18') {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage:
const greeting1 = greet('Alice', 30);
console.log(greeting1); // Output: "Hello, Alice! You are 30 years old."

const greeting2 = greet('Bob');
console.log(greeting2); // Output: "Hello, Bob! You are unknown years old."

// Activity 5: Higher-Order Functions

// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

// Example usage:
const sayHello = () => {
    console.log('Hello!');
};

repeatFunction(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function composeFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

// Example usage:
const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;

const initialValue = 10;
const finalResult = composeFunctions(add5, multiplyBy2, initialValue);
console.log(finalResult); // Output: 30

