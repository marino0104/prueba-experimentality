import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../../store/services/products.service';
import { Result } from '../../../store/interfaces/products';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @ViewChild('searchTerm') searchTerm! : ElementRef<HTMLInputElement>;
  searchValue: string;
  productItems: any[];
  sugestItems: Result[];
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.products.getProducts('MCO1430').subscribe(productList=>{
        this.productItems=productList.results;
    })
  }
  searchProducts(){
    this.sugestItems=[];
    this.searchValue=this.searchTerm.nativeElement.value;
    if(this.searchValue.length>=3){
      this.productItems.forEach((product, i)=>{
        if(product.title.toLowerCase().includes(this.searchValue)){
          this.sugestItems.push(product);
        }
      })
    }
    this.sugestItems=this.sugestItems.slice(0,4)
  }
  eraseProducts(){
    const timeToErase=400
    setTimeout(() => {
      this.searchValue='';
      this.sugestItems=[];
    }, timeToErase);
  }
}
