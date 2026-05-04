import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../navigation/MainStackNavigation';

interface HomeHeader {
  userName: string;
}

export const HomeHeader = ({ userName }: HomeHeader) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Bienvenido, {userName}!</Text>
      <View style={styles.iconsContainer}>
        <Ionicons
          name="cart-outline"
          size={30}
          onPress={() => navigation.navigate('CartScreen')}
        />
        <Ionicons
          name="receipt-outline"
          size={28}
          onPress={() => navigation.navigate('OrdersScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 16,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
