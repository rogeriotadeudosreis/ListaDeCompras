import React from 'react';
import { Text, View} from 'react-native';
import styles_footer from './styles';


export function Footer() {
  return (
    <View style={styles_footer.containerFooter}>
      <Text style={styles_footer.footer}>
        ADS-5 - Tecnólogo em Análise e Desenvolvimento de Sistemas
      </Text>
    </View>
  );
}

