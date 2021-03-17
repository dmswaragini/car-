var car;
var wall;
var speed;
var wieght;
var deformition;
function setup() {
  
  createCanvas(800,400);
  car=createSprite(50, 200, 20, 20);
  car.shapeColor=("white");
  wall=createSprite(750,200,30,100);
  wall.shapeColor=("black");
  speed=random(55,90);
  car.velocityX=speed;
  wieght=random(400,1500);

}

function draw() {
  background("grey");
  if(wall.x-car.x < (car.width/2+wall.width/2)){
car.velocityX=0
deformition=0.5*wieght*speed*speed/2250
if(deformition>180){
  car.shapeColor="red";
if(deformition<180 && deformition<100){
  car.shapeColor="yellow";
}
if(deformition<100){
  car.shapeColor=color(0,255,0);
}
}
  }
  
  drawSprites();
}