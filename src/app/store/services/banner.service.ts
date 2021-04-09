import { Injectable } from '@angular/core';
import { Banner } from '../interfaces/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private banners: Banner[]=[
    {
      bigImage: '../../../../../assets/img/banner-principal.jpg',
      smallImage: '../../../../../assets/img/banner-principal-mobile.jpg'
    },
    {
      bigImage: '../../../../../assets/img/banner-principal.jpg',
      smallImage: '../../../../../assets/img/banner-principal-mobile.jpg'
    }
  ]

  constructor() { }
  getBanners(): Banner[]{
    return this.banners;
  }
}
