
// try{
//     console.log(x);
// }
// catch(error) {
//     console.log(error);
// }
// finally {
//     console.log("This will always run.");
// }

// console.log("You have reached the end!");
    

try {
    const dividend = window.prompt("Enter the dividend: ");
    const divisor = window.prompt("Enter the divisor: ");
    
    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers!");
    }

    const result = dividend / divisor;
    console.log(`The result is: ${result}`);
} catch (error) {
    console.error(error);
}

console.log("You have reached the end!");
