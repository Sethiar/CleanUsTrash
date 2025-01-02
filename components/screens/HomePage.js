import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';  // Importation des styles

// Importation du composant Button
import Button from '../Button';

import { useNavigation } from '@react-navigation/native';  // Import du hook useNavigation

const HomePage = () => {
  const navigation = useNavigation();  // Utilisation du hook pour obtenir navigation

  // Déclare la fonction goToAuthPage
  const goToAuthPage = () => {
    console.log('Navigating to Auth Page');  // Log pour tester si la fonction est appelée
    navigation.navigate('Auth');  // Naviguer vers l'écran "Auth"
  };

  return (
    <View style={globalStyles.container}>

      {/* Titre */}
      <Text style={globalStyles.title}>CLEAN US TRASH</Text>

      {/* Ligne sous le titre */}
      <View style={globalStyles.separator} />

      {/* Image */}
      <Image source={require('../../assets/earth.png')} style={globalStyles.image} />

      {/* Texte */}
      <Text style={globalStyles.text}>Aidez-nous à sauver la planète</Text>

      {/* Bouton */}
      <Button
        title="Commencer"
        onPress={() => goToAuthPage(navigation)}
      />
    </View>
  );
};

export default HomePage;