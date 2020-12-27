const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var options={
		isStatic: false,
		restitution: 0,
		friction: 1,
		density: 1.2,
	}

	var options={
		isStatic: true,
		restitution: 0,
		friction: 1,
	
	}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   detectollision(stoneObj,mango1);
   detectollision(stoneObj,mango2);
   detectollision(stoneObj,mango3);
   detectollision(stoneObj,mango4);
   detectollision(stoneObj,mango5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.Position
	stoneBodyPosition=lmango.body.Position

}

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter,Body.setStatic(lmango.body,false);

    
}




