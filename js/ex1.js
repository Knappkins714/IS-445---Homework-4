let num1 = prompt("Enter a number: ");

while (num1 < 0 || isNaN(num1)) {
  num1 = prompt("Invalid input, please enter a number: ");
}

let num2 = prompt("Enter another number: ");

while (num2 < 0 || isNaN(num2)) {
  num2 = prompt("Invalid input, please enter a number: ");
}

let operation = prompt("Enter a mathematical operation (+, -, *, /): ");

alert(myCalculator(Number(num1), Number(num2), operation))

function myCalculator(num1, num2, operation) {

  if (operation === '+') {
    num4 = num1 + num2
  }
  else if (operation === '-') {
    num4 = num1 - num2
  }
  else if (operation === '*') {
    num4 = num1 * num2
  }
  else if (operation === '/') {
    num4 = num1 / num2
  }
  else {
    alert("Invalid Input")
  }

  return (`${num1} ${operation} ${num2} = ${num4}`);
}

console.log(`${num1} ${operation} ${num2} = ${num4}`);
