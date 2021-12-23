function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(0);
  
  var maxX = (float)(180/width)*mouseX;
  var maxY = (float)(180/height)*mouseY;

  translate(width/2, height/2);
  for (var i = 0; i < 360; i+=2) {
    var x = sin(radians(i)) * maxX;
    var y = cos(radians(i)) * maxX;
    
    push();
    translate(x, y);
    rotate(radians(i-frameCount));
    stroke(255,209,220);
    rect(0, 0, 100, 100);
    pop();
    
    push();
    translate(-x, -y);
    rotate(radians(i-frameCount)); 
    stroke(127,141,214);
    rect(0, 0, 100, 100);
    pop();

  }
}
