var  ground;
var crumpledPaper;

//var rectangle1;
var rectangle2 //rectangle3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
///dustbinImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

 ground = new Ground(400,680,800,20);

   
   crumpledPaper = new crumpledpaper(100,200,30);
   rectangle1 = createSprite(600,660,220,20);
	rectangle1.shapeColor=color("red");
	rectangle2 = createSprite(700,560,20,200);
	rectangle2.shapeColor=color("red");
	//rectangle2.addImage("dustbin",dustbinImage);
	
	rectangle3 = createSprite(500,560,20,200);
	rectangle3.shapeColor=color("red");

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
 
  drawSprites();
  crumpledPaper.display();
  ground.display();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW)
    Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:5, y:-80});
}

