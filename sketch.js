var car,speed,weight; 
 var car2,car3;
 var w1,w2;
 var wall, wall2,wall3;
 var thickness
 
 
 
 
 function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  car= createSprite(25, 60, 30, 30);
  car.velocityX =speed;
  car.shapeColor=color(255)
  
  wall=createSprite(750,70,15,80)
  wall.shapeColor=color(80,80,80)
  car1= createSprite(25, 180,30, 30);
  car1.velocityX = speed
  car1.shapeColor=color(255)
  car2 =createSprite(25, 300, 30, 30);
  car2.velocityX = speed
  car2.shapeColor=color(255)
  wall2=createSprite(750,190,15,80)
  wall3=createSprite(750,300,15,80)
  wall2.shapeColor=color(80,80,80)
wall3.shapeColor=color(80,80,80)

  w1=createSprite(0,130,1600,5)
  w2=createSprite(0,250,1600,5)



}

function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0
var damage3=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage3>10){
  wall.shapeColor=color(255,0,0)
}
if(damage3<10){
  wall.shapeColor=color(0,255,0)

}

  }

  if(wall3.x-car2.x<(car2.width+wall3.width)/2)
  {
car2.velocityX=0
var damage=0.11*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
  wall3.shapeColor=color(255,0,0)
}
if(damage<10){
  wall3.shapeColor=color(0,255,0)
}


  }
  if(wall2.x-car1.x<(car1.width+wall2.width)/2)
  {
car1.velocityX=0
var damage1=0.35*weight*speed*speed/(thickness*thickness*thickness)
if(damage1>10){
  wall2.shapeColor=color(255,0,0)
}
if(damage1<10){
  wall2.shapeColor=color(0,255,0)
  }

}
  drawSprites();
  }