import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Login from '../login';
import Tab from '../rotas/rotasTab';
import CadastroUsuario from '../cadCliente';
import Perfil from '../profile';
import Favoritos from '../favoritos';
import ItemProduto from '../itemProduto';
import EditPerfil from '../profile/edit';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                style="dark"
                screenOptions={{
                    headerShown: false,
                    statusBarColor: '#ffa500',
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tab" component={Tab} />
                <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />                
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Favoritos" component={Favoritos} />
                <Stack.Screen name="ItemProduto" component={ItemProduto} />
                <Stack.Screen name="EditPerfil" component={EditPerfil} />
            </Stack.Navigator>
            <StatusBar style='dark' />
        </NavigationContainer>
    );

}
