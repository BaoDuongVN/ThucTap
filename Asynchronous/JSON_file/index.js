
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]; 
const person = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`;
// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// const parseData = JSON.parse(person);
// console.log(parseData);

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))