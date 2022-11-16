import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsService } from './infrastructure/products.service';
import { ProductsController } from './infrastructure/products.controller';
import { ProductsRepository } from './infrastructure/products.repository';

@Module({
  imports: [ConfigModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository]
})
export class ProductsModule {}
