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