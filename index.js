function getComputerChoice(computerChoices) {
    const randomNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNumber];
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
function playAgain(){
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";
    playAgain.style.padding = '10px';
    playAgain.addEventListener('click', () => {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        const childNodes = displayResult.childNodes;

        while (childNodes.length) {
            displayResult.removeChild(childNodes[0]);
        }
        const welcomeMessage = document.createElement("div");
        welcomeMessage.textContent = "Let's Play! Click on an option to start!";
        welcomeMessage.style.fontSize = '22px';
        displayResult.appendChild(welcomeMessage);
        humanScore = 0;
        computerScore = 0;
        playerScore.textContent = String(humanScore);
        computersScore.textContent = String(computerScore);
    }
    )
    displayResult.appendChild(playAgain);
}
function checkWinner(){    
    
    if (humanScore === 5) {
        const childNodes = displayResult.childNodes;

        while (childNodes.length) {
            displayResult.removeChild(childNodes[0]);
        }
        displayResult.style.fontSize = "46px";
        displayResult.style.textAlign = 'center';
        displayResult.textContent = 'You Won!!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        playAgain();
    }

    else if (computerScore === 5) {
        const childNodes = displayResult.childNodes;

        while (childNodes.length) {
            displayResult.removeChild(childNodes[0]);
        }
        displayResult.style.fontSize = "46px";
        displayResult.style.textAlign = 'center';
        displayResult.textContent = 'You lost!!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        playAgain();
    }

    else {}
}

let humanScore = 0;
let computerScore = 0;
let computerChoices = ["rock","paper","scissors"];


const playerScore = document.querySelector(".player-score");
const computersScore = document.querySelector(".computer-score");

const displayResult = document.querySelector(".display-result");

const rock = document.querySelector('.Rock#human');
const paper = document.querySelector('.Paper#human');
const scissors = document.querySelector('.Scissors#human');

choiceButtons = [rock,paper,scissors];

for(let choiceIndex in choiceButtons) {
    choiceButtons[choiceIndex].addEventListener('click',(event) => {
        const childNodes = displayResult.childNodes;

        while (childNodes.length) {
            displayResult.removeChild(childNodes[0]);
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
        emptyDiv.style.fontSize = '22px';
        emptyDiv.style.textAlign = 'center';

        imageDiv.style.display = 'flex';
        imageDiv.style.flexDirection = 'row';
        imageDiv.style.justifyContent = 'space-between';
        imageDiv.style.alignItems = 'center';
        imageDiv.style.gap = '66px';

        humanChoiceImage.setAttribute('src', `${userChoice}.png`);
        humanChoiceImage.setAttribute('width', '200');
        humanChoiceImage.setAttribute('height', '200');

        computerChoiceImage.setAttribute('src', `${computerChoice}.png`);
        computerChoiceImage.setAttribute('width', '200');
        computerChoiceImage.setAttribute('height', '200');

        imageDiv.appendChild(humanChoiceImage);
        imageDiv.appendChild(computerChoiceImage);

        emptyDiv.textContent = playRound(userChoice,computerChoice);
             

        displayResult.appendChild(emptyDiv);
        displayResult.appendChild(imageDiv);

        playerScore.textContent = String(humanScore);
        computersScore.textContent = String(computerScore);


        checkWinner();


        }
    )
}