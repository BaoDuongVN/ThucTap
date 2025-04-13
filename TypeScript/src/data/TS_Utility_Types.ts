// Partial - Cho hết variable thành optional
export interface Point {
    x: number;
    y: number;
}

// Required - ngược lại với partial
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 
}

// Record - like index signature
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

// Omit - xóa keys ra khỏi obj
interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
};

// Pick - xóa tất cả trừ key
interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
const alice: Pick<Person, 'name'> = {
    name: 'Alice'
};

// Exclude - xóa kiểu dữ liệu được chọn từ union
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true;

// ReturnType - Trả lại kiểu dữ liệu của hàm
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// Parameters - trả lại function type dưới dạng array
type PointPrinter = (p: { x: number; y: number; }) => void;
const point_2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};