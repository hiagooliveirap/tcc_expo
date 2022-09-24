import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from '../main';
import Favoritos from '../favoritos';
import Pedidos from '../pedidos';
import Perfil from '../profile';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return(
            <Tab.Navigator>
                <Tab.Screen name='Início' component={Main} options={{    
                     headerShown: false,
                     tabBarActiveTintColor: '#000',                 
                     tabBarStyle: { height: 60},
                     tabBarIconStyle: { marginTop: 8 },
                     tabBarLabelStyle: { marginBottom: 10},
                     tabBarIcon: ({tintColor}) => <Ionicons name='home-outline' size={23} color='gray' />
                    }}
                />            
                <Tab.Screen name='Pedidos' component={Pedidos} options={{ 
                    headerShown: false,
                    tabBarActiveTintColor: '#000',
                    tabBarStyle: { height: 60}, 
                    tabBarIconStyle: { marginTop: 8 }, 
                    tabBarLabelStyle: { marginBottom: 10}, 
                    tabBarIcon: () => <Ionicons name='receipt-outline' size={23} color='gray' />
                    }}                    
                />
                <Tab.Screen name='Favoritos' component={Favoritos} options={{ 
                    headerShown: false,
                    tabBarActiveTintColor: '#000',
                    tabBarStyle: { height: 60}, 
                    tabBarIconStyle: { marginTop: 8 }, 
                    tabBarLabelStyle: { marginBottom: 10}, 
                    tabBarIcon: () => <Ionicons name='heart-outline' size={23} color='gray' />
                    }}
                />
                <Tab.Screen name='Perfil' component={Perfil} options={{ 
                    headerShown: false,
                    tabBarActiveTintColor: '#000',
                    tabBarStyle: { height: 60}, 
                    tabBarIconStyle: { marginTop: 8 }, 
                    tabBarLabelStyle: { marginBottom: 10}, 
                    tabBarIcon: () => <Ionicons name='person-outline' size={23} color='gray' />
                    }}
                />                
            </Tab.Navigator>
    )
}