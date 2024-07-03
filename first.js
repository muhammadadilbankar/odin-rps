function decideWinner(PlayerChoice, ComputerChoice){
    if(PlayerChoice==ComputerChoice){
        return "tie";
    }
    else if((PlayerChoice=="rock"&& ComputerChoice=="scissors") || (PlayerChoice=="paper"&& ComputerChoice==="rock")||(PlayerChoice=="scissors"&& ComputerChoice=="paper")){
        return "Player";
    }
    else{ 
        return "Computer";
    }
}
function getComputerChoice(){
   
    const choice= options[Math.floor(Math.random()* options.length)];
    return choice;
}
function PlayRound(PlayerChoice, ComputerChoice){
    const result= decideWinner(PlayerChoice, ComputerChoice);
    // let PlayerScore=0;
    // let ComputerScore=0;
    if(result=="tie"){
        return "It's a tie!";
    }
    if(result=="Player"){
        return `You win! ${PlayerChoice} beats ${ComputerChoice}`;
    }
    else{
        return `Computer wins! ${ComputerChoice} beats ${PlayerChoice}`;
    }
}
function getPlayerChoice(){
    let validInput= false;
    while(validInput== false){
        const input= prompt("Rock, paper or scissors?");
        if(input== null){
            continue;
        }
        const choiceInLower= input.toLowerCase();
        if(options.includes(choiceInLower)){
            PlayerChoice= choiceInLower;
            return PlayerChoice;
        }
    }
}
console.log("Welcome to the game!");
const options= ["rock", "papers", "scissors"];
let PlayerScore=0;
let ComputerScore=0;
for (let i = 0; i < 5; i++) {
    const PlayerInput= getPlayerChoice();
    const ComputerInput= getComputerChoice();
    
     let message= PlayRound(PlayerInput, ComputerInput);
     console.log(message);
     if(decideWinner(PlayerInput, ComputerInput)=="Player"){
        PlayerScore++;
     }
     if(decideWinner(PlayerInput, ComputerInput)=="Computer"){
        ComputerScore++;
     }
}
if(PlayerScore=== ComputerScore){
    console.log("We have a tie!");
    console.log(`You both have scored ${PlayerScore} points.`)
 }
 if(PlayerScore> ComputerScore){
    console.log("You Win!");
    console.log(`Your points: ${PlayerScore}, Computer's points:${ComputerScore}`);
 }
 else if(ComputerScore> PlayerScore){
    console.log("The Computer Wins!");
    console.log(`Computer's points:${ComputerScore}, Your points: ${PlayerScore}`);
 }
 console.log("Game Over. Thank You for playing!");