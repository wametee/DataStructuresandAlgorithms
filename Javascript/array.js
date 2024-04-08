// Write a program using arrays to accept 5 values then find the sum and average of those values


// Assign an array of numbers
const numbers = [1, 2, 3, 4, 5]; 


let sum = 0; // initial value 

for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;

console.log(sum);
console.log(average)
