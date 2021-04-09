import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Result } from '../../interfaces/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchItem: string;
  productItems: any[];
  searchArray: Result[]=[];
  timeToChargeItems:number=500;

  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService) { }
  ngOnInit(): void {
    this.searchArray =[];
    this.activatedRoute.paramMap.subscribe(params=>{
      this.searchItem=params.get('id');
    });
    this.products.getProducts('MCO1430').subscribe(productList=>{
      this.productItems=productList.results;
  })
  setTimeout(() => {
    this.productItems.forEach((product, i)=>{
      // console.info(product);
      console.info(this.searchItem);
      console.info(this.searchArray)
      if(product.title.toLowerCase().includes(this.searchItem)){
        this.searchArray.push(product);
      }
    })

  }, this.timeToChargeItems);
  console.info(this.searchArray)
  }

}
