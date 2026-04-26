import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

interface HomeHeader {
  userName: string;
}

export const HomeHeader = ({ userName }: HomeHeader) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Bienvenido, {userName}!</Text>
      <View style={styles.iconsContainer}>
        <Ionicons name="cart-outline" size={30} />
        <Ionicons name="notifications-outline" size={30} />
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
