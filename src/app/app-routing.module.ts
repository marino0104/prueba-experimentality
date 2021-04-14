import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './store/pages/home/home.component';
import { ProductListComponent } from './store/pages/product-list/product-list.component';
import { NotFoundComponent } from './store/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: ProductListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
