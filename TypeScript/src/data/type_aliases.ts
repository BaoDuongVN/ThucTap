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