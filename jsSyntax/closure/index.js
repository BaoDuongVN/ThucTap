// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outer();

// let cnt = 0;
// function increment() {
//     cnt++;
//     console.log(`Count increased to: ${cnt}`);
// }

// increment();
// increment();
// increment();

function createCounter() {
    let cnt = 0;
    function increament() {
        cnt++;
        console.log(`Count increase to ${cnt}`);
    }
    function getCount() {
        return cnt;
    }

    return {increament, getCount};
}

const counter = createCounter();
counter.increament();
counter.increament();

console.log(`The current count is ${counter.getCount()}`);