import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../services/banner.service';
import { Banner } from '../../../interfaces/banner';


@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {
  banners: Banner[]=[];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": false,
    "dots": true,
    "arrows": true,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "mobileFirst":true};
  constructor( private _bannerService: BannerService) { }

  ngOnInit(): void {
    this.banners=this._bannerService.getBanners();

  }

}
