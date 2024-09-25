const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the first number
rl.question('Enter the first number: ', (num1) => {
  // Ask for the second number
  rl.question('Enter the second number: ', (num2) => {
    // Ask for the third number
    rl.question('Enter the third number: ', (num3) => {
      // Convert the inputs to numbers
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      const number3 = parseFloat(num3);

      // Find the largest number
      let largest = number1;
      if (number2 > largest) {
        largest = number2;
      }
      if (number3 > largest) {
        largest = number3;
      }

      console.log(`The largest number is: ${largest}`);

      // Close the input stream
      rl.close();
    });
  });
});
