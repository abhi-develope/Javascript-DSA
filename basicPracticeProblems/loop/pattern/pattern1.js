// A B C
// D E F
// G H I

const n = 3;
let ch = 65;  // ASCII value of 'A'

for(let i = 0; i < n; i++) {
    let row = "";  // Create a row to store characters
    for(let j = 0; j < n; j++) {
        row += String.fromCharCode(ch) + " ";  // Convert ASCII to char and add to row
        ch++;  // Increment the ASCII value
    }
    console.log(row);  // Print the row
}
