import { useQuery } from '@tanstack/react-query';
import { getProductsAction } from '../actions/get-products.action';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['getProducts'],
    queryFn: getProductsAction,
  });
};
