export class Pet {
    id;
    name;
    description;
    price;
    category;
    imagePath;
    constructor(id, name, description, price, category, imagePath) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imagePath = imagePath;
    }
}