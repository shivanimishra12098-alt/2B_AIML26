/*class hello{
    constructor(){
        console.log("Hello, shivi!");
    }   
}
let obj = new hello();*/
class Employee {
    constructor(name) {
        this.empname = name;
        console.log(`Hello, ${this.empname}!`);
    }
}

let emp1 = new Employee("Shivani");
console.log(emp1.empname);