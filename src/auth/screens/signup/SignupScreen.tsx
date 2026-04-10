import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { AuthStackParams } from '../../../navigation/AuthStackNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { authStyles } from '../../styles/auth.styles';

export const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const [secure, setSecure] = useState(true);

  return (
    <LinearGradient
      colors={['#327AC2', '#004080', '#004080']}
      style={authStyles.container}
    >
      {/* Header */}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.signupContainer}>
          {/* Title */}
          <Text style={authStyles.titleInput}>Crear Cuenta</Text>

          {/* Inputs */}
          <Text style={authStyles.headerInput}>Nombre</Text>
          <TextInput style={authStyles.input} inputMode="text" />

          <Text style={authStyles.headerInput}>Apellidos</Text>
          <TextInput style={authStyles.input} inputMode="text" />

          <Text style={authStyles.headerInput}>Correo Electrónico</Text>
          <TextInput style={authStyles.input} inputMode="email" />

          <Text style={authStyles.headerInput}>Contraseña</Text>
          <TextInput
            secureTextEntry={secure}
            style={authStyles.input}
            autoComplete="password"
            autoCorrect
            autoCapitalize="none"
          />

          <Pressable onPress={() => setSecure(!secure)}>
            <Text style={authStyles.toggleSecure}>
              {secure ? 'Mostrar' : 'Ocultar'}
            </Text>
          </Pressable>

          <Text style={authStyles.headerInput}>Repetir Contraseña</Text>
          <TextInput
            style={authStyles.input}
            secureTextEntry={secure}
            autoComplete="password"
            autoCorrect
            autoCapitalize="none"
          />

          <View style={authStyles.separator} />

          {/* Submit  */}
          <Pressable
            style={authStyles.submitButton}
            onPress={() => console.log('click')}
          >
            <Text style={authStyles.submitText}>Crear Cuenta</Text>
          </Pressable>
          <Text style={authStyles.helperText}>
            ¿Ya tienes una cuenta?{' '}
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={authStyles.helperTextNavigation}
            >
              Iniciar Sesión
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: '#fff',
    height: 580,
    width: 340,
    borderRadius: 10,
    marginBottom: 40,
    padding: 15,
  },
});
