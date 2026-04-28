import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useGetProducts } from '../hooks/getProducts';
import { ProductCard } from './ProductCard';

export const ProductsContainer = () => {
  const { data: products } = useGetProducts();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={item => item.id}
      columnWrapperStyle={styles.productsContainer}
    />
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    paddingBottom: 10,
  },
});
