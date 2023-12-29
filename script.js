let userCount1 = 0;
let compCount1 = 0;
let choices = document.querySelectorAll(".choice");
let userCount = document.querySelector(".count1");
let compCount = document.querySelector(".count2");
let msg = document.querySelector(".msg1");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id");
        // console.log("click");
        // console.log(choiceID);
        palyGame(choiceID);
        
    });
});

const drawGame = ()=>{
    msg.innerText = "Game was draw. Play gain!"
    msg.style.backgroundColor  = "#081b31";
}


const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userCount1++;
        userCount.innerText = userCount1;
         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
    }else{
        compCount1++;
        compCount.innerText = compCount1; 
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const palyGame =  (choiceID)=>{
    console.log("user:",choiceID);
    const compChoiceId = ganCompChoice();
    console.log("comp:",compChoiceId);
    if(choiceID === compChoiceId){
        // console.log("draw")
        drawGame();
    }else{
        let userWin = true;
        if(choiceID === "rock"){
            userWin = compChoiceId === "paper" ? false : true;
        }else if(choiceID === "paper"){
            userWin = compChoiceId === "scissors" ? false : true;
        }else{
            userWin = compChoiceId === "rock" ? false : true; 
        }
        // console.log(userWin,choiceID,compChoiceId);
       showWinner(userWin,choiceID,compChoiceId);
    }
}

const ganCompChoice = () => {
    let compChoice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let randomChoice = compChoice[randomIndex];
    // console.log(randomChoice); // Log the computer's choice
    return randomChoice;
};