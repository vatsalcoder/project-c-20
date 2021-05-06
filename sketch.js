
var garden 
var cat1
var cat2
var cat3
var cat
var mouse1
var mouse2
var mouse3
var mouse
var catsprite,mousesprite
function preload() {
    garden = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3= loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png")
    //load the images here
}

function setup(){
  createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
  catsprite = createSprite(1089,590)
  catsprite.addAnimation("cat3",cat3);
  catsprite.addAnimation("cat1",cat1);
 
  catsprite.scale = 0.15;
 catsprite.debug=true;
 catsprite.setCollider("rectangle",0,0,500,800)

  mousesprite=createSprite(350,580);
  mousesprite.addAnimation("mouse3",mouse3);
  mousesprite.addAnimation("mouse1",mouse1);
 
  mousesprite.scale=0.15;
  mousesprite.debug=true;
  mousesprite.setCollider("rectangle",0,0,500,800)


}

function draw() {

    background(garden);
    
    //Write condition here to evalute if tom and jerry collide
    textSize(30)
    text(mouseX+","+mouseY,mouseX,mouseY);

    if(catsprite.x-mousesprite.x < (catsprite.width/2 + mousesprite.width/2))
  {
    catsprite.velocityX=0;
   
    catsprite.changeAnimation("cat3",cat3);
    
  
    mousesprite.changeAnimation("mouse3",mouse3);
  }
    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
    mousesprite.addAnimation("mouse2",mouse2);
    mousesprite.changeAnimation("mouse2",mouse2);
    mouseframeDelay=50;

    catsprite.velocityX=-2;
    catsprite.addAnimation("cat2",cat2);
    catsprite.changeAnimation("cat2",cat2)
  }

}
