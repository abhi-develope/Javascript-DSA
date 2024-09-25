// - Write a program to swap two numbers without using a temporary variable.


// 1. Using Arithmetic Operations:

let a = 5;
let b = 10;

console.log(`Before Swap: a = ${a}, b = ${b}`);

a = a + b;  // a becomes 15
b = a - b;  // b becomes 5
a = a - b;  // a becomes 10

console.log(`After Swap: a = ${a}, b = ${b}`);


// 2. using bitbise xor

let x = 5;
let y = 10;

console.log(`Before Swap: x = ${x}, y = ${y}`);

x = x ^ y;  
y = x ^ y;  
x = x ^ y;  

console.log(`After Swap: x = ${x}, y = ${y}`);

