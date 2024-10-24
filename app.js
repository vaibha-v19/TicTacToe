let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turnO = true;

const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        box.disabled = true;
        checkWin();
    });
});

function checkWin() {
    for (let pattern of winPat) {
        const [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            alert(`Player ${boxes[a].innerText} wins!`);
            disableAllBoxes();
            return;
        }
    }

    if (Array.from(boxes).every(box => box.disabled)) {
        alert("It's a draw!");
    }
}

function disableAllBoxes() {
    boxes.forEach(box => (box.disabled = true));
}

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});
