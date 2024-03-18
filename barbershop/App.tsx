import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStacks from './src/stacks/MainStacks';

export default function App() {
  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
};