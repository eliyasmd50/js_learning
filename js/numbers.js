
//whole Number
const myNumber = 42;
const myFloat = 42.014567890;
const myString = "42.89nbijnijniujn";

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myString);// false bcz type conversion
console.log(myNumber === myFloat);// myFloat = 42.0 returns true
console.log(myString + 3);// 423 returns
console.log(Number(myString) + 3);// returns 45 adds two numbers
console.log(Number(myString) === myNumber);// returns true
console.log(Number("Eliyas"));// returns NaN
console.log(Number(null));// returns 0
console.log(Number(undefined));// returns NaN
console.log(Number(true));// returns 1
console.log(Number(false));// returns 0

//isInteger() method finds number is integer or not returns true or false
console.log(Number.isInteger(myNumber));// returns true
console.log(Number.isInteger(myFloat));// 42.01 retuens false

//Number.parseFloat(arg)  method parse arg values and retuens floating point number
console.log(Number.parseFloat(myFloat));// retuen 42.01
console.log(Number.parseFloat(myString));// myString = "42.89nbi" returns 42.89s

//.toFixed(count) formats the number according to how many decimal number provided as a parameter
console.log(myFloat.toFixed(2));// returns 42.01 as string

//Number.parseInt(arg) method parse the arguments based on ythe integer and returns a integer value
console.log(Number.parseInt(myString));// removes the characters and returns only numbers

// toString() to convert a number to string
console.log(myNumber.toString());// returns string 42

//typeof to check what is the data types
console.log(typeof myString); // returns string
console.log(typeof Number.parseFloat(myString));// returns number

//chaining method
console.log(Number.parseFloat(myString).toFixed(2).toString());

//is NaN method retuens the passed value is NaN and its type is Number
console.log(Number.isNaN("fjfnewj"));// retuens false
console.log(Number.isNaN(myFloat));//returns false
console.log(Number.isNaN(384723847823));// retuens false

//global isNaN method to check whther the passed value is NaN or not
console.log(isNaN("fewewd"));// returns true
console.log(isNaN(87876)); // returns false