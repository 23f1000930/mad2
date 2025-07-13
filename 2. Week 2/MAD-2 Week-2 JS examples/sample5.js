stud={
    sno:1,
    name:"IITM"
};

arr=[]
for (i=0;i<3;i++)
{
    arr.push(stud)
}

console.log(arr);
arr[2].name="BS Degree";
console.log(arr);

a={
    val:8
}

console.log(a.val);
b=a;
b.val=90;
console.log(a.val);

