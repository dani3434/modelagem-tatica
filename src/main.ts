import adress from "./domain/entity/adress";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("c1", "John");
const adressRS = new adress("street", 123, "zip", "city");
customer.Address = adressRS;
customer.activate();

const item1 = new OrderItem("i1", "Item 1", 10, "p1", 2);
const item2 = new OrderItem("i2", "Item 2", 20, "p2", 2);

const order = new Order("o1", "c1", [item1, item2]);
