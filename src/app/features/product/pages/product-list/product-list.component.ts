import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetAllProductsModel } from '../../models/getAllProductsModel';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // Database DEMOSU
  productList: GetAllProductsModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService
      .getAll()
      .subscribe((response: GetAllProductsModel[]) => {
        this.productList = response;
      });
  }
}
