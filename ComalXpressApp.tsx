import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './src/store/auth.store';

// Creamos un cliente
const queryClient = new QueryClient();

export const ComalXpressApp = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </QueryClientProvider>
    </AuthProvider>
  );
};
