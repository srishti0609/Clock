
var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
 
function setup() {
  createCanvas(400,400);
 

    angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
 translate(200,200);
 rotate(-90);
 //Calculating time using pre-defined function
hr= hour();
 mn=minute();
 sc=second()

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  //Drawing the second hand
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //Drawing the minute hand
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //Drawing the hour hand
  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(11);
  noFill();
  stroke(0,0,255);
  arc(0,0,300,300,0,scAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  stroke(255,0,0);
  arc(0,0,260,260,0,hrAngle);

}