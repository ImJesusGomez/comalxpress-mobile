import comalXpressApi from '../../api/comalxpress.api';
import { Product } from '../../interfaces/product.interface';

export const getProductsAction = async (): Promise<Product[]> => {
  const { data } = await comalXpressApi.get('/products');

  return data;
};
