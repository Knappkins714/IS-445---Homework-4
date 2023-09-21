let r = Number(prompt("Enter the circle radius: "));
const pi = 3.14;

while (r < 0 || isNaN(r)) {
  r = prompt("Invalid input, please enter a number: ");
}

// TODO: create the circle object here

const circle = {
  radius: r,

  circumference() {
    return (2 * pi * r).toFixed(2);
  },
  area() {
    return (pi * (r * r)).toFixed(2);
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
