import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

// Importation du composant Button
import Button from '../../Button';

// Importation des fonctions de navigation
import { goToLoginPage, goToSignUpPage } from '../../../navigation/navigation';


const AuthPage = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Page d'authentification</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.goBack()}
      />

      <Button
        title="Se connecter"
        onPress={() => goToLoginPage(navigation)}
      />

      <Button
        title="S'inscrire"
        onPress={() => goToSignUpPage(navigation)}
      />
    </View>
  );
};

export default AuthPage;