// Type Aliases
type carYear = number;
type carType = string;
type carModel = string;
type Car_3 = {
    year: carYear,
    type: carType,
    model: carModel
};

const CarYear: carYear = 2010;
const CarType: carType = "Toyota";
const CarModel: carModel = "Corolla";
export const car_3: Car_3 = {
    year: CarYear,
    type: CarType,
    model: CarModel,
};

// Ex2
type dog = {
    dogName: string,
    dogType: string,
    dogAge: number,
}

export const dogInfo: dog = {
    dogName: "Bob",
    dogType: "Pitbull",
    dogAge: 3,
};

// types aliases
export type Wrapped<T> = {
    value: T;
}

// Interface
export interface Irectangle {
    width: number,
    height: number,
};

export interface Icircle {
    radius: number,
};

export interface IShape {
    getArea: () => number;
}

export class Rectangle implements IShape{
    public constructor(
        protected readonly width: number,
        protected readonly height: number,    
    ) {};

    public getArea(): number {
        return this.width * this.height;
    }

    public getWidth(): number {
        return this.width;
    }

    public toString(): string {
      return `Rectangle[width =${this.width}, height=${this.height}]`;
    }
}

