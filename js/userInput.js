// user input

//alert pop
alert("Hello World");

// confirm pop
const myBoolean = confirm("Ok === true\nCancel === false");
console.log(myBoolean);


// prompt pop to type the value
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