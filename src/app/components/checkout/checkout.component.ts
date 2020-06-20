import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import Orders from 'src/app/models/orders';
import postOrders from 'src/app/models/postOrders';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart: Orders[] = [];
  cartItems;
  movieIncart: Orders;
  orders;
  orderList: postOrders[] = [];
  purchasePrice;
  payments: string[] = ['Mastercard', 'Visa', 'Paypal']

  constructor(
    private fb: FormBuilder,
    private CartService: CartService,
    private order: OrderService,
    ) { }

  ngOnInit(): void {
    this.CartService.cartSource.subscribe((items: Orders[]) => {
      this.cart = items;
    });
    this.cart = this.CartService.getCartItems();
    console.log(this.cart)
    this.CartService.calcTotalPrice();
    this.purchasePrice = this.CartService.cartTotalsum;
  }

  decreaseFromCart(item: Orders) {
    this.CartService.decreaseCartItem(item);
    this.CartService.cartSource.subscribe((items: Orders[]) => {
      this.cart = items;
    });
    this.cart = this.CartService.getCartItems();
    this.CartService.calcTotalPrice();
    this.purchasePrice = this.CartService.cartTotalsum;
  }

  increaseItemInCart(item: Orders) {
    this.CartService.increaseCartItem(item);
    console.log(`${item.Id}  is increased by 1`);
    this.CartService.calcTotalPrice();
    this.purchasePrice = this.CartService.cartTotalsum;
  }

  checkoutForm = this.fb.group({

    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    paymentMethod: ['', [Validators.required]],
  });
  get name() {
    return this.checkoutForm.get('name')
  }
  get email() {
    return this.checkoutForm.get('email')
  }
  get paymentMethod() {
    return this.checkoutForm.get('paymentMethod')
  }

  /// Ändrar värdet i dropdownen för betalningsmetod
  changePayment(e) {
    this.paymentMethod.setValue(e.target.value, {
      onlySelf: true
    })
  }

  placeOrder() {

    const customerDetails = this.checkoutForm.value;
    const orderDate = new Date();

    const newOrder = {
      orderId: 10,
      companyId: 31337,
      createdBy: customerDetails.email,
      created: orderDate,
      paymentMethod: customerDetails.paymentMethod,
      totalPrice: this.purchasePrice,
      status: 0,
      products: []
    };

    const detailsProducts = this.cart.map((movie) => {
      return { productId: movie.Id, amount: movie.Quantity, orderId: 123 };
    });

    detailsProducts.forEach((orderedProduct) => {
      newOrder.products.push(orderedProduct);
    });

    console.log(newOrder);
    console.log(this.order)
    this.order.createOrder(newOrder);

    this.CartService.calcTotalPrice();
    this.purchasePrice = this.CartService.cartTotalsum;
    console.log(this.checkoutForm.value)
    console.log(this.cart)
  }
}
