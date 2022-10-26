import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';

import Login from '../login';
import Tab from '../rotas/rotasTab';
import CadastroUsuario from '../cadCliente';
import CadastroEnderecoCliente from '../enderecoCliente';
import Perfil from '../profile';
import Favoritos from '../favoritos';
import ItemProduto from '../itemProduto';
import EditaPerfil from '../editaPerfil';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    statusBarColor: '#FFA500',
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tab" component={Tab} />
                <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Stack.Screen name="CadastroEnderecoCliente" component={CadastroEnderecoCliente} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Favoritos" component={Favoritos} />
                <Stack.Screen name="ItemProduto" component={ItemProduto} />
                <Stack.Screen name="EditaPerfil" component={EditaPerfil} />
            </Stack.Navigator>
            <StatusBar style='light' />
        </NavigationContainer>
    );

}
