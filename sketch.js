var ship,shipMoving
var sea ,seaImage


function preload(){
shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);
 //creating a ship animation
  ship=createSprite(100,200,10,10)
ship.addAnimation("shipMoving")
sea=createSprite(200,210,10,10)
sea.addImage("seaImage")
sea.x=sea.width/2
}


function draw() {
  background("blue");
 
  if(sea.x=<0){
    ground.x=ground.width/2
  }
  if (keyDown("space")) {
    ship.velocityY=-1
  }
  if (ship.y=300) {
    ship.collide(sea)
  }
}