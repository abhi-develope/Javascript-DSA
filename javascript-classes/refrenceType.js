// [] === []  --> false  because they both are different data structure  (try in console)

var obj1 = { value: 10};
var obj2 = obj1;
var obj3 = {value: 10}


obj1 === obj2  // --> true
obj1 === obj3  // --> false, because they both are different data structure 

obj1.value = 15;
obj2.value // --> 15

obj3.value // --. 10