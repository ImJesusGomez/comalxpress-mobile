import comalXpressApi from '../../api/comalxpress.api';
import { Order } from '../../interfaces/order.response.interface';

export const payOrderAction = async (orderId: string): Promise<Order> => {
  const { data } = await comalXpressApi.patch(`/orders/${orderId}/pay`);
  return data;
};
