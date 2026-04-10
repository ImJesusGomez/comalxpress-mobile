import { useMutation } from '@tanstack/react-query';
import { ToastMessage } from '../../components/ToastMessage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../navigation/AuthStackNavigation';
import { signupAction } from '../actions/signup.action';

export const useSignup = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  return useMutation({
    mutationKey: ['signup'],
    mutationFn: signupAction,
    onSuccess: () => {
      // Mostramos un mensaje de éxito
      ToastMessage({
        type: 'success',
        title: 'Cuenta creada exitosamente',
        message: 'Inicia sesión ahora para acceder.',
      });

      // Navegamos a la pantalla de login
      navigation.navigate('LoginScreen');
    },
  });
};
