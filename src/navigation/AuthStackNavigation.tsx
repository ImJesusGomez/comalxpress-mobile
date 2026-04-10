import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../auth/screens/login/LoginScreen';
import { SignupScreen } from '../auth/screens/signup/SignupScreen';

export type AuthStackParams = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};
