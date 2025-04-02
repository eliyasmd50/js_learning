// user input

//alert pop
// this dosen't have a return type
alert("Hello World");

// confirm pop
// It has a return type as boolean
const myBoolean = confirm("Ok === true\nCancel === false");
console.log(myBoolean);


// prompt pop to type the value
// It will allow to Enter the text
const myName = prompt("Enter your name.");
console.log(myName);// return the name is entered
console.log(myName ?? "You DiDn't Enter your name.");// to check or backup if the name is entered or not (?? it is nullish coalscian operator)

// to check if the input is null or not given anything
if (myName) {
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());// to trim out the white space in a string before or after
} else {
    console.log("you didn't enter your name");
}