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
        humanScore++;
        return (`You Win! ${humanChoice} Beats ${computerChoice}`);
        
    }
    else if((humanChoice === "rock" && computerChoice == "paper") || (humanChoice === "scissors" && computerChoice == "rock")
        || (humanChoice === "paper" && computerChoice == "scissors")){
        computerScore++;
        return(`You Lose! ${computerChoice} Beats ${humanChoice}`);
    }
    
    else if(humanChoice === computerChoice){
        return("The game is draw! No point is given to you or the computer!")
    }

    else {
        return("You gave an Invalid Input")
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

/*
Button functions
On click
clear the contents display-result
add a empty div upside
add rock paper or scissors image onto the display result
call the computer function and store it in a variable
get the users input and store it in a variable
pass the variables playRound 
and change the text content of the div which was empty 
add the scores to the human and computer display
check if someone has won
*/

const playerScore = document.querySelector(".player-score");
const computersScore = document.querySelector(".computer-score");

const displayResult = document.querySelector(".display-result");

const rock = document.querySelector('.rock #human');
const paper = document.querySelector('.paper #human');
const scissors = document.querySelector('.scissor #human');

choiceButtons = [rock,paper,scissors];

for(let choiceIndex in choiceButtons) {
    choiceButtons[choiceIndex].addEventListener('click',(event) => {
        const childNodes = displayResult.childNodes;

        while (childNodes.length) {
            divElement.removeChild(childNodes[0]);
        }

        userChoice = choiceButtons[choiceIndex].textContent.toLowerCase();
        computerChoice = getComputerChoice(computerChoices);

        const emptyDiv = document.createElement("div");
        const imageDiv = document.createElement("div");
        const humanChoiceImage = document.createElement("img");
        const computerChoiceImage = document.createElement("img");

        displayResult.style.display = 'flex';
        displayResult.style.flexDirection = 'column';
        displayResult.style.justifyContent = 'space-evenly';
        displayResult.style.alignItems = 'center';
        
        
        emptyDiv.style.display = 'flex';
        emptyDiv.style.flexDirection = 'row';
        emptyDiv.style.justifyContent = 'center';
        emptyDiv.style.alignItems = 'center';

        imageDiv.style.display = 'flex';
        imageDiv.style.flexDirection = 'row';
        imageDiv.style.justifyContent = 'space-between';
        imageDiv.style.alignItems = 'center';

        humanChoiceImage.setAttribute('src', `${userChoice}.png`);
        humanChoiceImage.setAttribute('width', '100');
        humanChoiceImage.setAttribute('height', '100');

        computerChoiceImage.setAttribute('src', `${computerChoice}.png`);
        computerChoiceImage.setAttribute('width', '100');
        computerChoiceImage.setAttribute('height', '100');

        imageDiv.appendChild(humanChoiceImage);
        imageDiv.appendChild(computerChoiceImage);

        emptyDiv.textContent = playRound(userChoice,computerChoice);

        displayResult.appendChild(emptyDiv);
        displayResult.appendChild(imageDiv);

        playerScore.textContent = String(humanScore);
        computersScore.textContent = String(computerScore);



        }
    )
}