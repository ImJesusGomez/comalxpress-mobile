import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../home/screens/home/HomeScreen';

export type MainStackParams = {
  HomeScreen: undefined;
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
    </Stack.Navigator>
  );
};
