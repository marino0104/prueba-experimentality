import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {
  cart: number;
  constructor(private cartService: CartService) {

    this.cartService.currentCartItems$.subscribe(val=>{
      if(val){
        this.cart=val.length;

      }
      else{
        this.cart=0;
      }
    })
  }

  ngOnInit(): void {
  }

}
