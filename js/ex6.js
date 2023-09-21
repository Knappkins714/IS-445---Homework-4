function vowel(word) {
  let sum = 0

  let vowels = ["a", "e", "i", "o", "u"]

  let split = word.split("")

  for (let i = 0; i < vowels.length; i++) {

    for (let u = 0; u < split.length; u++) {

      if (vowels[i] === split[u]) {
        sum = sum + 1
      }
    }
  }

  return sum
}

function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[word.length - i - 1]) {
      return "is a palindrome";
    }
    else {
      return "is not a palindrome";
    }
  }
}

let word = prompt("Enter a word: ")

console.log(`${word}` + " contains " + vowel(word.toLowerCase()) + 
  " vowels" + " and " + palindrome(word.toLowerCase()))
