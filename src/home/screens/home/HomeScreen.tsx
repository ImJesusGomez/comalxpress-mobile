import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '../../../store/auth.store';
import { HeroBanner } from '../../components/HeroBanner';
import { HomeHeader } from '../../components/HomeHeader';

// HomeScreen — ya no necesita leer appStorage directamente
export const HomeScreen = () => {
  const { user, logout } = useAuthStore();

  return (
    <>
      <View style={styles.homeContainer}>
        <HomeHeader userName={user!.name} />
        <HeroBanner />
        <Text>Bienvenido {user?.name}</Text>
        <Button title="Cerrar Sesión" onPress={logout} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
