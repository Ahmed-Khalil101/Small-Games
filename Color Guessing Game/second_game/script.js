
let color;

function randomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

const arr = [];
const numbox = 6;

function generateColors(num) {
    for (let i = 0; i < num; i++) {
        randomColor();
        arr.push(color);
    }
}

generateColors(numbox);

for (let i = 0; i < numbox; i++) {
    document.querySelectorAll('.box')[i].style.backgroundColor = arr[i];
}

let secretcolor = arr[Math.floor(Math.random() * numbox)];

document.querySelector('.rgb-value').textContent = secretcolor;




document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function () {

        if (this.style.backgroundColor === secretcolor) {
            document.querySelector('.message').textContent = "Answer Correct";
            document.querySelectorAll('.box').forEach(box => {
                box.style.backgroundColor = secretcolor
            })
        }
        else {
            document.querySelector('.message').textContent = "Try Again";
            this.style.backgroundColor = "#232946";
        }
    });
});

function reset() {

    for (let i = 0; i < numbox; i++) {
        document.querySelectorAll('.box')[i].style.backgroundColor = arr[i];
    }
    secretcolor = arr[Math.floor(Math.random() * numbox)];
    document.querySelector('.message').textContent = "Pick the correct color";
}
document.querySelector('.reset').addEventListener('click', reset)











// function randomColor() {
//     const r = Math.floor(Math.random() * 256);  
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }


// function generateColors(num) {
//     const arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(randomColor());
//     }
//     return arr;
// }


// const numBoxes = 6;

// const boxes = document.querySelectorAll('.box');
// const rgbValue = document.querySelector('.rgb-value');
// const message = document.querySelector('.message');
// const resetBtn = document.querySelector('.reset');

// let colors = [];
// let correctColor = "";


// function setupGame() {
//     colors = generateColors(numBoxes);         
//     correctColor = colors[Math.floor(Math.random() * numBoxes)];    
//     rgbValue.textContent = correctColor;    

//     boxes.forEach((box, index) => {
//         box.style.backgroundColor = colors[index];
//         box.style.display = "block";           
//     });

//     message.textContent = "Pick the correct color"; 
// }


// boxes.forEach(box => {
//     box.addEventListener('click', function () {
//         const clickedColor = this.style.backgroundColor;
//         if (clickedColor === correctColor) {
//             message.textContent = "Correct!";
//             boxes.forEach(b => b.style.backgroundColor = correctColor);
//         } else {
//             message.textContent = "Try Again!";
//             this.style.backgroundColor =#232946";
//         }
//     });
// });


// resetBtn.addEventListener('click', setupGame);

// setupGame();
