import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';  // Importation des styles

// Importation du composant Button
import Button from '../Button';

import { useNavigation } from '@react-navigation/native';  // Import du hook useNavigation

// Importation des fonctions de navigation
import { goToAuthPage } from '../../navigation/navigation';

const HomePage = ({ navigation }) => {

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