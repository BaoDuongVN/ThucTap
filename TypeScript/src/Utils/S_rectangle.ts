import {Irectangle, Icircle} from "../Enum/interface";
import {MathConstant} from "../Enum/numeric"

const rectangle: Irectangle = {
    height: 10,
    width: 5,
};

const circle: Icircle = {
    radius: 20
};

export const rectArea = () => {
    return rectangle.height * rectangle.width;
}

export const circleArea = () => {
    return circle.radius * circle.radius * MathConstant.PI;
}