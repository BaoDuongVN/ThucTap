// let fruits = ["Banana", "Duriant", "Pipeapple", "Apple"];

// fruits.sort();
// console.log(fruits);

// let numbers = [1, 10, 9, 5, 2, 3, 6, 7, 4, 8];

// numbers.sort((a, b) => a - b);
// console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);