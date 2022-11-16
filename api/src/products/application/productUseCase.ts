import { ProductI } from "src/types/products.types";
import { ProductRepository } from "../domain/product.repository";
import { ProductValue } from "../domain/product.value";

export class ProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {

    }

    async findAllProducts() {
        const data = await this.productRepository.findAll();
        return data['products'].map((product: ProductI) => {
            return new ProductValue({
                id: product.id,
                title: product.title,
                description: product.body_html,
                image: product.image.src,
                sku: product.variants[0].sku,
                price: product.variants[0].price,
                barcode: product.variants[0].barcode
            });
        });
    }

}
