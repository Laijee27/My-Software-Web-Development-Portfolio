const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @param {string} query - The prompt message to display to the user.
 * @returns {Promise<string>} A promise that resolves with the user's input.
 */
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

/**
 * 1. Number Doubler
 * Asks for a number and prints double its value.
 * Level Up: Allow multiple inputs, loop until 'exit'.
 */
async function numberDoubler() {
    console.log("\n--- 1. Number Doubler ---");
    console.log("Enter a number to double it, or type 'exit' to quit.");

    let userInput;
    while (true) {
        userInput = await askQuestion("Enter a number (or 'exit'): ");
        userInput = userInput.trim(); // Handle accidental extra spaces

        if (userInput.toLowerCase() === 'exit') {
            console.log("Exiting Number Doubler.");
            break;
        }

        const number = parseInt(userInput);

        if (!isNaN(number)) {
            const doubled = number * 2;
            console.log(`The number ${number} doubled is: ${doubled}`);
        } else {
            console.log(`"${userInput}" is not a valid number. Please enter a number or 'exit'.`);
        }
    }
}

/**
 * 2. Simple Quiz
 * Asks the user a question and checks if they answer correctly.
 * Level Up: Add multiple questions, keep track of the score.
 */
async function simpleQuiz() {
    console.log("\n--- 2. Simple Quiz ---");

    const questions = [
        {
            question: "What is the capital of France?",
            answer: "Paris"
        },
        {
            question: "What is 7 + 8?",
            answer: "15"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars"
        }
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        console.log(`\nQuestion ${i + 1}: ${q.question}`);
        const userAnswer = await askQuestion("Your answer: ");

        if (userAnswer.trim().toLowerCase() === q.answer.toLowerCase()) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Wrong! The correct answer was: ${q.answer}`);
        }
    }

    console.log(`\nQuiz finished! You scored ${score} out of ${questions.length}.`);
}

/**
 * 3. Odd or Even Checker
 * Tells the user if their number is odd or even.
 * Level Up: Keep asking for numbers until 'stop', provide fun fact.
 */
async function oddEvenChecker() {
    console.log("\n--- 3. Odd or Even Checker ---");
    console.log("Enter a number to check if it's odd or even, or type 'stop' to quit.");

    const funFacts = {
        even: [
            "Even numbers are always divisible by 2!",
            "Did you know, 0 is considered an even number?",
            "Even numbers often represent pairs or symmetry."
        ],
        odd: [
            "Odd numbers always leave a remainder of 1 when divided by 2!",
            "The sum of two odd numbers is always even.",
            "The product of two odd numbers is always odd."
        ]
    };

    while (true) {
        let userInput = await askQuestion("Enter a number (or 'stop'): ");
        userInput = userInput.trim();

        if (userInput.toLowerCase() === 'stop') {
            console.log("Exiting Odd or Even Checker.");
            break;
        }

        const number = parseInt(userInput);

        if (!isNaN(number)) {
            if (number % 2 === 0) {
                console.log(`${number} is an EVEN number.`);
                const fact = funFacts.even[Math.floor(Math.random() * funFacts.even.length)];
                console.log(`Fun Fact: ${fact}`);
            } else {
                console.log(`${number} is an ODD number.`);
                const fact = funFacts.odd[Math.floor(Math.random() * funFacts.odd.length)];
                console.log(`Fun Fact: ${fact}`);
            }
        } else {
            console.log(`"${userInput}" is not a valid number. Please enter a number or 'stop'.`);
        }
    }
}

/**
 * 4. Word Repeater
 * Asks the user for a word and a number, then prints the word that many times.
 * Level Up: Print in numbered list, choose single/separate lines.
 */
async function wordRepeater() {
    console.log("\n--- 4. Word Repeater ---");

    const word = await askQuestion("Enter a word: ");
    let numRepeats;

    while (true) {
        const inputNum = await askQuestion("How many times should it be repeated? ");
        numRepeats = parseInt(inputNum.trim());
        if (!isNaN(numRepeats) && numRepeats > 0) {
            break;
        } else {
            console.log("Please enter a valid positive number.");
        }
    }

    let lineOption;
    while (true) {
        const inputOption = await askQuestion("Print on (1) one line or (2) separate lines? (1/2): ");
        lineOption = inputOption.trim();
        if (lineOption === '1' || lineOption === '2') {
            break;
        } else {
            console.log("Invalid option. Please enter '1' for one line or '2' for separate lines.");
        }
    }

    console.log("\nHere are your repeated words:");
    if (lineOption === '1') {
        let repeatedWords = [];
        for (let i = 0; i < numRepeats; i++) {
            repeatedWords.push(word);
        }
        console.log(repeatedWords.join(' ')); // Join with space for one line
    } else {
        for (let i = 0; i < numRepeats; i++) {
            console.log(`${i + 1}. ${word}`); // Numbered list on separate lines
        }
    }
}

/**
 * 5. Basic Countdown
 * Asks the user for a number and counts down to zero.
 * Level Up: Custom message, chosen step.
 */
async function basicCountdown() {
    console.log("\n--- 5. Basic Countdown ---");

    let startNumber;
    while (true) {
        const inputNum = await askQuestion("Enter a starting number for the countdown: ");
        startNumber = parseInt(inputNum.trim());
        if (!isNaN(startNumber) && startNumber >= 0) {
            break;
        } else {
            console.log("Please enter a valid non-negative starting number.");
        }
    }

    let step;
    while (true) {
        const inputStep = await askQuestion("Enter a step to count down by (e.g., 1, 2, 5): ");
        step = parseInt(inputStep.trim());
        if (!isNaN(step) && step > 0) {
            break;
        } else {
            console.log("Please enter a valid positive step.");
        }
    }

    const customMessage = await askQuestion("Enter a custom message to display at the end (or leave empty for 'Blast off!'): ");
    const finalMessage = customMessage.trim() === '' ? "Blast off!" : customMessage.trim();

    console.log("Starting countdown...");
    for (let i = startNumber; i >= 0; i -= step) {
        console.log(i);
        // Optional: add a small delay for better visual effect (uncomment if desired)
        // await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log(finalMessage);
}

/**
 * 6. Simple To-Do List
 * Allows the user to enter tasks and display them.
 * Level Up: Allow task deletion, mark as completed.
 */
async function simpleTodoList() {
    console.log("\n--- 6. Simple To-Do List ---");
    const tasks = [];

    while (true) {
        console.log("\nTo-Do List Options:");
        console.log("  1. Add a task");
        console.log("  2. List tasks");
        console.log("  3. Mark a task as completed");
        console.log("  4. Delete a task");
        console.log("  5. Exit To-Do List");

        const choice = await askQuestion("Enter your choice (1-5): ");

        switch (choice.trim()) {
            case '1': // Add task
                const newTask = await askQuestion("Enter the task description: ");
                tasks.push({ description: newTask.trim(), completed: false });
                console.log("Task added!");
                break;

            case '2': // List tasks
                if (tasks.length === 0) {
                    console.log("Your to-do list is empty!");
                } else {
                    console.log("\n--- Your Tasks ---");
                    tasks.forEach((task, index) => {
                        const status = task.completed ? "[COMPLETED]" : "[PENDING]";
                        console.log(`${index + 1}. ${status} ${task.description}`);
                    });
                    console.log("------------------");
                }
                break;

            case '3': // Mark as completed
                if (tasks.length === 0) {
                    console.log("No tasks to mark as completed.");
                    break;
                }
                console.log("\n--- Tasks to Mark ---");
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}. ${task.description} (${task.completed ? "Completed" : "Pending"})`);
                });
                const completeIndexInput = await askQuestion("Enter the number of the task to mark as completed: ");
                const completeIndex = parseInt(completeIndexInput.trim()) - 1;

                if (!isNaN(completeIndex) && completeIndex >= 0 && completeIndex < tasks.length) {
                    tasks[completeIndex].completed = true;
                    console.log("Task marked as completed!");
                } else {
                    console.log("Invalid task number.");
                }
                break;

            case '4': // Delete task
                if (tasks.length === 0) {
                    console.log("No tasks to delete.");
                    break;
                }
                console.log("\n--- Tasks to Delete ---");
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}. ${task.description}`);
                });
                const deleteIndexInput = await askQuestion("Enter the number of the task to delete: ");
                const deleteIndex = parseInt(deleteIndexInput.trim()) - 1;

                if (!isNaN(deleteIndex) && deleteIndex >= 0 && deleteIndex < tasks.length) {
                    const deletedTask = tasks.splice(deleteIndex, 1); // Remove 1 element at deleteIndex
                    console.log(`Task "${deletedTask[0].description}" deleted!`);
                } else {
                    console.log("Invalid task number.");
                }
                break;

            case '5': // Exit
                console.log("Exiting To-Do List. Goodbye!");
                return; // Exit the function

            default:
                console.log("Invalid choice. Please enter a number between 1 and 5.");
        }
    }
}

/**
 * 7. Magic 8-Ball
 * Gives a random response to the user's question.
 * Level Up: Add a delay, give more themed responses.
 */
async function magic8Ball() {
    console.log("\n--- 7. Magic 8-Ball ---");

    const responses = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes, definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    const themedResponses = [
        "The stars align to say yes!",
        "Consulting the ancient scrolls... it's a 'no'.",
        "The future is shrouded in mist. Try again.",
        "My circuits indicate a positive outcome.",
        "A glitch in the matrix suggests otherwise."
    ];

    while (true) {
        const question = await askQuestion("Ask the Magic 8-Ball a question (or type 'exit' to quit): ");

        if (question.trim().toLowerCase() === 'exit') {
            console.log("Shaking off the dust. Goodbye!");
            break;
        }

        if (question.trim() === '') {
            console.log("Please ask a question.");
            continue;
        }

        console.log("Shaking the 8-Ball...");

        // Add a delay before displaying the answer
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay

        // Randomly choose between standard and themed responses
        const useThemed = Math.random() < 0.3; // 30% chance for a themed response
        let response;
        if (useThemed && themedResponses.length > 0) {
            response = themedResponses[Math.floor(Math.random() * themedResponses.length)];
        } else {
            response = responses[Math.floor(Math.random() * responses.length)];
        }

        console.log(`The Magic 8-Ball says: "${response}"`);
    }
}

/**
 * 8. Number Guesser
 * Makes the user guess a randomly generated number.
 * Level Up: Allow difficulty selection, track attempts.
 */
async function numberGuesser() {
    console.log("\n--- 8. Number Guesser ---");
    console.log("I will think of a number, and you try to guess it!");

    let min = 1;
    let max = 10; // Default range

    // Difficulty selection
    let difficultyChoice;
    while (true) {
        difficultyChoice = await askQuestion("Choose difficulty: (1) Easy (1-10), (2) Medium (1-50), (3) Hard (1-100): ");
        switch (difficultyChoice.trim()) {
            case '1': max = 10; break;
            case '2': max = 50; break;
            case '3': max = 100; break;
            default:
                console.log("Invalid choice. Please enter 1, 2, or 3.");
                continue;
        }
        break;
    }

    const targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`I'm thinking of a number between ${min} and ${max}.`);

    let attempts = 0;
    let guessedCorrectly = false;

    while (!guessedCorrectly) {
        const guessInput = await askQuestion("What is your guess? (or 'exit' to quit): ");
        const guess = guessInput.trim();

        if (guess.toLowerCase() === 'exit') {
            console.log(`You gave up! The number was ${targetNumber}.`);
            break;
        }

        const guessNum = parseInt(guess);

        if (isNaN(guessNum)) {
            console.log("That's not a number! Please enter a valid number.");
            continue;
        }

        attempts++;

        if (guessNum < targetNumber) {
            console.log("Too low! Try again.");
        } else if (guessNum > targetNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the number ${targetNumber} correctly!`);
            console.log(`It took you ${attempts} attempt(s).`);
            guessedCorrectly = true;
        }
    }
}

/**
 * 9. Name Formatter
 * Asks for a full name and displays it properly capitalized.
 * Level Up: Handle extra spaces, allow multiple names.
 */
async function nameFormatter() {
    console.log("\n--- 9. Name Formatter ---");
    console.log("Enter a full name to format it, or type 'exit' to quit.");

    function capitalizeName(name) {
        // Trim leading/trailing spaces and replace multiple spaces with a single space
        const cleanedName = name.trim().replace(/\s+/g, ' ');
        const words = cleanedName.split(' ');
        const capitalizedWords = words.map(word => {
            if (word.length === 0) {
                return ''; // Handle empty strings from extra spaces (already handled by replace, but good for robustness)
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        return capitalizedWords.join(' ');
    }

    while (true) {
        const nameInput = await askQuestion("Enter a full name (or 'exit'): ");

        if (nameInput.toLowerCase() === 'exit') {
            console.log("Exiting Name Formatter.");
            break;
        }

        if (nameInput.trim() === '') {
            console.log("Name cannot be empty. Please enter a name.");
            continue;
        }

        const formattedName = capitalizeName(nameInput);
        console.log(`Formatted Name: ${formattedName}`);
    }
}

/**
 * 10. Rock, Paper, Scissors
 * Asks the user to play against the computer.
 * Level Up: Keep score, allow playing against a friend.
 */
async function rockPaperScissors() {
    console.log("\n--- 10. Rock, Paper, Scissors ---");

    let player1Score = 0;
    let player2Score = 0; // Or Computer score

    let gameMode;
    while (true) {
        gameMode = await askQuestion("Choose game mode: (1) Vs. Computer, (2) Vs. Friend: ");
        if (gameMode.trim() === '1' || gameMode.trim() === '2') {
            break;
        } else {
            console.log("Invalid choice. Please enter '1' or '2'.");
        }
    }

    const choices = ['rock', 'paper', 'scissors'];

    async function getPlayerChoice(playerNum) {
        while (true) {
            const choiceInput = await askQuestion(`Player ${playerNum}, choose rock, paper, or scissors (or 'exit'): `);
            const choice = choiceInput.trim().toLowerCase();
            if (choices.includes(choice)) {
                return choice;
            } else if (choice === 'exit') {
                return 'exit';
            } else {
                console.log("Invalid choice. Please choose rock, paper, or scissors.");
            }
        }
    }

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            return "It's a tie!";
        }

        // Player 1 wins conditions
        if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')
        ) {
            return "Player 1 wins!";
        } else {
            return "Player 2 wins!"; // Or Computer wins
        }
    }

    while (true) {
        console.log(`\n--- Current Score: Player 1: ${player1Score} | ${gameMode === '1' ? 'Computer' : 'Player 2'}: ${player2Score} ---`);

        const p1Choice = await getPlayerChoice(1);
        if (p1Choice === 'exit') {
            console.log("Exiting Rock, Paper, Scissors.");
            break;
        }
        console.log(`Player 1 chose: ${p1Choice}`);

        let p2Choice;
        if (gameMode === '1') { // Vs. Computer
            p2Choice = getComputerChoice();
            console.log(`Computer chose: ${p2Choice}`);
        } else { // Vs. Friend
            p2Choice = await getPlayerChoice(2);
            if (p2Choice === 'exit') {
                console.log("Exiting Rock, Paper, Scissors.");
                break;
            }
            console.log(`Player 2 chose: ${p2Choice}`);
        }

        const result = determineWinner(p1Choice, p2Choice);
        console.log(result);

        if (result === "Player 1 wins!") {
            player1Score++;
        } else if (result === "Player 2 wins!" || result === "Player 2 wins!") { // Computer also counts as player 2
            player2Score++;
        }
    }
}


/**
 * Main function to display the menu and run selected activities.
 */
async function mainMenu() {
    console.log("Welcome to the JavaScript Project Activities Collection!");

    while (true) {
        console.log("\n--- Main Menu ---");
        console.log("1. Number Doubler");
        console.log("2. Simple Quiz");
        console.log("3. Odd or Even Checker");
        console.log("4. Word Repeater");
        console.log("5. Basic Countdown");
        console.log("6. Simple To-Do List");
        console.log("7. Magic 8-Ball");
        console.log("8. Number Guesser");
        console.log("9. Name Formatter");
        console.log("10. Rock, Paper, Scissors");
        console.log("11. Exit Program");

        const choice = await askQuestion("Enter the number of the activity you want to run: ");

        switch (choice.trim()) {
            case '1': await numberDoubler(); break;
            case '2': await simpleQuiz(); break;
            case '3': await oddEvenChecker(); break;
            case '4': await wordRepeater(); break;
            case '5': await basicCountdown(); break;
            case '6': await simpleTodoList(); break;
            case '7': await magic8Ball(); break;
            case '8': await numberGuesser(); break;
            case '9': await nameFormatter(); break;
            case '10': await rockPaperScissors(); break;
            case '11':
                console.log("Exiting program. Goodbye!");
                rl.close(); // Close the readline interface
                return; // Exit the mainMenu function
            default:
                console.log("Invalid choice. Please enter a number between 1 and 11.");
        }
        console.log("\nPress Enter to return to the Main Menu...");
        await askQuestion(""); // Wait for user to press enter before showing menu again
    }
}

// Start the main menu
mainMenu();