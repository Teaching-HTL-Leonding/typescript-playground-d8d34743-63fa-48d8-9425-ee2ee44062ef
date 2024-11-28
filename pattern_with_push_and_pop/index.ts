function setup() {
    const SIZE = 400;
    const CIRCLE_DIAMETER = 50;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(3);
    stroke("yellow");
    noFill();

    for (let Y = 0; Y <= SIZE; Y += CIRCLE_DIAMETER) {
        // Save the current origin (left-most position in the current row)
        push();
        for (let X = 0; X <= SIZE; X += CIRCLE_DIAMETER) {
            circle(0, 0, CIRCLE_DIAMETER);
            translate(CIRCLE_DIAMETER, 0); // Move origin to the right
        }

        // Restore the stored origin -> back to left-most position in the current row
        pop();

        // Move one row down
        translate(0, CIRCLE_DIAMETER);
    }
}
