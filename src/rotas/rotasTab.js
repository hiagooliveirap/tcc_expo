import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from '../main';
import Produtos from '../produtos';
import Perfil from '../profile';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return(
            <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#FFA500',                 
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}>

                <Tab.Screen 
                    name='Início' 
                    component={Main} 
                    options={{                                           
                        tabBarStyle: { height: 60},
                        tabBarIconStyle: { marginTop: 8 },
                        tabBarLabelStyle: { marginBottom: 10},
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? '#FFA500' : 'gray';
                            return <Ionicons name='home-outline' size={23} color={color} />;
                            },
                        }}
                />            
                <Tab.Screen 
                    name='Buscar' 
                    component={Produtos} 
                    options={{                                             
                        tabBarStyle: { height: 60}, 
                        tabBarIconStyle: { marginTop: 8 }, 
                        tabBarLabelStyle: { marginBottom: 10}, 
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? '#FFA500' : 'gray';
                            return <Ionicons name='search-outline' size={23} color={color} />;
                            },
                        }}
                />                
                <Tab.Screen 
                    name='Perfil' 
                    component={Perfil} 
                    options={{                                             
                        tabBarStyle: { height: 60}, 
                        tabBarIconStyle: { marginTop: 8 }, 
                        tabBarLabelStyle: { marginBottom: 10}, 
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? '#FFA500' : 'gray';
                            return <Ionicons name='person-outline' size={23} color={color} />;
                            },
                        }}
                />                
            </Tab.Navigator>
    )
}