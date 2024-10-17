function setup() {
    createCanvas(400, 250);
    colorMode(HSB);
    background(0);

    rect(0, 0, width, height / 2);
    rect(0, height / 2, width, height / 2);
}

let color_hue = 0;

function mouseMoved() {
    fill(color_hue, 100, 100);
    rect(0, 0, width, height / 2);

    color_hue = (color_hue + 5) % 360;
}

function mouseClicked() {
    rect(0, height / 2, width, height / 2);

    let currentColor = color(color_hue, 100, 100);
    let h = hue(currentColor);
    let s = saturation(currentColor);
    let b = brightness(currentColor);
   
    fill("black");
    text(`H: ${h}, S: ${s}, B: ${b}`, 20, 245);
}