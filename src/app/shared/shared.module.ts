import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { RouterModule } from '@angular/router';
import { CartButtonComponent } from './components/cart-button/cart-button.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchInputComponent,
    CartButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
