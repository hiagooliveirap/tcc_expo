import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/login';
import Constants from 'expo-constants';

import Rotas from './src/rotas/rotas';
// import Teste from './src/cadCliente';

export default function App() {
  return (
      <Rotas />  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
})