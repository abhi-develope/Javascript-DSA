// - Merge two objects into one.

const ob1 = {
    name: "abhishek",
    profession: "delivery boy",
    accBalance: "0/-"
}

const obj2 = {
    song: "tu meri rani",
    singer: "guru randhawa",
    status: "flop"

}

const obj3 = {...ob1, ...obj2}

console.log(obj3);
