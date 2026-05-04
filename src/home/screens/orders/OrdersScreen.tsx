import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../../navigation/MainStackNavigation';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useGetMyOrders } from '../../hooks/useGetMyOrders';

const customStatus = (status: string) => {
  switch (status) {
    case 'pending':
      return 'Pendiente';
    case 'confirmed':
      return 'Confirmado';
    case 'preparing':
      return 'Preparando';
    case 'ready':
      return 'Listo';
    case 'picked_up':
      return 'Recogido';
    case 'cancelled':
      return 'Cancelado';
    case 'abandoned':
      return 'Abandonado';
    default:
      return 'Estado No Reconocido';
  }
};

export const OrdersScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const { data: myOrders } = useGetMyOrders();

  return (
    <ScrollView style={styles.cartContainer}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        onPress={() => navigation.pop()}
      />
      <Text style={styles.title}>Mis Ordenes</Text>
      {myOrders?.map(order => (
        <View style={styles.infoContainer} key={order.id}>
          <View>
            <Text>ID Orden: {order.id.substring(0, 8)}</Text>
            <Text>Fecha: {new Date(order.createdAt).toLocaleDateString()}</Text>
            <Text>Estado: {customStatus(order.status)}</Text>
            {order.ticketNumber !== null && (
              <Text>Número de Ticket: {order.ticketNumber}</Text>
            )}
          </View>
          <View style={styles.iconsContainer}>
            {order.status === 'pending' ? (
              <Ionicons
                name="alarm-outline"
                size={30}
                style={styles.pendingIcon}
                color={'#fff'}
              />
            ) : order.status === 'confirmed' && order.ticketNumber === null ? (
              <Ionicons
                name="card-outline"
                size={30}
                style={styles.confirmedIcon}
                color={'#fff'}
                onPress={() => {
                  navigation.navigate('PayScreen', { orderId: order.id });
                }}
              />
            ) : order.status === 'preparing' || order.ticketNumber !== null ? (
              <Ionicons
                name="restaurant-outline"
                size={30}
                style={styles.preparingIcon}
                color={'#fff'}
              />
            ) : order.status === 'ready' ? (
              <Ionicons
                name="checkmark-outline"
                size={30}
                style={styles.readyIcon}
                color={'#fff'}
              />
            ) : order.status === 'picked_up' ? (
              <Ionicons
                name="file-tray-full-outline"
                size={30}
                style={styles.pickedUpIcon}
                color={'#fff'}
              />
            ) : (
              <Ionicons
                name="sad-outline"
                size={30}
                style={styles.preparingIcon}
                color={'#fff'}
              />
            )}
          </View>
        </View>
      ))}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingIcon: {
    backgroundColor: '#008c26',
    padding: 10,
    borderRadius: 100,
  },
  confirmedIcon: {
    backgroundColor: '#059af0',
    padding: 10,
    borderRadius: 100,
  },
  preparingIcon: {
    backgroundColor: '#f07a05',
    padding: 10,
    borderRadius: 100,
  },
  readyIcon: {
    backgroundColor: '#f00505',
    padding: 10,
    borderRadius: 100,
  },
  pickedUpIcon: {
    backgroundColor: '#3b00a1',
    padding: 10,
    borderRadius: 100,
  },
  restIcon: {
    backgroundColor: '#636363',
    padding: 10,
    borderRadius: 100,
  },
});
