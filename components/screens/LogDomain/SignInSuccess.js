import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

// Importation du composant Button
import Button from '../../Button';

// Importation des fonctions de navigation
import { goToMainPage } from '../../../navigation/navigation';

const SignInSuccess = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text
        style={globalStyles.title}>
      CLEAN US TRASH
      </Text>
      <Text
        style={globalStyles.text}>
        Bonjour pseudo !!
      </Text>
      <Text
        style={globalStyles.text}>
        Que te proposes-tu de faire aujourd'hui'
        afin d'améliorer la condition de la planète'.
      </Text>
      <Button
        title='Commencer'
        onPress={() => goToMainPage(navigation)}
      />
    </View>
  );
};

export default SignInSuccess;