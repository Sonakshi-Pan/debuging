var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  const PLAY = 1;
  const END=0;
  var gameState = PLAY;
 
var particles = [];
var plinkos = [];
var division = []
var particle;
var ground1;
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
 




  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < division.length; k++) {
     
    division[k].display();
  }
   if(particle != null){
     particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score=score+500;
         particle=null;
       }
      
     }
   }
   if(particle != null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>301){
        score=score+100;
        particle=null;
      }
     
    }
  }
  if(particle != null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600 ){
        score=score+100;
        particle=null;
      }
     
    }
  }
  if(particle != null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>601){
        score=score+200;
        particle=null;
      }
     
    }
  }
  
   ground1.display();

   textSize(20)
   text("Score : "+score,20,30);
   text(500,20,530);
   text(500,90,530);
   text(500,190,530);
   text(500,260,530);
   text(100,350,530);
   text(100,430,530);
   text(100,500,530);
   text(200,580,530);
   text(200,650,530);
   text(200,750,530);
   //mousePressed();

  // plinkos.display()
}
function mousePressed(){
  if(gameState !==END){
    particle=new Particle(mouseX,10,10,10)
  }
}