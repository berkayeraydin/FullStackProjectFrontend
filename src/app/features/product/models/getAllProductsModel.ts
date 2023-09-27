// CTRL + ALT + V
import { Category } from '../../category/models/category';

export interface GetAllProductsModel {
  id: number;
  name: string;
  unitPrice: number;
  unitsInStock: number;
  category: Category;
}
