class Ball{
    constructor(x, y, width, height, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':4
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("smile image.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius);
        pop();
      }
}
