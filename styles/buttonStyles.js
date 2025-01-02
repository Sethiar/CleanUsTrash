import { StyleSheet } from 'react-native';

// Importation de la typographie
import { typography } from './typography';

// Importation des couleurs
import { colors } from './colors';

export const buttonStyles = StyleSheet.create({
  button: {
    width: 200,
    height: 70,

    // Utilisation de la couleur du bouton
    backgroundColor: colors.buttonGreen,
    borderRadius: 28,
    borderWidth: 1,
    // Utilisation de la couleur noire pour la bordure
    borderColor: colors.black,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // nécessaire pour Android
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {

  // Utilisation de la couleur noire
    color: colors.black,
    fontSize: 30,

    // Utilisation de la typographie centralisée
    ...typography.kellySlab,
  },
});