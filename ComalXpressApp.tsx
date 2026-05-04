import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { AuthStackNavigation } from './src/navigation/AuthStackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  AuthProvider,
  isTokenValid,
  useAuthStore,
} from './src/store/auth.store';
import { MainStackNavigation } from './src/navigation/MainStackNavigation';
import { OrderProvider } from './src/store/order.store';

// Creamos un cliente
export const queryClient = new QueryClient();

export const ComalXpressApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <OrderProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
          <Toast />
        </OrderProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

// Componente separado para acceder al contexto
const RootNavigator = () => {
  const { token } = useAuthStore();
  return token && isTokenValid(token) ? (
    <MainStackNavigation />
  ) : (
    <AuthStackNavigation />
  );
};
