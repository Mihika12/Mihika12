
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;


function setup() {
  createCanvas(800,400);
 
 box1 = createSprite(300, 400, 159, 200);
 box2 = createSprite(401, 400, 159, 200);
 box3 = createSprite(150, 400, 50, 350 );
 box4 = createSprite(550, 400, 50, 350 );
 box5 = createSprite(350, 300, 300, 50);
 box6 = createSprite(350, 250, 200, 200);
 box7 = createSprite(350, 150, 250, 50);
 
}

function draw() {
   
  background(0);
 ;
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  drawSprites();
}