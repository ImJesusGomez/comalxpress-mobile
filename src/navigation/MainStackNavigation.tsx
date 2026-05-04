import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../home/screens/home/HomeScreen';
import { Product } from '../interfaces/product.interface';
import ProductScreen from '../home/screens/product/ProductScreen';
import { CartScreen } from '../home/screens/cart/CartScreen';
import { OrdersScreen } from '../home/screens/orders/OrdersScreen';
import { PayScreen } from '../home/screens/pay/PayScreen';

export type MainStackParams = {
  HomeScreen: undefined;
  ProductScreen: { product: Product };
  CartScreen: undefined;
  OrdersScreen: undefined;
  PayScreen: { orderId: string };
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
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="PayScreen" component={PayScreen} />
    </Stack.Navigator>
  );
};
