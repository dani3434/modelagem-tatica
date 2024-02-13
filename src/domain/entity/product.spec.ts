import Product from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100);
    }).toThrow("Id cannot be empty");
  });

  it("should throw error when Name is empty", () => {
    expect(() => {
      const product = new Product("123", "", 100);
    }).toThrow("Name cannot be empty");
  });

  it("should throw error when Price is empty", () => {
    expect(() => {
      const product = new Product("123", "Product 1", 0);
    }).toThrow("Price must be greater than zero");
  });

  it("should change name", () => {
    const product = new Product("123", "Product 1", 100);
    product.changeName("Bola");
    expect(product.name).toBe("Bola");
  });

  it("should change price", () => {
    const product = new Product("123", "Product 1", 100);
    product.changePrice(200);
    expect(product.price).toBe(200);
  });
});
