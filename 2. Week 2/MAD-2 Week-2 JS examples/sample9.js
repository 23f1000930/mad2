class Box{
    constructor(height,width,depth)
    {
        this.height=height;
        this.width=width;
        this.depth=depth;
    }

    get volume(){
        return this.height*this.depth*this.width;
    }

}

//main code
const b1=new Box(5,2,2);
b1.depth=7;
console.log(b1.volume);