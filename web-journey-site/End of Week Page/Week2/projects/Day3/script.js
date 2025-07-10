import readlineSync from "readline-sync";
const prompt = readlineSync.question; // For string input
const intPrompt = (question) => parseInt(readlineSync.question(question), 10); // For integer input

// --- Conditional Statements Practice ---
console.log("--- Starting JavaScript Conditional Statements Practice ---"); 
let condition = true
if (condition === true)
    console.log("condition is true")

//------ Code Practice ------
let age = 20;
if (age >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//------ Switch Practice ------
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Try again");
}


console.log("--- Starting JavaScript Conditional and Logic Challenges ---");

// --- Activity 1: Password Length Checker ---
console.log("\n--- Challenge 1: Password Length Checker ---");

let password = prompt("Enter a password: ");
if (password.length < 8) {
    console.log("Warning: Password is too short! It must be at least 8 characters long.");
} else {
    console.log("Password accepted (length is 8 or more characters).");
}

// --- Activity 2: Divisibility Test ---
console.log("\n--- Activity 2: Divisibility Test ---");
// Objective: Write a script to determine if a number is divisible by 3 or 5.

let divNum;
while (true) {
    divNum = intPrompt("Enter a number to check divisibility by 3 or 5: ");
    if (isNaN(divNum)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        break;
    }
}

if (divNum % 3 === 0 && divNum % 5 === 0) {
    console.log(`${divNum} is divisible by both 3 and 5.`);
} else if (divNum % 3 === 0) {
    console.log(`${divNum} is divisible by 3.`);
} else if (divNum % 5 === 0) {
    console.log(`${divNum} is divisible by 5.`);
} else {
    console.log(`${divNum} is not divisible by 3 or 5.`);
}


// --- Activity 3: FizzBuzz Variant ---
console.log("\n--- Activity 3: FizzBuzz Variant ---");
// Objective: Create a variant of the classic FizzBuzz problem using divisibility.
// If divisible by 3, print "fizz". If divisible by 7, print "buzz".
// If divisible by both, print "fizzbuzz". Otherwise, print the number itself.

let fizzBuzzVariantNum;
while (true) {
    fizzBuzzVariantNum = intPrompt("Enter a number for FizzBuzz Variant: ");
    if (isNaN(fizzBuzzVariantNum) || !Number.isInteger(fizzBuzzVariantNum)) {
        console.log("Invalid input. Please enter a whole number.");
    } else {
        break;
    }
}

const isDivisibleBy3_FB = fizzBuzzVariantNum % 3 === 0;
const isDivisibleBy7_FB = fizzBuzzVariantNum % 7 === 0;

if (isDivisibleBy3_FB && isDivisibleBy7_FB) {
    console.log("fizzbuzz");
} else if (isDivisibleBy3_FB) {
    console.log("fizz");
} else if (isDivisibleBy7_FB) {
    console.log("buzz");
} else {
    console.log(fizzBuzzVariantNum);
}


// --- Activity 4: First and Last Character Match ---
console.log("\n--- Activity 4: First and Last Character Match ---");
// Objective: Check if the first and last characters of a string are the same.

let charMatchString = prompt("Enter a word to check first and last characters: ");

if (charMatchString.length > 0) { // Ensure the string is not empty
    const firstChar = charMatchString[0];
    const lastChar = charMatchString[charMatchString.length - 1];

    if (firstChar === lastChar) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Please enter a non-empty string.");
}


// --- Activity 5: Daily Schedule Logger ---
console.log("\n--- Activity 5: Daily Schedule Logger ---");
// Objective: Write a program that logs a person's location based on the time of day.

let currentTime;
while (true) {
    currentTime = intPrompt("Enter the current hour (0-23): ");
    if (isNaN(currentTime) || currentTime < 0 || currentTime > 23 || !Number.isInteger(currentTime)) {
        console.log("Invalid input. Please enter a whole number between 0 and 23.");
    } else {
        break;
    }
}

const placeOfWork = "the office";
const townOfHome = "home";

