var trex ,trex_running;


function preload(){
  
  trex_running = loadAnimation("trex3.png","trex1.png","trex4.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,150,10,30);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;
}

function draw(){
  background("cyan");
  
drawSprites();
}