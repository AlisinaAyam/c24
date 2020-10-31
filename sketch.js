
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var bin1
var bin2
var bin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   bin1 = new Bin(560,650,20,100);
   bin2 = new Bin(630,680,120,20);
   bin3 = new Bin(700,650,20,100);

	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,700,800,20,ground_options);
    World.add(world,ground);



	var ball_options = {
		restitution:0.3,
		density:1.2,
		friction:0.5
	
	}
	
	
		ball = Bodies.circle(100,200,20,ball_options);
		World.add(world,ball);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  bin1.display();
  bin2.display();
  bin3.display();


  
 
}



function keyPressed(){

if(keyCode === UP_ARROW){

	Body.applyForce(ball,ball.position,{x:55,y:-55})
}

}



