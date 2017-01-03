function setup() {
  createCanvas(800, 800);
  background(85);
}

function draw() {
  if (mouseIsPressed) {
  	stroke(255);
  	strokeWeight(5);
  	line(mouseX, mouseY, pmouseX, pmouseY)
  }
}
