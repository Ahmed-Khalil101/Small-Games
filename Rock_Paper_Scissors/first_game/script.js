"use strict";

let your_score = 0;
let computer_score = 0;
const arr = ['rock', 'paper', 'scissors'];  
let user_choice;
let comp ;
let round = 5;
document.querySelectorAll('.choice').forEach(btn => {
    btn.addEventListener('click', function () {
        user_choice = this.dataset.choice;
        playGame(user_choice);
    }); 
   
});
function playGame(user_choice) {
    comp = Math.floor(Math.random() * 3);
    if (round > 0) {
        if (user_choice === arr[comp]) {
            document.querySelector('.winner').textContent = "Result: It is a tie!";
            document.querySelector('.player-choice').textContent = `player choise: ${user_choice}`;
            document.querySelector('.computer-choice').textContent = arr[comp];
     
        }
        else if ((user_choice === 'rock' && arr[comp] === 'scissors') ||
            (user_choice === 'paper' && arr[comp] === 'rock') ||
            (user_choice === 'scissors' && arr[comp] === 'paper')) {
            your_score += 1;
            document.querySelector('.winner').textContent = "Result: You win!";
            document.querySelector('.player-score').textContent = ` ${your_score}`;
            document.querySelector('.computer-score').textContent = ` ${computer_score}`;
            document.querySelector('.player-choice').textContent = `player choise: ${user_choice}`;
            document.querySelector('.computer-choice').textContent = ` computer choise: ${arr[comp]}`;
        }
        else {
            console.log("USER:", user_choice, " | COMP:", arr[comp]);
            computer_score += 1;
            document.querySelector('.winner').textContent = "Result: You lose!";
            document.querySelector('.computer-score').textContent = ` ${computer_score}`;
            document.querySelector('.player-score').textContent = ` ${your_score}`;
            document.querySelector('.player-choice').textContent = `player choise: ${user_choice}`;
            document.querySelector('.computer-choice').textContent =` computer choise: ${arr[comp]}`;
        }
        round -= 1;
        document.querySelector('.round').textContent = `Round: ${round}`;

    }
}

function resetGame() {
    document.querySelector('.winner').textContent = "Result: -";
    document.querySelector('.computer-score').textContent = 0;
    document.querySelector('.player-score').textContent = 0;
    document.querySelector('.player-choice').textContent = 'player choise:-';
    document.querySelector('.computer-choice').textContent = 'computer choise:-';
    round = 5;
    document.querySelector('.round').textContent = `Round: ${round}`;
}

document.querySelector('.reset').addEventListener('click', resetGame);





// let your_score = 0;
// let computer_score = 0;
// let rounds = 3;

// const choices = ["rock", "paper", "scissors"];

// // دالة للتحقق من فوز اللاعب
// function playerWins(player, computer) {
//     return (player === "rock" && computer === "scissors") ||
//         (player === "paper" && computer === "rock") ||
//         (player === "scissors" && computer === "paper");
// }

// // تحديث الواجهة
// function updateDisplay(playerChoice = "-", compChoice = "-", winnerText = "-") {
//     document.querySelector('.player-choice').textContent = playerChoice;
//     document.querySelector('.computer-choice').textContent = compChoice;
//     document.querySelector('.winner').textContent = winnerText;
//     document.querySelector('.your-score').textContent = your_score;
//     document.querySelector('.computer-score').textContent = computer_score;
//     document.querySelector('.round').textContent = rounds;
// }

// // تعطيل / تفعيل أزرار الاختيار
// function setChoicesDisabled(state) {
//     document.querySelectorAll('.choice').forEach(b => b.disabled = state);
// }

// // الحدث عند الضغط على زر اختيار
// document.querySelectorAll('.choice').forEach(btn => {
//     btn.addEventListener('click', function () {
//         if (rounds <= 0) return;

//         const playerChoice = this.dataset.choice;
//         const computerChoice = choices[Math.floor(Math.random() * choices.length)];

//         let winnerText;

//         if (playerChoice === computerChoice) {
//             winnerText = "It is a tie!";
//         } else if (playerWins(playerChoice, computerChoice)) {
//             winnerText = "You win!";
//             your_score++;
//         } else {
//             winnerText = "You lose!";
//             computer_score++;
//         }

//         rounds--;
//         updateDisplay(playerChoice, computerChoice, winnerText);

//         if (rounds <= 0) {
//             setChoicesDisabled(true);
//             alert(`Game over!\nFinal Score — You: ${your_score} Computer: ${computer_score}`);
//         }
//     });
// });

// // زر الريسيت
// document.querySelector('.reset').addEventListener('click', function () {
//     your_score = 0;
//     computer_score = 0;
//     rounds = 3;
//     updateDisplay("-", "-", "-");
//     setChoicesDisabled(false);
// });
