const arr = ['a','b','c','d']
//4*4 = 16 bytes of storage in 32 byte system


//push
arr.push('e'); // O(1)

//pop
arr.pop();     // O(1)

console.log(arr);

//unshift
arr.unshift('x')  // O(n) because its change or shift all the index of the previous element of the array

//splice
arr.splice(2, 0, 'allien');  // O(n)

