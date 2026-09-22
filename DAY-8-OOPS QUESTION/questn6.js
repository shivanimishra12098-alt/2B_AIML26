class Person {
    static count = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        Person.count++;
    }

    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }

    static displayCount() {
        console.log("Total Persons:", Person.count);
    }
}

class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }

    displayDetails() {
        console.log("\nDoctor Details:");
        super.displayDetails();
        console.log("Specialization:", this.specialization);
        console.log("Consultation Fee: Rs.", this.consultationFee);
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        console.log("\nPatient Details:");
        super.displayDetails();
        console.log("Disease:", this.disease);
        console.log("Room No:", this.roomNo);
    }
}

let d1 = new Doctor(101, "happy", 45, "Cardiologist", 1000);
let d2 = new Doctor(102, "Dr. Verma", 40, "Dentist", 800);

let p1 = new Patient(201, "shivi", 25, "Fever", 101);
let p2 = new Patient(202, "Aman", 30, "Fracture", 102);

d1.displayDetails();
d2.displayDetails();

p1.displayDetails();
p2.displayDetails();

Person.displayCount();