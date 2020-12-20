var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 25, 15);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1400,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

}

function draw() {
  background("black");  
  
  if(hascollided(bullet,wall)){

    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed /(thickness * thickness * thickness);
  
  if(damage>10){
    wall.shapecolor=(225,0,0);
  }
  
 if(damage<10){
   wall.shapecolor=(0,225,0);
 }

  }

drawSprites();
}


function hascollided(bullet,wall){
bulletRightEdge= bullet.x + bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
 return false; 

}


