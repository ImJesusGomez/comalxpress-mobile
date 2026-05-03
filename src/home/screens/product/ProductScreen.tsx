import { RouteProp, useNavigation } from '@react-navigation/native';
import { MainStackParams } from '../../../navigation/MainStackNavigation';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

type Props = {
  route: RouteProp<MainStackParams, 'ProductScreen'>;
};

export default function ProductScreen({ route }: Props) {
  const { product } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => {
      if (prev.includes(id)) {
        return prev.filter(extraId => extraId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubstractQuantity = () => {
    if (quantity <= 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        onPress={() => navigation.pop()}
      />
      <KeyboardAvoidingView style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.headerInfoContainer}>
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.basePrice}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Ionicons
                name="remove-circle"
                onPress={handleSubstractQuantity}
                size={30}
                color={'#acacac'}
              />
              <Text style={styles.quantity}>{quantity}</Text>
              <Ionicons
                name="add-circle"
                onPress={handleAddQuantity}
                size={30}
                color={'#2671BC'}
              />
            </View>
          </View>
          <Text style={styles.productDescription}>{product.description}</Text>
          {product.extras.length !== 0 && (
            <View>
              <Text style={styles.extras}>Extras</Text>
              {product.extras?.map(extra => (
                <View key={extra.id} style={styles.extraContainer}>
                  <Text>{extra.name}</Text>
                  <Switch
                    value={selectedExtras.includes(extra.id)}
                    onValueChange={() => toggleExtra(extra.id)}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={
                      selectedExtras.includes(extra.id) ? '#2671BC' : '#f4f3f4'
                    }
                  />
                </View>
              ))}
            </View>
          )}
          <Text style={styles.notas}>Notas</Text>
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="Agrega una nota sobre tu pedido"
            maxLength={150}
            onChangeText={note => setNotes(note)}
            value={notes}
            style={styles.notasInput}
          />
        </View>
      </KeyboardAvoidingView>
      <Pressable style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Agregar Pedido</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 10,
  },
  productContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
  },
  image: {
    width: '100%',
    borderTopWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 250,
  },
  infoContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 2,
  },
  headerInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  quantity: {
    fontSize: 20,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    fontWeight: '300',
  },
  extraContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  extras: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 13,
  },
  submitButton: {
    backgroundColor: '#327AC2',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 30,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
  notas: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 13,
  },
  notasInput: {
    backgroundColor: '#fff',
    borderRadius: 6,
  },
});
