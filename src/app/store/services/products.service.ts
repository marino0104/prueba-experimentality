import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsCategories } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = 'https://api.mercadolibre.com/sites/MCO/';
  private categoriesParam='categories';
  // private apiUrl: string = 'https://api.mercadolibre.com/sites/MCO/search?category=MCO118376';

  constructor(private http: HttpClient) { }
  getProducts(catId: string): Observable<any>{
    const url=`${this.apiUrl}/search?category=${catId}`;
    return this.http.get<any>(url);
  }
  getCategories(): Observable<ProductsCategories[]>{
    const urlCategories=`${this.apiUrl}/${this.categoriesParam}`;
    return this.http.get<ProductsCategories[]>(urlCategories);
  }
}
