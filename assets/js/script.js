
// Set array for computer's choices
const choices = ["R", "P", "S"]
// Reset scores and counts when page is opened or refreshed
let wins = 0;
let losses = 0;
let ties = 0;
let userR = 0;
let userP = 0;
let userS = 0;
// Set emojis for RPS
const rock = "🪨";
const paper = "📄";
const scissors = "✂️";
// Set button click
const startButton = document.querySelector("button");

// Function to play a game
const playGame = function() {
      userChoice = prompt('Type "R" for Rock, "P" for Paper, or "S" for Scissors');
      if (userChoice === "R" || userChoice === "P" || userChoice === "S" || userChoice === "r" || userChoice === "p" || userChoice === "s") {
            userChoice = userChoice.toUpperCase();
            autoChoice();
            showHeadings();
            displayUserChoice();
            displayOppChoice();
            setTimeout(gameResult, 100);
      } else if (userChoice === null) {
            endGame();
      } else {
            alert("Invalid choice!")
            playGame()
      };
}
// Function to remove RPS display
const removeDisplay = function() {
      document.getElementById("opp-guess-heading").textContent = "";
      document.getElementById("user-guess-heading").textContent = "";
      document.getElementById("opp-guess-result").textContent = "";
      document.getElementById("user-guess-result").textContent = "";
}
// Functions for display win/loss/tie and choices
const displayRecord = function() {
      document.getElementById("wins").textContent = `Wins: ${wins}`;
      document.getElementById("losses").textContent = `Losses: ${losses}`;
      document.getElementById("ties").textContent = `Ties: ${ties}`;
}
const displayChoiceHistory = function() {
      document.getElementById("rocks").textContent = `You chose Rock ${userR} times.`;
      document.getElementById("papers").textContent = `You chose Paper ${userP} times.`;
      document.getElementById("scissors").textContent = `You chose Scissors ${userS} times.`;
}

// Function to end the game
const endGame = function() {
      let quit = confirm("Do you really want to quit?");
      if (quit === false) {
            playGame();
      } else if (quit === true) {
            removeDisplay();
            displayRecord();
            displayChoiceHistory();
      }
}

// Function for win/loss/tie result
const gameResult = function() {
      if ((userChoice === "R" && oppChoice === "S") || (userChoice === "S" && oppChoice === "P") || (userChoice === "P" && oppChoice === "R")) {
            wins++;
            let yesPlay = confirm("You win! Play again?");
                  if (yesPlay === true) {
            playGame();
                  } else if (yesPlay === false) {
            endGame();
                  }  
      } else if ((userChoice === "R" && oppChoice === "P") || (userChoice === "S" && oppChoice === "R") || (userChoice === "P" && oppChoice === "S")) {
            losses++;
            let yesPlay = confirm("You lose! Play again?");
                  if (yesPlay === true) {
            playGame();
                  } else if (yesPlay === false) {
            endGame();
                  }
      } else if (userChoice === oppChoice) {
            ties++;
            let yesPlay = confirm("Tie! Play again?");
                  if (yesPlay === true) {
            playGame();
                  } else if (yesPlay === false) {
            endGame();
                  }
      }
}

// Functions for displaying results after guess
showChoice = function(id, choice) {
      document.getElementById(id).textContent = choice;
}
showHeadings = function() {
      document.getElementById("user-guess-heading").textContent = "Your Guess";
      document.getElementById("opp-guess-heading").textContent = "Opponent's Guess";
}

// Generate opponent choice
const autoChoice = function() {
      oppChoice = choices[Math.floor(Math.random() * 3)];
      return;
};
// Display opponent choice
const displayOppChoice = function() {
      if (oppChoice === "R") {
            showChoice("opp-guess-result", rock);
      } else if (oppChoice === "P") {
            showChoice("opp-guess-result", paper);
      } else if (oppChoice === "S") {
            showChoice("opp-guess-result", scissors);
      }
};
// Display user choice
const displayUserChoice = function() {
      if (userChoice === "R") {
            showChoice("user-guess-result", rock);
            userR++;
      } else if (userChoice === "P") {
            showChoice("user-guess-result", paper);
            userP++;
      } else if (userChoice === "S") {
            showChoice("user-guess-result", scissors);
            userS++;
      } else {
            showChoice("user-guess-result", "Error");
      }
};

startButton.addEventListener("click", (e) => {
      playGame();
});





