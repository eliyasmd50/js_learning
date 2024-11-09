//Arrays
// const arr = [];

// arr.push("Eliyas");
// arr.push("MOhamed");
// arr.push("50");
// console.log(arr);

// const arr1 = new Array("Eliyas", "Mohamed", "50");
// console.log(arr1);

//array at 
// const fruits = ["apple", "banana", "custard", "dragon Fruit"];

// console.log(fruits.at(-1));
// console.log(fruits[-1]);

//array concat
// const arr1 = ["Hi", "iam", "cristiano"];
// const arr2 = new Array("siuuuuuuuuuuu");
// const arr3 = ["numero", "uno"];


// console.log(arr1.concat(arr2, arr3));
// console.log(arr1);

//Array constructor it returns the function array of the javascript array
// const fruits = ["apple", "banana", "custard", "dragon Fruit"];

// console.log(fruits.constructor);
// console.log(fruits);

//array copyWithin()
// const fruits = ["apple", "banana", "custard", "dragon Fruit", "ElderBerry", "Fig", "Grapes"];

// console.log(fruits);
// console.log(fruits.copyWithin(3));
// console.log(fruits);

//array entries

// const fruits = ["apple", "banana", "custard", "dragon Fruit"];

// const list = fruits.entries();
// console.log(list);

// let text = "";
// for( let x of list) {
//  text += x + " ";
// }

// text = list.next().value + " " + list.next().value;
// console.log(text);
// text = list.next().value + " " + list.next().value;
// console.log(text);
// text = list.next().value + " " + list.next().value;
// console.log(text);
// console.log(list);
// text = list.next().value + " " + list.next().value;
// console.log(text);
// console.log(typeof text);
// console.log(text);

// let text1 = "";
// for( let x of list) {
//  text += x + " ";
// }
// console.log(text1);
// console.log(fruits);


//array every() returns a boolean

// const ages = [32, 17, 56, 48, 90];

// function checkAge(age) {
//     return age > 18;
// }

// console.log(ages.every(checkAge));
// console.log(ages);

// array fill() fills with a value and specify start and end method of an array
// const fruits = ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(fruits.fill("mushroom", 3, 4 ))
// console.log(fruits);

//array filter() returns an array 

// const arr = [1,2,3,4,5,6,7,5,4,3,2,4];

// function checkDuplicate(val, index, arr) {
//     return index === arr.indexOf(val);
// }

//find the duplicates of an array
// const newArr = arr.filter((val, index,array) => index === array.indexOf(val));

// console.log(newArr);
// console.log(arr);

//array find()  returns a element that passes the conditi0on at first

// const arr = [56, 78, 65, 18, 56];

// const age = arr.find((val) => val === 18);

// console.log(age);
// console.log(arr);

//array findIndex() and findLast() and findLastIndex()

// const arr = [56, 78, 65, 18, 56];

// const age = arr.findIndex((val) => val > 18);
// const age1 = arr.findLast((val) => val > 18);
// const age2 = arr.findLastIndex((val) => val > 18);
// console.log(age);
// console.log(age1);
// console.log(age2);


// array flat()

// const fruits = [["apple", "guava"], ["mango", "orange"], [""]]

// console.log(fruits.flat());
// console.log(fruits);.

//array flatMap()

// const arr = [1,2,3,4,5];

// const newArr = arr.flatMap((x) => [x * 10]);

// console.log(newArr);
// console.log(arr);

// for each elements
// const fruits = ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// let text = "";
// fruits.forEach((val, index) => text += index + ":" + val + " "  );
// console.log(text);
// console.log(fruits);

//   array from() method converts string to an array

// const str = "Apple";

// console.log(Array.from(str));
// console.log(str);

//includes in array

// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(fruits.includes("custard"));

// isArray() to find the given element is array or not

// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];
// const fruits = "apple";

// console.log(Array.isArray(fruits));

//array join method joins an array to string
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];


// console.log(fruits.join(","));
// console.log(fruits);

//Arrays of keys
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// // const list = fruits.keys();// create only key iterables
// const list = fruits.entries();// create a key and value iterables

// let text = "";
// for (let x of list){
//     text += x + " ";
// }
// console.log(text);


//Array of lastIndexOf()

// const arr = [ 1,23,3,4,5,6,3,2,1];

// console.log(arr.lastIndexOf(24));

// Array length

// const arr = [1,12,3,4,5,5,5];

// arr.length = 2
// console.log(arr);

//Array map()
// const arr = [1,2,3,3,4];

