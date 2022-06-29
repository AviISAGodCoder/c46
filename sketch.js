var bg,bgImg;
var player, hunterImg, hunter_hunting, lion, rhino, bear, bullet;


function preload(){
  
hunterImg = loadImage("./assets/hunter_still.png");
  hunter_hunting = loadImage("./assets/base_hunter.png");
  lion = loadImage("./assets/base_lion.png");
  bear = loadImage("./assets/bear.png");
  bullet = loadImage("./assets/bullet.png");


  bgImg = loadImage("./assets/bg.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 3.8
  

player = createSprite(displayWidth-1700, displayHeight-300, 50, 50);
 player.addImage(hunterImg);
   player.scale =1.5;
 //  player.debug = true
 //  player.setCollider("rectangle",0,0,300,300)
}



function draw() {
  background(0); 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyWentDown("space")){
 bullet1 = createSprite(player.x+300, player.y, 50,50);
 bullet1.velocityX=10;
 bullet1.addImage(bullet);
 bullet1.scale=0.2;
  player.addImage(hunter_hunting)
 
}

else if(keyWentUp("space")){
  player.addImage(hunterImg)
}

drawSprites();

}
