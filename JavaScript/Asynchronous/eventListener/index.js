// const myBox = document.getElementById("myBox");
// myBox.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "yellow";
// });

// myBox.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "orange";
// });

// myBox.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "pink";
// });

// document.addEventListener("keydown", event => {
//     console.log(event.key);
// })



const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});