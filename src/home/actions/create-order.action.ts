import comalXpressApi from '../../api/comalxpress.api';
import { OrderRequest } from '../../interfaces/order.request.interface';
import { Order } from '../../interfaces/order.response.interface';

export const createOrderAction = async (
  input: OrderRequest,
): Promise<Order> => {
  const { data } = await comalXpressApi.post('/orders', input);

  return data;
};
