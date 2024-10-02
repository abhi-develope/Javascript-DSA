//- Use a while loop to find the first 10 Fibonacci numbers.


const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", (input1) => {
  rl.question("Enter the second number: ", (input2) => {
    // Convert inputs to numbers
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    // Print the first two Fibonacci numbers
    console.log(num1);
    console.log(num2);

    let count = 2; // Already printed two numbers
    let nextFibonacci;
    
    // Use a while loop to print the next 8 Fibonacci numbers
    while (count < 10) {
      nextFibonacci = num1 + num2;
      console.log(nextFibonacci);
      
      // Update num1 and num2 for the next iteration
      num1 = num2;
      num2 = nextFibonacci;
      
      count++; // Increase the count of printed numbers
    }
    
    rl.close();
  });
});
