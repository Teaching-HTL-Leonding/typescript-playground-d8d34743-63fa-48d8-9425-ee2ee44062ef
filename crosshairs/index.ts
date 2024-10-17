function setup() {
  createCanvas(400, 400);
}

function mouseMoved() {
  background("lightblue");

  strokeWeight(3)
  noFill()
  circle(mouseX, mouseY, 30)

  circle(mouseX, mouseY, 70)

  line(mouseX, mouseY - 50, mouseX, mouseY + 50)

  line(mouseX - 50, mouseY, mouseX + 50, mouseY)


  // Add your code here
}
