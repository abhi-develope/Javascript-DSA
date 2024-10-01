// - Sort an array of strings alphabetically.

// method :- 1
const arr = ["d", "x", "r", "o", 'a'];
arr.sort();

console.log(arr);


// method:- 2

const letters = ["d", "x", "r", "o", "a"];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare two adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(letters);
console.log(letters);

