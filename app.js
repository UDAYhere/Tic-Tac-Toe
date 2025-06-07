let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector(".winner");
let newgame = document.querySelector(".newgame");
let turn = true;
let count = 0;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let displaywinner = (val) => {
  winner.innerText = `Winner of the game is ${val}`;
  for (let box of boxes) {
    box.disabled = true;
  }
  winner.classList.remove("hide");
  newgame.classList.remove("hide");
  count = 0;
};
let draw = () => {
  winner.innerText = `No one is winner macth is draw`;
  for (let box of boxes) {
    box.disabled = true;
  }
  winner.classList.remove("hide");
  newgame.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log(`winner is ${posVal1}`);
        displaywinner(posVal1);
        count = 0;
      }
    }
  }
};

boxes.forEach((box) => {     
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
      box.style.color = "#401F3E";
    } else {
      box.innerText = "X";
      turn = true;
      box.style.color = "#faf2a1";
    }
    box.disabled = true;
    let winner = checkWinner();
    count++;
    if (count == 9) {
      draw();
    }
  });
});

reset.addEventListener("click", () => {
  for (let b of boxes) {
    b.disabled = false;
    b.innerText = "";
    turn = true;
  }
  winner.classList.add("hide");
  newgame.classList.add("hide");
  count = 0;
});
newgame.addEventListener("click", () => {
  for (let b of boxes) {
    b.disabled = false;
    b.innerText = "";
    turn = true;
  }
  winner.classList.add("hide");
  newgame.classList.add("hide");
  count = 0;
});
