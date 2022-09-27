import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import Login from '../login';
import Tab from '../rotas/rotasTab';
import CadastroUsuario from '../cadCliente';
import CadastroEnderecoCliente from '../enderecoCliente';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return(
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
            </Stack.Navigator>
            <StatusBar style='light' />
        </NavigationContainer>
    );

}