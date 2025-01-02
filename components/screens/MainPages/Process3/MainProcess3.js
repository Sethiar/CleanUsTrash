import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../../styles/globalStyles';

// Importation du composant Button
import Button from '../../../Button';

// Importation des fonctions de navigation
import { goToMainProcess3 } from '../../../../navigation/navigation';


const MainProcess3 = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text
        style={globalStyles.title}>
        CLEAN US TRASH
      </Text>
      <Text
        style={globalStyles.text}>
        Proposer ses services
      </Text>
    </View>
  );
};

export default MainProcess3 ;