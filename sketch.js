function setup() {
  createCanvas(400, 600);
  frameRate(2);
}

function draw() {
  
  stroke(128);
  background(80,40,160);
  for (let x = 0; x < 400; x += 10) {
    for (let y = 0; y < 600; y += 10) {
      fill(x/2,y/2.5,144);
      rect(x, y, 10, 10);
    }
  }
  textAlign(LEFT, TOP);
  textFont("Arial");
  textSize(96);
  text("HAPPY",5,5);
  textAlign(RIGHT, TOP);
  textFont("Palatino");
  textSize(64);
  text("BIRTHDAY",400,150);
  fill(80, 40, 144); 
  textAlign(LEFT, TOP);
  textFont("Arial");
  textSize(32);
  text("wise you all the best!",50,505);
  for(let xx = 0;xx < 20;xx++){
    fill(random(0, 200), random(0, 250), 144);
    circle(random(0, 400), random(0, 600), 20);
  }
}
