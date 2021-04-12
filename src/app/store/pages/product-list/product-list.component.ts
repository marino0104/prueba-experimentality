import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Result } from '../../interfaces/products';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchItem: string;
  productItems: any[];
  searchArray: Result[]=[];
  cartItems: Result[]=[];
  timeToChargeItems:number=500;

  constructor(private activatedRoute: ActivatedRoute,
              private products: ProductsService,
              private cart:CartService) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(queryParam=>{
      this.searchItem=queryParam.get('id');
      this.searchArray =[];

      this.products.getProducts('MCO1430').subscribe(productList=>{
        this.productItems=productList.results;
    })
    setTimeout(() => {
      this.productItems.forEach(product=>{

        if(product.title.toLowerCase().includes(this.searchItem)){
          this.searchArray.push(product);
        }
      })

    }, this.timeToChargeItems);
    });
    this.cart.currentCartItems$.subscribe(cartCurrent=>{
      this.cartItems=cartCurrent;
      if(this.cartItems && this.cartItems.length){
        this.searchArray.forEach(searchItem=>{
          let itemInCart=0;
          this.cartItems.forEach(cartItem=>{
            if(searchItem.id===cartItem.id){
              itemInCart+=1;
            }
          })
          if(itemInCart>0){
            searchItem.inCart=true;
          }
        })
      }
    })
  }
  saveToCart=(product: Result)=>{
    this.cart.setProductCart(product);
  }

}
