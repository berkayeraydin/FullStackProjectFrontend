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
  import { ActivatedRoute, Router } from '@angular/router';
  import { GetAllProductsModel } from '../../models/getAllProductsModel';
  
  @Component({
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
  })
  export class AddProductComponent implements OnInit {
    addProductForm!: FormGroup;
    categories: Category[] = [];
    suppliers: Supplier[] = [];
    productToEdit!: GetAllProductsModel;
    constructor(
      private formBuilder: FormBuilder,
      private productService: ProductService,
      private categoryService: CategoryService,
      private supplierService: SupplierService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {}
    ngOnInit(): void {
      // formda gerekecek db bilgilerini çek / build form
      // kategoriler => veritabanın
      this.fetchCategories();
      this.fetchSuppliers();
      
      this.activatedRoute.params.subscribe((parameters) => {
        if (parameters['id']) {
          // ilgili id ile productin detaylarını çek.
          // bu detaylar ile birlikte formu oluştur.
          this.productService.getById(parameters['id']).subscribe((response) => {
            this.productToEdit = response;
            this.buildForm();
          });
        } else {
          this.buildForm();
        }
      });
  
      // sayfa urlinde id gönderilmişse => update
      // gönderilmemişse => add

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
      if (this.productToEdit) {
      // TODO: Aradan sonra backend-frontend yazalım..
      this.productService
        .update(this.addProductForm.value)
        .subscribe((response) => {
          alert('Ürün başarıyla güncellendi..');
          this.router.navigateByUrl('/product');
        });
      } else {
      this.productService
        .add(this.addProductForm.value)
        .subscribe((response) => {
          alert('Ürün başarıyla eklendi');
          this.router.navigateByUrl('/product');
          });
        }
    }
  
    buildForm() {
      this.addProductForm = this.formBuilder.group({
        productName: new FormControl(this.productToEdit?.name || '', [
          Validators.required,
        ]),
        supplierId: new FormControl(
          this.productToEdit?.supplier.supplierId || 0,
          [Validators.min(1)]
        ),
        categoryId: new FormControl(
          this.productToEdit?.category.categoryId || 0,
          [Validators.min(1)]
        ),
      });
    }
  }
  