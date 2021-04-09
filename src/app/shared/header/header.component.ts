import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openMenu(): void{
    document.querySelector('.header-inferior').classList.add('nav-active');
  }
  closeNav(): void{
    document.querySelector('.header-inferior').classList.remove('nav-active');
  }
  openSearch(): void{
    document.querySelector('.search-container').classList.add('search-active');
  }
  closeSearch(): void{
    document.querySelector('.search-container').classList.remove('search-active');
  }
}
