import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import styles_header from './styles';

export function Cabecalho() {
  return (
    <View style={styles_header.container}>
      <Text style={styles_header.texto}>Lista de Compras</Text>
      <FontAwesomeIcon icon={faShoppingCart} color="#FFF" size={30} />
    </View>
  );
}
