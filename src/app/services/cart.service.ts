import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Movie from '../models/movie';
import Orders from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  cartTotalsum;
  cartSource = new Subject<Orders[]>();
  selectedMovieSource = new Subject<Movie>();
  selectedItemInCartSource = new Subject<Orders>();
  orderList: Subject<Orders[]> = new Subject<Orders[]>();
  movieIncart: Orders;

  increaseCartItem(item: Movie) {
    this.movieIncart = this.cartItems.find((m) => m.Id === item.Id);
    console.log(this.movieIncart);
    this.movieIncart.Quantity += 1;
    this.movieIncart.totalPrice = this.movieIncart.Price * this.movieIncart.Quantity;
    return this.movieIncart;
  }
  addItemToCart(selectedMovie: Movie) {
    this.movieIncart = this.cartItems.find((m) => m.Id === selectedMovie.Id);
    if (!this.movieIncart) {
      this.cartItems.push({
        ...selectedMovie,
        Quantity: 1,
        totalPrice: selectedMovie.Price,
      });
      return;
    }
    this.increaseCartItem(this.movieIncart);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItemFromCart() {
    this.cartItems = this.cartItems.filter((ritem) =>
      this.movieIncart.Id !== ritem.Id);
      return this.cartItems;
  }

  calcTotalPrice() {
    let calcPrice = 0;
    this.cartItems.forEach((e) => {
    calcPrice += e.Quantity * e.Price;
    }),
    this.cartTotalsum = calcPrice
    console.log('Current cart sum: ' + this.cartTotalsum + ' sek')
    };

  decreaseCartItem(item: Orders) {
    this.movieIncart = item;
    if (this.movieIncart.Quantity >= 2) {
      this.movieIncart.Quantity--;
      this.movieIncart.totalPrice =
        this.movieIncart.Price * this.movieIncart.Quantity;
      console.log(this.movieIncart.Id + ' is removed');
      return this.movieIncart;
    } else {
      this.cartItems = this.cartItems.filter((ritem) =>
      this.movieIncart.Id !== ritem.Id);
      this.removeItemFromCart();
    }
  }
}
