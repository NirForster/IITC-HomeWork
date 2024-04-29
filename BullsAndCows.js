let Bulls = 0;
let Cows = 0;
let currentSecretCode = generateRandomSecretCode(); // Array to store the answer (the secret code)
let guess = [
  // Array to store current guesses
  parseInt(document.getElementById("input1").textContent),
  parseInt(document.getElementById("input2").textContent),
  parseInt(document.getElementById("input3").textContent),
  parseInt(document.getElementById("input4").textContent),
];
let previousGuesses = []; // Array to store previous guesses

function generateRandomSecretCode() {
  // function to generate a secret code
  let secretCode = [];
  while (secretCode.length < 4) {
    let num = Math.floor(Math.random() * 10);
    let isUnique = true;
    for (let i = 0; i < secretCode.length; i++) {
      if (secretCode[i] === num) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      secretCode.push(num);
    }
  }

  return secretCode;
}
console.log(generateRandomSecretCode());

function plusOneToCurrent(buttonId) {
  // get the current value of the button
  let currentValue = parseInt(
    document.getElementById(buttonId).textContent || "0"
  );
  // add 1 to the value and wrap around to 0 after 9
  let newValue = (currentValue + 1) % 10;

  // update with the new value
  document.getElementById(buttonId).textContent = newValue.toString();

  // update the corresponding value in the guess array
  switch (buttonId) {
    case "input1":
      guess[0] = newValue;
      break;
    case "input2":
      guess[1] = newValue;
      break;
    case "input3":
      guess[2] = newValue;
      break;
    case "input4":
      guess[3] = newValue;
      break;
    default:
      break;
  }
}

// function to check for duplicate numbers
function checkForDuplicates() {
  for (let i in guess) {
    for (let j in guess)
      if (j != i && guess[i] == guess[j]) {
        return true;
      }
  }
  return false;
}

function checkForWin() {
  if (!checkForDuplicates(guess)) {
    Bulls = 0;
    Cows = 0;

    // Array to store the user's guess:
    let userGuess = [
      parseInt(document.getElementById("input1").textContent),
      parseInt(document.getElementById("input2").textContent),
      parseInt(document.getElementById("input3").textContent),
      parseInt(document.getElementById("input4").textContent),
    ];

    //check for bulls or cows:
    for (let i = 0; i < 4; i++) {
      if (userGuess[i] === currentSecretCode[i]) {
        Bulls++;
      } else if (currentSecretCode.includes(userGuess[i])) {
        Cows++;
      }
    }

    // Add current guess to previous guesses
    previousGuesses.push({
      guess: userGuess.slice(),
      bulls: Bulls,
      cows: Cows,
    });

    // update bulls and cows score:
    document.getElementById("Bulls").textContent = `Bulls: ${Bulls}`;
    document.getElementById("Cows").textContent = `Cows: ${Cows}`;

    // display previous guesses
    displayPreviousGuesses();

    // check for win:
    if (Bulls === 4) {
      alert("Congratulations! You won!");
    }
  } else alert("cant have duplicate numbers in your guess");
}

function displayPreviousGuesses() {
  let previousGuessesDisplay = document.getElementById("previousGuesses");
  previousGuessesDisplay.innerHTML = ""; // Clear previous guesses display

  // Loop through previousGuesses array and display each guess
  previousGuesses.forEach((guessInfo, index) => {
    let guess = guessInfo.guess;
    let bulls = guessInfo.bulls;
    let cows = guessInfo.cows;

    let guessElement = document.createElement("p");
    guessElement.textContent = `Guess ${index + 1}: ${guess.join(
      ""
    )} - Bulls: ${bulls}, Cows: ${cows}`;
    previousGuessesDisplay.appendChild(guessElement);
  });
}

function reset() {
  // Reset Bulls and Cows display
  document.getElementById("Bulls").textContent = "";
  document.getElementById("Cows").textContent = "";

  // Reset guess input fields
  document.getElementById("input1").textContent = "0";
  document.getElementById("input2").textContent = "1";
  document.getElementById("input3").textContent = "2";
  document.getElementById("input4").textContent = "3";

  // Clear previous guesses array
  previousGuesses = [];

  // Clear displayed previous guesses
  let previousGuessesDisplay = document.getElementById("previousGuesses");
  previousGuessesDisplay.innerHTML = "";

  // Generate a new secret code
  currentSecretCode = generateRandomSecretCode();
}

// Check for duplicates in the guess and enable/disable the Guess button accordingly
// let guessButton = document.getElementById("guessButton");
// if (checkForDuplicates(guess)) {
//   guessButton.disabled = true; // Disable the Guess button
//   duplicateMessage.textContent = "Please ensure each number is unique.";
//   duplicateMessage.style.display = "block";
// } else {
//   guessButton.disabled = false; // Enable the Guess button
//   duplicateMessage.textContent = ""; // Clear the message
//   duplicateMessage.style.display = "none"; // Hide the message
// }
