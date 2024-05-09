function getComputerChoice(computerChoices) {
    const randomNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNumber];
}

function getHumanChoice(computerChoices) {
    validChoice = false;
    
    while(!validChoice){
        var humanChoice = prompt("Enter your choice: ");
        humanChoice = humanChoice.trim().toLowerCase();
        if (computerChoices.includes(humanChoice) === true){
            validChoice = true;
        }
        else{
            console.log("You entered an Invalid Input!\nPlease enter an valid one!")
        }

    }
    return humanChoice;
}

function playRound(humanChoice,computerChoice) {
    if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "scissors" && computerChoice == "paper")
    || (humanChoice === "paper" && computerChoice == "rock")){
        console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
    }
    else if((humanChoice === "rock" && computerChoice == "paper") || (humanChoice === "scissors" && computerChoice == "rock")
        || (humanChoice === "paper" && computerChoice == "scissors")){
        console.log(`You Lose! ${computerChoice} Beats ${humanChoice}`);
        computerScore++;
    }
    
    else if(humanChoice === computerChoice){
        console.log("The game is draw! No point is given to you or the computer!")
    }

    else {
        console.log("You gave an Invalid Input")
    }

}

function playGame(computerChoices){    
    let gamesPlayed = 5;
    
    while(gamesPlayed > 0){
        const humanSelection = getHumanChoice(computerChoices);
        const computerSelection = getComputerChoice(computerChoices);
        playRound(humanSelection, computerSelection);
        gamesPlayed--;
    }
    
    if (humanScore > computerScore) {
        console.log(`You won with ${humanScore} Points`);
    }

    else if (computerScore > humanScore) {
        console.log(`You lost with ${humanScore} Points while the computer got ${computerScore}`)
    }

    else {
        console.log("The game is a Draw! No One Won")
    }
}

let humanScore = 0;
let computerScore = 0;
let computerChoices = ["rock","paper","scissors"]
