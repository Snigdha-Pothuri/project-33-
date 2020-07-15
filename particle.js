class particle {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.4
           // 'friction':1.0,
           // 'density':1.0
        }
       // this.x = x;
        //this.y = y;
        this.radius=radius;
        this.body =Bodies.circle(x,y,this.radius,options); 
        this.color= color(random(0,255),random(0,255),random(0,255));
       
        
       // this.image = loadImage("paper.png");
       // this.body = height;
        World.add(world,this.body);
      }
      display(){ 

        var pos = this.body.position; 
        var angle=this.body.angle; 

        push();

        translate(pos.x,pos.y); 
        rotate (angle); 
        noStroke(); 
        fill (this.color);
       ellipseMode(RADIUS)  ;
        //imageMode(CENTER);
        //image(this.image, 0, 0,x,y);
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
}