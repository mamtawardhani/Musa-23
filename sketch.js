//matter.js
//create the engine (universe) => access the world from the universe => create the bodies and add them to the world

//namespacing 
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
var ball

function setup() {
    createCanvas(400,400);

    //creating the engine
   en = Engine.create()
  //accessing the world from the engine
   wo = en.world

   ball = Bodies.circle(200,20, 20)
   World.add(wo, ball)
   
}

function draw() 
{
  Engine.update(en)
  background("red")
  ellipse(ball.position.x, ball.position.y,20)
}

