import React from 'react';
import { Button, Text } from 'react-native';
import { useAuthStore } from '../../../store/auth.store';

// HomeScreen — ya no necesita leer appStorage directamente
export const HomeScreen = () => {
  const { user, logout } = useAuthStore();

  return (
    <>
      <Text>Bienvenido {user?.name}</Text>
      <Button title="Cerrar Sesión" onPress={logout} />
    </>
  );
};
