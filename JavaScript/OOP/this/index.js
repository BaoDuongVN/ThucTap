const person1 = {
    name: "SponegBob",
    favFood: "hamburger",
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}`);
    },
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}`);
    },
}

person1.eat(); // SponegBob is eating hamburger
person2.eat(); // Patrick is eating pizza