// const newArr = arr.map((num) => num * 2);
// console.log(newArr);
// console.log(arr);

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   const fullName =  persons.map((full) => {
//     return [full.firstname,full.lastname].join(" ")
//   })

//   console.log(fullName);


//Array of() method create a new array from any type of arguments

// const newArr = Array.of( {firstname : "Malcom", lastname: "Reynolds"},
//         {firstname : "Kaylee", lastname: "Frye"},
//         {firstname : "Jayne", lastname: "Cobb"} )

// console.log(newArr);

// array pop() method returns the last element of the array and changes the original array
// const arr =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(arr.pop());
// console.log(arr);


// push() method adds a new elements to the array   changes the original array
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(fruits.length);
// fruits.push("pineapple");

// console.log(fruits.length);

// reduce() method is used to execute a function for array

// const arr = [1,2, 3];

// console.log(arr.reduceRight((total, num) => (total + (num * 2))));
// console.log(arr);

// reverse() method will reverse the original array

// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

//shift() removes the first element and changes the original array
// const arr = [1,2,3,4,5,5,5];

// console.log(arr.shift());
// console.log(arr.shift());
// console.log(arr.shift());
// console.log(arr);

//slice() method gives a new array of the sleected elements
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(fruits);
// console.log(fruits.slice());

//some() method checks if any element returns true 

// const arr = [1,2,3,4,5,5,6, 10];

// console.log(arr.some((val) => val >= 10))

//sort() method overites the original array and it sort in ascending alphabetical order

//alphabetical method
// const fruits =  [ 'orange', 'muskmelon', 'dragon Fruit', 'custard', 'banana', 'apple' ];

//ascending order
// fruits.sort()
// console.log(fruits);
// //descendong order
// console.log(fruits.reverse());

// //numeric sort
// const arr = [2,8,12,1,23,54];

// //ascending
// arr.sort((a,b) => a-b);
// console.log(arr);
// //descending
// arr.sort((a,b) => b-a);
// console.log(arr);


//splice() affects the original array and add/or remove the elements in an array
// const fruits = [ 'orange', 'muskmelon', 'dragon Fruit', 'custard', 'banana', 'apple' ];

// console.log(fruits);
// fruits.splice(3,2,"strawberry", "mulberry", "blueberry");
// console.log(fruits);

//toreversed() copy of rever but returns a new array
// const arr = [1,2,2,3,4];

// console.log(arr.toReversed());
// console.log(arr);

//toSorted() returns a new array
// const arr = [1,2,2,3,4,1,2,34,5,56,6];

// console.log(arr.toSorted((a,b) => a-b));

// toString() method returns array to the string
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(fruits.toString());
// console.log(fruits);

// unshift() adds a new element in the beggining of the array overwrites
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// fruits.unshift("mulberry", "strawberry");

// console.log(fruits);

// values() gives an iterator for just the values of an array
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// // const list = fruits.values();

// let text = "";
// for (let x of Object.values(fruits)) {
//     text += x + " ";
// }
// console.log(text);
// console.log(fruits);

// valueOf() returns the array itself
// const fruits =  ["apple", "banana", "custard", "dragon Fruit", "muskmelon", "orange"];

// console.log(fruits);
// console.log(fruits.valueOf());

// with() return new array to update the elemnt in an array
// const calender = ["jan", "feb", "mar"];

// console.log(calender.with(1, "february"));

// class Car {
//     constructor(brand) {
//         this.carName = brand; 
//     }
//     present() {
//         return "I have a " + this.carName;
//     }
// }
// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + " which is  " + this.model;
//     }
// }

// const myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// Date object
// const date = new Date(100000000000);
// console.log(date);


// FOr each in map method

// const fruits = new Map([
//     ["apples", 500],
//     ["orange", 455],
//     ["pineapple", 600]
// ])

// let text = "";

// fruits.forEach((val, key) => {
//     return text += key + " = " + val + " ";
// })
// console.log(text);

// regexp in exec() 
// const text = "Mohamed Eliyas";
// const result = /Eliyas/.exec(text);

// console.log(result);

//plaindrome function need to be same even after reversed

// const palindrome = (num) => {
//     const convertedString = num.toString().split('').reverse().join("");
//     console.log(convertedString)
//     return num == convertedString;
// }

// console.log(palindrome("ElilE"));

//remove duplicate in an array

// const arr = [1,1,1,2,2,3,3,34,4,4,1,5,,55,66,6,6,7];

// const removedDuplicatesArray = arr.filter((val, index, array) => index !== array.indexOf(val));
// console.log(removedDuplicatesArray);

// to remove the duplicates and give the rest of the values
const array = [1,1,1,2,2,3,3,34,4,4,1,5,,55,66,6,6,7];

const removedArray = array.find((val, index, arr) => index === arr.indexOf(val));
console.log(removedArray);
