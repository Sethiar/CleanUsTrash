import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../components/screens/HomePage';
import AuthPage from '../components/screens/LogDomain/AuthPage';
import LoginPage from '../components/screens/LogDomain/LoginPage';
import SignUpPage from '../components/screens/LogDomain/SignUpPage';
import SignInSuccess from '../components/screens/LogDomain/SignInSuccess';
import SignUpSuccess from '../components/screens/LogDomain/SignUpSuccess';
import MainPage from '../components/screens/MainPages/MainPage';
import MainProcess1 from '../components/screens/MainPages/Process1/MainProcess1';
import MainProcess2 from '../components/screens/MainPages/Process2/MainProcess2';
import MainProcess3 from '../components/screens/MainPages/Process3/MainProcess3';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Auth" component={AuthPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="SignInSuccess" component={SignInSuccess} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="MainProcess1" component={MainProcess1} />
      <Stack.Screen name="MainProcess2" component={MainProcess2} />
      <Stack.Screen name="MainProcess3" component={MainProcess3} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;