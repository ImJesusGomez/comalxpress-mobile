import { useMutation } from '@tanstack/react-query';
import { OrderRequest } from '../../interfaces/order.request.interface';
import { createOrderAction } from '../actions/create-order.action';
import { ToastMessage } from '../../components/ToastMessage';
import { useOrder } from '../../store/order.store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { MainStackParams } from '../../navigation/MainStackNavigation';
import { queryClient } from '../../../ComalXpressApp';

export const useCreateOrder = () => {
  const { clearOrder } = useOrder();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  return useMutation({
    mutationFn: (input: OrderRequest) => createOrderAction(input),
    onSuccess: () => {
      ToastMessage({
        type: 'success',
        title: 'Pedido enviado correctamente.',
      });

      clearOrder();

      navigation.pop();

      queryClient.invalidateQueries({
        queryKey: ['my-orders'],
      });
    },
  });
};
