class box{
    constructor(){
    this.body=Bodies.rectangle(200,50,50,50)
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER)
    fill("red")
    rect(pos.x,pos.y,50,50)
    }
    }