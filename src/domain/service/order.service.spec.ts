import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order unit tests", () => {
  it("should place a order", () => {
    const customer = new Customer("c1", "John");
    const orderItem = new OrderItem("i1", "Item 1", 30, "p1", 2);
    const order = OrderService.placeOrder(customer, [orderItem]);

    expect(customer.rewardPoints).toBe(30);
    expect(order.total()).toBe(60);
  });

  it("should get total orders", () => {
    const orderItem = new OrderItem("i1", "Item 1", 30, "p1", 2);
    const orderItem2 = new OrderItem("i2", "Item 2", 20, "p2", 2);
    const order = new Order("o1", "c1", [orderItem]);
    const order2 = new Order("o2", "c1", [orderItem2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(100);
  });
});
