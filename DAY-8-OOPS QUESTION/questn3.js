class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    calculatesalary() {
        return this.salary;
    }
}

class Manager extends Employee {

    constructor(name, age, salary, incentive) {
        super(name, age, salary);
        this.incentive = incentive;
    }

    calculatesalary() {
        return this.salary + this.incentive;
    }
}

let emp1 = new Employee("Shivi", 19, 50000);
let emp2 = new Employee("Riya", 20, 60000);
let manager1 = new Manager("John", 30, 80000, 10000);

console.log("name:",emp1.name);
console.log("salary:",emp1.calculatesalary());

console.log("name:",emp2.name);
console.log("salary:",emp2.calculatesalary());
console.log("name:",manager1.name);
console.log("salary:",manager1.calculatesalary());