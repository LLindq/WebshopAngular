import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Orders from '../models/orders';
import { Subject } from 'rxjs';
import postOrders from '../models/postOrders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList: Subject<Orders[]> = new Subject<Orders[]>();

 constructor(private http: HttpClient) { }

 createOrder(order: postOrders) {
   console.log(order);
   this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', {
     companyId: 31337,
     created: order.created,
     createdBy: order.createdBy,
     paymentMethod: order.paymentMethod,
     totalPrice: order.totalPrice,
     status: order.status,
     orderRows: order.products,
   })

   .subscribe((data) => {
     console.log(data)
   });
 }
}
