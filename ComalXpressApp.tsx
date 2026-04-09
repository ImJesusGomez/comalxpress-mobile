import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Creamos un cliente
const queryClient = new QueryClient();

export const ComalXpressApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
