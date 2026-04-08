import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../auth/screens/login/LoginScreen';
import { SignupScreen } from '../auth/screens/signup/SignupScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
