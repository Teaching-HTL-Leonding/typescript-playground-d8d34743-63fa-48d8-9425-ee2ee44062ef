// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randomOperand1 = 0
let randomOperand2 = 0

let randomOperator = 0
let operator = ''

let ergebnis =
    let randomPosition =

        let wrongAnswer1 =
        let wrongAnswer2 =

        // setup function runs once and sets up the quiz elements on the canvas
        function setup() {
            randomOperand1 = Math.floor(random(1 - 101))
            randomOperand2 = Math.floor(random(1 - 101))

            randomOperator = Math.floor(random(0, 3))
            if (randomOperator = 0) {
                operator = '+'
                ergebnis = randomOperand1 + randomOperand2

            }




            createCanvas(400, 400);
            background("black");

            fill("yellow")
            textSize(70)
            text(randomOperand1, width / 4, 100)
            text(randomOperand2, width / 2, 100)



        }

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    // <<< TODO: Add your code here
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
