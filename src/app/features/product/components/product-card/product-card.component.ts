import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SharedState } from 'src/app/shared/store/shared.reducers';
import { addItemToCart } from 'src/app/shared/store/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() id!: number;
  @Output() onDelete = new EventEmitter();

  constructor(
    private productService: ProductService,
    private store: Store<SharedState>
  ) {}

  deleteProduct() {
    this.productService.delete(this.id).subscribe((response) => {
      this.onDelete.emit();
    });
  }

  addToCart() {
    this.store.dispatch(
      addItemToCart({
        product: { id: this.id, name: this.title, unitPrice: this.price },
        quantity: 1,
      })
    );
  }
}
