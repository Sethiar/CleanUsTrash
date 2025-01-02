import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

// Importation des fonctions de navigation
import { goToLoginPage, goToSignUpPage } from '../../navigation/navigation';


const AuthPage = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Page d'authentification</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.goBack()}
      />

      {/* Lien vers la page de connexion */}
      <TouchableOpacity onPress={() => goToLoginPage(navigation)}>
        <Text style={{ color: 'blue', marginTop: 20 }}>Se connecter</Text>
      </TouchableOpacity>

      {/* Lien vers la page d'inscription */}
      <TouchableOpacity onPress={() => goToSignUpPage(navigation)}>
        <Text style={{ color: 'blue', marginTop: 20 }}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthPage;