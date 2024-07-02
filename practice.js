// Q#01
let num = 20;

if (num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Q#02
let userName = prompt("What is your name?");
let userAge = prompt("What is your age?");

alert(`${userName} is ${userAge} years old`);

// Q#03
let quarter = prompt("Enter the quarter number (1-4):");

quarter = Number(quarter);

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter number. Please enter a number between 1 and 4.");
        break;
}

// Q#04
let inputString = prompt("Enter a string:");

function GoldenString(str) {
    return (str.startsWith('A') || str.startsWith('a')) && str.length > 5;
}

if (GoldenString(inputString)) {
    console.log("The string is golden.");
} else {
    console.log("The string is not golden.");
}

// Q#05
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let largest = findLargest(num1, num2, num3);
console.log(`The largest number is: ${largest}`);

// Q#06
let input1 = prompt("Enter number1:");
let input2 = prompt("Enter number2:");

function hasSameLastDigit(numA, numB) {
    let lastDigitA = numA % 10;
    let lastDigitB = numB % 10;

    return lastDigitA === lastDigitB;
}

if (hasSameLastDigit(Number(input1), Number(input2))) {
    console.log("The numbers have the same last digit.");
} else {
    console.log("The numbers do not have the same last digit.");
}
