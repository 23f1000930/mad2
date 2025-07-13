class Student{
    #sid;
    #sname;
    constructor(id,name){
        this.#sid=id;
        this.#sname=name;
    }
    
    //setter
    set id(sid){this.#sid=sid}
    set name(sname){this.#sname=sname}

    //getter
    get id(){return this.#sid;}
    get name(){return this.#sname;}
}

s1=new Student(101,"IITM");
console.log(s1.id,s1.name); //before modification
s1.id=102;
s1.name="BS Degree";
console.log(s1.id,s1.name); //after modification
// s1.id(103); //its not a function
console.log(s1.id,s1.name); //after modification


class Emp{
    constructor(id=1,salary=9000){
        this.id=id;
        this.salary=salary
    }
}

e1=new Emp();
const {salary} = e1;
console.log(e1.id);//1
console.log(salary);//9000