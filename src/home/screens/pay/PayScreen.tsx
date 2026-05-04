import { RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import { MainStackParams } from '../../../navigation/MainStackNavigation';
import Ionicons from '@react-native-vector-icons/ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { usePayOrder } from '../../hooks/usePayOrder';

type Props = {
  route: RouteProp<MainStackParams, 'PayScreen'>;
};

export const PayScreen = ({ route }: Props) => {
  const { orderId } = route.params;
  const { mutate, isPending } = usePayOrder(orderId);

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const handlePayOrder = () => {
    mutate();
  };

  return (
    <KeyboardAvoidingView
      style={styles.payContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="chevron-back-outline"
          size={28}
          onPress={() => navigation.pop()}
        />
        <Text style={styles.title}>Pagar</Text>
      </View>

      {/* Nombre */}
      <Text style={styles.label}>Nombre del titular</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#999" />
        <TextInput
          style={styles.inputFlex}
          placeholder="Nombre completo"
          autoCapitalize="words"
        />
      </View>

      {/* Número */}
      <Text style={styles.label}>Número de tarjeta</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="card-outline" size={20} color="#999" />
        <TextInput
          style={styles.inputFlex}
          placeholder="1234 5678 9012 3456"
          keyboardType="numeric"
          maxLength={19}
        />
      </View>

      {/* Row */}
      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.label}>Vencimiento</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="calendar-outline" size={20} color="#999" />
            <TextInput
              style={styles.inputFlex}
              placeholder="MM/YY"
              maxLength={5}
            />
          </View>
        </View>

        <View style={styles.half}>
          <Text style={styles.label}>CVV</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" />
            <TextInput
              style={styles.inputFlex}
              keyboardType="numeric"
              secureTextEntry
              maxLength={4}
              placeholder="123"
            />
          </View>
        </View>
      </View>

      {/* Botón */}
      <Pressable style={styles.button} onPress={handlePayOrder}>
        <Text style={styles.buttonText}>
          {isPending ? 'Pagando...' : 'Pagar ahora'}
        </Text>
      </Pressable>

      {/* Seguridad */}
      <Text style={styles.secureText}>🔒 Pago seguro</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  payContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f6f8',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 14,
    color: '#333',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',

    // sombras
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },

  inputFlex: {
    flex: 1,
    padding: 12,
    fontSize: 15,
    color: '#000',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  half: {
    width: '48%',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#3b77b6',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  secureText: {
    textAlign: 'center',
    marginTop: 12,
    color: '#777',
    fontSize: 12,
  },
});
