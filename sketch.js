
var MalcolmFade, CordeliaCarstairs, MatthewFairchild, AnnaLightwood, Kellington, RosamundWentworth;

function setup() {
  createCanvas(800,400);
   
  MalcolmFade= createSprite(400,200,50,100);
  MalcolmFade.shapeColor= "purple";
  MalcolmFade.debug= true;

  CordeliaCarstairs= createSprite(500,200,50,100);
  CordeliaCarstairs.shapeColor= "red";
  CordeliaCarstairs.debug= true;

  MatthewFairchild= createSprite(500,300,50,100);
  MatthewFairchild.shapeColor= "blonde";
  MatthewFairchild.debug= true;
  MatthewFairchild.velocityX= -2;


  AnnaLightwood= createSprite(200,300,50,100);
  AnnaLightwood.shapeColor= "blue";
  AnnaLightwood.debug= true;
  AnnaLightwood.velocityX= 2;

  Kellington= createSprite(500,220,50,100);
  Kellington.shapeColor= "chartreuse";
  Kellington.debug= true;

  RosamundWentworth= createSprite(300,180,50,100);
  RosamundWentworth.shapeColor= "lightblue";
  RosamundWentworth.debug= true;

}

function draw() {
  background(0);  
  drawSprites();

  CordeliaCarstairs.x= mouseX;
  CordeliaCarstairs.y= mouseY;

  
  
  bounceOff(MatthewFairchild,AnnaLightwood);

  if (isTouching(CordeliaCarstairs,RosamundWentworth)) {
    RosamundWentworth.shapeColor= "pink";
    CordeliaCarstairs.shapeColor= "yellow";
  }
    else
    {
      RosamundWentworth.shapeColor= "lightblue";
      CordeliaCarstairs.shapeColor= "red";
    }
  }

  



