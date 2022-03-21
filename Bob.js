class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1.0,
            friction:0,
            density:0.8,
        }
        this.x=x
        this.y=y
        this.r=r
       this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
        display(){
            var paperPos=this.body.position;
            ellipseMode(RADIUS)
            strokeWeight(3)
            fill("magenta")
            ellipse(paperPos.x,paperPos.y,this.r,this.r)
        }
    }