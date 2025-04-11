"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
class Person {
    constructor() {
        this.name = "";
    }
}
exports.Person = Person;
class Student {
    constructor(getAgeFn) {
        this.age = getAgeFn();
    }
    getAge() {
        return this.age;
    }
}
exports.Student = Student;
