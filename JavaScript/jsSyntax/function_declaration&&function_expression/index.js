// Function expressions

// hello(); Không có tính hoisting
// const hello = function() {
//     console.log("Hello");
// }

// hello();

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});

console.log(squares);


// Function declaration

// hello();
// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 3000);

// setTimeout(functionjk{
//     console.log("Hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

