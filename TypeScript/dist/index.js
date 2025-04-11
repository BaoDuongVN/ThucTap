"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const override_1 = require("./models/override");
// console.log(car_1.type);
// console.log(car_2);
// console.log(getTime());
// const res = divide({divident: 10, divisor: 2});
// console.log(`The result of divide operation is: ${res}`);
// const res = add(4, 5, 6, 7, 8);
// console.log(res);
// const student = new Student(() => {
//     const age = readlineSync.question("Enter your age");
//     return parseInt(age);
// });
// console.log(student.getAge());
class square extends override_1.Rectangle {
    constructor(width) {
        super(width, width);
    }
    toString() {
        return `Square[field1=${this.width}]`;
    }
}
const squareElement = new square(12);
squareElement.toString;
squareElement.getArea;
