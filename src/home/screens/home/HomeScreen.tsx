import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuthStore } from '../../../store/auth.store';
import { HeroBanner } from '../../components/HeroBanner';
import { HomeHeader } from '../../components/HomeHeader';

import { ProductsContainer } from '../../components/ProductsContainer';

// HomeScreen — ya no necesita leer appStorage directamente
export const HomeScreen = () => {
  const { user } = useAuthStore();

  return (
    <>
      <View style={styles.homeContainer}>
        <HomeHeader userName={user!.name} />
        <HeroBanner />
        <ProductsContainer />
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
