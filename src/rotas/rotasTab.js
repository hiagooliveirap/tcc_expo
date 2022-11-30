import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from '../main';
import Produtos from '../produtos';
import Favoritos from '../favoritos';

const Tab = createBottomTabNavigator();

export default function RotasTab({route}) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#ffa500',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
            }}>

            <Tab.Screen
                name='Início'
                initialParams={route.params.info}
                component={Main}
                options={{
                    tabBarStyle: { height: 60 },
                    tabBarIconStyle: { marginTop: 8 },
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({ focused }) => {
                        let color = focused ? '#FFA500' : 'gray';
                        return <Ionicons name='home-outline' size={30} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name='Buscar'
                component={Produtos}
                initialParams={route.params.info}
                options={{
                    tabBarStyle: { height: 60 },
                    tabBarIconStyle: { marginTop: 8 },
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({ focused }) => {
                        let color = focused ? '#FFa500' : 'gray';
                        return <Ionicons name='search-outline' size={30} color={color} />;
                    },
                }}
            />                        
            <Tab.Screen
                name='Favoritos'
                component={Favoritos}
                initialParams={route.params.info}
                options={{
                    tabBarStyle: { height: 60 },
                    tabBarIconStyle: { marginTop: 8 },
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarIcon: ({ focused }) => {
                        let color = focused ? '#FFa500' : 'gray';
                        return <Ionicons name='heart-outline' size={30} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    )
}