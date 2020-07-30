 
var score = 0; 
var count=0;

var plinkos=[];
var particles;
var divisions=[];
var divisionheight = 300;  
var PLAY = 1; 
var END = 0;
var gameState = PLAY;

function setup() {
  createCanvas(800,400); 

  engine = Engine.create();
  world = engine.world; 

  text("SCORE",score,50,200);

  ground = new Ground(600,height,1200,20);
     
  for(var i =0; i<=width; i=i+80 ){
    divisions.push(new division(i,height-divisionheight/2,10,divisionheight))
    } 

    for (var a = 40; a<=width;a=a+50){
      plinkos.push(new plinko(a,75));
      }  
  
      for (var a = 15; a<=width-10 ;a=a+50){
          plinkos.push(new plinko(a,175));
          } 
  
      for (var a = 40; a<=width;a=a+50){
      plinkos.push(new plinko(a,275));
       } 
  
   
}

function draw() {
  background(255,255,255);   
  
  Engine.update(engine);

  ground.display(); 

  
 
  for (var k=0; k<divisions.length; k=k+1){
    divisions[k].display();
    } 

    //if(frameCount%60===0){  
      //particles.push(new particle(random(width/2-30, width/2+30), 10,10)); 
     //} 
     
    for (var j=0;j<particles.length; j=j+1) {
      particles[j].display();
    } 

    for (var e=0;e<plinkos.length; e=e+1) {
      plinkos[e].display();
    } 
    
   if (particle!==null) {
     particle.display(); 
     if(particle.body.position.y>760) {
       if(particle.body.position.x<300){
        score = score+500; 
        particle=null; 
        if(count>=5) {
          gameState=END;
        }
       }
     }
   }



  drawSprites();
  
    }

  function mousePressed (){
    if (gameState!== end ) {
     // score = score+1;  
      count=count+1;
      particle=new Particle(mouseX,10,10,10);
    }
  }