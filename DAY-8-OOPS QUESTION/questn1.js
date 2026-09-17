class student {
    static count = 0;
    constructor(name, marks, rollno) {
        this.name = name;
        this.marks = marks;
        this.rollno = rollno;
        student.count++;
    }
    display() {
        console.log("roll no:",this.rollno);
        console.log("name:",this.name);
        console.log("marks:",this.marks);
        if (this.marks >= 50) {
            console.log("Result: Pass");
        }else {
            console.log("Result: Fail");
        }
        console.log("*******************");
        
    } 
    static displaystudents() {
        console.log(`Total number of students: ${student.count}`); 
}
}
let s1 = new student("Shivi", 65, 1);
let s2 = new student("happy", 35, 2);
let s3 = new student("unnati", 55, 3);
s1.display();
s2.display();
s3.display();
student.displaystudents();
