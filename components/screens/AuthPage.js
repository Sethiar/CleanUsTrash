import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const AuthPage = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Page d'authentification</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AuthPage;