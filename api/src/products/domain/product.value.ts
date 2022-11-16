import { ProductEntity } from "./product.entity";

export class ProductValue implements ProductEntity{
    id: string;
    title: string;
    description: string;
    image: string;
    sku: string;
    price: number;
    barcode: string;
    constructor({id, title, description, image, sku, price, barcode}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.sku = sku;
        this.price = price;
        this.barcode = barcode;
    }
}