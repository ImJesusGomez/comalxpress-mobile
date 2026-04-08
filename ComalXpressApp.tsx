import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';

export const ComalXpressApp = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};
