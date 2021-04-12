import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Result } from '../../../store/interfaces/products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems:Result[]=[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentCartItems$.subscribe(cart=>{
      if(cart && cart.length){
        this.cartItems=cart;
      }
    })
  }

}
