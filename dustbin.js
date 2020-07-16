class Dustbin{
constructor(x,y){
this.x = x;
this.y = y;
this.dustbinWidth = 200;
this.dustbinHeight = 100;
this.wallThickness = 100;
this.angle = 0;
this.image = loadImage("pictures/dustbin.png");
//this.BottomBody =Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,{isStatic:true})
this.leftWallBody =Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
Matter.Body.setAngle(this.leftWallBody,this.angle)
//this.rightWallBody =Bodies.rectangle(this.x+this.dustbinWidth/2,this.y+this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
//Matter.Body.setAngle(this.rightWallBody,-1*this.angle)
//World.add(world,this.BottomBody);
World.add(world,this.leftWallBody);
//World.add(world,this.rightWallBody);
}
display(){
//var posBottom = this.BottomBody.position;
var posLeft = this.leftWallBody.position;
//var posRight = this.rightWallBody.position;

push()
translate(posLeft.x,posLeft.y)
imageMode(CENTER)
//angle\Mode(RADIANS);
rotate(this.angle);
image(this.image,0,0,this.wallThickness,this.dustbinHeight);
pop();

//push()
//translate(posRight.x,posRight.y)
//rectMode(CENTER)
//angleMode(RADIANS);
//rotate(-1*this.angle);
//rect(0,0,this.wallThickness,this.dustbinHeight);
//pop();

//push()
//translate(posBottom.x,posBottom.y)
//rectMode(CENTER)
//angleMode(RADIANS);
//fill("yellow");
//rect(0,0,this.dustbinWidth,this.wallThickness);
//pop();
}
}