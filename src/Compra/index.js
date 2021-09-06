import React from 'react';
import {useState} from 'react';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../assets/styles';

export function ListaDeCompras() {
  // Hools - useState
  const [produto, setProduto] = useState('');
  const [produtos, setProdutos] = useState([]);

  // função para adicionar um item e incluir numa lista com uso do spread
  function handleAdicionarProduto() {
    setProdutos(vetorOld => [...vetorOld, produto]);
    // a linha abaixo ao ser executada limpa o campo
    setProduto('');
  }

  // função para remover o item da lista
  function handleDeleteProduct(prodDelete) {
    setProdutos(vetorOld => vetorOld.filter(prod => prod !== prodDelete));
  }

  function Compras({data}) {
    return (
      <>
        <View style={styles.containerItem}>
          <Text style={styles.textoItem}>{data}</Text>
          <View style={styles.iconeDel}>
            <FontAwesomeIcon
              icon={faTrash}
              color="yellow"
              size={20}
              onPress={() => handleDeleteProduct(data)}
            />
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="Insira um item aqui"
          value={produto}
          onChangeText={setProduto}></TextInput>
        <TouchableOpacity onPress={handleAdicionarProduto}>
          <View style={styles.botao}>
            <Text style={styles.textoBotao}>ADICIONAR</Text>
            <FontAwesomeIcon icon={faCheck} color="#FFF" size={20} />
          </View>
        </TouchableOpacity>
        {/* abaixo apenas um separador de componentes */}
        <View style={styles.separador}></View>
        {/* Renderizando itens da lista de compras com a estrutura FlatList */}
        <View style={styles.containerLista}>
          <FlatList
            data={produtos}
            keyExtractor={item => item}
            renderItem={({item}) => <Compras data={item} />}
          />
        </View>
      </View>
    </>
  );
}
