import { Subject } from 'rxjs';
import Orders from 'src/app/models/orders';

export default interface IOrder {
  orderList: Subject<Orders[]>;
  showOrders(): void;
  createOrder(order);
}
