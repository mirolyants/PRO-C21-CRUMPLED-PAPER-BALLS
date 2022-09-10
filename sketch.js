
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var groundObj;

var leftSide;
var rightSide;

var ball;
var radius=40;


/*function preload()
{
  
}*/

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		desity:1.2
	}
	ball=Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball)



	//Create the Bodies Here.
  groundObj= new Ground(width/2,670,width,20);

  leftSide= new Ground(1100,600,20,120);
  
  rightSide= new Ground(1350,600,20,120);


	Engine.run(engine);

  //rectMode(CENTER);
  //ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,radius,radius);


  groundObj.display();
  rightSide.display();
  leftSide.display();

 
}

function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
}

