import {StyleSheet} from 'react-native';

const styles_header = StyleSheet.create({
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

export default styles_header;
