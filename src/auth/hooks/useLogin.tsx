import { useMutation } from '@tanstack/react-query';
import { loginAction } from '../actions/login.action';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/RootStackNavigation';
import { useAuthStore } from '../../store/auth.store';

export const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const { setAuth } = useAuthStore();

  return useMutation({
    mutationKey: ['login'],
    mutationFn: loginAction,
    onSuccess: data => {
      // Guardamos en Zustand
      setAuth(data.accessToken, data.user);
      // Navegamos
      navigation.navigate('SignupScreen');
    },
  });
};
