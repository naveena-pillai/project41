class Drops {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':0.7,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body);
    }

    updateDrop (){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)})
                }
      }
    display(){
        var pos = this.body.position;
        fill(7,72,176);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }
}