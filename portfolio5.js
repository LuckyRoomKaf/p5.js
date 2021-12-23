function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  noFill();
  stroke('White');
  ellipse(width/2,height/2,500);
  
  push();
  fill(255,1000);
  noStroke();
  c1 = ellipse(width/2,height/2,100);
  c1.erase();
  c1.ellipse(width/2,height/2,80);
  pop();

  let num = int(random(5, 15));
  for (let i = 0; i < num; i++) {
    push();
    fill(255,10);
    noStroke();
    arc(width/2,height/2,50*i,50*i,random(0),random(360));
    pop();
  }
  
  
  push();
  fill(255, 40);
  for (let i = 0; i < num; i++) {
    circle(width/2,height/2,random(500));
    fill(0, i);
    arc(width/2,height/2,i*40,i*40,random(10),random(180));
    
    
  pop();
    
  push();
  stroke(255,5);
  strokeWeight(3);
  ellipse(width/2,height/2,600);
  pop();
  }
}

function draw() {
  
}
