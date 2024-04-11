function getComputerChoice(){
    const choice= Array("rock", "paper", "scissors");
    let compChoice= choice[Math.floor(Math.random()*choice.length)];
    
    return compChoice;
}

function playRound() {
    let result='';
    let computerSelection=getComputerChoice();
    let wins=0;
    let losses=0;
    let tied=0;
    if( computerSelection === playerSelection){
        result = "It's tie";
        tied++;

    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        result = "You win";
        wins++;
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        result = "You win";  
        wins++;
  
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        result = "You win";
        wins++;

    }
    else{
        result= "You lose"
        losses++;

    }
    
    
    return [wins, losses, tied];
    
}

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const container = document.querySelector("#div1");
const container2 = document.querySelector("#div2");
const container3 = document.querySelector("#div3");
const winLossContainer = document.querySelector("#winLoss")

let wins = document.createElement("div");
let loss = document.createElement("div");
let tie = document.createElement("div");
let winOrLose = document.createElement("div")

rockButton.addEventListener("click", () => {
    playerSelection="rock";
    playGame();
})

paperButton.addEventListener("click", () => {
    playerSelection="paper";
    playGame();
})

scissorsButton.addEventListener("click", () =>{
    playerSelection="scissors";
    playGame();
})

function playGame(){

    let [win,losses,tied]= playRound();


    wins.textContent= +wins.textContent +win;
    loss.textContent= +loss.textContent +losses;
    tie.textContent=  +tie.textContent +tied;

    if(wins.textContent>=5){
        winOrLose.textContent="you win";
        winLossContainer.appendChild(winOrLose);
    }
    if(loss.textContent>=5){
        winOrLose.textContent="you lose";
        winLossContainer.appendChild(winOrLose);
    }

    container.appendChild(wins);
    container2.appendChild(loss);
    container3.appendChild(tie);

}