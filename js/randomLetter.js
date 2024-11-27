
// Write a program to return a random letter from you name
const myName = "Eliyas";
const randomNum = Math.floor(Math.random() * myName.length)

console.log(myName.charAt(randomNum));