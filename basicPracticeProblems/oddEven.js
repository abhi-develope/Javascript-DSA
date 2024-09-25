// Check if a number is even or odd.

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question and get input
rl.question('Enter a number: ', (input) => {
  // Convert the input to a number
  const number = parseInt(input);

  // Check if the input is a valid number
  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    // Check if the number is odd or even
    if (number % 2 === 0) {
      console.log(`${number} is an even number.`);
    } else {
      console.log(`${number} is an odd number.`);
    }
  }

  rl.close();  // Close the input stream
});
