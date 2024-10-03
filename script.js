let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".photoes");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const restart = document.querySelector("#restart");

const getcompChoice = () => {
    const option = ["Rock","Paper","Scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore.innerText = userScore;
    }else{
        compScore++;
        msg.innerText = `You lose! ${compChoice} beat your${userChoice}`;
        msg.style.backgroundColor = "red";
        compscore.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = getcompChoice();   
    if(userChoice==compChoice){
        msg.innerText = "Game was Draw.Play again!";
        msg.style.backgroundColor = "#ff004f";
        // alert("Match was Draw.....");
    }else{
        let userWin = true;
        // when user chosse rock...................
        if(userChoice==="Rock"){
            userWin = compChoice==="Paper"?false:true;
        }
        // when user chosse paper.............
        else if(userChoice=="Paper"){
            userWin = compChoice==="Scissors"?false:true;
        }
        // when user chosse scissors.............
        else if(userChoice==="Scissors"){
            userWin = compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

restart.addEventListener("click",() => {
    userScore = 0;
    compScore = 0;
    userscore.innerText = userScore;
    compscore.innerText = compScore;
    msg.innerText = "Pick your move";

    msg.style.backgroundColor = "black";
})


