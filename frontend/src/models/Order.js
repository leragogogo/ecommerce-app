export class OrderItem {
    name;
    image;
    quantity;
    constructor(name, image, quantity) {
        this.name = name;
        this.image = image;
        this.quantity = quantity;
    }
}

export class Order {
    id;
    orderItems;
    totalPrice;
    createdAt;
    constructor(id, orderItems, totalPrice, createdAt){
        this.id = id;
        this.orderItems = orderItems;
        this.totalPrice = totalPrice;
        this.createdAt = createdAt;
    }
}
