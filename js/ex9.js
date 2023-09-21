// Function to determine if a number entered is even
const isEven = (n1) => {
  if (n1 % 2 === 0) {
    return console.log(`${n1} - ${true}`);
  } else {
    return console.log(`${n1} - ${false}`);
  }
}


// Test with 4 and 5
const is4even = isEven(4);
const is5even = isEven(5);
