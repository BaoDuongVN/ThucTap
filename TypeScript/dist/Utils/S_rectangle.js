"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.rectArea = void 0;
const numeric_1 = require("../Enum/numeric");
const rectangle = {
    height: 10,
    width: 5,
};
const circle = {
    radius: 20
};
const rectArea = () => {
    return rectangle.height * rectangle.width;
};
exports.rectArea = rectArea;
const circleArea = () => {
    return circle.radius * circle.radius * numeric_1.MathConstant.PI;
};
exports.circleArea = circleArea;
