import {IShape} from "../Enum/interface"


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

