const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var white1,white2,white3;
var ball;
var sling;

function setup() { 
createCanvas(900,500);

engine = Engine.create();
world = engine.world
 Engine.run(engine);

ball = new Paper(60,280,20,20);

ground = new Ground(200,370,1900,20);

white1 =  new Dustbin(700,370,100,100);
sling = new SlingShot(ball.body,{x:160,y:280})
}
function draw() { 
 background("blue");
 white1.display();
ground.display();
ball.display();
sling.display();
console.log(ball.body.position);
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(ball.body,ball.body.position, {x:5,y:-5});
   }
  }   

  function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseRealsed(){
Sling.fly();
}