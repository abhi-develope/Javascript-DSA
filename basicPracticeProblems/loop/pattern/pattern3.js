/**
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 */

const num = 6;

for (let i = 0; i < num; i++) {
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write(String(i + 1 ));  // Print stars on the same line
    }
    console.log();  // Print a newline after the row is completed
}