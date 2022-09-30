import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../main';
import Produtos from '../produtos';
import Pedidos from '../pedidos';
import Perfil from '../profile';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return(
            <Tab.Navigator>
                <Tab.Screen name='Início' component={Main} />
                <Tab.Screen name='Pedidos' component={Pedidos} />
                <Tab.Screen name='Produtos' component={Produtos} />
                <Tab.Screen name='Perfil' component={Perfil} />
            </Tab.Navigator>
    )
}