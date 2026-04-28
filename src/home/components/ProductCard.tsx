import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Product } from '../../interfaces/product.interface';
import Ionicons from '@react-native-vector-icons/ionicons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productPrice}>${product.basePrice}</Text>
        <Text style={styles.productName}>{product.name}</Text>
      </View>
      <Pressable style={styles.addButton}>
        <Ionicons name="add-outline" color={'#fff'} size={25} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    width: 170,
  },
  image: {
    width: '100%',
    borderTopWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 150,
  },
  infoContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productName: {
    fontSize: 15,
  },
  addButton: {
    backgroundColor: '#2671BC',
    width: 34,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 'auto',
    marginBottom: -15,
  },
});
