import {car_1, car_2, nameAgeMap} from "./data/TS_Object_Types";
import {Icircle, Irectangle, car_3} from "./data/TS_Aliases_Interfaces";
import {printStatusCode} from "./data/TS_Union_types";
import {add, divide, getTime} from "./data/TS_function";
import {Person, Student} from "./data/TS_Classes";
import {createPair, nameValue} from "./data/TS_Basic_Generics";
import {printPersonProperty} from "./data/TS_Keyof";
import {printYardSize, House, printMileage, getValue} from "./data/TS_Null"



// console.log(car_1.type);
// console.log(car_2);

// console.log(getTime());
// const res = divide({divident: 10, divisor: 2});
// console.log(`The result of divide operation is: ${res}`);

// const res = add(4, 5, 6, 7, 8);
// console.log(res);
// const age = Number(readlineSync.question('How old are you: '));
// console.log(age);
// const student = new Student();
// student.setAge(age);
// console.log(student.getAge());

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

// console.log(createPair<string, number>('Hello', 42));
// let value = new nameValue<number>('myNumber');
// value.setValue(10);
// console.log(value.toString());

// const wrappedValue: Wrapped<number> = {value: 10};

// let pointPart: Partial<Point> = {};
// console.log(pointPart.x = 10);

// TS Unility Types
// type Primitive = string | number | boolean;
// const value: Exclude<Primitive, string> = true;
// console.log(typeof(value) === 'number');

// let person = {
//     name: "Max",
//     age: 27
// }
// printPersonProperty(person, "name");

// let home: House = {
//     sqft: 500,
//     yard: {
//         sqft: 200,
//     }
// };
// printYardSize(home);

// printMileage(null);
// printMileage(0);

let value = getValue();
console.log('Value length: ' + value!.length);