var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")

}





function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  
  
}

function draw() {
 background("black");
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

    textSize(20)
    text("Score:"+score,300,80)
    score = score
  
  //moving bow
  bow.y = World.mouseY

   if(bow.y < 40){
      bow.y = 40
   }

   if(bow.y > 360){
       bow.y = 360
   }
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
     else if(select_balloon == 2 ){
      pinkBalloon();
     }
     else if(select_balloon == 3 ){
      blueBalloon();
     }
     else if(select_balloon == 4 ){
      greenBalloon();
     }

  }
   
  
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


 function redBalloon() {
  var redBalloon = createSprite(50,Math.round(random(20,370)))
  redBalloon.addImage(red_balloonImage);
  redBalloon.velocityY = 3;
  redBalloon.lifetime = 150;
  redBalloon.scale = 0.1;

  }

 function greenBalloon() {
  var greenBalloon = createSprite(50,Math.round(random(20,370)))
  greenBalloon.addImage(green_balloonImage);
  var rand = Math.round(random(10,260))
  greenBalloon.velocityY = 3;
  greenBalloon.lifetime = 100;
  greenBalloon.scale = 0.1;

  
  
 }

function blueBalloon() {

  var blueBalloon = createSprite(50,Math.round(random(20,370)))
  blueBalloon.addImage(blue_balloonImage);
  var rand = Math.round(random(10,260))
  blueBalloon.velocityY = 3;
  blueBalloon.lifetime = 190;
  blueBalloon.scale = 0.1;

  
}

function pinkBalloon() {
  var pinkBalloon = createSprite(50,Math.round(random(20,370)))
  pinkBalloon.addImage(pink_balloonImage);
  var rand = Math.round(random(10,260))
  pinkBalloon.velocityY = 3;
  pinkBalloon.lifetime = 250;
  pinkBalloon.scale = 1.3;




}
  switch(rand){
    case 1: redBalloon.addImage(redballoon);
    break;
    
    case 2: blueBalloon.addImage(blueballoon);
    break;

    case 3: greenBalloon.addImage(greenballoon);
    break;

    case 4: pinkBalloon.addImage(pinkballoon);
    break;
    
    deafalut: break;
    
    



















  }
  

 

 

 

