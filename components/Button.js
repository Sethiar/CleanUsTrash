import { TouchableOpacity, Text,  } from 'react-native';

import React, { useState } from 'react';

// Importation des styles
import { buttonStyles } from '../styles/buttonStyles';

// Importation des couleurs
import { colors } from '../styles/colors';

const Button = ({ title, onPress }) => {
  // Etat pour savoir si le bouton est pressé
  const [isPressed, setIsPressed] = useState(false);

  // Fonction pour gérer la pression sur le bouton
  const handlePress = () => {
    if (onPress) {
      onPress(); // Appel de la fonction onPress passé en prop
    }
  };

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        {
           backgroundColor: isPressed ? colors.buttonLightBlue : colors.buttonGreen,
        }]
      }

      // Change l'opacité lors du clic
      activeOpacity={0.7}
      // Lorsque le bouton est pressé
      onPressIn={() => setIsPressed(true)}
      // Lorsque le bouton est relaché
      onPressOut={() => setIsPressed(false)}
      onPress={handlePress}
      >

      <Text style={buttonStyles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  );
};

export default Button;