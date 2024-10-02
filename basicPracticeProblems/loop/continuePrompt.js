// - Implement a loop that continues to prompt the user for a number until they enter 0

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptFunc() {
    rl.question("enter num", (num) => {
        const parsedNum = parseInt(num); 
        if(parsedNum === 0 ){
            console.log("you are exit from this");
            rl.close();
            
        } else{
            promptFunc();
            
        }
    })
}

promptFunc();