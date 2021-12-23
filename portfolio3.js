let ranges = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  background('#B3C9E0');
  noFill(0);
  strokeWeight(1);
  
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 40;
  drawingContext.shadowColor = '#162D7B';

  for (let i = 0; i < ranges; i++) {
    paint = map(i, 0, ranges, 0, 100);
    stroke('#2295FF');

    beginShape();
    for (let x = -10; x < width + 11; x += 5) {
      n = noise(x * 0.001, i * 0.009, frameCount * 0.003);
      y = map(n, 0, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  }
  
  for (let i = 0; i < ranges; i++) {
    paint = map(i, 0, ranges, 0, 100);
    stroke(0,10);

    beginShape();
    for (let x = -10; x < width + 11; x += 5) {
      n = noise(x * 0.001, i * 0.009, frameCount * 0.003);
      y = map(n, 0, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  }
}
