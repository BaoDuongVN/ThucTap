// TS Object Types
export const car_1 : {type: string, module: string, year: number} = {
    type: "Toyota",
    module: "Corolla",
    year: 2010
};

// TS Optional Properties
export const car_2: {type: string, mileage?: number} = {
    type: "Toyota",
};
car_2.mileage = 2000; // Sử dụng dấu ? để biểu element không được sử dụng trong obj

// Index Signatures
export const nameAgeMap: { [index: string]: number} = {
    Peter: 50,
};
nameAgeMap.Jack = 25;