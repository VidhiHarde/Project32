const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var backgroundImg;
var Thief1,ThiefImg;
var Hut,HutImg;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10;
var Police1,Police2,Police3;
var d1,d2,d3,d4,d5;
var l1,l2,l3,l4,l5,l6,l7,l8,l9,l10;
var k1,k2,k3,k4,k5,k6;


function preload(){
  ThiefImg=loadImage("Images/Thief.jpg");
  HutImg=loadImage("Images/MyHut.jpg");
}

function setup() {
  createCanvas(600,700);

  Theif1=createSprite(550,630,10,70);
  Theif1.addImage("TheifImg",ThiefImg);
  Theif1.scale=0.06;

  Hut=createSprite(500,90,10,20);
  Hut.addImage("HutImg",HutImg);
  Hut.scale=0.2

  engine = Engine.create();
  world = engine.world;

  w1=new Wall(600,350,30,700);
  w2=new Wall(350,700,700,30);
  w3=new Wall(-1,350,30,700);
  w4=new Wall(350,-1,700,30);
  w5=new Wall(510,530,180,20);
  w6=new Wall(80,530,180,20);
  w7=new Wall(510,370,180,20);
  w8=new Wall(80,370,180,20);
  w9=new Wall(510,210,180,20);
  w10=new Wall(80,210,180,20);

  Police1=new Police(300,530,70,100);
  Police2=new Police(300,370,70,100);
  Police3=new Police(300,200,70,100);

  d1=new Diamond(550,450,50,50);
  d2=new Diamond(550,300,50,50);
  d3=new Diamond(60,600,50,50);
  d4=new Diamond(60,450,50,50);
  d5=new Diamond(60,300,50,50);


  l1=new Laser(150,290,70,140);
  l2=new Laser(150,615,70,140);
  l3=new Laser(150,450,70,140);
  l4=new Laser(420,615,70,140);
  l5=new Laser(420,450,70,140);
  l6=new Laser(420,290,70,140);

  k1=new Key(550,420,50,50);
  k2=new Key(60,410,50,50);
  k3=new Key(60,570,50,50);
  k4=new Key(490,630,50,50);
  k5=new Key(230,640,50,50);
  k6=new Key(550,250,50,50);



}

function draw() {

  background(0); 
 
Engine.update(engine);

//keyPressed();

fill(124,26,26);
w1.display();
w2.display();
w3.display();
w4.display();
w5.display();
w6.display();
w7.display();
w8.display();
w9.display();
w10.display();

Police1.display();
Police2.display();
Police3.display();

d1.display();
d2.display();
d3.display();
d4.display();
d5.display();

l1.display();
l2.display();
l3.display();
l4.display();
l5.display();
l6.display();

k1.display();
k2.display();
k3.display();
k4.display();
k5.display();
k6.display();

drawSprites();


}

function keyPressed() {
	//write code here
	if(keyCode==="LEFT_ARROW"){
		Thief1.x=Thief1.x-10;
	}

	if(keyCode==="RIGHT_ARROW"){
		Thief1.x=Thief1.x+10;
	}
}
