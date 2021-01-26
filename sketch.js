const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9;
var balls = [];
var score=0;


function setup() {
  createCanvas(1600,609);

engine = Engine.create();
world = engine.world;

 


 wall1 = new Wall (430,450,5,400);
 wall2 = new Wall (525,450,5,400);
 wall3 = new Wall (615,450,5,400);
 wall4 = new Wall (710,450,5,400);
 wall5 = new Wall (805,450,5,400);
 wall6 = new Wall (900,450,5,400);
 wall7 = new Wall (995,450,5,400);
 wall8 = new Wall (1090,450,5,400);
 wall9 = new Wall (1185,450,5,400);

 ground = new Ground (800,603,800,10)


Engine.run(engine)
}

function draw() {
  background("beige");  

ground.display();

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();



if (frameCount % 60 === 0 ){
  balls.push(new Ball(random (400,1180), 10,10))
}

for (var n = 0; n < balls.length; n++){
  balls[n].display();
}

if(frameCount%100===0){
  score=score+50
}

textSize(30)
text("SCORE :"+score,100,100)
  drawSprites();
}