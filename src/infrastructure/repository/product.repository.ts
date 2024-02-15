import Product from "../../domain/entity/product";
import RepositoryInterface from "../../domain/repository/repository-interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements RepositoryInterface<Product> {
  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  }

  async update(product: Product): Promise<void> {
    await ProductModel.update(
      {
        name: product.name,
        price: product.price,
      },
      {
        where: {
          id: product.id,
        },
      }
    );
  }

  async find(id: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}
