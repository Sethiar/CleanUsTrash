import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../components/screens/HomePage';
import AuthPage from '../components/screens/AuthPage';
import LoginPage from '../components/screens/LoginPage';
import SignUpPage from '../components/screens/SignUpPage';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Auth" component={AuthPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;