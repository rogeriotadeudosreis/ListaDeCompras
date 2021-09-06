import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Cabecalho } from './components/Header';
import { Footer } from './components/Footer';
import { ListaDeCompras } from './Compra';

export default function App() {
    return (
      <View style={styles.container}>
          <Cabecalho />
          <ListaDeCompras/>
        <Footer/>
      </View>
    );
 }

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#CCC',
alignItems: 'center',
justifyContent: 'center',
},
texto: {
fontSize: 20,
fontWeight: 'bold',
},
});
