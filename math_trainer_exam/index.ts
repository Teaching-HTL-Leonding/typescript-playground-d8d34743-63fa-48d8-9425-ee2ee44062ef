// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randomOperand = 0
let randomOperand2 = 0

let randomOperator = 0
let operator = ''

let ergebnis = 0
let randomPosition = 0

let wrongAnswer1 = 0
let wrongAnswer2 = 0

// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    // RS: Responsive design implement, but does not fully work -> 2 points
    createCanvas(400, 600);
    background("black");
    randomOperand = Math.floor(random(1, 101)) // RS: Solved first minimum requirement
    randomOperand2 = Math.floor(random(1, 101))

    wrongAnswer1 = Math.floor(random(-100, 500))
    wrongAnswer2 = Math.floor(random(100, 700))

    randomOperator = Math.floor(random(0, 3))
    // RS: Solved second minimum requirement with if
    if (randomOperator === 0) {
        operator = '+'
        ergebnis = randomOperand + randomOperand2
    } else if (randomOperator === 1) {
        operator = '-'
        ergebnis = randomOperand - randomOperand2
    }
    else {
        operator = '*'
        ergebnis = randomOperand * randomOperand2
    }

    fill("yellow")
    textSize(50)
    text(randomOperand, width / 4, 100)
    text(randomOperand2, 2.4 * width / 4, 100)
    text(operator, width / 2.15, 100)



    randomPosition = Math.floor(random(0, 3))
    if (randomPosition === 0) {
        text(ergebnis, 30, height / 1.8)
        text(wrongAnswer1, 150, height / 1.8)
        text(wrongAnswer2, 2 * width / 3, height / 1.8)
    }
    else if (randomPosition === 1) {
        text(wrongAnswer1, 30, height / 1.8)
        text(ergebnis, 150, height / 1.8)
        text(wrongAnswer2, 2 * width / 3, height / 1.8)
    }
    else {
        text(wrongAnswer2, 30, height / 1.8)
        text(wrongAnswer1, 150, height / 1.8)
        text(ergebnis, 2 * width / 3, height / 1.8)
    }


    // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    fill("black")
    rect(0, 245, width, height / 2.1)

    // RS: This code could be simplified (see sample solution)
    if (mouseX < width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 0) {
        textSize(45)
        fill("green")
        text(`${ergebnis} ist richtig`, 50, height - 60)
    }
    else if (mouseX > width / 3 && mouseX < 2 * width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 0) {
        fill("red")
        textSize(45)
        text(`${wrongAnswer1} ist falsch`, 50, height - 60)
    } else if (mouseX > 2 * width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 0) {
        fill("red")
        textSize(45)
        text(`${wrongAnswer2} ist falsch`, 50, height - 60)
    }

    if (mouseX < width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 1) {
        textSize(45)
        fill("red")
        text(`${wrongAnswer1} ist falsch`, 50, height - 60)
    }
    else if (mouseX > width / 3 && mouseX < 2 * width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 1) {
        fill("green")
        textSize(45)
        text(`${ergebnis} ist richtig`, 50, height - 60)
    } else if (mouseX > 2 * width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 1) {
        fill("red")
        textSize(45)
        text(`${wrongAnswer2} ist falsch`, 50, height - 60)
    }

    if (mouseX < width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 2) {
        textSize(45)
        fill("red")
        text(`${wrongAnswer2} ist falsch`, 50, height - 60)
    }
    else if (mouseX > width / 3 && mouseX < 2 * width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 2) {
        fill("red")
        textSize(45)
        text(`${wrongAnswer1} ist falsch`, 50, height - 60)
    } else if (mouseX > 2 * width / 3 && mouseY > 150 && mouseY < 250 && randomPosition === 2) {
        fill("green")
        textSize(45)
        text(`${ergebnis} ist richtig`, 50, height - 60)
    }
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
