import { Sequelize } from "sequelize";
import ProductModel from "../db/sequelize/model/product.model";
import Product from "../../domain/entity/product";
import ProductRepository from "./product.repository";

describe("Product repository tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    ProductModel.init({}, { sequelize });
    await sequelize.sync({ force: true });
  });
  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const repository = new ProductRepository();
    const product = new Product("123", "Product 1", 10);
    await repository.create(product);

    const productsModel = await ProductModel.findOne({
      where: { id: "123" },
    });

    expect(productsModel.toJSON().id).toEqual(123);
  });

  it("should update a product", async () => {
    const repository = new ProductRepository();
    const product = new Product("31", "Product 1", 10);
    await repository.create(product);

    const productsModel = await ProductModel.findOne({
      where: { id: "31" },
    });

    console.log(productsModel.toJSON());
    console.log("Product name:", product.name);
    console.log("Product price:", product.price);

    expect(productsModel.toJSON().name).toEqual("Product 1");

    product.changeName("Product 2");
    product.changePrice(20);
    await repository.update(product);

    const productsModel2 = await ProductModel.findOne({
      where: { id: "31" },
    });
    expect(productsModel2.toJSON().name).toEqual("Product 2");
  });
});
