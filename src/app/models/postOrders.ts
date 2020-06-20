import Orders from '../models/orders';

export default class postOrders {
  companyId: number;
  createdBy: string;
  created: Date;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  products: Array<Orders>;
}

