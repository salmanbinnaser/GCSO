var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

thickness=random(22,83)

 bullet = createSprite(50, 200, 50, 50);
 wal = createSprite(1200, 200, thickness, height/2);

 speed = random(223,321);
 weigth = random(30,52);
 
 bullet.velocityX = speed;

}

function draw() {

  background("black");
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2) 
   {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180) 
    {
      bullet.shapeColor="white";
    }
    if(deformation<180 && deformation>100) 
    {
      bullet.shapeColor="white";
    }
    if(deformation<100) 
    {
      bullet.shapeColor="white";
      }
  }

if(hasCollided(bullet, wall))
{
  bullet.velocity.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor="red";
  }
  if(damage<10)
  {
    wall.shapeColor="green";
  }
}

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.widht;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}