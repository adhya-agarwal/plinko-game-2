class Ball {
    constructor (x,y,r){
   
     var options = {
         isStatic : false,
         restitution : 0.6,
         friction : 0,
         density : 0.8
     }
  
  
     this.body = Bodies.circle(x,y,r,options);
     this.r = r
     this.color = color (random (0,255),random (0,255) ,random (0,255));
     
     World.add(world,this.body)
  
  
    }
  
  display () {
  var pos = this.body.position
  var angle = this.body.angle
  push()
      translate(pos.x,pos.y)
      rotate(angle)
      stroke ("lightgreen")
      fill ("aquamarine")
      ellipseMode(RADIUS);
      ellipse(0, 0 ,this.r,this.r)
    pop();
      
  }
  }