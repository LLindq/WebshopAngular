export default class Orders {
  Id?: number;
  companyId: number;
  Name?: string;
  created: Date;
  createdBy: string;
  paymentMethod: string;
  ImageUrl?: string;
  Price?: number;
  totalPrice: number;
  cartTotalsum?: number;
  status: number;
  Quantity?: number;
  Total?: number;
  products: Array<Orders>;

}

