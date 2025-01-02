import React, { useState } from 'react';

import AppNavigator from './navigation/AppNavigator';  // Importation du fichier AppNavigator
import { SafeAreaView } from 'react-native';

// Import des styles globaux
import { globalStyles } from './styles/globalStyles';

// Import du hook useFonts
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'KellySlab': require('./assets/fonts/KellySlab-Regular.ttf'),
  });

  return (
    <AppNavigator />
  );
};

export default App;