import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrow("Id cannot be empty");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("34", "", []);
    }).toThrow("CustomerId cannot be empty");
  });

  it("should throw error when Items is empty", () => {
    expect(() => {
      let order = new Order("34", "12", []);
    }).toThrow("Items cannot be empty");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 10, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 10, "p2", 2);
    const order = new Order("o1", "c1", [item, item2]);

    expect(order.total()).toBe(40);
  });

  it("should check if the qtd item is greater than zero", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 10, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrow("Quantity must be greater than zero");
  });
});
