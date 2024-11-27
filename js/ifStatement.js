// if statements
let customerIsBanned = false;
let soup = "Kaalan soup";
let reply;
let crackers = true;

if (customerIsBanned) {
    reply = "No Soup for you!";
} else if (soup && crackers) {
    reply =  `Here's your order ${soup} and crackers`;
} else if (soup) {
    reply = `Here's your order ${soup}`
} else {
    reply = "Sorry, We're out of soup";
}

console.log(reply);

// grading system

let collegeStudent = true;
let testScore = 39;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}

console.log(grade);

// Rock Paper Scissors game
let game = ["Rock", "Paper", "Scissors"];

let playerOne = game[(Math.floor(Math.random() * 3))];
let computer = game[(Math.floor(Math.random() * 3))];
console.log(playerOne);
console.log(computer);

if (playerOne === computer) {
    result = "Match Tie";
} else if(playerOne === "Rock") {
    if (computer === "Paper") {
        result = "Computer Wins!";
    } else {
        result = "PlyerOne Wins!";
    }
} else if (playerOne === "Paper") {
    if (computer === "Scissors") {
        result = "Computer Wins!";
    } else {
        result = "PlyerOne Wins!";
    }
} else if (playerOne === "Scissors") {
    if (computer === "Rock") {
        result = "Computer Wins!";
    } else {
        result = "PlyerOne Wins!";
    }
}

console.log(result);