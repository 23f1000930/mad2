let L=[10,20,30];
[a,b,c]=L;
console.log(a,b,c);

upl=[...L,40,50];
console.log(upl);

std_obj={id:'101',name:'RAM',age:35};
const {id,age}=std_obj; //matched properites are unpacked/destructed into variables
console.log(id,age);//101, 35

//swapping values
a=3;
b=5;
[a,b]=[b,a];
console.log(a,b); //5,3

//function returning more than one value
function foo(){
    return [1,2,3];
}

[a,,c]=foo();
console.log(a,c);//1,3