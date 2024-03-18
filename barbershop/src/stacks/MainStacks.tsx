import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import Cadastro from '../pages/CadastroScreens/Cadastro';
import Login from '../pages/LoginScreens/Login';
import MainTabs from './MainTabs';
import Editperfil from '../pages/PerfilScreens/EditPerfil/Editperfil';
import Barber from '../pages/HomeScreens/BarberScreens/Barber';


const Stack = createStackNavigator();
export default function MainStacks() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="MainTabs" component={MainTabs} />

            <Stack.Screen name="Cadastro" component={Cadastro} />

            <Stack.Screen name="EditPerfil" component={Editperfil} />

            <Stack.Screen name="Barber" component={Barber} />
        </Stack.Navigator>
    );
};