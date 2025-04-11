export class Person {
    name: string;
    constructor() {
        this.name = "";
    }
}

export class Student {
    private age: number;
    public constructor() {
        this.age = 0;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number) {
        this.age = age;
    }
}
