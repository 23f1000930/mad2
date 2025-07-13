class Student{
    #sid;
    #sname;
    constructor(id,name){
        this.#sid=id;
        this.#sname=name;
    }

    //setters
    set id(sid){
        this.#sid=sid;
    }

    set name(sname){
        this.#sname=sname;
    }


    //getters
    get id(){return this.#sid}
    get name(){return this.#sname}
}

//main code
s1=new Student(101,"RAM");
console.log("ID : "+s1.id+", Name: "+s1.name);
s1.id=102;
s1.name="Ravi";
console.log("ID : "+s1.id+", Name: "+s1.name);
