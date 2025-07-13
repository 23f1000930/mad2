let arr=[5,12,22,4,19];
console.log(arr.sort());//sort in chronological/ascii

//comparator func
function my_comparator(a,b){
    return a-b;
}

console.log(arr.sort(my_comparator));//ascending of sorting
console.log(arr.sort((a,b) => b-a));//descending of sorting

// >0 (a-b) then a > b
// <0 (a-b) then a < b
// ==0 (a-b) then a==b
