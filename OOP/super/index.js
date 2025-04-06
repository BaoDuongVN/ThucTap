class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 25, 20);
const fish = new Fish("fish", 30, 10);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(fish.name);
console.log(fish.age);