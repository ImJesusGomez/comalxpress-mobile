import { Product } from './product.interface';

export interface ProductToOrder {
  product: Product;
  quantity: number;
  extras?: string[];
  notes?: string;
}
