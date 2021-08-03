const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base;
var wall1,wall2;
//var jointLink;
var stones=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base= new Base(0,height-20,width*2,20);
  wall1=new Base(300,height/2,600,100);
  wall2=new Base(width-300,height/2,600,100);
  bridge=new Bridge(30,{x:600,y:600});
  jointPoint=new Base(width-600,height/2,100,20)
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink= new Link(bridge,jointPoint)
  for(var i=0;i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone= new Stone(x,y,80,80)
     stones.push(stone)
  }
}

function draw() {
  background(51);
  Engine.update(engine);
base.display()
wall1.display()
wall2.display()
bridge.show();
jointPoint.display()
for (var stone of stones){
  stone.display();
}
}
