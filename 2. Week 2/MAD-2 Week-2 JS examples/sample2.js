// const obj={val:5}
// obj.setvalue=function(x){this.val=x}
// obj.setvalue(10)
// console.log(obj.val)

let a=90 //premitive data type/builtin

//calculation is a user defined datatype/object
const calculation={
    a:0,
    b:0,
    calculate: function(a,b){
        this.a=a;
        this.b=b;
        return a+b;
    },
    calculatediff: function(a,b){
        
    }
}

console.log(calculation.calculate(17,2))