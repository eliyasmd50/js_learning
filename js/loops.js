// while loops in js
let num = 0;
while(num < 10) {
    num++;
    console.log(num);
}

// do while loop 
// this will execute the block of code atleast once even if the cindition is failed
let num1 = 20;
do {
    console.log(num1);
} while(num1 < 10);

// for loop
let name_ = "Eliyas";
for (let i = 0; i< name_.length; i++) {
    console.log(name_.charAt(i));
}

// while loop with the break statement 
let counter = 0;
let myLetter;
while(true) {
    myLetter = name_[counter];
    console.log(myLetter);
    if(counter === 1) {
        counter += 2;
        continue; // it will look for the condition before exceuting the rest of the loop
    }
    if(myLetter === 'y') break; // it will break the loop 
    counter++;
}
console.log(counter);