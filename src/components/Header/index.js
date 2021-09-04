import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lista de Compras</Text>
      <FontAwesomeIcon icon={faShoppingCart} color="#FFF" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(169,69,19, 10)',
    height: 80,
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    color: '#FFF',
    marginRight: 10,
  },
});