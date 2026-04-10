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
import { useController, useForm } from 'react-hook-form';
import { useSignup } from '../../hooks/useSignup';

export const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const [secure, setSecure] = useState(true);
  const [apiError, setApiError] = useState('');
  const signupMutation = useSignup();

  // useForm con errors
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Nombre
  const { field: nameField } = useController({
    control,
    defaultValue: '',
    name: 'name',
    rules: {
      required: 'El nombre es obligatorio',
      minLength: {
        value: 2,
        message: 'Mínimo 2 caracteres',
      },
      maxLength: {
        value: 50,
        message: 'Máximo 50 caracteres',
      },
    },
  });

  // Apellido
  const { field: lastNameField } = useController({
    control,
    defaultValue: '',
    name: 'lastName',
    rules: {
      required: 'El apellido es obligatorio',
      minLength: {
        value: 2,
        message: 'Mínimo 2 caracteres',
      },
      maxLength: {
        value: 50,
        message: 'Máximo 50 caracteres',
      },
    },
  });

  // Email
  const { field: emailField } = useController({
    control,
    defaultValue: '',
    name: 'email',
    rules: {
      required: 'El correo es obligatorio',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Correo electrónico inválido',
      },
    },
  });

  // Password
  const { field: passwordField } = useController({
    control,
    defaultValue: '',
    name: 'password',
    rules: {
      required: 'La contraseña es obligatoria',
      minLength: {
        value: 6,
        message: 'Mínimo 6 caracteres',
      },
    },
  });

  // Confirm Password
  const { field: repeatPasswordField } = useController({
    control,
    defaultValue: '',
    name: 'repeatPassword',
    rules: {
      required: 'Confirma tu contraseña',
      validate: value =>
        value === passwordField.value || 'Las contraseñas no coinciden',
    },
  });

  const onSubmit = async (data: any) => {
    const { repeatPassword, ...rest } = data;
    console.log({ repeatPassword });

    try {
      await signupMutation.mutateAsync(rest);
    } catch (error: any) {
      const message = error.response?.data?.message;

      if (message?.toLowerCase().includes('email')) {
        setApiError('Este correo ya está registrado');
      } else {
        setApiError('Error inesperado');
      }
    }
  };

  return (
    <LinearGradient
      colors={['#327AC2', '#004080', '#004080']}
      style={authStyles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.signupContainer}>
          <Text style={authStyles.titleInput}>Crear Cuenta</Text>

          {/* Nombre */}
          <Text style={authStyles.headerInput}>Nombre</Text>
          <TextInput
            style={authStyles.input}
            value={nameField.value}
            onChangeText={nameField.onChange}
            onBlur={nameField.onBlur}
          />
          {errors.name && (
            <Text style={styles.error}>{errors.name?.message as string}</Text>
          )}

          {/* Apellido */}
          <Text style={authStyles.headerInput}>Apellidos</Text>
          <TextInput
            style={authStyles.input}
            value={lastNameField.value}
            onChangeText={lastNameField.onChange}
            onBlur={lastNameField.onBlur}
          />
          {errors.lastName && (
            <Text style={styles.error}>
              {errors.lastName?.message as string}
            </Text>
          )}

          {/* Email */}
          <Text style={authStyles.headerInput}>Correo Electrónico</Text>
          <TextInput
            style={authStyles.input}
            inputMode="email"
            value={emailField.value}
            onChangeText={emailField.onChange}
            onBlur={emailField.onBlur}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email?.message as string}</Text>
          )}

          {apiError && <Text style={styles.error}>{apiError}</Text>}

          {/* Password */}
          <Text style={authStyles.headerInput}>Contraseña</Text>
          <TextInput
            secureTextEntry={secure}
            style={authStyles.input}
            autoCorrect={false}
            autoCapitalize="none"
            value={passwordField.value}
            onChangeText={passwordField.onChange}
            onBlur={passwordField.onBlur}
          />
          {errors.password && (
            <Text style={styles.error}>
              {errors.password.message as string}
            </Text>
          )}

          <Pressable onPress={() => setSecure(!secure)}>
            <Text style={authStyles.toggleSecure}>
              {secure ? 'Mostrar' : 'Ocultar'}
            </Text>
          </Pressable>

          {/* Confirm Password */}
          <Text style={authStyles.headerInput}>Repetir Contraseña</Text>
          <TextInput
            secureTextEntry={secure}
            style={authStyles.input}
            autoCorrect={false}
            autoCapitalize="none"
            value={repeatPasswordField.value}
            onChangeText={repeatPasswordField.onChange}
            onBlur={repeatPasswordField.onBlur}
          />
          {errors.repeatPassword && (
            <Text style={styles.error}>
              {errors.repeatPassword?.message as string}
            </Text>
          )}

          <View style={authStyles.separator} />

          {/* Submit */}
          <Pressable
            style={authStyles.submitButton}
            onPress={handleSubmit(onSubmit)}
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
    width: 340,
    borderRadius: 10,
    marginBottom: 40,
    padding: 15,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginBottom: 5,
  },
});
