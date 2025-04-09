// Do these chores in order
// 1. Walk the dog
// 2. clean the kitchen
// 3. take out the trash

function  walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog");
                
            } else {
                reject("You didn't walk the dog");
            }
            
        }, 1500);
    });
}

function  cleanKichen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("You clean the kitchen");
                
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function  takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            if (trashTakenOut) {
                resolve("You take out the trash");
                
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value =>{console.log(value);return cleanKichen()})
        .then(value =>{console.log(value);return takeOutTrash()})
        .then(value =>{console.log(value); console.log("You are done with your chores")})
        .catch(error => console.error(error));