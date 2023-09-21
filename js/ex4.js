const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
let minValue = values[0];
let maxValue = values[0];

for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

for (let i = 0; i < values.length; i++) {
  if (values[i] > maxValue)
    maxValue = values[i];
  else if (values[i] < minValue)
    minValue = values[i];
}

console.log(`The sum of all array values is ${sum}.`)
console.log(`The minimum value is ${minValue}.`)
console.log(`The maximum value is ${maxValue}.`)
