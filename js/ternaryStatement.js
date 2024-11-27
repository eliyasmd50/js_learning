// Ternary Operator

// Syntax
// condition ? if true : if False

let soup = "kaalan Soup";

let respose  = soup ? "Yes we have soup." : "Sorry, No soup today.";
console.log(respose);


// chain ternary statement

// let soup = "Kaalan Soup";
let isCoustomerBanner = false;

let response = isCoustomerBanner ? "No Soup for you!" : soup ? `yes We have a ${soup} for you` : "Sorry soup out of today!";
console.log(response);

// test score example for ternary operator

let testScore = Math.floor(Math.random() * 100) + 1;
console.log(testScore);

let grade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : "F";
console.log(grade);

//rock papper scissors
let game = ["Rock", "Paper", "Scissors"];

let playerOne = game[(Math.floor(Math.random() * 3))];
let computer = game[(Math.floor(Math.random() * 3))];
console.log(playerOne);
console.log(computer);

let winner = playerOne === computer ? "Match Tie" 
            : playerOne === "Rock" && computer === "Paper" ? "computer Wins!" 
            : playerOne === "Paper" && computer === "Scissors" ? "computer Wins!"
            : playerOne === "Scissors" && computer === "Rock" ? "computer Wins!"
            : "Player Wins!";
console.log(winner);