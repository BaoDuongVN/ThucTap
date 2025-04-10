// Return Type
export function getTime(): number {
    return new Date().getTime();
}

// Named Parameters
export function divide({divident, divisor} : {divident: number, divisor: number}) {
    return divident / divisor;
}

// Rest Paramaters
export function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
}