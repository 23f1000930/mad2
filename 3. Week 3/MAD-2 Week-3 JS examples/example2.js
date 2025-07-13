a=5;
b=a; //value is copied
b=45;
console.log(a,b);

let x={
    val:8
}
y=x; //x is referred by y

y.val=67;
console.log(x.val,y.val);
x.val=90;
console.log(x.val,y.val);

