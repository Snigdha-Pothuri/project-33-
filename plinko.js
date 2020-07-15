class plinko {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0, 
           isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius=10;
        this.body =Bodies.circle(this.x,this.y,this.radius,options);
       
        
       // this.image = loadImage("paper.png");
       // this.body = height;
        World.add(world,this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       ellipseMode(RADIUS)  
       fill("blue");
        //imageMode(CENTER);
        //image(this.image, 0, 0,x,y);
        ellipse(0,0,this.radius,this.radius)
        pop(); 
      }
       
  
             
}