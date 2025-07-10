const readlinesync = require("readline-sync");
const prompt = readlinesync.question;
// This is a simple JavaScript file to greet Elijah
// It will be executed when the HTML file is loaded

let myname = prompt("What is your name? ");
// This will prompt the user for their name and store it in the variable myname
// The prompt will be displayed in the console

console.log('Hello,' + myname + '!');
// This will print a greeting to the console using the name provided by the user

// --- Start of the interactive script ---

// This script will ask the user for their favorite animal and color,
// and then display a message combining both answers.
let favoriteAnimal = prompt("What is your favourite animal? ");


let favoriteColor = prompt("What is your favourite colour? ");


let message = `Your favourite animal is a ${favoriteColor} ${favoriteAnimal}!`;


console.log(message);

// --- End of the interactive script ---


// This script demonstrates the use of template literals in JavaScript.
// Template literals allow for easier string interpolation and multi-line strings.

// Define variables for each meal
const breakfast = "toast";
const lunch = "a sandwich";
const dinner = "curry";

// Combine the meal variables into a single sentence using a template literal.
// Template literals (backticks ``) allow for easy embedding of expressions (${...})
// and multi-line strings.
const mealSentence = `Today I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`;

//Template Literals

console.log(`Hello, your name is ${myname}. Your favourite animal is a ${favoriteAnimal}, your favourite colour is ${favoriteColor} and you are 24 years old.`);

// String data type

console.log(10 + "10"); // This will concatenate the number 10 with the string "10", resulting in "1010"

let myname2 = "Elijah";
console.log(`Hello, ${myname2}!`);
console.log(typeof myname); 

let myage = 24;
console.log(`I am ${myage} years old.`);
console.log(typeof myage);

let myhobbies = ["reading", "coding", "gaming"];
console.log(`My hobbies are: ${myhobbies.join(", ")}.`);
console.log(typeof myhobbies);

let myheight = 1.81; // Height in meters
console.log(`My height is ${myheight} meters.`);
console.log(typeof myheight);

let myBoolean = true;

console.log(`The value of myBoolean is ${myBoolean}.`);
console.log(mealSentence);

// --- Challenge 2: Add two numbers ---
console.log("\nChallenge 2: Adding Two Numbers");
// Helper function to prompt for a floating-point number
function floatPrompt(question) {
    const input = prompt(question);
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error("Invalid number");
    }
    return number;
}

let numA;
let numB;
let sum;

while (true) {
    try {
        // Ask the user for the first number.
        // Using floatPrompt to allow for decimal numbers, as per the calculator context.
        numA = floatPrompt("Enter the first number: ");
        // Check if the parsed number is actually a number
        if (isNaN(numA)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            break; // Exit loop if input is valid
        }
    } catch (e) {
        console.log("An error occurred while reading the first number. Please try again.");
    }
}

while (true) {
    try {
        // Ask the user for the second number.
        numB = floatPrompt("Enter the second number: ");
        if (isNaN(numB)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            // Display the result.
            sum = numA + numB;
            console.log(`The sum of ${numA} and ${numB} is: ${sum}`);
            break; // Exit loop if input is valid
        }
    } catch (e) {
        console.log("An error occurred while reading the second number. Please try again.");
    }
}

// --- Challenge 3: Convert hours to minutes ---
console.log("\nChallenge 3: Convert hours to minutes");
let hours;

// Loop to get a valid number of hours
while (true) {
    try {
        // Ask the user to enter a number of hours.
        hours = floatPrompt("Enter a number of hours: ");
        // Ensure the input is a valid number
        if (isNaN(hours)) {
            console.log("Invalid input. Please enter a valid number.");
        } else if (hours < 0) {
            console.log("Hours cannot be negative. Please enter a positive number.");
        }
        else {
            break; // Exit loop if input is valid
        }
    } catch (e) {
        console.log("An error occurred while reading the hours. Please try again.");
    }
}

// Convert hours to minutes
const minutes = hours * 60;

// Log the result.
console.log(`${hours} hours is equal to ${minutes} minutes.`);

// .length can only be used with string data
let mynameLength = prompt("What is your name? ");
console.log(`The length of your name is: ${mynameLength.length}`);

console.log(mynameLength.toUpperCase()); // Convert to uppercase
console.log(mynameLength.toLowerCase()); // Convert to lowercase
console.log(`The first letter of your name is: ${mynameLength.charAt(0)}`); // Get the first character of the string
console.log(`The last letter of your name is: ${mynameLength.charAt(mynameLength.length - 1)}`); // Get the last character of the string

console.log("\n--- Math Operations ---");

// Define a number for rounding operations
const numberToRound = 1.5;

// 1. Round 1.5 to the closest whole number.
// Math.round() rounds a number to the nearest integer.
// If the fractional part is 0.5 or greater, it rounds up.
console.log(`Rounding ${numberToRound} to the closest whole number: ${Math.round(numberToRound)}`);

// 2. Round 1.5 down to the nearest whole number.
// Math.floor() rounds a number down to the nearest integer.
console.log(`Rounding ${numberToRound} down to the nearest whole number: ${Math.floor(numberToRound)}`);

// 3. Generate a random number between 1 and 10.

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`A random number between 1 and 10: ${randomNumber}`);

console.log("\n--- Operations Complete ---");

// --- New Section: Combining String Length and Random Number ---
console.log("\n--- Combining String Length and Random Number ---");

// Get the length of the "Hello World" string
const helloWorld = "Hello World";
const helloWorldLength = helloWorld.length;

// Generate a random number between 1 and 10 (as already demonstrated above)
// We'll regenerate it here for this specific sentence to ensure it's fresh for this log.
const newRandomNumber = Math.floor(Math.random() * 10) + 1;

// Construct the combined sentence using template literals
const combinedSentence = `There are ${helloWorldLength} letters in 'Hello World'. A random number between 1 and 10 is ${newRandomNumber}.`;

// Log the combined sentence to the console
console.log(combinedSentence);

// --- Challenges Complete ---
console.log("\n--- Challenges Complete ---");