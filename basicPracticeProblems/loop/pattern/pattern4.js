/**
 * A
 * B B
 * c c c
 * D D D D
 */

const n = 5;


let ch = 65 ;
for(let i = 0; i < n; i++) {
    let row = '';
   
    for(let j = 0; j < i + 1; j++) {
        row += String.fromCharCode(ch + i) + " ";  // Convert ASCII to char and add to row
       
       
    }
    console.log(row);  // Print the row
}