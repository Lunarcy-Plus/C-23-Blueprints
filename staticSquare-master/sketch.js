const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
     var prop = {isStatic:true} 
     
     
    box = Bodies.rectangle(200,200,50,50,prop);
    World.add(world,box);

    console.log(ground);

    box1 = new Box(100,200);
    box2 = new Box(200,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,200,50);
    box1.display();
    box2.display();
}