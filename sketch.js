const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground
var box1, box2


function setup() {
  var canvas = createCanvas(1200, 600)
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600, 580, 1200, 40);
  box1 = new Box(900, 510, 70, 50);
  box2 = new Box(900, 440, 70, 50);
  box3 = new Box(900, 370, 70, 50);
  box4 = new Box(900, 300, 70, 50);
  box5 = new Box(900, 230, 70, 50);
  box6 = new Box(900, 160, 70, 50);

  box7 = new Box(800, 510, 70, 50);
  box8 = new Box(800, 440, 70, 50);
  box9 = new Box(800, 370, 70, 50);
  box10 = new Box(800, 300, 70,50);
  box11= new Box(800, 230, 70, 50);
  box12= new Box(800, 160, 70, 50);
  
  box13 = new Box(700, 510, 70, 50);
  box14 = new Box(700, 440, 70, 50);
  box15 = new Box(700, 370, 70, 50);
  box16 = new Box(700, 300, 70, 50);
  box17 = new Box(700, 230, 70, 50);
  box18 = new Box(700, 160, 70, 50);
  box19 = new Box(700, 120, 70, 50);
  box20 = new Box(700, 80, 70, 50);

  ballwreck = new Ball(300,300, 150);
  
  rOpe = new Rope(ballwreck.body, {x:300, y:50});
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box15.display();
  box14.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ballwreck.display();
  rOpe.display();

}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ballwreck.body, {x: mouseX , y: mouseY});
  //}
}