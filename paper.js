class Paper{
 constructor(x,y){
var options ={
restituition:0.6,
isStatic:false,
friction:0.2,
density:1.2
}
this.image = loadImage("pictures/ball.png");
this.body = Bodies.circle(x,y,10,options)
this.Width = 20;
this.Height = 20;
//console.log(this.body)
World.add(world,this.body)
 }   
 display(){
  var pos = this.body.position;
push();
translate(pos.x,pos.y);
image(this.image,0,0,this.Width,this.Height);
pop();   
 }
}