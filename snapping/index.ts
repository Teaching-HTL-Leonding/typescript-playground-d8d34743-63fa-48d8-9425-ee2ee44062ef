function setup() {
  createCanvas(400, 400);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");
  
  stroke("white")
  strokeWeight(7)
  line(mouseX, mouseY -20, mouseX, mouseY + 20)
  line(mouseX - 20, mouseY, mouseX + 20, mouseY)

  text("asdf", 10, height - 10)
  
}
