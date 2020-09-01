let products = [
{"name": "Prod1", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod2", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod3", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod4", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod5", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod6", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod7", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod8", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod9", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod10", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
];

let obj_list = [];

class ParentProduct {
    constructor(name) {
        this.name = name;
    }

    show_name() {
        console.log(`Name of this product is ${this.name}`);
    }
}

class Product extends ParentProduct {
    constructor(name, amount, price) {
        super(name);
        this.amount = amount;
        this.price = price;
    }
    show_price(currency) {
        console.log(`${this.name} price is ${this.price}`);
    }

    show_amount() {
        console.log(`${this.name} amount is ${this.amount}`);
    }

    calculate_total_value() {
        return this.price * this.amount;
    }
}

products.forEach(element => {
    element.amount = Math.round(Math.random() * element.amount.max);
    element.price = Math.random() * element.price.max;
    return element;

});

let summary_values = [];

products.forEach(element => {
    obj_list.push(new Product(element.name, element.amount, element.price));
    summary_values.push(element.amount * element.price);
});

fs = require('fs');
fs.writeFile('results_01.txt', JSON.stringify({
    "summary": summary_values,
    "products": products,
    "obj_list": obj_list
}), function (err) {
    if (err) return console.log(err);
    console.log("Saved");
});