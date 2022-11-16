import { Injectable } from '@nestjs/common';
import {Shopify} from '@shopify/shopify-api';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ProductsRepository {
  constructor(private readonly configService: ConfigService) {
  }
  async findAll(): Promise<any> {
    try{
      const client = new Shopify.Clients.Rest(
          this.configService.get<string>('products.shop'),
          this.configService.get<string>('products.token'),
      );
      const data = client.get({
        path: 'products',
      });
      const response = (await data);
      return response.body;      
    }catch(e){
        throw e;
    }
  }
}
