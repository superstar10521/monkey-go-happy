

function setup() {
  createCanvas(800,600);

  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red";
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor="red";

  gameObject1=createSprite(400, 200, 50, 80);
  gameObject1.shapeColor="blue";
  gameObject2=createSprite(400, 300, 50, 80);
  gameObject2.shapeColor="blue";
  gameObject3=createSprite(400, 400, 50, 80);
  gameObject3.shapeColor="blue";
  gameObject4=createSprite(400, 500, 50, 80);
  gameObject4.shapeColor="blue";


textSize(50);
    
}                   

function draw() {
  background(255,255,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  
 // console.log(movingRect.x -fixedRect.x);

 //Passing argument or values
  if(touchProperty(movingRect,gameObject1)) {
    text("condition is true", 100,100);
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";

 } else {
    text("condition is false", 100,100);
    gameObject1.shapeColor="red";
    movingRect.shapeColor="red";
 }

  drawSprites();
  }

  function touchProperty(object1, object2) {
    if( object1.x - object2.x < object2.width/2+object1.width/2
      && object2.x -object1.x <object2.width/2+object1.width/2
      && object2.y-object1.y <object2.height/2+object1.height/2
      && object1.y-object2.y <object2.height/2+object1.height/2
     ) 
     { 
      return true;
     }else{  
       return false;
     }
  }