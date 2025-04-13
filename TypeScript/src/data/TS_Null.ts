// Option chaining - cho phép bạn truy cập an toàn các thuộc tính lồng nhau mà không bị
// lỗi nếu có 1 phần nào trong chuỗi là null hay undefined
export interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}

export function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

// Nullish Coalescence
export function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Availabel'}`);
}

// Null Assertion - Giống casting, sử dụng ! để hàm ngắn gọn hơn
export function getValue(): string | undefined {
    return 'Hello';
}

