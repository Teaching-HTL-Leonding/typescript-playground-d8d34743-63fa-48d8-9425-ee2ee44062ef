grid = 10;

function setup() {
    createCanvas(601, 301);
        background("black");

            fill("aqua");
                noStroke();

                    textSize(50);
                        textAlign(CENTER, CENTER);
                            text("Move the mouse to start", 0, 0, width, height);
                            }




                            function mouseMoved() {
                                resetMatrix();
                                    background("black");
                                        strokeWeight(2);
                                            noFill();
                                                stroke("aqua");
                                                    let u = 10;
                                                        // <<< Add your code here
                                                            for (let y = 0; y < height; y += u) {

                                                                    for (let x = 0; x < width; x += u) {
                                                                                push();
                                                                                            translate(x, y);
                                                                                                        line(0, 0, u, u / 2);
                                                                                                                    line(u, u / 2, 0, u);
                                                                                                                                pop()
                                                                                                                                        }

                                                                                                                                            }
                                                                                                                                            }
                                                                                                                                            
}
