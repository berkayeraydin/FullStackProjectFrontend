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
  import { SupplierService } from 'src/app/features/supplier/services/supplier.service';
  import { Supplier } from 'src/app/features/supplier/models/supplier';
  import { Router } from '@angular/router';
  
  @Component({
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
  })
  export class AddProductComponent implements OnInit {
    addProductForm!: FormGroup;
    categories: Category[] = [];
    suppliers: Supplier[] = [];
    constructor(
      private formBuilder: FormBuilder,
      private productService: ProductService,
      private categoryService: CategoryService,
      private supplierService: SupplierService,
      private router: Router
    ) {}
    ngOnInit(): void {
      // formda gerekecek db bilgilerini çek / build form
      // kategoriler => veritabanın
      this.fetchCategories();
      this.fetchSuppliers();
      this.buildForm();
    }
  
    fetchSuppliers() {
      this.supplierService.getAll().subscribe((response: Supplier[]) => {
        this.suppliers = response;
      });
    }

    fetchCategories() {
      this.categoryService.getAll().subscribe((response: Category[]) => {
        this.categories = response;
      });
    }
  
    submit() {
      this.addProductForm.markAllAsTouched();
      if (this.addProductForm.invalid) {
        alert('Validasyon hatası');
        return;
      }
      this.productService.add(this.addProductForm.value).subscribe((response) => {
        alert('Ürün başarıyla eklendi');
        this.router.navigateByUrl('/product');
      });
    }
  
    buildForm() {
      this.addProductForm = this.formBuilder.group({
        productName: new FormControl('', [Validators.required]),
        supplierId: new FormControl(0, [Validators.min(1)]),
        categoryId: new FormControl(0, [Validators.min(1)]),
      });
    }
  }
  