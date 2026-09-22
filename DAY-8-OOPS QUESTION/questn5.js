class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    calculateFare() {
        console.log("Fare:", this.distance * 10);
    }

    static platformName() {
        console.log("Booking Platform: QuickRide");
    }
}

class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        console.log("Car Fare: Rs.", this.distance * 15);
    }
}

class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        console.log("Bike Fare: Rs.", this.distance * 8);
    }
}

Vehicle.platformName();

let c1 = new Car("CAR101", "Rahul", 20);
let b1 = new Bike("BIKE201", "Amit", 15);

c1.calculateFare();
b1.calculateFare();