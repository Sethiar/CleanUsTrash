//Fichier regroupant les styles des formulaires de l'application
import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

// Importation de typography.js
import { typography } from './typography';

// Importation de colors.js
import { colors } from './colors';

export const formStyles = StyleSheet.create({
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: colors.formPrimary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 30,
    color: colors.black,
    ...typography.kellySlab,
  },
  text: {
    fontSize: 25,
    color: colors.black,
    textAlign: 'center',
    ...typography.kellySlab,
  },
  label: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 5,
      color: '#333',
    },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.colorInput,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 15,
    color: colors.black,
    textAlign: 'left',
    ...typography.kellySlab,
  },
  inputFocused: {
    backgroundColor: colors.white,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    height: height / 4,
  },
  image: {
   width: 260,
   height: 231,
   borderRadius: 16,
 },
});