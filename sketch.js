
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, liftSide,rightSide;


function preload()
{
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
ball =Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

groundObj= new ground(width/2,670,width,20);
  leftSide=new ground (1100,600,20,120);
 rightSide= new ground( 700,580,15,120);

}


function draw() {
  rectMode(CENTER);
  background(50);
 
  groundObj.display();
  leftSide.display();  
	rightSide.display();

  dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
	
	imageMode(CENTER);
	image(paperImg,ball.position.x,ball.position.y,radius/2,radius/2);
	image(dustbinImg, 1185, 570, 200,200);

  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});

  
	}

	
}