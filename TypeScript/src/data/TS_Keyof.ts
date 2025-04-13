// keyof - Sử dụng trên obj, lấy ra tập hợp key của 1 type dưới dạng union
interface Person {
    name: string,
    age: number
}

export function printPersonProperty(person: Person, property: keyof(Person)) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}