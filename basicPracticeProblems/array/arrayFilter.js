// - Use filter to find all even numbers in an array

const arr = [1, 2, 3, 4, 5, 6];

const arr2 = arr.filter((item) => {
    return item % 2 === 0; // Return true if the number is even
});

console.log(arr2);
