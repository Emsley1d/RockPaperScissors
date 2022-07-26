const player = {
  currentChoice: null
};

const computer = {
  currentChoice: null
};

const choices = ["Lapis", "Papyrus", "Scalpellus"];

const clickLapis = document
  .getElementById("Lapis")
  .addEventListener("click", selectLapis);

const clickPapyrus = document
  .getElementById("Papyrus")
  .addEventListener("click", selectPapyrus);

const clickScalpellus = document
  .getElementById("Scalpellus")
  .addEventListener("click", selectScalpellus);

const clickReset = document
  .getElementById("Reset")
  .addEventListener("click", selectReset);

function computerChooses() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

function displayResult(result) {
  const resultText = document.createElement("p");
  (resultText.innerText = result), document.body.appendChild(resultText);
}

function selectLapis() {
  player.currentChoice = choices[0];
  compareChoices();
}

function selectPapyrus() {
  player.currentChoice = choices[1];
  compareChoices();
}

function selectScalpellus() {
  player.currentChoice = choices[2];
  compareChoices();
}

function displayResult(result) {
  const resultText = document.createElement("p");
  (resultText.innerText = result), document.body.appendChild(resultText);
}

function selectReset() {
  const deleteResult = document.querySelector("p");
  deleteResult.remove();
}

function compareChoices() {
  computerChooses();
  if (computer.currentChoice == player.currentChoice) {
    displayResult(
      "It's a draw! You chose " +
        player.currentChoice +
        " and the computer chose " +
        computer.currentChoice
    );
  } else if (computer.currentChoice == choices[0]) {
    if (player.currentChoice == choices[1]) {
      displayResult(
        "Congratulations, you win! You chose " +
          player.currentChoice +
          " and computer chose " +
          computer.currentChoice
      );
    } else {
      displayResult(
        "Computer wins! Computer chose " +
          computer.currentChoice +
          " and you chose " +
          player.currentChoice
      );
    }
  } else if (computer.currentChoice == choices[1]) {
    if (player.currentChoice == choices[2]) {
      displayResult(
        "Congratulations, you win! You chose " +
          player.currentChoice +
          " and computer chose " +
          computer.currentChoice
      );
    } else {
      displayResult(
        "Computer wins! Computer chose " +
          computer.currentChoice +
          " and you chose " +
          player.currentChoice
      );
    }
  } else if (computer.currentChoice == choices[2]) {
    if (player.currentChoice == choices[0]) {
      displayResult(
        "Congratulations, you win! You chose " +
          player.currentChoice +
          " and computer chose " +
          computer.currentChoice
      );
    } else {
      displayResult(
        "Computer wins! Computer chose " +
          computer.currentChoice +
          " and you chose " +
          player.currentChoice
      );
    }
  }
}
