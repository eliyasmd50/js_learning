//strings
const myVariable = "Mathematics";

//the length property
console.log(myVariable.length);

//string Methods
console.log(myVariable.charAt(0)); // gives the value of the position in a string
console.log(myVariable.indexOf("the"));// gives the first occurence position in a string
console.log(myVariable.lastIndexOf("at")); //gives the last occurence of the string given
console.log(myVariable.slice(3,7)); //gives the new string which is in btwwn the arguments
console.log(myVariable.toUpperCase()); // retuens all upper case string
console.log(myVariable.toLowerCase()); // retuen all lowercase string
console.log(myVariable.includes("mat")); // retuens a boolean by checking the string in the ip string
console.log(myVariable.split("t")); //will split the string with a given string and retuen a array