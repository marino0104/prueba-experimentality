import { Injectable } from '@angular/core';
import { Result } from '../../store/interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Result[]=[];
  constructor() { }
  setProductCart(product: Result){
    this.cartItems.push(product);
    console.info(this.cartItems)
  }
}
