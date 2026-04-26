import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const HeroBanner = () => {
  return (
    <LinearGradient
      colors={['#315dbb', '#1f396f']}
      style={styles.cardContainer}
    >
      <Image
        source={require('../../../assets/food_banner.png')}
        style={styles.image}
      />

      <Text style={styles.text}>Platillos</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    borderRadius: 15,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    position: 'absolute',
    height: 95,
    width: 200,
    right: 0,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 32,
  },
});
