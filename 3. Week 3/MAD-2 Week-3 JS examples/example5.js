const box=class Box{
                constructor(){
                    this.h=5;
                    this.w=3;
                    this.d=1;
                }
}

console.log(box); //box is object
box.w=90;
console.log(box.w); //box is object w is 90

b2=box; //fine
console.log(b2.w); //90

b3=new Box();
b3.w=9;
console.log(b3.w); //9