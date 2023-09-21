let words = [];

let input = prompt("Please enter a word: ");

if (input.toLowerCase() === "stop") {
  console.log("No words to display, stop was the first word entered.")
}
else {
  while (input.toLowerCase() !== "stop") {
    words.push(input);
    input = prompt("Please enter another word: ");
  }
}

for (i = 0; i < words.length; i++) {
  console.log(`You entered the following words: ${words}`);
}
