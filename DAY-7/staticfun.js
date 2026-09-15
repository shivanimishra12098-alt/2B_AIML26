class student {
    static Fname = "shivi";
    static Lname = "mishra";

    display() {
        console.log(student.Fname);
        console.log(student.Lname);
    }
}

let obj = new student();

obj.display();