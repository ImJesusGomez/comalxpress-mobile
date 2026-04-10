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

// Creamos un cliente
const queryClient = new QueryClient();

export const ComalXpressApp = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Toast />
      </QueryClientProvider>
    </AuthProvider>
  );
};

// Componente separado para acceder al contexto
const RootNavigator = () => {
  const { token } = useAuthStore(); // ← reacciona a cambios
  return isTokenValid(token ?? '') ? (
    <MainStackNavigation />
  ) : (
    <AuthStackNavigation />
  );
};
