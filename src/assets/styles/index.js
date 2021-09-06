import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 18,
    width: 365,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 7,
    textAlign: 'center',
  },
  botao: {
    flexDirection: 'row',
    backgroundColor: 'rgba(169,69,19, 10)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    height: 50,
    width: 150,
    marginBottom: 10,
  },
  textoBotao: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 15,
  },
  separador: {
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#808080',
    marginBottom: 10,
  },
  containerLista: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(139,69,19, 0.8)',
    opacity: 90,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 10,
    // color:#,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  textoItem: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default styles;
