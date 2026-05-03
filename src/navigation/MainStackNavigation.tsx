import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../home/screens/home/HomeScreen';
import { Product } from '../interfaces/product.interface';
import ProductScreen from '../home/screens/product/ProductScreen';

export type MainStackParams = {
  HomeScreen: undefined;
  ProductScreen: { product: Product };
};

const Stack = createNativeStackNavigator<MainStackParams>();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
