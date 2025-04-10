// class MathUtils {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static getCircumference(radius) {
//         return this.PI * this.getDiameter(radius);
//     }
// }

// console.log(MathUtils.PI);
// console.log(MathUtils.getDiameter(10));
// console.log(MathUtils.getCircumference(10));

class User {
    static userCount = 0;
    constructor(name) {
        this.name = name;
        User.userCount++;
    }

    static getUserCount() {
        return `There are ${this.userCount} users.`;
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.name); // Spongebob
console.log(user2.name); // Patrick
console.log(user3.name); // Sandy

console.log(user1.userCount); // Do user1 không có thuộc tính userCount, nên sẽ tìm đến class User
console.log(User.userCount); // 1

console.log(User.getUserCount()); // There are 3 users.