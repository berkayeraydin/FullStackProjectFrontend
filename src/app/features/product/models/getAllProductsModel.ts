// CTRL + ALT + V
export interface Category {
    categoryId: number;
    categoryName: string;
    description: string;
  }
  
  export interface GetAllProductsModel {
    id: number;
    name: string;
    unitPrice: number;
    category: Category;
  }
  