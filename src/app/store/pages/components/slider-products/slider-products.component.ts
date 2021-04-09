import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductsCategories, ProductsItems, Result } from '../../../interfaces/products';

@Component({
  selector: 'app-slider-products',
  templateUrl: './slider-products.component.html',
  styleUrls: ['./slider-products.component.css']
})
export class SliderProductsComponent implements OnInit {
  categories: ProductsCategories[];
  ramdomCategory: number;
  productListItems: Result[];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": false,
    "arrows": true,
    "nextArrow": "<div class='nav-btn-products next-slide-products'></div>",
    "prevArrow": "<div class='nav-btn-products prev-slide-products'></div>",
    "mobileFirst":true,
    'responsive': [
      {
        'breakpoint': 768,
         'settings': {
          'slidesToShow': 4
                }
              },
      {
        'breakpoint': 320,
         'settings': {
          'slidesToShow': 1
                }
              }
            ]
  }
    ;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((cats)=>{
      this.categories=cats;
      this.ramdomCategory=Math.floor(Math.random() * this.categories.length) + 1;
      this.productsService.getProducts(this.categories[this.ramdomCategory-1].id).subscribe((products)=>{
      this.productListItems=products.results.slice(0,10);
    })
    })
  }

}
