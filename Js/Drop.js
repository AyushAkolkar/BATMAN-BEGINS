class Drop{
    constructor(x,y,radius){
        var options = { 
            'restitution':0.1,
            'friction':0.01,
            //'isStatic':true
        }
        //  shape of the body
        this.body = Bodies.circle(x, y, 1, options);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    //make fall function to add speed 
    fall(speed){
        this.y +=speed;
    }
  // display function to guve the x,y,radius and color
    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }
