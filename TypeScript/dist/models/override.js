"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width =${this.width}, height=${this.height}]`;
    }
}
exports.Rectangle = Rectangle;
