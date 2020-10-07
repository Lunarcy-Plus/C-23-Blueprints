class Box
{
constructor(x,y){
var proper = {isStatic:true};
 this.box = Bodies.rectangle(x,y,20,20,proper);
 World.add(world,this.box);
}
display(){
    rectMode(CENTER);
    rect(this.box.position.x,this.box.position.y,20,20);
}

}