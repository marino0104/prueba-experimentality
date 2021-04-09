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

  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(queryParam=>{
      this.searchItem=queryParam.get('id');
      console.info(queryParam.get('id'))
      this.searchArray =[];

      this.products.getProducts('MCO1430').subscribe(productList=>{
        this.productItems=productList.results;
    })
    setTimeout(() => {
      this.productItems.forEach((product, i)=>{

        if(product.title.toLowerCase().includes(this.searchItem)){
          this.searchArray.push(product);
        }
      })

    }, this.timeToChargeItems);
    });

  }

}