if (currentTime >= 8 && currentTime < 17) { // 8 AM to 4:59 PM
    console.log(`At ${currentTime}:00, the person is at ${placeOfWork}.`);
} else if (currentTime >= 17 || currentTime < 8) { // 5 PM onwards or before 8 AM
    console.log(`At ${currentTime}:00, the person is at ${townOfHome}.`);
} else {
    console.log("Time entered does not fit typical work/home hours.");
}


// --- Activity 6: Even Sum Check ---
console.log("\n--- Activity 6: Even Sum Check ---");
// Objective: Determine if the sum of two numbers is even.

let numEven1, numEven2;
while (true) {
    numEven1 = intPrompt("Enter the first number for sum check: ");
    if (isNaN(numEven1)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        break;
    }
}
while (true) {
    numEven2 = intPrompt("Enter the second number for sum check: ");
    if (isNaN(numEven2)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        break;
    }
}

const sumEven = numEven1 + numEven2;
if (sumEven % 2 === 0) {
    console.log(`The sum (${sumEven}) is even.`);
} else {
    console.log(`The sum (${sumEven}) is odd.`);
}


// --- Activity 7: Palindrome Check (Number) ---
console.log("\n--- Activity 7: Palindrome Check (Number) ---");
// Objective: Check if a number is a palindrome.

let palindromeNum;
while (true) {
    palindromeNum = intPrompt("Enter a number to check if it's a palindrome: ");
    if (isNaN(palindromeNum)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        break;
    }
}

const numString = String(palindromeNum); // Convert number to string
const reversedNumString = numString.split('').reverse().join(''); // Reverse the string

if (numString === reversedNumString) {
    console.log(`The number ${palindromeNum} is a palindrome.`);
} else {
    console.log(`The number ${palindromeNum} is not a palindrome.`);
}


// --- Activity 8: Last Vowel Finder ---
console.log("\n--- Activity 8: Last Vowel Finder ---");
// Objective: Find the position of the last vowel in a given string.

let sentenceVowel = prompt("Enter a sentence to find the last vowel: ");
const vowels = "aeiouAEIOU";
let lastVowelIndex = -1;

for (let i = sentenceVowel.length - 1; i >= 0; i--) { // Loop backwards
    if (vowels.includes(sentenceVowel[i])) {
        lastVowelIndex = i;
        break; // Found the last vowel, exit loop
    }
}
console.log("The last vowel is at index:", lastVowelIndex);


// --- BONUS Activity: Weather Recommendation System ---
console.log("\n--- BONUS Activity: Weather Recommendation System ---");
// Objective: Create a simple JavaScript program that recommends clothing based on the current temperature.

let currentTemperature;
while (true) {
    currentTemperature = intPrompt("Enter the current temperature in Celsius: ");
    if (isNaN(currentTemperature)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        break;
    }
}

let recommendation;
if (currentTemperature < 0) {
    recommendation = "a heavy coat";
} else if (currentTemperature >= 0 && currentTemperature <= 15) {
    recommendation = "a jacket";
} else if (currentTemperature > 15 && currentTemperature <= 25) {
    recommendation = "a sweater";
} else { // currentTemperature > 25
    recommendation = "a t-shirt";
}
console.log(`Based on ${currentTemperature}°C, I recommend wearing ${recommendation}.`);


console.log("\n--- All Conditional and Logic Challenges Complete ---");

//==============================================================//
//                        FUNCTIONS                             //
//==============================================================//

// Add your function definitions below this line.
// Example placeholder function:
function exampleFunction() {
    console.log("This is a placeholder function.");
}
exampleFunction();

// the variable in the bracket is a "parameter" that is passed to the function
// when the function is called, the value passed is an "argument".
function greeting(personName) {
    console.log("Hello, " + personName + "!");
}

greeting("Elijah");
greeting("Alice");
greeting("Bob");
greeting("Charlie");
greeting("Diana");

// --- New Challenge 1: Greeting Function with Parameters ---
console.log("\n--- New Challenge 1: Greeting Function with Parameters ---");

/**
 * Constructs a greeting message using a first name and surname.
 * @param {string} firstName The user's first name.
 * @param {string} surname The user's surname.
 * @returns {string} The greeting message.
 */

