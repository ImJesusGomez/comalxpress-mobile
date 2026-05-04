import { useQuery } from '@tanstack/react-query';
import { getMyOrdersAction } from '../actions/get-my-orders.action';
import { Order } from '../../interfaces/order.response.interface';

export const useGetMyOrders = () => {
  return useQuery<Order[]>({
    queryKey: ['my-orders'],
    queryFn: getMyOrdersAction,
  });
};
