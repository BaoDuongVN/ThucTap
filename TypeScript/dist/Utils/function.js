"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = getTime;
exports.divide = divide;
exports.add = add;
// Return Type
function getTime() {
    return new Date().getTime();
}
// Named Parameters
function divide({ divident, divisor }) {
    return divident / divisor;
}
// Rest Paramaters
function add(a, b, ...rest) {
    return a + b + rest.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
}
