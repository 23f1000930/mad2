a=[1,2,3,4,5]

console.log(a.filter((x) => x%2!=0)); //[1,3,5]
console.log(a.map((x) => x*2)); //[2,4,6,8,10]
console.log(a.reduce((acc,x) => acc+x,(acc=0))); //15