import { useMutation } from '@tanstack/react-query';
import { loginAction } from '../actions/login.action';
import { useAuthStore } from '../../store/auth.store';
import { ToastMessage } from '../../components/ToastMessage';

export const useLogin = () => {
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationKey: ['login'],
    mutationFn: loginAction,
    onSuccess: data => {
      setAuth(data.accessToken, data.user); // guarda en estado + storage

      ToastMessage({
        type: 'success',
        title: 'Inicio de Sesión exitoso',
      });
      // ← sin navigate, RootNavigator redirige solo al detectar el token
    },
    onError: () =>
      ToastMessage({
        type: 'error',
        title: 'No se pudo iniciar sesión',
        message: 'Credenciales Inválidas o Incorrectas',
      }),
  });
};
