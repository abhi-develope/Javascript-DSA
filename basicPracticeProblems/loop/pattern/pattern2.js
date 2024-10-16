/**
 * *
 * * *
 * * * *
 * * * * *
 */


const n = 6;
for(let i =0; i<n; i++){
    let row = ""
    for(let j=0; j<i+1; j++){
       
       row += "* "  
    }
    console.log(row);
   
    
}


// method 2 , no need to take extra variable due console new line

const num = 6;

for (let i = 0; i < num; i++) {
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write("* ");  // Print stars on the same line
    }
    console.log();  // Print a newline after the row is completed
}
