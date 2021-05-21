
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var rectangle,rectangleObject	
var world;
var ball;
var square;
var land;
var menu

function preload(){
 mImage=loadImage("menu.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

  menu=createSprite(1300,30,20,20);
  menu.addImage(mImage);
  menu.scale=0.20

	engine = Engine.create();
	world = engine.world;
	
  fill("orange");
  stroke("white");
	rectangle=new rectangular(100,600,50,50);
 land=new ground(500,700,2500,20);
 sball=new Ball(1000,600,100);
  square=new cuboid(600,300,100,600,{restitution:0,friction:0,density:0});
  b1=new Ball(1050,600,100);
  b2=new Ball(1100,600,100);
  b3=new Ball(950,600,100);
  b4=new Ball(1050,600,100);
  b5=new Ball(850,600,100);
  b6=new Ball(800,600,100);
  b7=new Ball(750,600,100);
  b8=new Ball(700,600,100);
  b9=new Ball(650,600,100);
  b10=new Ball(700,500,100);
  b11=new Ball(750,500,100);
  b12=new Ball(800,500,100);
  b13=new Ball(850,500,100);
  b14=new Ball(900,500,100);
  b15=new Ball(950,500,100);
  b16=new Ball(1000,500,100);
  b17=new Ball(1050,500,100);
  b18=new Ball(1200,600,100);

  b19=new Ball(1200,600,100);
  b28=new Ball(1250,600,100);
  b20=new Ball(1300,600,100);
  b21=new Ball(1350,600,100);
  b22=new Ball(1400,600,100);
  b23=new Ball(1450,600,100);
  b24=new Ball(1500,600,100);
  b25=new Ball(1550,600,100);
  b26=new Ball(1600,600,100);
  b27=new Ball(1650,600,100);
  b29=new Ball(1200,500,100);
  b30=new Ball(1250,500,100);
  b31=new Ball(1300,500,100);
  b32=new Ball(1350,500,100);
  b33=new Ball(1400,500,100);
  b34=new Ball(1450,500,100);
  b35=new Ball(1500,500,100);
  b36=new Ball(1550,500,100);
  b37=new Ball(1600,500,100);
  b38=new Ball(1650,500,100);
  
  b39=new Ball(1050,400,100);
  b40=new Ball(1100,400,100);
  b41=new Ball(950,400,100);
  b42=new Ball(1050,400,100);
  b43=new Ball(850,400,100);
  b44=new Ball(800,400,100);
  b45=new Ball(750,400,100);
  b46=new Ball(700,400,100);
  b47=new Ball(650,400,100);
  b48=new Ball(700,400,100);
  b49=new Ball(750,300,100);
  b50=new Ball(800,300,100);
  b51=new Ball(850,300,100);
  b52=new Ball(900,300,100);
  b53=new Ball(950,300,100);
  b54=new Ball(1000,300,100);
  b55=new Ball(1050,300,100);
  b56=new Ball(1200,400,100);

  b57=new Ball(1200,400,100);
  b58=new Ball(1250,400,100);
  b59=new Ball(1300,400,100);
  b60=new Ball(1350,400,100);
  b61=new Ball(1400,400,100);
  b62=new Ball(1450,400,100);
  b63=new Ball(1500,400,100);
  b64=new Ball(1550,400,100);
  b65=new Ball(1600,400,100);
  b66=new Ball(1650,400,100);
  b67=new Ball(1200,300,100);
  b68=new Ball(1250,300,100);
  b69=new Ball(1300,300,100);
  b70=new Ball(1350,300,100);
  b71=new Ball(1400,300,100);
  b72=new Ball(1450,300,100);
  b73=new Ball(1500,300,1);
  b74=new Ball(1550,300,1);
  b75=new Ball(1600,300,1);
  b76=new Ball(1650,300,1);

  line=new flag(1000,300,50,50)

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 
  if(line.isTouching(rectangle)){
    text("YOU HAVE WON!",100,50);
   }

  line.display();
  rectangle.display();
  land.display();
  sball.display();
  square.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  b19.display();
  b28.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();

  b39.display();
  b40.display();
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();
  b47.display();
  b48.display();
  b49.display();
  b50.display();
  b51.display();
  b52.display();
  b53.display();
  b54.display();
  b55.display();
  b56.display();

  b57.display();
  b58.display();
  b59.display();
  b60.display();
  b61.display();
  b62.display();
  b63.display();
  b64.display();
  b65.display();
  b66.display();
  b67.display();
  b68.display();
  b69.display();
  b70.display();
  b71.display();
  b72.display();
  b73.display();
  b74.display();
  b75.display();
  b76.display();

  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyDown("space")){

     Matter.Body.applyForce(rectangle.body,rectangle.body.position,{x:10,y:-50});

  }

  if(keyDown("left")){

    Matter.Body.applyForce(rectangle.body,rectangle.body.position,{x:100,y:0});

 }

 if(mouseIsOver(menu)){
   fill("black");
   textSize(20)
   text("FIND THE FLAG INSIDE THE SMILEY BALLS AND TOUCH THE FLAG YOU WILL BE THE WINNER..  ",200,20);
   text("Touch space bar to jump.. Touch left arrow to go right side",400,40);
 }
}
