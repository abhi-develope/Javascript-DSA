// - Use a loop to calculate the factorial of a number.

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("enter number to find factorial", (num)=> {
    let factorial = 1
for(let i=num; i>0 ; i-- ){
    factorial *= i;
}

console.log("factorial is", factorial );


} )



