// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);

// console.log(squares);


// function square(element) {
//     return Math.pow(element, 2);
// }

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const date = dates.map(formatDates);

console.log(date);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}