function setup() {
  const SIZE = 400;
  const CIRCLE_DIAMETER = 50;

  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(3);
  stroke("yellow");
  noFill();

  // Draw a circle at 0/0
    circle(0, 0, CIRCLE_DIAMETER);
    for (let Y = 0; Y <= SIZE; Y += CIRCLE_DIAMETER) {
    translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER)
    circle(0, 0, CIRCLE_DIAMETER);
    }
}


  // Task: Uncomment the following lines of code step-by-step
  //       to find out how translate works.

  // We want to draw a circle at 50/0. However, we do NOT
  // change the x and y coordinates. Instead, we move the
  // origin point of our coordinate system.
  //translate(CIRCLE_DIAMETER, 0);

  // Because we moved the origin, the circle appears on a 
  // different location although the parameters of the
  // method call are the same as above.
  //circle(0, 0, CIRCLE_DIAMETER);

  // If you call translate again, the origin is moved
  // RELATIVE to the previous translation.
  //translate(CIRCLE_DIAMETER, 0);
  //circle(0, 0, CIRCLE_DIAMETER);

  // We can move the next circle down
  //translate(0, CIRCLE_DIAMETER);
  //circle(0, 0, CIRCLE_DIAMETER);

  // We can also move the origin to the left or up by
  // specifying a negative value in the translate call.
  //translate(-CIRCLE_DIAMETER, 0);
  //circle(0, 0, CIRCLE_DIAMETER);

  // You can use `resetMatrix` to reset the origin
  // back to the left-upper corner.
  //stroke("red");
  //resetMatrix();
  //circle(0, 0, CIRCLE_DIAMETER);
}
