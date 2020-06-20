import { Injectable } from '@angular/core';
import { IDataRetrieval } from './IDataRetrieval';
import { Subject } from 'rxjs';
import Orders from '../models/orders';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataretrievalService implements IDataRetrieval {
  theDatabase: Subject<Orders[]> = new Subject<Orders[]>();

  constructor(private http: HttpClient) { }

  getDatabase(): void {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=31337')
    .subscribe((data: any) => {
      const orderApi: Orders[] = data.map(orders => {
        const myOrders = new Orders();
        myOrders.Id = orders.id;
        myOrders.companyId = orders.companyId;
        myOrders.created = orders.created;
        myOrders.createdBy = orders.createdBy;
        myOrders.paymentMethod = orders.paymentMethod;
        myOrders.totalPrice = orders.totalPrice;
        myOrders.status = orders.status;
        myOrders.products = orders.orderRows;
        return myOrders;
      })
      this.theDatabase.next(orderApi);
    })
  }
}


