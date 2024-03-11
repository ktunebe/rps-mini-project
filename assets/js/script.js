
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
let rock = "🪨";
let paper = "📄";
let scissors = "✂️";

// Functions for displaying results after guess
showChoice = function(id, choice) {
      document.getElementById(id).textContent = choice;
}
showHeadings = function() {
      document.getElementById("your-guess-heading").textContent = "Your Guess";
      document.getElementById("opp-guess-heading").textContent = "Opponent's Guess";
}

// Generate opponent choice
const newChoice = function() {
      autoChoice = choices[Math.floor(Math.random() * 3)];
      return;
};
// Display opponent choice
const displayChoice = function() {
      if (autoChoice === "R") {
            showChoice("opp-guess-result", rock);
      } else if (autoChoice === "P") {
            showChoice("opp-guess-result", paper);
      } else if (autoChoice === "S") {
            showChoice("opp-guess-result", scissors);
      }
};

prompt('Type "R" for Rock, "P" for Paper, or "S" for Scissors');

showHeadings();
showChoice("your-guess-result", rock);
newChoice();
displayChoice();



