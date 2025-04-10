// Do these chores in order
// 1. Walk the dog
// 2. clean the kitchen
// 3. take out the trash

function walkDog() {
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

function cleanKichen() {
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

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("You take out the trash");
                
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

async function doChores(){
    const walkDogRes = await walkDog();
    console.log(walkDogRes);

    const cleanKichenRes = await cleanKichen();
    console.log(cleanKichenRes);

    const takeOutTrashRes = await takeOutTrash();
    console.log(takeOutTrashRes);
}

doChores();