function createGreeting(firstName, surname) {
    return `Hello, ${firstName} ${surname}! Welcome.`;
}

// Test the function with different inputs
console.log(createGreeting("Alice", "Smith"));
console.log(createGreeting("Bob", "Johnson"));
console.log(createGreeting("Charlie", "Brown"));

// --- New Challenge 2: ATM Function ---
console.log("\n--- New Challenge 2: ATM Function ---");
// Objective: Simulate an ATM withdrawal transaction with PIN validation and balance checks.
// Note: This is a simplified simulation and does not include real banking logic.

let storedBalance = 1000; // Example stored balance
const storedPIN = "2702"; // Example stored PIN

/**
 * Simulates an ATM withdrawal transaction.
 * @param {number} amount The amount to withdraw.
 * @param {string} pin The PIN entered by the user.
 * @returns {string} A message indicating approval or rejection, and updated balance if approved.
 */
function atmWithdrawal(amount, pin) {
    console.log(`\nAttempting to withdraw £${amount} with PIN: ${pin}`);
    if (pin !== storedPIN) {
        return "Transaction Rejected: Incorrect PIN.";
    }

    if (amount <= 0 || isNaN(amount) || !Number.isInteger(amount)) {
        return "Transaction Rejected: Invalid withdrawal amount. Please enter a positive whole number.";
    }

    if (amount > storedBalance) {
        return `Transaction Rejected: Insufficient funds. Your current balance is £${storedBalance}.`;
    }

    // If all conditions are met, approve the transaction
    storedBalance -= amount; // Deduct amount from balance
    return `Transaction Approved: You have withdrawn £${amount}. Your new balance is £${storedBalance}.`;
}

// Test the ATM function with different inputs
console.log(atmWithdrawal(100, "2702")); // Approved
console.log(atmWithdrawal(1500, "2702")); // Insufficient funds
console.log(atmWithdrawal(50, "9999")); // Incorrect PIN
console.log(atmWithdrawal(0, "2702"));   // Invalid amount
console.log(atmWithdrawal(200, "2702")); // Approved


// --- New Challenge 3: Palindrome Checker Function ---
console.log("\n--- New Challenge 3: Palindrome Checker Function ---");

/**
 * Checks if a given word is a palindrome (reads the same forwards and backwards).
 * @param {string} word The word to check.
 * @returns {boolean} True if the word is a palindrome, false otherwise.
 */
