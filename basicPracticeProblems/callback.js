// Write a function that takes another function as an argument and calls it.

function messageWithResult(addFunc) {
    // Call the passed function with arguments
    addFunc(3, 2); 
}

function add(num1, num2) {
    console.log(num1 + num2); // This will print the result of the sum
}

// Pass the 'add' function as an argument to 'messageWithResult'
messageWithResult(add);
