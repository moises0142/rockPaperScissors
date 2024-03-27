console.log("yomeme");

function getComputerChoice(){
    const choice= Array("rock", "paper", "scissors");
    let compChoice= choice[Math.floor(Math.random()*choice.length)];
    return compChoice;
}
let compChoice = getComputerChoice();
console.log(compChoice)