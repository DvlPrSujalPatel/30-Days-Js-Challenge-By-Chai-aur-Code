// Activity 1: If-Else Statements

// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function checkNum(num){
    if(num >= 0){
        console.log(`Number: ${num} is Posetive`)
    }else{
        console.log(`Number: ${num} is Negative`)
    }
}

checkNum(-5)

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function checkEligibility(age){
    if(age >= 18){
        console.log("You are eligible to do Voting")
    }else{
        console.log("You are not eligible to do Voting")
    }
}

checkEligibility(17)

// Activity 2: Nested If-Else Statements

// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

function findLargest(a, b, c){
    if(a >= b && a >= c){
        console.log(`${a} is Largest in These`)
    }else if(b >= a && b >=c){
        console.log(`${b} is Largest in These`)
    }else{
        console.log(`${c} is Largest in These`)
    }
}

findLargest(177, 6, 8)

// Activity 3: Switch Case

// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
            break;
    }

    return dayName;
}



// Test the function
let dayNumber = parseInt(prompt("Enter a number (1-7):"));

let dayName = getDayName(dayNumber);
console.log("The day of the week is:", dayName);

document.querySelector('.dayName').textContent = dayName //This is Just For Test in The HTML 


// • Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

function getGrade(score){
    let grade;

    switch(true){
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 70 && score <= 90):
            grade = 'B';
            break;
        case (score >= 50 && score <= 70):
            grade = 'C';
            break;
        case (score >= 30 && score <= 50):
            grade = 'D';
            break;
        case (score >= 0 && score <= 30):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
            break;
    }
    return grade;
}

let score = parseInt(prompt("Enter Your Score (0 - 100)"))

let grade = getGrade(score)
console.log(`Your Grade is : ${grade}`)
document.querySelector('.grade').textContent = `Your Grade is: ${grade}`



// Activity 4: Conditional (Ternary) Operator

// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// Function to check if a number is even or odd
function checkEvenOdd(number) {
    return (number % 2 === 0) ? "even" : "odd";
}

// Test the function
let number = parseInt(prompt("Enter a number:"));

let result = checkEvenOdd(number);
console.log("The number is:", result);
document.querySelector('.number').textContent = `Your Number is ${result}`

// Activity 5: Combining Conditions

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result

// Function to check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test the function
let year = parseInt(prompt("Enter a year:"));

let yearResult = isLeapYear(year);
if (yearResult) {
    console.log(year + " is a leap year.");
    document.querySelector('.year').textContent = year + " is a leap year."
} else {
    console.log(year + " is not a leap year.");
    document.querySelector('.year').textContent = year + " is not a leap year."
}
