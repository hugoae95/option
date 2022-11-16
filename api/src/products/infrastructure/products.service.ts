import { Injectable } from '@nestjs/common';
import { ProductUseCase } from '../application/productUseCase';
import { ProductsRepository } from '../infrastructure/products.repository'

@Injectable()
export class ProductsService {
  constructor(private _productRepository: ProductsRepository){}
  async findAll() {
     const productUseCase = new ProductUseCase(this._productRepository);
     return await productUseCase.findAllProducts();
  }
}
