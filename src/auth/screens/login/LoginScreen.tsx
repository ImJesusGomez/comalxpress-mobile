import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RootStackParams } from '../../../navigation/RootStackNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { authStyles } from '../../styles/auth.styles';
import { useController, useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/useLogin';
import { useAuthStore } from '../../../store/auth.store';

export const LoginScreen = () => {
  const { token, user } = useAuthStore();
  console.log({ token, user }); // lo ves en Metro/LogBox

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [secure, setSecure] = useState(true);
  const loginMutation = useLogin();

  // Use Form
  const { control, handleSubmit } = useForm();

  const { field: emailField } = useController({
    control,
    defaultValue: '',
    name: 'email',
  });

  const { field: passwordField } = useController({
    control,
    defaultValue: '',
    name: 'password',
  });

  const onSubmit = async (data: any) => {
    try {
      await loginMutation.mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient
      colors={['#327AC2', '#004080', '#004080']}
      style={authStyles.container}
    >
      {/* Header */}
      <Image
        source={require('../../../../assets/LOGO_.png')}
        style={authStyles.image}
        resizeMode="contain"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.loginContainer}>
          {/* Title */}
          <Text style={authStyles.titleInput}>Iniciar Sesión</Text>

          {/* Inputs */}
          <Text style={authStyles.headerInput}>Correo Electrónico</Text>
          <TextInput
            style={authStyles.input}
            inputMode="email"
            value={emailField.value}
            onChangeText={emailField.onChange}
            onBlur={emailField.onBlur}
          />

          <Text style={authStyles.headerInput}>Contraseña</Text>
          <TextInput
            secureTextEntry={secure}
            style={authStyles.input}
            autoComplete="password"
            autoCorrect
            autoCapitalize="none"
            value={passwordField.value}
            onChangeText={passwordField.onChange}
            onBlur={passwordField.onBlur}
          />

          <Pressable onPress={() => setSecure(!secure)}>
            <Text style={authStyles.toggleSecure}>
              {secure ? 'Mostrar' : 'Ocultar'}
            </Text>
          </Pressable>

          <View style={authStyles.separator} />

          {/* Submit */}
          <Pressable
            style={authStyles.submitButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={authStyles.submitText}>Iniciar Sesión</Text>
          </Pressable>
          <Text style={authStyles.helperText}>
            ¿No tienes una cuenta aún?{' '}
            <Text
              onPress={() => navigation.navigate('SignupScreen')}
              style={authStyles.helperTextNavigation}
            >
              Crear una
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#fff',
    height: 380,
    width: 340,
    borderRadius: 10,
    padding: 15,
  },
});