function isWordPalindrome(word) {
    // Convert to lowercase and remove non-alphanumeric characters for robust checking
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

// Test the palindrome function with different words
console.log(`Is "madam" a palindrome? ${isWordPalindrome("madam")}`); // true
console.log(`Is "racecar" a palindrome? ${isWordPalindrome("racecar")}`); // true
console.log(`Is "hello" a palindrome? ${isWordPalindrome("hello")}`); // false
console.log(`Is "A man, a plan, a canal: Panama" a palindrome? ${isWordPalindrome("A man, a plan, a canal: Panama")}`); // true

// --- 1. Word Blender ---
console.log("\n--- Challenge 1: Word Blender ---");
// Goal: Join two words together.
// Task: Write a function combineWords that takes two words and returns them as a single string, separated by a space.

/**
 * Combines two words into a single string, separated by a space.
 * @param {string} word1 The first word.
 * @param {string} word2 The second word.
 * @returns {string} The combined string.
 */
function combineWords(word1, word2) {
    return `${word1} ${word2}`;
}

// Test cases for Word Blender
console.log("Test 1 (Word Blender):", combineWords("Hello", "World")); // Expected: "Hello World"
console.log("Test 2 (Word Blender):", combineWords("JavaScript", "Functions")); // Expected: "JavaScript Functions"


// --- 2. Basic Calculator ---
console.log("\n--- Challenge 2: Basic Calculator ---");
// Goal: Perform basic maths.
// Task: Write four functions: add, subtract, multiply, divide.

/**
 * Adds two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The difference between a and b.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides the first number by the second. Handles division by zero.
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @returns {number|string} The result of the division, or an error message if dividing by zero.
 */
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Test cases for Basic Calculator
console.log("Test (add):", add(5, 3));        // Expected: 8
console.log("Test (subtract):", subtract(10, 4)); // Expected: 6
console.log("Test (multiply):", multiply(7, 2));   // Expected: 14
console.log("Test (divide):", divide(10, 2));    // Expected: 5
console.log("Test (divide by zero):", divide(10, 0)); // Expected: "Error: Division by zero is not allowed."


// --- 3. Weather Forecaster ---
console.log("\n--- Challenge 3: Weather Forecaster ---");
// Goal: Convert temperature from Celsius to Fahrenheit.
// Task: Write a function celsiusToFahrenheit(celsius) that takes a Celsius temperature
// and converts it to Fahrenheit. Hint: Multiply by 1.8 and add 32.

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * Formula: F = C * 1.8 + 32
 * @param {number} celsius The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

// Test cases for Weather Forecaster
console.log("Test (Celsius to Fahrenheit 0°C):", celsiusToFahrenheit(0));   // Expected: 32
console.log("Test (Celsius to Fahrenheit 25°C):", celsiusToFahrenheit(25)); // Expected: 77
console.log("Test (Celsius to Fahrenheit 100°C):", celsiusToFahrenheit(100)); // Expected: 212


// --- 4. Blast Off! ---
console.log("\n--- Challenge 4: Blast Off! ---");
// Goal: Create a countdown.
// Task: Write a function startCountdown(n) that logs numbers from n down to 1, then logs "Blast off!".

/**
 * Logs a countdown from a given number down to 1, then prints "Blast off!".
 * @param {number} n The starting number for the countdown.
 */
function startCountdown(n) {
    if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
        console.log("Please provide a positive whole number for the countdown.");
        return;
    }
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
    console.log("Blast off!");
}

// Test cases for Blast Off!
console.log("Test (Countdown from 5):");
startCountdown(5);
console.log("Test (Countdown from 3):");
startCountdown(3);


// --- 5. Age Teller ---
console.log("\n--- Challenge 5: Age Teller ---");
// Goal: Find out someone's age.
// Task: Write a function calculateAge(birthYear) that takes a birth year and returns their current age.
// Hint: Subtract the birth year from the current year.

/**
 * Calculates a person's current age based on their birth year and the current year.
 * @param {number} birthYear The year of birth.
 * @returns {number} The calculated age.
 */
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear(); // Gets the current year dynamically
    return currentYear - birthYear;
}

// Test cases for Age Teller
console.log("Test (Age for 1990 birth year):", calculateAge(1990)); // Expected: Current year - 1990
console.log("Test (Age for 2005 birth year):", calculateAge(2005)); // Expected: Current year - 2005


// --- 6. The Extremes ---
console.log("\n--- Challenge 6: The Extremes ---");
// Goal: Find the smallest and largest numbers in a list.
// Task: Write two functions: findMin(numbers) and findMax(numbers).

/**
 * Finds the smallest number in an array of numbers.
 * @param {number[]} numbers An array of numbers.
 * @returns {number|string} The smallest number, or an error message if the array is empty.
 */
function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Error: Input must be a non-empty array of numbers.";
    }
    // Using Math.min with spread operator to find the minimum value
    return Math.min(...numbers);
}

/**
 * Finds the largest number in an array of numbers.
 * @param {number[]} numbers An array of numbers.
 * @returns {number|string} The largest number, or an error message if the array is empty.
 */
function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Error: Input must be a non-empty array of numbers.";
    }
    // Using Math.max with spread operator to find the maximum value
    return Math.max(...numbers);
}

// Test cases for The Extremes
const testNumbers = [15, 8, 23, 4, 42, 1];
console.log("Test Numbers Array:", testNumbers);
console.log("Smallest number:", findMin(testNumbers)); // Expected: 1
console.log("Largest number:", findMax(testNumbers));  // Expected: 42
console.log("Test (Empty Array Min):", findMin([])); // Expected: Error message
console.log("Test (Empty Array Max):", findMax([])); // Expected: Error message

console.log("\n--- All Conditional and Logic Challenges Complete ---");x