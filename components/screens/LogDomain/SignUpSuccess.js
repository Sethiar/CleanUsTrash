import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

// Importation du composant Button
import Button from '../../Button';

// Importation des fonctions de navigation
import { goToMainPage } from '../../../navigation/navigation';

const SignUpSuccess = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text
        style={globalStyles.title}>
      CLEAN US TRASH
      </Text>
      <Text
        style={globalStyles.text}>
        Félicitations et merci pour votre inscription.
      </Text>
      <Text
        style={globalStyles.text}>
        Avec votre aide nous laisserons un monde
        plus propre à nos enfants.
      </Text>
      <Button
        title='Commencer'
        onPress={() => goToMainPage(navigation)}
      />
    </View>
  );
};

export default SignUpSuccess;