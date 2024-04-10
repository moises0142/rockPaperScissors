function getComputerChoice(){
    const choice= Array("rock", "paper", "scissors");
    let compChoice= choice[Math.floor(Math.random()*choice.length)];
    
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    let result='';
    if( computerSelection === playerSelection){
        result = "It's tie";
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        result = "You win";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        result = "You win";    
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        result = "You win";
    }
    else{
        result= "You lose"
    }
    console.log(result);
    return result;
    
}
let playerSelection;

const rockButton = document.querySelector("#Rock");
rockButton.addEventListener("click", () => {
    playerSelection="rock";
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
})

const paperButton = document.querySelector("#Paper");
paperButton.addEventListener("click", () => {
    paperSelection="paper";
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);

})

const scissorsButton = document.querySelector("#Scissors");
scissorsButton.addEventListener("click", () =>{
    playerSelection="scissors";
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
})



