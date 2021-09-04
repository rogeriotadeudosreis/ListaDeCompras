import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Footer() {
  return (
    <View style={styles.containerFooter}>
      <Text style={styles.footer}>
        ADS-5 - Tecnólogo em Análise e Desenvolvimento de Sistemas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFooter: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'rgba(169,69,19, 10)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '100%',
  },
  footer: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
  },
});