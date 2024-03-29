function getComputerChoice(){
    const choice= Array("rock", "paper", "scissors");
    let compChoice= choice[Math.floor(Math.random()*choice.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    let result='';
    if( computerSelection === playerSelection){
        result = "Its a tie mane.";
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        result = "you won my man";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        result = "you won my man";    
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        result = "you won my man";
    }
    else{
        result= "You lost womp womp."
    }
    return result;
  }

  function gottaChoose(){
    choice = prompt("choose rock paper scissors.");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
    return choice;
    }
    else {
        alert("pick one of the above"); 
        gottaChoose();
    }
  }
  function playGame(){
    let newString='';
    let playerSelection='';
    let computerSelection='';
    let result='';

    for (let i = 0; i < 5; i++) {
        computerSelection=getComputerChoice();
        playerSelection=gottaChoose();
        result= playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(computerSelection);


    }
    return newString;
  }

playGame();
