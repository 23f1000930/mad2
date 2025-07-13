let a=5; //global variable

function func1()
{
    console.log(a); //5-accessed
    a=78; //modified
    y=55
    console.log("Y in sub block "+y);
}

function func2()
{
    console.log(a);//78
    //console.log("X"+x);//error
}


//main
func1();
func2();

{
    var x=9;//local variable
}
console.log("X outside block "+x);

for(let i=1;i<=10;i++)// i is safe
{
    console.log(i);
}
console.log("Final i value "+i);