class Product {

    constructor(productId, productName, price, quantity) {

        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;

    }
    calculateTotalPrice() {

        return this.price * this.quantity;

    }
    updateQuantity(newQuantity) {

        this.quantity = newQuantity;

    }
    display() {

        console.log(`Product ID: ${this.productId}`);
        console.log(`Product Name: ${this.productName}`);
        console.log(`Price: ${this.price}`);
        console.log(`Quantity: ${this.quantity}`);

    }

}
let product1 = new Product(101, "Laptop", 800, 2);
product1.display();
product1.updateQuantity(3);
product1.display();

console.log("Total Price: " + product1.calculateTotalPrice());
