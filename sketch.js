var bob1,bob2,bob3,bob4,bob5;
var roof;
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,500,20)
	bob2 = new Bob(340,500,20)
	bob3 = new Bob(380,500,20)
	bob4 = new Bob(420,500,20)
	bob5 = new Bob(460,500,20)

	roof = new Roof(380,200,240,20)
	ground = new Ground (400,650,800,20)

	rope1=new Rope(bob1.body,roof.body,-75,0)
	rope2=new Rope(bob2.body,roof.body,-35,0)
	rope3=new Rope(bob3.body,roof.body,5,0)
	rope4=new Rope(bob4.body,roof.body,45,0)
	rope5=new Rope(bob5.body,roof.body,85,0)

	Engine.run(engine);
  
}


function draw() {
  background(200);
  Engine.update(engine);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}

