import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Rotas from './src/rotas/rotas';

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