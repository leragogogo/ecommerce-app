export class Pet {
    id;
    name;
    description;
    price;
    category;
    stock;
    imagePath;
    constructor(id, name, description, price, category, stock, imagePath) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.imagePath = imagePath;
    }
}