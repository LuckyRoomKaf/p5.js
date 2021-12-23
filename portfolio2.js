const num = 15;

//reference https://gin-graphic.hatenablog.com/entry/2020/12/18/180000
function Polygon(x, y, size, pointNum){
   const Radius = size;
   const angleStep = 2*PI/pointNum ;
   let angle = 0;
   beginShape();
   for(let i=0;i<=pointNum;i=i+1){
      let px = x + Radius*cos(angle);
      let py = y + Radius*sin(angle);
      vertex(px, py);
      angle = angle + angleStep;
   }
   endShape(CLOSE);
}

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
    frameRate(5);
    background(0);
  
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'white';
  
  for (let i = 0; i < num*10; i++) {
    let size = random(40);
    ellipse(random(500), random(500), size, size);
    
    red = random(100, 255);
    green = random(100, 255);
    blue = random(100, 255);

    fill(red, green, blue, random(30, 250));
  }
  for (let j = 1; j <= num; j++) {
    x = random(500);
    y = random(500);
    size = random(20);
    Polygon(x, y, size, 3); 
    fill(red, green, blue, random(30, 250));
  }
}
