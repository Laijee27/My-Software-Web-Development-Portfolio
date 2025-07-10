import readlineSync from "readline-sync";
const prompt = readlineSync.question; // For string input
const intPrompt = (question) => parseInt(readlineSync.question(question), 10); // For integer input

console.log("--- Starting Starter Challenges ---");

// --- Challenge 1: Prompt for a Name ---
console.log("\n--- Challenge 1: Prompt for a Name ---");
// Ask the user for their name and store it.
let userName = prompt("What is your name? ");
console.log(`Hello, ${userName}!`);

// --- Challenge 2: About You ---
console.log("\n--- Challenge 2: About You ---");
// Create a variable for a favourite film.
let favouriteFilm = prompt("What is your favourite film? ");
console.log(`${userName}'s favourite film is ${favouriteFilm}`);

// --- Challenge 3: Yesterday's Lessons ---
console.log("\n--- Challenge 3: Yesterday's Lessons ---");
// Create variables to store 2 things learned yesterday.
let learnedYesterday1 = "JavaScript variables";
let learnedYesterday2 = "Basic console logging";
console.log(`Yesterday, I learned about: ${learnedYesterday1} and ${learnedYesterday2}.`);

// --- Challenge 4: Today's Lessons ---
console.log("\n--- Challenge 4: Today's Lessons ---");
// Update those variables to things learned today (Arrays and Loops).
learnedYesterday1 = "Arrays"; // Reusing the variable name, but updating its content
learnedYesterday2 = "Loops";  // Reusing the variable name, but updating its content
console.log(`Today, I am learning about: ${learnedYesterday1} and ${learnedYesterday2}.`);

// --- Challenge 5: Number Puzzle ---
console.log("\n--- Challenge 5: Number Puzzle ---");
let num1, num2;
let sumOfNumbers;

// Loop to ensure valid number input for the first number
while (true) {
    try {
        num1 = intPrompt("Enter the first number: ");
        if (isNaN(num1)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            break;
        }
    } catch (e) {
        console.log("Error reading input. Please try again.");
    }
}

// Loop to ensure valid number input for the second number
while (true) {
    try {
        num2 = intPrompt("Enter the second number: ");
        if (isNaN(num2)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            break;
        }
    } catch (e) {
        console.log("Error reading input. Please try again.");
    }
}

// Calculate the sum of the two numbers.
sumOfNumbers = num1 + num2;
console.log(`The total of your numbers is: ${sumOfNumbers}`);

// --- Challenge 6: Secret Message ---
console.log("\n--- Challenge 6: Secret Message ---");
const secretMessage = "The truth is out there";

// Log the number of characters.
console.log(`The number of characters in the secret message is: ${secretMessage.length}`);
console.log(`The message in all uppercase: ${secretMessage.toUpperCase()}`);

console.log("\n--- Starter Activities Complete ---");


//----------DAY 2 STARTER CHALLENGES COMPLETE----------

//----------Favourite Films Array----------
console.log("\n--- Favourite Films Array ---");
const favouriteFilms = [
    "The Prince of Egypt",
    "The Godfather",
    "The Dark Knight",
    "Spirited Away",
    "The Lord of the Rings: The Fellowship of the Ring"
];

const filmOrder = ["first", "second", "third", "fourth", "fifth"];
for (let i = 0; i < favouriteFilms.length; i++) {
    console.log(`My ${filmOrder[i]} favourite film is: ${favouriteFilms[i]}`);
}

console.log("\n--- Favourite Films Array Complete ---");


//----------Fruit Basket Management----------
console.log("\n--- Fruit Basket Management ---");

let basket = ["Apple", "Banana", "Orange", "Grape"];
console.log("Initial basket:", basket);

console.log("Second fruit in the basket:", basket[1]);

basket.push("Mango");
console.log("Basket after adding Mango:", basket);

let removedFruit = basket.shift();
console.log("Basket after removing first fruit:", basket);
console.log("Removed fruit:", removedFruit);

