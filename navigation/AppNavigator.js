import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../components/screens/HomePage';
import AuthPage from '../components/screens/AuthPage';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Auth" component={AuthPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;