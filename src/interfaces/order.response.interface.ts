import { Extra } from './extra.interface';
import { User } from './user.interface';

export interface Order {
  id: string;
  ticketNumber: null | number;
  status: string;
  isPaid: boolean;
  createdAt: Date;
  total: number;
  customer: Omit<User, 'lastName' | 'email'>;
  items: Item[];
}

export interface Item {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  notes: string;
  extras: Extra[];
  subtotal: number;
}
