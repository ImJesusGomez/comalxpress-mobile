import { Extra } from './extra.interface';

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  isActiva: boolean;
  extras: Extra[];
}
