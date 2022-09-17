import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../login';
// import Main from '../main'; 
// import CadastroUsuario from '../cadCliente';
// import CadastroEnderecoCliente from '../enderecoCliente';

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="Main" component={Main} /> */}
                {/* <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Stack.Screen name="CadastroEnderecoCliente" component={CadastroEnderecoCliente} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );

}