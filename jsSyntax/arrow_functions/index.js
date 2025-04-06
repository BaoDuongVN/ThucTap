// const hello = (name, age) => {console.log(`Hello ${name}`)
//                             console.log(`You are ${age} years old`)};
// hello("Bro", 25);

// setTimeout( () => console.log("Hello bro"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);