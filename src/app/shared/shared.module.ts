import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchInputComponent],
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
