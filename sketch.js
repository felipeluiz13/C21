
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var ball;
var groundObj;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,500,30,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
	groundObj = new Ground (600,590,1200,30);
	leftSide = new Ground (900,515,20,120);
	rightSide = new Ground (1100,515,20,120);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ellipse (ball.position.x,ball.position.y,30)
  groundObj.display ();
  leftSide.display ();
  rightSide.display ();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce (ball,ball.position,{x:100,y:-100})
	}
}

