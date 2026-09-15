/*class student { 
    constructor(rollno, name, age) {
        this.rollno = rollno;
        this.name = name;
        this.age = age;
        console.log(`Roll No: ${this.rollno}, Name: ${this.name}, Age: ${this.age}`);
    }
}
student1 = new student();
student2 = new student(102, "happy", 20);
student3 = new student(103, "khushi", 21);*/

//using display function
class student {
    constructor(rollno, name, age) {    
        this.rollno = rollno;
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Roll No: ${this.rollno}, Name: ${this.name}, Age: ${this.age}`);
    }
}
student1 = new student(101, "shivi", 19);
student2 = new student(102, "happy", 20);
student3 = new student(103, "khushi", 21);
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();


