// ---------- .firstElementChild----------
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });

// ---------- .lastElementChild----------
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });

// ---------- .nextElementSibling----------
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// ---------- .previosElementSibling----------
// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------
// const element = document.getElementById("carrots");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// ---------- .children----------
const element = document.getElementById("fruits");
const children = element.children;

// console.log(children); 
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})