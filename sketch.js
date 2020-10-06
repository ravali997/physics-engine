const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
 options ={isStatic:true}
  object = Bodies.rectangle(200,200,400,30,options);
  World.add(myworld,object)
  console.log(object.type)
  
}

function draw() {
  background("black");  
  Engine.update(myengine)
  rect(object.position.x,object.position.y,30,30)
  
}