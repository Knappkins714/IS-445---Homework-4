const num = (Math.trunc((100 * Math.random())) + 1)

let yourNumber = Number(prompt("Guess the number between 1 & 100: "));

counter = 0;

while (yourNumber <0 || isNaN(yourNumber)) {
  yourNumber = prompt("Invalid input. Try again: ")
}

while(Number(yourNumber) !== Number(num) || typeof yourNumber !== "string") {
  if (yourNumber < num) {
    alert("Too low, guess again.")
    yourNumber = Number(prompt("Guess the number: "));
    counter++;
  }
  else if (yourNumber > num) {
    alert("Too high, guess again.")
    yourNumber = Number(prompt("Guess the number: "));
    counter++;
  }
  else if (yourNumber == num) {
    counter++;
    break;
  }
  else {
    alert("Incorrect input");
    yourNumber = Number(prompt("Guess the number: "));
    counter++;
  }
}

if (yourNumber == num) {
  alert(`Correct! It took you ${counter} attempts to guess the correct number.`);
}
