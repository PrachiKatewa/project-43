
hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  line(0,0,100,0);
  line(0,0,100,0);
}

function draw() {
  background(255,255,255);

  angleMode(DEGREES);
  secondAngle = map(second,0,60,0,360);
  minuteAngle = map(minute,0,60,0,360);
  hourAngle = map(hour,0,60,0,360);



  drawSprites();
}