// - Write a function that takes an object and returns an array of its keys.

const book = {
    type: "literature",
    name: "snapmint",
    author: "abhishek",
    price: "500/-"
}



function objKeys(book){
   
    const arr = Object.keys(book);
    console.log(arr);
}

objKeys(book);

