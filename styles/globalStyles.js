//Fichier regroupant les styles globaux de l'application
import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

// Importation de typography.js
import { typography } from './typography';

// Importation de colors.js
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 30,
    color: colors.black,
    ...typography.kellySlab,
  },
  separator: {
    height: 3,
    backgroundColor: colors.black,
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 25,
    color: colors.black,
    textAlign: 'center',
    ...typography.kellySlab,
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