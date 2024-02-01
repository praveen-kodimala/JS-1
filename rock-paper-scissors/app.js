let userScore = 0;
let compScore = 0;
const userCount = document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const generateCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
}
const drawGame = () => {
    console.log("Game was a draw!");
    msg.innerText = "Game was a draw! Play again. "
    msg.style.backgroundColor = "blue";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You won");
        msg.style.backgroundColor = "green";
        userScore++;
        userCount.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        console.log("You lose");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compCount.innerText = compScore;

    }
}

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = generateCompChoice();
    console.log("comp choice is ", compChoice);
    
    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }else{
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
                //rock, scissors
            userWin = compChoice === "scissors"? false: true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

    

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("user choice is ", userChoice);
        playGame(userChoice);
    })
})