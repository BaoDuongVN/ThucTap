let buttons = document.querySelectorAll('.myButtons');

// console.log(buttons); 

// -----------Add HTML/CSS properties-------------------
// buttons.forEach(button => {
//     button.style.backgroundColor = 'green';
//     button.textContent += "😂";
// })

// -----------CLICK event listener-------------------
// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.style.backgroundColor = "tomato";
//         button.textContent += "😂";
//     })
// })

// -----------MOUSEOVER + MOUSEOUT event listener-------------------
// buttons.forEach(button => {
//     button.addEventListener('mouseover', event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 50%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('mouseout', event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

// ADD AN ELEMENT
// const newButton = document.createElement('button'); 
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.target.remove();
    });
});


