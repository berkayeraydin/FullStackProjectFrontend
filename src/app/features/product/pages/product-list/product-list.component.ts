import { Component } from '@angular/core';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // Database DEMOSU
  productList: any[] = [
    {
      id: 1,
      title: 'Laptop',
      description: 'HP Laptop',
      price: 30000,
      imgUrl:
        'https://www.hpstore.com.tr/hp-laptop-15-fg5012nt-intel-core-i5-1235u-8gb-ram-256gb-ssd-intel-iris-xe-graphics-156-inc-fhd-freedos-gumus-6g0c1ea-13468-17-B.jpg',
    },
    {
      id: 2,
      title: 'Bisiklet',
      description: 'Ümit Bisiklet',
      price: 15000,
      imgUrl:
        'https://cdn.akakce.com/z/rookie/rookie-venti-20-jant-21-vites-amortisorlu-cocuk-i.jpg',
    },
  ];
}
