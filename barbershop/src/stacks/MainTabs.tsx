import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

import Home from '../pages/HomeScreens/Home';
import Favoritos from '../pages/FavoritosScreens/Favoritos';
import Perfil from '../pages/PerfilScreens/Perfil';

export default function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#fff',
                borderTopWidth: 0,
                borderTopLeftRadius: 23,
                borderTopRightRadius: 23,
            }
        }}>

            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <Ionicons name="home" size={size} color={color} />
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />
                }

            }} />

            <Tab.Screen name="Favoritos" component={Favoritos} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <Ionicons name="heart" size={size} color={color} />
                    }
                    return <Ionicons name="heart-outline" size={size} color={color} />
                }

            }} />

            <Tab.Screen name="Perfil" component={Perfil} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <Ionicons name="person" size={size} color={color} />
                    }
                    return <Ionicons name="person-outline" size={size} color={color} />
                }

            }} />

        </Tab.Navigator>
    );
};