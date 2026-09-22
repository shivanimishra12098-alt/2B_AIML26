class product{
    constructor(productId,productName,productPrice){
        this.productId = productId;
        this.name = productName;
        this.price = productPrice;
    }
    getDiscountprice(discount){
        let discountPrice = this.price - (this.price * discount / 100);
        return discountPrice;
    }
    static compareProducts(product1, product2){
        if(product1.price < product2.price){
            console.log("higher prize product is: " + product2.productName);
        }
        else{
            console.log("higher prize product is: " + product1.productName);
            
        }
    }
    display(){
            console.log("Product ID: " + this.productId);
            console.log("Product Name: " + this.name);
            console.log("Product Price: " + this.price);
        }
    
}
class E extends product{
    constructor(productId,productName,productPrice,warranty){
        super(productId,productName,productPrice);
        this.warranty = warranty;
    } 
    display(){
        super.display();
        console.log("Warranty: " + this.warranty);
    }
}
let product1 = new product(101,"Laptop",50000);
let product2 = new product(102,"Mobile",30000);
console.log("Discounted price of product1: " + product1.getDiscountprice(10));
product.compareProducts(product1,product2); 
let E1 = new E(103,"Smart TV",100000,2);
E1.display();