let indexOfOrange = basket.indexOf("Orange");
console.log(
    indexOfOrange !== -1
        ? `Orange is at index ${indexOfOrange}`
        : "Orange was not found in the basket."
);

console.log("Number of fruits currently in the basket:", basket.length);

console.log("\n--- Fruit Basket Management Complete ---");

//----------Looping Challenge: Hello, Javascript!----------
console.log("\n--- Looping Challenge: Hello, Javascript! ---");
for (let i = 0; i < 5; i++) {
    console.log(`Hello, Javascript!`);
}

console.log("\n--- Loop through a list of items ---");

// Loop through a list of items and print each item
let items = ["Apple", "Banana", "Cherry"];
console.log("Items in the list:");
for (const item of items) {
    console.log(item);
}

console.log("\n--- Looping Challenge Complete ---");

//----------Stretch Challenge: Even Numbers from 0 to 10----------
console.log("\n--- Stretch Challenge: Even Numbers from 0 to 10 ---");

console.log("Even numbers:");
// Loop from 0 to 10 (inclusive)
for (let i = 0; i <= 10; i++) {
    // Check if the current number is even using the modulo operator (%)
    // If a number divided by 2 has a remainder of 0, it's even.
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n--- Looping Challenge Complete ---")

let i=0;
while (i < 5) {
    console.log(`Loop iteration ${i}`);
    i++;
}

console.log("\n--- While Loop Challenge Complete ---");

let smileCount = 0;
while (smileCount < 10) {    
    console.log("😊");
    smileCount++;
}

console.log("\n--- Smile Loop Challenge Complete ---");

// --- Challenge 10: Count Down with For Loop ---
console.log("\n--- Challenge 10: Count Down with For Loop ---");
console.log("Counting down from 10 to 1 using a for loop:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// --- Challenge 11: Count Down with While Loop ---
console.log("\n--- Challenge 11: Count Down with While Loop ---");
console.log("Counting down from 10 to 1 using a while loop:");
let count = 10; 
while (count >= 1) { 
    console.log(count); 
    count--; 
}
console.log("\n--- Count Down Challenges Complete ---");

// --- For Loops: Challenge Set ---
console.log("\n--- For Loops: Challenge Set ---");

// 1. Sum of Arrays
// Take two arrays and combine their values. Add them together, element by element.
// Log the running total and final result.
console.log("\nChallenge 1: Sum of Arrays");
const arr1_sum = [1, 2, 3, 4];
const arr2_sum = [5, 6, 7, 8];
let runningTotal = 0;
let combinedArraySum = [];

console.log("Combining and summing arrays element by element:");
for (let i = 0; i < arr1_sum.length; i++) {
    const elementSum = arr1_sum[i] + arr2_sum[i];
    combinedArraySum.push(elementSum);
    runningTotal += elementSum;
    console.log(`Element ${i}: ${arr1_sum[i]} + ${arr2_sum[i]} = ${elementSum}. Running total: ${runningTotal}`);
}
console.log("Final combined array sums:", combinedArraySum);
console.log("Final result (total sum):", runningTotal);


// 2. Even Numbers
// Ask the user for a number n. Print all even numbers between 1 and n using a for loop.
console.log("\nChallenge 2: Even Numbers");
let n_even;
while (true) {
    n_even = intPrompt("Enter a number (n) to print even numbers up to it: ");
    if (isNaN(n_even) || n_even < 1) {
        console.log("Please enter a positive whole number.");
    } else {
        break;
    }
}
console.log(`Even numbers between 1 and ${n_even}:`);
for (let i = 1; i <= n_even; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3. Reverse Order
// You’re given an array. Use a for loop to print every item - starting from the end and working backwards.
console.log("\nChallenge 3: Reverse Order");
const originalArray = ["Alpha", "Beta", "Gamma", "Delta"];
console.log("Original array:", originalArray);
console.log("Printing array in reverse order:");
for (let i = originalArray.length - 1; i >= 0; i--) {
    console.log(originalArray[i]);
}


// 4. Sum of Corresponding Elements
// You have two arrays of equal length. Add the first items together, then the second, and so on.
// Push each result into a new array and print it.
console.log("\nChallenge 4: Sum of Corresponding Elements");
const arrA = [10, 20, 30];
const arrB = [1, 2, 3];
const sumOfCorresponding = [];
console.log("Arrays:", arrA, arrB);
console.log("Summing corresponding elements:");
for (let i = 0; i < arrA.length; i++) {
    sumOfCorresponding.push(arrA[i] + arrB[i]);
}
console.log("New array with sums:", sumOfCorresponding);


// 5. Letter Change
// Given any string, change every second letter to "Z" (capital Z). Print the new version.
console.log("\nChallenge 5: Letter Change");
const originalString = "programming"; // Example string
let modifiedString = "";
console.log("Original string:", originalString);
for (let i = 0; i < originalString.length; i++) {
    if ((i + 1) % 2 === 0) { // Check if it's the second, fourth, etc. character (1-based index)
        modifiedString += "Z";
    } else {
        modifiedString += originalString[i];
    }
}
console.log("Modified string:", modifiedString);


// 6. Contains Letter ‘y’
// Check if a string includes the letter ‘y’. If it does, log "yes" - if not, log "no".
console.log("\nChallenge 6: Contains Letter 'y'");
const testStringY = "mystery";
const testStringNoY = "hello";
let containsY = false;

// Check for 'y' in testStringY
for (let i = 0; i < testStringY.length; i++) {
    if (testStringY[i].toLowerCase() === 'y') { // Check for 'y' or 'Y'
        containsY = true;
        break; // Exit loop once 'y' is found
    }
}
console.log(`Does "${testStringY}" contain 'y'? ${containsY ? "yes" : "no"}`);

containsY = false; // Reset for the next string
// Check for 'y' in testStringNoY
for (let i = 0; i < testStringNoY.length; i++) {
    if (testStringNoY[i].toLowerCase() === 'y') {
        containsY = true;
        break;
    }
}
console.log(`Does "${testStringNoY}" contain 'y'? ${containsY ? "yes" : "no"}`);


// 7. Factorial
// Ask for a number. Multiply all numbers from 1 to that number together (that’s a factorial) and log the result.
console.log("\nChallenge 7: Factorial");
let factorialNum;
while (true) {
    factorialNum = intPrompt("Enter a non-negative whole number for factorial: ");
    if (isNaN(factorialNum) || factorialNum < 0 || !Number.isInteger(factorialNum)) {
        console.log("Please enter a non-negative whole number.");
    } else {
        break;
    }
}

let factorialResult = 1;
if (factorialNum === 0) {
    factorialResult = 1; // Factorial of 0 is 1
} else {
    for (let i = 1; i <= factorialNum; i++) {
        factorialResult *= i;
    }
}
console.log(`The factorial of ${factorialNum} is: ${factorialResult}`);


// 8. Guess the PIN
// Create a simple PIN-guessing game. Let the user try to guess a 4-digit code. They have 4 attempts.
// If they get it right, stop early.
console.log("\nChallenge 8: Guess the PIN");
const correctPIN = "1234"; // The secret PIN
const maxAttempts = 4;
let attempts = 0;
let guessedCorrectly = false;

console.log("Guess the 4-digit PIN!");
while (attempts < maxAttempts && !guessedCorrectly) {
    attempts++;
    const userGuess = prompt(`Attempt ${attempts}/${maxAttempts}. Enter your 4-digit PIN: `);

    if (userGuess === correctPIN) {
        console.log("Congratulations! You guessed the PIN correctly!");
        guessedCorrectly = true;
    } else {
        console.log("Incorrect PIN. Try again.");
    }
}

if (!guessedCorrectly) {
    console.log(`You've run out of attempts. The correct PIN was ${correctPIN}.`);
}


// 9. Palindrome Checker
// Ask for two words. Check if either (or both) is a palindrome (the same forwards and backwards).
// Log your results.
console.log("\nChallenge 9: Palindrome Checker");

/**
 * Checks if a given string is a palindrome (reads the same forwards and backwards).
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters for robust checking
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const word1 = prompt("Enter the first word to check for palindrome: ");
const word2 = prompt("Enter the second word to check for palindrome: ");

console.log(`"${word1}" is a palindrome: ${isPalindrome(word1)}`);
console.log(`"${word2}" is a palindrome: ${isPalindrome(word2)}`);


// 10. Summation
// Input a number. Add up all numbers from 1 to that number and print the total.
console.log("\nChallenge 10: Summation");
let sumToN;
while (true) {
    sumToN = intPrompt("Enter a positive whole number to sum up to: ");
    if (isNaN(sumToN) || sumToN < 1 || !Number.isInteger(sumToN)) {
        console.log("Please enter a positive whole number.");
    } else {
        break;
    }
}

let totalSummation = 0;
for (let i = 1; i <= sumToN; i++) {
    totalSummation += i;
}
console.log(`The sum of numbers from 1 to ${sumToN} is: ${totalSummation}`);


// --- While Loops: Challenge Set ---
console.log("\n--- While Loops: Challenge Set ---");

// 1. Hello World Loop
console.log("\nChallenge 1 (While): Hello World Loop");
let helloCount = 0;
while (helloCount < 5) {
    console.log("Hello, World!");
    helloCount++;
}


// 2. Counting to Five
console.log("\nChallenge 2 (While): Counting to Five");
let countToFive = 1;
while (countToFive <= 5) {
    console.log(countToFive);
    countToFive++;
}


// 3. The Letter ‘A’
console.log("\nChallenge 3 (While): The Letter 'A'");
let aCount = 0;
while (aCount < 10) {
    console.log("A");
    aCount++;
}

// 4. Five ‘X’s
console.log("\nChallenge 4 (While): Five 'X's");
let xString = "";
let xCount = 0;
while (xCount < 5) {
    xString += "X";
    xCount++;
}
console.log(xString);


// 5. New Line Numbers
console.log("\nChallenge 5 (While): New Line Numbers");
let newLineNum = 1;
while (newLineNum <= 3) {
    console.log(newLineNum);
    newLineNum++;
}


// 6. Countdown from Three
console.log("\nChallenge 6 (While): Countdown from Three");
let countdownThree = 3;
while (countdownThree >= 1) {
    console.log(countdownThree);
    countdownThree--;
}


// 7. Simple Array Iteration
console.log("\nChallenge 7 (While): Simple Array Iteration");
const colors = ["Red", "Green", "Blue"];
let colorIndex = 0;
while (colorIndex < colors.length) {
    console.log(colors[colorIndex]);
    colorIndex++;
}


// 8. Loop Without a Body
console.log("\nChallenge 8 (While): Loop Without a Body");
// This is generally not recommended for readability and maintainability,
// but demonstrates the syntax. The console.log is part of the condition.
let noBodyCount = 5;
while (noBodyCount-- > 0) console.log(noBodyCount + 1); // Prints 5, 4, 3, 2, 1


// 9. Infinite Loop Warning
console.log("\nChallenge 9 (While): Infinite Loop Warning");
console.log("WARNING: The next output is an infinite loop. Press Ctrl+C to stop it.");
// Uncomment the following lines to run the infinite loop:
/*
let infinite = true;
while (infinite) {
    console.log("Looping!");
    // This loop will run forever until manually stopped (e.g., Ctrl+C in terminal)
}
*/
console.log("Infinite loop example skipped to avoid blocking execution.");


// 10. Static Boolean Loop
console.log("\nChallenge 10 (While): Static Boolean Loop");
let keepLooping = true;
let booleanCount = 0;
while (keepLooping) {
    console.log(`Boolean loop iteration: ${booleanCount}`);
    booleanCount++;
    if (booleanCount >= 3) { // Stop after 3 iterations
        keepLooping = false;
    }
}


// --- Level Up: Extension Tasks for Advanced Coders ---
console.log("\n--- Level Up: Extension Tasks ---");

// A. Explore for...of
console.log("\nExtension A: Explore for...of Loop");
const forOfArray = ["Apple", "Banana", "Cherry"];
console.log("Original array:", forOfArray);
console.log("Iterating with for...of:");
for (const element of forOfArray) {
    console.log(element);
}
console.log("Difference: 'for...of' directly gives you the value of each element, making it cleaner for iterating over iterable collections like arrays, strings, maps, sets. A regular 'for' loop gives you the index, which you then use to access the element (e.g., array[i]). For simple iteration, 'for...of' is often easier to read.");


// B. Try a do...while Loop
console.log("\nExtension B: Try a do...while Loop");


// Simple program that runs at least once
let conditionFalse = false;
let doWhileCount = 0;
do {
    console.log(`This do...while loop ran at least once. Iteration: ${doWhileCount}`);
    doWhileCount++;
} while (conditionFalse && doWhileCount < 2); // Condition is false, but it runs once

// Bonus: Rewrite PIN guessing game using do...while
console.log("\nBonus: PIN Guessing Game with do...while");
const bonusPIN = "5678";
let bonusAttempts = 0;
let bonusGuessedCorrectly = false;
let userBonusGuess;

do {
    bonusAttempts++;
    userBonusGuess = prompt(`Attempt ${bonusAttempts}/${maxAttempts}. Enter your 4-digit PIN: `); // Reusing maxAttempts from Challenge 8

    if (userBonusGuess === bonusPIN) {
        console.log("Congratulations! You guessed the PIN correctly!");
        bonusGuessedCorrectly = true;
    } else if (bonusAttempts < maxAttempts) {
        console.log("Incorrect PIN. Try again.");
    }

} while (bonusAttempts < maxAttempts && !bonusGuessedCorrectly);

if (!bonusGuessedCorrectly) {
    console.log(`You've run out of attempts. The correct PIN was ${bonusPIN}.`);
}


// C. Build Your Own
console.log("\nExtension C: Build Your Own Challenge (Example)");
console.log("Challenge: Print a pyramid of asterisks based on user input height.");
let pyramidHeight;
while (true) {
    pyramidHeight = intPrompt("Enter the height of the pyramid (1-10): ");
    if (isNaN(pyramidHeight) || pyramidHeight < 1 || pyramidHeight > 10 || !Number.isInteger(pyramidHeight)) {
        console.log("Please enter a whole number between 1 and 10.");
    } else {
        break;
    }
}

for (let i = 1; i <= pyramidHeight; i++) {
    let row = "";
    
    for (let s = 0; s < pyramidHeight - i; s++) {
        row += " ";
    }
    
    for (let a = 0; a < (2 * i - 1); a++) {
        row += "*";
    }
    console.log(row);
}

/// JavaScript Array Methods Examples
// This script demonstrates the usage of various common JavaScript array methods.

console.log("--- JavaScript Array Method Demonstrations ---");

// --- 1. .length (Property) ---
// Description: Returns the number of elements in an array.
console.log("\n--- .length ---");
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Original fruits array:", fruits);
console.log("Number of fruits (length):", fruits.length); // Output: 4

// --- 2. .push() ---
// Description: Adds one or more elements to the end of an array and returns the new length.
console.log("\n--- .push() ---");
let colours = ["Red", "Green"];
console.log("Original colours array:", colours);
let newLengthPush = colours.push("Blue", "Yellow");
console.log("Colours after push:", colours); // Output: ["Red", "Green", "Blue", "Yellow"]
console.log("New length after push:", newLengthPush); // Output: 4

// --- 3. .pop() ---
// Description: Removes the last element from an array and returns that element.
console.log("\n--- .pop() ---");
let animals = ["Lion", "Tiger", "Bear"];
console.log("Original animals array:", animals);
let removedAnimal = animals.pop();
console.log("Animals after pop:", animals); // Output: ["Lion", "Tiger"]
console.log("Removed animal:", removedAnimal); // Output: Bear

// --- 4. .indexOf() ---
// Description: Returns the first index at which a given element can be found in the array, or -1 if not present.
console.log("\n--- .indexOf() ---");
let numbers = [10, 20, 30, 20, 40];
console.log("Original numbers array:", numbers);
console.log("Index of 30:", numbers.indexOf(30)); // Output: 2
console.log("Index of 20 (first occurrence):", numbers.indexOf(20)); // Output: 1
console.log("Index of 50:", numbers.indexOf(50)); // Output: -1

// --- 5. .join() ---
// Description: Joins all elements of an array into a string. A separator can be specified.
console.log("\n--- .join() ---");
let words = ["Hello", "World", "JavaScript"];
console.log("Original words array:", words);
let joinedStringDefault = words.join(); // Default separator is comma
console.log("Joined with default separator:", joinedStringDefault); // Output: Hello,World,JavaScript
let joinedStringSpace = words.join(" ");
console.log("Joined with space:", joinedStringSpace); // Output: Hello World JavaScript
let joinedStringDash = words.join("-");
console.log("Joined with dash:", joinedStringDash); // Output: Hello-World-JavaScript

// --- 6. .sort() ---
// Description: Sorts the elements of an array in place and returns the sorted array.
// For strings, it sorts alphabetically. For numbers, it sorts based on string Unicode values by default,
// so a compare function is often needed for numerical sorting.
console.log("\n--- .sort() ---");
let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
let unsortedStrings = ["banana", "apple", "cherry"];
console.log("Original unsorted numbers:", unsortedNumbers);
console.log("Original unsorted strings:", unsortedStrings);

unsortedNumbers.sort((a, b) => a - b); // Numerical sort (ascending)
console.log("Numbers sorted numerically (ascending):", unsortedNumbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

unsortedStrings.sort(); // Alphabetical sort
console.log("Strings sorted alphabetically:", unsortedStrings); // Output: ["apple", "banana", "cherry"]

// --- 7. .forEach() ---
// Description: Executes a provided function once for each array element.
console.log("\n--- .forEach() ---");
let scores = [85, 92, 78];
console.log("Scores array:", scores);
console.log("Iterating with forEach:");
scores.forEach((score, index) => {
    console.log(`Score at index ${index}: ${score}`);
});
// Output:
// Score at index 0: 85
// Score at index 1: 92
// Score at index 2: 78

// --- 8. .includes() ---
// Description: Determines whether an array includes a certain value among its entries, returning true or false.
console.log("\n--- .includes() ---");
let groceries = ["Milk", "Bread", "Eggs"];
console.log("Groceries array:", groceries);
console.log("Does groceries include 'Bread'?", groceries.includes("Bread")); // Output: true
console.log("Does groceries include 'Cheese'?", groceries.includes("Cheese")); // Output: false

// --- 9. .concat() ---
// Description: Used to merge two or more arrays. This method does not change the existing arrays,
// but instead returns a new array.
console.log("\n--- .concat() ---");
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
let combinedArray = arr1.concat(arr2, arr3);
console.log("Combined array using concat:", combinedArray); // Output: [1, 2, 3, 4, 5, 6]
console.log("Original arr1 (unchanged):", arr1); // Output: [1, 2]

// --- 10. .slice() ---
// Description: Returns a shallow copy of a portion of an array into a new array object selected
// from `start` to `end` (end not included). The original array will not be modified.
console.log("\n--- .slice() ---");
let originalArraySlice = ["a", "b", "c", "d", "e"];
console.log("Original array for slice:", originalArraySlice);
let slicedArray = originalArraySlice.slice(1, 4); // Extracts elements from index 1 up to (but not including) 4
console.log("Sliced array (from index 1 to 4):", slicedArray); // Output: ["b", "c", "d"]
let slicedToEnd = originalArraySlice.slice(2); // Extracts from index 2 to the end
console.log("Sliced array (from index 2 to end):", slicedToEnd); // Output: ["c", "d", "e"]
console.log("Original array after slice (unchanged):", originalArraySlice); // Output: ["a", "b", "c", "d", "e"]

// --- 11. .splice() ---
// Description: Changes the contents of an array by removing or replacing existing elements
// and/or adding new elements *in place*. It returns an array containing the deleted elements.
console.log("\n--- .splice() ---");
let arraySplice = ["Jan", "Feb", "Mar", "Apr", "May"];
console.log("Original array for splice:", arraySplice);

// Remove 2 elements starting from index 2 ("Mar", "Apr")
let removedElements = arraySplice.splice(2, 2);
console.log("Array after removing 2 elements from index 2:", arraySplice); // Output: ["Jan", "Feb", "May"]
console.log("Removed elements:", removedElements); // Output: ["Mar", "Apr"]

// Add "Mar" and "Apr" back at index 2
arraySplice.splice(2, 0, "Mar", "Apr"); // (startIndex, deleteCount, item1, item2, ...)
console.log("Array after adding 'Mar', 'Apr' at index 2:", arraySplice); // Output: ["Jan", "Feb", "Mar", "Apr", "May"]

// Replace 1 element at index 1 ("Feb") with "February"
arraySplice.splice(1, 1, "February");
console.log("Array after replacing 'Feb' with 'February':", arraySplice); // Output: ["Jan", "February", "Mar", "Apr", "May"]

// --- 12. .filter() ---
// Description: Creates a new array with all elements that pass the test implemented by the provided function.
console.log("\n--- .filter() ---");
let ages = [12, 18, 20, 15, 22];
console.log("Ages array:", ages);
let adults = ages.filter(age => age >= 18);
console.log("Adults (age >= 18):", adults); // Output: [18, 20, 22]

// --- 13. .find() ---
// Description: Returns the value of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns undefined.
console.log("\n--- .find() ---");
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
console.log("Users array:", users);
let userBob = users.find(user => user.name === "Bob");
console.log("Found user with name 'Bob':", userBob); // Output: { id: 2, name: "Bob" }
let userEve = users.find(user => user.name === "Eve");
console.log("Found user with name 'Eve':", userEve); // Output: undefined

// --- 14. .unshift() ---
// Description: Adds one or more elements to the *beginning* of an array and returns the new length.
console.log("\n--- .unshift() ---");
let queue = ["Task B", "Task C"];
console.log("Original queue:", queue);
let newLengthUnshift = queue.unshift("Task A");
console.log("Queue after unshift:", queue); // Output: ["Task A", "Task B", "Task C"]
console.log("New length after unshift:", newLengthUnshift); // Output: 3

// --- 15. .shift() ---
// Description: Removes the *first* element from an array and returns that removed element.
console.log("\n--- .shift() ---");
let processQueue = ["First in line", "Second in line", "Third in line"];
console.log("Original process queue:", processQueue);
let processedItem = processQueue.shift();
console.log("Queue after shift:", processQueue); // Output: ["Second in line", "Third in line"]
console.log("Processed item:", processedItem); // Output: First in line

console.log("\n--- End of Demonstrations ---");

//----------Favorite Foods Array Management----------
console.log("\n--- Favorite Foods Array Management ---");

// Create an array of favorite foods and perform various operations on it.
let myFavoriteFoods = ["Pizza", "Sushi", "Tacos", "Pasta"];
console.log("My initial favorite foods:", myFavoriteFoods);

// 1. Add a new food
myFavoriteFoods.push("Curry");
console.log("After adding 'Curry':", myFavoriteFoods);

// 2. Check if "Sushi" is in the list
let sushiIndex = myFavoriteFoods.indexOf("Sushi");
if (sushiIndex !== -1) {
    console.log(`Yes, Sushi is at index ${sushiIndex}.`);
} else {
    console.log("Sushi is not in my list.");
}

// 3. Remove the last food
let removedFood = myFavoriteFoods.pop();
console.log(`Removed "${removedFood}".`);
console.log("My foods after removing the last one:", myFavoriteFoods);

// 4. Log the final number of foods
console.log("Total favorite foods now:", myFavoriteFoods.length);

//----------End of Favorite Foods Array Management----------
console.log("\n--- All Challenges Complete ---");