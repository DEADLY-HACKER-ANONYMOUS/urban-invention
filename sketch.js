/*function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}*/

/**/

var fixedRect, movingRect;
var b,c;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  b = createSprite(600, 600, 50, 80);
  b.shapeColor = "violet";
  b.debug = true;
  c = createSprite(600,400,80,30);
 c.shapeColor = "blue";
  c.debug = true;
  c.velocityY=5;
}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/

  //bounceoff(b,c)
 if(collide(b,c)===true){
   console.log("hellllo")
 }else{
  collide(b,c)===false;
 }
  drawSprites();
}


function bounceoff(movingRect,fixedRect){
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
     /* && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2*/ ){

        movingRect.velocityX=movingRect.velocityX*(-1)
        /*movingRect.velocityY=movingRect.velocityY*(-1)*/
        fixedRect.velocityX=fixedRect.velocityX*(-1)
        /*fixedRect.velocityX=fixedRect.velocityX*(-1)*/

      }
     if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
        &&fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
          movingRect.velocityY=movingRect.velocityY*(-1)
          fixedRect.velocityY=fixedRect.velocityY*(-1)
        }
    
      
}




function collide(movingRect,fixedRect){
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
        return true;
      }
    else{
      return false
    }

  }
