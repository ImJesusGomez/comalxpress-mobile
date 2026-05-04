export interface OrderRequest {
  items: Item[];
}

export interface Item {
  productId: string;
  quantity: number;
  extras?: string[];
  notes?: string;
}
