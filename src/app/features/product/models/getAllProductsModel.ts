// CTRL + ALT + V
import { Category } from '../../category/models/category';
import { Supplier } from '../../supplier/models/supplier';

export interface GetAllProductsModel {
  id: number;
  name: string;
  unitPrice: number;
  unitsInStock: number;
  discontinued: number;
  category: Category;
  supplier: Supplier;
}
