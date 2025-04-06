class Animal {
    alive = true;
    eat() {
        console.log(`This is ${this.name} is eating`);
    }

    sleep() {
        console.log(`This is ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
}

class Fish extends Animal {
    name = "fish";
}


const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive); // true
rabbit.eat(); // This is rabbit is eating   
fish.eat(); // This is fish is eating
rabbit.sleep(); // This is rabbit is sleeping
fish.sleep(); // This is fish is sleeping
