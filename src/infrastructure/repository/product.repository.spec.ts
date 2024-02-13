import { Sequelize } from "sequelize";
import ProductModel from "../db/sequelize/model/product.model";

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
});
