const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane, hule, stone, iron;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new martillo(10,100);
    hule =  new rub (400, 550, 80, 80);
iron = new h (600, 500);
  stone = new p (500, 500)

}

function draw(){
    background("lightBlue");
    
    Engine.update(engine);


    plane.display();
    hammer.display();
    hule.display ();
    iron.display ();
    stone.display();
    
 
}