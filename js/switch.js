// Switch statements it checks for the strictly for the datatypes

switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
        console.log(1);
    break;
    case 2:
        console.log(2);
    break;
    case 3:
        console.log(3);
    break;
    default:
        console.log("no match");
    break;
}


// Rock Paper Scissors
let game = ["Rock", "Paper", "Scissors"];

let playerOne = game[(Math.floor(Math.random() * 3))];
let computer = game[(Math.floor(Math.random() * 3))];
console.log(playerOne);
console.log(computer);

switch(playerOne) {
    case computer:
        console.log("Draw Match");
    break;
    case "Rock":
        if(computer === "Paper") {
            console.log("computer Wins!");
        } else {
            console.log("Player One Wins!");
        }
    break;
    case "Paper":
        if(computer === "Scissors") {
            console.log("computer Wins!");
        } else {
            console.log("Player One Wins!");
        }
    break;
    default: 
        if(computer === "Rock") {
            console.log("computer Wins!");
        } else {
            console.log("Player One Wins!");
        }
    break;
}