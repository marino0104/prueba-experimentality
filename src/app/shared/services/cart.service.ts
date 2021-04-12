import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Result } from '../../store/interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart= new BehaviorSubject<Array<Result>>(null);
  public currentCartItems$=this.cart.asObservable()
  cartItems: any[]=[];
  cartNumber: number;

  constructor() {}

  public setProductCart = (product: Result) => {
    if(this.cartItems.length){
      let itemExists=0;
      this.cartItems.forEach(cartItem=>{
        if(product.id===cartItem.id){
          itemExists+=1
        }
      })
      if(itemExists===0){
        this.cartItems.push(product);
        this.cartNumber=this.cartItems.length;
        this.cart.next(this.cartItems);
      }else{
        return;
      }
    }else{
      this.cartItems.push(product);
      this.cartNumber=this.cartItems.length;
      this.cart.next(this.cartItems);
    }
  }
}
