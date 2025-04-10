class Product {
    // this.name = name;
    // this.price = price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct = function () {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    caculateTotal = function (salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 25.22);
const product3 = new Product("Shoes", 100.00);

product1.displayProduct();
product2.displayProduct();
const total = product1.caculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);