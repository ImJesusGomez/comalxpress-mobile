import { useMutation } from '@tanstack/react-query';
import { payOrderAction } from '../actions/pay-order.action';
import { ToastMessage } from '../../components/ToastMessage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../navigation/MainStackNavigation';
import { queryClient } from '../../../ComalXpressApp';

export const usePayOrder = (orderId: string) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  return useMutation({
    mutationKey: ['pay-order', { orderId }],
    mutationFn: () => payOrderAction(orderId),
    onSuccess: () => {
      ToastMessage({
        type: 'success',
        title: 'Pago Exitoso',
      });

      navigation.pop();

      queryClient.invalidateQueries({
        queryKey: ['my-orders'],
      });
    },
  });
};
