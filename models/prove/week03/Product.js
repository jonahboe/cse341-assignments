const products = [];

module.exports = class Product {
    constructor(tags, imageUrl, price, name, id, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.id = id;
        this.description = description;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }

    static findById(id, cb) {
       const product = products.find(p => p.id === id);
       cb(product);
    }
};