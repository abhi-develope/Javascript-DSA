// Find the maximum and minimum numbers in an array


// method:- 1
const arr = [43, 65, 76, 34, 45, 31];
const sortArr = arr.sort((a, b) => a - b);  // Proper numeric sorting

console.log(sortArr[0]);  // Minimum value
console.log(sortArr[sortArr.length - 1]);  // Maximum value



// method:- 2


const arr2 = [43, 65, 76, 34, 45, 31];

// Initialize min and max with the first element of the array
let min = arr2[0];
let max = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr[i] < min) {
        min = arr2[i]; // Update min if current element is smaller
    }
    if (arr2[i] > max) {
        max = arr2[i]; // Update max if current element is larger
    }
}

console.log("Minimum is", min);
console.log("Maximum is", max);




