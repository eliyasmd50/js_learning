"use strict";
let myName = "Eliyas";
let meaningOfLife = 26;
let isLoading = true;
// let album: any;// it beats the purpose of javascript
let album; // union declaration type if we know it is just thos types of data
myName = "Mohamed";
meaningOfLife = 30;
isLoading = false;
album = true; // this will give error because of the union declared as explicitly
album = 1998;
album = "Eliyas";
const sum = (a, b) => {
    return a + b;
};
const re = /\w+/g; // regular Expression declaration
