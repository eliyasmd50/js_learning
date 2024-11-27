// Math Methods and Properties

console.log(Math.PI);// returns the PI value
console.log(Math.trunc(Math.PI));// truncate the decimals and return the whole value
console.log(Math.round(Math.PI));// give the rounded value of Pi value
console.log(Math.round(5.3));//returns 5
console.log(Math.round(5.5));// returns 6 by rounding of the value
console.log(Math.ceil(5.4));// retuens 6
console.log(Math.ceil(5.5));// return 6 round the number to higher value
console.log(Math.floor(5.5));//return 5 round the value to the lower value
console.log(Math.floor(Math.PI));//returns 3

// Math.pow(value, power) returns the power of number for the given value
console.log(Math.pow(2, 4));//16 
console.log(Math.pow(4, 4));// 256

//min and max methods to returns the minimum and maximum numbers which is passed as a argument
console.log(Math.min(2,3,4,0.3)); // retuens 0.3
console.log(Math.max(2,5,89,0.8));// returns 89

//random method to give the pseudo random numbers from 0 - 1
console.log(Math.random());
console.log(Math.random());

// to set the random numbers from 1- 10
console.log(Math.floor(Math.random() * 10) + 1);// returns random number from 1- 10 adding 1 to avoind 0
console.log(Math.floor(Math.random() * 100) + 1);// retuen a random number from 1 to 100