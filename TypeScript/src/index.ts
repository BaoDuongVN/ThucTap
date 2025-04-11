import {car_1} from "./data/TS_obj_types";
import {car_2} from "./data/Optional_properties";
import {nameAgeMap} from "./data/Index_signatures";
import {Success} from "./Utils/add_2numbers";
import {car_3, dogInfo} from "./data/type_aliases";
import {rectArea, circleArea} from "./Utils/S_rectangle";
import {printStatusCode} from "./data/union";
import {getTime, divide, add} from "./Utils/function";
import {Student} from "./Utils/class"
import readlineSync from 'readline-sync';
import {Rectangle} from './models/override'


// console.log(car_1.type);
// console.log(car_2);

// console.log(getTime());
// const res = divide({divident: 10, divisor: 2});
// console.log(`The result of divide operation is: ${res}`);

// const res = add(4, 5, 6, 7, 8);
// console.log(res);
const age = Number(readlineSync.question('How old are you: '));
console.log(age);
const student = new Student();
student.setAge(age);
console.log(student.getAge());

// class square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width);
//     }

//     public override toString(): string {
//       return `Square[field1=${this.width}]`;
//     }
// }
// const rectangle = new Rectangle(12, 10);
// const squareElement = new square(rectangle.getWidth());
// console.log(squareElement.toString());
// console.log(squareElement.getArea())