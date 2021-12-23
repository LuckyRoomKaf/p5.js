function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
  background(0);
  for (var y = 0; y <= 800; y = y + 400) {
    for (var x = 0; x <= 800; x = x + 400) {
      noFill();
      stroke(255, 0, 255);
      rotateX(-frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(200, 200, 200);
    }
  }
}
