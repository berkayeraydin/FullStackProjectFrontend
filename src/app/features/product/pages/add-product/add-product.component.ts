import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
  } from '@angular/forms';
  import { Component, OnInit } from '@angular/core';
  import { ProductService } from '../../services/product.service';
  import { CategoryService } from 'src/app/features/category/services/category.service';
  import { Category } from 'src/app/features/category/models/category';
  
  @Component({
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
  })
  export class AddProductComponent implements OnInit {
    addProductForm!: FormGroup;
    categories: Category[] = [];
    constructor(
      private formBuilder: FormBuilder,
      private productService: ProductService,
      private categoryService: CategoryService
    ) {}
    ngOnInit(): void {
      // formda gerekecek db bilgilerini çek / build form
      // kategoriler => veritabanın
      this.fetchCategories();
    }
  
    fetchCategories() {
      this.categoryService.getAll().subscribe((response: Category[]) => {
        this.categories = response;
        this.buildForm();
      });
    }
  
    submit() {
      this.addProductForm.markAllAsTouched();
      console.log(this.addProductForm.value);
    }
  
    buildForm() {
      this.addProductForm = this.formBuilder.group({
        productName: new FormControl('', [Validators.required]),
        supplierId: new FormControl(0),
        categoryId: new FormControl(0),
      });
    }
  }
  