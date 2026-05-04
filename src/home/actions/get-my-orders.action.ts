import comalXpressApi from '../../api/comalxpress.api';
import { Order } from '../../interfaces/order.response.interface';

export const getMyOrdersAction = async (): Promise<Order[]> => {
  const { data } = await comalXpressApi.get('/orders/my-orders');

  return data;
};
