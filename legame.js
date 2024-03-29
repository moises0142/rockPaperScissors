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
    return result;
  }

  function gottaChoose(){
    choice = prompt("choose rock paper scissors.");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
    return choice;
    }
    else {
        alert("Gotta choose one of the choices 下さい");
        gottaChoose();
    }
  }
  function playGame(){
    let newString='';
    let playerSelection='';
    let computerSelection='';
    let result='';
    let losses=0;
    let wins=0;
    let tied=0;
    for (let i = 0; i < 5; i++) {
        computerSelection=getComputerChoice();
        playerSelection=gottaChoose();
        result= playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(computerSelection);
        if(result==="You win"){
            wins++;
        }
        else if(result==="You lose"){
            losses++;
        }
        else{
            tied++;
        }


    }
    return [wins, losses, tied];
  }

let [x,y,z]=playGame();
console.log('Wins:',x,' Losses:', y, ' Tied:', z);
if (x>y){
    console.lot("You have won")
}
else{
    console.log("You loss womp womp.")
}
