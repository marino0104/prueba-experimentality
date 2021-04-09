import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SliderHomeComponent } from './pages/components/slider-home/slider-home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderProductsComponent } from './pages/components/slider-products/slider-products.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    SliderHomeComponent,
    SliderProductsComponent

  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    HomeComponent,
    ProductListComponent,
  ]
})
export class StoreModule { }
