// Rock, Paper, Scissors Game

const choices = ["rock", "paper", "scissors"];
const winningConditions = ["paperrock", "scissorspaper", "rockscissors"];

let userScore = 0;
let compScore = 0;
let ties = 0;

// Getting references to HTML elements
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("computer-score");
const tiesDisplay = document.getElementById("ties");

// Adding event listeners
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// Function to play the game
function playGame(userChoice) {
    // Generating random computer choice
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = compChoice;

    // Determining the result
    const result = userChoice + compChoice; 

    if (winningConditions.includes(result)) {
        showResultPopup("You win!");
        userScore++;
    } else if (userChoice === compChoice) {
       showResultPopup("It's a tie!");
        ties++;
    } else {
        showResultPopup("You lose!");
        compScore++;
    }

    // Updating the scores
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
    tiesDisplay.textContent = ties;
}


// Result pop up box function:
function showResultPopup(message) {
    // Removing any existing popups
    const existing = document.getElementById("result-overlay");
    if (existing) existing.remove();

    // Creating an overlay
    const overlay = document.createElement("div");
    overlay.id = "result-overlay";

    // Creating a popup box
    const box = document.createElement("div");
    box.id = "result-box";
    box.textContent = message;

    // Creating a close button
    const closeBtn = document.createElement("button");
    closeBtn.className = "popup-close-btn";
    closeBtn.textContent = "OK";
    closeBtn.onclick = () => overlay.remove();

    box.appendChild(document.createElement("br"));
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
}






// POP UP ALERTS + PROMPTS VERSION

// let userChoice = "rock";
// let compChoice = choices[Math.floor(Math.random() * choices.length)];

// for (;true;){
//     // Prompt the user to enter a choice
//     userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

//     // Check if the user's choice is valid
//     if (!choices.includes(userChoice)) {
//         alert("Invalid choice. Please try again.");
//         continue;
//     }

//     // Generate a random choice for the computer
//     compChoice = choices[Math.floor(Math.random() * choices.length)];
//     alert("Computer chose: " + compChoice);

//     // Determine the result
//     let result = userChoice + compChoice;

//     if (winningConditions.includes(result)) {
//         alert("You win!");
//         userScore++;
//     } else if (userChoice === compChoice) {
//         alert("It's a tie!");
//         ties++;
//     } else {
//         alert("You lose!");
//         compScore++;
//     }

//     alert(`Scores: You: ${userScore} - Computer: ${compScore} - Ties: ${ties}`);

//     // Ask if the user wants to play again
//     let keepPlaying = confirm("Would you like to play again?");
    
//     if (!keepPlaying) {
//         alert("Thanks for playing!");
//         break;
//     }
// }
