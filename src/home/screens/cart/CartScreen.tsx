import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useOrder } from '../../../store/order.store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../../navigation/MainStackNavigation';
import Ionicons from '@react-native-vector-icons/ionicons';
import { mapTemporalOrderToRequest } from '../../hooks/mapTemporalOrderToRequest';
import { useCreateOrder } from '../../hooks/useCreateOrder';

export const CartScreen = () => {
  const { temporalOrder } = useOrder();
  const { mutate, isPending } = useCreateOrder();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const total = temporalOrder.products.reduce((acc, product) => {
    const extrasTotal = (product.extras?.length ?? 0) * 5;

    return acc + (product.product.basePrice * product.quantity + extrasTotal);
  }, 0);

  const handleConfirmOrder = () => {
    const data = mapTemporalOrderToRequest(temporalOrder);

    console.log(data);
    mutate(data);
  };

  return (
    <ScrollView style={styles.cartContainer}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        onPress={() => navigation.pop()}
      />
      <Text style={styles.title}>Mi Carrito</Text>
      {temporalOrder.products.map(product => (
        <View key={product.product.id} style={styles.infoContainer}>
          <View style={styles.productInfoContainer}>
            <Image
              source={{ uri: product.product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productInfoText}>
                {product.quantity} {product.product.name} $
                {product.quantity * product.product.basePrice}
              </Text>
              {product.extras!.length > 0 && (
                <Text>
                  {product.extras?.length} Extra ${product.extras!.length * 5}
                </Text>
              )}
            </View>
          </View>
        </View>
      ))}
      <Text style={styles.total}>Total: ${total}</Text>
      <Pressable
        style={styles.submitButton}
        onPress={handleConfirmOrder}
        disabled={isPending}
      >
        <Text style={styles.submitButtonText}>
          {isPending ? 'Enviando' : 'Confirmar Pedido'}
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#ececec',
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  productInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  productInfoText: {
    fontSize: 18,
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'row',
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#327AC2',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 30,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
