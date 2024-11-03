// const student = {
//     fullName: "Satyam Tripathi",
//     marks: 93.4,
//     printMarks: function () {
//         console.log("marks = ",this.marks);
//     }
// };
// console.log(student.fullName);
// console.log(student.marks);
// student.printMarks();

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary:50000,
//     calcTax(){
//         console.log("tax rate is 20%")
//     },
// };

// karanArjun.__proto__ = employee;

// karanArjun.calcTax();



// Class in JS

class Car{

    constructor(model){
        console.log("creating new object");
        this.model=model;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
}
let ferrari=new Car(2016);
ferrari.start();
ferrari.stop();
let lamborgini=new Car(2019);
lamborgini.setBrand("Urus");


// Parent & child class
class Parent {
    constructor(){
        this.species="homo sapiens";
    }
    hello(){
        console.log("Hello to my family");
    }
    greet(){
        console.log("How are you my child?");
    }
}
class Child extends Parent{
    constructor(branch){
        super();
        this.branchName=branch;
    }
    greet(){
        console.log("I am fine");
    }
}
let obj = new Child();

obj.hello();
obj.greet();


// Practice
let Data="Website info";
class User{
    
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data = ",Data)
    }
}

class Admin extends User{

    constructor(name,email){
        super(name,email);
    }
    editData (){
        Data = "some new value";
    }
}

let student1= new User("Aman","daa@gmail.com"); 
let student2= new User("Naman","dg@gmail.com"); 

student1.viewData();
let admin1=new Admin("admin","admin@gmail.com");

try{
    console.log("a = ",a);
}catch(err){
    console.log(err);
}